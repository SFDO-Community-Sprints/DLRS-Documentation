---
title: "Contact: Finding Last Completed Program Enrollment"
category: "education-data"
operation: "Last"
mode: "Realtime"
---

**Description:**
> This recipe shows on the Contact object the date of most recently completed program enrollment for the student.

**Objects, Fields, Relationships**

| Field | Value |
| ------- | -------- |
| Parent Object | `Contact` |
| Child Object | `hed__Program_Enrollment__c` |
| Relationship Field |`hed__Contact__c` |
| Relationship Criteria  | `hed__Enrollment_Status__c = 'Completed'` |
| Relationship Criteria Fields | `hed__Enrollment_Status__c` |
| Field to Aggregate |`hed__End_Date__c` |
| Field(s) to Order By | n/a |
| Aggregate Operation | `LAST` |
| Aggregate Result Field |  `DLRS_Date_Last_Completed_Program__c` |
| Calculation Mode | `Realtime`
| Schedule vs Child Trigger | Child Trigger deployed

**Any test code or other preparations needed:**
> The rollup can also be scheduled to run nightly if a child record is deleted for some reason.  

**Variations:**
> Show the date of the first completed program enrollment by using the FIRST aggregate operation.

**Contributed By**
Nick Lindberg
