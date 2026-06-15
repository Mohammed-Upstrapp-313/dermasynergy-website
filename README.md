# DermaSynergy — Website (Gatsby + React)

B2B marketing site for DermaSynergy dermatology skincare, built with **Gatsby 5** and **React 18**.

## Quick start

```bash
npm install        # install dependencies
npm run develop    # start dev server at http://localhost:8000
```

Other scripts:

```bash
npm run build      # production build -> ./public
npm run serve      # serve the production build locally
npm run clean      # clear Gatsby cache (.cache + public)
```

> Requires Node.js 18+ (developed on Node 24).

## Project structure

```
src/
  components/      Shared UI
    Layout.js        Header + Footer shell + reveal-on-scroll observer
    Header.js        Top navigation (with mobile toggle)
    Footer.js        Footer with links + socials
    Seo.js           <title>/meta via Gatsby Head API
    Gallery.js       Product image gallery (main + thumbnails)
  pages/           File-based routes
    index.js         /                 Homepage
    about.js         /about/           About Us
    contact.js       /contact/         Contact + enquiry form
    privacy.js       /privacy/         Privacy policy (placeholder)
    terms.js         /terms/           Terms of use (placeholder)
    404.js           404 page
    products/
      rebalanse.js   /products/rebalanse/
      revivon.js     /products/revivon/
  styles/
    global.css       All shared styles (design tokens in :root)
static/
  assets/          Product photography, client logos, lab imagery (served at /assets/...)
  favicon.png
legacy/            Original static HTML site (archived for reference)
```

## Notes

- **Styling** is the original global `styles.css` (now `src/styles/global.css`), imported in `gatsby-browser.js`. Design tokens live in `:root` at the top.
- **Images** are served statically from `static/assets/` and referenced as `/assets/<file>.png`.
- **Fonts** (Newsreader, Hanken Grotesk, IBM Plex Mono) are loaded via Google Fonts `@import` inside `global.css` — needs internet to render correctly.
- **Contact form** (`src/pages/contact.js`) is front-end only — it validates and shows a success message but does not yet submit anywhere. Wire it to a backend/email service (or the upcoming admin panel/API).
- **Privacy & Terms** pages are placeholders pending final legal text.
- The **admin panel / CMS** will be added later; this repo is the frontend.

## Deployment

`npm run build` outputs a static site to `public/`, deployable to any static host
(Netlify, Vercel, Cloudflare Pages, Bitbucket Pipelines + hosting, etc.).
