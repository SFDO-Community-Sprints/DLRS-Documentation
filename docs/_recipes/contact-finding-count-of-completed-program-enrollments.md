---
title: "Contact: Finding Count of Completed Program Enrollments"
category: "education-data"
operation: "Count"
mode: "Realtime"
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
| Field(s) to Order By | n/a |
| Aggregate Operation | `COUNT` |
| Aggregate Result Field |  `DLRS_Completed_Academic_Programs__c` |
| Calculation Mode | `Realtime`
| Schedule vs Child Trigger | Child Trigger deployed

**Any test code or other preparations needed:**
> The rollup can also be scheduled to run nightly if a child record is deleted for some reason.  

**Variations:**
> Show the count of all completed and incomplete enrollments by adjusting the Relationship Criteria (!= 'Completed', for example).

**Contributed By**
Nick Lindberg
