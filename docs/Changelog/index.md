---
layout: forward
target: https://sfdo-community-sprints.github.io/DLRS-Documentation/ReleaseNotes/
---

# Current Release Notes

You can install a packaged version of the tool into your production org (sandbox testing as always recommended).
<br/>

## Latest Release Version 2.17

Install DLRS 2.17 into your production, sandbox, or scratch org via [Salesforce.org MetaDeploy](https://install.salesforce.org/products/dlrs/latest).


- Feature - [New creation wizard: Custom UI for creation of Lookup Rollup Summaries](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1113).
- Feature - [List view for Rollup records within lightning app: Shows all rollups including information to quickly see if a rollup is scheduled and the schedule date](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/issues/1131).
- Feature - [Detect NPSP/TDTM during deployment of DLRS test code. No configuration required. We disable TDTM triggers during the deployment of DLRS test code](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1171).
- Performance - [Reduced number of SOQL queries made by using custom metadata methods for Rollup Summaries Selector](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/issues/1049).
- Enhancement - [Added `Clone` Button on main Rollup creation page to quickly copy lookup rollup summaries](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/issues/1121).
- Enhancement - [Added `Schedule` Full Calculate field to rollup creation page – Adds ability to track next scheduled full calculate on rollup](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/issues/1126).
- Enhancement - [Added error and informational messages to guide user through rollup activation](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/issues/1123).
- Enhancement - [Added ability to sort fields by label instead of API name in New Wizard](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/issues/1130).
- Bug - [Fixed issue preventing scheduled rollups from working if different child objects and the same parent object](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/issues/802).
- Bug - [Fixed broken image link on app homepage](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/issues/1170).
- Bug - [Fixed missing namespace in trigger test code](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1177).
- Bug - [Add global access modifier for NPSP](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1180).
- Bug - [New Wizard throwing error if picklist exceeds 1000 objects](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1223)
