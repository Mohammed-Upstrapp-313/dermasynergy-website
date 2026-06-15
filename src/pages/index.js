import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage = () => (
  <Layout>
    <span id="top"></span>

    {/* 1 · HERO / BANNER */}
    <section className="hero">
      <span className="hero-blob"></span>
      <div className="wrap hero-grid">
        <div className="hero-copy reveal">
          <span className="eyebrow">Dermatology Skincare for Professionals</span>
          <h1 className="display">
            Skincare your <span className="hl">clinic</span> can stand behind.
          </h1>
          <p className="lede">
            DermaSynergy develops clinically-considered cleansers and serums for
            dermatology clinics and healthcare professionals — effective,
            well-made formulations your team can confidently recommend.
          </p>
          <div className="hero-actions">
            <Link to="/contact/" className="btn btn-primary btn-lg">
              Contact Us <span className="ar">→</span>
            </Link>
          </div>
          <div className="hero-meta">
            <div className="m"><span className="k">Developed with</span><span className="v">Dermatologists</span></div>
            <div className="m"><span className="k">Made for</span><span className="v">Clinics &amp; practices</span></div>
            <div className="m"><span className="k">Supply</span><span className="v">Batch-consistent</span></div>
          </div>
        </div>
        <div className="hero-visual reveal">
          <div className="hero-panel">
            <span className="hero-ring r2"></span>
            <span className="hero-ring"></span>
            <img className="hero-prod" src="/assets/rebalanse-cleanser.png" alt="Rebalanse Exfoliating Cleanser" />
          </div>
        </div>
      </div>
    </section>

    {/* TRUST STRIP */}
    <div className="trust-strip">
      <div className="wrap">
        <div className="trust-item"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9 12l2 2 4-4" /></svg> Quality-controlled manufacturing</div>
        <div className="trust-item"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 7h16M4 12h16M4 17h10" /></svg> Batch-to-batch consistency</div>
        <div className="trust-item"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></svg> On-time delivery</div>
        <div className="trust-item"><svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M16 18a4 4 0 00-8 0M12 11a3 3 0 100-6 3 3 0 000 6zM3 18a4 4 0 015-3.5M21 18a4 4 0 00-5-3.5" /></svg> Dedicated partner support</div>
      </div>
    </div>

    {/* 2 · ABOUT */}
    <section className="section-pad" id="about">
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
          <div className="feature-cell">
            <div className="fnum">01</div>
            <h4 className="h4">Planned &amp; formulated</h4>
            <p>Every product is carefully planned and formulated before it reaches the market, with a clear clinical purpose behind each formula.</p>
          </div>
          <div className="feature-cell">
            <div className="fnum">02</div>
            <h4 className="h4">Evaluated with experts</h4>
            <p>We work closely with manufacturing partners and dermatologists to ensure our products meet high standards of quality and performance.</p>
          </div>
          <div className="feature-cell">
            <div className="fnum">03</div>
            <h4 className="h4">Gentle for regular use</h4>
            <p>Our focus is simple: create products that support healthy skin while remaining gentle enough for everyday use.</p>
          </div>
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
            <div className="item"><span className="ix"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /></svg></span><div><h4 className="h4">Purpose over labels</h4><p>We focus on finding the right balance between effectiveness, skin comfort, and long-term use — not on chasing an impressive ingredient list.</p></div></div>
            <div className="item"><span className="ix"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="11" cy="11" r="6" /><path d="M20 20l-4-4" /></svg></span><div><h4 className="h4">Careful review</h4><p>Before a product becomes part of the range, it goes through careful review and formulation refinement to confirm it does what it should.</p></div></div>
            <div className="item"><span className="ix"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9.5 12l1.7 1.7L15 10" /></svg></span><div><h4 className="h4">Quality checks</h4><p>Quality checks at every stage help us deliver products that are practical, reliable, and suitable for everyday skincare.</p></div></div>
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
          <div className="pstep"><span className="pdot"></span><div className="pnum">1</div><h4>Understanding the Need</h4><p>We look at common skin concerns, listen to feedback from dermatologists, and identify where better solutions are needed.</p></div>
          <div className="pstep"><span className="pdot"></span><div className="pnum">2</div><h4>Building the Formula</h4><p>Once the goal is clear, we carefully select ingredients that work well together — effective, gentle, and suitable for regular use.</p></div>
          <div className="pstep"><span className="pdot"></span><div className="pnum">3</div><h4>Refining Every Detail</h4><p>Texture, spreadability, skin feel, and ease of use all matter. We review and refine each formula until it meets our expectations.</p></div>
          <div className="pstep"><span className="pdot"></span><div className="pnum">4</div><h4>Manufacturing with Care</h4><p>Products are manufactured in facilities that follow established quality standards, with each batch undergoing quality checks.</p></div>
          <div className="pstep"><span className="pdot"></span><div className="pnum">5</div><h4>Continuous Improvement</h4><p>We gather feedback and learn from real-world use to improve existing products and develop new ones.</p></div>
        </div>
      </div>
    </section>

    {/* 6 · WHY CHOOSE */}
    <section className="section-pad why" id="why">
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
          <div className="pcard">
            <div className="pcard-media green"><img src="/assets/rebalanse-cleanser.png" alt="Rebalanse Exfoliating Cleanser" /></div>
            <div className="pcard-body">
              <div className="product-kicker">Exfoliating Cleanser · 100 ml</div>
              <h3 className="h3">Rebalanse™</h3>
              <p className="pcard-desc">A cream-based exfoliating cleanser that lifts excess oil, impurities, and dead skin cells — without stripping the skin's natural barrier.</p>
              <Link to="/products/rebalanse/" className="btn btn-primary">Know More <span className="ar">→</span></Link>
            </div>
          </div>
          <div className="pcard" id="revivon">
            <div className="pcard-media blue"><img src="/assets/revivon-serum.png" alt="Revivon Copper Peptide Serum" /></div>
            <div className="pcard-body">
              <div className="product-kicker">Copper Peptide Serum · 30 ml</div>
              <h3 className="h3">Revivon™</h3>
              <p className="pcard-desc">A lightweight copper-peptide serum that supports skin recovery and hydration while strengthening a healthier-looking moisture barrier.</p>
              <Link to="/products/revivon/" className="btn btn-primary">Know More <span className="ar">→</span></Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 8 · CLIENTELE */}
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

export const Head = () => (
  <Seo title="Dermatology Skincare, Built for Practices" />
);
