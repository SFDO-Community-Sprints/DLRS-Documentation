---
title: "Account: Count of Student Applications This Year"
anchor: "account-count-of-student-applications-this-year"
category: "students-scores-attendance"
category_url: "Students,-Scores,-Attendance.html"
category_label: "Students, Scores, Attendance"
op: "Count"
mode: "Scheduled"
mode_class: "scheduled"
parent_object: "Account"
---

**Description**

> Count the number of student applications to a college this year. Assuming a student can or does only submit one application, this can also be considered the count of students who applied. There was no need for this to be realtime, especially due to the potential for a negative (slight) performance impact if it was.

**Objects, Fields, Relationships**

|                              Field | Value                                                                                                               
| ---------------------------------: | ------------------------------------- |
|                      Parent Object | `Account`                        |
|                       Child Object | `CollegeApp__c`    |
|                 Relationship Field | `AccountId`      |
| Relationship Criteria (SOQL Query) | `Year_of_Application_Date__c = N_Fiscal_Years_Ago AND IsApplied__c = true`         |
|       Relationship Criteria Fields | `Year_of_Application_Date__c` `N_Fiscal_Years_Ago` `IsApplied__c`       |
|                 Field to Aggregate | `Id`      |
|                  Field to Order By | n/a              |
|                Aggregate Operation | `COUNT`              |
|             Aggregate Result Field | `DLRS_Applications_This_Year__c`   |
|                   Calculation Mode | `Scheduled`    |
|          Schedule vs Child Trigger | `Deploy the Child Trigger, and also set using the DLRS scheduler to recalculate monthly (to keep the relative date up-to-date)` |

**Preparation**

> No special preparation required. `N_Fiscal_Years_Ago` is a formula field that displays the current fiscal year.

**Variations**

- Additional versions of this roll-up can be configured to show a count of applications last year, two years ago, etc.

**Contributed By** Michael Kolodner, [Kolodner.com LLC](https://kolodner.com/) for client: [The Academy Group](https://theacademygroup.com/)
