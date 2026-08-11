---
layout: default
title: Affiliations, Relationships, Accounts, Contacts
parent: Cookbook
nav_order: 1
---

# Affiliations, Relationships, Accounts and Contacts Recipes

{%- comment -%}
Recipes on this page live in docs/_recipes/affiliations-relationships-accounts-contacts/ (one file per
recipe, ordered by the `order` front-matter key). Edit or add recipes there;
this page only assembles them.
{%- endcomment -%}
{% assign recipes = site.recipes | where: "category", "affiliations-relationships-accounts-contacts" | sort: "order" %}
{% for recipe in recipes %}
{% include recipe-card.html recipe=recipe %}
{% endfor %}
