---
title: "Account: Last Grant Received"
category: "outbound-funds"
operation: "Max"
mode: "Realtime"
---

**Description**

> This recipe shows the last or most recent amount awarded to an Applying Organization (Account) in the Outbound Funds Package.

|                        Field | Value                               |
| ---------------------------: | ----------------------------------- |
| Parent Object                      | `Account`                         |
| Child Object                       | `outfunds__Funding_Request__c`    |
| Relationship Field                 | `Account__c`                      |
| Relationship Criteria (SOQL Query) | `outfunds__Awarded_Amount__c > 0` |
| Relationship Criteria Fields       | `outfunds__Awarded_Amount__c`     |
| Field to Aggregate                 | `outfunds__Awarded_Date__c`       |
| Field(s) to Order By               | n/a                               |
| Aggregate Operation                | `MAX`                             |
| Aggregate Result Field             | `DLRS_Date_of_Last_Grant__c`      |
| Calculation Mode                   | `Realtime`                        |
| Schedule vs Child Trigger          | Child Trigger deployed          |

**Variations**

- Use MIN as the Aggregate to show the date of the first grant.
- Use Application Date instead of Awarded Date to show when an organization first or most recently applied for a grant.
- Substitute Applying Organization with Applying Contact to show the same summaries on a Contact record.

**Contributed By**
Sheri Gurock
