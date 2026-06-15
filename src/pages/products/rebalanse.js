import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import Gallery from "../../components/Gallery";

const images = [
  { src: "/assets/rebalanse-lifestyle.png", label: "View 1" },
  { src: "/assets/rebalanse-texture.png", label: "View 2" },
  { src: "/assets/rebalanse-box.png", label: "View 3" },
  { src: "/assets/rebalanse-model.png", label: "View 4" },
];

const RebalansePage = () => (
  <Layout>
    {/* PRODUCT HERO */}
    <section className="pd-hero">
      <div className="wrap">
        <div className="breadcrumb"><Link to="/">Home</Link> <span>/</span> <Link to="/#products">Products</Link> <span>/</span> Rebalanse</div>
        <div className="pd-grid">
          <Gallery images={images} alt="Rebalanse Exfoliating Cleanser" />
          {/* info */}
          <div className="pd-info">
            <div className="pd-cat">Cleanser · 100 ml</div>
            <h1>Rebalanse™</h1>
            <div className="pd-sub">Exfoliating Cleanser</div>
            <p className="pd-desc">A cream-based exfoliating cleanser designed to cleanse the skin while helping remove excess oil, impurities, and dead skin cells — without leaving the skin feeling stripped or dry. Formulated with a balanced blend of exfoliating ingredients and skin-conditioning agents, Rebalanse supports smoother, clearer-looking skin while helping maintain the skin's natural barrier.</p>
            <div className="pd-tags">
              <span className="pd-tag">Cream-based</span>
              <span className="pd-tag">pH balanced</span>
              <span className="pd-tag">AHA · BHA Complex</span>
              <span className="pd-tag">Daily use</span>
            </div>
            <div className="pd-specs">
              <div className="sp"><span className="k">Active complex</span><span className="v">Glycolic + Salicylic Acid</span></div>
              <div className="sp"><span className="k">Skin types</span><span className="v">Oily · Combination · Acne-prone</span></div>
              <div className="sp"><span className="k">Format</span><span className="v">100 ml tube</span></div>
            </div>
            <div className="pd-actions">
              <Link to="/contact/" className="btn btn-primary btn-lg">Enquire to Stock <span className="ar">→</span></Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* KEY BENEFITS */}
    <section className="section-pad tint">
      <div className="wrap">
        <div className="section-head reveal" style={{ maxWidth: "none", display: "grid", gridTemplateColumns: "1.25fr .75fr", alignItems: "end", gap: "40px" }}>
          <div>
            <span className="eyebrow" style={{ marginBottom: "18px" }}>Key Benefits</span>
            <h2 className="h2" style={{ maxWidth: "18ch" }}>What Rebalanse does for the skin.</h2>
          </div>
          <p className="lede" style={{ maxWidth: "42ch" }}>A focused set of benefits from one well-balanced, barrier-friendly formulation.</p>
        </div>
        <div className="benefits-icons reveal">
          <div className="bcard">
            <div className="bic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z" /></svg></div>
            <p>Helps remove excess oil and impurities</p>
          </div>
          <div className="bcard">
            <div className="bic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.4 2.4M15.6 15.6 18 18M18 6l-2.4 2.4M8.4 15.6 6 18" /></svg></div>
            <p>Gently exfoliates dead skin cells</p>
          </div>
          <div className="bcard">
            <div className="bic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M8 14c1.2 1.6 6.8 1.6 8 0" /><circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" /><circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" /></svg></div>
            <p>Supports smoother, clearer-looking skin</p>
          </div>
          <div className="bcard">
            <div className="bic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="2.4" /></svg></div>
            <p>Helps keep pores clean</p>
          </div>
          <div className="bcard">
            <div className="bic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="8" y="3" width="8" height="18" rx="3" /><path d="M8 8h8" /></svg></div>
            <p>Cream-based formula for skin comfort</p>
          </div>
          <div className="bcard">
            <div className="bic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3v18M5 8h14M5 8l-2 5a3 3 0 006 0zM19 8l-2 5a3 3 0 006 0z" /></svg></div>
            <p>pH balanced</p>
          </div>
          <div className="bcard">
            <div className="bic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" /></svg></div>
            <p>Suitable for daily use as directed</p>
          </div>
          <div className="bcard">
            <div className="bic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="8" r="3.2" /><path d="M5 20a7 7 0 0114 0z" /></svg></div>
            <p>Designed for oily, combination &amp; acne-prone skin</p>
          </div>
        </div>
      </div>
    </section>

    {/* HOW TO USE */}
    <section className="section-pad">
      <div className="wrap howto-grid">
        <div className="reveal">
          <span className="eyebrow">How to Use</span>
          <h2 className="h2" style={{ margin: "18px 0 6px" }}>A simple daily ritual.</h2>
          <div className="ht-steps">
            <div className="ht-step">
              <span className="htn">1</span>
              <div><h4 className="h4">Apply to wet skin</h4><p>Dispense a small amount onto wet skin across the face.</p></div>
            </div>
            <div className="ht-step">
              <span className="htn">2</span>
              <div><h4 className="h4">Massage gently</h4><p>Work in light, circular motions, avoiding the eye area.</p></div>
            </div>
            <div className="ht-step">
              <span className="htn">3</span>
              <div><h4 className="h4">Rinse &amp; pat dry</h4><p>Rinse thoroughly with water and pat the skin dry.</p></div>
            </div>
            <div className="ht-step">
              <span className="htn">4</span>
              <div><h4 className="h4">Use as directed</h4><p>Use as directed by your dermatologist or healthcare professional.</p></div>
            </div>
          </div>
        </div>
        <div className="howto-media reveal"><img src="/assets/rebalanse-texture.png" alt="Rebalanse cream texture" /></div>
      </div>
    </section>

    {/* INGREDIENTS */}
    <section className="section-pad tint">
      <div className="wrap ing-grid">
        <div className="reveal">
          <span className="eyebrow">Ingredients</span>
          <h2 className="h2">Inside the formula.</h2>
          <p className="lede">Every ingredient is chosen for a reason — nothing added just to make the label look impressive.</p>
          <ul className="ing-bullets">
            <li style={{ borderWidth: "0px" }}>Aqua (Water)</li>
            <li style={{ borderWidth: "0px" }}>Glycerin</li>
            <li style={{ borderWidth: "0px" }}>Propylene Glycol</li>
            <li style={{ borderWidth: "0px" }}>Stearic Acid</li>
            <li style={{ borderWidth: "0px" }}>Myristic Acid</li>
            <li style={{ borderWidth: "0px" }}>Sodium Cocoyl Isethionate</li>
            <li style={{ borderWidth: "0px" }}>Palmitic Acid</li>
            <li style={{ borderWidth: "0px" }}>Ethylene Glycol Monostearate</li>
            <li style={{ borderWidth: "0px" }}>Decyl Glucoside</li>
            <li style={{ borderWidth: "0px" }}>Salicylic Acid</li>
            <li style={{ borderWidth: "0px" }}>Glycolic Acid</li>
            <li style={{ borderWidth: "0px" }}>Kojic Acid</li>
            <li style={{ borderWidth: "0px" }}>Glutathione</li>
            <li style={{ borderWidth: "0px" }}>Potassium Hydroxide</li>
            <li style={{ borderWidth: "0px" }}>Disodium EDTA</li>
            <li style={{ borderWidth: "0px" }}>Polysorbate 80</li>
            <li style={{ borderWidth: "0px" }}>Phenoxyethanol</li>
            <li style={{ borderWidth: "0px" }}>Ethylhexylglycerin</li>
            <li style={{ borderWidth: "0px" }}>Fragrance (Parfum)</li>
          </ul>
        </div>
        <div className="ing-photo reveal"><img src="/assets/rebalanse-lifestyle.png" alt="Rebalanse Exfoliating Cleanser" /></div>
      </div>
    </section>

    {/* CTA BANNER */}
    <section className="cta-band" id="cta">
      <span className="grad-edge"></span>
      <div className="wrap cta-inner">
        <div className="reveal">
          <span className="eyebrow">Become a Partner</span>
          <h2 className="h2" style={{ marginTop: "18px" }}>Stock Rebalanse in your practice.</h2>
          <p>Request product samples and our full catalogue — and get a dedicated point of contact for your clinic or pharmacy.</p>
        </div>
        <div className="cta-actions reveal">
          <Link to="/contact/" className="btn btn-primary">Contact Us <span className="ar">→</span></Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default RebalansePage;

export const Head = () => <Seo title="Rebalanse Exfoliating Cleanser" />;
