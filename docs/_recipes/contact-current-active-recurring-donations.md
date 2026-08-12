---
title: "Contact: Current Active Recurring Donations"
anchor: "contact-current-active-recurring-donations"
category: "opportunities-payments-allocations"
category_url: "Opportunities,-Payments,-Allocations.html"
category_label: "Opportunities, Payments, Allocations"
op: "Count"
mode: "Realtime"
mode_class: "realtime"
parent_object: "Contact"
---

**Description**

> Shows whether or not this contact has 1 or more currently active recurring donations (uses the NPSP Recurring Donations custom object).

| Field | Value |
| ------- | -------- |
| Parent Object                      | `Contact`                                                         |
| Child Object                       | `npe03__Recurring_Donation__c`                                    |
| Relationship Field                 | `npe03__Contact__c`                                               |
| Relationship Criteria (SOQL Query) | `npsp__Status__c=’Active’`                                        |
| Relationship Criteria Fields       | `npsp__Status__c`                                                 |
| Field to Aggregate                 | `Name`                                                            |
| Order By Field                     | n/a                                                               |
| Aggregate Operation                | `COUNT`                                                           |
| Aggregate Result Field             | `Related_Active_Recurring_Donations__c`                           |
| Calculation Mode                   | `Realtime`                                                        |
| Schedule vs Child Trigger          | `Child Trigger deployed. Could also be scheduled to run nightly.` |

**Preparation**

> Because NPSP, I had to do some hunting for [test code in GitHub](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/issues/490)

**Contributed By**
Marc Baizman, [Salesforce.com](https://www.salesforce.com/)
