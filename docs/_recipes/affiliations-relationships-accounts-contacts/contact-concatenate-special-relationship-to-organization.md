---
title: "Contact: Concatenate Special Relationship to Organization"
anchor: "contact-concatenate-special-relationship-to-organization"
category: "affiliations-relationships-accounts-contacts"
category_url: "Affiliations,-Relationships,-Accounts,-Contacts.html"
category_label: "Affiliations, Relationships, Accounts, Contacts"
order: 2
op: "Concatenate Distinct"
mode: "Realtime"
mode_class: "realtime"
parent_object: "Contact"
---

**Description**
>This is a variation on the board member count rollup using text instead of count. This can help track from a contact level who is on the board, staff, and volunteers if those are being tracked by affiliations. This rollup is generally good for end users to see a quick list of important interactions with your org and for ease of use with reporting. 

**Objects, Fields, Relationships**

| Field                             | Value          |
| ---------------------------------- | --------------------------- |
| Parent Object | `Contact` |
| Child Object | `npe5__Affiliation__c` |
| Relationship Field |`npe5__Contact__c` |
| Relationship Criteria (SOQL Query) |`(npe5__Status__c = 'Current') AND (npe5__Organization__c = '_Your Org's 18 Digit Account ID_')` |
| Relationship Criteria Fields | `npe5__Status__c, npe5__Organization__c` |
| Field to Aggregate |`Role_Text_Formula__c` |
| Order By Field | n/a |
| Aggregate Operation | `CONCATENATE DISTINCT` |
| Aggregate Result Field |  `DLRS_Special_Relationship_to_(Org Name)__c` |
| Calculation Mode | `Realtime`
| Schedule vs Child Trigger | Child Trigger deployed.

**Any test code or other preparations needed:**
- Create role picklist values for Board Member, Volunteer, Staff, etc, in the Role Text Formula field
- Create the account for your organization, and get the Account Id.
- In this example, I relabeled the standard Affiliations Role field to ‘Title’, and created a new Role Text picklist, because we didn't want to use the Related Opportunity Contact role and trigger out-of-the-box automation on opportunities

**Variations:**
This could also be used to track former relationships, by modifying the Status value in the Relationship Criteria.

**Contributor**
Beth Hintze, [Attain Partners](https://attainpartners.com/)
