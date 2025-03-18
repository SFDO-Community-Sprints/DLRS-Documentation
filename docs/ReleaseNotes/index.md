---
layout: default
title: Current Release Notes
nav_order: 10
has_children: true
---

# Current Release Notes

## Release version 2.23

Install DLRS 2.23 into your production, sandbox, or scratch org via [Salesforce MetaDeploy](https://install.salesforce.org/products/dlrs/latest) to access the updates. There are no post installation steps needed. 

### What's changed in v2.23?
Release 2.23 introduces 3 major updates to the DLRS functionality: 
1. Disable DLRS globally using a Custom Setting field or new Apex API method: RollupService.bypassAll()
2. Disable DLRS for individual Users using a Custom Permission
3. Disable problem emails from background jobs

Also included in this release were several items to enhance the testing and quality assurance process for the DLRS team as well as maintaining the API versioning and a bug fix related to merging. **Review the full list of changes below.**

[Documentation on Disabling Problem Emails](https://sfdo-community-sprints.github.io/DLRS-Documentation/User%20Guide/Disable%20Problem%20Emails.html) <br>
[Documentation on Disabling DLRS](https://sfdo-community-sprints.github.io/DLRS-Documentation/User%20Guide/Disable%20DLRS.html) 


Thank you to everyone who contributed to this release
* Anthony Heber
* Andrew Chu
* Michael Kolodner
* Nick Lindberg 
* Shari Carlson


## Pull Requests/Issues Resolved in this Release

### Critical Changes
* Add Snowfakery as Sample dataset [[PR1426](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1426)]
* Add sample DLRS Rollups into unpackaged for testing [[PR1426](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1426)]
* Creates a QA focused recipe files with a high-ratio of objects. Provides for the QA Custom Object and the standard objects listed in #[1408](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/issues/1408). [[PR1428](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1428)]
* Fixed an issue where DUPLICATES_DETECTED errors were incorrectly thrown during DML operations, even when duplicates were allowed. [[PR1502](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1502)]
* Update project API version to v62.0 [[PR1504](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1504)]


### Changes
* Allow disabling of problem emails from background jobs by checking Disable Problem Emails on DLRS Custom Setting [[PR1492](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1492)]
* Improve error check for compatibility [[PR1493](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1493)]
* Allow DLRS to be disabled globally using new Custom Setting field [[PR1494](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1494)]
* Allow DLRS to be disabled globally using new Apex API method: RollupService.bypassAll() [[PR1494](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1494)]
* Allow individual Rollups to have a Custom Permission assigned that, when held by the user, will disable that rollup [[PR1494](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1494)]
* Add custom CCI tasks for high ratio snowfakery dataset [[PR1500](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1500)]
* Update QA flow to include low and high ratio snowfakery dataset [[PR1500](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1500)]
* Added dml.OptAllOrNone = allOrNothing to ensure proper handling of DML operations based on the allOrNothing flag. [[PR1502](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1502)]
* Adjusted DMLOptions to allow saving records with duplicates when allowSave is set. [[PR1502](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1502)]
* improve custom permission check to work in packaged context [[PR1508](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1508)]
* bugfix: refactor merging to better support case merge and keep scenario [[PR1518](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1518)]
* Update project API version to 63.0 (Spring '25) [[PR1522](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1522)]


### Issues Resolved
* [#1408](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/issues/1408): Create QA Recipe: Standard Object High Ratio [[PR1428](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1428)]
* [#1409](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/issues/1409): Create QA Recipe: Custom Object High Ratio [[PR1428](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1428)]
