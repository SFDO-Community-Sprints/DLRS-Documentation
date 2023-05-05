---
layout: default
title: Release Notes
nav_order: 7
has_children: true
---

# Current Release Notes

You can install a packaged version of the tool into your production org (sandbox testing as always recommended).
<br/>

## Latest Release Version 2.18

Install DLRS 2.18 into your production, sandbox, or scratch org via [Salesforce.org MetaDeploy](https://install.salesforce.org/products/dlrs/latest).

In Release 2.18, you will find several small updates and fixes, some underlying technical and security updates, a widget to notify admins of scheduled items that need attention, and an update that will reduce performance-based problems like record lock and CPU timeout errors.

You only need to install version 2.18 of the package. There are no other steps you need to take to have access to the updates in this release. 

## Features

* Rollups will now only execute DML if it would change the parent's value. (Issue #[1269](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/issues/1269), #[340](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/issues/340))
  * When a child record is modified and that modification is a field that triggers a rollup calculation, DLRS will execute the aggregate query then query the parent to ensure the DML is necessary. Any parent already holding the correct values will be excluded from the DML. 
  * This will significantly reduce record lock, CPU Timeout and other performance-based problems. 
  * This feature will be enabled automatically, but you can disable it by navigating to Custom Settings in Setup.
    * Click on Manage in front of the Declarative Lookup Rollup Summaries setting. 
    * Click on Edit. 
    * Check the box “Disable Parent DML Check”. Click on Save

    ![dlrsCustomSettingScreenshot](/DLRS-Documentation/assets/dlrsCustomSetting.png | width=450)

* Added a widget to the Lookup Rollup Summaries Tool to notify DLRS admins that the Scheduled Items are building up and either need to be scheduled or deleted. This updated widget can be found on the Lookup Rollup Summaries Tool tab. (Issue #[1271](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/issues/1271), #[735](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/issues/735), #[566](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/issues/566)) 
* In the wizard, the following fields were updated: (Issue #[1236](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/issues/1236))
  * Lookup Rollup Summary name changed to Lookup Rollup Summary Label
  * Unique Name changed to Lookup Rollup Summary API Name
  * Lookup Rollup Summary Label and Lookup Rollup Summary API name are both limited to 40 characters to avoid error on save. 
  * Lookup Rollup Summary API Name is auto-populated from Lookup Rollup Summary Label field. 
* Updated scheduled error email subject to match real time email subject (includes Org Id and Name). (Issue #[1219](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/issues/1219))
* Updated package API version to v57.0. There should be no impact to users. (Issue #[1294](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/issues/1294))
* Several test trigger, security, and packaging updates. These are necessary technical updates to allow for the packaging of the release. There should be no impact to users.

## Fixes
* Corrected Lookup Rollup List View: Maximum view state size limit error. The error was corrected by filtering out Deleted Cron Triggers in the selectAll query. (Issue #[1253](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/issues/1253))
* Updated ReadMe and Wiki to remove outdated information, including that all documentation and installation instructions can now be found on the [Documentation website](https://sfdo-community-sprints.github.io/DLRS-Documentation/). 
* Updated link to documentation on the Welcome page (Issue #[1235](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/issues/1235))

## Code Contributors
* Scott Fenton
* David Reed
* Christian Szandor Knapp
* Anthony Heber
* Ezra LaFleur
* Jim Bartek


