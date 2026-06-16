import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Sections from "../components/Sections";

const PageTemplate = ({ data }) => <Layout><Sections sections={data.strapiPage.sections} /></Layout>;

export default PageTemplate;

export const Head = ({ data, location }) => {
  const seo = data.strapiPage.seo || {};
  return (
    <Seo
      title={data.strapiPage.title}
      description={seo.metaDescription}
      image={seo.ogImage && seo.ogImage.localFile && seo.ogImage.localFile.publicURL}
      pathname={location && location.pathname}
    />
  );
};

export const query = graphql`
  query ($slug: String!) {
    strapiPage(slug: { eq: $slug }) {
      title
      seo { metaDescription ogImage { localFile { publicURL } } }
      sections {
        __typename
        ... on STRAPI__COMPONENT_SECTIONS_HERO {
          eyebrow heading lede cta_label cta_url
          meta { label value }
          image { alternativeText localFile { publicURL } }
        }
        ... on STRAPI__COMPONENT_SECTIONS_TRUST_STRIP { items { icon text } }
        ... on STRAPI__COMPONENT_SECTIONS_ABOUT_SPLIT {
          tint image_side eyebrow heading lede body
          image { alternativeText localFile { publicURL } }
        }
        ... on STRAPI__COMPONENT_SECTIONS_FEATURE_ROW { tint eyebrow heading lede items { title text } }
        ... on STRAPI__COMPONENT_SECTIONS_RULE_LIST { tint eyebrow heading lede link_label link_url items { icon title text } }
        ... on STRAPI__COMPONENT_SECTIONS_PROCESS_STEPS { tint eyebrow heading lede items { title text } }
        ... on STRAPI__COMPONENT_SECTIONS_WHY_CHOOSE { tint eyebrow heading lede items { icon title } }
        ... on STRAPI__COMPONENT_SECTIONS_PRODUCTS_GRID { tint eyebrow heading lede source }
        ... on STRAPI__COMPONENT_SECTIONS_CLIENTELE {
          tint eyebrow heading lede
          logos { name image { alternativeText localFile { publicURL } } }
        }
        ... on STRAPI__COMPONENT_SECTIONS_CTA_BAND { eyebrow heading body cta_label cta_url }
        ... on STRAPI__COMPONENT_SECTIONS_MISSION_VISION { tint eyebrow heading lede cards { icon title text } }
        ... on STRAPI__COMPONENT_SECTIONS_PAGE_BANNER { eyebrow heading breadcrumb }
        ... on STRAPI__COMPONENT_SECTIONS_RICH_TEXT { lede html { data { html } } }
        ... on STRAPI__COMPONENT_SECTIONS_CONTACT_BLOCK { eyebrow heading lede form_note points { icon label value } }
      }
    }
  }
`;
