# DermaSynergy — Monorepo

B2B marketing site for DermaSynergy dermatology skincare, organized as a **Turborepo**
monorepo: a **Gatsby 5** frontend driven by content from a **Strapi 5** CMS.

## Structure

```
.
├── apps/
│   ├── web/        Gatsby 5 + React 18 frontend (sources content from Strapi)
│   └── cms/        Strapi 5 CMS (content + media, MySQL)
├── legacy/         Original static HTML/CSS design (kept for reference)
├── turbo.json      Turborepo task pipeline
└── package.json    npm workspaces + root scripts
```

Workspaces: `@dermasynergy/web`, `@dermasynergy/cms`.

## Quick start

```bash
npm install                 # install ALL workspaces (run once at the repo root)
```

The web app reads from Strapi at build/develop time, so start the CMS first:

```bash
npm run cms                 # Strapi admin at http://localhost:1337/admin
npm run web                 # Gatsby dev server at http://localhost:8000
```

Or drive everything through Turbo from the root:

```bash
npm run develop             # turbo run develop — starts every app
npm run build               # turbo run build  — builds every app (cached)
npm run clean               # turbo run clean
```

Per-app helpers: `npm run web` / `npm run web:build`, `npm run cms` / `npm run cms:build`.
You can also target a workspace directly: `npm run <script> --workspace=@dermasynergy/web`.

> Requires Node.js 20+ (Strapi pins `>=20 <=24.x`; developed on Node 24).

## Configuration

The web app connects to Strapi via env vars (create `apps/web/.env.development`):

```
STRAPI_API_URL=http://localhost:1337
STRAPI_TOKEN=<a Strapi read-only API token>
```

The CMS needs a MySQL connection + secrets in `apps/cms/.env` — see `apps/cms/README.md`
and `apps/cms/config/`.

## apps/web (Gatsby frontend)

- Pages and products are created from Strapi content in `gatsby-node.js`
  (`/` + `/{slug}/` from Pages, `/products/{slug}/` from Products), rendered by
  `src/templates/page.js` and `src/templates/product.js`.
- Sections are a Strapi dynamic zone mapped to React in `src/components/Sections.js`.
- `src/components/Seo.js` builds `<title>`/meta via the Gatsby Head API, with values
  synced from each entry's Strapi `seo` component (siteMetadata fallbacks).
- Image pipeline: `gatsby-plugin-image` + `gatsby-plugin-sharp` (responsive srcset,
  AVIF/WebP, lazy-load, blur-up). Strapi media flows through the same pipeline.

## apps/cms (Strapi 5)

Standard Strapi app — see `apps/cms/README.md`. Common scripts: `develop`, `build`,
`start`. Content model mirrors the legacy PHP CMS.

## legacy/

The original hand-built static HTML/CSS site (homepage, about, contact, two product
pages). Kept as the visual reference the Gatsby frontend mirrors. Not a workspace.

## Deployment

`netlify.toml` installs the whole workspace at the repo root, then builds only the web
app via `npx turbo run build --filter=@dermasynergy/web` and publishes
`apps/web/public`. The build needs a reachable Strapi (`STRAPI_API_URL` + `STRAPI_TOKEN`
in the Netlify environment). The CMS is deployed separately (e.g. Strapi Cloud).
