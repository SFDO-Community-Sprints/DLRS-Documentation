---
title: "Contact: Tag Contact as a Major Sustainer"
category: "opportunities-payments-allocations"
operation: "Sum"
mode: "Watch for Changes and Process Later"
---

**Description**

> This recipe marks a Contact as a Major Donor based on whether or not any of the Contact's Active Recurring Donations reaches a certain Amount.

**Objects, Fields, Relationships**

|                     Field | Value                                         |
| ------------------------: | --------------------------------------------- |
|             Parent Object | `Contact`                                 |
|              Child Object | `npe03__Recurring_Donation__c`                         |
|        Relationship Field | `npe03__Contact__c`                        |
|     Relationship Criteria | `Major_Sustainer_Calculation__c > 0`                                        |
| Relationship Criteria Fields       | `Major_Sustainer_Calculation__c`                                                 |
|        Field to Aggregate | `Major_Sustainer_Calculation__c`             |
|         Field to Order By | n/a |
|       Aggregate Operation | `SUM`                        |
|    Aggregate Result Field | `Major_Sustainer__c`                |
|          Calculation Mode | `Watch for Changes and Process Later`                                      |
| Schedule vs Child Trigger | Deploy the Child Trigger                      |

**Preparation**

> Major_Sustainer_Calculation__c is a Formula field that gives a value of 1 if the Recurring Donation reflects an annual Amount (npe03__Amount__c) a certain number or higher, based on Amount and Installment Period (npe03__Installment_Period__c) and is Active (npsp__Status__c).


**Contributed By**
Aron Schor
