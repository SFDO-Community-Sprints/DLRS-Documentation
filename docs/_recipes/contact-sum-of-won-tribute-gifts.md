---
title: "Contact: Sum of Won Tribute Gifts"
category: "opportunities-payments-allocations"
operation: "Sum"
mode: "Realtime"
---

**Description**

> This recipe calculates the total amount of won tribute gifts received in honor of a Contact. Note that the relationship between the objects here is via the Honoree Contact lookup (which is an NPSP package field), not the Primary Contact.

| Field | Value |
| ------- | -------- |
| Parent Object                      | `Contact`                                       |
| Child Object                       | `Opportunity`                                   |
| Relationship Field                 | `npsp__Honoree_Contact__c`                      |
| Relationship Criteria              | `npsp_Tribute_Type__c != null AND isWon = True` |
| Relationship Criteria Fields       | `npsp_Tribute_Type__c, isWon`                   |
| Field to Aggregate                 | `Amount`                                        |
| Field(s) to Order By               | n/a                                             |
| Aggregate Operation                | `SUM`                                           |
| Aggregate Result Field             | `Sum_of_Tribute_Gifts__c`                       |
| Calculation Mode                   | `Realtime`                                      |
| Schedule vs Child Trigger          | Child Trigger deployed                          |

**Contributed By**
Amanda Styles
