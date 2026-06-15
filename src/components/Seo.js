import React from "react";

/**
 * SEO / document head. Rendered via Gatsby's Head API:
 *   export const Head = () => <Seo title="..." description="..." />
 */
const Seo = ({ title, description }) => {
  const siteName = "DermaSynergy";
  const fullTitle = title ? `${title} — ${siteName}` : siteName;
  const desc =
    description ||
    "Dermatology-grade skincare developed for clinics and healthcare professionals — effective, well-made formulations backed by reliable supply.";

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta charSet="utf-8" />
      <link rel="icon" type="image/png" href="/favicon.png" />
    </>
  );
};

export default Seo;
