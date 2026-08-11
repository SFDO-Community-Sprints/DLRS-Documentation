---
layout: default
title: Find a Recipe
parent: Cookbook
nav_order: 0
---

# Find a Recipe

Filter the cookbook's recipes by calculation mode and aggregate operation.
Within a group, picking several chips widens the match (OR); picks across
groups narrow it (AND). Click a recipe to jump straight to it.

<div class="recipe-finder">

<div class="recipe-finder-facet">
<span class="recipe-finder-facet-label">Calculation Mode</span>
<button type="button" class="recipe-finder-chip mode mode-realtime" data-facet="mode" data-value="realtime">Realtime</button>
<button type="button" class="recipe-finder-chip mode mode-scheduled" data-facet="mode" data-value="scheduled">Scheduled</button>
<button type="button" class="recipe-finder-chip mode" data-facet="mode" data-value="other">Other</button>
</div>

<div class="recipe-finder-facet">
<span class="recipe-finder-facet-label">Aggregate Operation</span>
{% assign ops = site.recipes | map: "op" | uniq | sort %}
{%- for op in ops %}
<button type="button" class="recipe-finder-chip op" data-facet="op" data-value="{{ op }}">{{ op }}</button>
{%- endfor %}
</div>

{% assign all = site.recipes | sort: "title" %}
<p class="recipe-finder-count" id="recipe-finder-count">{{ all.size }} of {{ all.size }} recipes</p>

<ul class="recipe-finder-list">
{%- for recipe in all %}
<li class="recipe-finder-row" data-op="{{ recipe.op }}" data-mode="{{ recipe.mode_class }}">
<a href="{{ site.baseurl }}/Cookbook/{{ recipe.category_url }}#{{ recipe.anchor }}">{{ recipe.title }}</a>
<span class="recipe-finder-category">{{ recipe.category_label }}</span>
<span class="op">{{ recipe.op }}</span>
<span class="mode{% if recipe.mode_class == "realtime" %} mode-realtime{% elsif recipe.mode_class == "scheduled" %} mode-scheduled{% endif %}">{{ recipe.mode }}</span>
</li>
{%- endfor %}
</ul>

</div>

<script>
(function () {
    var chips = document.querySelectorAll('.recipe-finder-chip');
    var rows = document.querySelectorAll('.recipe-finder-row');
    var count = document.getElementById('recipe-finder-count');
    var total = rows.length;

    function selected(facet) {
        var values = [];
        chips.forEach(function (chip) {
            if (chip.dataset.facet === facet && chip.classList.contains('active')) {
                values.push(chip.dataset.value);
            }
        });
        return values;
    }

    function apply() {
        var modes = selected('mode');
        var ops = selected('op');
        var shown = 0;
        rows.forEach(function (row) {
            var ok = (modes.length === 0 || modes.indexOf(row.dataset.mode) !== -1) &&
                     (ops.length === 0 || ops.indexOf(row.dataset.op) !== -1);
            row.hidden = !ok;
            if (ok) shown++;
        });
        count.textContent = shown + ' of ' + total + ' recipes';
    }

    chips.forEach(function (chip) {
        chip.addEventListener('click', function () {
            chip.classList.toggle('active');
            chip.setAttribute('aria-pressed', chip.classList.contains('active'));
            apply();
        });
        chip.setAttribute('aria-pressed', 'false');
    });
})();
</script>
