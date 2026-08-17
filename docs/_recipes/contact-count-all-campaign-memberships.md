---
title: "Contact: Count All Campaign Memberships"
category: "campaigns-registrations-applications"
operation: "Count"
mode: "Realtime"
---

**Description**

> This recipe counts the number of campaigns a contact has been involved in. This is not possible with a standard rollup summary field because you can't create one on Contact object to summarize Campaign Member records.

**Objects, Fields, Relationships**

| Field | Value |
| ------- | -------- |
| Parent Object                      | `Contact`                     |
| Child Object                       | `CampaignMember`              |
| Relationship Field                 | `ContactId`                   |
| Relationship Criteria (SOQL Query) | n/a                           |
| Relationship Criteria Fields       | n/a                           |
| Field to Aggregate                 | `Id`                          |
| Field(s) to Order By               | n/a                           |
| Aggregate Operation                | `COUNT`                       |
| Aggregate Result Field             | `DLRS_CampaignMemberships__c` |
| Calculation Mode                   | `Realtime`                    |
| Schedule vs Child Trigger          | `Child Trigger deployed`      |

**Variations**

- You could count only the number of "responded" statuses using SOQL criteria "HasResponded = true"
- If your org standardizes campaign member status options, you could also make counts of memberships in various statuses.
- You could also count specific types of Campaigns, by adding criteria for Campaign Type (see the "Contact: Count Campaign Memberships by Type" recipe).

**Contributed By**
Michael Kolodner
