/**
 * Create pages from Strapi content:
 *  - each Page  -> "/" (homepage) or "/{slug}/"
 *  - each Product -> "/products/{slug}/"
 */
const path = require("path");

/**
 * Make the CMS-driven label fields always queryable, even if the Strapi instance
 * we source from hasn't been redeployed with them yet. Without this, querying a
 * not-yet-existing field would fail the whole build; here they resolve to null and
 * the frontend falls back to its built-in defaults. Once the live CMS has the
 * fields, their values flow through automatically — no frontend change needed.
 */
exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type STRAPI__COMPONENT_SHARED_PRODUCT_LABELS @dontInfer {
      breadcrumb_home: String
      breadcrumb_products: String
      enquire_label: String
      benefits_eyebrow: String
      benefits_heading: String
      howto_eyebrow: String
      howto_heading: String
      ingredients_eyebrow: String
      ingredients_heading: String
      ingredients_note: String
      cta_eyebrow: String
      cta_heading: String
      cta_body: String
      cta_button: String
      know_more_label: String
    }
    type STRAPI_GLOBAL implements Node {
      header_cta_label: String
      copyright: String
      product_labels: STRAPI__COMPONENT_SHARED_PRODUCT_LABELS
    }
  `);
};

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
