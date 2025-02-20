---
layout: default
title: Current Release Notes
nav_order: 7
has_children: true
---

# Current Release Notes

## Latest Release Version 2.22
**Install DLRS 2.22** into your production, sandbox, or scratch org from [Salesforce.org MetaDeploy](https://install.salesforce.org/products/dlrs/latest). 

### What's changed in v2.22?
Release 2.22 was only an API version update to stay inline with Salesforce's latest release.

## Release Version 2.21

### What's changed in v2.21?
Release 2.21 introduces a new Wizard User Interface (UI) built in Lightning Web Components as well as the ability to schedule the rollup job directly in the wizard. There are no underlying processing engine updates. 

We are releasing the new Wizard in “Beta” at this time which means that it will not automatically become your default UI in this release. This allows you to try out the new Wizard and still be able to switch back to the old version as needed. 

A few highlights of the new Wizard are: 
* List view of rollups that is sortable and searchable 
* Popup modal to edit the rollup when you click on the name from the List View
* Updated field order and fields labels in the Wizard to optimize and clarify the creation of rollups
* Path at the top of the rollup that displays the deployment steps needed based on the calculation mode of the rollup 
* Updated calculation mode labels (link to updated calculation mode documentation coming soon) 
* Schedule rollup job user interface that allows you to schedule any number of rollup jobs at whatever interval is needed in your instance 

### What do I need to do?
Once installed there are 2 ways to access the new wizard.
1. In the Manage Lookup Rollup Summaries page, click on the "Try Our New Wizard" Button (as long as you are on a version that starts with a 2)<br>
   <img src="../assets/images/v2_21/TryOurNewWizard.png" width="50%" alt="DLRS Beta from the App Launcher">
2. In the App Launcher, search for Beta and select Manage Lookup Rollup Summaries (Beta)<br>
   <img src="../assets/images/v2_21/dlrs_beta_v2_21_app_launcher.png" width="30%" alt="DLRS Beta from the App Launcher">


### Documentation
See a full walk through of the new Wizard on the [new Getting Started for version 2.21 page](https://sfdo-community-sprints.github.io/DLRS-Documentation/User%20Guide/getting_started_v2_21.html)<br>
For deploying and scheduling see the [Deploying and Scheduling Rollups for version 2.21 page](https://sfdo-community-sprints.github.io/DLRS-Documentation/User%20Guide/scheduling_rollups_v2_21.html)

### Contributors
Thank you to the team who has worked for months on this new Wizard, especially **Anthony Heber** for leading the development effort for the redesign of the Wizard. 
* Jim Bartek
* Aaron George 
* Scott Fenton 
* Brad Dins (special shout out for writing the Getting Started documentation for the new Wizard) 
* Amanda Styles (for writng instructions on how to move from version 1 - Custom Object to version 2 - Custom Metadata) 
* Shari Carlson
* Nick Lindberg 
* Michael Kolodner

And the testing team at the NYC April 24 Sprint 
* Ezra LaFleur
* Tania Ortiz-Ashby
* Jill Goldenberg
* Aaron Crossman
* Amanda Styles 
* Bryan Graves 
* Michael Kolodner
* Alexander Lapa 
* Emilie Mayoden
* Shari Carlson
* Jacky Nolan

### Pull Requests/GutHub Issues Resolved in this Release

**Critical Changes**
* Change use a wrapper class to communicate with the LWCs, enabling the LWCs to be mostly namespace agnostic. [PR1441](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1441)
* Change to not directly import PE object and fields. They are corrupted by the platform. Instead import another object and use that to discover the namespace, if present. [PR1442](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1442)
* Improve record interaction flows with by re-opening after record save. [PR1446](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1446)
* Change cronstrue lib to load as part of the component instead of from Static Resources [PR1451](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1451)
* LWC Wizard not correctly display next scheduled full calculation [PR1468](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1468)
* LWC Wizard overwrites record for duplicated API Name [PR1468](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1468)

**Changes**
* Also added loading spinner and cleaned up prop usage. [PR1451](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1451)
* Move toast handling out of modal and add error capture [PR1453](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1453)
* Add Apex tests for code added to support the new LWC Wizard [PR1454](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1454)
* Update OSS Credits for pre-existing software [PR1455](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1455)
* Label and API Name should be limited to 40 characters and block save on error [PR1468](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1468)
* Clarify messaging for Outstanding Scheduled Items [PR1468](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1468)
* Fix typos [PR1468](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1468)
* Edit screen shouldn't use collapsible sections except for Advanced [PR1468](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1468)
* Path should reserve space to limit UI shift [PR1468](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1468)
* Schedule Wizard: Improve title and Tagline [PR1468](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1468)
* Schedule Wizard: Manage error states for poorly configured custom and for Schedule Items at max for org [PR1468](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1468)
* If deployment fails, editor modal should be restored to edited state [PR1468](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1468)

