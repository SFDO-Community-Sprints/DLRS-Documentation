---
title: "Account: Sum of Awarded Grants"
category: "outbound-funds"
operation: "Sum"
mode: "Realtime"
---

**Description**

> This recipe calculates total dollars awarded to an Applying Organization in the Outbound Funds package. The rollup uses the Awarded Amount field on Funding Request, so that the total can be shown on the Applying Organization (Account) record.

**Objects, Fields, Relationships**

|                        Field | Value                               |
| ---------------------------: | ----------------------------------- |
| Parent Object                      | `Account`                                                                |
| Child Object                       | `outfunds__Funding_Request__c`                                           |
| Relationship Field                 | `Account__c`                                                             |
| Relationship Criteria (SOQL Query) | `outfunds__Recommended_Amount__c > 0 OR outfunds__Awarded_Amount__c > 0` |
| Relationship Criteria Fields       | `outfunds__Recommended_Amount__c, outfunds__Awarded_Amount__c`           |
| Field to Aggregate                 | `outfunds__Awarded_Amount__c`                                            |
| Field(s) to Order By               | n/a                                                                      |
| Aggregate Operation                | `SUM`                                                                    |
| Aggregate Result Field             | `DLRS_ORG_Number_of_Grants__c`                                           |
| Calculation Mode                   | `Realtime`                                                               |
| Schedule vs Child Trigger          | Child Trigger deployed                                                   |

**Variations**

- Use the sum of Requested Amount to show how much an organization has applied for, as well as how much they’ve been awarded (in this case, the SOQL query would be: **outfunds__Requested_Amount__c** > 0 AND **outfunds__Awarded_Amount__c** = 0)
- Substitute Applying Organization with Applying Contact to show the same summaries on a Contact record.

**Contributed By**
Sheri Gurock
