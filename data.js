const AGENTS = {
 "sweetys": {
  "name": "Sweety_S",
  "initials": "SS",
  "cq": 99,
  "audits": 4,
  "ncf": 0,
  "totalErrors": 1,
  "params": {
   "opening": 0,
   "probing": 0,
   "sales": 0,
   "softskills": 0,
   "closing": 1,
   "followup": 0
  },
  "aois": [
   {
    "cat": "closing",
    "label": "Closing",
    "text": "Closing — flagged on 1 of 4 audits; the attribute detail is missing in the audit sheet, so review those chats for specifics."
   }
  ],
  "cases": [
   {
    "query": "SKU related query · 17 Nov",
    "score": 100,
    "comment": "Good work!!  Customer Experience Score: 100 · Channel: Inbound · FCR: Yes"
   },
   {
    "query": "PoP - Redemption · 16 Nov",
    "score": 100,
    "comment": "Good work!!  Customer Experience Score: 100 · Channel: Inbound · FCR: Yes"
   },
   {
    "query": "Jewellery Selection · 24 Nov",
    "score": 100,
    "comment": "Good work!!  Customer Experience Score: 100 · Channel: Call · FCR: Yes"
   },
   {
    "query": "Customization - Existing Design · 17 Nov",
    "score": 98,
    "comment": "Closing (slight): attribute detail missing in the audit sheet. Customer Experience Score: 100 · Channel: Inbound · FCR: Yes"
   }
  ],
  "paramCaseMap": {
   "opening": [],
   "probing": [],
   "sales": [],
   "softskills": [],
   "closing": [
    3
   ],
   "followup": []
  },
  "color": "#0891b2"
 },
 "amirsh": {
  "name": "Amir_Sh",
  "initials": "AS",
  "cq": 94,
  "audits": 4,
  "ncf": 0,
  "totalErrors": 5,
  "params": {
   "opening": 1,
   "probing": 0,
   "sales": 0,
   "softskills": 3,
   "closing": 1,
   "followup": 0
  },
  "aois": [
   {
    "cat": "opening",
    "label": "Opening",
    "text": "Confirm the customer's name in the opening."
   },
   {
    "cat": "softskills",
    "label": "Soft Skills",
    "text": "Personalization — use the customer's name at least 3 times (max 4) during the interaction."
   },
   {
    "cat": "closing",
    "label": "Closing",
    "text": "Closing flags were recorded under personalization / tone (name use 3–4 times, steady pitch and pace) — confirm the attribute placement in the audit sheet."
   }
  ],
  "cases": [
   {
    "query": "SKU related query · 16 Nov",
    "score": 100,
    "comment": "Good work!!  Customer Experience Score: 100 · Channel: Inbound · Audit reason: Negative sentiment · FCR: Yes"
   },
   {
    "query": "Wants to place order · 16 Nov",
    "score": 93,
    "comment": "Opening (slight): Name confirmation. Soft Skills (slight): Personalization - taking Cx name atleast 3 times max 4. Customer Experience Score: 100 · Channel: Inbound · FCR: Yes"
   },
   {
    "query": "Jewellery Selection · 20 Nov",
    "score": 88,
    "comment": "Soft Skills (significant): attribute detail missing in the audit sheet. Closing (slight): Personalization - taking Cx name atleast 3 times max 4, Failed to portray empathy when necessary. Customer Experience Score: 75 · Channel: Inbound · FCR: Yes"
   },
   {
    "query": "Customization - Existing Design · 17 Nov",
    "score": 95,
    "comment": "Soft Skills (slight): attribute detail missing in the audit sheet. Customer Experience Score: 75 · Channel: Inbound · FCR: Yes"
   }
  ],
  "paramCaseMap": {
   "opening": [
    1
   ],
   "probing": [],
   "sales": [],
   "softskills": [
    1,
    2,
    3
   ],
   "closing": [
    2
   ],
   "followup": []
  },
  "color": "#16a34a"
 },
 "rahulyadavp": {
  "name": "Rahulyadav_P",
  "initials": "RP",
  "cq": 94,
  "audits": 4,
  "ncf": 0,
  "totalErrors": 5,
  "params": {
   "opening": 0,
   "probing": 0,
   "sales": 0,
   "softskills": 4,
   "closing": 1,
   "followup": 0
  },
  "aois": [
   {
    "cat": "softskills",
    "label": "Soft Skills",
    "text": "Personalization — use the customer's name at least 3 times (max 4) during the interaction. (seen on 2 audits)"
   },
   {
    "cat": "closing",
    "label": "Closing",
    "text": "Pitch the CSAT survey before closing."
   },
   {
    "cat": "closing",
    "label": "Closing",
    "text": "Tag correctly and update the systems before closing."
   }
  ],
  "cases": [
   {
    "query": "Wants to place order · 17 Nov",
    "score": 90,
    "comment": "Soft Skills (slight): Personalization - taking Cx name atleast 3 times max 4. Closing (significant): Was CSAT Survey Pitched?, Tagged corretly and Systems are updated. Customer Experience Score: 50 · Channel: Inbound · FCR: No"
   },
   {
    "query": "SKU related query · 17 Nov",
    "score": 95,
    "comment": "Soft Skills (slight): Personalization - taking Cx name atleast 3 times max 4. Customer Experience Score: 100 · Channel: Inbound · FCR: Yes"
   },
   {
    "query": "Jewellery Selection · 24 Nov",
    "score": 95,
    "comment": "Soft Skills (slight): attribute detail missing in the audit sheet. Customer Experience Score: 75 · Channel: Call · FCR: Yes"
   },
   {
    "query": "Jewellery Selection · 18 Nov",
    "score": 95,
    "comment": "Soft Skills (slight): attribute detail missing in the audit sheet. Customer Experience Score: 75 · Channel: Call · FCR: Yes"
   }
  ],
  "paramCaseMap": {
   "opening": [],
   "probing": [],
   "sales": [],
   "softskills": [
    0,
    1,
    2,
    3
   ],
   "closing": [
    0
   ],
   "followup": []
  },
  "color": "#7c3aed"
 },
 "abdulsalamk": {
  "name": "Abdulsalam_K",
  "initials": "AK",
  "cq": 92,
  "audits": 4,
  "ncf": 0,
  "totalErrors": 4,
  "params": {
   "opening": 1,
   "probing": 0,
   "sales": 1,
   "softskills": 2,
   "closing": 0,
   "followup": 0
  },
  "aois": [
   {
    "cat": "opening",
    "label": "Opening",
    "text": "Acknowledge the customer's occasion (wishing) in the opening."
   },
   {
    "cat": "softskills",
    "label": "Soft Skills",
    "text": "Empathy — acknowledge the customer's feelings when needed."
   },
   {
    "cat": "sales",
    "label": "Sales Closure",
    "text": "Give a complete and correct solution."
   }
  ],
  "cases": [
   {
    "query": "Wants to know Offers/Discounts · 16 Nov",
    "score": 93,
    "comment": "Opening (slight): Acknowledge occasion (Wishing). Soft Skills (slight): Failed to portray empathy when necessary. Customer Experience Score: 100 · Channel: Inbound · FCR: Yes"
   },
   {
    "query": "SKU related query · 16 Nov",
    "score": 100,
    "comment": "Good work!!  Customer Experience Score: 100 · Channel: Inbound · FCR: Yes"
   },
   {
    "query": "Customization - New Design · 16 Nov",
    "score": 90,
    "comment": "Soft Skills (significant): attribute detail missing in the audit sheet. Customer Experience Score: 75 · Channel: Call · FCR: Yes"
   },
   {
    "query": "Customization - New Design · 16 Nov",
    "score": 85,
    "comment": "Sales Closure (slight): Giving Complete and Correct Solution. Non-converted reason: Did not probed related to the LTE and LTB. Customer Experience Score: 75 · Channel: Call · Audit reason: Dislike · FCR: Yes"
   }
  ],
  "paramCaseMap": {
   "opening": [
    0
   ],
   "probing": [],
   "sales": [
    3
   ],
   "softskills": [
    0,
    2
   ],
   "closing": [],
   "followup": []
  },
  "color": "#ea580c"
 },
 "yogeshr": {
  "name": "Yogesh_R",
  "initials": "YR",
  "cq": 91,
  "audits": 4,
  "ncf": 0,
  "totalErrors": 5,
  "params": {
   "opening": 1,
   "probing": 1,
   "sales": 0,
   "softskills": 3,
   "closing": 0,
   "followup": 0
  },
  "aois": [
   {
    "cat": "opening",
    "label": "Opening",
    "text": "Confirm the customer's name in the opening."
   },
   {
    "cat": "softskills",
    "label": "Soft Skills",
    "text": "Personalization — use the customer's name at least 3 times (max 4) during the interaction."
   },
   {
    "cat": "probing",
    "label": "Probing",
    "text": "Discovery questions &amp; one-view probing — identify the customer's jewellery, delivery and payment needs in one structured pass."
   }
  ],
  "cases": [
   {
    "query": "Return Policy · 17 Nov",
    "score": 100,
    "comment": "Good work!!  Customer Experience Score: 100 · Channel: Inbound · FCR: Yes"
   },
   {
    "query": "Jewellery Selection · 17 Nov",
    "score": 93,
    "comment": "Opening (slight): Name confirmation. Soft Skills (slight): Personalization - taking Cx name atleast 3 times max 4. Non-converted reason: Cx will visit the store. Customer Experience Score: 100 · Channel: Inbound · FCR: Yes"
   },
   {
    "query": "Customization - Existing Design · 19 Nov",
    "score": 95,
    "comment": "Soft Skills (slight): attribute detail missing in the audit sheet. Customer Experience Score: 75 · Channel: Inbound · FCR: Yes"
   },
   {
    "query": "Customization - Existing Design · 19 Nov",
    "score": 75,
    "comment": "Probing (slight): One view Probing. Soft Skills (significant): attribute detail missing in the audit sheet. Customer Experience Score: 75 · Channel: Call · FCR: Yes"
   }
  ],
  "paramCaseMap": {
   "opening": [
    1
   ],
   "probing": [
    3
   ],
   "sales": [],
   "softskills": [
    1,
    2,
    3
   ],
   "closing": [],
   "followup": []
  },
  "color": "#dc2626"
 },
 "omairs": {
  "name": "Omair_S",
  "initials": "OS",
  "cq": 89,
  "audits": 4,
  "ncf": 0,
  "totalErrors": 8,
  "params": {
   "opening": 3,
   "probing": 1,
   "sales": 0,
   "softskills": 3,
   "closing": 1,
   "followup": 0
  },
  "aois": [
   {
    "cat": "opening",
    "label": "Opening",
    "text": "Confirm the customer's name in the opening. (seen on 2 audits)"
   },
   {
    "cat": "softskills",
    "label": "Soft Skills",
    "text": "Personalization — use the customer's name at least 3 times (max 4) during the interaction."
   },
   {
    "cat": "opening",
    "label": "Opening",
    "text": "Acknowledge the customer's occasion (wishing) in the opening."
   },
   {
    "cat": "probing",
    "label": "Probing",
    "text": "Discovery questions &amp; one-view probing — identify the customer's jewellery, delivery and payment needs in one structured pass."
   },
   {
    "cat": "closing",
    "label": "Closing",
    "text": "Closing flags were recorded under personalization / tone (name use 3–4 times, steady pitch and pace) — confirm the attribute placement in the audit sheet."
   }
  ],
  "cases": [
   {
    "query": "SKU related query · 17 Nov",
    "score": 98,
    "comment": "Opening (slight): Name confirmation. Customer Experience Score: 100 · Channel: Inbound · FCR: Yes"
   },
   {
    "query": "Wants to know Offers/Discounts · 16 Nov",
    "score": 93,
    "comment": "Opening (slight): Name confirmation. Soft Skills (slight): Personalization - taking Cx name atleast 3 times max 4. Customer Experience Score: 75 · Channel: Inbound · FCR: Yes"
   },
   {
    "query": "Jewellery Selection · 24 Nov",
    "score": 88,
    "comment": "Opening (slight): Acknowledge occasion (Wishing). Soft Skills (significant): attribute detail missing in the audit sheet. Customer Experience Score: 75 · Channel: Call · FCR: Yes"
   },
   {
    "query": "Jewellery Selection · 18 Nov",
    "score": 78,
    "comment": "Probing (slight): Discovery Questions (Identifying the need of customer - 'Jewellery' 'Delivery' &amp; 'Payment'). Soft Skills (slight): attribute detail missing in the audit sheet. Closing (slight): Tone of the JC (Pitch and pace). Customer Experience Score: 75 · Channel: Call · FCR: Yes"
   }
  ],
  "paramCaseMap": {
   "opening": [
    0,
    1,
    2
   ],
   "probing": [
    3
   ],
   "sales": [],
   "softskills": [
    1,
    2,
    3
   ],
   "closing": [
    3
   ],
   "followup": []
  },
  "color": "#c8a846"
 },
 "mayureshm": {
  "name": "Mayuresh_M",
  "initials": "MM",
  "cq": 87,
  "audits": 4,
  "ncf": 0,
  "totalErrors": 9,
  "params": {
   "opening": 1,
   "probing": 1,
   "sales": 0,
   "softskills": 4,
   "closing": 3,
   "followup": 0
  },
  "aois": [
   {
    "cat": "softskills",
    "label": "Soft Skills",
    "text": "Personalization — use the customer's name at least 3 times (max 4) during the interaction. (seen on 2 audits)"
   },
   {
    "cat": "closing",
    "label": "Closing",
    "text": "Closing flags were recorded under personalization / tone (name use 3–4 times, steady pitch and pace) — confirm the attribute placement in the audit sheet. (seen on 2 audits)"
   },
   {
    "cat": "opening",
    "label": "Opening",
    "text": "Confirm the customer's name in the opening."
   },
   {
    "cat": "closing",
    "label": "Closing",
    "text": "Pitch the CSAT survey before closing."
   },
   {
    "cat": "probing",
    "label": "Probing",
    "text": "Discovery questions &amp; one-view probing — identify the customer's jewellery, delivery and payment needs in one structured pass."
   }
  ],
  "cases": [
   {
    "query": "SKU related query · 17 Nov",
    "score": 88,
    "comment": "Opening (significant): Name confirmation. Soft Skills (slight): Personalization - taking Cx name atleast 3 times max 4. Closing (slight): Was CSAT Survey Pitched?. Non-converted reason: Cx placed the order. Customer Experience Score: 100 · Channel: Inbound · FCR: Yes"
   },
   {
    "query": "SKU related query · 16 Nov",
    "score": 95,
    "comment": "Soft Skills (slight): Personalization - taking Cx name atleast 3 times max 4. Customer Experience Score: 100 · Channel: Inbound · Audit reason: Negative sentiment · FCR: Yes"
   },
   {
    "query": "Product Availability in Store · 20 Nov",
    "score": 93,
    "comment": "Soft Skills (slight): attribute detail missing in the audit sheet. Closing (slight): Personalization - taking Cx name atleast 3 times max 4. Customer Experience Score: 75 · Channel: Inbound · FCR: Yes"
   },
   {
    "query": "Customization - Existing Design · 17 Nov",
    "score": 73,
    "comment": "Probing (slight): One view Probing. Soft Skills (significant): attribute detail missing in the audit sheet. Closing (slight): Personalization - taking Cx name atleast 3 times max 4, Tone of the JC (Pitch and pace). Customer Experience Score: 75 · Channel: Inbound · FCR: Yes"
   }
  ],
  "paramCaseMap": {
   "opening": [
    0
   ],
   "probing": [
    3
   ],
   "sales": [],
   "softskills": [
    0,
    1,
    2,
    3
   ],
   "closing": [
    0,
    2,
    3
   ],
   "followup": []
  },
  "color": "#2563eb"
 },
 "aadeshn": {
  "name": "Aadesh_N",
  "initials": "AN",
  "cq": 66,
  "audits": 4,
  "ncf": 0,
  "totalErrors": 12,
  "params": {
   "opening": 2,
   "probing": 3,
   "sales": 1,
   "softskills": 4,
   "closing": 2,
   "followup": 0
  },
  "aois": [
   {
    "cat": "probing",
    "label": "Probing",
    "text": "Discovery questions &amp; one-view probing — identify the customer's jewellery, delivery and payment needs in one structured pass. (seen on 3 audits)"
   },
   {
    "cat": "opening",
    "label": "Opening",
    "text": "Give the self &amp; CaratLane introduction on time. (seen on 2 audits)"
   },
   {
    "cat": "opening",
    "label": "Opening",
    "text": "Confirm the customer's name in the opening."
   },
   {
    "cat": "sales",
    "label": "Sales Closure",
    "text": "Give a complete and correct solution."
   },
   {
    "cat": "softskills",
    "label": "Soft Skills",
    "text": "Assurances &amp; acknowledgement — use positive phrases to keep the customer confident."
   },
   {
    "cat": "closing",
    "label": "Closing",
    "text": "Pitch the CSAT survey before closing."
   },
   {
    "cat": "closing",
    "label": "Closing",
    "text": "Tag correctly and update the systems before closing."
   },
   {
    "cat": "closing",
    "label": "Closing",
    "text": "Active listening — do not make the customer repeat information."
   },
   {
    "cat": "softskills",
    "label": "Soft Skills",
    "text": "Personalization — use the customer's name at least 3 times (max 4) during the interaction."
   },
   {
    "cat": "closing",
    "label": "Closing",
    "text": "Closing flags were recorded under personalization / tone (name use 3–4 times, steady pitch and pace) — confirm the attribute placement in the audit sheet."
   }
  ],
  "cases": [
   {
    "query": "Jewellery Selection · 16 Nov",
    "score": 25,
    "comment": "Opening (significant): Name confirmation, Self &amp; CaratLane introduction given on Time. Probing (significant): Discovery Questions (Identifying the need of customer - 'Jewellery' 'Delivery' &amp; 'Payment'), One view Probing. Sales Closure (significant): Giving Complete and Correct Solution. Soft Skills (slight): Assurances and acknowledgement (using Positive phrases). Closing (significant): Customer was not made to repeat. Active listening/ Attention on the Query, Was CSAT Survey Pitched?, Tagged corretly and Systems are updated. Non-converted reason: JC missed on sales closure efforts and provided no assurances. Customer Experience Score: 100 · Channel: Inbound · FCR: Yes"
   },
   {
    "query": "Wants to know Offers/Discounts · 16 Nov",
    "score": 93,
    "comment": "Opening (slight): Self &amp; CaratLane introduction given on Time. Soft Skills (slight): Personalization - taking Cx name atleast 3 times max 4. Customer Experience Score: 100 · Channel: Inbound · FCR: Yes"
   },
   {
    "query": "Customization - Existing Design · 19 Nov",
    "score": 75,
    "comment": "Probing (slight): One view Probing. Soft Skills (significant): attribute detail missing in the audit sheet. Customer Experience Score: 75 · Channel: Inbound · FCR: Yes"
   },
   {
    "query": "Customization - Existing Design · 17 Nov",
    "score": 73,
    "comment": "Probing (slight): One view Probing. Soft Skills (significant): attribute detail missing in the audit sheet. Closing (slight): Personalization - taking Cx name atleast 3 times max 4, Tone of the JC (Pitch and pace). Customer Experience Score: 50 · Channel: Call · Audit reason: Dislike · FCR: No"
   }
  ],
  "paramCaseMap": {
   "opening": [
    0,
    1
   ],
   "probing": [
    0,
    2,
    3
   ],
   "sales": [
    0
   ],
   "softskills": [
    0,
    1,
    2,
    3
   ],
   "closing": [
    0,
    3
   ],
   "followup": []
  },
  "color": "#db2777"
 },
 "nehan": {
  "name": "Neha_N",
  "initials": "NN",
  "cq": 63,
  "audits": 4,
  "ncf": 1,
  "totalErrors": 11,
  "params": {
   "opening": 2,
   "probing": 3,
   "sales": 1,
   "softskills": 3,
   "closing": 1,
   "followup": 1
  },
  "aois": [
   {
    "cat": "probing",
    "label": "Probing",
    "text": "Discovery questions &amp; one-view probing — identify the customer's jewellery, delivery and payment needs in one structured pass. (seen on 2 audits)"
   },
   {
    "cat": "sales",
    "label": "Sales Closure",
    "text": "Attract towards sales — talk about xCL, offers, PoP, coupons and new collections, and recommend jewellery / alternatives."
   },
   {
    "cat": "softskills",
    "label": "Soft Skills",
    "text": "Assurances &amp; acknowledgement — use positive phrases to keep the customer confident."
   },
   {
    "cat": "softskills",
    "label": "Soft Skills",
    "text": "Grammar &amp; language — avoid grammatical errors."
   },
   {
    "cat": "closing",
    "label": "Closing",
    "text": "Tag correctly and update the systems before closing."
   },
   {
    "cat": "followup",
    "label": "Follow Up",
    "text": "Follow up as per guidelines and commitment."
   },
   {
    "cat": "opening",
    "label": "Opening",
    "text": "Acknowledge the customer's occasion (wishing) in the opening."
   }
  ],
  "cases": [
   {
    "query": "Jewellery Selection · 17 Nov",
    "score": 0,
    "comment": "Probing (slight): Discovery Questions (Identifying the need of customer - 'Jewellery' 'Delivery' &amp; 'Payment'), One view Probing. Sales Closure (slight): Attracting towards sales(Sales closure)Talking about 'xCL''Offers''PoP ''Coupons' 'New Collections' etc Pitching other service when relevant, Jewellery Recommendation/ Offer Alternatives. Soft Skills (slight): Grammatical errors and language , Assurances and acknowledgement (using Positive phrases). Closing (significant): Tagged corretly and Systems are updated. Follow Up (NCF): Follow up done as per guidelines &amp; commitment. Non-converted reason: JC made no sales closure efforts. Customer Experience Score: 75 · Channel: Inbound · FCR: Yes"
   },
   {
    "query": "22kt/ Glitter Designs · 16 Nov",
    "score": 78,
    "comment": "Opening (slight): attribute detail missing in the audit sheet. Probing (slight): attribute detail missing in the audit sheet. Soft Skills (slight): attribute detail missing in the audit sheet. Non-converted reason: Cx was looking for EMI. Customer Experience Score: 100 · Channel: Inbound · FCR: Yes"
   },
   {
    "query": "Product Availability in Store · 20 Nov",
    "score": 75,
    "comment": "Probing (slight): One view Probing. Soft Skills (significant): attribute detail missing in the audit sheet. Customer Experience Score: 75 · Channel: Inbound · FCR: Yes"
   },
   {
    "query": "Jewellery Selection · 18 Nov",
    "score": 98,
    "comment": "Opening (slight): Acknowledge occasion (Wishing). Customer Experience Score: 100 · Channel: Call · FCR: Yes"
   }
  ],
  "paramCaseMap": {
   "opening": [
    1,
    3
   ],
   "probing": [
    0,
    1,
    2
   ],
   "sales": [
    0
   ],
   "softskills": [
    0,
    1,
    2
   ],
   "closing": [
    0
   ],
   "followup": [
    0
   ]
  },
  "color": "#0d9488"
 }
};

const PARAM_LABELS = {"opening": "Opening", "probing": "Probing", "sales": "Sales Closure", "softskills": "Soft Skills", "closing": "Closing", "followup": "Follow Up"};
const PARAM_SHORT = {"opening": "Opening", "probing": "Probing", "sales": "Sales Closure", "softskills": "Soft Skills", "closing": "Closing", "followup": "Follow Up"};
const PARAM_COLORS = {"opening": "#2563eb", "probing": "#7c3aed", "sales": "#dc2626", "softskills": "#ea580c", "closing": "#0891b2", "followup": "#16a34a"};
