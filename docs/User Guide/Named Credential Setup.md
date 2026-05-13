---
layout: default
title: Named Credential Setup (Optional)
nav_order: 11
parent: User Guide
has_children: false
---

# Setting Up A Salesforce Named Credential for DLRS

## Intro


In version 2.24 or later, DLRS can be configured to use a Named Credential for API access. This is not required but allows more control over the DLRS application for those who need it.

See below for a walkthrough on how to set this up.

Note: these instructions are loosely based on Salesforce's docs available here:  
https://help.salesforce.com/s/articleView?id=platform.perm_install_uapa.htm&type=5

However, instead of using Connected Apps (which are now deprecated), we will set up the Named Credential access using an External Client App.

## Steps

---

### 1. Create new External Client App for DLRS

In Setup, go to External Client App Manager, then select "New External Client App".

**Basic Information:**
- Name and API Name as desired
- Use your org email or a distribution list for admins

**API:**
- Enable OAuth

**App Settings:**
- **Callback URL:**
  - Use a placeholder for now, such as `https://example.com` (we will change this later)
  - Note: make sure there aren't trailing spaces in the URL
- **OAuth Scopes:**
  - Manage user data via APIs (api)
  - Perform requests at any time (refresh_token, offline_access)
- **Flow Enablement:** None
- **Security:**
  - Require secret for Web Server Flow
  - Require secret for Refresh Token Flow
  - Require Proof Key for Code Exchange (PKCE) extension for Supported Authorization Flows

Leaving everything else unset, choose Create.

---

### 2. Generate Consumer Key and Secret for External Client App

On the page for the External Client App you created, navigate to the Settings tab, scroll down to OAuth Settings, and click the button for "Consumer Key and Secret".

After verifying your identity, this will allow you to access the app's Consumer Key and Consumer Secret.

Leave this tab open, you'll need those values shortly.

A quick note on security, these are close in security risk to having a username and password. Protect them with equal care.

---

### 3. Create new Authentication Provider record

Back on our original tab, we now need to create an Authentication Provider.

In Setup, go to "Auth. Providers".

Choose "New"

- **Provider Type:** Salesforce
- **Name:** choose a name, it is OK if it matches your External Client App
- **URL Suffix:** choose a name
- **Consumer Key:** The Key copied from the External Client App's tab that we left open
- **Consumer Secret:** The Secret copied from the External Client App's tab that we left open
- **User Proof Key for Code Exchange (PKCE) Extension:** Check
- **Include Consumer Secret in SOAP API Responses:** Check

---

### 4. Add Callback URL to External Client App

After saving the Authenticator Provider record, you'll be able to find its Callback URL in the Salesforce Configuration section. Copy it and head back to the External Client App we created earlier.

On the Settings tab, click the Edit button. Take the Callback URL that you copied and paste it into the Callback URL field in the OAuth Settings section.

---

### 5. Configure Named Credential

You're now ready to create a Named Credential for use by DLRS.

This will be the most complex step because several types of records need to be set up: The Named Credential will be linked to an External Credential, and the External Credential will have one or more Principals.

Go to "Named Credentials" in Setup. The first step will be to create the External Credential.

Select the "External Credentials" tab, then "New":

- **Authentication Protocol:** OAuth 2.0
- **Label and Name:** Choose a name that represents the authentication method and what it's being used for, such as "DLRS OAuth"
- **Authentication Flow Type:** Browser Flow
- **Scope:** "api refresh_token"
- **Identity Provider:** select "Auth Provider" and choose the Auth. Provider we created earlier.

Inside the new External Credential you'll need to create a new Principal, which will allow you to assign the credential to users via Permission Sets.

Go to the "Principals" section and select "New":

- **Identity Type:** likely you'll want to use Named Principal, which will allow using the same Principal for multiple users.
- **Parameter Name:** Choose a descriptive name. If using a single Principal for all users, this might be something like "AdminUser".

Now you can finally create the Named Credential.

Return to the main Named Credentials page in Setup, then select "New":

- **Label and Name:** again, use a name that represents the app and authentication method, such as "DLRS OAuth"
- **URL:** You'll need the Org's URL to setup the Named Credential. You can get this from the My Domain page in Setup, taking the "Current My Domain URL" (bold text) and adding `https://` in front of it.
- **External Credential:** use the record you just created
- Ensure "Allow Formulas in HTTP Header" and "Allow Formulas in HTTP Body" are checked to allow us to provide the necessary security tokens.
- **Managed Package Access > Allowed Namespaces for Callouts:** add "dlrs"

You'll need the Name of the Named Credential later, copy it or write it down so we can reference it later.

---

### 6. Create Permission Set for the new Named Credential

Now that the Named Credential (and its associated External Credential / Principal) is configured, you'll need to create a Permission Set that gives access to it.

Any user managing DLRS and using the DLRS app UI will need this Permission Set.

Create the Permission Set, including the following:

- **External Credential Principal Access:**
  - Select the External Credential Principal you configured for the DLRS Named Credential.

- **Assign the following system permissions:**
  - API Enabled
  - Approve Uninstalled Connected Apps (probably not technically required)
  - Author Apex
  - Customize Application
  - Manage Custom Permissions
  - Manage Translation
  - Modify Metadata Through Metadata API Functions
  - View Roles and Role Hierarchy
  - View Setup and Configuration

In addition to setting up this Permission Set, you will also need to "activate" the External Credential Principal that it's using:

- Return to the External Credential you created for the DLRS Named Credential, then scroll down to the list of Principals.
- Under the "actions" of the Principal that you used for the Permission Set, select "Authenticate." This will take you to a Salesforce login page. Login with a user that you want the External Credential Principle to use for access. It might be your user or one specifically set up for this purpose. Upon logging in, Salesforce will ask to approve the external app's connection. Ensure it displays the expected user (the API accessing user).

The Named Credential should now be configured for assignment to users via the Permission Set.

---

### 7. Update DLRS to use the Named Credential

With the new Named Credential set up, the final step is to update the Custom Setting in DLRS.

In Setup, go to Custom Settings, then select "Manage" next to Declarative Lookup Rollup Summaries.

- To edit the global Custom Setting for all DLRS users, select "Edit" at the top of the screen. (Optionally, you can create a Custom Setting that applies to just some users or profiles by selecting "New".) Click [here](https://help.salesforce.com/s/articleView?id=platform.cs_add_data.htm&type=5) for more info about how to work with Custom Settings.
- While editing the new or existing Custom Settings record, you should see an empty text field "Named Credential for API". Enter the Name value from the Named Credential you created earlier.

This has now set up DLRS so that any time it would talk to the external Salesforce API it will use the configured Named Credential instead of attempting direct access.
