import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Img from "../components/Img";
import WhyChoose from "../components/WhyChoose";
import Clientele from "../components/Clientele";

const MV = [
  { icon: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /></>, title: "Our Mission", text: "To make dependable, dermatologist-considered skincare the easy choice for clinics — formulations that genuinely perform, supplied consistently and without compromise." },
  { icon: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></>, title: "Our Vision", text: "A future where every skin practice can offer effective, barrier-friendly skincare they are proud to put their name to — backed by a partner they can rely on." },
];

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

    {/* ABOUT CONTENT */}
    <section className="section-pad">
      <div className="wrap split narrow-l">
        <div className="reveal">
          <div className="media frame-portrait">
            <Img name="about-lab.png" alt="DermaSynergy formulation lab" fill objectFit="cover" />
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

    {/* MISSION & VISION */}
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
          {MV.map((c) => (
            <div className="mv-card" key={c.title}>
              <div className="mv-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">{c.icon}</svg></div>
              <h3 className="h3">{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* WHY CHOOSE + CLIENTELE (shared components) */}
    <WhyChoose />
    <Clientele />
  </Layout>
);

export default AboutPage;

export const Head = () => <Seo title="About Us" />;
