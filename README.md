# Personal academic website template

A clean, fast, static site for a postdoc researcher, built with plain HTML/CSS/JS — no build step, no Jekyll, no dependencies. Works on GitHub Pages out of the box.

## Pages included
- `index.html` — homepage / hero
- `research.html` — research themes, methods & tools
- `publications.html` — publication list
- `software.html` — open-source code/tools
- `cv.html` — CV summary + PDF download
- `contact.html` — contact details

## 1. Customize the content
Open each `.html` file and replace the placeholder text (name, institution, research blurbs, publication entries, repo links, contact info). Everything is plain text inside the HTML — no templating syntax to learn. Search for "Jordan Hale", "University Name", and "yourname" to find every spot that needs a swap.

Replace the placeholder photo (`https://placehold.co/...` in `index.html`) with your own image — drop a file into a new `assets/images/` folder and update the `src`.

Add your real CV as `assets/Jordan_Hale_CV.pdf` (or update the filename/link in `cv.html`).

## 2. Preview locally (optional)
No build tools needed — just open `index.html` in a browser. For a local server (recommended, avoids some path quirks):

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## 3. Deploy on GitHub Pages
1. Create a new GitHub repository. If you want it at `https://yourusername.github.io`, name the repo exactly `yourusername.github.io`. Otherwise any repo name works and the site will be served at `https://yourusername.github.io/repo-name`.
2. Push all these files to the repository's `main` branch (the `index.html` should sit at the repo root, not inside a subfolder).
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment," set **Source** to "Deploy from a branch," branch `main`, folder `/ (root)`.
5. Save. GitHub will give you a URL (usually live within a minute or two).

## 4. Keep it updated
- Add new papers to `publications.html` as they're accepted/posted as preprints.
- Add new repos to `software.html` as you publish tools.
- Update `cv.html` and swap the PDF whenever your CV changes.

## Notes on design
The hero contour-line motif (in `index.html`) is meant to nod to topographic/isoline data — feel free to remove or restyle it via the `.hero-contours` SVG block and `assets/style.css`. Colors and type are defined as CSS variables at the top of `assets/style.css` (`--ink`, `--paper`, `--rust`, `--moss`, `--stone`) if you want to adjust the palette.
