# Personal Website

My personal site, built with React + Vite. Dark theme only — the way it should be.

## Develop

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

Static output lands in `dist/` — deployable to any static host (GitHub Pages, GoDaddy, Netlify, etc.). Routing uses hash URLs (`/#/projects/...`) so no server-side rewrite config is needed.

## Structure

- `src/data/projects.js` — all project content lives here; add a project object and it appears on the homepage grid and gets its own detail page automatically
- `src/pages/` — Home, ProjectPage (data-driven), GoDaddy
- `src/components/` — Nav, Footer, FadeIn (scroll reveal), Typed (hero animation)
- `public/attachments/` — images, resume, favicon
