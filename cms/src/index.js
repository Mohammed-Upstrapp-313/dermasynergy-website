'use strict';

/**
 * Public API permissions for the DermaSynergy frontend (Gatsby).
 * Read access to content; create access for contact enquiries.
 */
const PUBLIC_PERMISSIONS = {
  'api::page.page': ['find', 'findOne'],
  'api::product.product': ['find', 'findOne'],
  'api::global.global': ['find'],
  'api::enquiry.enquiry': ['create'],
};

module.exports = {
  register(/* { strapi } */) {},

  async bootstrap({ strapi }) {
    const publicRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'public' } });
    if (!publicRole) return;

    const wanted = [];
    for (const [uid, actions] of Object.entries(PUBLIC_PERMISSIONS)) {
      for (const action of actions) wanted.push(`${uid}.${action}`);
    }

    const existing = await strapi
      .query('plugin::users-permissions.permission')
      .findMany({ where: { role: publicRole.id } });
    const existingActions = new Set(existing.map((p) => p.action));

    for (const action of wanted) {
      if (!existingActions.has(action)) {
        await strapi.query('plugin::users-permissions.permission').create({
          data: { action, role: publicRole.id },
        });
        strapi.log.info(`[bootstrap] enabled public permission: ${action}`);
      }
    }

    // Seed content (mirrors the PHP CMS seeder). Idempotent.
    try {
      await require('./seed')(strapi);
    } catch (e) {
      strapi.log.error('[seed] failed: ' + (e.stack || e.message));
    }

    // Ensure og_image is set (PHP parity): pages -> logo, products -> main image. Idempotent.
    try {
      await patchOgImage(strapi);
    } catch (e) {
      strapi.log.error('[patch] ogImage failed: ' + (e.stack || e.message));
    }
  },
};

async function patchOgImage(strapi) {
  const logo = await strapi.db
    .query('plugin::upload.file')
    .findMany({ where: { name: { $contains: 'main-logo' } }, limit: 1 });
  const logoId = logo[0] && logo[0].id;

  const keepSeo = (seo, ogImage) => ({
    metaTitle: (seo && seo.metaTitle) || null,
    metaDescription: (seo && seo.metaDescription) || null,
    keywords: (seo && seo.keywords) || null,
    ogImage,
  });

  if (logoId) {
    const pages = await strapi.documents('api::page.page').findMany({
      populate: { seo: { populate: { ogImage: true } } },
    });
    for (const pg of pages) {
      if (!pg.seo || !pg.seo.ogImage) {
        await strapi.documents('api::page.page').update({
          documentId: pg.documentId,
          data: { seo: keepSeo(pg.seo, logoId) },
        });
        await strapi.documents('api::page.page').publish({ documentId: pg.documentId });
        strapi.log.info(`[patch] og_image set on page: ${pg.slug}`);
      }
    }
  }

  const products = await strapi.documents('api::product.product').findMany({
    populate: { seo: { populate: { ogImage: true } }, main_image: true },
  });
  for (const pr of products) {
    if ((!pr.seo || !pr.seo.ogImage) && pr.main_image) {
      await strapi.documents('api::product.product').update({
        documentId: pr.documentId,
        data: { seo: keepSeo(pr.seo, pr.main_image.id) },
      });
      await strapi.documents('api::product.product').publish({ documentId: pr.documentId });
      strapi.log.info(`[patch] og_image set on product: ${pr.slug}`);
    }
  }
}
