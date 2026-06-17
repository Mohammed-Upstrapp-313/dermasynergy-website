/**
 * Sync the manifest/favicon source from the CMS.
 *
 * gatsby-plugin-manifest needs a local build-time file (it can't read a remote
 * URL), so before each build/develop we pull global.favicon from Strapi and
 * write it to src/images/icon.png. That keeps the browser-tab favicon, the
 * apple-touch-icons and the PWA icon all driven by the CMS.
 *
 * Best-effort by design: on ANY failure (CMS down, no token, no favicon set) it
 * logs and exits 0, leaving the committed src/images/icon.png in place so the
 * build never breaks.
 */
const fs = require("fs");
const path = require("path");
const http = require("http");
const https = require("https");

require("dotenv").config({ path: `.env.${process.env.NODE_ENV || "development"}` });

const API = (process.env.STRAPI_API_URL || "http://localhost:1337").replace(/\/$/, "");
const TOKEN = process.env.STRAPI_TOKEN;
const OUT = path.join(__dirname, "..", "src", "images", "icon.png");

const fetch = (url, headers = {}) =>
  new Promise((resolve, reject) => {
    const mod = url.startsWith("https") ? https : http;
    mod
      .get(url, { headers, timeout: 20000 }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return resolve(fetch(res.headers.location, headers));
        }
        if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
      })
      .on("error", reject)
      .on("timeout", function () { this.destroy(new Error("timeout")); });
  });

(async () => {
  try {
    const headers = TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {};
    const json = JSON.parse((await fetch(`${API}/api/global?populate[favicon]=true`, headers)).toString());
    const fav = json && json.data && json.data.favicon;
    const url = fav && fav.url;
    if (!url) throw new Error("no favicon set in CMS");
    const img = await fetch(url.startsWith("http") ? url : `${API}${url}`);
    if (!img || img.length < 100) throw new Error("favicon download too small");
    fs.writeFileSync(OUT, img);
    console.log(`[favicon] synced from CMS (${img.length} bytes) -> src/images/icon.png`);
  } catch (e) {
    console.warn(`[favicon] CMS sync skipped (${e.message}); using committed src/images/icon.png`);
  }
})();
