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
  // Keep dependencies minimal: global CSS is wired via gatsby-browser.js,
  // assets are served statically from /static, favicon via the Head API.
  plugins: [],
};
