---
layout: default
title: Merging
nav_order: 3
parent: User Guide
has_children: false
---

# How DLRS Handles Record Merges
When parent records or child records are merged, in some cases DLRS will not be able to recalculate relevant rollups in realtime. As a result, your rollup values may appear to be out of date after records are merged.

In these cases, DLRS does not ignore the merge completely. Instead, it inserts a Lookup Rollup Summary Schedule Item. This record is a reminder to DLRS that the rollups for the parent record need to be recalculated.

To recalculate these items, you must have configured the RollupJob apex class to run periodically (even for realtime rollups). Once configured, these calculations will be executed and the scheduled item will be deleted the next time the RollupJob class runs. If you do not have RollupJob configured, you may see a growing number of unresolved Lookup Rollup Summary Schedule Item records over time.

This is one of the least understood (or thought about) functions of DLRS. In particular, orgs that only have realtime rollups or rollups on their own schedules often find that they have Lookup Rollup Summary Schedule Items but they have no idea how those were created.

This is the main reason we strongly recommend the [post-install step of scheduling RollupJob at least daily (https://sfdo-community-sprints.github.io/DLRS-Documentation/Post%20Install%20Steps/Post%20Install%20Steps.html#schedule-rollupjob-apex-class-at-least-once-per-day).