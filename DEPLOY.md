# DermaSynergy — Deployment (free stack)

Live architecture:

```
Gatsby frontend  ──►  Netlify        (static site; builds from `main`)
      ▲ pulls content at build time
Strapi CMS       ──►  Render         (Node web service)
  database       ──►  Neon           (Postgres)
  media/images   ──►  Cloudinary     (uploads persist across deploys)
```

Local dev is unchanged (XAMPP MySQL + local uploads). Production is selected entirely
by environment variables — same codebase.

Do the steps **in order**. Keep the values you get from each step; you'll paste them
into the next.

---

## 1) Database — Neon (Postgres)
1. Sign up at **https://neon.tech** → create a project (region near your users).
2. Copy the **connection string** (looks like
   `postgresql://user:pass@ep-xxx.region.aws.neon.tech/neondb?sslmode=require`).
3. Keep it for Render's `DATABASE_URL`.

## 2) Media — Cloudinary
1. Sign up at **https://cloudinary.com** → Dashboard.
2. Copy **Cloud name**, **API Key**, **API Secret**.
3. Keep them for Render's `CLOUDINARY_*` vars.

## 3) Strapi backend — Render
1. **https://render.com** → New → **Web Service** → connect the GitHub repo
   `Mohammed-Upstrapp-313/dermasynergy-website`.
2. Settings:
   - **Root Directory:** _(leave blank — repo root)_
   - **Build Command:** `npm install && npm run build --workspace=@dermasynergy/cms`
   - **Start Command:** `npm run start --workspace=@dermasynergy/cms`
   - **Instance type:** Free
3. **Environment variables** (Add from the list below).
4. Create the service → wait for the first deploy → note the URL,
   e.g. `https://dermasynergy-cms.onrender.com`.

### Render environment variables
| Key | Value |
|-----|-------|
| `NODE_VERSION` | `20` |
| `HOST` | `0.0.0.0` |
| `NODE_ENV` | `production` |
| `DATABASE_CLIENT` | `postgres` |
| `DATABASE_URL` | _(Neon connection string from step 1)_ |
| `DATABASE_SSL` | `true` |
| `APP_KEYS` | _(4 random keys, comma-separated — see below)_ |
| `API_TOKEN_SALT` | _(random)_ |
| `ADMIN_JWT_SECRET` | _(random)_ |
| `TRANSFER_TOKEN_SALT` | _(random)_ |
| `ENCRYPTION_KEY` | _(random)_ |
| `JWT_SECRET` | _(random)_ |
| `CLOUDINARY_NAME` | _(from step 2)_ |
| `CLOUDINARY_KEY` | _(from step 2)_ |
| `CLOUDINARY_SECRET` | _(from step 2)_ |
| `CORS_ORIGINS` | _(your Netlify URL, e.g. `https://dermasynergy.netlify.app` — add after step 5)_ |

**Generate the random secrets** (run locally, once per value; APP_KEYS needs 4):
```bash
# single secret
node -e "console.log(require('crypto').randomBytes(16).toString('base64'))"
# APP_KEYS (4 comma-separated)
node -e "console.log(Array.from({length:4},()=>require('crypto').randomBytes(16).toString('base64')).join(','))"
```

> On first boot, Strapi creates all tables and **auto-seeds** the content (pages,
> products, global, menus) and uploads the images to Cloudinary — the live admin
> comes up already populated.

## 4) Strapi (live) — admin + API token
1. Open `https://<your-render-url>/admin` → create your **admin account**.
2. **Settings → API Tokens → Create new API Token**
   - Name: `gatsby`, Token type: **Full access**, Duration: **Unlimited**
   - Copy the token (shown once). Keep it for Netlify.

## 5) Frontend — Netlify
The site is already connected to the repo. Add these **environment variables**
(Site settings → Environment variables), then trigger a redeploy:

| Key | Value |
|-----|-------|
| `STRAPI_API_URL` | `https://<your-render-url>` |
| `STRAPI_TOKEN` | _(the `gatsby` full-access token from step 4)_ |
| `GATSBY_STRAPI_API_URL` | `https://<your-render-url>` |
| `GATSBY_EMAILJS_SERVICE_ID` | _(EmailJS Service ID)_ |
| `GATSBY_EMAILJS_TEMPLATE_ID` | _(EmailJS Template ID)_ |
| `GATSBY_EMAILJS_PUBLIC_KEY` | _(EmailJS Public Key)_ |

> The contact form sends via **EmailJS** (client-side) — get these from
> https://dashboard.emailjs.com (Email Services / Email Templates / Account → General).

Then **Deploys → Trigger deploy → Deploy site**. When it finishes, the live site
renders from the live Strapi. (Go back to Render and set `CORS_ORIGINS` to the
Netlify URL so the contact form can submit.)

## 6) Auto-rebuild on publish (webhook)
So editing + Publish in Strapi rebuilds the site automatically:
1. **Netlify** → Site settings → Build & deploy → **Build hooks** → Add build hook →
   copy the URL (e.g. `https://api.netlify.com/build_hooks/abc123`).
2. **Strapi (live)** → Settings → **Webhooks** → Create:
   - URL: _(the Netlify build hook)_
   - Events: `entry.publish`, `entry.update`, `entry.unpublish`, `entry.delete`
   - Save.

Now: edit in Strapi → **Publish** → Netlify rebuilds → live site updates in ~1–2 min.

---

## Notes
- **Render free tier sleeps** after ~15 min idle (first admin login after idle is slow).
  The public site is static on Netlify, so **visitors are unaffected**.
- **XAMPP MySQL stays local-only.** Production uses Neon Postgres (selected by
  `DATABASE_CLIENT`/`DATABASE_URL`). No data migration needed — the seed recreates
  the baseline content on the live DB.
- Secrets live only in Render/Netlify dashboards. Never commit `.env` files.
