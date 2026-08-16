---
title: "Contact: Campaign of First Donation"
category: "campaigns-registrations-applications"
operation: "First"
mode: "Watch for Changes and Process Later"
---

**Description**

> This rollup example uses the Nonprofit Success Pack (NPSP), which has a primary campaign source and a primary contact on each opportunity. Rolling up the Campaign (used for the appeal) on a contact’s first donation tells us which appeal they first responded to with a donation.

**Objects, Fields, Relationships**

| Field | Value |
| ------- | -------- |
|             Parent Object | `Contact`                                                                                                                                                                                    |
|              Child Object | `Opportunity`                                                                                                                                                                                |
|        Relationship Field | `npsp__Primary_Contact__c`                                                                                                                                                                   |
|     Relationship Criteria | None                                                                                                                                                                                         |
|        Field to Aggregate | `CampaignId`                                                                                                                                                                                 |
|         Field to Order By | `CloseDate`                                                                                                                                                                                  |
|       Aggregate Operation | `FIRST`                                                                                                                                                                                      |
|    Aggregate Result Field | `DLRS_First_Campaign_Supported__c`                                                                                                                                                           |
|          Calculation Mode | `Watch for Changes and Process Later`                                                                                                                                                        |
| Schedule vs Child Trigger | Deploy the Child Trigger, and since this is unlikely to be urgent and would not change after creation, this roll-up is a good fit for scheduling to run with the DLRS calculation scheduler. |

**Preparation**

> As currently written, you’d see the Campaign Id rather than the name in the result field, so you might want to create an additional text formula field on Opportunity to show the Campaign Name, and aggregate that field instead. (You can display this field in related lists, and use as an email merge field too, so it’s helpful to have anyway!)

**Variations**

- Identify the campaign for a contact’s most recent gift. All you would need to do is change the Action to Last.

- Show the first or last Campaign on Account instead, using Account as the relationship field.

**Contributed by** Amanda Styles
