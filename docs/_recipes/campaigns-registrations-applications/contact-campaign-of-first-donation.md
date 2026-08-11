---
title: "Contact: Campaign of First Donation"
anchor: "contact-campaign-of-first-donation"
category: "campaigns-registrations-applications"
category_url: "Campaigns,-Registrations,-Applications.html"
category_label: "Campaigns, Registrations, Applications"
order: 3
op: "First"
mode: "Scheduled"
mode_class: "scheduled"
parent_object: "Contact"
---

**Description**

> This rollup example uses the Nonprofit Success Pack (NPSP), which has a primary campaign source and a primary contact on each opportunity. Rolling up the Campaign (used for the appeal) on a contact’s first donation tells us which appeal they first responded to with a donation.

**Objects, Fields, Relationships**

| Field | Value |
| ------- | -------- |
|             Parent Object | `Contact`                                                                                                                                                                                    |
|              Child Object | `Opportunity`                                                                                                                                                                                |
|        Relationship Field | `Primary Contact`                                                                                                                                                                            |
|     Relationship Criteria | None                                                                                                                                                                                         |
|        Field to Aggregate | `CampaignID`                                                                                                                                                                                 |
|         Field to Order By | `CloseDate`                                                                                                                                                                                  |
|       Aggregate Operation | `First`                                                                                                                                                                                      |
|    Aggregate Result Field | `DLRS_First_Campaign_Supported__c`                                                                                                                                                           |
|          Calculation Mode | Scheduled                                                                                                                                                                                    |
| Schedule vs Child Trigger | Deploy the Child Trigger, and since this is unlikely to be urgent and would not change after creation, this roll-up is a good fit for scheduling to run with the DLRS calculation scheduler. |

**Preparation**

> As currently written, you’d see the Campaign Id rather than the name in the result field, so you might want to create an additional text formula field on Opportunity to show the Campaign Name, and aggregate that field instead. (You can display this field in related lists, and use as an email merge field too, so it’s helpful to have anyway!)

**Variations**

- Identify the campaign for a contact’s most recent gift. All you would need to do is change the Action to Last.

- Show the first or last Campaign on Account instead, using Account as the relationship field.

**Contributed by** Amanda Styles, [Traction on Demand](https://www.tractionondemand.com/)
