---
title: "Contact: Completed Log-a-Call Activities LastYear"
anchor: "contact-completed-log-a-call-activities-lastyear"
category: "files-activities"
category_url: "Files,-Activities.html"
category_label: "Files, Activities"
order: 2
op: "Count"
mode: "Scheduled"
mode_class: "scheduled"
parent_object: "Contact"
---

**Description**

> Counts the number of completed log-a-call activities for a contact over the past year. Was used to get an idea of how many times we were logging a call for a contact to gauge engagement and "high touch".

**Objects, Fields, Relationships**

| Field                            | Value                                                        |
| ---------------------------------- | ---------------------------------------------------------------------- |
| Parent Object                      | `Contact`                                                              |
| Child Object                       | `Task`                                                                 |
| Relationship Field                 | `WhoID`                                                                |
| Relationship Criteria (SOQL Query) | `Status='Completed' AND TaskSubtype='Call' AND ActivityDate=LAST_YEAR` |
| Relationship Criteria Fields       | `Status, TaskSubtype, ActivityDate`                                    |
| Field to Aggregate                 | `Id`                                                                   |
| Order By Field                     | n/a                                                                    |
| Aggregate Operation                | `COUNT`                                                                |
| Aggregate Result Field             | `Completed_Activities_LY__c`                                           |
| Calculation Mode                   | `Scheduled`                                                            |
| Schedule vs Child Trigger          | Schedule, No Child Trigger.                                            |

**Preparation**

> You will need to select Aggregate All Rows, since activities get archived (better safe than sorry).

**Variations**

- Multiple variations for based on record type for task, can also be used to track high value contacts/donors etc to make sure that key people are being touched regularly over time, etc

**Contributed By**
Heath Parks, [North Peak Solutions](https://www.northpeak.com/)

<!-- Kathy Waterworth 05/05/2022  Email: heath.parks@northpeak.com -->
