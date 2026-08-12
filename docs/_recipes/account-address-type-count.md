---
title: "Account: Address Type Count"
anchor: "account-address-type-count"
category: "affiliations-relationships-accounts-contacts"
category_url: "Affiliations,-Relationships,-Accounts,-Contacts.html"
category_label: "Affiliations, Relationships, Accounts, Contacts"
op: "Count"
mode: "Scheduled"
mode_class: "scheduled"
parent_object: "Account"
---

**Description**

> Counts the number of Address Types associated with an Account. We use the Address Type field to indicate specific purposes for addresses, including Acknowledgements, Direct Mail, and Event Invitations. This rollup counts how many addresses have a specific type value, 'Direct Mail' in this case, to check that the value exists.

| Field                             | Value                             |
| ---------------------------------- | --------------------------------------- |
| Parent Object                      | `Account`                               |
| Child Object                       | `npsp__Address__c`                      |
| Relationship Field                 | `npsp__Household_Account__c`            |
| Relationship Criteria (SOQL Query) | `npsp__Address_Type__c = ‘Direct Mail’` |
| Relationship Criteria Fields       | `npsp__Address_Type__c`                 |
| Field to Aggregate                 | `Id`                                    |
| Order By Field                     | n/a                                     |
| Aggregate Operation                | `COUNT`                                 |
| Aggregate Result Field             | `Count_of_DirectMail Address__c`        |
| Calculation Mode                   | `Scheduled`                             |
| Schedule vs Child Trigger          | `Run on a schedule`                     |

**Preparation**

> I think I would do an incremental scheduled batch if I did this again.

**Contributed By**
Amanda Styles, [Traction on Demand](https://www.tractionondemand.com/)
