# Publish Brief

The release-ready standalone repository is at `/home/user/hugo-theme-brief`,
on branch `main`. Its origin is `git@github.com:chency87/hugo-theme-brief.git`.
The GitHub repository has not yet been created or pushed: API authentication
failed in the development environment.

## Publish the theme

Create an empty public GitHub repository named `hugo-theme-brief` under `chency87`
(without an initial README, license, or .gitignore), then run:

```sh
cd /home/user/hugo-theme-brief
git push -u origin main
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
