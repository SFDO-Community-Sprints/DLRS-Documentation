---
layout: default
title: FAQ
nav_order: 4
has_children: true
---

# Frequently Asked Questions

## Why do I need to allow Metadata API in remote site settings?

To **configure** rollups with this tool your user needs a connection and permissions to the **Salesforce Metadata API**. The **Welcome** tab for the tool provides a check for this and help guide through the configuration required. If your org is using **My Domain** you will have a much easier time and no Remote Site setting will be required. Regardless though your user will need the following permissions.

- API Access
- Metadata API Access or Modify All Data
- Author Apex (needed to use Manage Child Triggers button)
- Customize Application (needed to use Manage Rollup Summaries tab to update Custom Metadata)

**Note:** The above are powerful permissions [please review fully before enabling](https://help.salesforce.com/articleView?id=000198725&r=https:%2F%2Fwww.google.com%2F&type=1) - typically these are enabled for Admin users.

**Known Issues**

- Release v2.12 Welcome tab incorrectly stated in some cases the Remote Site was created when it was not
- Starting with v2.13 of the Welcome tab has been fixed and enhanced to improve the setup experience
- Session based IP restrictions can interfere with the tool, see [here](https://github.com/afawcett/declarative-lookup-rollup-summaries#usage-information-and-known-issues).

## Why did I recieve a warning that "Lookup Rollup Summary Logs Exist?

**What is this?**

Rollups that have [Calculation Mode set to Scheduled](https://github.com/afawcett/declarative-lookup-rollup-summaries/wiki/What-you-need-to-know-about-Scheduling-Rollups) generate logs when failures occur.

**What do I do?**

This warning lets you know that you have some log entries to view for failed parent record updates. Once you address the issues the logs should be removed the next time the scheduled job runs. Or if you prefer you can delete them yourself. Go to the **Lookup Rollup Summary Logs** tab to view them.

## How do I optimize DLRS? I am running into Apex CPU Limits or other performance issues!

DLRS gives you many options for controlling how it runs. It can run in realtime synchronously from a DLRS Trigger, your own Trigger, or Process Builder. It can also be run asynchronously with it's [Scheduled Incremental Mode or Scheduled Full Calculate Mode](https://github.com/afawcett/declarative-lookup-rollup-summaries/wiki/What-you-need-to-know-about-Scheduling-Rollups). Additionally you can use Process Builder and a Scheduled Action with a delay such as `0 Hours from now` which will happen typically within a few minutes.

Strongly consider whether you need DLRS to run in realtime or not. Also consider whether you want to deploy the DLRS trigger or call the DLRS Trigger Handler from your own trigger framework. Consider calling `dlrs.RollupService.triggerHandler()` directly.

## How do you get OR to work in the Relationship Criteria?

Make sure to wrap the query with parenthesis:

`(CRITERIA1 OR Criteria2)`

related issue [#138](https://github.com/afawcett/declarative-lookup-rollup-summaries/issues/138)

## How do I know if my scheduled Calculation Mode is working?

- Make sure your trigger is deployed and you can manually run your summary with the Calculate button
- Make sure you see the Related List: Lookup Rollup Summary Schedule Items at the bottom of your Summary
- Go and manually edit a child record's Relationship Field or any Relationship Criteria field and save the record
- Now you should see a record listed in the Lookup Rollup Summary Schedule Items list
- Let your schedule run
- Check Recent Lookup Rollup Summary Logs
- Check Setup > Jobs > Scheduled Jobs & Apex Jobs

## Why am I recieving this error "System.LimitException: dlrs:Too many query rows: 50001"

DLRS usually queries from the perspective of the parents, retrieving all of the child records that match the given criteria. If the parents in a given batch have an average of 250 (50,000 / 200) children, have many DLRS jobs configured, or have lots of cascading rollups (rollup from grandchild to parent to grandparent) then DLRS can easily request a total of >50,000 records in the given transaction.

If this is happening during a scheduled calculation or a full calculation batch job then you can adjust the batch size in the Declarative Lookup Rollup Summaries hierarchy custom setting. It defaults to 200.

## Attention: Need to delete unused field on dlrs__LookupRollupSummaryScheduleItems__c"

**What is this?**

The field ``dlrs__LookupRollupSummary__c`` on the Custom Object ``dlrs__LookupRollupSummaryScheduleItems__c`` is no longer required and has been removed from this tools package going forward. However it still exists in your org and needs to be manually removed for optimal configuration and performance.

Also note that if you have configured a new rollup since installing this version of the tool you may also be seeing this error when working with child records associated with Scheduled rollups. This error is also resolved by following the steps below. 

```dlrs.RollupService.RollupValidationException: Scheduled rollups are running in legacy mode and are unable to resolve corresponding shadow rollups. Please visit the Lookup Rollup Summary Tools tab for more information and steps to resolve.``` 

**What do I do?**

- Run a report or create list view on the **Lookup Rollup Summary Schedule Items** object that filters for records that do not contain a value in the ``Lookup Rollup Summary 2`` field. If you have records like this its possible they are very old, since this field has been being populated since v1.15 and beyond. If you want you can delete these records and re-run a full calculate for the associated Rollups.
- Next you need to go to the **Object Manager** in **Setup** and find the **Lookup Rollup Summary Schedule Items** object. Locate the field **Lookup Rollup Summary** (its a Master-Detail) with the API name ``dlrs__LookupRollupSummary__c``. 
- Delete this field and don't worry about accidentally deleting others the platform will block this. This will not effect any other data in your org as it is was purely used for the operation of the tool in prior releases and is now no longer needed. 

**Note:** If you do not see the Delete option for the above field - try switching to Salesforce Classic UI mode.


