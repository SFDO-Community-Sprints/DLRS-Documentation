# DLRS Documentation Site - Context

## Project Overview
This is the documentation repository for **DLRS (Declarative Lookup Rollup Summaries)**, an open-source Salesforce package commonly used in the nonprofit sector. DLRS provides a mechanism for aggregating or summarizing data from child objects and displaying it on parent objects, similar to Rollup Summary fields but with much greater flexibility.

A few things that shape how this repo is written and maintained:
- The primary audience is Salesforce admins configuring DLRS for their own org — not the end users who simply see the resulting rollup values. Content assumes familiarity with Salesforce administration (objects, fields, relationships, automation).
- Heavy emphasis on visual documentation with screenshots.
- Multiple versions of the documentation exist, noting transitions between DLRS versions.
- Community-driven, with contribution guidelines and links to the Trailblazer Community and other external Salesforce resources.

### DLRS Capabilities
- **Declarative**: "Clicks not code" approach
- **Flexible Relationships**: Works with Lookup relationships, not just Master-Detail
- **Extended Operations**: Beyond standard Sum/Min/Max - includes Average, Count Distinct, Concatenate, First/Last
- **Multiple Calculation Modes**: Realtime, Scheduled, Process Builder/Automation, Developer API

### Calculation Modes
1. **Realtime** - Triggers immediately on record changes
2. **Watch for Changes and Process Later** - Async bulk processing
3. **Invocable by Automation** - Called from Flow/Process Builder
4. **Developer** - API for custom Apex integration
5. **Schedule Full Calculate** - Scheduled full recalculations

### Professional Edition Support
Special considerations for Salesforce Professional Edition, which only supports "Invocable by Automation" mode due to Apex trigger limitations.

## Documentation Site Technical Stack
- **Static Site Generator**: Jekyll with the "Just the Docs" remote theme
- **Content Format**: Markdown files converted to HTML
- **Hosting**: GitHub Pages project site — https://sfdo-community-sprints.github.io/DLRS-Documentation/
- **Repository**: https://github.com/SFDO-Community-Sprints/DLRS-Documentation/

**Production build versions** — controlled by GitHub Pages, not by this repo. The authoritative
list is https://pages.github.com/versions/ (as of Aug 2025):
- `github-pages` gem 232 → Jekyll 3.10.0, Ruby 3.3.4

**Local preview environment** — what this repo pins for contributors previewing changes. It does
*not* have to match production exactly; keep the `github-pages` gem in sync so the build behaves
the same:
- Ruby 3.3.9 (`.ruby-version`; install via rbenv/asdf/mise) — any 3.3.x is fine; production uses 3.3.4
- Bundler 4.0.11 (`Gemfile.lock` `BUNDLED WITH`)
- Exact gem versions resolved in the committed `Gemfile.lock`

## Repository Structure
All site content and Jekyll config live under `docs/`; the repository root holds only project-level files.

```
/
├── docs/ (all site content and config — served with --source docs)
│   ├── _config.yml (Jekyll configuration for GitHub Pages)
│   ├── _includes/ (custom head + reusable callout snippets)
│   ├── index.md (overview page)
│   ├── Installation/
│   ├── Getting Started/
│   ├── Post Install Steps/
│   ├── User Guide/
│   ├── Architecture/
│   ├── Cookbook/
│   ├── Issues/
│   ├── ReleaseNotes/
│   ├── About Us & Contribution/
│   ├── assets/images/ (all site images)
│   └── favicon.ico
├── README.md (repo info + local-preview setup for contributors)
├── CODEOWNERS (GitHub code ownership)
├── LICENSE
├── .gitignore
├── Gemfile / Gemfile.lock / .ruby-version (committed Ruby env for reproducible local previews)
└── CONTEXT.md (this file — agent-neutral project notes for contributors and AI assistants)
```

> Historical note: the repo root previously contained unused Jekyll files
> (`_config.yml`, `home.md`, `site.webmanifest`, `_includes/`, `assets/`, and
> favicon PNGs) left over from an earlier layout. These have since been removed —
> the root now holds only the project-level files listed above, and everything
> Jekyll processes lives under `docs/`.

### Documentation Sections (`docs/` directory)
The documentation is organized into the following main sections (order matches site navigation):

1. **Overview** (`docs/index.md`) - Main landing page explaining what DLRS is
2. **Installation** (`docs/Installation/`) - Installation guides and configuration
3. **Getting Started** (`docs/Getting Started/`) - Step-by-step tutorials
4. **Post Install Steps** (`docs/Post Install Steps/`) - Configuration after installing the package
5. **User Guide** (`docs/User Guide/`) - Detailed usage instructions
6. **Architecture** (`docs/Architecture/`) - Technical details about how DLRS calculates
7. **Cookbook** (`docs/Cookbook/`) - Real-world use case examples
8. **Issues** (`docs/Issues/`) - Troubleshooting and bug reporting
9. **Release Notes** (`docs/ReleaseNotes/`) - Version history
10. **About Us & Contribution** (`docs/About Us & Contribution/`) - Community information

### Assets & Images
- **Single location**: All images live under `docs/assets/images/` (earlier scattered copies in root `assets/`, `images/`, etc. have been removed).
- Screenshots are used extensively to illustrate UI steps, alongside process diagrams that explain calculation modes.
- Consistent naming convention for DLRS UI screenshots.
- Version-specific subdirectories group screenshots by release (e.g., `v2_21/` for version 2.21).

## Site Configuration

### Jekyll Theme
- Uses "just-the-docs/just-the-docs" remote theme
- Light color scheme
- Search enabled with custom configuration
- Navigation structure based on frontmatter (`nav_order`, `has_children`)

### Custom Includes
- `docs/_includes/head_custom.html` - Injected into the theme's `<head>`
- `docs/_includes/callouts/` - Reusable callout/note snippets (e.g. `legacy-modes.html`), referenced from pages via Liquid `{% include %}`

### Navigation Features
- Hierarchical navigation with parent/child pages
- Site search functionality
- "Back to top" links
- Last edit timestamps
- Links to GitHub repository

## Content Conventions

### Markdown Files
- All content pages use YAML frontmatter with:
  - `layout: default`
  - `title: [Page Title]`
  - `nav_order: [Number]` for ordering
  - `has_children: true/false` for navigation structure

### Documentation Style
- Step-by-step tutorials with numbered lists
- Extensive use of screenshots for UI guidance (stored under `docs/assets/images/`; see Assets & Images)
- Code examples for SOQL criteria and API names
- Warning boxes and notes for important information

### Links & Images
Use **plain relative paths** for internal links and images — no Liquid or filters. Paths are
relative to the current page: most pages sit one level deep in a section folder and use a single
`../`; the root page `docs/index.md` sits alongside `assets/` and uses none.

```
![Rollup config](../assets/images/v2_21/rollup.png)   <!-- image -->
[Installation guide](../Installation/)                 <!-- internal link -->
[DLRS Community](https://trailhead.salesforce.com/...) <!-- external link: full URL -->
```
```
<img src="../assets/images/v2_21/rollup.png" alt="Rollup config" width="600"> <!-- when you need to size an image -->
```

Don't hardcode the baseurl (`/DLRS-Documentation/...`) or use a bare root path (`/assets/...`):
the first is brittle, the second 404s in production. A few older pages still hardcode it — fine to
leave, but prefer relative for new content.

Advanced/rarely needed: Jekyll's `relative_url` filter and `{% link %}` tag can build
baseurl-aware absolute paths, but they use Liquid and aren't used anywhere in this repo.

## Building & Running Locally
This is a GitHub Pages compatible Jekyll site. The live site builds and deploys automatically; you only need a local setup to preview changes before pushing.

**1. Install Ruby** — version 3.3.x, via a version manager (rbenv, asdf, or mise), which picks up
the pinned version from `.ruby-version`. Bundler (the `bundle` command used in the next steps)
ships with Ruby, so you don't install it separately.

**2. Install Ruby gems needed by GitHub Pages** — into a project-local folder (avoids sudo issues). `bundle install` reads the list of gems needed, at their exact pinned versions, from the committed `Gemfile` and `Gemfile.lock`.
```
bundle config set path 'vendor/bundle'
bundle install
```
If `bundle install` reports a Bundler version mismatch, install the version named at the bottom of
`Gemfile.lock` under `BUNDLED WITH` (e.g. `gem install bundler:<that-version>`). If a native gem
fails to compile, install a C toolchain (Xcode Command Line Tools on macOS).

**3. Serve the site**
```
# Serve the site (matches GitHub Pages configuration)
bundle exec jekyll serve --source docs --baseurl="/DLRS-Documentation"
```
Then open your browser to: **http://localhost:4000/DLRS-Documentation/**. Jekyll rebuilds automatically as you edit.

**Serving notes:**
- The `--source docs` flag is required because all site content and config live in `docs/`.
- **Baseurl is NOT set in `docs/_config.yml`.** In production, the `github-pages` gem
  auto-injects `baseurl: /DLRS-Documentation` (derived from the repo name). Locally there is
  no such injection, so you pass `--baseurl="/DLRS-Documentation"` by hand to reproduce the
  production URL structure and open the site at `http://localhost:4000/DLRS-Documentation/`.
  Omitting it serves a working site at the domain root (`localhost:4000/`) but won't catch
  subpath link issues — prefer the explicit baseurl for a production-faithful preview.
- `--source` (where files live) and `--baseurl` (URL path prefix) are independent flags; they
  do not conflict.
- Always test locally before pushing to GitHub. Internal links and images should be authored so
  they respect the baseurl — see Content Conventions → Links & Images.

**Keeping dependencies current:**
```
# Keep GitHub Pages gem updated for compatibility
bundle update github-pages
```

## Deployment
- **Type**: Project Pages (repository-specific GitHub Pages site)
- **URL Pattern**: `username.github.io/project-name` (https://sfdo-community-sprints.github.io/DLRS-Documentation/)
- **Source**: Automatic deployment from the `main` branch — GitHub Pages builds the Jekyll site on every push.
- **Branch**: `main` (modern default, previously `master`)

## Common Contributor Tasks

### Adding New Documentation
1. Create a Markdown file in the appropriate `docs/` subdirectory
2. Add proper YAML frontmatter with navigation properties (see Content Conventions)
3. Follow existing naming conventions and structure
4. Add relevant screenshots to `docs/assets/images/` if needed

### Updating Navigation
Navigation is controlled by `nav_order` values in frontmatter and `has_children` for parent pages.

### Publishing Changes
Pushing to `main` builds and deploys the site automatically (see Deployment). Preview locally first using Building & Running Locally.
