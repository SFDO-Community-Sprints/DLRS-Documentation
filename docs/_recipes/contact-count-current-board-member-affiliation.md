---
title: "Contact: Count Current Board Member Affiliation"
anchor: "contact-count-current-board-member-affiliation"
category: "affiliations-relationships-accounts-contacts"
category_url: "Affiliations,-Relationships,-Accounts,-Contacts.html"
category_label: "Affiliations, Relationships, Accounts, Contacts"
op: "Count"
mode: "Realtime"
mode_class: "realtime"
parent_object: "Contact"
---

**Description**

> Identify on the Contact record their active affiliation, such as if they are a board member or sponsor. This rollup is based on information on the Role field in a Contact’s related Affiliations.

**Objects, Fields, Relationships**

|                              Field | Value                                                            |
| ---------------------------------: | ---------------------------------------------------------------- |
|                      Parent Object | `Contact`                                                        |
|                       Child Object | `NPSP Affiliation`                                               |
| Relationship Criteria (SOQL Query) | `npe5__Role__c = ‘Board Member’ AND npe5__Status__c = ‘Current’` |
|       Relationship Criteria Fields | `npe5__Role__c` `Status`                                         |
|                 Field to Aggregate | `Id`                                                             |
|                  Field to Order By | n/a                                                              |
|                Aggregate Operation | `COUNT`                                                          |
|             Aggregate Result Field | `Current_Board_Count__c`                                         |
|                   Calculation Mode | `Realtime`                                                       |
|          Schedule vs Child Trigger | `Child Trigger deployed`                                         |

**Preparation**

> Customize `npe5__Role__c` (Role on Affiliation) to include Board Member or any other roles you want to roll up to the Contact.

**Variations**

- Use different roles for the rollup, such as sponsor. If you only want to rollup the role from the Contact’s Primary Affiliation, you can add “AND npe5_Primary__c=TRUE” to the Relationship Criteria SOQL query.

- You could also have a checkbox formula field on the contact object for easy reporting. If the rollup value >=1, then the checkbox is checked (true), meaning they are a board member. If the rollup is 0, then the checkbox is unchecked (false).

**Contributed By** Hua Ping Tan, [Belmar Consulting Group](https://www.belmar.ca/)
