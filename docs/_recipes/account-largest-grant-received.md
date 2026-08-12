---
title: "Account: Largest Grant Received"
anchor: "account-largest-grant-received"
category: "outbound-funds"
category_url: "Outbound-Funds.html"
category_label: "Outbound Funds"
op: "Max"
mode: "Realtime"
mode_class: "realtime"
parent_object: "Account"
---

**Description**

> Shows the largest amount awarded to an Applying Organization (Account).

|                        Field | Value                               |
| ---------------------------: | ----------------------------------- |
| Parent Object                      | `Account`                         |
| Child Object                       | `outfunds__Funding_Request__c`    |
| Relationship Field                 | `Account__c`                      |
| Relationship Criteria (SOQL Query) | `outfunds__Awarded_Amount__c > 0` |
| Relationship Criteria Fields       | `outfunds__Awarded_Amount__c`     |
| Field to Aggregate                 | `outfunds__Awarded_Amount__c`     |
| Order By Field                     | n/a                               |
| Aggregate Operation                | `MAX`                             |
| Aggregate Result Field             | `DLRS_ORG_Largest_Grant__c`       |
| Calculation Mode                   | `Realtime`                        |
| Schedule vs Child Trigger          | `Child Trigger deployed`          |

**Variations**

- Use MIN as the Aggregate to show the smallest grant.
- Substitute Applying Organization with Applying Contact to show the same summaries on a Contact record.

**Contributed By**
Sheri Gurock, [The Beker Foundation](https://thebekerfoundation.org/)
