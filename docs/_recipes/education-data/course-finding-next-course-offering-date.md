---
title: "Course: Finding Next Course Offering Date"
anchor: "course-finding-next-course-offering-date"
category: "education-data"
category_url: "Education-Data.html"
category_label: "Education Data Architecture"
order: 3
op: "Min"
mode: "Realtime"
mode_class: "realtime"
parent_object: "hed__Course__c"
---

**Description:**
> On Course, list the next course offering date.

**Objects, Fields, Relationships**

| Field | Value |
| ------- | -------- |
| Parent Object | `hed__Course__c` |
| Child Object | `hed__Course_Offering__c` |
| Relationship Field |`hed__Course__c` |
| Relationship Criteria (SOQL Query) | `hed__Start_Date__c >= TODAY AND Class_Status__c != 'Cancelled Section'` |
| Relationship Criteria Fields | `hed__Start_Date__c, Class_Status__c ` |
| Field to Aggregate |`hed__Start_Date__c` |
| Order By Field | n/a |
| Aggregate Operation | `MIN` |
| Aggregate Result Field |  `DLRS_Next_Course_Offering_Date__c` |
| Calculation Mode | `Realtime`
| Schedule vs Child Trigger | `Child Trigger deployed`


**Contributed By**
Nick Lindberg, [University of Minnesota - Carlson School of Management](https://carlsonschool.umn.edu/)
