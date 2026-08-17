---
title: "Campaign: Campaign Hierarchies of Opportunities"
category: "opportunities-payments-allocations"
operation: "Sum"
mode: "Watch for Changes and Process Later"
---

**Description**

> This recipe sums on a Campaign the Amount of its received gift Opportunities, for Campaigns that are part of a Campaign hierarchy.

**Objects, Fields, Relationships**

|                     Field | Value                                         |
| ------------------------: | --------------------------------------------- |
|             Parent Object | `Campaign`                                 |
|              Child Object | `Opportunity`                         |
|        Relationship Field | `CampaignId`                        |
|     Relationship Criteria | `Has_Parent_Campaign__c = TRUE AND (StageName = 'Pledged' OR StageName = 'Accounting Received' OR StageName = 'Distribution Received' OR StageName='Stewardship' OR StageName='Approved')  `                                        |
| Relationship Criteria Fields       | `StageName`                                                 |
|        Field to Aggregate | `Amount`             |
|         Field to Order By | n/a |
|       Aggregate Operation | `SUM`                        |
|    Aggregate Result Field | `Total_Revenue_of_Received_Gifts__c`                |
|          Calculation Mode | `Watch for Changes and Process Later`                                      |
| Schedule vs Child Trigger | Deploy the Child Trigger                      |

**Preparation**

> Has_Parent_Campaign__c is a Formula field that checks if the related Campaign has a ParentId.


**Contributed By**
Aron Schor
