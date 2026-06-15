import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const PrivacyPage = () => (
  <Layout>
    <section className="page-banner">
      <div className="wrap">
        <span className="eyebrow">Legal</span>
        <h1>Privacy Policy</h1>
        <div className="breadcrumb"><Link to="/">Home</Link> <span>/</span> Privacy</div>
      </div>
    </section>
    <section className="section-pad">
      <div className="wrap" style={{ maxWidth: "760px" }}>
        <div className="reveal stack-gap">
          <p className="lede">DermaSynergy respects your privacy. This page explains how we handle information shared with us through this website.</p>
          <p>When you contact us through our enquiry form, we collect the details you provide — such as your name, phone number, email, company, and message — solely to respond to your enquiry and to support your clinic or pharmacy.</p>
          <p>We do not sell or share your information with third parties for marketing purposes. Information is retained only as long as needed to serve you and to meet our business and legal obligations.</p>
          <p>For any questions about your data, contact us at <strong>partners@dermasynergy.com</strong>.</p>
          <p style={{ color: "var(--muted, #6a7680)" }}>This is a placeholder policy and will be replaced with our full legal text.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default PrivacyPage;

export const Head = () => <Seo title="Privacy Policy" />;
