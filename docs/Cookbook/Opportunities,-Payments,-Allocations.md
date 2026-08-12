---
layout: default
title: Opportunities, Payments, Allocations
parent: Cookbook
nav_order: 4
---

# Opportunities, Payments and Allocations Recipes

{%- comment -%}
Recipes on this page live in docs/_recipes/ — one file per recipe, tied
to this page by `category: "opportunities-payments-allocations"` front matter and listed
alphabetically by title. Edit or add recipes there;
this page only assembles them.
{%- endcomment -%}
{% assign recipes = site.recipes | where: "category", "opportunities-payments-allocations" | sort: "title" %}
{% for recipe in recipes %}
{% include recipe-card.html recipe=recipe %}
{% endfor %}
