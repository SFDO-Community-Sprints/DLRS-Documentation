---
layout: default
title: Post Install Steps
nav_order: 3
has_children: false
---

# Post Install Steps
This is not *technically* required when you install DLRS, but we believe it to be extremely important. We would not want any org to fail to do these steps unknowingly and thus leave behind errors or unclean data. Please follow these steps.

<span style="text-decoration:underline;">Schedule ‘RollupJob’ Apex class at least once per day</span>

More detail is available HERE and HERE [links needed] about why this is important.

To schedule RollupJob you have two choices:

1. Setup>Apex Classes>Schedule Apex
   1. Job Name: [choose your convention. We recommend “RollupJob - Overnight”]
   2. Apex Class: RollupJob
   3. Schedule Using: [select either method]
   4. Frequency: Set this to at least once per day.
   5. Start: [might as well start today!]
   6. End: [set this WAYYYYY out into the future]

Preferred Start Time: [If you’re only doing once per day, put it in the middle of the night.]

2. Using the scheduler on the **DLRS Manage Lookup Rollup Summaries (Beta)** tab.
    1. Go to the Beta tab.
    2. Click Manage RollupJob
    3. Configure New Job Frequencies>Templates
    4. Template: Once Every Day
    5. Hour of the Day: [middle of the night]
    6. Click Schedule
