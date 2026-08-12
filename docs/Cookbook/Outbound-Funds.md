---
layout: default
title: Outbound Funds
parent: Cookbook
nav_order: 5
---

# Outbound Funds Recipes

{%- comment -%}
Recipes on this page live in docs/_recipes/ — one file per recipe, tied
to this page by `category: "outbound-funds"` front matter and listed
alphabetically by title. Edit or add recipes there;
this page only assembles them.
{%- endcomment -%}
{% assign recipes = site.recipes | where: "category", "outbound-funds" | sort: "title" %}
{% for recipe in recipes %}
{% include recipe-card.html recipe=recipe %}
{% endfor %}
