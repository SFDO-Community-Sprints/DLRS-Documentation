---
layout: default
title: Scheduling Rollups
nav_order: 2
parent: User Guide
has_children: false
---

# Scheduling Options (prior to v 2.21)

<br/>
Depending on your needs there are three ways to schedule, please read carefully.
- **Scheduled Full Calculate**, also know as **Schedule Calculate** is just setting up automation to press the Calculate button for you 
- **Scheduled Incremental Calculate**, also known as **Calculation Mode - Schedule** is to have DLRS not run in realtime but in batches based on when you run an Apex job.
- **Process Builder - Scheduled Action**, is to have Process Builder call a specific rollup in a Scheduled Action

## IMPORTANT NOTE
When using the **Schedule Full Calculate** option below, you **DO
NOT** need an Apex Trigger, but it's perfectly fine to still use one
(required for the Scheduled or Realtime calculation modes). If you
want to run full recalculations without a trigger, you can set the
**Calculate Mode field** to **Process Builder** or **Developer** (you
do not have to use the rollup from Process Builder or from Apex code).
This allows you to Activate the rollup without requiring an Apex
Trigger to be deployed. As mentioned before, it's OK to use Scheduled
or Realtime modes and also have full recalculations running on a
schedule, just make sure that if you are using Scheduled mode you
schedule the RollupJob Apex class, as described below.
 
# Scheduled Incremental Calculate
**Calculation Mode field set to Schedule, Trigger Required**
In place of DLRS record running in realtime when a record is edited that would normally trigger that DLRS to fire it will create a record and queue it up.  That queue will not process until you manually go and set up an apex job for the ApexClass "**RollupJob**" to run.  This can be done by going to Setup > Develop > Apex Classes and click Schedule Apex.  When RollupJob runs it will process all DLRS records that are active with Calculation Mode set to Schedule.  There is no way to control the order that this fires if you have 3 DLRS records set up in Calculation Mode - Schedule it might one time run a/b/c and next time run b/c/a.  As it completes the queue it will remove the records from the Lookup Rollup Summary Schedule Items.  When these fail they fail silently and logs are posted to Lookup Rollup Summary Logs Object.

**Failures:** If updates to the parent records fail they will be retried the next time the job runs. Or in other words queued parent record updates items remain on the queue until the parent is successfully updated. Check Lookup Rollup Summary Schedule Items and Lookup Rollup Summary Log for errors regularly (both are cleared when parent records update successfully). This is [a good blog for automating monitoring](https://www.dandonin.com/2017/05/24/automated-error-alerts-and-mass-delete-error-records/).
 
# Scheduled Full Calculate
**Calculate Mode field set to Process Builder, No Trigger Required** 
This is like pressing the "Calculate" button.  It does an entire recalculation of the parent object.  This allows you to set up a schedule to it so you don't have to remember to come in and press it on a set timeline.  It does allow you to set up a WHERE on the parent so it doesn't scan the entire parent object if you don't need it to. This is unique to EACH dlrs record. So you need to set it up on EACH dlrs record you want to recalculate on a schedule.  This is mostly used when you have Date/Time variables used in your relationship criteria as once the date/time passes the record might not be edited but you want the rollup data to be recalculated to show the correct new value. Note you **DO NOT** need schedule the RollupJob yourself in this mode. Note that the class **RollupCalculateJobSchedulable** is scheduled by this button for you.

**Failures:** If updates to the parent records fail they will only be retried when the next full calculate runs again. Failures are stored in Lookup Rollup Summary Log, check this regularly. Log records are cleared once parent records are updated. This is [a good blog for automating monitoring](https://www.dandonin.com/2017/05/24/automated-error-alerts-and-mass-delete-error-records/).

# Process Builder - Scheduled Actions
**Calculate Mode field set to Process Builder, No Trigger Required** 
You can use Process Builder or Flow with a Scheduled Action, instead of an Immediate Action, and control the delay in processing. It will call the Parent account and recalculate the specified rollup. Create a `Call Apex` action in Process Builder or Flow and select the DLRS `Calculates a rollup` class.


