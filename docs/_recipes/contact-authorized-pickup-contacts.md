---
title: "Contact: Authorized Pickup Contacts"
anchor: "contact-authorized-pickup-contacts"
category: "students-scores-attendance"
category_url: "Students,-Scores,-Attendance.html"
category_label: "Students, Scores, Attendance"
op: "Concatenate"
mode: "Realtime"
mode_class: "realtime"
parent_object: "Contact"
---

**Description**

> We often need to see a list of key contacts (authorized to pick up students) - in a short field on the student Contact record to review in one place. Using the concatenate operator can list all of this information in one field. The child objects here are part of a managed package called [Traction Rec](https://appexchange.salesforce.com/listingDetail?listingId=a0N3A00000FYE1kUAH&msclkid=5bfeec30cbe311ec88624bc25754db7d)

|                              Field | Value                                                                                                               
| ---------------------------------: | ------------------------------------- |
| Parent Object                      | `Contact`                                                  |
| Child Object                       | `TREX1__Authorized_Pickup__c`                              |
| Relationship Field                 | `ContactId`                                                |
| Relationship Criteria (SOQL Query) | `TREX1__End_Date__c >= Today OR TREX1__End_Date__c = NULL` |
| Relationship Criteria Fields       | `TREX1__End_Date__c`                                       |
| Field to Aggregate                 | `Authorized_Pickup_Name__c`                                |
| Order By Field                     | n/a                                                        |
| Aggregate Operation                | `CONCATENATE`                                              |
| Aggregate Result Field             | `Authorized_Pickups__c`                                    |
| Calculation Mode                   | `Realtime`                                                 |
| Schedule vs Child Trigger          | `Child Trigger deployed`                                   |

**Contributed By**
John McInnes, [Traction Rec, Uncommon Purpose](http://www.uncommonpurpose.com)
