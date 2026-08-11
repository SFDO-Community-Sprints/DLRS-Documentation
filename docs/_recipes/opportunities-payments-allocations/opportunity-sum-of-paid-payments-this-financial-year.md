---
title: "Opportunity: Sum of Paid Payments This Financial Year"
anchor: "opportunity-sum-of-paid-payments-this-financial-year"
category: "opportunities-payments-allocations"
category_url: "Opportunities,-Payments,-Allocations.html"
category_label: "Opportunities, Payments, Allocations"
order: 1
op: "Sum"
mode: "Realtime"
mode_class: "realtime"
parent_object: "Opportunity"
---

**Description**

> Rollup all child payment records for an Opportunity if the Payment Status is "Paid" and the Payment Date falls in the current fiscal year.

**Objects, Fields, Relationships**

This rollup example uses the [Nonprofit Success Pack (NPSP)](https://www.salesforce.org/nonprofit/nonprofit-success-pack-new/), which has a child object of Opportunity called Payment (`npe01__OppPayment__c`). There can be multiple payments before an opportunity moves into a fully paid status. The Opportunity field on Payment (`npe01__Opportunity__c`) is the lookup to Opportunity. Payments each have their own Payment Date field (`npe01__Payment_Date__c`) and a checkbox to indicate that they are paid (`npe01__Paid__c`). While this uses NPSP objects and fields as examples, the idea of multiple payments on an opportunity is applicable in many organizations.

| Field | Value |
| ------- | -------- |
|                      Parent Object | `Opportunity`                                                                                                                                                                                                                                       |
|                       Child Object | `npe01__OppPayment__c`                                                                                                                                                                                                                              |
|                 Relationship Field | `npe01__Opportunity__c`                                                                                                                                                                                                                             |
| Relationship Criteria (SOQL Query) | `npe01__Paid__c = True AND npe01__Payment_Date__c = THIS_YEAR`                                                                                                                                                                                      |
|       Relationship Criteria Fields | `npe01__Paid__c, npe01__Payment_Date__c`                                                                                                                                                                                                            |
|                 Field to Aggregate | `npe01__Payment_Amount__c`                                                                                                                                                                                                                          |
|                  Field to Order By | `n/a`                                                                                                                                                                                                                                               |
|                Aggregate Operation | `SUM`                                                                                                                                                                                                                                               |
|             Aggregate Result Field | `DLRS_Payments_This_Year__c`                                                                                                                                                                                                                        |
|                   Calculation Mode | `Realtime`                                                                                                                                                                                                                                          |
|          Schedule vs Child Trigger | Deploy the child trigger for a realtime update whenever a payment is marked paid AND click Schedule Full Calculate to have all records recalculated on the first of each month, so that the relative date filter for the year is kept up to date. |

**Variations**

- Use for any child payment or transaction records linked to Opportunity, or for child Opportunities related to a parent Opportunity.

- Create a version for LAST YEAR.

- Unpaid payment records, so you can see outstanding balance.

**Contributed By** Jared Henning, [Salesforce.com](https://salesforce.com/)
