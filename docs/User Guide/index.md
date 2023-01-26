---
layout: default
title: User Guide
nav_order: 3
has_children: true
---

# User Guide
## Creating a New Lookup Rollup Summary

![Manage Lookup Rollups Screen](https://raw.githubusercontent.com/wiki/afawcett/declarative-lookup-rollup-summaries/images/Manage-Lookups.PNG)

### Lookup Relationship

#### Parent Object

Enter the API name of the object in salesforce.com that you want the rollup summary to be stored on

#### Child Object

Enter the API name of the object that you want to query and rollup to the Parent Object

#### Relationship Field

Enter the API name of the lookup field on the Child Object relating to the Parent Object

#### Relationship Criteria (Optional)

If you would like to filter the Child Object records that get summarized enter the SOQL WHERE query here.

e.g. `Amount > 200 AND Stage = 'Closed Won'`

[Examples & Details](https://sfdo-community-sprints.github.io/DLRS-Documentation/Architecture/relationship-critera.html)

#### Relationship Criteria Fields

Any field used in the Relationship Criteria needs to be entered here, one field per line
e.g.

```
Amount
Stage
```

NOTE: If you are referencing Recordtype.Name or Recordtype.DeveloperName in your WHERE clause, exclude them from the Relationship Criteria Fields, because it will throw an error.

### Rollup Details

#### Field to Aggregate

This is the API name of the field on the child record

#### Field to Order By

This is useful if you are concatenating

#### Aggregate Operation

#### Aggregate Result Field

Where on the Parent to place/write the result

#### Active

Must be set to Active to Calculate manually now or to set as Realtime. In order to set as Active you must deploy the child trigger.

#### Calculation Mode

Choose your calculation mode carefully. **Using realtime can run into performance issues and Apex CPU limits.** See [Scheduling](https://sfdo-community-sprints.github.io/DLRS-Documentation/Installation/scheduling_rollups.html) and [Performance Issues FAQ](https://sfdo-community-sprints.github.io/DLRS-Documentation/Issues/#how-do-i-optimize-dlrs-i-am-running-into-apex-cpu-limits-or-other-performance-issues)

Using Scheduled Incremental Calculation or using Process Builder with a Scheduled Action are good ways to avoid issues.

- Scheduled
  - Run a full or incremental calculate on a schedule with Scheduled Apex
- Process Builder
  - Call the DLRS Apex Action from a Process builder either as an immediate or scheduled action
- Realtime
  - Uses the child trigger to immediately calculate rollups
- Developer
  - Allows you to call DLRS from your own apex without using the DLRS trigger

#### Calculation Sharing Mode

Calculation Sharing Mode determines whether Salesforce sharing configurations should be taken into account when the rollup calculates. **User** mode will calculate all records visible to the user who triggered the rollup calculation. **System** mode will calculate all records regardless of the current User’s access.
