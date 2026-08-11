# DLRS Documentation Site - Context

## Project Overview
This is the documentation repository for **DLRS (Declarative Lookup Rollup Summaries)**, an open-source Salesforce package. DLRS provides a mechanism for aggregating or summarizing data from child objects and displaying it on parent objects, similar to Rollup Summary fields but with much greater flexibility.

A few things that shape how this repo is written and maintained:
- The primary audience is Salesforce admins and consultants configuring DLRS for orgs — not the end users who simply see the resulting rollup values. Content assumes familiarity with Salesforce administration (objects, fields, relationships, automation).
- Community-driven, with contribution guidelines and links to the Trailblazer Community and other external Salesforce resources.
- Emphasis on visual documentation with screenshots.

### DLRS Capabilities
- **Declarative**: "Clicks not code" approach
- **Flexible Relationships**: Works with Lookup relationships, not just Master-Detail
- **Extended Operations**: Beyond standard Sum/Min/Max - includes Average, Count Distinct, Concatenate, First/Last
- **Multiple Calculation Modes**: Watch for Changes and Process Later, Realtime, Invocable by Automation, Developer

### Calculation Modes
Four modes control how and when a rollup processes. Two were renamed in version 2.21, and the old
labels still appear in pre-2.21 pages and in orgs running earlier versions:

1. **Watch for Changes and Process Later** - Async bulk processing on a schedule; the recommended
   default, since it doesn't fire on every child record change (labeled "Scheduled" before 2.21)
2. **Realtime** - Installs an Apex trigger on the child object; recalculates immediately on change
3. **Invocable by Automation** - Called from Flow or other automation; deploys no child trigger
   (labeled "Process Builder" before 2.21)
4. **Developer** - Called from Apex, for programmatic solutions

Separate from the calculation mode, any rollup can be fully recalculated on demand or on a set
schedule via the **Recalculate Now** and **Schedule Recalculation** buttons. This is a capability
of the rollup, not a fifth mode.

`docs/User Guide/calculates.md` is the authoritative page for this.

## Documentation Site Overview

### How the site is built
- **Jekyll** converts the Markdown files in `docs/` into published HTML.
- **Just the Docs**, a remote theme pinned to a release tag in `docs/_config.yml`, supplies the
  page layout, navigation sidebar, and search.
- **GitHub Pages** builds and deploys automatically on every push to `main`. There is no build step
  to run by hand and no workflow file in the repo — GitHub runs the build internally.
- Page titles, URLs, nav order, and section nesting come from **YAML frontmatter** in each Markdown
  file rather than from a central config.

### Repository structure
The `docs/` folder holds everything used to generate the site. 
Files outside `docs/` are contributor tooling and repo housekeeping; changing them doesn't change the published site.

```
/
├── docs/ (all site content and config)
│   ├── _config.yml (Jekyll configuration for GitHub Pages)
│   ├── _includes/ (custom head snippet)
│   ├── index.md (homepage)
│   ├── Installation/
│   ├── Post Install Steps/
│   ├── Getting Started/
│   ├── User Guide/ (includes former Architecture pages)
│   ├── Issues/ (titled "FAQ" in the nav)
│   ├── Cookbook/
│   ├── About Us & Contribution/
│   ├── ReleaseNotes/
│   ├── assets/images/ (all site images)
│   └── favicon.ico
├── README.md (repo info + local-preview setup for contributors)
├── CODEOWNERS (GitHub code ownership)
├── LICENSE
├── .gitignore
├── Gemfile / Gemfile.lock / .ruby-version (committed Ruby env for reproducible local previews)
└── CONTEXT.md (this file — project notes for contributors and AI assistants)
```

## Content Contribution Guide

### Adding New Documentation
1. Create a Markdown file in the appropriate `docs/` subdirectory
2. Add proper YAML frontmatter with navigation properties (see Content Conventions)
3. Follow existing naming conventions and structure
4. Add relevant screenshots to `docs/assets/images/` if needed

### Publishing Changes
Pushing to `main` builds and deploys the site automatically. 
However, contributors don't push to main directly: they should create a git branch to hold the draft changes,
then create a PR for review.

## Previewing Locally
This is not required for contribution, but it can be helpful to preview changes while working.

**First-time setup** — installing rbenv, the pinned Ruby, and the gems — is documented in the
README under *Local Contributor Setup*. Follow it once per machine; the rest of this section
assumes it's done.

**Serve the site** (the everyday command, run from the repo root):
```
bundle exec jekyll serve --safe --source docs --baseurl="/DLRS-Documentation"
```
Then open `http://localhost:4000/DLRS-Documentation/` in your browser. Jekyll rebuilds automatically as you edit.

**What each flag does:**
- `bundle exec` — runs Jekyll with the gems pinned in `Gemfile.lock`, rather than any other Ruby
  tooling that happens to be on your machine.
- `--safe` — turns off custom Ruby plugins and ignores symlinked files, which is what GitHub's build
  does too. Without it, you could add something that works in your preview but would be disabled on the live site.
- `--source docs` — the site's files live in `docs/`, which is also the folder GitHub Pages builds
  from.
- `--baseurl="/DLRS-Documentation"` — the published site sits under that path rather than at a domain
  root. GitHub fills this in automatically; locally you supply it so links and images resolve the
  same way they will once published.

### Nav Sections
The documentation is organized into the following main sections, in site navigation order.

1. **Overview** (`docs/index.md`) - Main landing page explaining what DLRS is
2. **Installation** (`docs/Installation/`) - Installation guides and configuration
3. **Post Install Steps** (`docs/Post Install Steps/`) - Configuration after installing the package
4. **Getting Started** (`docs/Getting Started/`) - Step-by-step tutorials
5. **User Guide** (`docs/User Guide/`) - Detailed usage instructions
6. **FAQ** (`docs/Issues/`) - Troubleshooting and bug reporting
7. **Cookbook** (`docs/Cookbook/`) - Real-world use case examples
8. **About Us & Contribution** (`docs/About Us & Contribution/`) - Community information
9. **Current Release Notes** (`docs/ReleaseNotes/`) - Version history

Section landing pages are named `index.md`, with one exception: `Post Install Steps/` uses
`Post Install Steps.md`. Look for that file when editing the section's parent page.

### Markdown Files
- All content pages use YAML frontmatter with:
  - `layout: default`
  - `title: [Page Title]`
  - `nav_order: [Number]` for ordering
  - `has_children: true/false` for navigation structure
  - `permalink: [/path.html]` (optional) to pin a fixed URL independent of the file's location — see Page URLs and `permalink` under Links & Images for more info

### Images
All images live under `docs/assets/images/`.

### Links

Syntax:
Links are written as `[Label](path)`. Images use the same form with a leading `!`, where the label
becomes the alt text: `![Alt text](path)`.

Recommended link paths:
Use **plain relative paths**, written from the page's own location. Nearly every content page sits
one folder deep, so paths begin by stepping up one level:
- Images: `../assets/images/image_name`
- Pages in other site sections: `../section_name/page_name` 

Examples:

**Image**

```
![Rollup config](../assets/images/v2_21/rollup.png)
```

**Internal link**

```
[Installation guide](../Installation/)
```

**External link** — use the full URL

```
[DLRS Community](https://trailhead.salesforce.com/...)
```

**Sized image** — use HTML when you need to control the width

```
<img src="../assets/images/v2_21/rollup.png" alt="Rollup config" width="600">
```

Don't hardcode the baseurl (`/DLRS-Documentation/...`) or use a bare root path (`/assets/...`):
the first is brittle, the second 404s in production.

### Page URLs and permalink
By default Jekyll derives each page's URL from its file path.

A `permalink:` in a page's frontmatter overrides that default and fixes the page to a specific URL,
independent of where the file sits in the folder tree. 

Use it to keep a page's published URL stable when its file is moved or renamed, so existing links
(including hardcoded absolute ones and external bookmarks) don't break. Some pages therefore
live in one folder while serving from a URL that reflects a different path — preserve their
`permalink` when editing frontmatter unless you specifically intend to change the URL.

```yaml
permalink: /Architecture/calculates.html
```

This is core Jekyll — it requires no plugin and no `_config.yml` change. 
The value is root-relative; do not include the baseurl (GitHub Pages prepends it) and keep the `.html` extension.

To intentionally change a URL while keeping the old one working, the `jekyll-redirect-from` plugin
(present in `Gemfile.lock`; enable via a `plugins:` list in `_config.yml`) could be used instead to
redirect the old URL to the new one.

## Site Technical Details

## Technical Stack
- **Static Site Generator**: Jekyll with the "Just the Docs" remote theme, pinned to a release tag in `_config.yml`
- **Content Format**: Markdown files converted to HTML
- **Runtime**: Jekyll is a Ruby program, so building the site requires a Ruby version plus a set of
  gems — `kramdown` does the Markdown-to-HTML conversion, and others handle search, SEO tags, and
  fetching the remote theme
- **Hosting**: GitHub Pages project site — https://sfdo-community-sprints.github.io/DLRS-Documentation/
- **Repository**: https://github.com/SFDO-Community-Sprints/DLRS-Documentation/

### Production build versions
The Ruby and gem versions GitHub uses to build the live site are controlled by GitHub Pages, not by
this repo. The authoritative list is https://pages.github.com/versions/
(available as `versions.json` at that URL for scripted checks):
- `github-pages` gem 232 → Jekyll 3.10.0, kramdown 2.4.0, Ruby 3.3.4

### Local preview environment — what this repo pins for contributors previewing changes:
- The local preview uses the same "github-pages" gem that GitHub uses for the live site.
- `Gemfile.lock` freezes the "github-pages" gem version. Compare against https://pages.github.com/versions/ now and then, and run `bundle update github-pages` to catch up.
