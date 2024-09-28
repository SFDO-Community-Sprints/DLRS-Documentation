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
**Topics:** 

**Known Issues**

- Release v2.12 Welcome tab incorrectly stated in some cases the Remote Site was created when it was not
- Starting with v2.13 of the Welcome tab has been fixed and enhanced to improve the setup experience
- Session based IP restrictions can interfere with the tool, see [here](https://github.com/afawcett/declarative-lookup-rollup-summaries#usage-information-and-known-issues).

## Why did I receive a warning that "Lookup Rollup Summary Logs Exist?

**What is this?**

Rollups that have [Calculation Mode set to Scheduled (aka Watch for Changes and Process Later after v 2.21) ](https://github.com/afawcett/declarative-lookup-rollup-summaries/wiki/What-you-need-to-know-about-Scheduling-Rollups) generate logs when failures occur.

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

## Why are my rollup totals out of date?

- Check the Calculation Mode field on your DLRS job. Realtime jobs should run every time a record is updated, and Scheduled jobs can be set to run daily, weekly, or monthly.  If you have set the mode to "Scheduled", have you created a Scheduled Apex Job to refresh the calculations? - see [DLRS Calculation](https://sfdo-community.github.io/declarative-lookup-rollup-summaries/Architecture/calculates.html)
- Use the `Full Calculate` button to force a refresh of the calculation; this is the best way to check that your criteria are still appropriate and that the system is finding records to update.
- Make sure that any updates you are making to the child records will trigger your rollups.  For example, if you are using third party tools like Duplicate Check to merge or update records, the record updates may not meet the criteria to trigger DLRS Realtime jobs. You might consider adding a scheduled calculation to your realtime rollups to include records that you merge or update on a regular basis.

## Why am I receiving this error "System.LimitException: dlrs:Too many query rows: 50001"

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

## What are the Aggregation Operators?

- **Sum** add up numerical source values (number, currency or percent field)
- **Max** find the largest numerical source value (number, currency or percent field)
- **Min** find the smallest numerical source value (number, currency or percent field)
- **Avg** calculate the mean of all numerical source values (number, currency or percent field)
- **Count** Tally up the number of child records. The most common source field for this operation is the record Id. 
- **Count Distinct** Tally up the number of child records but exclude duplicate source values. The most common source field for this operation is the field that contains the potential duplicate values. 
- **Concatenate** combine all the child records’ values into one long string. 
- **Concatenate Distinct** combine all the child records’ values into one long string but exclude duplicate values. 
- **First** find the value of the child record that ranks first according to your ‘Order by’ specification. If you don’t specify an ‘Order by’ it defaults to ordering by the source field. (see [SOQL and SOSL Reference](https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_orderby.htm))
- **Last** find the value of the child record that ranks last according to your ‘Order by’ specification. If you don’t specify an ‘Order by’ it defaults to ordering by the source field


## Lookup Rollup summaries status showing as failed, but when I check, the summaries haven’t failed at all. In this case your rollup summary job may already be running.

**Error Message: A calculated job for rollup [name of rollup] is already executing. If you suspect it is not already running, try clearing the applicable record from the Lookup Rollup Calculate Jobs tab and try again. Review the error, rollup definition and/or delete the Apex Scheduled job under Setup. Check if the rollup still exists via the Manage Rollup Summaries and/or Lookup Rollup Summaries tabs.**

This error means a batch job was started for [name of rollup], but it failed during execution. There is a LookupRollupCalculateJob__c record in the system as a "hold" mark for the running job. Unfortunately that job failed to run which means it also failed to clean up that job record. You'll need to manually clean up that job record as well as pay attention to the next run or two to see if they fail with any kind of error, putting you back into the same state.

Go to the Lookup Rollup Calculate Jobs tab and you should see a record in that object if the job is not running correctly. Delete the record and try re-running the job. 

How do you find Lookup Rollup Calculate Jobs? 
1. If you are in the Declarative Lookup Rollup App, go to the nine-dot square on the left side of your tab line.
2. Click the square and in the search box, Type Lookup Rollup.
3. You’ll see the Lookup Rollup Calculate Jobs. Click on it and delete the other job that’s running and add it back to be calculated. 

_Topics: rollup job_

## Why is DLRS trying to update parent records which have been excluded in the Relationship Criteria? (For example, you want a rollup counting Cases on their parent Contact record, but you want to exclude certain Contacts.) 

The Relationship Criteria field only applies to Child Records and not Parent Records. 

If you want to filter parent records, you have to use Schedule Full Calculate. That will avoid updating any parents that are filtered out. 
1. Change the calculation mode to Invocable by Automation. 
2. Here is the [Schedule Full Calculate documentation](https://sfdo-community-sprints.github.io/DLRS-Documentation/User%20Guide/scheduling_rollups_v2_21.html#full-calculation---recalcuate-now-or-schedule-recalculation) to set up if you want to exclude parent records from the rollup 

_Topics: Filter, relationship criteria_

## I deleted a DLRS roll-up because it was no longer required - why am I receiving errors? 

Whilst the Roll-up has been ‘deleted’ the scheduled Apex job is still running in the background, which is why error messages will be sent out; the process is not complete. To ensure that the DLRS is fully removed navigate to Setup > Scheduled Jobs and locate the roll-up schedule and delete it there too.

_Topics: apex, scheduled job, error, delete_

## Editing DLRS after Child Trigger has been deployed - do I need to remove and re-deploy the child trigger?
I need to make some modifications to the existing rollup summary, particularly updating the field in the relationship criteria. Is saving a rollup summary enough, or do I also need to manage child trigger?
No, you do not need to redeploy the trigger, saving the updated rollup configuration is enough.

_Topics: childTrigger_

## Is DLRS safe to install in a Salesforce production environment?

There can be concerns about installing Declarative Lookup Rollup Summaries (DLRS) in a Salesforce production environment as it is an open source application. However, this does not introduce an inherent security risk. It is safe to install DLRS in your production org and it is recommended you do so via [download on the AppExchange](https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3000000B45gWEAR).

DLRS's managed package has gone through Salesforce's rigorous [AppExchange security review](https://developer.salesforce.com/docs/atlas.en-us.packagingGuide.meta/packagingGuide/security_review_overview.htm). This means that Salesforce's security team has reviewed the code and determined it correctly respected various security guidelines, including user permissions. DLRS has the equivalent security expectation and holds the same trust assurances as any commercially installed package on the AppExchange.

Furthermore, DLRS is built natively on Salesforce. This means that the data resides in Salesforce during the whole calculation process and uses Salesforce’s standard security functionality to protect the data.

_Topics: security, security review, trust, production, install_

## Inactive user causing a failed batch Apex job on RollupJob class

A batch Apex job related to the RollupJob class will fail if the user is inactive. Here are the steps to fix this:

Scheduling of jobs changes slightly based on what version you are on.  If you are on DLRS version v2.21 or above, these are the steps to follow:

1. From the new Manage Lookup Summaries (Beta) Page, click on the rollup you are wanting to change
2. From the Rollup, click on Schedule Job in the path at the top.
3. Once in the Process Scheduled Items screen, find the schedule in the Existing Schedules of RollupJob you want to delete, in the dropdown carrot at the end of the line  select Delete. 
4. [Here is a document](https://sfdo-community-sprints.github.io/DLRS-Documentation/User%20Guide/scheduling_rollups_v2_21.html#deploying-and-scheduling-rollups-for-version-221) for further information on scheduling jobs (v2.21 or above)

If you are on DLRS version v2.20 or below, these are the steps to follow:
1. Delete the scheduled job:
2. Go to Setup | Scheduled Jobs | <<Name of RollupJob>> | Del
3. To add the new scheduled job: From the old Manage Lookup Summaries Page, select the rollup you are wanting to change from the drop down.
Select Schedule Full Calculate
4. Set the schedule as you would like and select Schedule Recurring Full Calculate Job
5. [Here is a document](https://sfdo-community-sprints.github.io/DLRS-Documentation/User%20Guide/#activating-new-lookup-rollup-summary) for further information on scheduling jobs (v2.20 or below)

**It is highly recommended to upgrade to the latest version of DLRS as it is easier to make these and all changes via the wizard (rather than Setup).**

_Topics: inactive user, failed batch Apex job, Apex job_

## Can DLRS calculations be triggered only for records meeting certain criteria?

DLRS allows you to specify filter criteria directly within its configuration. When creating a rollup summary, you can define a filter using a SOQL WHERE clause in the relationship criteria field that ensures only records meeting specific conditions (e.g. a particular field value) are included in the rollup. 

This approach allows DLRS to process only the records that meet your specified criteria automatically, without needing to write any code.

_Topics: calculation, criteria, filter, SOQL query filter, SOQL_

## Can we invoke DLRS from custom triggers?

Yes, you can invoke DLRS from custom triggers. When using DLRS in "Developer Mode," you have more control over when and how the rollup calculations happen. In this mode, you can call the DLRS recalculation logic from your Apex triggers.

You can also call a DLRS rollup from a flow or other declarative automation via invocable by automation calculation mode (also known as Process Builder prior to v2.21). 

[Click here](https://dandonin.com/2017/03/16/how-to-dlrs/) for more details on how to use DLRS classes if you use developer mode.

_Topics: trigger, automation, developer mode, Apex trigger_

## How can I summarize records created in the last N days?

You can use Date Literals in your Relationship Criteria like this: CreatedDate = LAST_N_DAYS:60. You can also use LAST_MONTH, THIS_MONTH, LAST_90_DAYS, and [many more](https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_dateformats.htm?_ga=2.240069571.1946459829.1727372514-44794341.1726858248).

However, keep in mind that rollup fields don't automatically recalculate when dates are used. To ensure it keeps up with the window of N days, you'll need to schedule a periodic Full Calculate to refresh the rollup values. Every day or every week is probably necessary (depending on how critical it is that it be correct).

_Topics: dates, soql, full calculate, relationship criteria_

## Seeing records in the "Lookup Rollup Summary Schedule Items" object but never had a rollup in Scheduled (aka Watch for Changes and Process Later in v. 2.21 and later) mode?

These records in the Lookup Rollup Summary Schedule Items object are being created when a trigger is deployed (so Calc Mode is either "Scheduled" OR "Realtime) and the box _Deploy code to support record merging is checked_ when deploying the trigger.
 
**What is happening here:**
1. The DLRS rollups referenced in the Lookup Rollup Summary Schedule Items records are not in Scheduled mode and never have been.
2. The "Parent Record" for all of the Lookup Rollup Summary Schedule Items records will merge all the records

**Solution:**
1. Remove the trigger, re-deploy it, and uncheck Deploy code to support record merging , not that no new Lookup Rollup Summary Schedule Items records should be created post-merging.
2. [Full solution documentation can be found here](https://andyinthecloud.com/2016/06/19/declarative-rollup-tool-summer-release/)
 
If you do want to use the Deploy code to support record merging, you should also make sure you schedule the RollupJob Apex class to run on some schedule.

## Why are Lookup Rollup Summary Schedule Item records being generated for a real-time rollup, and why aren’t rollups recalculating after a record merge?
There is an undocumented behavior in DLRS when merging records—it generates a Scheduled Item. This occurs because DLRS is sometimes unable to recalculate rollup values correctly during a merge. The creation of a Scheduled Item serves as a signal to recalculate the rollup later.

While the DLRS development team is considering ways to make this behavior clearer or handle it more effectively, there’s no specific ETA for improvements at this time.

The recommended solution is to schedule the RollupJob class to run periodically to clean up these records. Running it once a day or even once an hour should suffice for most users. Essentially, DLRS is functioning as expected—it’s just that this behavior is not widely known.

## How efficient is it to run multiple DLRS rollups with the same criteria?
By default, DLRS processes each rollup individually using its internal logic. However, if you configure Flow to queue all rollups within the same node, Flow’s bulkification feature could potentially process them together in a single query, reducing resource consumption.

One possible solution is to build a collection in Flow, combining the rollup name and parent record ID for each target rollup. You can then pass this collection through the same Flow node to allow bulk processing.

This approach would require testing to confirm in your specific environment, but DLRS should be capable of optimizing rollup processing if Flow’s bulkification is properly utilized. We’d love to hear how it works for you!

## Performing Update on child record does not trigger roll-up calculation
**Attempting to trigger the rollup calculation on existing records by performing a Update of RecordId on existing records. If I create/clone a new child record, the rollup does calculate OR if I perform a full recalculate, the rollup does calculate (proving the rollup works/configured correctly).**

DLRS attempts to be careful about updates. It will only reprocess the rollup configuration when a record is updated and one of the fields it cares about are changed. The Relationship Field, Field to Rollup, or any of the fields listed in Relationship Criteria Fields. It compares the old and new values during an update and if any of them have changed then it causes the rollup to occur.

If you're simply re-saving the record but not changing any of those values as part of that save, then DLRS will not execute the rollup in an effort to be efficient with the system resources. This can be a particular problem for things like formula fields that references related objects through a Lookup, or Relationship Criteria that directly references parent/lookup values. (Adding and deleting child records works because DLRS doesn't have old/new values for those so they automatically cause recalculation attempts)

DLRS has had this behavior for a very long time; however, in v2.19 we added a new behavior where even if the rollup is calculated, if the calculated value matches the value already on the parent then it doesn't perform the DML action because it wouldn't result in a different value. That doesn't sound like what you're dealing with, but there is a checkbox in the Custom Setting for DLRS to disable that behavior if you think you need it.

## Can I build a roll-up where one of the relationship fields is a formula field referencing a parent object?

Depending on your use case, your options include:you could have a few options.If you use the "Invocable by Automation" mode through a Flow (it is just an Invocable Action) then you can use Flow to tell DLRS when to recalculate the rollup. If you know your logic then you could intelligently prompt a recalculation for specific rollups for specific parent records.

Other options, put a random text field on the record and just put a random value in there, or a number and increment the number. You can then tell the rollup via Relationship Criteria Fields that this field should be monitored, anytime you change the value to anything different then it will fire the rollup. That would give you a lot of ways to update that value and force the rollup to update.

## I am trying to use Relationship Criteria to exclude certain records from rollups. Why are those records still triggering recalculations?

Relationship Criteria does not determine when a rollup runs - they determine which records are included in the summary. Normally for existing records, Relationship Criteria Fields, Field to Aggregate, and the Relationship Field that points to the parent record are used to determine if a rollup to the parent should be recalculated.

## Why is DLRS updating parent records with 0 instead of NULL?

If there aren’t any child records to include in the summary, DLRS will return 0. Right now, there is not a way to customize the “default” or zero value of a rollup when there are no contributing records or when the total is zero. Most users handle it with a flow that swaps zero to NULL, or a formula field uses a default value when needed.

## How can I prevent DLRS from updating a field?

In the Realtime Calculation Mode you can’t. The calculation will run for all parent accounts.  This is possible using a Full Calculate job and Scheduled Full Calculate Job, you can filter parent records.  From those pages, enter the filter criteria for the parent account in the “Filter parent object [Object Name] records to update using WHERE clause (Optional).

## I used the declarative rollup lookup summary to create a count of attachments attached to a case. It works fine with documents but doesn't seem to count .jpg and .png file types.

When the DLRS definition is created with attachments (e.g. JPG, PDF, PNG) the destination field (Number_of_attachments__c in this example) will update as expected.

However, when Files are uploaded (they are not Attachment records, but instead ContentDocument records that are linked to other records in Salesforce via ContentDocumentLink), we see that Number_of_attachments__c is not updating as expected. Salesforce mashes both Attachment and ContentDocument records into the Attachments related list, which may cause confusion.

A possible workaround here is to create a separate Number_of_files__c field and the DLRS definition shown below.

This updates as expected with a count of only those files that are linked to the case.

Number_of_attachments__c and Number_of_files__c can be summed with a formula field (or number field set that can be set with a before record save flow or Apex trigger).
You can confirm this by checking out the record's Attachments related list on a Case record that is not updating as you expect.
- Classic: Edit, View, Del for Attachments; Preview, Download, Del for Files
- Lightning Experience: Delete, Download for Attachments; Download, Share, Public Link, View File Details, Upload New Version, Edit File Details, Delete, Remove from Record for Files

## I'd like to create a roll up with a Campaign Member, but when I try to deploy the trigger I get the following error:  
**dlrs_CampaignMemberTest.testTrigger System.DmlException: Insert failed. First exception on row 0; first error: MALFORMED_ID, Invalid campaign id: null: [CampaignId] Class.dlrs.RollupService.testHandler: line 277, column 1 Class.dlrs_CampaignMemberTest.testTrigger: line 11, column 1**

Apex Text Classes run through what the code should be doing to "test" and make sure everything in the code is working as expected. They have other purposes as well, but that's enough to give context to what you need to do to resolve the issue. 

You need to add a custom test method to successfully delpoy the CampaignChild Trigger. Basically, it adds creating a Campaign record and a test contact in the test class (because Campaigns and Contacts are required to create Campaign Members and thus are needed in the test.) 

**Steps to resolve:**  
In the Advanced section of edit page, you'll find the Test Code (child) field. Copy and paste the following into that box and try to redeploy.  

  Campaign camp = new Campaign(Name = 'Test Campaign');  
        Insert camp;  
        Contact c = new Contact(LastName = 'Test');  
        Insert c;  
        dlrs.RollupService.testHandler(new CampaignMember(CampaignId = camp.Id, ContactId = c.Id));  

If you are in the new wizard (v 2.21 and bayond) you will need to click on the carrot arrow at the front of the section to open the Advanced section. 


__________________________________________________________________________
**This FAQ page was updated by the team at the September 2024 Vrtual Sprint.**  
Many thanks go to Shari Carlson, Jackson Day, Geeta Gunari, Nick Lindberg, Katie Loescher, Swapna Para, Trish Perkins, Yvonne Small, Deep Talluri, Charles Thompson, and Priya Vappanhody.













