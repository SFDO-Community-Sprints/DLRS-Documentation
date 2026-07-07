# DLRS Documentation

![Logo](docs/assets/images/DLRS_New_Badge_2022.png)

## Description

This repo holds the pages for public documentation. Unless you are here to edit the pages, you want to go to the [lovely Pages](https://sfdo-community-sprints.github.io/DLRS-Documentation/) view instead of this repo directly.

## Local Setup (previewing the site)

The live site is built and deployed by GitHub Pages automatically on push to `main`. You only need a local setup if you want to preview your changes before pushing.

The repo commits `Gemfile`, `Gemfile.lock`, and `.ruby-version` so everyone previews with the same dependency versions. Bundler pins the gems, but it does **not** install Ruby itself — so there is one manual prerequisite.

**1. Install Ruby 3.3.9** using a version manager. The `.ruby-version` file makes these pick it up automatically:

```bash
# using mise (https://mise.jdx.dev/)
mise install ruby@3.3.9

# ...or rbenv
rbenv install 3.3.9

# ...or asdf
asdf install ruby 3.3.9
```

**2. Install the pinned gems** into a project-local folder (keeps things isolated, like a Python venv):

```bash
bundle config set path 'vendor/bundle'
bundle install
```

If Bundler complains about its own version, match the one recorded in `Gemfile.lock` (`BUNDLED WITH`):

```bash
gem install bundler:4.0.11
```

**3. Serve the site** (matches the GitHub Pages URL structure):

```bash
bundle exec jekyll serve --source docs --baseurl="/DLRS-Documentation"
```

Then open **http://localhost:4000/DLRS-Documentation/**. Jekyll rebuilds automatically as you edit.

> Note: `Gemfile.lock` only governs your **local** preview. GitHub Pages builds the deployed site with its own pinned gem set (via the `github-pages` gem), so it does not read this lockfile.

## License

See this repository [License](https://github.com/SFDO-Community-Sprints/DLRS-Documentation/blob/main/LICENSE).
