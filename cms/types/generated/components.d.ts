import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsAboutSplit extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_split';
  info: {
    displayName: 'About (Image + Text)';
    icon: 'user';
  };
  attributes: {
    body: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    image_side: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    lede: Schema.Attribute.Text;
    tint: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SectionsClientele extends Struct.ComponentSchema {
  collectionName: 'components_sections_clientele';
  info: {
    displayName: 'Clientele Logos';
    icon: 'picture';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    lede: Schema.Attribute.Text;
    logos: Schema.Attribute.Component<'shared.logo', true>;
    tint: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SectionsContactBlock extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_block';
  info: {
    displayName: 'Contact Block';
    icon: 'envelop';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    form_note: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    lede: Schema.Attribute.Text;
    points: Schema.Attribute.Component<'shared.contact-point', true>;
  };
}

export interface SectionsCtaBand extends Struct.ComponentSchema {
  collectionName: 'components_sections_cta_band';
  info: {
    displayName: 'CTA Band';
    icon: 'rocket';
  };
  attributes: {
    body: Schema.Attribute.Text;
    cta_label: Schema.Attribute.String;
    cta_url: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsFeatureRow extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_row';
  info: {
    displayName: 'Feature Row (numbered)';
    icon: 'apps';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'shared.title-text', true>;
    lede: Schema.Attribute.Text;
    tint: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero';
  info: {
    displayName: 'Hero / Banner';
    icon: 'bulb';
  };
  attributes: {
    cta_label: Schema.Attribute.String;
    cta_url: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    lede: Schema.Attribute.Text;
    meta: Schema.Attribute.Component<'shared.stat', true>;
  };
}

export interface SectionsMissionVision extends Struct.ComponentSchema {
  collectionName: 'components_sections_mission_vision';
  info: {
    displayName: 'Mission & Vision';
    icon: 'eye';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.icon-title-text', true>;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    lede: Schema.Attribute.Text;
    tint: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SectionsPageBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_page_banner';
  info: {
    displayName: 'Page Banner';
    icon: 'layout';
  };
  attributes: {
    breadcrumb: Schema.Attribute.String;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsProcessSteps extends Struct.ComponentSchema {
  collectionName: 'components_sections_process_steps';
  info: {
    displayName: 'Process Steps';
    icon: 'chartCircle';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'shared.title-text', true>;
    lede: Schema.Attribute.Text;
    tint: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SectionsProductsGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_products_grid';
  info: {
    displayName: 'Products Grid';
    icon: 'cube';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    lede: Schema.Attribute.Text;
    source: Schema.Attribute.Enumeration<['featured', 'all']> &
      Schema.Attribute.DefaultTo<'featured'>;
    tint: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SectionsRichText extends Struct.ComponentSchema {
  collectionName: 'components_sections_rich_text';
  info: {
    displayName: 'Rich Text / Legal';
    icon: 'file';
  };
  attributes: {
    html: Schema.Attribute.RichText;
    lede: Schema.Attribute.Text;
  };
}

export interface SectionsRuleList extends Struct.ComponentSchema {
  collectionName: 'components_sections_rule_list';
  info: {
    displayName: 'Approach / Rule List';
    icon: 'search';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'shared.icon-title-text', true>;
    lede: Schema.Attribute.Text;
    link_label: Schema.Attribute.String;
    link_url: Schema.Attribute.String;
    tint: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SectionsTrustStrip extends Struct.ComponentSchema {
  collectionName: 'components_sections_trust_strip';
  info: {
    displayName: 'Trust Strip';
    icon: 'shield';
  };
  attributes: {
    items: Schema.Attribute.Component<'shared.icon-text', true>;
  };
}

export interface SectionsWhyChoose extends Struct.ComponentSchema {
  collectionName: 'components_sections_why_choose';
  info: {
    displayName: 'Why Choose (icon grid)';
    icon: 'apps';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'shared.icon-title', true>;
    lede: Schema.Attribute.Text;
    tint: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SharedContactPoint extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_point';
  info: {
    displayName: 'Contact point';
    icon: 'envelop';
  };
  attributes: {
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedIconText extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_text';
  info: {
    displayName: 'Icon + Text';
    icon: 'bulletList';
  };
  attributes: {
    icon: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface SharedIconTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_title';
  info: {
    displayName: 'Icon + Title';
    icon: 'bulletList';
  };
  attributes: {
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedIconTitleText extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_title_text';
  info: {
    displayName: 'Icon + Title + Text';
    icon: 'bulletList';
  };
  attributes: {
    icon: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedListItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_list_item';
  info: {
    displayName: 'List item';
    icon: 'bulletList';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface SharedLogo extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo';
  info: {
    displayName: 'Logo';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
  };
}

export interface SharedMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_menu_item';
  info: {
    displayName: 'Menu item';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seo';
  info: {
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    ogImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedStat extends Struct.ComponentSchema {
  collectionName: 'components_shared_stat';
  info: {
    displayName: 'Stat (label/value)';
    icon: 'bulletList';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedTitleText extends Struct.ComponentSchema {
  collectionName: 'components_shared_title_text';
  info: {
    displayName: 'Title + Text';
    icon: 'bulletList';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.about-split': SectionsAboutSplit;
      'sections.clientele': SectionsClientele;
      'sections.contact-block': SectionsContactBlock;
      'sections.cta-band': SectionsCtaBand;
      'sections.feature-row': SectionsFeatureRow;
      'sections.hero': SectionsHero;
      'sections.mission-vision': SectionsMissionVision;
      'sections.page-banner': SectionsPageBanner;
      'sections.process-steps': SectionsProcessSteps;
      'sections.products-grid': SectionsProductsGrid;
      'sections.rich-text': SectionsRichText;
      'sections.rule-list': SectionsRuleList;
      'sections.trust-strip': SectionsTrustStrip;
      'sections.why-choose': SectionsWhyChoose;
      'shared.contact-point': SharedContactPoint;
      'shared.icon-text': SharedIconText;
      'shared.icon-title': SharedIconTitle;
      'shared.icon-title-text': SharedIconTitleText;
      'shared.list-item': SharedListItem;
      'shared.logo': SharedLogo;
      'shared.menu-item': SharedMenuItem;
      'shared.seo': SharedSeo;
      'shared.stat': SharedStat;
      'shared.title-text': SharedTitleText;
    }
  }
}
