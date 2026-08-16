---
title: "Course Offering: Find Total Enrollment Count"
category: "education-data"
operation: "Count"
mode: "Realtime"
---

**Description:**
> On Course Offering, show the number of enrollments.

**Objects, Fields, Relationships**

| Field | Value |
| ------- | -------- |
| Parent Object | `hed__Course_Offering__c` |
| Child Object | `hed__Course_Enrollment__c` |
| Relationship Field |`hed__Course_Offering__c` |
| Relationship Criteria (SOQL Query) | `hed__Status__c !='Drop' AND hed__Status__c !='Transfer' AND hed__Status__c !='Waitlist' AND hed__Status__c !='Withdrawn'` |
| Relationship Criteria Fields | `hed__Status__c` |
| Field to Aggregate |`Name` |
| Field(s) to Order By | n/a |
| Aggregate Operation | `COUNT` |
| Aggregate Result Field |  `DLRS_Total_Enrollments__c` |
| Calculation Mode | `Realtime`
| Schedule vs Child Trigger | Child Trigger deployed

**Any test code or other preparations needed:**
> The rollup can also be scheduled to run nightly if a child record is deleted for some reason.  

**Variations:**
> Show the count of dropped or withdrawn enrollments by adjusting the Relationship Criteria.

**Contributed By**
Nick Lindberg
