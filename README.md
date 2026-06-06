# website

Public website for Git Wikitree.

## Development

```bash
npm ci
npm run dev
```

## GitHub Pages

The site is deployed with GitHub Actions. The workflow builds `dist/` with Vite,
uploads it as a Pages artifact, and publishes it through GitHub Pages.

Vite uses a relative `base` so the same build works on the GitHub Pages root
site at `https://gitwikitree.github.io/` and on a future custom domain.

## Localization

Page copy is grouped in `siteContent` inside `src/App.tsx`. When adding more
languages, extend that content shape first and keep JSX focused on layout.
