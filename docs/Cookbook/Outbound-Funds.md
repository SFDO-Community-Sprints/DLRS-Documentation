---
layout: default
title: Outbound Funds
parent: Cookbook
nav_order: 5
---
# Outbound Funds Recipes
* [Funding Program: Count Applications Submitted](#funding-program-count-applications-submitted)
* [Funding Program: Sum of Recommended Amount](#funding-program-sum-of-recommended-amount)
* [Account: Sum of Awarded Grants](#account-sum-of-awarded-grants)
* [Account: Largest Grant Received](#account-largest-grant-received)
* [Account: Last Grant Received](#account-last-grant-received)

## Funding Program: Count Applications Submitted

**Description**

> This recipe counts the number of applications submitted for a funding program in the Outbound Funds Package. The rollup uses the Funding Request Status field on Funding Request, so that the total can be shown on the Funding Program record.

**Objects, Fields, Relationships**

|                        Field | Value                                           |
| ---------------------------: | ----------------------------------------------- |
|                Parent Object | `outfunds__Funding_Program__c`                               |
|                 Child Object | `outfunds__Funding_Request__c`                               |
|           Relationship Field | `outfunds__FundingProgram__c`                   |
|        Relationship Criteria | `(Funding_Request_Status__c <> 'Draft' AND Funding_Request_Status__c <> 'Withdrawn')` |
| Relationship Criteria Fields | `Funding_Request_Status__c`                     |
|           Field to Aggregate | `Id`                                            |
|            Field to Order By | n/a                                             |
|          Aggregate Operation | `COUNT`                                         |
|       Aggregate Result Field | `DLRS_TotalSubmittedRequests`                   |
|             Calculation Mode | `Realtime`                                      |
|    Schedule vs Child Trigger | Deploy the Child Trigger                        |

**Variations**

- For a count of awarded applications only, add a criteria of Funding Request Status = Awarded.

**Contributed By** Serkan Bilgi

## Funding Program: Sum of Recommended Amount

**Description**

> This calculates total dollars committed to date for a funding program (but not yet awarded) in the Outbound Funds package. The rollup uses the Recommended Amount fields on Funding Request, so that the total can be shown on the Funding Program record.

**Objects, Fields, Relationships**

|                        Field | Value                               |
| ---------------------------: | ----------------------------------- |
|                Parent Object | `outfunds__Funding_Program__c`      |
|                 Child Object | `outfunds__Funding_Request__c`      |
|           Relationship Field | `outfunds__FundingProgram__c`       |
|        Relationship Criteria | `outfunds__Recommended_Amount__c>0` |
| Relationship Criteria Fields | `outfunds__Recommended_Amount__c`   |
|           Field to Aggregate | `outfunds__Recommended_Amount__c`   |
|            Field to Order By | n/a                                 |
|          Aggregate Operation | `SUM`                               |
|       Aggregate Result Field | `DLRS_Committed_to_Date__c`         |
|             Calculation Mode | `Realtime`                          |
|    Schedule vs Child Trigger | Deploy the Child Trigger            |

**Variations**

- For the sum of dollars awarded, change the Field to Aggregate to: `outfunds__Awarded_Amount__c`

**Contributed By** Sheri Gurock

## Account: Sum of Awarded Grants

**Description**

> This recipe calculates total dollars awarded to an Applying Organization in the Outbound Funds package. The rollup uses the Awarded Amount field on Funding Request, so that the total can be shown on the Applying Organization (Account) record.

**Objects, Fields, Relationships**

|                        Field | Value                               |
| ---------------------------: | ----------------------------------- |
| Parent Object                      | `Account`                                                                |
| Child Object                       | `outfunds__Funding_Request__c`                                           |
| Relationship Field                 | `Account__c`                                                             |
| Relationship Criteria (SOQL Query) | `outfunds__Recommended_Amount__c > 0 OR outfunds__Awarded_Amount__c > 0` |
| Relationship Criteria Fields       | `outfunds__Recommended_Amount__c, outfunds__Awarded_Amount__c`           |
| Field to Aggregate                 | `outfunds__Awarded_Amount__c`                                            |
| Field(s) to Order By               | n/a                                                                      |
| Aggregate Operation                | `SUM`                                                                    |
| Aggregate Result Field             | `DLRS_ORG_Number_of_Grants__c`                                           |
| Calculation Mode                   | `Realtime`                                                               |
| Schedule vs Child Trigger          | Child Trigger deployed                                                   |

**Variations**

- Use the sum of Requested Amount to show how much an organization has applied for, as well as how much they’ve been awarded (in this case, the SOQL query would be: **outfunds__Requested_Amount__c** > 0 AND **outfunds__Awarded_Amount__c** = 0)
- Substitute Applying Organization with Applying Contact to show the same summaries on a Contact record.

**Contributed By**
Sheri Gurock

## Account: Largest Grant Received

**Description**

> Shows the largest amount awarded to an Applying Organization (Account).

|                        Field | Value                               |
| ---------------------------: | ----------------------------------- |
| Parent Object                      | `Account`                         |
| Child Object                       | `outfunds__Funding_Request__c`    |
| Relationship Field                 | `Account__c`                      |
| Relationship Criteria (SOQL Query) | `outfunds__Awarded_Amount__c > 0` |
| Relationship Criteria Fields       | `outfunds__Awarded_Amount__c`     |
| Field to Aggregate                 | `outfunds__Awarded_Amount__c`     |
| Field(s) to Orde                   | n/a                               |
| Aggregate Operation                | `MAX`                             |
| Aggregate Result Field             | `DLRS_ORG_Largest_Grant__c`       |
| Calculation Mode                   | `Realtime`                        |
| Schedule vs Child Trigger          | Child Trigger deployed            |

**Variations**

- Use MIN as the Aggregate to show the smallest grant.
- Substitute Applying Organization with Applying Contact to show the same summaries on a Contact record.

**Contributed By**
Sheri Gurock

## Account: Last Grant Received

**Description**

> This recipe shows the last or most recent amount awarded to an Applying Organization (Account) in the Outbound Funds Package.

|                        Field | Value                               |
| ---------------------------: | ----------------------------------- |
| Parent Object                      | `Account`                         |
| Child Object                       | `outfunds__Funding_Request__c`    |
| Relationship Field                 | `Account__c`                      |
| Relationship Criteria (SOQL Query) | `outfunds__Awarded_Amount__c > 0` |
| Relationship Criteria Fields       | `outfunds__Awarded_Amount__c`     |
| Field to Aggregate                 | `outfunds__Awarded_Date__c`       |
| Field(s) to Order By               | n/a                               |
| Aggregate Operation                | `MAX`                             |
| Aggregate Result Field             | `DLRS_Date_of_Last_Grant__c`      |
| Calculation Mode                   | `Realtime`                        |
| Schedule vs Child Trigger          | Child Trigger deployed          |

**Variations**

- Use MIN as the Aggregate to show the date of the first grant.
- Use Application Date instead of Awarded Date to show when an organization first or most recently applied for a grant.
- Substitute Applying Organization with Applying Contact to show the same summaries on a Contact record.

**Contributed By**
Sheri Gurock
