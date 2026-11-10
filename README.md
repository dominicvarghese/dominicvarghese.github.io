# Dominic Varghese · Research portfolio

Static portfolio hosted at https://dominicvarghese.github.io/ using GitHub Pages.

## Updating content

`portfolio.json` is the content source. Update it alongside `index_template.html`,
`resume_template.html`, `css/main.css`, `css/resume.css`, and `js/app.js` as needed.
The rendered `index.html` and `resume.html` are committed because GitHub Pages
serves them directly. No JavaScript build is required.

```bash
python -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/python generate_portfolio.py
```

The generator resolves paths relative to its own location, so it can also run from
outside this directory. Commit both the content/templates and generated pages.
The download currently points to the existing public `Dominic_Varghese_Resume (2).pdf`.
Publishing the newly attached PDF is pending the owner’s explicit permission.

## November 2026 content refresh

- Research, education, and skills updated from the owner-provided résumé.
- New project descriptions checked against the public READMEs for
  [polymer-property-prediction](https://github.com/dominicvarghese/polymer-property-prediction),
  [crystal-symmetry](https://github.com/dominicvarghese/crystal-symmetry), and
  [donuman-ai-scientist](https://github.com/dominicvarghese/donuman-ai-scientist).
- Polymer benchmark values are repository-reported, not independently reproduced.
  WARDEN is described as a research prototype with unverified live scientific performance.
- Existing published-paper citations and historical honors are retained from the
  previous website. Manuscripts previously listed as “under preparation” are
  omitted because their current status is unconfirmed.
- The existing LinkedIn destination is retained; the résumé gives a different
  shorter profile URL, which should be confirmed by the owner before replacing it.

The page remains usable without JavaScript. JavaScript enhances the mobile menu;
reduced-motion preferences and keyboard navigation are supported. The optional
Google Fonts stylesheet has local system-font fallbacks.

Originally based on [Corey Schafer’s portfolio generator](https://github.com/CoreyMSchafer/portfolio_generator).
