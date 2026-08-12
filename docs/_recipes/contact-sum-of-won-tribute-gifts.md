---
title: "Contact: Sum of Won Tribute Gifts"
anchor: "contact-sum-of-won-tribute-gifts"
category: "opportunities-payments-allocations"
category_url: "Opportunities,-Payments,-Allocations.html"
category_label: "Opportunities, Payments, Allocations"
op: "Sum"
mode: "Realtime"
mode_class: "realtime"
parent_object: "Contact"
---

**Description**

> Calculate the total amount of won tribute gifts received in honor of a Contact. Note that the relationship between the objects here is via the Honoree Contact lookup (which is an NPSP package field), not the Primary Contact.

| Field | Value |
| ------- | -------- |
| Parent Object                      | `Contact`                                       |
| Child Object                       | `Opportunity`                                   |
| Relationship Field                 | `npsp__Honoree_Contact__c`                      |
| Relationship Criteria (SOQL Query) | `npsp_Tribute_Type__c != null AND isWon = True` |
| Relationship Criteria Fields       | `npsp_Tribute_Type__c, isWon`                   |
| Field to Aggregate                 | `Amount`                                        |
| Order By Field                     | n/a                                             |
| Aggregate Operation                | `SUM`                                           |
| Aggregate Result Field             | `Sum_of_Tribute_Gifts__c`                       |
| Calculation Mode                   | `Realtime`                                      |
| Schedule vs Child Trigger          | `Child Trigger deployed`                        |

**Contributed By**
Amanda Styles, [Traction on Demand](https://www.tractionondemand.com/)
