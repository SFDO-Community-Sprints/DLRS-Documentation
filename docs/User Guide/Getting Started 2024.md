---
layout: default
title: Getting Started 2024
nav_order: 1
parent: User Guide
has_children: false
---

# Getting Started
## Creating a New Lookup Rollup Summary

1. Open the “Manage Lookup Rollup Summaries (Beta)” from the App Launcher.

![DLRS Beta from the App Launcher](/assets/images/dlrs_beta_app_launcher.png)

2. On this page, at the top of the list view, click the “New” button.

![DLRS Beta list view and new button](/assets/images/dlrs_beta_list_view_new_button.png)

3. Fill out the following fields. While not all fields listed below are required to save a rule, all fields below are required to have a working rule. Below is an example of a simple rule. <br>
        - Lookup Rollup Summary Label (Lookup Rollup Summary Unique Name will auto-populate) <br>
        - Child Object <br>
        - Data Field <br>
        - Relationship to Parent <br>
        - Parent Object <br>
        - Data Result Field <br>
        - Rollup Type <br>
        - Calculation Mode <br>
        - Calculation Sharing Mode <br>

![DLRS Beta Complete Basic Rule](/assets/images/dlrs_beta_basic_complete_rule.png)

All fields, both required and optional, that appear on this page are defined in the chart below.

### Information Fields
| Name | Description |
| ------------- | ------------- |
| Lookup Rollup Summary Label | Name of your new rollup |
| Lookup Rollup Summary API Name | API Name of your new rollup. This is automatically populated from the Lookup Rollup Summary Label. |
| Description | Fill this in to help yourself and others remember what this rule is for. |

![DLRS Beta Information Fields](/assets/images/dlrs_beta_information_fields.png)

### Child Object Fields
| Name | Description |
| ------------- | ------------- |
| Child Object | Pick the child object that you want to do your rollup from. |
| Data Field | The field on the child object that you will be performing a rollup on. |
| Relationship to parent | Lists all fields, with relationship fields listed first. You can use any field you need. |

![DLRS Beta Child Object Fields](/assets/images/dlrs_beta_child_object_fields.png)

### Parent Object Fields
| Name | Description |
| ------------- | ------------- |
| Parent Object | The object that will hold the field where you roll up to. |
| Data Result Field | This is the field that will hold the output of your roll up rule. |

![DLRS Beta Parent Object Fields](/assets/images/dlrs_beta_parent_object_fields.png)

### Relationship Criteria Fields
| Name | Description |
| ------------- | ------------- |
| Relationship Criteria | If you want to filter the Child Object records enter the SOQL WHERE query here (e.g. Amount >200 AND Stage = ‘Closed Won’)  |
| Relationship Criteria Fields | Enter any field that will be used in the Criteria from above, enter one field per line e.g. <br>Amount <br>Stage <br>_If you are referencing RecordType.Name or RecordType.DeveloperName in your WHERE clause, exclude them from the Relationship Criteria fields as it will result in an error._ |

![DLRS Beta Relationship Criteria Fields](/assets/images/dlrs_beta_relationship_criteria_fields.png)

### Rollup Details Fields
| Name | Description |
| ------------- | ------------- |
| Rollup Type | The type of rollup being performed. Options are:<br>Sum<br>Max<br>Min<br>Avg<br>Count<br>Count Distinct<br>Concatenate<br>Concatenate Distinct<br>First<br>Last<br>Please see: [Aggregation Operators](https://sfdo-community-sprints.github.io/DLRS-Documentation/Issues/#what-are-the-aggregation-operators) to see how each Rollup Type works  |
| Concatenate Delimiter | If using ‘Concatenate’ or ‘Concatenate Distinct’ in Aggregate Operation, the delimiter is used to separate the values e.g. , (comma) : (semi-colon) etc. |
| Field(s) to Order By | Useful if concatenating. |
| Row Limit | How many rows to include in the rollup. |
| Aggregate All Rows - Include Deleted & Archived Records | This setting will allow you to also rollup from Deleted & Archived records. |

![DLRS Beta Rollup Details Fields](/assets/images/dlrs_beta_rollup_detail_fields.png)

### Calculation Mode Fields
| Name | Description |
| ------------- | ------------- |
| Calculation Mode | _Please see the Scheduling and Performance issues FAQ before setting the calculation mode as using the Realtime mode can run into performance issues and Apex CPU limits._<br>**Queued Job**<br>- Run a full or incremental calculate on a schedule with Scheduled Apex (uses a trigger)<br>**Realtime**<br>- Uses the child trigger to immediately calculate rollups (uses a trigger)<br>**Invocable by automation**<br>- Call the DLRS Apex Action from a Flow or other automation, either as an immediate or scheduled action (does not require a trigger)<br>**Developer**<br>- Allows you to call DLRS from your own apex without using the DLRS trigger (does not require a trigger) |
| Calculation Sharing Mode | Determines whether Salesforce sharing configurations should be taken into account when the rollup calculates.<br>**User**<br>- Calculates all records visible to the user who triggered the rollup calculation. <br>**System**<br>- Will calculate all records regardless of the current users access |


![DLRS Beta Calculation Mode Fields](/assets/images/dlrs_beta_calculation_mode_fields.png)

### Advanced Fields
_The fields below are used when the test code methods need to be edited for deployment or to maintain code coverage.
For more information please see [this example](https://github.com/SFDO-Community/declarative-lookup-rollup-summaries/issues/356) where these fields were needed._

| Name | Description |
| ------------- | ------------- |
| Test Code (Child Object) | If you need to add additional code to flesh out your test class for the child object, you would add it here, and this code will be added to the DLRS created trigger. <br>**_dev needs to approve verbiage_** |
| Test Code (Parent Object) | If you need to add additional code to flesh out your test class for the parent object, you would add it here, and this code will be added to the DLRS created trigger. <br>**_dev needs to approve verbiage_** |
| Test Code Sees All Data? | If this box is unchecked, the rule author’s sharing rules will apply to the code. If the box is checked, sharing rules do not apply (system wide access). <br>**_dev needs to approve verbiage_** |

![DLRS Beta Advanced Fields](/assets/images/dlrs_beta_advanced_fields.png)

## Creating and deploying your rule
Once you have filled out all fields, scroll to the top of the page and click “Create”.
![DLRS Beta Create New Rule Button](/assets/images/dlrs_beta_create_button.png)

Once you have successfully created your rule, you will be greeted by similar toast messages.
![DLRS Beta Successful Rule Creation Message](/assets/images/dlrs_beta_successful_create.png)

**_*This article ends here for now. We will need to create further documentation once the UI buttons in the upper right corner are connected to their underlying code._**
