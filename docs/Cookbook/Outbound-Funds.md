---
layout: default
title: Outbound Funds
parent: Cookbook
nav_order: 5
---

# Outbound Funds Recipes

{%- comment -%}
Recipes on this page live in docs/_recipes/outbound-funds/ (one file per
recipe, ordered by the `order` front-matter key). Edit or add recipes there;
this page only assembles them.
{%- endcomment -%}
{% assign recipes = site.recipes | where: "category", "outbound-funds" | sort: "order" %}
{% for recipe in recipes %}
{% include recipe-card.html recipe=recipe %}
{% endfor %}
