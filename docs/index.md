---
layout: default
title: Overview
nav_order: 1
has_children: false
---

[Join the DLRS Trailblazer Community - Today!](https://trailhead.salesforce.com/trailblazer-community/groups/0F9300000009O5pCAE){: .btn .btn-green }

![Logo](assets/images/DLRS_New_Badge_2022.png)

# What is Declarative Lookup Rollup Summaries?

DLRS is a mechanism for aggregating or summarizing data from child objects and displaying it on a parent object. It serves the same purpose as Rollup Summary fields, but it is much more flexible with the kind of data that can be rolled up and how criteria are formed.

- **Declarative**: "clicks not code"
- **Lookup**: relationship between a “parent” record and “child” record that does not have to be master-detail
- **Rollup**: collecting the data from child records and doing calculations
- **Summaries**: the result of the calculations displayed on the parent records

## What Business Problems Does DLRS Solve?

In Salesforce, there are “Rollup Summary Fields” (RSFs) that exist as standard fields in your instance and allow you to calculate metrics on a related list record (child object) and then show that value on the parent object. The business problem solved here is generally the ability to create a key metric or “summary” of a calculated value on a field in your Salesforce instance. Some examples may be Total Closed Won Amount.

There is a limit to how many RSFs that Salesforce permits you to create. With DLRS there is no such limit - you can create as many of them as needed.

Additionally, the metrics available with RSFs, are limited to sum, minimum value, or maximum value as a calculated metric. There are extended “operations” such as Average, Count Distinct, Concatenate, First and Last that can be performed with DLRS.

## Features Summary

- Rollup information between Lookup relationships not previously possible without writing Apex Triggers
- Define rollups using standard UI declaratively, no coding required
- Define filter criteria on rollups for example Rollup Amount on Opportunity onto Account for Closed Won
- Supports Realtime, Scheduled and Developer API modes
- Open source, available in code and managed package form.
- Managed package has passed Salesforce Security Review and is Aloha enabled (which means the package does not count against limits in the Salesforce org, such as number of custom objects) 
- Supports Custom Metadata, rollups can be included in Change Sets and Packages for easier deployment

## How and When DLRS Calculates

[Understanding when DLRS Calculates](https://sfdo-community-sprints.github.io/DLRS-Documentation/Architecture/calculates.html)
- Real-time trigger - Set Lookup Rollup to `Realtime` Calculation Mode.
- Async trigger based calculations - Set Lookup Rollup to `Scheduled` Calculation Mode.
- Scheduled full calculations - There is a button to schedule full calculations.
- Invocable from Flow or Process Builder - This is what allows DLRS to run in Professional Edition. [Info](https://sfdo-community-sprints.github.io/DLRS-Documentation/Installation/configuration.html)

## DLRS History 
[Learn about the DLRS journey through past community posts.](https://sfdo-community-sprints.github.io/DLRS-Documentation/About%20Us%20&%20Contribution/dlrsHistory.html)

