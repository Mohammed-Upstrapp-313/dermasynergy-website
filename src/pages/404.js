import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const NotFoundPage = () => (
  <Layout>
    <section className="page-banner">
      <div className="wrap">
        <span className="eyebrow">Error 404</span>
        <h1>Page not found</h1>
        <div className="breadcrumb"><Link to="/">Home</Link> <span>/</span> 404</div>
      </div>
    </section>
    <section className="section-pad">
      <div className="wrap" style={{ textAlign: "center" }}>
        <p className="lede">The page you're looking for doesn't exist or may have moved.</p>
        <div style={{ marginTop: "24px" }}>
          <Link to="/" className="btn btn-primary btn-lg">Back to Home <span className="ar">→</span></Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;

export const Head = () => <Seo title="Page Not Found" />;
