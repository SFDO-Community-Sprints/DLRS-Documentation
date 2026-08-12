---
title: "Contact: Count Relationships to Accounts"
category: "affiliations-relationships-accounts-contacts"
operation: "Count"
mode: "Realtime"
---

**Description**

> Count the number of AccountContactRelation records for a particular contact to be able to see if that person is related to more than one Account. This rollup uses the [Relate Contacts to Multiple Accounts feature](https://help.salesforce.com/s/articleView?id=sf.shared_contacts_overview.htm&type=5)

**Objects, Fields, Relationships**

| Field                             | Value          |
| ---------------------------------- | --------------------------- |
| Parent Object                      | `Contact`                   |
| Child Object                       | `AccountContactRelation`    |
| Relationship Field                 | `ContactId`                 |
| Relationship Criteria (SOQL Query) | n/a                         |
| Relationship Criteria Fields       | n/a                         |
| Field to Aggregate                 | `Id`                        |
| Order By Field                     | n/a                         |
| Aggregate Operation                | `COUNT`                     |
| Aggregate Result Field             | `Count_of_Relationships__c` |
| Calculation Mode                   | `Realtime`                  |
| Schedule vs Child Trigger          | `Child Trigger deployed`    |

**Preparation**

> It took me a little while to realize the field I needed to summarize was Id. Normally for the Count function with DLRS I summarize “Name” but AccountContactRelation doesn’t have a name field!

**Contributed By**
Sarah Pilzer, [Country Dance & Song Society](https://www.cdss.org/)
