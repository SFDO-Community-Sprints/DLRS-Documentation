---
title: "Object: Count Attached Files with Certain Text in their Name"
anchor: "object-count-attached-files-with-certain-text-in-their-name"
category: "files-activities"
category_url: "Files,-Activities.html"
category_label: "Files, Activities"
op: "Count"
mode: "Realtime"
mode_class: "realtime"
parent_object: "Can be used on any object, standard or custom"
---

**Description**

> Salesforce Files are incredibly useful, but hard to report on. One of the first things you need to figure out in working with them is that the “File” itself is actually a ContentDocument and it is shared onto a record with a ContentDocumentLink. Sometimes you just need to know how many files are connected to a record (or if there are any files at all). This recipe counts the number of Files related to a record that have the specific text “resume” somewhere in the title of the file. So you can use this to determine if a job application has an attached résumé or not. Replace the name “resume” with something else and you’ve got endless variations available.

**Objects, Fields, Relationships**

|                     Field | Value                                         |
| ------------------------: | --------------------------------------------- |
|             Parent Object | Can be used on any object, standard or custom |
|              Child Object | `ContentDocumentLink`                         |
|     Relationship Criteria | `ContentDocument.Title LIKE '%resume%'`       |
|             Rollup Action | `Count`                                       |
|        Field to Aggregate | `Id`                                          |
|         Field to Order By | N/A                                           |
|       Aggregate Operation | `COUNT`                                       |
|    Aggregate Result Field | `DLRS_File_Count__c`                          |
|          Calculation Mode | `Realtime`                                    |
| Schedule vs Child Trigger | Deploy the Child Trigger                      |

**Preparation**

> `Relationship Field = LinkedEntityId` Rollup works fine BUT you CANNOT create this rollup in the UI (you will receive an error)! Instead you have to create the rollup by going directly to the DLRS custom metadata records and creating it there

**Variations**

- In SQL Query: replace "resume" with any appropriate text and potentially move/remove the % symbols.

**Contributed by** Jon LaRosa, [LaRosa Consulting](https://trailblazer.me/id/jonlarosa)
