---
layout: default
title: Upgrade
nav_order: 4
parent: Installation
has_children: false
---

# Upgrading the Package

In about 2015, DLRS introduced the ability to store rollup definitions in Custom Metadata rather than in a Custom Object. This is great news for anyone who wants to use their rollups in a Sandbox or deploy rollups from a Sandbox to Production. You may be wondering: what do you need to do to upgrade from the older version that uses custom objects to the newer version with custom meta data? 

## Why This Matters: 
While DLRS has been using Custom Metadata (CMDT) for several years, you may have old rollups in your org that were built when it used records in a Custom Object called Lookup Rollup Summary. In previous versions, these records have continued to be used by the code, but in this new version, you will need to migrate to them to CMDT records for your rollups to work and so that you can use the new and improved wizard in our UI.

## How To Upgrade: 
- Start by reviewing your org. Open Setup (the gear) and check Installed Packages. You’ll see a listing for Declarative Lookup Rollup Summaries Tool. If the version is below 2.0 you will need to upgrade. Even if you have a newer version, you should evaluate if you have lingering records that need to be migrated.
- Review your existing rollups to see if you actually still need them all. If anything is inactive or you don’t need it anymore, this is a great chance to clean up and help your org run more efficiently.
- To determine if you have custom object records that you need to migrate, open Salesforce Inspector Reloaded or the Developer Console and run the following SOQL query:

> Select Id FROM dlrs__LookupRollupSummary__c 

If that doesn’t work, try:

> Select Id FROM LookupRollupSummary__c

If you get results, you need to migrate. If not, your existing rollups are already in CMDT records!

- If you need to migrate, export the results of that query so you’ll can create new records via the [Instructions in Getting Started](https://github.com/SFDO-Community-Sprints/DLRS-Documentation/blob/main/docs/User%20Guide/index.md).

Note: If you have data in the Test Code field, you will need to move that code to either the Test Code (Child Object) or Test Code (Parent Object) - or both.


## Extra Credit:

Do you want to create these records via an import? You can!

Steps:
Open up Salesforce Inspector Reloaded or the Dev Console and run the following SOQL query:

If you run the query **before** installing the upgrade:
> Select Id, dlrs__Active__c, dlrs__AggregateAllRows__c, dlrs__AggregateOperation__c, dlrs__AggregateResultField__c, dlrs__CalculationMode__c, dlrs__CalculationSharingMode__c,   dlrs__ChildObject__c, dlrs__ConcatenateDelimiter__c, dlrs__Description__c, dlrs__FieldToAggregate__c, dlrs__FieldToOrderBy__c, DeveloperName, dlrs__ParentObject__c, dlrs__RelationshipCriteria__c, dlrs__RelationshipCriteriaFields__c, dlrs__RelationshipField__c, dlrs__RowLimit__c, dlrs__TestCode__c, dlrs__TestCodeSeeAllData__c, MasterLabel FROM dlrs__LookupRollupSummary2__mdt 

If you run the query **after** installing the upgrade (note that all that is different is the namespace dlrs is missing):
> Select Id, Active__c, AggregateAllRows__c, AggregateOperation__c, AggregateResultField__c, CalculationMode__c, CalculationSharingMode__c, ChildObject__c, ConcatenateDelimiter__c, Description__c, FieldToAggregate__c, FieldToOrderBy__c, DeveloperName, ParentObject__c, RelationshipCriteria__c, RelationshipCriteriaFields__c, RelationshipField__c, RowLimit__c, TestCode__c, TestCodeSeeAllData__c FROM LookupRollupSummary2__mdt 

Export those query results and map your existing records onto that spreadsheet using this mapping guide. Remove that dlrs__ header from the field names for easier mapping.

[Mapping Guide](https://docs.google.com/spreadsheets/d/1RsdTNe3SAtd3GuRarr_ajytwul3--0oYh7zKRij1hbg/edit#gid=224647567)

## Insert your records.
1. Open [Salesforce Inspector Reloaded](https://chromewebstore.google.com/detail/salesforce-inspector-relo/hpijlohoihegkfehhibggnkbjhoemldh).
2. Click Data Import
3. Choose:
- Metadata for the API Type
- Upload for the Action.
- LookupRollupSummary2__mdt for the Object.
- Excel for the Format

![Import Screenshot](https://github.com/SFDO-Community-Sprints/DLRS-Documentation/blob/main/assets/DLRSUpgradeImportScreenshot.png)

4. Paste in your Excel data. Notice that the Field Mapping on the right side populates.
- You must have a MasterLabel field!
5. Skip the Id if you have one.
6. Check that all of your fields are mapped.
7. Run Upsert Metadata.
8. Celebrate!

## Bonus:

Delete your old LookupRollupSummary records to keep your org clean now that you don’t need them.
