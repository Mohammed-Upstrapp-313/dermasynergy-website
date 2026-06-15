import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Img from "../components/Img";
import WhyChoose from "../components/WhyChoose";
import Clientele from "../components/Clientele";

const HERO_META = [
  { k: "Developed with", v: "Dermatologists" },
  { k: "Made for", v: "Clinics & practices" },
  { k: "Supply", v: "Batch-consistent" },
];

const TRUST = [
  { icon: <><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9 12l2 2 4-4" /></>, text: "Quality-controlled manufacturing" },
  { icon: <path d="M4 7h16M4 12h16M4 17h10" />, text: "Batch-to-batch consistency" },
  { icon: <><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></>, text: "On-time delivery" },
  { icon: <path d="M16 18a4 4 0 00-8 0M12 11a3 3 0 100-6 3 3 0 000 6zM3 18a4 4 0 015-3.5M21 18a4 4 0 00-5-3.5" />, text: "Dedicated partner support" },
];

const FEATURES = [
  { title: "Planned & formulated", text: "Every product is carefully planned and formulated before it reaches the market, with a clear clinical purpose behind each formula." },
  { title: "Evaluated with experts", text: "We work closely with manufacturing partners and dermatologists to ensure our products meet high standards of quality and performance." },
  { title: "Gentle for regular use", text: "Our focus is simple: create products that support healthy skin while remaining gentle enough for everyday use." },
];

const APPROACH = [
  { icon: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /></>, title: "Purpose over labels", text: "We focus on finding the right balance between effectiveness, skin comfort, and long-term use — not on chasing an impressive ingredient list." },
  { icon: <><circle cx="11" cy="11" r="6" /><path d="M20 20l-4-4" /></>, title: "Careful review", text: "Before a product becomes part of the range, it goes through careful review and formulation refinement to confirm it does what it should." },
  { icon: <><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9.5 12l1.7 1.7L15 10" /></>, title: "Quality checks", text: "Quality checks at every stage help us deliver products that are practical, reliable, and suitable for everyday skincare." },
];

const PROCESS = [
  { title: "Understanding the Need", text: "We look at common skin concerns, listen to feedback from dermatologists, and identify where better solutions are needed." },
  { title: "Building the Formula", text: "Once the goal is clear, we carefully select ingredients that work well together — effective, gentle, and suitable for regular use." },
  { title: "Refining Every Detail", text: "Texture, spreadability, skin feel, and ease of use all matter. We review and refine each formula until it meets our expectations." },
  { title: "Manufacturing with Care", text: "Products are manufactured in facilities that follow established quality standards, with each batch undergoing quality checks." },
  { title: "Continuous Improvement", text: "We gather feedback and learn from real-world use to improve existing products and develop new ones." },
];

const PRODUCTS = [
  { name: "rebalanse-cleanser.png", alt: "Rebalanse Exfoliating Cleanser", accent: "green", kicker: "Exfoliating Cleanser · 100 ml", title: "Rebalanse™", desc: "A cream-based exfoliating cleanser that lifts excess oil, impurities, and dead skin cells — without stripping the skin's natural barrier.", to: "/products/rebalanse/" },
  { name: "revivon-serum.png", alt: "Revivon Copper Peptide Serum", accent: "blue", id: "revivon", kicker: "Copper Peptide Serum · 30 ml", title: "Revivon™", desc: "A lightweight copper-peptide serum that supports skin recovery and hydration while strengthening a healthier-looking moisture barrier.", to: "/products/revivon/" },
];

const IndexPage = () => (
  <Layout>
    <span id="top"></span>

    {/* 1 · HERO */}
    <section className="hero">
      <span className="hero-blob"></span>
      <div className="wrap hero-grid">
        <div className="hero-copy reveal">
          <span className="eyebrow">Dermatology Skincare for Professionals</span>
          <h1 className="display">Skincare your <span className="hl">clinic</span> can stand behind.</h1>
          <p className="lede">DermaSynergy develops clinically-considered cleansers and serums for dermatology clinics and healthcare professionals — effective, well-made formulations your team can confidently recommend.</p>
          <div className="hero-actions">
            <Link to="/contact/" className="btn btn-primary btn-lg">Contact Us <span className="ar">→</span></Link>
          </div>
          <div className="hero-meta">
            {HERO_META.map((m) => (
              <div className="m" key={m.k}><span className="k">{m.k}</span><span className="v">{m.v}</span></div>
            ))}
          </div>
        </div>
        <div className="hero-visual reveal">
          <div className="hero-panel">
            <span className="hero-ring r2"></span>
            <span className="hero-ring"></span>
            <Img name="rebalanse-cleanser.png" className="hero-prod" objectFit="contain" loading="eager" alt="Rebalanse Exfoliating Cleanser" />
          </div>
        </div>
      </div>
    </section>

    {/* TRUST STRIP */}
    <div className="trust-strip">
      <div className="wrap">
        {TRUST.map((t) => (
          <div className="trust-item" key={t.text}>
            <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">{t.icon}</svg> {t.text}
          </div>
        ))}
      </div>
    </div>

    {/* 2 · ABOUT */}
    <section className="section-pad" id="about">
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
          <p>Instead of chasing trends, we focus on products that people can use comfortably as part of their daily routine. Our formulations are developed with input from dermatologists and built around ingredients that have a proven role in skin health.</p>
        </div>
      </div>
    </section>

    {/* 3 · WHAT WE DO */}
    <section className="section-pad tint" id="whatwedo">
      <div className="wrap">
        <div className="split narrow-r" style={{ alignItems: "flex-end" }}>
          <div className="section-head reveal">
            <span className="eyebrow">What We Do</span>
            <h2 className="h2">Skincare developed for dermatology clinics and professionals.</h2>
          </div>
          <p className="lede reveal">From cleansers and serums to future skincare solutions, every product is carefully planned, formulated, and evaluated before it reaches the market — built to support healthy skin while staying gentle enough for regular use.</p>
        </div>
        <div className="feature-row reveal">
          {FEATURES.map((f, i) => (
            <div className="feature-cell" key={f.title}>
              <div className="fnum">{String(i + 1).padStart(2, "0")}</div>
              <h4 className="h4">{f.title}</h4>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 4 · OUR APPROACH */}
    <section className="section-pad" id="approach">
      <div className="wrap split narrow-r" style={{ alignItems: "start" }}>
        <div className="reveal stack-gap" style={{ position: "sticky", top: "110px" }}>
          <span className="eyebrow">Our Approach</span>
          <h2 className="h2">Every ingredient earns its place.</h2>
          <p className="lede">We don't believe in adding ingredients just to make a label look impressive. Every ingredient in our formulations is chosen for a reason.</p>
          <a href="#products" className="link-arrow">See it in our products <span className="ar">→</span></a>
        </div>
        <div className="reveal">
          <div className="rulelist">
            {APPROACH.map((r) => (
              <div className="item" key={r.title}>
                <span className="ix"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">{r.icon}</svg></span>
                <div><h4 className="h4">{r.title}</h4><p>{r.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* 5 · OUR PROCESS */}
    <section className="section-pad tint" id="process">
      <div className="wrap">
        <div className="section-head reveal" style={{ maxWidth: "none", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "30px", flexWrap: "wrap" }}>
          <div>
            <span className="eyebrow" style={{ marginBottom: "18px" }}>Our Process</span>
            <h2 className="h2" style={{ maxWidth: "18ch" }}>From understanding the need to continuous improvement.</h2>
          </div>
          <p className="lede" style={{ maxWidth: "42ch" }}>A consistent, repeatable process behind every formulation — so partners know exactly what stands behind the products on their shelves.</p>
        </div>
        <div className="process-grid reveal">
          {PROCESS.map((p, i) => (
            <div className="pstep" key={p.title}><span className="pdot"></span><div className="pnum">{i + 1}</div><h4>{p.title}</h4><p>{p.text}</p></div>
          ))}
        </div>
      </div>
    </section>

    {/* 6 · WHY CHOOSE (shared component) */}
    <WhyChoose />

    {/* 7 · PRODUCTS */}
    <section className="section-pad product" id="products">
      <div className="wrap">
        <div className="products-head reveal">
          <div>
            <span className="eyebrow" style={{ marginBottom: "18px" }}>Our Products</span>
            <h2 className="h2">A focused range, formulated with intent.</h2>
          </div>
          <p className="lede" style={{ maxWidth: "42ch" }}>Two dermatologist-considered formulations built for everyday use — each one purposeful, gentle, and kind to the skin barrier.</p>
        </div>
        <div className="product-cards reveal">
          {PRODUCTS.map((p) => (
            <div className="pcard" id={p.id} key={p.title}>
              <div className={`pcard-media ${p.accent}`}><Img name={p.name} className="pcard-prod" objectFit="contain" alt={p.alt} /></div>
              <div className="pcard-body">
                <div className="product-kicker">{p.kicker}</div>
                <h3 className="h3">{p.title}</h3>
                <p className="pcard-desc">{p.desc}</p>
                <Link to={p.to} className="btn btn-primary">Know More <span className="ar">→</span></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 8 · CLIENTELE (shared component) */}
    <Clientele />

    {/* CTA BANNER */}
    <section className="cta-band" id="cta">
      <span className="grad-edge"></span>
      <div className="wrap cta-inner">
        <div className="reveal">
          <span className="eyebrow">Become a Partner</span>
          <h2 className="h2" style={{ marginTop: "18px" }}>Stock dermatology skincare your patients can trust.</h2>
          <p>Join the clinics and pharmacies partnering with DermaSynergy. Request product samples and our full catalogue — and get a dedicated point of contact for your practice.</p>
        </div>
        <div className="cta-actions reveal">
          <Link to="/contact/" className="btn btn-primary">Contact Us <span className="ar">→</span></Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;

export const Head = () => <Seo title="Dermatology Skincare, Built for Practices" />;
