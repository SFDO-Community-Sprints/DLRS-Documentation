---
title: "Funding Program: Count Applications Submitted"
anchor: "funding-program-count-applications-submitted"
category: "outbound-funds"
category_url: "Outbound-Funds.html"
category_label: "Outbound Funds"
order: 1
op: "Count"
mode: "Realtime"
mode_class: "realtime"
parent_object: "Funding Program"
---

**Description**

> Counts the number of applications submitted for a funding program in the Outbound Funds Package. The rollup uses the Funding Request Status field on Funding Request, so that the total can be shown on the Funding Program record.

**Objects, Fields, Relationships**

|                        Field | Value                                           |
| ---------------------------: | ----------------------------------------------- |
|                Parent Object | `Funding Program`                               |
|                 Child Object | `Funding Request`                               |
|           Relationship Field | `outfunds__FundingProgram__c`                   |
|        Relationship Criteria | `Funding Request Status NOT Draft or Withdrawn` |
| Relationship Criteria Fields | `Funding_Request_Status__c`                     |
|           Field to Aggregate | `Id`                                            |
|            Field to Order By | n/a                                             |
|          Aggregate Operation | `Count`                                         |
|       Aggregate Result Field | `DLRS_TotalSubmittedRequests`                   |
|             Calculation Mode | Realtime                                        |
|    Schedule vs Child Trigger | Deploy the Child Trigger                        |

**Variations**

- For a count of awarded applications only, add a criteria of Funding Request Status = Awarded.

**Contributed By** Serkan Bilgi, [Traction on Demand](https://www.tractionondemand.com/)
