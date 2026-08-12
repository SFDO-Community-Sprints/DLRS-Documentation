---
title: "Funding Program: Sum of Recommended Amount"
anchor: "funding-program-sum-of-recommended-amount"
category: "outbound-funds"
category_url: "Outbound-Funds.html"
category_label: "Outbound Funds"
op: "Sum"
mode: "Realtime"
mode_class: "realtime"
parent_object: "outfunds__Funding_Program__c"
---

**Description**

> Calculates total dollars committed to date for a funding program (but not yet awarded) in the Outbound Funds package. The rollup uses the Recommended Amount fields on Funding Request, so that the total can be shown on the Funding Program record.

**Objects, Fields, Relationships**

|                        Field | Value                               |
| ---------------------------: | ----------------------------------- |
|                Parent Object | `outfunds__Funding_Program__c`      |
|                 Child Object | `outfunds__Funding_Request__c`      |
|           Relationship Field | `outfunds__FundingProgram__c`       |
|        Relationship Criteria | `outfunds__Recommended_Amount__c>0` |
| Relationship Criteria Fields | `outfunds__Recommended_Amount__c`   |
|           Field to Aggregate | `outfunds__Recommended_Amount__c`   |
|            Field to Order By | n/a                                 |
|          Aggregate Operation | `Sum`                               |
|       Aggregate Result Field | `DLRS_Committed_to_Date__c`         |
|             Calculation Mode | Realtime                            |
|    Schedule vs Child Trigger | Deploy the Child Trigger            |

**Variations**

- For the sum of dollars awarded, change the Field to Aggregate to: `outfunds__Awarded_Amount__c`

**Contributed By** Sheri Gurock, [The Beker Foundation](https://thebekerfoundation.org/)
