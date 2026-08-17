---
title: "Contact: Current Program Engagement Status"
category: "campaigns-registrations-applications"
operation: "Last"
mode: "Realtime"
---

**Description**

> This recipe shows the current status of a program engagement (or any custom object that may have an open and closed option). Multiple other use cases for this rollup as this function will work with any field.

**Objects, Fields, Relationships**

| Field | Value |
| ------- | -------- |
| Parent Object                      | `Contact`                                |
| Child Object                       | `Program_Engagement__c`                  |
| Relationship Field                 | `Member__c` (this is a custom contact lookup) |
| Relationship Criteria (SOQL Query) | n/a                                      |
| Relationship Criteria Fields       | n/a                                      |
| Field to Aggregate                 | `Intake_Status__c`                       |
| Field(s) to Order By               | `CreatedDate`                            |
| Aggregate Operation                | `LAST`                                   |
| Aggregate Result Field             | `Current_PE_Status__c`                   |
| Calculation Mode                   | `Realtime`                               |
| Schedule vs Child Trigger          | `Child Trigger deployed`                 |

**Preparation**

> I have also scheduled the rollup to run nightly if a child record was deleted for some reason.

**Variations**

- Multiple use cases when you want to display the first or last of something on the main contact page (or any other parent page), helps with ease of reporting and having some check and balances as well as adding guardrails into automation or new record creation, etc.

**Contributed By**
Heath Parks
