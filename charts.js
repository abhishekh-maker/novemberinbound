function initCharts() {
  const font = { family: "'Segoe UI',Arial,sans-serif" };
  const tooltip = { backgroundColor:'#1c2a3a', titleFont:{...font,size:12}, bodyFont:{...font,size:11}, padding:10, cornerRadius:8 };
  const list = Object.values(AGENTS).sort((a,b)=>b.cq-a.cq||a.totalErrors-b.totalErrors);
  const keys = Object.keys(PARAM_LABELS);
  const scol = v => v>=95?'#16a34a':v>=85?'#c8a846':'#dc2626';
  const n = list.length;
  new Chart(document.getElementById('scoreChart'), {
    type:'bar',
    data:{ labels:list.map(a=>a.name), datasets:[
      { label:'CQ Score', data:list.map(a=>a.cq), backgroundColor:list.map(a=>scol(a.cq)), borderRadius:6, barPercentage:0.7, categoryPercentage:0.85, order:2 },
      { label:'Team Target 95%', data:Array(n).fill(95), type:'line', borderColor:'#dc2626', borderWidth:2, borderDash:[6,4], pointRadius:0, fill:false, order:1 },
      { label:'Individual Target 85%', data:Array(n).fill(85), type:'line', borderColor:'#f59e0b', borderWidth:1.5, borderDash:[3,3], pointRadius:0, fill:false, order:1 } ]},
    options:{ responsive:true, maintainAspectRatio:false, animation:{duration:1200,easing:'easeOutQuart'}, layout:{padding:{top:16}},
      plugins:{ tooltip, legend:{display:true,position:'bottom',labels:{font:{...font,size:11},boxWidth:12,padding:12,usePointStyle:true}} },
      scales:{ y:{min:70,max:100,ticks:{callback:v=>v+'%',font:{...font,size:11},stepSize:5},grid:{color:'rgba(128,128,128,.1)'}}, x:{ticks:{font:{...font,size:10},maxRotation:60,minRotation:45},grid:{display:false}} } },
    plugins:[{ id:'barLabels', afterDatasetsDraw(chart){ const ctx=chart.ctx; ctx.save(); chart.getDatasetMeta(0).data.forEach((bar,i)=>{ if(bar.height<14) return; ctx.fillStyle='#fff'; ctx.font='bold 10px Segoe UI,Arial,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText(chart.data.datasets[0].data[i]+'%',bar.x,bar.y+bar.height*0.5); }); ctx.restore(); } }]
  });
  const tp = keys.map(k=>({k, v:list.reduce((s,a)=>s+a.params[k],0)})).filter(x=>x.v>0).sort((a,b)=>b.v-a.v);
  new Chart(document.getElementById('errorChart'), {
    type:'doughnut',
    data:{ labels:tp.map(x=>PARAM_LABELS[x.k]), datasets:[{ data:tp.map(x=>x.v), backgroundColor:tp.map(x=>PARAM_COLORS[x.k]), borderWidth:2, borderColor:'#fff', hoverOffset:8 }] },
    options:{ responsive:true, maintainAspectRatio:false, animation:{animateRotate:true,animateScale:true,duration:1200,easing:'easeOutQuart'},
      plugins:{ tooltip, legend:{display:true,position:'bottom',labels:{font:{...font,size:11},boxWidth:12,padding:10,usePointStyle:true}} }, cutout:'58%' },
    plugins:[{ id:'doughnutLabels', afterDatasetsDraw(chart){ const ctx=chart.ctx; const d=chart.data.datasets[0].data; const total=d.reduce((a,b)=>a+b,0); ctx.save(); chart.getDatasetMeta(0).data.forEach((arc,i)=>{ const pct=Math.round(d[i]/total*100); if(pct<6) return; const ang=(arc.startAngle+arc.endAngle)/2, r=(arc.innerRadius+arc.outerRadius)/2; ctx.fillStyle='#fff'; ctx.font='bold 11px Segoe UI,Arial,sans-serif'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText(pct+'%',arc.x+r*Math.cos(ang),arc.y+r*Math.sin(ang)); }); ctx.restore(); } }]
  });
  const be = [...list].sort((a,b)=>b.totalErrors-a.totalErrors);
  new Chart(document.getElementById('agentErrorChart'), {
    type:'bar',
    data:{ labels:be.map(a=>a.name), datasets:[{ label:'Total Errors', data:be.map(a=>a.totalErrors), backgroundColor:be.map(a=>a.totalErrors>=8?'#dc2626':a.totalErrors>=5?'#ea580c':'#0891b2'), borderRadius:6, barPercentage:0.7, categoryPercentage:0.85 }] },
    options:{ responsive:true, maintainAspectRatio:false, indexAxis:'y', animation:{duration:1200,easing:'easeOutQuart'}, layout:{padding:{right:28}},
      plugins:{ tooltip, legend:{display:false} },
      scales:{ x:{min:0,max:Math.max(...be.map(a=>a.totalErrors))+2,ticks:{font:{...font,size:11},stepSize:2},grid:{color:'rgba(128,128,128,.1)'}}, y:{ticks:{font:{...font,size:11}},grid:{display:false}} } },
    plugins:[{ id:'hbarLabels', afterDatasetsDraw(chart){ const ctx=chart.ctx; ctx.save(); chart.getDatasetMeta(0).data.forEach((bar,i)=>{ ctx.fillStyle='#8a7a60'; ctx.font='bold 11px Segoe UI,Arial,sans-serif'; ctx.textAlign='left'; ctx.textBaseline='middle'; ctx.fillText(chart.data.datasets[0].data[i],bar.x+6,bar.y); }); ctx.restore(); } }]
  });
  buildHeatmap();
}
function buildHeatmap() {
  const container = document.getElementById('heatmapContainer'); if (!container) return;
  const list = Object.values(AGENTS).sort((a,b)=>b.cq-a.cq||a.totalErrors-b.totalErrors);
  const keys = Object.keys(PARAM_LABELS);
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const L = isDark
    ? [{bg:'#052e16',bd:'#166534',tx:'#4ade80'},{bg:'#422006',bd:'#a16207',tx:'#fde68a'},{bg:'#431407',bd:'#c2410c',tx:'#fed7aa'},{bg:'#450a0a',bd:'#991b1b',tx:'#fca5a5'},{bg:'#7f1d1d',bd:'#dc2626',tx:'#fff'}]
    : [{bg:'#f0fdf4',bd:'#bbf7d0',tx:'#166534'},{bg:'#fef9c3',bd:'#fde047',tx:'#713f12'},{bg:'#fed7aa',bd:'#fb923c',tx:'#7c2d12'},{bg:'#fca5a5',bd:'#ef4444',tx:'#7f1d1d'},{bg:'#dc2626',bd:'#dc2626',tx:'#fff'}];
  const cell = v => L[Math.min(v,4)];
  const txP = isDark?'#e8e4f0':'#1c2a3a', txS = isDark?'#9c8a70':'#8a7a60';
  let h = `<div style="overflow-x:auto;"><table style="width:100%;border-collapse:separate;border-spacing:4px;min-width:520px;"><thead><tr><th style="font-size:11px;font-weight:600;color:${txS};text-align:left;padding:2px 8px;">Agent</th>`;
  keys.forEach(k=>{ h += `<th style="font-size:10px;font-weight:600;color:${txS};text-align:center;padding:2px 4px;white-space:nowrap;">${PARAM_SHORT[k]}</th>`; });
  h += `</tr></thead><tbody>`;
  list.forEach(a=>{
    h += `<tr><td style="font-size:12px;font-weight:600;padding:3px 8px;white-space:nowrap;color:${txP};">${a.name}</td>`;
    keys.forEach(k=>{ const v=a.params[k], c=cell(v); h += `<td style="padding:2px;"><div style="background:${c.bg};border:1px solid ${c.bd};border-radius:8px;padding:6px 2px;text-align:center;font-size:13px;font-weight:700;color:${c.tx};min-width:32px;">${v===0?'✓':v}</div></td>`; });
    h += `</tr>`;
  });
  h += `</tbody></table></div><div style="display:flex;align-items:center;gap:8px;margin-top:12px;justify-content:center;flex-wrap:wrap;"><span style="font-size:11px;color:${txS};">0</span><div style="display:flex;gap:3px;">${L.map(c=>`<div style="width:16px;height:16px;border-radius:3px;background:${c.bg};border:1px solid ${c.bd};"></div>`).join('')}</div><span style="font-size:11px;color:${txS};">4+</span><span style="font-size:10px;color:${txS};margin-left:4px;">✓ = no flags &nbsp;·&nbsp; lower is better</span></div>`;
  container.innerHTML = h;
}
document.addEventListener('DOMContentLoaded', () => {
  initCharts();
  new MutationObserver(() => buildHeatmap()).observe(document.documentElement, { attributes:true, attributeFilter:['data-theme'] });
});
