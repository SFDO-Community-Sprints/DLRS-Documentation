---
layout: default
title: Opportunities, Payments, Allocations
parent: Cookbook
nav_order: 4
---

# Opportunities, Payments and Allocations Recipes

{%- comment -%}
Recipes on this page live in docs/_recipes/opportunities-payments-allocations/ (one file per
recipe, ordered by the `order` front-matter key). Edit or add recipes there;
this page only assembles them.
{%- endcomment -%}
{% assign recipes = site.recipes | where: "category", "opportunities-payments-allocations" | sort: "order" %}
{% for recipe in recipes %}
{% include recipe-card.html recipe=recipe %}
{% endfor %}
