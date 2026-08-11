---
title: "Contact: List of Years Engaged in Programs"
anchor: "contact-list-of-years-engaged-in-programs"
category: "campaigns-registrations-applications"
category_url: "Campaigns,-Registrations,-Applications.html"
category_label: "Campaigns, Registrations, Applications"
order: 6
op: "Concatenate Distinct"
mode: "Realtime"
mode_class: "realtime"
parent_object: "Contact"
---

**Description**

> Rollup that displays the calendar year(s) in which a person engaged in services. For organizations that offer long term programs, people often engage and disengage, so this rollup shows in which years a person engaged with the services. But this could be applied to any situation where a constituent engages on a yearly basis.
>
> A pre-work for this is to create a custom formula text field on the child object to display the value of the calendar (or fiscal) year from the engagement date field.

**Objects, Fields, Relationships**

| Field | Value |
| ------- | -------- |
| Parent Object                      | `Contact`                                        |
| Child Object                       | `Program_Engagement__c`                          |
| Relationship Field                 | `Member__c` (this is the contact lookup)         |
| Relationship Criteria (SOQL Query) | n/a                                              |
| Relationship Criteria Fields       | n/a                                              |
| Field to Aggregate                 | `Engagement_Year__c`                             |
| Order By Field                     | `Engagement_Date__c`                             |
| Aggregate Operation                | `CONCATENATE DISTINCT`                           |
| Aggregate Result Field             | `DLRS_Engagement_Year_s__c`                      |
| Concatenate Delimiter              | comma “,” or semicolon “;” to separate the years |
| Calculation Mode                   | `Realtime or Process Bulder`                     |
| Schedule vs Child Trigger          | `Child Trigger deployed for Realtime`            |

**Preparation**

> You will need a custom text formula to extract the year from the application date or service engagement date on the child object.
>
> You will also need to use the Concatenate Delimiter field and use “,” or “; “ to separate each year.

**Variations**

- This can be used in any situation where you want to roll up and display multiple text values from a child object.
- This rollup would work well as a nightly or even weekly scheduled calculation, as well as in realtime.

**Contributed By**
Heath Parks, [North Peak Solutions](https://www.northpeak.com/)

<!-- Edited by Jillian Nii 05/05/2022 -->
