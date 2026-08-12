---
layout: default
title: Affiliations, Relationships, Accounts, Contacts
parent: Cookbook
category: affiliations-relationships-accounts-contacts
nav_order: 1
---

# Affiliations, Relationships, Accounts and Contacts Recipes

{%- comment -%}
Recipes on this page live in docs/_recipes/ — one file per recipe, tied
to this page by `category: "affiliations-relationships-accounts-contacts"` front matter and listed
alphabetically by title. Edit or add recipes there;
this page only assembles them.
{%- endcomment -%}
{% assign recipes = site.recipes | where: "category", "affiliations-relationships-accounts-contacts" | sort: "title" %}
{% for recipe in recipes %}
{% include recipe-card.html recipe=recipe %}
{% endfor %}
