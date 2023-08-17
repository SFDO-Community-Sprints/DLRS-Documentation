---
layout: default
title: Release Notes
nav_order: 7
has_children: true
---

# Current Release Notes

## Latest Release Version 2.19

Install DLRS 2.19 into your production, sandbox, or scratch org via [Salesforce.org MetaDeploy](https://install.salesforce.org/products/dlrs/latest).

Release 2.19 is mostly a technical update with little to no changes in the User Interface. The one major change that people were watching for is that DLRS is now hyperforce ready with the removal of the reference to NA1 in a couple of URLs [[PR1358]](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1358). The other critical change of note is a performance enhancement in how Rollup Configs are retrieved to keep SOQL counts low [[PR1360]](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1360). 

**What do I need to do?** </br>
To get the new version, you only need to [install version 2.19 of the package](https://install.salesforce.org/products/dlrs/latest). There are no other steps you need to take to have access to the updates in this release.
 
**What’s changed in v2.19?** </br>
Below is a full list of changes. To see detailed information, click on the pull request (PR) number at the end of the item.


### Critical Changes
* Update a couple urls that reference na1 for hyperforce migration. [[PR1358]](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1358)
* Huge changes to how Rollup Configs are retrieved. Primarily to keep SOQL counts low in the event of recursion or chained rollups where one rollup update may cascade into another rollup. Not a big issue for most people but we do get reports of DLRS running over it's query limits from time to time. [[PR1360]](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1360) This is a high risk change because this impacts nearly every aspect of the application. Will need extra QA on this including UI-based testing because this powers the config editing interfaces as well as the rollup engine. [[PR1360]](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1360)
* Resolve test guards that should have been blocked but were seeing the packaged triggers and running. [[PR1365]](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1365)
* Add direct test coverage for trigger [[PR1366]](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1366)

### Changes
* Closing some ambiguity in how field validation is handled. [[PR1331]](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1331)
* Bypassing some fflib "help" that causes relationship names to resolve to fields. [[PR1331]](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1331)
* Adding in more tests focused on using CMDTs as well as exercising more validation logic. [[PR1331]](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1331)
* Enable installing DLRS in orgs with encrypted fields [[PR1345]](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1345)
* Update metadata API version as well as the lagging API version used to interface with the Metadata API (RollupController) [[PR1362]](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1362)
* Cleaned up one file and added standard guards to two others that were missing them. [[PR1365]](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1365)
* Update RollupController (which backs the Trigger Deployment VF page) so it can auto-determine the max supported API version for the current org. This breaks a dependency we have on manually updating the package each release to support new objects. [[PR1374]](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1374)
* fixed faulty file ending for custom metadata [[PR1376]](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1376)

### QE 
* added more QE config data, i.e. [[PR1372]](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1372)
* QE App, Record Pages, Permset, tiny Apex Helper [[PR1372]](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1372)
* clones of LookUpChild__c and LookupParent__c to avoid dependencies of QA work on package internals [[PR1372]](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1372)
* adjusted cumulusci.yml [[PR1372]](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1372)

### Housekeeping
* updated .forceignore ON PULL for files we don't care about or cannot / should not package [[PR1372]](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1372)
* updated default folder structure so that pulling with dx doesn't create additional folders anymore [[PR1372]](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1372)
* removed unnecessary files [[PR1372]](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/pull/1372)

## Code Contributors
* Scott Fenton
* David Reed
* Christian Szandor Knapp
* Anthony Heber
* Jim Bartek
* Michael Kolodner


