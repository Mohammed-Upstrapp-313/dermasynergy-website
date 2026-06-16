'use strict';

/**
 * Seeds DermaSynergy content (mirrors the PHP CMS database/install.php):
 * Global settings + menus, both products, and all pages built from sections.
 * Idempotent: skips if pages already exist. Runs from bootstrap.
 */
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', '..', 'web', 'src', 'images');
const mimeOf = (f) =>
  f.endsWith('.png') ? 'image/png' : /\.jpe?g$/.test(f) ? 'image/jpeg' : f.endsWith('.webp') ? 'image/webp' : 'application/octet-stream';

async function seed(strapi) {
  const existing = await strapi.db.query('api::page.page').count();
  if (existing > 0) {
    strapi.log.info('[seed] pages already exist — skipping seed.');
    return;
  }
  strapi.log.info('[seed] seeding DermaSynergy content...');

  // ---- media upload (cached by filename) ----
  const cache = {};
  const upload = async (assetPath, alt) => {
    const file = assetPath.replace(/^\/?assets\//, '').replace(/^\//, '');
    if (cache[file]) return cache[file];
    const filePath = path.join(IMAGES_DIR, file);
    if (!fs.existsSync(filePath)) {
      strapi.log.warn(`[seed] image not found: ${file}`);
      return null;
    }
    const stats = fs.statSync(filePath);
    const [uploaded] = await strapi.plugins['upload'].services.upload.upload({
      data: { fileInfo: { name: file, alternativeText: alt || file } },
      files: { filepath: filePath, originalFileName: file, mimetype: mimeOf(file), size: stats.size },
    });
    cache[file] = uploaded.id;
    return uploaded.id;
  };

  const createDoc = async (uid, data, publish) => {
    const doc = await strapi.documents(uid).create({ data });
    if (publish) await strapi.documents(uid).publish({ documentId: doc.documentId });
    return doc;
  };

  // ---- Global (settings / menus / social / appearance) ----
  await createDoc('api::global.global', {
    site_name: 'DermaSynergy',
    logo: await upload('/assets/main-logo.png', 'DermaSynergy'),
    footer_about:
      'Dermatology-grade skincare developed for clinics and healthcare professionals — effective, well-made formulations backed by reliable supply.',
    contact_email: 'partners@dermasynergy.com',
    contact_phone: '+91 22 4567 8900',
    contact_office: 'Andheri East, Mumbai 400 069',
    social_instagram: '',
    social_linkedin: '',
    social_facebook: '',
    social_youtube: '',
    color_mint: '#64ccad',
    color_teal: '#1c5f51',
    color_ink: '#313c45',
    header_menu: [
      { label: 'About', url: '/about/' },
      { label: 'Rebalanse Cleanser', url: '/products/rebalanse/' },
      { label: 'Revivon Serum', url: '/products/revivon/' },
    ],
    footer_menu: [
      { label: 'About', url: '/about/' },
      { label: 'Rebalanse Cleanser', url: '/products/rebalanse/' },
      { label: 'Revivon Serum', url: '/products/revivon/' },
      { label: 'Contact Us', url: '/contact/' },
    ],
  }, false);
  strapi.log.info('[seed] ✓ Global');

  // ---- Products ----
  await createDoc('api::product.product', {
    name: 'Rebalanse™', slug: 'rebalanse', kicker: 'Exfoliating Cleanser · 100 ml', subtitle: 'Exfoliating Cleanser',
    short_desc: "A cream-based exfoliating cleanser that lifts excess oil, impurities, and dead skin cells — without stripping the skin's natural barrier.",
    description: "A cream-based exfoliating cleanser designed to cleanse the skin while helping remove excess oil, impurities, and dead skin cells — without leaving the skin feeling stripped or dry. Formulated with a balanced blend of exfoliating ingredients and skin-conditioning agents, Rebalanse supports smoother, clearer-looking skin while helping maintain the skin's natural barrier.",
    main_image: await upload('/assets/rebalanse-cleanser.png', 'Rebalanse Exfoliating Cleanser'),
    gallery: [
      await upload('/assets/rebalanse-lifestyle.png', 'Rebalanse'),
      await upload('/assets/rebalanse-texture.png', 'Rebalanse texture'),
      await upload('/assets/rebalanse-box.png', 'Rebalanse box'),
      await upload('/assets/rebalanse-model.png', 'Rebalanse model'),
    ],
    accent: 'green', is_featured: true,
    tags: ['Cream-based', 'pH balanced', 'AHA · BHA Complex', 'Daily use'].map((value) => ({ value })),
    specs: [
      { label: 'Active complex', value: 'Glycolic + Salicylic Acid' },
      { label: 'Skin types', value: 'Oily · Combination · Acne-prone' },
      { label: 'Format', value: '100 ml tube' },
    ],
    benefits: [
      { icon: 'droplet', text: 'Helps remove excess oil and impurities' },
      { icon: 'sparkle', text: 'Gently exfoliates dead skin cells' },
      { icon: 'smile', text: 'Supports smoother, clearer-looking skin' },
      { icon: 'pore', text: 'Helps keep pores clean' },
      { icon: 'tube', text: 'Cream-based formula for skin comfort' },
      { icon: 'ph', text: 'pH balanced' },
      { icon: 'calendar', text: 'Suitable for daily use as directed' },
      { icon: 'face', text: 'Designed for oily, combination & acne-prone skin' },
    ],
    how_to_use: [
      { title: 'Apply to wet skin', text: 'Dispense a small amount onto wet skin across the face.' },
      { title: 'Massage gently', text: 'Work in light, circular motions, avoiding the eye area.' },
      { title: 'Rinse & pat dry', text: 'Rinse thoroughly with water and pat the skin dry.' },
      { title: 'Use as directed', text: 'Use as directed by your dermatologist or healthcare professional.' },
    ],
    ingredients: ['Aqua (Water)', 'Glycerin', 'Propylene Glycol', 'Stearic Acid', 'Myristic Acid', 'Sodium Cocoyl Isethionate', 'Palmitic Acid', 'Ethylene Glycol Monostearate', 'Decyl Glucoside', 'Salicylic Acid', 'Glycolic Acid', 'Kojic Acid', 'Glutathione', 'Potassium Hydroxide', 'Disodium EDTA', 'Polysorbate 80', 'Phenoxyethanol', 'Ethylhexylglycerin', 'Fragrance (Parfum)'].map((value) => ({ value })),
    seo: { metaDescription: 'Rebalanse™ — a cream-based exfoliating cleanser (100 ml) with glycolic + salicylic acid that lifts oil, impurities and dead skin cells without stripping the skin barrier.' },
  }, true);

  await createDoc('api::product.product', {
    name: 'Revivon™', slug: 'revivon', kicker: 'Copper Peptide Serum · 30 ml', subtitle: 'Copper Peptide Serum',
    short_desc: 'A lightweight copper-peptide serum that supports skin recovery and hydration while strengthening a healthier-looking moisture barrier.',
    description: 'Revivon is a lightweight serum developed to support skin recovery, hydration, and overall skin health. Formulated with Copper Tripeptide-1, Niacinamide, Hyaluronic Acid, and Allantoin, it helps improve skin comfort while supporting a stronger and healthier-looking skin barrier. Its lightweight texture absorbs easily into the skin, making it suitable for daily use as part of a morning or evening routine.',
    main_image: await upload('/assets/revivon-serum.png', 'Revivon Copper Peptide Serum'),
    gallery: [
      await upload('/assets/revivon-lifestyle.png', 'Revivon'),
      await upload('/assets/revivon-water.png', 'Revivon'),
      await upload('/assets/revivon-lab.png', 'Revivon lab'),
      await upload('/assets/revivon-podium.png', 'Revivon'),
    ],
    accent: 'blue', is_featured: true,
    tags: ['Lightweight', 'Fragrance-free', 'Copper Tripeptide-1', 'Daily use'].map((value) => ({ value })),
    specs: [
      { label: 'Key actives', value: 'Copper Tripeptide-1 · Niacinamide' },
      { label: 'Also with', value: 'Hyaluronic Acid · Allantoin' },
      { label: 'Format', value: '30 ml / 1 fl. oz.' },
    ],
    benefits: [
      { icon: 'renew', text: 'Supports skin recovery and renewal' },
      { icon: 'shield-check', text: 'Helps maintain a healthy skin barrier' },
      { icon: 'droplet', text: 'Provides lightweight hydration' },
      { icon: 'sparkle', text: 'Helps improve overall skin texture & appearance' },
      { icon: 'absorb', text: 'Non-greasy and fast-absorbing' },
      { icon: 'calendar', text: 'Suitable for daily use' },
      { icon: 'no-fragrance', text: 'Fragrance-free' },
      { icon: 'all-skin', text: 'Designed for all skin types' },
    ],
    how_to_use: [
      { title: 'Dispense 2–3 drops', text: 'Apply 2–3 drops onto clean, dry skin.' },
      { title: 'Spread evenly', text: 'Gently spread over the face and neck until absorbed.' },
      { title: 'Layer moisturizer', text: 'Follow with a moisturizer if needed.' },
      { title: 'Use daily', text: 'Use once or twice daily, morning or evening.' },
    ],
    ingredients: ['Aqua (Water)', 'Glycerin', 'Propylene Glycol', 'Niacinamide', 'Carbomer', 'Sodium Hyaluronate', 'Copper Tripeptide-1', 'Allantoin', 'Xylitylglucoside', 'Anhydroxylitol', 'Xylitol', 'Polysorbate 80', 'Phenoxyethanol (and) Ethylhexylglycerin', 'Disodium EDTA'].map((value) => ({ value })),
    seo: { metaDescription: 'Revivon™ — a lightweight copper peptide serum (30 ml) with Copper Tripeptide-1, niacinamide, hyaluronic acid and allantoin that supports recovery, hydration and a healthier-looking moisture barrier.' },
  }, true);
  strapi.log.info('[seed] ✓ Products');

  // ---- Reusable section payloads ----
  const heroImg = await upload('/assets/rebalanse-cleanser.png', 'Rebalanse Exfoliating Cleanser');
  const aboutImg = await upload('/assets/about-lab.png', 'DermaSynergy formulation lab');
  const logos = [
    { image: await upload('/assets/client-sn-hospital.png', 'SN Hospital'), name: 'SN Hospital' },
    { image: await upload('/assets/client-dr-netis.png', "Dr. Neti's Skin Hair & Nail Clinic"), name: "Dr. Neti's Skin Hair & Nail Clinic" },
    { image: await upload('/assets/client-eeshritha.png', 'Eeshritha Skin & Hair Institute'), name: 'Eeshritha Skin & Hair Institute' },
    { image: await upload('/assets/client-tripura.png', 'Tripura Skin and Cosmetology Clinic'), name: 'Tripura Skin and Cosmetology Clinic' },
  ];

  const sHero = {
    __component: 'sections.hero', eyebrow: 'Dermatology Skincare for Professionals',
    heading: 'Skincare your *clinic* can stand behind.',
    lede: 'DermaSynergy develops clinically-considered cleansers and serums for dermatology clinics and healthcare professionals — effective, well-made formulations your team can confidently recommend.',
    cta_label: 'Contact Us', cta_url: '/contact/', image: heroImg,
    meta: [{ label: 'Developed with', value: 'Dermatologists' }, { label: 'Made for', value: 'Clinics & practices' }, { label: 'Supply', value: 'Batch-consistent' }],
  };
  const sTrust = {
    __component: 'sections.trust-strip',
    items: [
      { icon: 'shield-check', text: 'Quality-controlled manufacturing' },
      { icon: 'rows', text: 'Batch-to-batch consistency' },
      { icon: 'clock', text: 'On-time delivery' },
      { icon: 'people-plus', text: 'Dedicated partner support' },
    ],
  };
  const aboutBodyHome = "We believe good skincare begins with good formulation. That's why we spend time choosing the right ingredients, reviewing every detail of the formulation, and making sure each product serves a clear purpose.\nInstead of chasing trends, we focus on products that people can use comfortably as part of their daily routine. Our formulations are developed with input from dermatologists and built around ingredients that have a proven role in skin health.";
  const sAboutHome = {
    __component: 'sections.about-split', tint: false, image: aboutImg, image_side: 'left',
    eyebrow: 'About DermaSynergy', heading: 'Skincare that begins with good formulation.',
    lede: 'DermaSynergy was started with a simple goal: to create skincare products that are effective, well-made, and easy to use.',
    body: aboutBodyHome,
  };
  const sWhatWeDo = {
    __component: 'sections.feature-row', tint: true, eyebrow: 'What We Do',
    heading: 'Skincare developed for dermatology clinics and professionals.',
    lede: 'From cleansers and serums to future skincare solutions, every product is carefully planned, formulated, and evaluated before it reaches the market — built to support healthy skin while staying gentle enough for regular use.',
    items: [
      { title: 'Planned & formulated', text: 'Every product is carefully planned and formulated before it reaches the market, with a clear clinical purpose behind each formula.' },
      { title: 'Evaluated with experts', text: 'We work closely with manufacturing partners and dermatologists to ensure our products meet high standards of quality and performance.' },
      { title: 'Gentle for regular use', text: 'Our focus is simple: create products that support healthy skin while remaining gentle enough for everyday use.' },
    ],
  };
  const sApproach = {
    __component: 'sections.rule-list', tint: false, eyebrow: 'Our Approach', heading: 'Every ingredient earns its place.',
    lede: "We don't believe in adding ingredients just to make a label look impressive. Every ingredient in our formulations is chosen for a reason.",
    link_label: 'See it in our products', link_url: '#products',
    items: [
      { icon: 'target', title: 'Purpose over labels', text: 'We focus on finding the right balance between effectiveness, skin comfort, and long-term use — not on chasing an impressive ingredient list.' },
      { icon: 'search', title: 'Careful review', text: 'Before a product becomes part of the range, it goes through careful review and formulation refinement to confirm it does what it should.' },
      { icon: 'shield-check', title: 'Quality checks', text: 'Quality checks at every stage help us deliver products that are practical, reliable, and suitable for everyday skincare.' },
    ],
  };
  const sProcess = {
    __component: 'sections.process-steps', tint: true, eyebrow: 'Our Process',
    heading: 'From understanding the need to continuous improvement.',
    lede: 'A consistent, repeatable process behind every formulation — so partners know exactly what stands behind the products on their shelves.',
    items: [
      { title: 'Understanding the Need', text: 'We look at common skin concerns, listen to feedback from dermatologists, and identify where better solutions are needed.' },
      { title: 'Building the Formula', text: 'Once the goal is clear, we carefully select ingredients that work well together — effective, gentle, and suitable for regular use.' },
      { title: 'Refining Every Detail', text: 'Texture, spreadability, skin feel, and ease of use all matter. We review and refine each formula until it meets our expectations.' },
      { title: 'Manufacturing with Care', text: 'Products are manufactured in facilities that follow established quality standards, with each batch undergoing quality checks.' },
      { title: 'Continuous Improvement', text: 'We gather feedback and learn from real-world use to improve existing products and develop new ones.' },
    ],
  };
  const sWhy = {
    __component: 'sections.why-choose', tint: false, eyebrow: 'Why Choose DermaSynergy', heading: 'Ten reasons clinics partner with us.',
    lede: 'Everything a dermatology practice needs from a skincare supplier — from the formulation bench to the loading dock.',
    items: [
      { icon: 'shield-check', title: 'Dermatologist-focused formulations' },
      { icon: 'flask', title: 'Carefully selected ingredients' },
      { icon: 'check-circle', title: 'Quality-controlled manufacturing' },
      { icon: 'rows', title: 'Consistent batch-to-batch quality' },
      { icon: 'cube', title: 'Competitive pricing' },
      { icon: 'truck', title: 'Reliable product availability' },
      { icon: 'clock', title: 'On-time delivery' },
      { icon: 'people', title: 'Dedicated partner support' },
      { icon: 'chart', title: 'Growing portfolio of solutions' },
      { icon: 'building', title: 'Built for dermatology practice needs' },
    ],
  };
  const sProductsGrid = {
    __component: 'sections.products-grid', tint: false, eyebrow: 'Our Products', heading: 'A focused range, formulated with intent.',
    lede: 'Two dermatologist-considered formulations built for everyday use — each one purposeful, gentle, and kind to the skin barrier.',
    source: 'featured',
  };
  const sClientele = {
    __component: 'sections.clientele', tint: true, eyebrow: 'Our Clientele', heading: 'Trusted by skin & hair specialists.',
    lede: 'Dermatology clinics, skin & hair institutes, and hospitals choose DermaSynergy formulations for their patients — and keep coming back.',
    logos,
  };
  const sCtaHome = {
    __component: 'sections.cta-band', eyebrow: 'Become a Partner', heading: 'Stock dermatology skincare your patients can trust.',
    body: 'Join the clinics and pharmacies partnering with DermaSynergy. Request product samples and our full catalogue — and get a dedicated point of contact for your practice.',
    cta_label: 'Contact Us', cta_url: '/contact/',
  };

  const privacyHtml = '<h2>Information we collect</h2><p>When you submit a trade enquiry through our contact form, we collect the details you choose to provide — typically your name, phone number, email address, company or clinic name, and the contents of your message.</p><h2>How we use your information</h2><p>We use the information you provide solely to respond to your enquiry, share product information and our catalogue, and assign a dedicated point of contact for your practice. We do not sell or rent your personal information.</p><h2>Your rights</h2><p>You may ask us to access, correct, or delete the personal information you have shared with us. Contact us at <a href="mailto:partners@dermasynergy.com">partners@dermasynergy.com</a>.</p>';
  const termsHtml = '<h2>Use of this website</h2><p>This website is provided for general information about DermaSynergy and its products, and to facilitate trade enquiries. You agree to use it lawfully.</p><h2>Product information</h2><p>Product descriptions, ingredient lists, and usage guidance are provided for information only and do not constitute medical advice. Products should be used as directed by a dermatologist or healthcare professional.</p><h2>Intellectual property</h2><p>The DermaSynergy name, logo, product names, text, images, and design are the property of DermaSynergy and are protected by applicable law.</p>';

  // ---- Pages ----
  await createDoc('api::page.page', {
    title: 'Home', slug: 'home', template: 'default', is_homepage: true,
    seo: { metaDescription: 'DermaSynergy develops clinically-considered cleansers and serums for dermatology clinics and healthcare professionals — effective, well-made formulations backed by reliable supply.' },
    sections: [sHero, sTrust, sAboutHome, sWhatWeDo, sApproach, sProcess, sWhy, sProductsGrid, sClientele, sCtaHome],
  }, true);

  await createDoc('api::page.page', {
    title: 'About Us', slug: 'about', template: 'default', is_homepage: false,
    seo: { metaDescription: 'DermaSynergy creates dermatologist-considered skincare for clinics — built on good formulation, careful ingredient selection and reliable, batch-consistent supply.' },
    sections: [
      { __component: 'sections.page-banner', eyebrow: 'Who We Are', heading: 'About Us', breadcrumb: 'About Us' },
      {
        __component: 'sections.about-split', tint: false, image: aboutImg, image_side: 'left',
        eyebrow: 'About DermaSynergy', heading: 'Skincare that begins with good formulation.',
        lede: 'DermaSynergy was started with a simple goal: to create skincare products that are effective, well-made, and easy to use.',
        body: "We believe good skincare begins with good formulation. That's why we spend time choosing the right ingredients, reviewing every detail of the formulation, and making sure each product serves a clear purpose.\nInstead of chasing trends, we focus on products that people can use comfortably as part of their daily skincare routine. Our formulations are developed with input from dermatologists and built around ingredients that have a proven role in skin health.\nAt DermaSynergy, we are committed to creating products that dermatologists can confidently recommend and patients can trust.",
      },
      {
        __component: 'sections.mission-vision', tint: true, eyebrow: 'What Drives Us', heading: 'The thinking behind every formulation.',
        lede: 'Two simple commitments guide how we develop, manufacture, and supply skincare for dermatology practices.',
        cards: [
          { icon: 'target', title: 'Our Mission', text: 'To make dependable, dermatologist-considered skincare the easy choice for clinics — formulations that genuinely perform, supplied consistently and without compromise.' },
          { icon: 'eye', title: 'Our Vision', text: 'A future where every skin practice can offer effective, barrier-friendly skincare they are proud to put their name to — backed by a partner they can rely on.' },
        ],
      },
      sWhy,
      sClientele,
    ],
  }, true);

  await createDoc('api::page.page', {
    title: 'Contact Us', slug: 'contact', template: 'default', is_homepage: false,
    seo: { metaDescription: 'Partner with DermaSynergy. Tell us about your clinic or pharmacy and our team will get back to you with a dedicated point of contact.' },
    sections: [
      { __component: 'sections.page-banner', eyebrow: 'Get in Touch', heading: 'Contact Us', breadcrumb: 'Contact Us' },
      {
        __component: 'sections.contact-block', eyebrow: "Let's Connect", heading: 'Partner with DermaSynergy.',
        lede: "Tell us about your clinic or pharmacy and what you're looking for. Our team will get back to you with the right information and a dedicated point of contact.",
        form_note: 'We typically reply within 1–2 business days.',
        points: [
          { icon: 'mail', label: 'Trade Enquiries', value: 'partners@dermasynergy.com' },
          { icon: 'phone', label: 'Phone', value: '+91 22 4567 8900' },
          { icon: 'pin', label: 'Office', value: 'Andheri East, Mumbai 400 069' },
        ],
      },
    ],
  }, true);

  await createDoc('api::page.page', {
    title: 'Privacy Policy', slug: 'privacy', template: 'default', is_homepage: false,
    seo: { metaDescription: 'How DermaSynergy collects, uses and protects the information you share with us.' },
    sections: [
      { __component: 'sections.page-banner', eyebrow: 'Legal', heading: 'Privacy Policy', breadcrumb: 'Privacy Policy' },
      { __component: 'sections.rich-text', lede: 'DermaSynergy respects your privacy. This policy explains what information we collect through this website, how we use it, and the choices you have.', html: privacyHtml },
    ],
  }, true);

  await createDoc('api::page.page', {
    title: 'Terms of Use', slug: 'terms', template: 'default', is_homepage: false,
    seo: { metaDescription: 'The terms that govern your use of the DermaSynergy website.' },
    sections: [
      { __component: 'sections.page-banner', eyebrow: 'Legal', heading: 'Terms of Use', breadcrumb: 'Terms of Use' },
      { __component: 'sections.rich-text', lede: 'By accessing and using the DermaSynergy website, you agree to the terms set out below.', html: termsHtml },
    ],
  }, true);
  strapi.log.info('[seed] ✓ Pages — seeding complete.');
}

module.exports = seed;
