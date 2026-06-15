/* One-time scaffolder: generates DermaSynergy content model (components + content-types + API files).
 * Mirrors the PHP CMS (D:\DermaSynergy-Website-php): pages built from reusable sections,
 * products, global settings/menus/social, and contact enquiries. Run with: node scaffold-content.cjs
 */
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const SRC = path.join(ROOT, "src");

const writeJSON = (p, obj) => {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(obj, null, 2) + "\n");
  console.log("  +", path.relative(ROOT, p));
};
const writeFile = (p, str) => {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, str);
  console.log("  +", path.relative(ROOT, p));
};

// ---- attribute helpers ----
const str = (opts = {}) => ({ type: "string", ...opts });
const text = (opts = {}) => ({ type: "text", ...opts });
const bool = (def = false) => ({ type: "boolean", default: def });
const enumr = (vals, def) => ({ type: "enumeration", enum: vals, default: def });
const media = (multiple = false) => ({ type: "media", multiple, required: false, allowedTypes: ["images"] });
const comp = (component, repeatable = false) => ({ type: "component", repeatable, component });

// ---- components ----
function component(category, key, displayName, icon, attributes) {
  writeJSON(path.join(SRC, "components", category, `${key}.json`), {
    collectionName: `components_${category}_${key.replace(/-/g, "_")}`,
    info: { displayName, icon },
    options: {},
    attributes,
  });
}

// shared sub-components
component("shared", "stat", "Stat (label/value)", "bulletList", { label: str(), value: str() });
component("shared", "list-item", "List item", "bulletList", { value: str() });
component("shared", "icon-text", "Icon + Text", "bulletList", { icon: str(), text: text() });
component("shared", "icon-title", "Icon + Title", "bulletList", { icon: str(), title: str() });
component("shared", "icon-title-text", "Icon + Title + Text", "bulletList", { icon: str(), title: str(), text: text() });
component("shared", "title-text", "Title + Text", "bulletList", { title: str(), text: text() });
component("shared", "logo", "Logo", "picture", { image: media(false), name: str() });
component("shared", "contact-point", "Contact point", "envelop", { icon: str(), label: str(), value: str() });
component("shared", "menu-item", "Menu item", "link", { label: str(), url: str() });
component("shared", "seo", "SEO", "search", { metaTitle: str(), metaDescription: text(), keywords: str(), ogImage: media(false) });

// section components (the 14 PHP section types)
const tint = { tint: bool(false) };
component("sections", "hero", "Hero / Banner", "bulb", {
  eyebrow: str(), heading: str(), lede: text(), cta_label: str(), cta_url: str(),
  image: media(false), meta: comp("shared.stat", true),
});
component("sections", "trust-strip", "Trust Strip", "shield", { items: comp("shared.icon-text", true) });
component("sections", "about-split", "About (Image + Text)", "user", {
  ...tint, image: media(false), image_side: enumr(["left", "right"], "left"),
  eyebrow: str(), heading: str(), lede: text(), body: text(),
});
component("sections", "feature-row", "Feature Row (numbered)", "apps", {
  ...tint, eyebrow: str(), heading: str(), lede: text(), items: comp("shared.title-text", true),
});
component("sections", "rule-list", "Approach / Rule List", "search", {
  ...tint, eyebrow: str(), heading: str(), lede: text(), link_label: str(), link_url: str(),
  items: comp("shared.icon-title-text", true),
});
component("sections", "process-steps", "Process Steps", "chartCircle", {
  ...tint, eyebrow: str(), heading: str(), lede: text(), items: comp("shared.title-text", true),
});
component("sections", "why-choose", "Why Choose (icon grid)", "apps", {
  ...tint, eyebrow: str(), heading: str(), lede: text(), items: comp("shared.icon-title", true),
});
component("sections", "products-grid", "Products Grid", "cube", {
  ...tint, eyebrow: str(), heading: str(), lede: text(), source: enumr(["featured", "all"], "featured"),
});
component("sections", "clientele", "Clientele Logos", "picture", {
  ...tint, eyebrow: str(), heading: str(), lede: text(), logos: comp("shared.logo", true),
});
component("sections", "cta-band", "CTA Band", "rocket", {
  eyebrow: str(), heading: str(), body: text(), cta_label: str(), cta_url: str(),
});
component("sections", "mission-vision", "Mission & Vision", "eye", {
  ...tint, eyebrow: str(), heading: str(), lede: text(), cards: comp("shared.icon-title-text", true),
});
component("sections", "page-banner", "Page Banner", "layout", { eyebrow: str(), heading: str(), breadcrumb: str() });
component("sections", "rich-text", "Rich Text / Legal", "file", { lede: text(), html: { type: "richtext" } });
component("sections", "contact-block", "Contact Block", "envelop", {
  eyebrow: str(), heading: str(), lede: text(), form_note: str(), points: comp("shared.contact-point", true),
});

const SECTION_UIDS = [
  "hero", "trust-strip", "about-split", "feature-row", "rule-list", "process-steps",
  "why-choose", "products-grid", "clientele", "cta-band", "mission-vision",
  "page-banner", "rich-text", "contact-block",
].map((k) => `sections.${k}`);

// ---- content types + API files ----
function api(singular, plural, displayName, kind, options, attributes) {
  const base = path.join(SRC, "api", singular);
  writeJSON(path.join(base, "content-types", singular, "schema.json"), {
    kind,
    collectionName: plural,
    info: { singularName: singular, pluralName: plural, displayName, description: "" },
    options: { draftAndPublish: false, ...options },
    pluginOptions: {},
    attributes,
  });
  const uid = `api::${singular}.${singular}`;
  writeFile(path.join(base, "controllers", `${singular}.js`),
    `'use strict';\nconst { factories } = require('@strapi/strapi');\nmodule.exports = factories.createCoreController('${uid}');\n`);
  writeFile(path.join(base, "services", `${singular}.js`),
    `'use strict';\nconst { factories } = require('@strapi/strapi');\nmodule.exports = factories.createCoreService('${uid}');\n`);
  writeFile(path.join(base, "routes", `${singular}.js`),
    `'use strict';\nconst { factories } = require('@strapi/strapi');\nmodule.exports = factories.createCoreRouter('${uid}');\n`);
}

// Page: ordered sections via dynamic zone
api("page", "pages", "Page", "collectionType", { draftAndPublish: true }, {
  title: str({ required: true }),
  slug: { type: "uid", targetField: "title", required: true },
  template: enumr(["default", "full", "product_index"], "default"),
  is_homepage: bool(false),
  seo: comp("shared.seo", false),
  sections: { type: "dynamiczone", components: SECTION_UIDS },
});

// Product: dedicated content type
api("product", "products", "Product", "collectionType", { draftAndPublish: true }, {
  name: str({ required: true }),
  slug: { type: "uid", targetField: "name", required: true },
  kicker: str(),
  subtitle: str(),
  short_desc: text(),
  description: text(),
  main_image: media(false),
  gallery: media(true),
  tags: comp("shared.list-item", true),
  specs: comp("shared.stat", true),
  benefits: comp("shared.icon-text", true),
  how_to_use: comp("shared.title-text", true),
  ingredients: comp("shared.list-item", true),
  accent: enumr(["green", "blue"], "green"),
  is_featured: bool(true),
  seo: comp("shared.seo", false),
});

// Global: single type for settings / menus / social / appearance
api("global", "globals", "Global", "singleType", {}, {
  site_name: str({ default: "DermaSynergy" }),
  logo: media(false),
  footer_about: text(),
  contact_email: str(),
  contact_phone: str(),
  contact_office: str(),
  social_instagram: str(),
  social_linkedin: str(),
  social_facebook: str(),
  social_youtube: str(),
  color_mint: str(),
  color_teal: str(),
  color_ink: str(),
  header_menu: comp("shared.menu-item", true),
  footer_menu: comp("shared.menu-item", true),
});

// Enquiry: contact form submissions
api("enquiry", "enquiries", "Enquiry", "collectionType", {}, {
  name: str(),
  phone: str(),
  email: { type: "email" },
  company: str(),
  message: text(),
  is_read: bool(false),
});

console.log("\nDone. Components + content-types generated.");
