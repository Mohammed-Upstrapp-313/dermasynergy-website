import React from "react";
import { useStaticQuery, graphql } from "gatsby";

/**
 * SEO / document head. Rendered via Gatsby's Head API:
 *   export const Head = () => <Seo title="..." description="..." />
 * Pulls site name + default description from gatsby-config siteMetadata.
 */
const Seo = ({ title, description }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const siteName = site.siteMetadata.title;
  const fullTitle = title ? `${title} — ${siteName}` : siteName;
  const desc = description || site.siteMetadata.description;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
};

export default Seo;
