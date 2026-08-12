---
title: "Opportunity: Sum of Paid Payments This Relative Fiscal Year"
anchor: "opportunity-sum-of-paid-payments-this-relative-fiscal-year"
category: "opportunities-payments-allocations"
category_url: "Opportunities,-Payments,-Allocations.html"
category_label: "Opportunities, Payments, Allocations"
op: "Sum"
mode: "Realtime"
mode_class: "realtime"
parent_object: "Opportunity"
---

**Description**
> This is a variation of the original "Opportunity: Sum of Paid Payments This Financial Year" for orgs that need to track gifts that are paid or scheduled outside of the dates of their fiscal year. This would be for orgs who have this happen enough that particular infrastructure is created for it.
>
>Scenario - Your org gets a 5 year commitment for pledges for $500,000, paid out over the course of 5 fiscal years, and your fiscal year is October - September. However, the donor sends payment 1 for FY23 in October 2022 and the FY24 payment in January 2023. Using payment date, these would both be in FY23 so a workaround is needed! 
>
>Your org has decided to have a fiscal year text field on the payment object to get around this that defaults to the current FY but can be manually edited. However, that means that standard rollup types don't work well or would have to be edited every year. To get to the correct relative fiscal year, you create a formula that returns a numeric value relative to the current fiscal year. 

**Objects, Fields, Relationships**

| Field | Value |
| ------- | -------- |
| Parent Object | `Opportunity` |
| Child Object | `npe01__OppPayment__c` |
| Relationship Field | `npe01__Opportunity__c` |
| Relationship Criteria (SOQL Query) | `npe01__Paid__c = True AND Fiscal_Year_Relative_Number__c = 0` |
| Relationship Criteria Fields | `npe01__Paid__c, Fiscal_Year_Relative_Number__c` |
| Field to Aggregate | `npe01__Payment_Amount__c` |
| Field to Order By | `n/a` |
| Aggregate Operation | `SUM` |
| Aggregate Result Field | `DLRS_Total_Payments_This_Year__c` |
| Calculation Mode |  `Realtime` |
| Schedule vs Child Trigger |   `Deploy the child trigger for a realtime update whenever a payment is marked paid AND click Schedule Full Calculate to have all records recalculated on the first of each month, so that the relative date filter for the year is kept up to date.`

**Any test code or other preparations needed:**
> Creating two fields
>1. Text field for Fiscal Year. In this case the format is FYXX. This is a text field that uses flow automation to default to the FY that it was paid but can be manually overridden
>2. Formula for relative fiscal year. In the example above with the FY being Oct - Sept the formula is:
if(month(today())>=10,YEAR(TODAY())+1,YEAR(TODAY()))-VALUE(SUBSTITUTE(Fiscal_Year_Text__c,"FY","20"))
>This will return 0 for this year, 1 for last year, -1 for next year

**Variations**
>This version is based on paid payments this year, but it could also be made for payments last year or two years ago. 

**Contributed By**
Beth Hintze, [Attain Partners](https://attainpartners.com/)
