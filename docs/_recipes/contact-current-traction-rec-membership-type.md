---
title: "Contact: Current Traction Rec Membership Type"
category: "students-scores-attendance"
operation: "Concatenate Distinct"
mode: "Realtime"
---

**Description**

> This recipe rolls up the Type of the current membership to the contact for easy access. This is a part of a managed package called [Traction Rec](https://appexchange.salesforce.com/listingDetail?listingId=a0N3A00000FYE1kUAH&msclkid=5bfeec30cbe311ec88624bc25754db7d).

**Objects, Fields, Relationships**

|                              Field | Value                                                                                                               
| ---------------------------------: | ------------------------------------- |
| Parent Object                      | `Contact`            |
| Child Object                       | `TREX1__Membership__c`    |
| Relationship Field                 | `TREX1__Contact__c`   |
| Relationship Criteria (SOQL Query) | `RecordTypeId = '012f4000000DdFgAAK' AND TREX1__Status__c IN ('Active', 'Pending Active', 'Pending Withdrawal', 'Pending Transfer')` |
| Relationship Criteria Fields       | `RecordTypeId, TREX1__Status__c`      |
| Field to Aggregate                 | `TREX1__Type__c`    |
| Field(s) to Order By               | `TREX1__Start_Date__c`     |
| Aggregate Operation                | `CONCATENATE DISTINCT`    |
| Aggregate Result Field             | `Current_Membership_Type__c`     |
| Calculation Mode                   | `Realtime`    |
| Schedule vs Child Trigger          | Child Trigger deployed   |

**Variations**

- Membership Start Date (using a MAX operation) & Membership Status (using LAST, sorted by Start Date) are defined in similar ways.

**Contributed By**
John McInnes
