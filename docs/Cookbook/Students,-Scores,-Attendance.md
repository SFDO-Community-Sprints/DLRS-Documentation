---
layout: default
title: Students, Scores, Attendance
parent: Cookbook
category: students-scores-attendance
nav_order: 7
---

# Students, Scores and Attendance Recipes using Custom Objects

{%- comment -%}
Recipes on this page live in docs/_recipes/ — one file per recipe, tied
to this page by `category: "students-scores-attendance"` front matter and listed
alphabetically by title. Edit or add recipes there;
this page only assembles them.
{%- endcomment -%}
{% assign recipes = site.recipes | where: "category", "students-scores-attendance" | sort: "title" %}
{% for recipe in recipes %}
{% include recipe-card.html recipe=recipe %}
{% endfor %}
