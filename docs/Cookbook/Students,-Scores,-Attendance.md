---
layout: default
title: Students, Scores, Attendance
parent: Cookbook
nav_order: 7
---

# Students, Scores and Attendance Recipes using Custom Objects

{%- comment -%}
Recipes on this page live in docs/_recipes/students-scores-attendance/ (one file per
recipe, ordered by the `order` front-matter key). Edit or add recipes there;
this page only assembles them.
{%- endcomment -%}
{% assign recipes = site.recipes | where: "category", "students-scores-attendance" | sort: "order" %}
{% for recipe in recipes %}
{% include recipe-card.html recipe=recipe %}
{% endfor %}
