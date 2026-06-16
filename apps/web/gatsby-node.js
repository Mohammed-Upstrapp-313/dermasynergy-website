/**
 * Create pages from Strapi content:
 *  - each Page  -> "/" (homepage) or "/{slug}/"
 *  - each Product -> "/products/{slug}/"
 */
const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allStrapiPage { nodes { slug is_homepage } }
      allStrapiProduct { nodes { slug } }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error loading Strapi content", result.errors);
    return;
  }

  const pageTpl = path.resolve("./src/templates/page.js");
  const productTpl = path.resolve("./src/templates/product.js");

  result.data.allStrapiPage.nodes.forEach((p) => {
    createPage({
      path: p.is_homepage ? "/" : `/${p.slug}/`,
      component: pageTpl,
      context: { slug: p.slug },
    });
  });

  result.data.allStrapiProduct.nodes.forEach((p) => {
    createPage({
      path: `/products/${p.slug}/`,
      component: productTpl,
      context: { slug: p.slug },
    });
  });
};
