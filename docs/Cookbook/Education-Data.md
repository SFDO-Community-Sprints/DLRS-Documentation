---
layout: default
title: Education Data Architecture
parent: Cookbook
nav_order: 6
---

# Education Data Architecture Recipes

<details class="recipe-toggle" markdown="1">
<summary><h2 id="contact-finding-last-completed-program-enrollment">Contact: Finding Last Completed Program Enrollment</h2> <span class="op">Last</span> <span class="mode mode-realtime">Realtime</span></summary>

**Description:**
> On Contact, show date of most recently completed program enrollment for the student.

**Objects, Fields, Relationships**

| Field | Value |
| ------- | -------- |
| Parent Object | `Contact` |
| Child Object | `hed__Program_Enrollment__c` |
| Relationship Field |`hed__Contact__c` |
| Relationship Criteria (SOQL Query) | `hed__Enrollment_Status__c = 'Completed'` |
| Relationship Criteria Fields | `hed__Enrollment_Status__c` |
| Field to Aggregate |`hed__End_Date__c` |
| Order By Field | n/a |
| Aggregate Operation | `LAST` |
| Aggregate Result Field |  `DLRS_Date_Last_Completed_Program__c` |
| Calculation Mode | `Realtime`
| Schedule vs Child Trigger | `Child Trigger deployed`

**Any test code or other preparations needed:**
> The rollup can also be scheduled to run nightly if a child record is deleted for some reason.  

**Variations:**
> Show the date of the first completed program enrollment by using the FIRST aggregate operation.

**Contributed By**
Nick Lindberg, [University of Minnesota - Carlson School of Management](https://carlsonschool.umn.edu/)

</details>

<details class="recipe-toggle" markdown="1">
<summary><h2 id="contact-finding-count-of-completed-program-enrollments">Contact: Finding Count of Completed Program Enrollments</h2> <span class="op">Count</span> <span class="mode mode-realtime">Realtime</span></summary>

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

</details>

<details class="recipe-toggle" markdown="1">
<summary><h2 id="course-finding-next-course-offering-date">Course: Finding Next Course Offering Date</h2> <span class="op">Min</span> <span class="mode mode-realtime">Realtime</span></summary>

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

</details>

<details class="recipe-toggle" markdown="1">
<summary><h2 id="contact-find-completed-courses">Contact: Find Completed Courses</h2> <span class="op">Count</span> <span class="mode mode-realtime">Realtime</span></summary>

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

</details>

<details class="recipe-toggle" markdown="1">
<summary><h2 id="course-offering-find-total-enrollment-count">Course Offering: Find Total Enrollment Count</h2> <span class="op">Count</span> <span class="mode mode-realtime">Realtime</span></summary>

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
| Order By Field | n/a |
| Aggregate Operation | `COUNT` |
| Aggregate Result Field |  `DLRS_Total_Enrollments__c` |
| Calculation Mode | `Realtime`
| Schedule vs Child Trigger | `Child Trigger deployed`

**Any test code or other preparations needed:**
> The rollup can also be scheduled to run nightly if a child record is deleted for some reason.  

**Variations:**
> Show the count of dropped or withdrawn enrollments by adjusting the Relationship Criteria.

**Contributed By**
Nick Lindberg, [University of Minnesota - Carlson School of Management](https://carlsonschool.umn.edu/)

</details>
