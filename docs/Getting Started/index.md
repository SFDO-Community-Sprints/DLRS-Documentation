---
layout: default
title: Getting Started
nav_order: 4
has_children: true
---

# Getting Started
## Creating a New Lookup Rollup Summary

0. (Not technically a DLRS step. But you must first create the field on the parent object that is going to store your rollup results. You will need this field to exist when creating your rollup.)

1. Open the DLRS (Declarative Lookup Rollup Summaries) App. Click the third tab 'Manage Lookup Rollup Summaries'.

![DLRS Lookup Relation Fields](/DLRS-Documentation/assets/DLRSLookupRelationFields.png)

2. At the top of the page, in the dropdown for ‘Select Lookup Rollup Summary’ select ‘Create new…’. 

3. Fill out the following fields. These are required to create a new Lookup Rollup Summary:<br>
        - Lookup Rollup Summary Name<br>
        - Lookup Rollup Summary Unique Name (This field does not auto-populate when manually creating a rollup. Tip: Include a unique name without spaces. Try                  copying your Lookup Rollup Summary Name and replacing spaces for underscores.) <br>
        - Parent Object<br>
        - Child Object<br>
        - Relationship Field<br>
        - Field to Aggregate<br>
        - Aggregate Operation<br>
        - Aggregate Result Field (The field you created in Step 0, above.)<br>
        - Calculation Mode<br>
        - Calculation Sharing Mode<br>

    All fields, both required and optional, that appear on this page are defined in the chart below.

## Lookup Relationships Fields

| Lookup Rollup Summary Name  | Name of your new rollup |
| ------------- | ------------- |
| Parent Object  | API name of the object that you want the rollup summary to be stored on.  |
| Child Object | API name of the object that you want to query and rollup to the Parent Object.  |
| Relationship Field | API name of the lookup field on the Child Object relating to the Parent Object.  |
|_Relationship Criteria (optional)_| If you want to filter the Child Object records enter the SOQL WHERE query here, e.g. Amount >200 AND Stage  = ‘Closed Won’|
|_Relationship Criteria Fields (optional)_|Enter any field that will be used in the Criteria from above, enter one field per line e.g.<br>Amount<br>Stage<br>_If you are referencing RecordType.Name or RecordType.DeveloperName in your WHERE clause, exclude them from the Relationship Criteria fields as it will result in an error._|

![DLRS Rollup Detail Fields](/DLRS-Documentation/assets/DLRSRollupDetailFields.png)  

## Rollup Details Fields

|  Rollup Details Field Name    |               |
| ------------- | ------------- |
| Field to Aggregate  | API name of the fields on the child record.  |
| Field to Order By | Useful if concatenating.  |
| Aggregate Operation | Sum<br>Max<br>Min<br>Avg<br>Count<br>Count Distinct<br>Concatenate<br>Concatenate Distinct<br>First<br>Last  |
| Aggregate Result Field | Parent field to write the result of the rollup.|
| Aggregate All Rows | If only a selection of records needed to be rolled up. |
| Row Limit | How many rows to include in the rollup.|
| Active | This can only be checked as Active after the child trigger has been deployed.<br><br>If your calculation mode is Process Builder or Developer, you can check Active because those modes do not use the child trigger.|
| Calculation Mode | Please see the [Scheduling](https://sfdo-community-sprints.github.io/DLRS-Documentation/User%20Guide/scheduling_rollups.html) and [Performance](https://sfdo-community-sprints.github.io/DLRS-Documentation/Issues/#how-do-i-optimize-dlrs-i-am-running-into-apex-cpu-limits-or-other-performance-issues) issues FAQ before setting the calculation  mode as using the Realtime mode can run into performance issues and Apex CPU limits<br>Scheduled<br>- Run a full or incremental calculate on a schedule with Scheduled Apex<br>Process Builder<br>- Call the DLRS Apex Action from a Process builder either as an immediate or scheduled action<br>Realtime<br>- Uses the child trigger to immediately calculate rollups<br>Developer<br>- Allows you to call DLRS from your own apex without using the DLRS trigger |
| Calculation Sharing Mode | Determines whether Salesforce sharing configurations should be taken into account when the rollup calculates<br>User<br>- Calculates all records visible to the user who triggered the rollup calculation<br>System<br>- Will calculate all records regardless of the current users’ access |
|**Text Lookups** | If using ‘Concatenate’ or ‘Concatenate Distinct’ in Aggregate Operation, the delimiter used to separate the values e.g. , (comma) : (semi-colon) etc.|
|           |         |
|**Description** | The description of the Rollup |
|           |         |
|**Advanced**| The fields below are used when the test code methods need to be edited for deployment or to maintain code coverage.<br>For more information please see [this example where these fields were needed](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/issues/356). |
| Test Code (Child Object)        |         |
| Test Code (Parent Object)       |         |
| Test Code See All Data          |         |

4. Click 'Save.'

![DLRS Advanced Fields](/DLRS-Documentation/assets/DLRSAdvancedFields.png)

##  Activating New Lookup Rollup Summary

If your calculation mode is anything other than “Process Builder”, follow the steps below to activate your rollup.

1. Scroll to the top of the page and click 'Manage Child Trigger'.

Manage Trigger Page: 

2.  The 'Manage Trigger' page will open up. Scroll to the bottom of the page and click 'Deploy'.
3.  Wait for deployment. Once deployed, 'Deployment Complete' will appear in a gray box at the top of the page.
4. Scroll to the bottom of the page and click 'Cancel' to return to the previous page. 

Manage Lookup Rollup Summary Page:

5. Under the section 'Rollup Details', click 'Active'.
6. Click 'Save' again.

**Calculation Modes - How the Roll-up is Triggered**

In order for the roll-up field to update those setting up the roll-up can choose from 4 different calculation modes which trigger it. An Apex Trigger (which the app creates) must be deployed to use Realtime and Scheduled mode however, no Trigger is required for the other methods.

* Realtime: Triggers the calculation of roll-ups every time a child record is edited.
    * If realtime roll-ups are enabled you can also run the roll-up on a Schedule Full Calculate to catch merges.
* Scheduled (incremental calculation): Roll-ups will not run every time a child is created but will be processed in bulk when Apex is scheduled.
    * A trigger installed by DLRS makes note of each child record that gets changed and stores it in the Lookup Rollup Summary Schedule Items object. Then whenever the Apex Class “RollupJob” runs all of those items are taken care of and then the Schedule Item deleted. Scheduling RollupJob must be accomplished outside of the DLRS app. Go to Setup>Custom Code>Apex Classes and click Schedule Apex. You can actually do this multiple times, setting the RollupJob class to run, for example, at 9am, noon, 3pm, and 6pm. That would ensure that your rollups are never more than three hours stale during the workday. If you want to monitor the status of rollups, it’s easy to make a report of Lookup Rollup Summary Schedule Items and make sure that there are few records (or none) sitting and waiting to calculate. To set a DLRS to Scheduled, you must deploy the child trigger. The Calculation Mode picker is set to Scheduled. (copied from cookbook and needs to be abridged)
* Schedule Full Calculate: This does not require the Apex Trigger. This is calculated using the Schedule Full Calculate. Triggers roll-ups to calculate on set intervals. By default these are scheduled to run every day at 2am. However you can set this to run every hour, day, week or month or on a specific hour, day or month.
    * There is an option to set criteria (WHERE clause) on the parent object the limit the number of records scheduled to recalculate their roll-ups.
    * You can see when the Roll-up is scheduled to run next on the roll-up itself.
    * To reschedule or stop, go to APEX Jobs and delete the scheduled job and recreate it on the roll-up.
* Process Builder: Roll-ups can be invoked by a process in process builder.
* Developer Mode: Roll-ups can be invoked by orgs' own apex without using the DLRS trigger
