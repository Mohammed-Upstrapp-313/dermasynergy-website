import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import Img from "../../components/Img";
import Gallery from "../../components/Gallery";

const GALLERY = [
  { name: "rebalanse-lifestyle.png", label: "View 1" },
  { name: "rebalanse-texture.png", label: "View 2" },
  { name: "rebalanse-box.png", label: "View 3" },
  { name: "rebalanse-model.png", label: "View 4" },
];

const TAGS = ["Cream-based", "pH balanced", "AHA · BHA Complex", "Daily use"];

const SPECS = [
  { k: "Active complex", v: "Glycolic + Salicylic Acid" },
  { k: "Skin types", v: "Oily · Combination · Acne-prone" },
  { k: "Format", v: "100 ml tube" },
];

const BENEFITS = [
  { icon: <path d="M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z" />, text: "Helps remove excess oil and impurities" },
  { icon: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.4 2.4M15.6 15.6 18 18M18 6l-2.4 2.4M8.4 15.6 6 18" />, text: "Gently exfoliates dead skin cells" },
  { icon: <><circle cx="12" cy="12" r="9" /><path d="M8 14c1.2 1.6 6.8 1.6 8 0" /><circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" /><circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" /></>, text: "Supports smoother, clearer-looking skin" },
  { icon: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="2.4" /></>, text: "Helps keep pores clean" },
  { icon: <><rect x="8" y="3" width="8" height="18" rx="3" /><path d="M8 8h8" /></>, text: "Cream-based formula for skin comfort" },
  { icon: <path d="M12 3v18M5 8h14M5 8l-2 5a3 3 0 006 0zM19 8l-2 5a3 3 0 006 0z" />, text: "pH balanced" },
  { icon: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" /></>, text: "Suitable for daily use as directed" },
  { icon: <><circle cx="12" cy="8" r="3.2" /><path d="M5 20a7 7 0 0114 0z" /></>, text: "Designed for oily, combination & acne-prone skin" },
];

const HOWTO = [
  { title: "Apply to wet skin", text: "Dispense a small amount onto wet skin across the face." },
  { title: "Massage gently", text: "Work in light, circular motions, avoiding the eye area." },
  { title: "Rinse & pat dry", text: "Rinse thoroughly with water and pat the skin dry." },
  { title: "Use as directed", text: "Use as directed by your dermatologist or healthcare professional." },
];

const INGREDIENTS = ["Aqua (Water)", "Glycerin", "Propylene Glycol", "Stearic Acid", "Myristic Acid", "Sodium Cocoyl Isethionate", "Palmitic Acid", "Ethylene Glycol Monostearate", "Decyl Glucoside", "Salicylic Acid", "Glycolic Acid", "Kojic Acid", "Glutathione", "Potassium Hydroxide", "Disodium EDTA", "Polysorbate 80", "Phenoxyethanol", "Ethylhexylglycerin", "Fragrance (Parfum)"];

const RebalansePage = () => (
  <Layout>
    {/* PRODUCT HERO */}
    <section className="pd-hero">
      <div className="wrap">
        <div className="breadcrumb"><Link to="/">Home</Link> <span>/</span> <Link to="/#products">Products</Link> <span>/</span> Rebalanse</div>
        <div className="pd-grid">
          <Gallery images={GALLERY} alt="Rebalanse Exfoliating Cleanser" />
          <div className="pd-info">
            <div className="pd-cat">Cleanser · 100 ml</div>
            <h1>Rebalanse™</h1>
            <div className="pd-sub">Exfoliating Cleanser</div>
            <p className="pd-desc">A cream-based exfoliating cleanser designed to cleanse the skin while helping remove excess oil, impurities, and dead skin cells — without leaving the skin feeling stripped or dry. Formulated with a balanced blend of exfoliating ingredients and skin-conditioning agents, Rebalanse supports smoother, clearer-looking skin while helping maintain the skin's natural barrier.</p>
            <div className="pd-tags">
              {TAGS.map((t) => <span className="pd-tag" key={t}>{t}</span>)}
            </div>
            <div className="pd-specs">
              {SPECS.map((s) => <div className="sp" key={s.k}><span className="k">{s.k}</span><span className="v">{s.v}</span></div>)}
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
          {BENEFITS.map((b) => (
            <div className="bcard" key={b.text}>
              <div className="bic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">{b.icon}</svg></div>
              <p>{b.text}</p>
            </div>
          ))}
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
            {HOWTO.map((s, i) => (
              <div className="ht-step" key={s.title}>
                <span className="htn">{i + 1}</span>
                <div><h4 className="h4">{s.title}</h4><p>{s.text}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="howto-media reveal"><Img name="rebalanse-texture.png" alt="Rebalanse cream texture" fill objectFit="cover" /></div>
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
            {INGREDIENTS.map((ing) => <li style={{ borderWidth: "0px" }} key={ing}>{ing}</li>)}
          </ul>
        </div>
        <div className="ing-photo reveal"><Img name="rebalanse-lifestyle.png" alt="Rebalanse Exfoliating Cleanser" fill objectFit="cover" /></div>
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
