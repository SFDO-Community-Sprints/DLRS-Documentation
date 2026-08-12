---
layout: default
title: Campaigns, Registrations, Applications
parent: Cookbook
category: campaigns-registrations-applications
nav_order: 2
---

# Campaign, Registrations, and Applications Recipes

{%- comment -%}
Recipes on this page live in docs/_recipes/ — one file per recipe, tied
to this page by `category: "campaigns-registrations-applications"` front matter and listed
alphabetically by title. Edit or add recipes there;
this page only assembles them.
{%- endcomment -%}
{% assign recipes = site.recipes | where: "category", "campaigns-registrations-applications" | sort: "title" %}
{% for recipe in recipes %}
{% include recipe-card.html recipe=recipe %}
{% endfor %}
