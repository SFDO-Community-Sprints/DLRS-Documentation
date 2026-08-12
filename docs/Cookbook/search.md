---
layout: default
title: Find a Recipe
parent: Cookbook
nav_order: 0
---

# Find a Recipe

Filter the cookbook's recipes by calculation mode and aggregate operation, then jump straight to the recipe you need. Links open the recipe's page with its card expanded.

<div class="recipe-search" id="recipe-search">

<div class="recipe-search-filters">
<div class="recipe-search-facet" data-facet="mode">
<span class="recipe-search-facet-label">Calculation Mode</span>
<button type="button" class="recipe-chip is-active" data-value="">All</button>
<button type="button" class="recipe-chip chip-realtime" data-value="realtime">Realtime</button>
<button type="button" class="recipe-chip chip-scheduled" data-value="scheduled">Scheduled</button>
<button type="button" class="recipe-chip chip-other" data-value="other">Other</button>
</div>
<div class="recipe-search-facet" data-facet="op">
<span class="recipe-search-facet-label">Aggregate Operation</span>
<button type="button" class="recipe-chip is-active" data-value="">All</button>
{% assign ops = site.recipes | map: "operation" | uniq | sort %}
{% for op in ops %}<button type="button" class="recipe-chip chip-op" data-value="{{ op }}">{{ op }}</button>
{% endfor %}</div>
</div>

<p class="recipe-search-count" id="recipe-search-count" role="status" aria-live="polite" data-total="{{ site.recipes | size }}">{{ site.recipes | size }} of {{ site.recipes | size }} recipes</p>

<!-- role="list" restates the semantics list-style:none strips in Safari/VoiceOver -->
<ul class="recipe-search-results" id="recipe-search-results" role="list">
{% assign all = site.recipes | sort: "title" %}
{% for r in all %}{% assign cat_page = site.pages | where: "category", r.category | first %}{% assign mc = r.mode | downcase %}{% unless mc == 'realtime' or mc == 'scheduled' %}{% assign mc = 'other' %}{% endunless %}<li class="recipe-search-item" data-op="{{ r.operation }}" data-mode="{{ mc }}">
<a class="recipe-search-row" href="{{ cat_page.url | relative_url }}#{{ r.slug }}">
<span class="recipe-search-row-main">
<span class="recipe-search-row-title">{{ r.title }}</span>
<span class="recipe-search-row-category">{{ cat_page.title }}</span>
</span>
<span class="op">{{ r.operation }}</span>
<span class="mode{% unless mc == 'other' %} mode-{{ mc }}{% endunless %}">{{ r.mode }}</span>
</a>
</li>
{% endfor %}</ul>

<p class="recipe-search-empty" id="recipe-search-empty" hidden>No recipes match the selected filters.</p>

</div>

<script>
(function () {
  var root = document.getElementById('recipe-search');
  if (!root) return; /* no-op anywhere this markup isn't present */

  /* filter the <li> items, not the links inside them, so assistive
     tech's "item N of M" counts stay in step with what's visible */
  var rows = Array.prototype.slice.call(
    root.querySelectorAll('.recipe-search-item')
  );
  var countEl = document.getElementById('recipe-search-count');
  var emptyEl = document.getElementById('recipe-search-empty');
  var total = parseInt(countEl.getAttribute('data-total'), 10) || rows.length;

  /* Single selection per facet; an empty string means "All". */
  var active = { mode: '', op: '' };

  function applyFilters() {
    var visible = 0;
    rows.forEach(function (row) {
      var modeOk = active.mode === '' ||
        active.mode === row.getAttribute('data-mode');
      var opOk = active.op === '' ||
        active.op === row.getAttribute('data-op');
      var show = modeOk && opOk; /* facets AND together */
      row.hidden = !show;
      if (show) visible++;
    });
    countEl.textContent = visible + ' of ' + total + ' recipes';
    emptyEl.hidden = visible !== 0;
  }

  root.querySelectorAll('.recipe-search-facet').forEach(function (facet) {
    var name = facet.getAttribute('data-facet');
    var chips = Array.prototype.slice.call(
      facet.querySelectorAll('.recipe-chip')
    );

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var value = chip.getAttribute('data-value');
        /* re-clicking the selected chip deselects back to "All" */
        active[name] = active[name] === value ? '' : value;
        chips.forEach(function (c) {
          var on = c.getAttribute('data-value') === active[name];
          c.classList.toggle('is-active', on);
          c.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        applyFilters();
      });
      chip.setAttribute('aria-pressed',
        chip.getAttribute('data-value') === '' ? 'true' : 'false');
    });
  });

  applyFilters();
})();
</script>
