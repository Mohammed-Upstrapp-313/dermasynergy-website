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
  },
};
