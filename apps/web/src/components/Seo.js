import React from "react";
import { useStaticQuery, graphql } from "gatsby";

/**
 * SEO / document head, rendered via Gatsby's Head API. Values come from Strapi
 * (per-page/product seo component) with siteMetadata fallbacks.
 */
const Seo = ({ title, description, image, keywords, pathname }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site { siteMetadata { title description siteUrl } }
    }
  `);

  const { title: siteName, description: defaultDesc, siteUrl } = site.siteMetadata;
  const fullTitle = title ? `${title} — ${siteName}` : siteName;
  const desc = description || defaultDesc;
  const canonical = `${siteUrl}${pathname || "/"}`;
  const ogImage = image ? (image.startsWith("http") ? image : `${siteUrl}${image}`) : null;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </>
  );
};

export default Seo;
