---
layout: default
title: Current Release Notes
nav_order: 10
has_children: true
---

# Current Release Notes

## Release version 2.25

Install DLRS 2.25 into your production, sandbox, or scratch org via [Salesforce MetaDeploy](https://install.salesforce.org/products/dlrs/latest) to access the updates. There are no post installation steps needed.

### What's changed in v2.25?
Release 2.25 is a quick fix addressing a Trigger Management bug introduced in v2.24.
See below for a full overview of the updates included in recent releases (2.24 and 2.25).

## Pull Requests/Issues Resolved in this Release

### Critical Changes
* Fix Trigger Management bug in v2.24 [[PR1581](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1581)]

### Changes
* Minor updates to Apex MetadataService to support API v66.0 [[PR1581](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1581)]

---

## Release version 2.24

### What's changed in v2.24?
Release 2.24 focuses on making debugging easier by providing improved error notification emails for batch and scheduled rollup jobs.
Notification emails now provide more detail about the failed rollup job and affected records in a readable format.

The release also prevents one type of error by implementing whitespace cleaning for Relationship Criteria fields, to prevent validation failures caused by leading or trailing spaces.

Finally, version 2.24 makes it possible to configure DLRS to use a Named Credential for API access, if this is needed for security compliance.   

As a reminder, if upgrading from a version before version 2.21, there is a  **new wizard that simplifies creating and managing roll ups**. [Review the Wizard Release Notes](https://sfdo-community-sprints.github.io/DLRS-Documentation/ReleaseNotes/Release_history.html#release-version-221).


Thank you to everyone who contributed to this release
* Anthony Heber
* Bruno Fernandes
* Christian G. Warden
* Murala Sai Ganesh
* Shari Carlson
* Kyle Broeckel


## Pull Requests/Issues Resolved in this Release

### Changes
* Enhanced error notification emails for batch jobs (RollupCalculateJob) now include Lookup ID and Rollup Name/Label [[PR1560](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1560)]
* Enhanced error notification emails for scheduled jobs (RollupCalculateJobSchedulable) now include Lookup ID, Rollup Name/Label, and a readable job name for easy lookup in Setup [[PR1560](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1560)]
* Resolved validation failures caused by leading/trailing whitespace in Relationship Criteria fields [[PR1563](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1563)]
* Add Named Credential field (NamedCredentialForAPI__c) to DLRS Custom Setting [[PR1570](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1570)]
* Update project API version to v66.0 [[PR1579](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1579)]
* Update project API version to v64.0 [[PR1538](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1538)]
* Add DLRS to app name to increase searchability [[PR1524](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1524)]
* Update documentation to use SFDX v2 syntax for scratch org creation [[PR1559](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1559)]
* Spelling correction [[PR1572](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1572)]
* Update MetaDeploy labels [[PR1576](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1576)]


### Issues Resolved
* [#1506](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/issues/1506): Enhanced error notification emails for batch and scheduled jobs [[PR1560](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1560)]
