---
layout: default
title: DLRS Calculation Modes
nav_order: 1
parent: Architecture
has_children: false
---

# DLRS Calculation Modes

There are four modes that you can use to manage how and when DLRS processes rollups, they are:
- Watch for changes and process later (labeled "Scheduled" in versions prior to 2.21) 
- Realtime
- Invocable by Automation (labeled "Process Builder" in versions prior to 2.21) 
- Developer

| Calculation Mode | What does it do? |  When does it do it? | When to use? | 
| ------------- | ------------- | ------------- | ------------- |
| Watch for Changes and Process Later | Collects all child records that are created or updated to meet your criteria and runs calculation according to [set schedule](https://sfdo-community-sprints.github.io/DLRS-Documentation/User%20Guide/scheduling_rollups_v2_21.html) | Updates the Calculation fields when the schedule runs |  In most cases, unless you must have a real time calculation | 
| Realtime |  Runs the calculation every time the child record changes to meet criteria. |  Updates the Calculation fields immediately. |  When you always need an up-to-date rollup | 
| Invocable by Automation |  Allows you to call the DLRS trigger in Flow or other automation. |  Updates the Calculation fields as defined in the automation. | When using DLRS as part of a declarative driven solution. <br> <br> Or when you want to only manually trigger the rollup using the Recalculate Now or Schedule Recalculation button | 
| Developer |  Allows you to call the DLRS trigger in Apex |  Updates the Calculation fields as defined in the Apex trigger |  When using DLRS as part of a programmatic/code driven solution | 

<BR><BR>
## Watch for changes and Process Later (labeled "Scheduled" in versions prior to 2.21) 
In this mode, DLRS would not run instantly. When the Rollup Definition is deployed, the trigger takes a note of any child record that is changed (based on the defined criteria) and stores it in the Lookup Rollup Summary Schedule Items object. When you choose this mode, your next step is to schedule the run frequency so that DLRS runs according to the schedule and process all the records that have been waiting in the Lookup Rollup Summary Schedule Items object. Once the process completes, the records in Lookup Rollup Summary Schedule Items object are deleted.

### Considerations for Watch for Changes and Process Later 
* This is the recommended calculation mode because it doesn’t trigger every time the child record changes. Therefore, it is more resource economical and less likely to hit Salesforce governors limit. Unless you have a strong business reason to apply realtime calculation, we encourage you to consider how frequently your child record would be created/changed and schedule your frequency accordingly.
* For example, if you set up a DLRS to count the number of open cases per account and you know that most clients would report a case infrequently and that the account executive reports on the number of open cases for their accounts once a month, you would set up the schedule to run every two weeks or before a certain date in the month. 
* If you want to review the records awaiting processing, it’s easy to create a report based on the Lookup Rollup Summary Schedule Items object. 

## Realtime
In Realtime mode, DLRS installs an Apex trigger on the child object. This means the rollup runs immediately when a child record is created or updated, and the target fields are edited. It only triggers if the Field to Aggregate or Criteria fields of the Rollup job are changed.

### Considerations for Realtime
* **Performance Impact**: Realtime mode can degrade Salesforce performance, as every update to the Fields to Aggregate or Criteria on a child record triggers DLRS.
* **Use Cases**: Realtime mode is useful for immediate data updates. For instance, if a Rollup job counts Tasks on an Opportunity and isn't set to Realtime, logging a call won't immediately update the Task count, potentially confusing users.
* **Automation Conflicts**: Realtime mode can cause performance issues, especially if it runs alongside other automations (e.g., Flow or Process Builder), leading to looping automations and hitting Salesforce governor limits.


## Invocable by Automation (labeled Process Builder in versions prior to 2.21) 
Invocable by automation mode option allows you to call the DLRS trigger in declarative automation, like Flow, either as an immediate or scheduled action. This does not require you to deploy a child trigger.

Because the child trigger is not required this calculation mode can also be used if you would like to manually trigger the rollup using the Recalculate Now button or use the Schedule Recalculation button to schedule a full recalculation. 

### Considerations for Invocable by Automation 
* This mode is not triggered by an edit on the child object. It must either be referenced in automation, manually triggered by clicking on the Recalculate Now button or scheduled using the Schedule Recalculation button. 

## Developer 
The ‘Developer’ mode option allows you to call the DLRS trigger in Apex. This can be useful if you wish to use the DLRS calculation as part of a larger Apex action. 

### Considerations for Developer 
* Given that DLRS is - and the clue is in the name - a declarative tool, consider whether you can apply the full solution declaratively, or if Apex is the best solution. 
* If a declarative user amends the DLRS trigger that has been used in another piece of Apex code, the amendment may cause the Apex to falter or error. 
* Normal rules apply for general Apex creation/updating. 

____________________________________________________

Recalculate Now (labeled Full Calculate in versions prior to 2.21) 

Full Calculate is when DLRS loops through every existing child record and calculates the rollup on the parent, regardless of whether the child record has been edited or not. Full Calculate can be scheduled or run once immediately.

### Considerations for Full Calculate

In general, scheduled Full Calculate should be run between midnight and 6am to avoid conflict with daytime operations.

Because a Full Calculate job runs on every record it uses server resources and can take some time. More importantly, if Full Calculate runs during the workday on a large number of records it could result in _row lock_ errors—which occurs when the calculation and a user are both trying to edit the same record at the same time. 

The main use case for a scheduled Full Calculate is for rollups that have a relative time filter like ‘Last Week’,which would be defined in the Relationship** Criteria** field. In this case, a Scheduled DLRS/Rollup Definition won’t suffice because we wouldn’t be expecting any record updates to  trigger a Scheduled Rollup job/Rollup Definition. 

If a Rollupjob/Rollup Definition for Opportunities has a filter for  ‘Last Fiscal Year’, schedule the Rollup Definition to run at least monthly to ensure that they roll over when the fiscal year changes. For only Full Calculate, whether once or scheduled, no child trigger is required. The Calculation Mode picker is set to Process Builder. (Even though you might not be using a Process Builder to trigger the rollups, this setting makes it possible for you to save and activate your Full Calculate rollup.)

