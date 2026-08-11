---
layout: default
title: Files, Activities
parent: Cookbook
nav_order: 3
---

# Files and Activities Recipes

{%- comment -%}
Recipes on this page live in docs/_recipes/files-activities/ (one file per
recipe, ordered by the `order` front-matter key). Edit or add recipes there;
this page only assembles them.
{%- endcomment -%}
{% assign recipes = site.recipes | where: "category", "files-activities" | sort: "order" %}
{% for recipe in recipes %}
{% include recipe-card.html recipe=recipe %}
{% endfor %}
