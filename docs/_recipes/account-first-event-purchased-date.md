---
title: "Account: First Event Purchased Date"
category: "campaigns-registrations-applications"
operation: "Min"
mode: "Invocable by Automation"
---

**Description**

> this recipe rolls up the date of the first event that someone in a household has purchased a ticket for. The ticket record must be active, and the amount paid for the ticket must be greater than $0. This version is specifically for _**PatronManager**_ users, and summarizes custom Ticket Order Item records, but you could use it for any custom objects that represent tickets or registrations.

**Objects, Fields, Relationships**

| Field | Value |
| ------- | -------- |
|                      Parent Object | `Account`                                                                                                                                                                                                                                              |
|                       Child Object | `PatronTicket__TicketOrderItem__c`                                                                                                                                                                                                                     |
|                 Relationship Field | `PatronTicket__Account__c`                                                                                                                                                                                                                             |
| Relationship Criteria (SOQL Query) | `PatronTicket__Status__c = 'Active' AND PatronTicket__EffectiveTicketPrice__c > 0`                                                                                                                                                                     |
|       Relationship Criteria Fields | `PatronTicket__Status__c` `PatronTicket__EffectiveTicketPrice__c`                                                                                                                                                                                      |
|                 Field to Aggregate | `Event_Instance_As_Date__c`                                                                                                                                                                                                                            |
|               Field(s) to Order By | n/a                                                                                                                                                                                                                                                    |
|                Aggregate Operation | `MIN`                                                                                                                                                                                                                                                  |
|             Aggregate Result Field | `DLRS_First_Purchased_Event_Date__c`                                                                                                                                                                                                                   |
|                   Calculation Mode | `Invocable by Automation `           |
|          Schedule vs Child Trigger | Run on a schedule every morning at 5am, and don’t deploy the Child Trigger (since there are a lot of other triggers involved in a ticket purchase). It seems to be fine to have this field updated once a day, as it is mostly used in annual reports. |

**Preparation**

> As the Event object comes with only a Date/Time field, I added a formula to show the value just as a Date field for the field that is summarized.

**Variations**

- The Last (or Most Recent) Event Purchased Date - same thing, only with a `Max` action and a different target field.

- Rollup on `Contact` instead of `Account`. Substitute the parent object with Contact, and adjust the relationship and target fields.

**Contributed by** Caroline Renard
