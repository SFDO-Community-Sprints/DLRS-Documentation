---
title: "Contact: Finding Count of Completed Program Enrollments"
anchor: "contact-finding-count-of-completed-program-enrollments"
category: "education-data"
category_url: "Education-Data.html"
category_label: "Education Data Architecture"
order: 2
op: "Count"
mode: "Realtime"
mode_class: "realtime"
parent_object: "Contact"
---

**Description:**
> On Contact, show the count of completed program enrollments for the student.

**Objects, Fields, Relationships**

| Field | Value |
| ------- | -------- |
| Parent Object | `Contact` |
| Child Object | `hed__Program_Enrollment__c` |
| Relationship Field |`hed__Contact__c` |
| Relationship Criteria (SOQL Query) | `hed__Enrollment_Status__c = 'Completed'` |
| Relationship Criteria Fields | `hed__Enrollment_Status__c` |
| Field to Aggregate |`Name` |
| Order By Field | n/a |
| Aggregate Operation | `COUNT` |
| Aggregate Result Field |  `DLRS_Completed_Academic_Programs__c` |
| Calculation Mode | `Realtime`
| Schedule vs Child Trigger | `Child Trigger deployed`

**Any test code or other preparations needed:**
> The rollup can also be scheduled to run nightly if a child record is deleted for some reason.  

**Variations:**
> Show the count of all completed and incomplete enrollments by adjusting the Relationship Criteria (!= 'Completed', for example).

**Contributed By**
Nick Lindberg, [University of Minnesota - Carlson School of Management](https://carlsonschool.umn.edu/)
