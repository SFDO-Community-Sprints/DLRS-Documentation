---
layout: default
title: Campaigns, Registrations, Applications
parent: Cookbook
nav_order: 2
---

# Campaign, Registrations, and Applications Recipes

{%- comment -%}
Recipes on this page live in docs/_recipes/campaigns-registrations-applications/ (one file per
recipe, ordered by the `order` front-matter key). Edit or add recipes there;
this page only assembles them.
{%- endcomment -%}
{% assign recipes = site.recipes | where: "category", "campaigns-registrations-applications" | sort: "order" %}
{% for recipe in recipes %}
{% include recipe-card.html recipe=recipe %}
{% endfor %}
