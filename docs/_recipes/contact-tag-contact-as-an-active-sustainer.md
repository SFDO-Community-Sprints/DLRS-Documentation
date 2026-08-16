---
title: "Contact: Tag Contact as an Active Sustainer"
category: "opportunities-payments-allocations"
operation: "Last"
mode: "Invocable by Automation"
---

**Description**

> This recipe marks a Contact as an Active Sustainer based on whether or not the Contact's most recent Recurring Donations is Active.

**Objects, Fields, Relationships**

|                     Field | Value                                         |
| ------------------------: | --------------------------------------------- |
|             Parent Object | `Contact`                                 |
|              Child Object | `npe03__Recurring_Donation__c`                         |
|        Relationship Field | `npe03__Contact__c`                        |
|     Relationship Criteria | `Active_Sustainer__c = TRUE`                                        |
| Relationship Criteria Fields       | `Active_Sustainer__c`                                                 |
|        Field to Aggregate | `Active_Sustainer__c`             |
|         Field to Order By | n/a |
|       Aggregate Operation | `LAST`                        |
|    Aggregate Result Field | `Active_Sustainer__c`                |
|          Calculation Mode | `Invocable by Automation`                                      |
| Schedule vs Child Trigger | Schedule, Child Trigger not deployed                      |

**Preparation**

> Active_Sustainer__c is a Recurring Donation formula field that uses npsp__Status__c = Active, along with another field unique to our org..


**Contributed By**
Aron Schor
