import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const AboutPage = () => (
  <Layout>
    {/* BANNER */}
    <section className="page-banner">
      <div className="wrap">
        <span className="eyebrow">Who We Are</span>
        <h1>About Us</h1>
        <div className="breadcrumb"><Link to="/">Home</Link> <span>/</span> About Us</div>
      </div>
    </section>

    {/* SECTION 1 · ABOUT CONTENT */}
    <section className="section-pad">
      <div className="wrap split narrow-l">
        <div className="reveal">
          <div className="media frame-portrait">
            <img src="/assets/about-lab.png" alt="DermaSynergy formulation lab" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
        <div className="reveal stack-gap">
          <span className="eyebrow">About DermaSynergy</span>
          <h2 className="h2">Skincare that begins with good formulation.</h2>
          <p className="lede">DermaSynergy was started with a simple goal: to create skincare products that are effective, well-made, and easy to use.</p>
          <p>We believe good skincare begins with good formulation. That's why we spend time choosing the right ingredients, reviewing every detail of the formulation, and making sure each product serves a clear purpose.</p>
          <p>Instead of chasing trends, we focus on products that people can use comfortably as part of their daily skincare routine. Our formulations are developed with input from dermatologists and built around ingredients that have a proven role in skin health.</p>
          <p>At DermaSynergy, we are committed to creating products that dermatologists can confidently recommend and patients can trust.</p>
        </div>
      </div>
    </section>

    {/* SECTION 2 · MISSION & VISION */}
    <section className="section-pad tint">
      <div className="wrap">
        <div className="section-head reveal" style={{ maxWidth: "none", display: "grid", gridTemplateColumns: "1.25fr .75fr", alignItems: "end", gap: "40px" }}>
          <div>
            <span className="eyebrow" style={{ marginBottom: "18px" }}>What Drives Us</span>
            <h2 className="h2" style={{ maxWidth: "18ch" }}>The thinking behind every formulation.</h2>
          </div>
          <p className="lede" style={{ maxWidth: "42ch" }}>Two simple commitments guide how we develop, manufacture, and supply skincare for dermatology practices.</p>
        </div>
        <div className="mv-grid reveal">
          <div className="mv-card">
            <div className="mv-ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /></svg>
            </div>
            <h3 className="h3">Our Mission</h3>
            <p>To make dependable, dermatologist-considered skincare the easy choice for clinics — formulations that genuinely perform, supplied consistently and without compromise.</p>
          </div>
          <div className="mv-card">
            <div className="mv-ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>
            </div>
            <h3 className="h3">Our Vision</h3>
            <p>A future where every skin practice can offer effective, barrier-friendly skincare they are proud to put their name to — backed by a partner they can rely on.</p>
          </div>
        </div>
      </div>
    </section>

    {/* WHY CHOOSE */}
    <section className="section-pad why">
      <div className="wrap">
        <div className="section-head reveal" style={{ maxWidth: "none", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "30px", flexWrap: "wrap" }}>
          <div>
            <span className="eyebrow" style={{ marginBottom: "18px" }}>Why Choose DermaSynergy</span>
            <h2 className="h2" style={{ maxWidth: "16ch" }}>Ten reasons clinics partner with us.</h2>
          </div>
          <p className="lede" style={{ maxWidth: "42ch" }}>Everything a dermatology practice needs from a skincare supplier — from the formulation bench to the loading dock.</p>
        </div>
        <div className="why-grid reveal">
          <div className="why-cell"><svg className="wic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9.5 12l1.7 1.7L15 10" /></svg><h4>Dermatologist-focused formulations</h4></div>
          <div className="why-cell"><svg className="wic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 3h6M10 3v5l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3" /></svg><h4>Carefully selected ingredients</h4></div>
          <div className="why-cell"><svg className="wic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="8" /><path d="M9 12l2 2 4-4" /></svg><h4>Quality-controlled manufacturing</h4></div>
          <div className="why-cell"><svg className="wic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 7h16M4 12h16M4 17h16" /></svg><h4>Consistent batch-to-batch quality</h4></div>
          <div className="why-cell"><svg className="wic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M5 9l7-4 7 4M5 9v6l7 4 7-4V9" /></svg><h4>Competitive pricing</h4></div>
          <div className="why-cell"><svg className="wic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="8" width="13" height="10" rx="1" /><path d="M16 11h3l2 3v3h-5" /><circle cx="7" cy="18" r="1.6" /><circle cx="17" cy="18" r="1.6" /></svg><h4>Reliable product availability</h4></div>
          <div className="why-cell"><svg className="wic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg><h4>On-time delivery</h4></div>
          <div className="why-cell"><svg className="wic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 18a4 4 0 00-8 0M12 11a3 3 0 100-6 3 3 0 000 6z" /></svg><h4>Dedicated partner support</h4></div>
          <div className="why-cell"><svg className="wic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 17l5-5 4 3 8-8M21 7v5M21 7h-5" /></svg><h4>Growing portfolio of solutions</h4></div>
          <div className="why-cell"><svg className="wic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 21V8l8-5 8 5v13M9 21v-6h6v6" /></svg><h4>Built for dermatology practice needs</h4></div>
        </div>
      </div>
    </section>

    {/* CLIENTELE */}
    <section className="section-pad tint">
      <div className="wrap">
        <div className="section-head reveal" style={{ maxWidth: "none", display: "grid", gridTemplateColumns: "1.25fr .75fr", alignItems: "end", gap: "40px" }}>
          <div>
            <span className="eyebrow" style={{ marginBottom: "18px" }}>Our Clientele</span>
            <h2 className="h2" style={{ maxWidth: "18ch" }}>Trusted by skin &amp; hair specialists.</h2>
          </div>
          <p className="lede" style={{ maxWidth: "42ch" }}>Dermatology clinics, skin &amp; hair institutes, and hospitals choose DermaSynergy formulations for their patients — and keep coming back.</p>
        </div>
        <div className="client-logos reveal">
          <div className="clogo"><img src="/assets/client-sn-hospital.png" alt="SN Hospital" /></div>
          <div className="clogo"><img src="/assets/client-dr-netis.png" alt="Dr. Neti's Skin Hair & Nail Clinic" /></div>
          <div className="clogo"><img src="/assets/client-eeshritha.png" alt="Eeshritha Skin & Hair Institute" /></div>
          <div className="clogo"><img src="/assets/client-tripura.png" alt="Tripura Skin and Cosmetology Clinic" /></div>
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;

export const Head = () => <Seo title="About Us" />;
