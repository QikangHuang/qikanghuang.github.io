# Qikang Huang Academic CV Homepage

This is a static GitHub Pages personal CV site built from `resume.pdf`.

## Files

- `index.html`: main homepage content
- `styles.css`: responsive page styling
- `script.js`: active navigation highlighting
- `assets/resume.pdf`: downloadable resume
- `assets/resume-preview.png`: resume preview image
- `assets/profile.jpg`: your profile photo
- `assets/profile.svg`: fallback placeholder avatar

## Update Tips

- Save your profile photo as `assets/profile.jpg`. If the file is missing, the page falls back to `assets/profile.svg`.
- Replace `assets/resume.pdf` when your resume changes.
- Regenerate the preview image after replacing the PDF:

```powershell
pdftoppm -png -singlefile -r 132 "assets\resume.pdf" "assets\resume-preview"
```

## Visitor Counter

This site uses a MapMyVisitors widget near the bottom of `index.html`.

The embed script is:

```html
<script type="text/javascript" id="mapmyvisitors" src="//mapmyvisitors.com/map.js?d=wJYZpwBP434icsmpcV3qQj8O7zHxFRZNb7avDdOcn8E&cl=ffffff&w=a"></script>
```

## GitHub Pages

Upload these files to the root of your `huangqk2026.github.io` repository. GitHub Pages will serve the site from `https://huangqk2026.github.io/`.
