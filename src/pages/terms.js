import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const TermsPage = () => (
  <Layout>
    <section className="page-banner">
      <div className="wrap">
        <span className="eyebrow">Legal</span>
        <h1>Terms of Use</h1>
        <div className="breadcrumb"><Link to="/">Home</Link> <span>/</span> Terms</div>
      </div>
    </section>
    <section className="section-pad">
      <div className="wrap" style={{ maxWidth: "760px" }}>
        <div className="reveal stack-gap">
          <p className="lede">By using the DermaSynergy website, you agree to the following terms.</p>
          <p>The content on this site is provided for general information about our products and is intended for clinics, pharmacies, and healthcare professionals. Product information is not a substitute for professional medical advice.</p>
          <p>All trademarks, product names, and imagery are the property of DermaSynergy and may not be reproduced without permission.</p>
          <p>For trade enquiries and partnership terms, contact us at <strong>partners@dermasynergy.com</strong>.</p>
          <p style={{ color: "var(--muted, #6a7680)" }}>This is a placeholder document and will be replaced with our full legal text.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default TermsPage;

export const Head = () => <Seo title="Terms of Use" />;
