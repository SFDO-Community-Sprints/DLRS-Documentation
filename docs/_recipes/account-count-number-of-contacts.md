---
title: "Account: Count Number of Contacts"
category: "affiliations-relationships-accounts-contacts"
operation: "Count"
mode: "Realtime"
---

**Description**

> This recipe will do a count of the number of Contacts associated with an Account.

**Objects, Fields, Relationships**

| Field                             | Value          |
| ---------------------------------- | ------------------------ |
| Parent Object                      | `Account`                |
| Child Object                       | `Contact`                |
| Relationship Field                 | `AccountId`              |
| Relationship Criteria (SOQL Query) | n/a                      |
| Relationship Criteria Fields       | n/a                      |
| Field to Aggregate                 | `Id`                     |
| Field(s) to Order By               | n/a                      |
| Aggregate Operation                | `COUNT`                  |
| Aggregate Result Field             | `Count_of_Contacts__c`   |
| Calculation Mode                   | `Realtime`               |
| Schedule vs Child Trigger          | `Child Trigger deployed` |

**Contributed By**
Michael Kolodner, for client: [Clean Air Council](https://cleanair.org/)
