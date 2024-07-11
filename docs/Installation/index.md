---
layout: default
title: Installation
nav_order: 2
has_children: true
---

# Installation

Install the latest version (2.21) of DLRS into your production, sandbox, or scratch org via:
<br/><br/>
[Salesforce.org MetaDeploy](https://install.salesforce.org/products/dlrs/latest){: .btn .btn-blue }
<br/>

(See below for [instructions for installing in professional edition (PE)](#professional-edition))


**Installed Components, including two permission sets that can be used to give access**
![Installed Components](https://raw.githubusercontent.com/wiki/afawcett/declarative-lookup-rollup-summaries/images/InstalledComponents.PNG)

## Permissions

### Consider User Types 
Before selecting what users you want to install for, consider the types of users you will have in DLRS:
1. Admin
   - Can configure, activate and deploy rollups 
   - Needs full read/write access to all objects in the package
2. User
   - Indirectly invokes the rollups
   - Need read access to all objects 


### Selecting Users to "Install for"
In the installation process, when selecting what users to install for, you have 2 options: 
* Install the package for Admins only and then complete the "Assigning Permission Set" section below to open up permissions for users/profiles who need to access to edit and/or run rollups
<br>OR<br>
* Install for all users (no additional steps needed, however all users will have full access to all dlrs objects) 

![Install for Admins](https://raw.githubusercontent.com/wiki/afawcett/declarative-lookup-rollup-summaries/images/Install-Admins-Only.PNG)

### Assigning Permission Set

- In Setup, search for "Permission Set" in QuickFind
- Once in the Permission Set area, click on the **Lookup Rollup Summaries - Process Rollups**
- In the permission set, click on **Manage Assignments** button. 
- From the page that is displayed you can create a List View to filter for the users you want, tick them and click **Add Assignments**.
  ![Process Rollups Permission Set](https://raw.githubusercontent.com/wiki/afawcett/declarative-lookup-rollup-summaries/images/Process-Rollups.PNG)
  
- As needed, update **Profiles** by giving **Read** access to the following objects, **Lookup Rollup Summaries**, **Lookup Rollup Summary Logs** and **Lookup Rollup Summary Schedule Items**.

**Additional Resources**
- If you need a more detailed view of permissions, try out the free The Permissioner tool on [AppExchange](https://appexchange.salesforce.com/listingDetail?listingId=a0N30000008XYMlEAO).
- You can also [Read the Salesforce documentation on installing and permissions](https://developer.salesforce.com/docs/atlas.en-us.packagingGuide.meta/packagingGuide/packaging_install.htm)

## Professional Edition

Use the links below to install into a Professional Edition of Salesforce:

**Sandbox & Scratch Orgs:**  
[https://test.salesforce.com/packaging/installPackage.apexp?p0=04t5p000001E8vdAAC](https://test.salesforce.com/packaging/installPackage.apexp?p0=04t5p000001E8vdAAC)

**Production & Developer Edition Orgs:**  
[https://login.salesforce.com/packaging/installPackage.apexp?p0=04t5p000001E8vdAAC](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t5p000001E8vdAAC)

Note: Only the `Invocable by Automation` (labeled "Process Builder" in versions prior to 2.21) calculation mode is compatible with the Professional Edition because of the use of Apex Triggers in all other calculation modes.

<img src="../assets/images/v2_21/InvocablebyAutomation.png" width="50%" alt="Invocable by automation screenshot">

See additional Consideration for Installed in Professional Edition on the [Implementation Considerations Page](https://sfdo-community-sprints.github.io/DLRS-Documentation/Installation/configuration.html).
