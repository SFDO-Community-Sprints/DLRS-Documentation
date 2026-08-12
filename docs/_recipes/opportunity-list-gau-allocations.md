---
title: "Opportunity: List GAU Allocations"
anchor: "opportunity-list-gau-allocations"
category: "opportunities-payments-allocations"
category_url: "Opportunities,-Payments,-Allocations.html"
category_label: "Opportunities, Payments, Allocations"
op: "Concatenate Distinct"
mode: "Realtime"
mode_class: "realtime"
parent_object: "Opportunity"
---

**Description**

> Displays a concatenated list of the General Accounting Unit names from related GAU allocation records in a single field. GAU Allocations are a feature of the NPSP, and there can be multiple Allocations on a single Opportunity. The concatenated field allows us to display the value in the related lists and see at a glance how a donor might restrict their giving.

**Objects, Fields, Relationships**

|                     Field | Value                                         |
| ------------------------: | --------------------------------------------- |
|             Parent Object | `Opportunity`                                 |
|              Child Object | `npsp__Allocation__c`                         |
|        Relationship Field | `npsp__Opportunity__c`                        |
|     Relationship Criteria | None                                          |
|        Field to Aggregate | `General_Accounting_Unit_Name__c`             |
|         Field to Order By | `npsp__Amount__c DESC, npsp__Percent__c DESC` |
|       Aggregate Operation | `Concatenate Distinct`                        |
|    Aggregate Result Field | `DLRS_GAU_Allocations_List__c`                |
|          Calculation Mode | Realtime                                      |
| Schedule vs Child Trigger | Deploy the Child Trigger                      |

**Preparation**

> You’ll require a custom formula text field built on `npsp__Allocation__c` to display the name of the General Accounting Unit.
>
> This rollup requires test code to function correctly.
>
> Can also be run on a schedule.

**Contributed By**
Rachel Sinex, [Pedal Lucid](https://www.pedallucid.com/) _and_ Maida Rider, [Jesuit Refugee Service](https://jrsusa.org/)
