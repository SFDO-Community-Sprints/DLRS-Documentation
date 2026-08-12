---
title: "Campaign: Total Amount Won from Opportunity Record Type or Lead Source"
anchor: "campaign-total-amount-won-from-opportunity-record-type-or-lead-source"
category: "opportunities-payments-allocations"
category_url: "Opportunities,-Payments,-Allocations.html"
category_label: "Opportunities, Payments, Allocations"
op: "Sum"
mode: "Realtime"
mode_class: "realtime"
parent_object: "Campaign"
---

**Description**

> These are two variations for summarizing the total amount of a specific category of won Opportunities on a Campaign record. The first is for a specific Record Type of 'Donation' (from Laurel Taylor), and the second is for Opportunities where the Lead Source is 'Web' (from Amy Utkan).

**Objects, Fields, Relationships**

| Field | Value |
| ------- | -------- |
| Parent Object                      | `Campaign`                                                                        |
| Child Object                       | `Opportunity`                                                                     |
| Relationship Field                 | `CampaignId`                                                                      |
| Relationship Criteria (SOQL Query) | `RecordType.Name = Donation AND Stage <> ‘Closed Lost’` _or_ `LeadSource = ‘Web’` |
| Relationship Criteria Fields       | `RecordType.Name, Stage` _or_ `LeadSource`                                        |
| Field to Aggregate                 | `Amount`                                                                          |
| Order By Field                     | n/a                                                                               |
| Aggregate Operation                | `SUM`                                                                             |
| Aggregate Result Field             | `Total_Related_Donations__c` _or_ `Opportunities_from_Web_Source__c`              |
| Calculation Mode                   | `Realtime`                                                                        |
| Schedule vs Child Trigger          | `Child Trigger deployed`                                                          |

**Variations**

> Count Opportunities where a matching gift has been received ( Relationship Criteria: Matching_Gift_Status = ‘Received’, Aggregate Operation: `COUNT`)

**Contributed By** Laurel Taylor, [Town Hall Seattle](https://townhallseattle.org/) _and_ Amy Utkan, [BRDPro](https://brdpro.com/)
