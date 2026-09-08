# Publish Brief

The release-ready standalone repository is at `/home/user/hugo-theme-brief`,
on branch `main`. Its origin is `git@github.com:chency87/hugo-theme-brief.git`.
The theme repository is published and tracking `origin/main`.

## Publish the theme

The theme repository already exists at `github.com/chency87/hugo-theme-brief`
and this local checkout is tracking `origin/main`.

When you make theme changes, publish them with:

```sh
cd /home/user/hugo-theme-brief
git push
```

The repository contains only reusable theme files, documentation, licensing, and
fictional example content. Personal site content and assets are excluded.

## Connect this site to the published theme

The site currently retains its ordinary `themes/brief/` directory so it remains
buildable until publication succeeds. After pushing the theme, from this site's
root, move that directory to a backup outside the site and add the submodule:

```sh
mv themes/brief ../brief-before-submodule
git submodule add git@github.com:chency87/hugo-theme-brief.git themes/brief
hugo --panicOnWarning
```

Use a different backup name if `../brief-before-submodule` already exists.
These commands assume `themes/brief/` is still untracked, as it was when this
release was prepared. If it has since been committed, first remove only that
folder from the index with `git rm -r --cached themes/brief` before moving it.
Review and commit `.gitmodules` and `themes/brief` with the site's intended
source changes. Existing unrelated changes in the site are not committed by
this preparation.

Subsequent clones need `git submodule update --init --recursive` before building.
Make reusable theme changes inside the submodule, commit and push them in the
theme repository, then commit the updated submodule pointer in this site.
Until the submodule is connected, edits to the site's theme directory do not
automatically update the separate release repository.

## Validation performed

The contact template, stylesheet, and setup guide now belong to
`themes/brief/` (`layouts/contact.html`, `assets/css/contact.css`, and
`CONTACT-FORM.md`). The theme's example contact page uses this layout. Personal
contact text and the recipient address remain in the consuming site's content
and configuration. Sync these theme changes into the separate release repository
before publishing; they no longer require site-level layout or CSS overrides.

The site's theme directory includes a CV layout, responsive and print styles,
and an example page. These additions have not been copied into the separate
release repository; sync them before publishing a release that includes the CV.

The CV lives entirely in HTML and CSS. “Save as PDF” prints the current page
through the browser; no standalone PDF or export script is maintained.

- Personal site and fictional example site build with Hugo 0.152.2 and
  `--panicOnWarning`.
- The theme builds independently from a checkout named `hugo-theme-brief`.
- Bundled fonts are included and referenced by generated CSS.
- The contact invitation disappears when no contact page exists.
- A custom contact permalink works under a site URL subpath.

Listing in the Hugo theme directory is a separate optional step after publication;
it requires preview screenshots and a submission to the directory.

## Submit Brief to themes.gohugo.io

The Hugo themes website is built from `gohugoio/hugoThemesSiteBuilder` and does
not accept direct pushes from this site repository or from GitHub Pages workflows.
Submission is done with a pull request that adds the theme repository URL to
`themes.txt`.

### 1) Ensure required files are present in the theme repository

From `/home/user/hugo-theme-brief` verify:

- `theme.toml` exists with required metadata (already present).
- `hugo.toml` exists with module Hugo version constraints (already present).
- `README.md` exists with absolute image links if screenshots are embedded.
- `images/screenshot.png` or `images/screenshot.jpg` exists (3:2, at least 1500x1000).
- `images/tn.png` or `images/tn.jpg` exists (3:2, at least 900x600).

At the moment, the `images/` directory and required preview files are missing.

### 2) Add the missing preview images and push

```sh
cd /home/user/hugo-theme-brief
mkdir -p images
# Add screenshot and thumbnail files in images/
git add images/screenshot.png images/tn.png
git commit -m "Add Hugo themes preview images"
git push
```

Use `.jpg` instead of `.png` if preferred; keep the expected filenames.

### 3) Open a submission PR to Hugo themes directory

1. Fork `https://github.com/gohugoio/hugoThemesSiteBuilder`.
2. Add `github.com/chency87/hugo-theme-brief` to `themes.txt` in lexicographical order.
3. Commit with a message such as `Add theme hugo-theme-brief`.
4. Open a pull request and wait for the Netlify preview to pass.

The themes site rebuilds on a schedule, so listing may appear after the next
successful rebuild window.
