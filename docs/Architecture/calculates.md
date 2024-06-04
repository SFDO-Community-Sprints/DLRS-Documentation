---
layout: default
title: DLRS Calculation Modes
nav_order: 1
parent: Architecture
has_children: false
---

# DLRS Calculation Modes

There are four modes that you can use to manage how and when DLRS processes rollups, they are:
- Watch for changes and process later (prior to version 2.21 this was called "Scheduled")
- Realtime
- Invoked by Automation (prior to version 2.21 this was called "Process Builder")
- Developer

## Calculation Mode: Realtime

DLRS installs an Apex trigger on the child object. This means that as soon as a child record is created or updated the rollup will run on save and the target fields are edited. It will only run if the **Field to Aggregate** or **Criteria** fields of the Rollup job are edited.

### Considerations for Realtime Mode

There are potential performance issues with Realtime mode.

Setting a Rollup job/Rollup Definition to Realtime mode reduces Salesforce performance, as every update to those fields, **Fields to Aggregate** or **Criteria**, on a child record causes DLRS to run.

There are some scenarios where using Realtime mode would be beneficial. Take this example where there is a Rollup job/Rollup Definition counting Tasks on the parent Opportunity and the DLRS is not set to Realtime mode. When the user logs a call, the Task count would not be immediately updated. This may be confusing for the user. In this case Realtime mode would help abate confusion.

Though in some cases it makes sense to have instantaneous monitoring of data. Realtime mode can be a wider performance danger if a Rollup job/Rollup Definition runs in a context with other automations, such as Flow or Process Builder, which could result in looping automations and eventually hitting Salesforce governor limits. 


## Calculation Mode: Scheduled 

In this mode rollups do not run instantly. To set a Rollup job/Rollup Definition to Scheduled, you must deploy the child trigger. A trigger installed by DLRS makes note of each child record that gets changed and stores it in the **Lookup Rollup Summary Schedule Items** object. Then whenever the Apex Class RollupJob runs all of those items are taken care of and then the **Lookup Rollup Summary Schedule Item** record is deleted. ****Scheduling RollupJob must be accomplished outside of the DLRS app.**** 

### Monitoring Scheduled DLRS Tasks

If you want to monitor the status of rollups, it’s easy to make a report of **Lookup Rollup Summary Schedule Items** and make sure that there are few records (or none) sitting and waiting to calculate. Go to **Setup > Custom Code > Apex Classes** and click ‘Schedule Apex’. You can actually do this multiple times, setting the RollupJob class to run, for example, at 9am, noon, 3pm, and 6pm. That would ensure that your rollups are never more than three hours out of date during the workday.


## Calculation Mode: Full Calculate

Full Calculate is when DLRS loops through every existing child record and calculates the rollup on the parent, regardless of whether the child record has been edited or not. Full Calculate can be scheduled or run once immediately.

### Considerations for Full Calculate

In general, scheduled Full Calculate should be run between midnight and 6am to avoid conflict with daytime operations.

Because a Full Calculate job runs on every record it uses server resources and can take some time. More importantly, if Full Calculate runs during the workday on a large number of records it could result in _row lock_ errors—which occurs when the calculation and a user are both trying to edit the same record at the same time. 

The main use case for a scheduled Full Calculate is for rollups that have a relative time filter like ‘Last Week’,which would be defined in the Relationship** Criteria** field. In this case, a Scheduled DLRS/Rollup Definition won’t suffice because we wouldn’t be expecting any record updates to  trigger a Scheduled Rollup job/Rollup Definition. 

If a Rollupjob/Rollup Definition for Opportunities has a filter for  ‘Last Fiscal Year’, schedule the Rollup Definition to run at least monthly to ensure that they roll over when the fiscal year changes. For only Full Calculate, whether once or scheduled, no child trigger is required. The Calculation Mode picker is set to Process Builder. (Even though you might not be using a Process Builder to trigger the rollups, this setting makes it possible for you to save and activate your Full Calculate rollup.)


## Calculation Mode: Developer

This option allows you to use Process Builder and Developer modes allow you to cause the rollups to calculate using automation, so you can avoid deploying the child trigger.
