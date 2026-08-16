---
title: "Contact: Completed Log-a-Call Activities LastYear"
category: "files-activities"
operation: "Count"
mode: "Invocable by Automation"
---

**Description**

> This recipe counts the number of completed log-a-call activities for a contact over the past year. Was used to get an idea of how many times users are logging a call for a contact to gauge engagement and "high touch".

**Objects, Fields, Relationships**

| Field                            | Value                                                        |
| ---------------------------------- | ---------------------------------------------------------------------- |
| Parent Object                      | `Contact`                                                              |
| Child Object                       | `Task`                                                                 |
| Relationship Field                 | `WhoID`                                                                |
| Relationship Criteria              | `Status='Completed' AND TaskSubtype='Call' AND ActivityDate=LAST_YEAR` |
| Relationship Criteria Fields       | `Status, TaskSubtype, ActivityDate`                                    |
| Field to Aggregate                 | `Id`                                                                   |
| Field(s) to Order By               | n/a                                                                    |
| Aggregate Operation                | `COUNT`                                                                |
| Aggregate Result Field             | `Completed_Activities_LY__c`                                           |
| Calculation Mode                   | `Invocable by Automation`                                             |
| Schedule vs Child Trigger          | Schedule via Full Recalculation, No Child Trigger                      |

**Preparation**

> You will need to select Aggregate All Rows, since activities get archived (better safe than sorry).

**Variations**

- Multiple variations for based on record type for task, can also be used to track high value contacts/donors etc to make sure that key people are being touched regularly over time, etc

**Contributed By** 
Heath Parks 
