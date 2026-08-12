---
layout: default
title: Files, Activities
parent: Cookbook
nav_order: 3
---

# Files and Activities Recipes

{%- comment -%}
Recipes on this page live in docs/_recipes/ — one file per recipe, tied
to this page by `category: "files-activities"` front matter and listed
alphabetically by title. Edit or add recipes there;
this page only assembles them.
{%- endcomment -%}
{% assign recipes = site.recipes | where: "category", "files-activities" | sort: "title" %}
{% for recipe in recipes %}
{% include recipe-card.html recipe=recipe %}
{% endfor %}
