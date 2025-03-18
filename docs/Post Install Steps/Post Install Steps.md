---
layout: default
title: Post Install Steps
nav_order: 3
has_children: true
---

# Post Install Steps
This is not *technically* required when you install DLRS, but we believe it to be extremely important.  We would not want any org to fail to do these steps unknowingly and thus leave behind errors or unclean data. In particular, if you don’t have RollupJob scheduled, rollups may not properly recalculate after record [merges](https://sfdo-community-sprints.github.io/DLRS-Documentation/User%20Guide/Merging.html).

# <span style="text-decoration:underline;">Schedule ‘RollupJob’ Apex class at least once per day</span>

To schedule RollupJob you have two choices:

1. If you are on version 2.21 or higher we recommend using the scheduler on the **DLRS Manage Lookup Rollup Summaries (Beta)** tab. (If you are not yet on 2.21, might we suggest that you [upgrade now](https://install.salesforce.org/products/dlrs/latest) ...)

   Go to the Beta tab.

   Click Manage RollupJob

   Configure New Job Frequencies>Templates

   Template: Once Every Day

   Hour of the Day: [middle of the night]

   Click Schedule

2. Setup>Apex Classes>Schedule Apex
   Job Name: [choose your convention. We recommend “RollupJob - Overnight”]

   Apex Class: RollupJob

   Schedule Using: [select either method]

   Frequency: Set this to at least once per day.

   Start: [might as well start today!]

   End: [set this WAYYYYY out into the future]

   Preferred Start Time: [If you’re only doing once per day, put it in the middle of the night.]


