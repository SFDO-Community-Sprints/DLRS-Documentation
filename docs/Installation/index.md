---
layout: default
title: Installation
nav_order: 2
has_children: true
---

# Installation

Install the latest version (2.17) of DLRS into your production, sandbox, or scratch org via:
<br/><br/>
[Salesforce.org MetaDeploy](https://install.salesforce.org/products/dlrs/latest){: .btn .btn-blue }
<br/>

Here is the App and Objects that are installed. You can see there are two permission sets that can be used to give access.
![Installed Components](https://raw.githubusercontent.com/wiki/afawcett/declarative-lookup-rollup-summaries/images/InstalledComponents.PNG)

## Permissions

You can install the package for Admins only and open up permissions for all users/profiles with the options below or install for all users.

![Install for Admins](https://raw.githubusercontent.com/wiki/afawcett/declarative-lookup-rollup-summaries/images/Install-Admins-Only.PNG)

There are two types of DLRS Users:

### Admin

Kind of a tool admin user that both configures and activates the rollups (this has to be an admin to deploy and manage the trigger for example). This user also needs full read/write access to all the objects in the package.

### User

Then there is the users that don't directly use the tool, but indirectly invoke its rollups. These users need read access to all the objects in the package. You don't however need to give them access to the app, tabs or Visualforce pages for example since they don't need to be able to access the tools admin UI.

### Assigning Permissions

- You can click on Permission itself **Lookup Rollup Summaries - Process Rollups** and there is a button **Manage Assignments**. From the page that is displayed you can create a List View to filter for the users you want, tick them and click **Add Assignments**.
  ![Process Rollups Permission Set](https://raw.githubusercontent.com/wiki/afawcett/declarative-lookup-rollup-summaries/images/Process-Rollups.PNG)
- You can update a **Profile** by giving **Read** access to the following objects, **Lookup Rollup Summaries**, **Lookup Rollup Summary Logs** and **Lookup Rollup Summary Schedule Items**.
- Finally, if you didn't find the first option useful enough, you may want can try out the free The Permissioner tool on [AppExchange](https://appexchange.salesforce.com/listingDetail?listingId=a0N30000008XYMlEAO).

You can also [Read the Salesforce documentation on installing and permissions](https://developer.salesforce.com/docs/atlas.en-us.packagingGuide.meta/packagingGuide/packaging_install.htm)

## Professional Edition

It is now possible to install the managed package in a Lightning Professional Edition and configure entries to trigger Process Builder to action the declarative roll up summary. (per [341](https://github.com/afawcett/declarative-lookup-rollup-summaries/issues/341))

![Process Builder Sharing Mode](https://raw.githubusercontent.com/wiki/afawcett/declarative-lookup-rollup-summaries/images/Process-Builder-Sharing-Mode.PNG)

