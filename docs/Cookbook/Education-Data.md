---
layout: default
title: Education Data Architecture
parent: Cookbook
nav_order: 6
---

# Education Data Architecture Recipes

{%- comment -%}
Recipes on this page live in docs/_recipes/education-data/ (one file per
recipe, ordered by the `order` front-matter key). Edit or add recipes there;
this page only assembles them.
{%- endcomment -%}
{% assign recipes = site.recipes | where: "category", "education-data" | sort: "order" %}
{% for recipe in recipes %}
{% include recipe-card.html recipe=recipe %}
{% endfor %}
