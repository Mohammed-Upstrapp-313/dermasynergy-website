import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import Img from "../../components/Img";
import Gallery from "../../components/Gallery";

const GALLERY = [
  { name: "revivon-lifestyle.png", label: "View 1" },
  { name: "revivon-water.png", label: "View 2" },
  { name: "revivon-lab.png", label: "View 3" },
  { name: "revivon-podium.png", label: "View 4" },
];

const TAGS = ["Lightweight", "Fragrance-free", "Copper Tripeptide-1", "Daily use"];

const SPECS = [
  { k: "Key actives", v: "Copper Tripeptide-1 · Niacinamide" },
  { k: "Also with", v: "Hyaluronic Acid · Allantoin" },
  { k: "Format", v: "30 ml / 1 fl. oz." },
];

const BENEFITS = [
  { icon: <><path d="M4 12a8 8 0 0113-6.2M20 12a8 8 0 01-13 6.2" /><path d="M18 3v4h-4M6 21v-4h4" /></>, text: "Supports skin recovery and renewal" },
  { icon: <><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9.5 12l1.7 1.7L15 10" /></>, text: "Helps maintain a healthy skin barrier" },
  { icon: <path d="M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z" />, text: "Provides lightweight hydration" },
  { icon: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.4 2.4M15.6 15.6 18 18M18 6l-2.4 2.4M8.4 15.6 6 18" />, text: "Helps improve overall skin texture & appearance" },
  { icon: <path d="M3 8h11a3 3 0 100-6M3 12h15a3 3 0 110 6M3 16h7" />, text: "Non-greasy and fast-absorbing" },
  { icon: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" /></>, text: "Suitable for daily use" },
  { icon: <><circle cx="12" cy="12" r="9" /><path d="M6 6l12 12" /></>, text: "Fragrance-free" },
  { icon: <><circle cx="9" cy="9" r="3" /><path d="M3.5 19a5.5 5.5 0 0111 0" /><path d="M16 6.5a3 3 0 010 5.8M20.5 18a5.5 5.5 0 00-3.8-5.2" /></>, text: "Designed for all skin types" },
];

const HOWTO = [
  { title: "Dispense 2–3 drops", text: "Apply 2–3 drops onto clean, dry skin." },
  { title: "Spread evenly", text: "Gently spread over the face and neck until absorbed." },
  { title: "Layer moisturizer", text: "Follow with a moisturizer if needed." },
  { title: "Use daily", text: "Use once or twice daily, morning or evening." },
];

const INGREDIENTS = ["Aqua (Water)", "Glycerin", "Propylene Glycol", "Niacinamide", "Carbomer", "Sodium Hyaluronate", "Copper Tripeptide-1", "Allantoin", "Xylitylglucoside", "Anhydroxylitol", "Xylitol", "Polysorbate 80", "Phenoxyethanol (and) Ethylhexylglycerin", "Disodium EDTA"];

const RevivonPage = () => (
  <Layout>
    {/* PRODUCT HERO */}
    <section className="pd-hero">
      <div className="wrap">
        <div className="breadcrumb"><Link to="/">Home</Link> <span>/</span> <Link to="/#products">Products</Link> <span>/</span> Revivon</div>
        <div className="pd-grid">
          <Gallery images={GALLERY} alt="Revivon Copper Peptide Serum" />
          <div className="pd-info">
            <div className="pd-cat">Serum · 30 ml</div>
            <h1>Revivon™</h1>
            <div className="pd-sub">Copper Peptide Serum</div>
            <p className="pd-desc">Revivon is a lightweight serum developed to support skin recovery, hydration, and overall skin health. Formulated with Copper Tripeptide-1, Niacinamide, Hyaluronic Acid, and Allantoin, it helps improve skin comfort while supporting a stronger and healthier-looking skin barrier. Its lightweight texture absorbs easily into the skin, making it suitable for daily use as part of a morning or evening routine.</p>
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
            <h2 className="h2" style={{ maxWidth: "18ch" }}>What Revivon does for the skin.</h2>
          </div>
          <p className="lede" style={{ maxWidth: "42ch" }}>A lightweight, fragrance-free serum built to support recovery and a healthier-looking barrier.</p>
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
          <h2 className="h2" style={{ margin: "18px 0 6px" }}>A lightweight daily step.</h2>
          <div className="ht-steps">
            {HOWTO.map((s, i) => (
              <div className="ht-step" key={s.title}>
                <span className="htn">{i + 1}</span>
                <div><h4 className="h4">{s.title}</h4><p>{s.text}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="howto-media reveal"><Img name="revivon-podium.png" alt="Revivon Copper Peptide Serum" fill objectFit="cover" /></div>
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
            {INGREDIENTS.map((ing) => <li key={ing}>{ing}</li>)}
          </ul>
        </div>
        <div className="ing-photo reveal"><Img name="revivon-water.png" alt="Revivon Copper Peptide Serum" fill objectFit="cover" /></div>
      </div>
    </section>

    {/* CTA BANNER */}
    <section className="cta-band" id="cta">
      <span className="grad-edge"></span>
      <div className="wrap cta-inner">
        <div className="reveal">
          <span className="eyebrow">Become a Partner</span>
          <h2 className="h2" style={{ marginTop: "18px" }}>Stock Revivon in your practice.</h2>
          <p>Request product samples and our full catalogue — and get a dedicated point of contact for your clinic or pharmacy.</p>
        </div>
        <div className="cta-actions reveal">
          <Link to="/contact/" className="btn btn-primary">Contact Us <span className="ar">→</span></Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default RevivonPage;

export const Head = () => <Seo title="Revivon Copper Peptide Serum" />;
