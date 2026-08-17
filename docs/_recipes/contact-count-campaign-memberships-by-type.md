---
title: "Contact: Count Campaign Memberships by Type"
category: "campaigns-registrations-applications"
operation: "Count"
mode: "Invocable by Automation"
---

**Description:**
> This is a variation of the overall campaign type counts. This is just one recipe, but it could be used for several different variations such as Direct Mail Fundraising; Email Fundraising; Social Fundraising; Advocacy; etc.

**Objects, Fields, Relationships**

| Field | Value |
| ------- | -------- |
| Parent Object | `Contact` |
| Child Object | `CampaignMember` |
| Relationship Field |`ContactId` |
| Relationship Criteria  |`Campaign_Type__c = ‘Direct Mail’ AND HasResponded = ‘TRUE’` |
| Relationship Criteria Fields | `Campaign_Type__c, HasResponded` |
| Field to Aggregate |`Id` |
| Field(s) to Order By | n/a |
| Aggregate Operation | `COUNT` |
| Aggregate Result Field |  `DLRS_Count_of_<direct_mail>_Campaign_Responses__c` |
| Calculation Mode | `Invocable by Automation` |
| Schedule vs Child Trigger | `Schedule, No Child Trigger`. This could be done in real time, but it's probably best to do a scheduled batch because of how fast and furiously campaign members can come in. |

**Any other preparations needed:**
> Create formula field for Campaign Type on Campaign Member object.
- Field Name:: Campaign Type (Campaign_Type__c)
- Formula: Text(Campaign.Type)
> Adding the picklist values you want to use for Campaign Type. 

**Variations:**
- You could use other Campaign Type values, such as Email Fundraising, Social Fundraising, Event, etc. and set up the fields as a suite for segmentation.

**Contributed By**
Beth Hintze
