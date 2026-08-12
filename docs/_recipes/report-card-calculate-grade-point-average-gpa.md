---
title: "Report Card: Calculate Grade Point Average (GPA)"
category: "students-scores-attendance"
operation: "Average"
mode: "Realtime"
---

**Description**

> Count all grades and average them to determine Grade Point Average (GPA) for core classes. We only want to calculate the GPA for core academic courses (Math and English).

**Objects, Fields, Relationships**

> The School Report Card custom object has a child object, Grade. The field GPA_Pts**c is a formula that translates a letter grade into points on a 4-point GPA scale (leaving pass/fail grades blank). Grades also have a field Course_Type**c that is a picklist to choose English, Math, Art, etc. The field Interim_Final\_\_c tells us if this is a final grade or an interim report.

|                              Field | Value                                                                                                               
| ---------------------------------: | ------------------------------------- |
| Parent Object                      | `School_Report_Card__c`                                                                                         |
| Child Object                       | `Grade__c`                                                                                                      |
| Relationship Field                 | `School_Report_Card__c`                                                                                         |
| Relationship Criteria (SOQL Query) | `(Course_Type__c = 'Math' OR Course_Type__c = 'English') AND Interim_Final__c = 'Final' AND GPA_Pts__c != null` |
| Relationship Criteria Fields       | `Course_Type__c, Interim_Final__c, GPA_Pts__c `                                                                 |
| Field to Aggregate                 | `GPA_Pts__c`                                                                                                    |
| Order By Field                     | n/a                                                                                                             |
| Aggregate Operation                | `AVERAGE`                                                                                                       |
| Aggregate Result Field             | `DLRS_CoreGPA__c`                                                                                               |
| Calculation Mode                   | `Realtime`                                                                                                      |
| Schedule vs Child Trigger          | Child Trigger deployed.                                                                                         |

**Contributed By**
Michael Kolodner, [Kolodner.com](https://kolodner.com/)

<!-- Edited by Jillian Nii 5/5/22 -->
