---
title: "Contact: Find Completed Courses"
anchor: "contact-find-completed-courses"
category: "education-data"
category_url: "Education-Data.html"
category_label: "Education Data Architecture"
op: "Count"
mode: "Realtime"
mode_class: "realtime"
parent_object: "Contact"
---

**Description:**
> On Contact, list the number of completed courses for a student.

**Objects, Fields, Relationships**

| Field | Value |
| ------- | -------- |
| Parent Object | `Contact` |
| Child Object | `hed__Course_Enrollment__c` |
| Relationship Field |`hed__Contact__c` |
| Relationship Criteria (SOQL Query) | `hed__Status__c='Completed'` |
| Relationship Criteria Fields | `hed__Status__c` |
| Field to Aggregate |`Name` |
| Order By Field | n/a |
| Aggregate Operation | `COUNT` |
| Aggregate Result Field |  `DLRS_Completed_Courses__c` |
| Calculation Mode | `Realtime`
| Schedule vs Child Trigger | `Child Trigger deployed`

**Variations:**
> Show the count of incomplete courses by adjusting the Relationship Criteria (!= 'Completed', for example).

**Contributed By**
Nick Lindberg, [University of Minnesota - Carlson School of Management](https://carlsonschool.umn.edu/)
