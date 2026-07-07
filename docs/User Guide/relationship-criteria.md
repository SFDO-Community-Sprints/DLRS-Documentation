---
layout: default
title: Relationship Criteria (SOQL Queries)
nav_order: 5
parent: User Guide
has_children: false
permalink: /Architecture/relationship-criteria.html
---

# How to Construct Relationship Criteria (SOQL Queries)

The Relationship Criteria section of a rollup defines the filters that will be used when the rollup queries child records. Specifically, the rollup runs a SOQL query and you are defining the WHERE clause of that query in the Relationship Criteria section.

This means you can write any WHERE clause that follows valid SOQL syntax: 
[Salesforce SOQL WHERE Clause documentation](https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_conditionexpression.htm)


## Using Multiple Parameters

### AND

The AND operator is used in a WHERE clause to combine multiple conditions. When AND is used, all conditions must be true for a record to be returned.

**Format: Criteria 1 AND Criteria 2**

Example use case: Filter Opportunities where the Stage is Closed Won and the Record Type is Renewal.

**StageName = ‘Closed Won’ AND RecordType.Name = ‘Renewal’**

This WHERE clause in the query returns only those Opportunities that meet both criteria.

Note: This example uses the equals (=) operator for value comparison between two field values, but other operators can be used as per the requirement. Read more on supported operators [here](https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_comparisonoperators.htm). 

### OR

The OR operator is used in a WHERE clause to combine multiple conditions. When OR is used, at least one condition must be true for a record to be returned.

**Format: (Criteria 1 OR Criteria 2)**

Example use case: Filter Cases where the Priority is High or Medium.

**Priority = 'High' OR Priority = 'Medium'**

This WHERE clause in the query returns Cases that meet either of the specified criteria.

### AND and OR

The AND and OR operators can be used together in the WHERE clause to build more complex conditions. When combining them, parentheses are important to control how the conditions are evaluated.

**Format: Criteria 1 AND (Criteria 2 OR Criteria 3)**

Example use case: Filter Cases where the Status is New and the Priority is either High or Medium.

**Status = 'New' AND (Priority = 'High' OR Priority = 'Medium')**

This WHERE clause in the query returns only those Cases that are New and have a High or Medium priority.

Note: When using AND and OR together, always use parentheses to clearly define how conditions should be evaluated. Without parentheses, the query may return unexpected results because AND conditions are evaluated before OR conditions by default.

## Working with Dates

Date criteria can be used but are tricky, because as time advances the trigger will not know to re-evaluate the rollup unless the child record changes.

In these cases it may be necessary to schedule the rollup to recalculate at specific times. For example, if you have a rollup that filters for Opportunities in the current fiscal year, you could schedule a full recalculation at the start of each fiscal year.

You can read about [SOQL Date and Date Literal formats](http://www.salesforce.com/us/developer/docs/officetoolkit/Content/sforce_api_calls_soql_select_dateformats.htm) here.

## Testing your SOQL queries:

A good way to test your SOQL query syntax is to use the query builder in a tool like Salesforce Inspector Reloaded or Jetstream. Keep in mind that the WHERE clause of the query is the part that corresponds with the DLRS rollup’s Relationship Criteria section.

---
Special thanks to the DLRS team at the January 2026 Virtual Sprint for contributing to this page.