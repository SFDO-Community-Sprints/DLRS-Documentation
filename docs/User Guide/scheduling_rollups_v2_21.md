---
layout: default
title: Scheduling Rollups - Version 2.21
nav_order: 2
parent: Getting Started
has_children: false
---

# Deploying and Scheduling Rollups (for version 2.21)
Once your rule is created and saved, you have several options.

## Full Calculation - Recalcuate Now or Schedule Recalculation
_Both of these buttons work in all Calculation Modes (with the exception of "Realtime"), even if the rule is not active. To use either of these buttons with the "Realtime" Calculation Mode, the rule must already be activated._

**Recalculate Now** - If you click this button, you will be able to run either a full recalculation or filter parent records to calculate upon using a SOQL query.

<img src="../assets/images/v2_21/dlrs_beta_v2_21_button_recalculate_now.png" width="50%" alt="DLRS Beta Recalculate Now button">

The example below shows a full recalculation job (i.e. the query has not been filtered using SOQL)

_(The "Name LIKE 'Fred%' AND Custom__c > 0" query is example text to give you an idea of how your query should look. You do not need to worry about it. It's presence will not effect a full calculate job, and it will clear out the moment you start to  type in your own query.)_

<img src="../assets/images/v2_21/dlrs_beta_v2_21_full_calculate_page.png" width="100%" alt="DLRS Beta Full Calculate page">

**Schedule Recalculation** - Choosing this option will take you to a page that will allow you to schedule full recalculations and also to filter the parent records for which recalculation will happen upon using a SOQL query.

<img src="../assets/images/v2_21/dlrs_beta_v2_21_button_schedule_recalculate.png" width="50%" alt="DLRS Beta Schedule Recalculate button">

The example below shows a full recalculation job that would be scheduled for 2 AM every day.

<img src="../assets/images/v2_21/dlrs_beta_v2_21_full_calculate_schedule_recurring.png" width="100%" alt="DLRS Beta Schedule Recurring Full Calculate page">

# Deploying Rules
Depending on what Calculation Mode you have you chosen, the process to deploy your rule will vary slightly. Please locate your chosen Calculation Mode below.

## A Note On Triggers
While the **Developer** and **Invocable by Automation** calculation modes can be called by flows or Apex code, or scheduled using the instructions above, the other Calculation Modes do require a child trigger.

The **Watch for Changes and Process Later** Calculation Mode rollups will not run every time a child is created but will be processed in bulk when Apex is scheduled. A trigger installed by DLRS makes note of each child record that gets changed and stores it in a Lookup Rollup Summary Schedule Items object record. Then whenever the Apex Class “RollupJob” runs all of those items are taken care of and then the Lookup Rollup Summary Schedule Items record is deleted.

The **Realtime** Calculation Mode requires the deployment of a child trigger to run your rollup whenever a child record is saved.

## Developer / Invocable by Automation Calculation Modes 
Simply choose "Save and Activate" in the path. Your rule is now ready to be called by a flow or Apex code, or to be scheduled using the instructions above.

<img src="../assets/images/v2_21/dlrs_beta_v2_21_path_automation_and_developer_01_save_activate.png" width="100%" alt="DLRS Beta Rule Activation - Path - Developer or Invocable by Automation Calculation Modes">

## Watch for Changes and Process Later Calculation Mode
Please choose "Schedule Job" on the path at the top of the window.  

<img src="../assets/images/v2_21/dlrs_beta_v2_21_path_process_later_01_schedule_job.png" width="100%" alt="DLRS Beta Rule Schedule Job - Path - Watch for Changes and Process Later Calculation Mode">

You can use the Process Scheduled Items wizard in the modal window to either choose a pre-designed template or create a custom schedule. You can also view currently scheduled jobs for all Process Scheduled Items rollups from this window. 

The example below shows a template schedule job that would be scheduled for 3 AM every day.

<img src="../assets/images/v2_21/dlrs_beta_v2_21_process_scheduled_items_template_view.png" width="100%" alt="DLRS Beta Rule Schedule Job - Scheduled Items Template View - Watch for Changes and Process Later Calculation Mode">

The example below shows a custom schedule job that would be scheduled for 2 AM every day.

<img src="../assets/images/v2_21/dlrs_beta_v2_21_process_scheduled_items_custom_view.png" width="100%" alt="DLRS Beta Rule Schedule Job - Scheduled Items Custom View - Watch for Changes and Process Later Calculation Mode">

Once you have set a schedule, please choose "Deploy Trigger" on the path at the top of the window.  

<img src="../assets/images/v2_21/dlrs_beta_v2_21_path_process_later_02_deploy_trigger.png" width="100%" alt="DLRS Beta Rule Deploy Trigger - Path - Watch for Changes and Process Later Calculation Mode">

This will take you to the Manage Apex Trigger page. Scroll to the bottom of the page and click "Deploy".

<img src="../assets/images/v2_21/dlrs_beta_v2_21_manage_apex_trigger.png" width="100%" alt="DLRS Beta Rule Manage Apex Trigger - Page - Watch for Changes and Process Later Calculation Mode">

Once you have deployed the trigger, please choose "Activate" on the path at the top of the window. This will activate the rollup rule. Your rule will now log records as they change, and process those changes at the next interval you specified in the schedule you defined.

<img src="../assets/images/v2_21/dlrs_beta_v2_21_path_process_later_03_save_activate.png" width="100%" alt="DLRS Beta Rule Activation - Path - Watch for Changes and Process Later Calculation Mode">

## Realtime Calculation Mode
Please choose "Deploy Trigger" on the path at the top of the window. 

<img src="../assets/images/v2_21/dlrs_beta_v2_21_path_realtime_01_deploy_trigger.png" width="100%" alt="DLRS Beta Rule Deploy Trigger - Path - Realtime Calculation Mode">

This will take you to the Manage Apex Trigger page. Scroll to the bottom of the page and click "Deploy".

<img src="../assets/images/v2_21/dlrs_beta_v2_21_manage_apex_trigger.png" width="100%" alt="DLRS Beta Rule Manage Apex Trigger - Page - Realtime Calculation Mode">

Once you have deployed the trigger, please choose "Activate" on the path at the top of the window. This will activate the rollup rule. Rollups will be updated in realtime as records are created or updated.

<img src="../assets/images/v2_21/dlrs_beta_v2_21_path_realtime_02_save_activate.png" width="100%" alt="DLRS Beta Rule Activation - Path - Realtime Calculation Mode">

