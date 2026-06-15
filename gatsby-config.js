/**
 * DermaSynergy — Gatsby configuration
 * @type {import('gatsby').GatsbyConfig}
 */
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
