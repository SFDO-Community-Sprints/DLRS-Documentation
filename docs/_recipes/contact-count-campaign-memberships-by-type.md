---
title: "Contact: Count Campaign Memberships by Type"
anchor: "contact-count-campaign-memberships-by-type"
category: "campaigns-registrations-applications"
category_url: "Campaigns,-Registrations,-Applications.html"
category_label: "Campaigns, Registrations, Applications"
op: "Count"
mode: "Scheduled"
mode_class: "scheduled"
parent_object: "Contact"
---

**Description:**
> This is a variation of the overall campaign type counts. This is just one recipe, but it could be used for several different variations such as Direct Mail Fundraising; Email Fundraising; Social Fundraising; Advocacy; etc.

**Objects, Fields, Relationships**

| Field | Value |
| ------- | -------- |
| Parent Object | `Contact` |
| Child Object | `CampaignMember` |
| Relationship Field |`ContactId` |
| Relationship Criteria (SOQL Query) |`Campaign Type = ‘Direct Mail’ AND HasResponded = ‘TRUE’`
| Relationship Criteria Fields | `Campaign Type, HasResponded` |
| Field to Aggregate |`Id` |
| Order By Field | n/a |
| Aggregate Operation | `COUNT` |
| Aggregate Result Field |  `DLRS_Count_of_<direct_mail>_Campaign_Responses__c` |
| Calculation Mode | `Scheduled`
| Schedule vs Child Trigger | `Schedule, No Child Trigger`. This could be done in real time, but it's probably best to do a scheduled batch because of how fast and furiously campaign members can come in.

**Any test code or other preparations needed:**
> Adding the picklist values you want to use for Campaign Type. 

**Variations:**
>You could use other Campaign Type values, such as Email Fundraising, Social Fundraising, Event, etc. and set up the fields as a suite for segmentation.

**Contributed By**
Beth Hintze, [Attain Partners](https://attainpartners.com/)

<!-- Edited by Caroline Renard 04/02/2023 -->
