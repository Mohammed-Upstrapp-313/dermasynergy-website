import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import Gallery from "../../components/Gallery";

const images = [
  { src: "/assets/revivon-lifestyle.png", label: "View 1" },
  { src: "/assets/revivon-water.png", label: "View 2" },
  { src: "/assets/revivon-lab.png", label: "View 3" },
  { src: "/assets/revivon-podium.png", label: "View 4" },
];

const RevivonPage = () => (
  <Layout>
    {/* PRODUCT HERO */}
    <section className="pd-hero">
      <div className="wrap">
        <div className="breadcrumb"><Link to="/">Home</Link> <span>/</span> <Link to="/#products">Products</Link> <span>/</span> Revivon</div>
        <div className="pd-grid">
          <Gallery images={images} alt="Revivon Copper Peptide Serum" />
          {/* info */}
          <div className="pd-info">
            <div className="pd-cat">Serum · 30 ml</div>
            <h1>Revivon™</h1>
            <div className="pd-sub">Copper Peptide Serum</div>
            <p className="pd-desc">Revivon is a lightweight serum developed to support skin recovery, hydration, and overall skin health. Formulated with Copper Tripeptide-1, Niacinamide, Hyaluronic Acid, and Allantoin, it helps improve skin comfort while supporting a stronger and healthier-looking skin barrier. Its lightweight texture absorbs easily into the skin, making it suitable for daily use as part of a morning or evening routine.</p>
            <div className="pd-tags">
              <span className="pd-tag">Lightweight</span>
              <span className="pd-tag">Fragrance-free</span>
              <span className="pd-tag">Copper Tripeptide-1</span>
              <span className="pd-tag">Daily use</span>
            </div>
            <div className="pd-specs">
              <div className="sp"><span className="k">Key actives</span><span className="v">Copper Tripeptide-1 · Niacinamide</span></div>
              <div className="sp"><span className="k">Also with</span><span className="v">Hyaluronic Acid · Allantoin</span></div>
              <div className="sp"><span className="k">Format</span><span className="v">30 ml / 1 fl. oz.</span></div>
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
          <div className="bcard">
            <div className="bic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 12a8 8 0 0113-6.2M20 12a8 8 0 01-13 6.2" /><path d="M18 3v4h-4M6 21v-4h4" /></svg></div>
            <p>Supports skin recovery and renewal</p>
          </div>
          <div className="bcard">
            <div className="bic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9.5 12l1.7 1.7L15 10" /></svg></div>
            <p>Helps maintain a healthy skin barrier</p>
          </div>
          <div className="bcard">
            <div className="bic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z" /></svg></div>
            <p>Provides lightweight hydration</p>
          </div>
          <div className="bcard">
            <div className="bic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.4 2.4M15.6 15.6 18 18M18 6l-2.4 2.4M8.4 15.6 6 18" /></svg></div>
            <p>Helps improve overall skin texture &amp; appearance</p>
          </div>
          <div className="bcard">
            <div className="bic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 8h11a3 3 0 100-6M3 12h15a3 3 0 110 6M3 16h7" /></svg></div>
            <p>Non-greasy and fast-absorbing</p>
          </div>
          <div className="bcard">
            <div className="bic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" /></svg></div>
            <p>Suitable for daily use</p>
          </div>
          <div className="bcard">
            <div className="bic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M6 6l12 12" /></svg></div>
            <p>Fragrance-free</p>
          </div>
          <div className="bcard">
            <div className="bic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="9" cy="9" r="3" /><path d="M3.5 19a5.5 5.5 0 0111 0" /><path d="M16 6.5a3 3 0 010 5.8M20.5 18a5.5 5.5 0 00-3.8-5.2" /></svg></div>
            <p>Designed for all skin types</p>
          </div>
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
            <div className="ht-step">
              <span className="htn">1</span>
              <div><h4 className="h4">Dispense 2–3 drops</h4><p>Apply 2–3 drops onto clean, dry skin.</p></div>
            </div>
            <div className="ht-step">
              <span className="htn">2</span>
              <div><h4 className="h4">Spread evenly</h4><p>Gently spread over the face and neck until absorbed.</p></div>
            </div>
            <div className="ht-step">
              <span className="htn">3</span>
              <div><h4 className="h4">Layer moisturizer</h4><p>Follow with a moisturizer if needed.</p></div>
            </div>
            <div className="ht-step">
              <span className="htn">4</span>
              <div><h4 className="h4">Use daily</h4><p>Use once or twice daily, morning or evening.</p></div>
            </div>
          </div>
        </div>
        <div className="howto-media reveal"><img src="/assets/revivon-podium.png" alt="Revivon Copper Peptide Serum" /></div>
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
            <li>Aqua (Water)</li>
            <li>Glycerin</li>
            <li>Propylene Glycol</li>
            <li>Niacinamide</li>
            <li>Carbomer</li>
            <li>Sodium Hyaluronate</li>
            <li>Copper Tripeptide-1</li>
            <li>Allantoin</li>
            <li>Xylitylglucoside</li>
            <li>Anhydroxylitol</li>
            <li>Xylitol</li>
            <li>Polysorbate 80</li>
            <li>Phenoxyethanol (and) Ethylhexylglycerin</li>
            <li>Disodium EDTA</li>
          </ul>
        </div>
        <div className="ing-photo reveal"><img src="/assets/revivon-water.png" alt="Revivon Copper Peptide Serum" /></div>
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
