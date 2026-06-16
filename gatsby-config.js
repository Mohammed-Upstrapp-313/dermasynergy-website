/**
 * DermaSynergy — Gatsby configuration
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({ path: `.env.${process.env.NODE_ENV || "development"}` });

// Deep populate so media + nested components inside the dynamic zone come through.
// "*" populates one level (covers media/components inside each section). Clientele
// needs two levels (logos -> image), so it gets an explicit nested populate.
const sectionsOn = {
  "sections.hero": { populate: "*" },
  "sections.trust-strip": { populate: "*" },
  "sections.about-split": { populate: "*" },
  "sections.feature-row": { populate: "*" },
  "sections.rule-list": { populate: "*" },
  "sections.process-steps": { populate: "*" },
  "sections.why-choose": { populate: "*" },
  "sections.products-grid": { populate: "*" },
  "sections.clientele": { populate: { logos: { populate: { image: true } } } },
  "sections.cta-band": { populate: "*" },
  "sections.mission-vision": { populate: "*" },
  "sections.page-banner": { populate: "*" },
  "sections.rich-text": { populate: "*" },
  "sections.contact-block": { populate: "*" },
};

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    {
      singularName: "page",
      queryParams: {
        publicationState: "live",
        populate: { seo: { populate: { ogImage: true } }, sections: { on: sectionsOn } },
      },
    },
    {
      singularName: "product",
      queryParams: {
        publicationState: "live",
        populate: {
          main_image: true, gallery: true, tags: true, specs: true,
          benefits: true, how_to_use: true, ingredients: true,
          seo: { populate: { ogImage: true } },
        },
      },
    },
  ],
  singleTypes: [
    {
      singularName: "global",
      queryParams: { populate: { logo: true, header_menu: true, footer_menu: true } },
    },
  ],
};

module.exports = {
  siteMetadata: {
    title: "DermaSynergy",
    description:
      "Dermatology-grade skincare developed for clinics and healthcare professionals — effective, well-made formulations backed by reliable supply.",
    siteUrl: "https://www.dermasynergy.com",
  },
  plugins: [
    // Image pipeline: responsive srcset, AVIF/WebP, lazy-load, blur-up.
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "images", path: `${__dirname}/src/images` },
    },
    // Strapi CMS as a data source (GraphQL nodes + image pipeline on media)
    {
      resolve: "gatsby-source-strapi",
      options: strapiConfig,
    },
    // SEO
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "DermaSynergy",
        short_name: "DermaSynergy",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#1c5f51",
        display: "minimal-ui",
        icon: "src/images/icon.png",
      },
    },
  ],
};
