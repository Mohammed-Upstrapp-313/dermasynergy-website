import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Icon from "../components/Icon";
import StrapiImage from "../components/StrapiImage";

const Gallery = ({ images, alt }) => {
  const [active, setActive] = useState(0);
  const list = images || [];
  return (
    <div className="pd-gallery">
      <div className="pd-main"><StrapiImage media={list[active]} alt={alt} fill objectFit="cover" loading="eager" /></div>
      <div className="pd-thumbs">
        {list.map((img, i) => (
          <button key={i} className={`pd-thumb${i === active ? " active" : ""}`} aria-label={`View ${i + 1}`} onClick={() => setActive(i)}>
            <StrapiImage media={img} alt="" fill objectFit="cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

const ProductTemplate = ({ data }) => {
  const p = data.strapiProduct;
  return (
    <Layout>
      {/* HERO */}
      <section className="pd-hero">
        <div className="wrap">
          <div className="breadcrumb"><Link to="/">Home</Link> <span>/</span> <Link to="/#products">Products</Link> <span>/</span> {p.name}</div>
          <div className="pd-grid">
            <Gallery images={p.gallery} alt={p.name} />
            <div className="pd-info">
              {p.kicker && <div className="pd-cat">{p.kicker}</div>}
              <h1>{p.name}</h1>
              {p.subtitle && <div className="pd-sub">{p.subtitle}</div>}
              {p.description && <p className="pd-desc">{p.description}</p>}
              {p.tags && p.tags.length > 0 && <div className="pd-tags">{p.tags.map((t) => <span className="pd-tag" key={t.value}>{t.value}</span>)}</div>}
              {p.specs && p.specs.length > 0 && <div className="pd-specs">{p.specs.map((s) => <div className="sp" key={s.label}><span className="k">{s.label}</span><span className="v">{s.value}</span></div>)}</div>}
              <div className="pd-actions"><Link to="/contact/" className="btn btn-primary btn-lg">Enquire to Stock <span className="ar">→</span></Link></div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      {p.benefits && p.benefits.length > 0 && (
        <section className="section-pad tint">
          <div className="wrap">
            <div className="section-head reveal" style={{ maxWidth: "none", display: "grid", gridTemplateColumns: "1.25fr .75fr", alignItems: "end", gap: "40px" }}>
              <div>
                <span className="eyebrow" style={{ marginBottom: "18px" }}>Key Benefits</span>
                <h2 className="h2" style={{ maxWidth: "18ch" }}>What {p.name} does for the skin.</h2>
              </div>
            </div>
            <div className="benefits-icons reveal">
              {p.benefits.map((b) => <div className="bcard" key={b.text}><div className="bic"><Icon name={b.icon} /></div><p>{b.text}</p></div>)}
            </div>
          </div>
        </section>
      )}

      {/* HOW TO USE */}
      {p.how_to_use && p.how_to_use.length > 0 && (
        <section className="section-pad">
          <div className="wrap howto-grid">
            <div className="reveal">
              <span className="eyebrow">How to Use</span>
              <h2 className="h2" style={{ margin: "18px 0 6px" }}>A simple daily ritual.</h2>
              <div className="ht-steps">
                {p.how_to_use.map((s, i) => <div className="ht-step" key={s.title}><span className="htn">{i + 1}</span><div><h4 className="h4">{s.title}</h4><p>{s.text}</p></div></div>)}
              </div>
            </div>
            {p.gallery && p.gallery[1] && <div className="howto-media reveal"><StrapiImage media={p.gallery[1]} alt={p.name} fill objectFit="cover" /></div>}
          </div>
        </section>
      )}

      {/* INGREDIENTS */}
      {p.ingredients && p.ingredients.length > 0 && (
        <section className="section-pad tint">
          <div className="wrap ing-grid">
            <div className="reveal">
              <span className="eyebrow">Ingredients</span>
              <h2 className="h2">Inside the formula.</h2>
              <p className="lede">Every ingredient is chosen for a reason — nothing added just to make the label look impressive.</p>
              <ul className="ing-bullets">{p.ingredients.map((ing) => <li key={ing.value}>{ing.value}</li>)}</ul>
            </div>
            {(p.gallery && p.gallery[0]) && <div className="ing-photo reveal"><StrapiImage media={p.gallery[0]} alt={p.name} fill objectFit="cover" /></div>}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="cta-band" id="cta">
        <span className="grad-edge"></span>
        <div className="wrap cta-inner">
          <div className="reveal">
            <span className="eyebrow">Become a Partner</span>
            <h2 className="h2" style={{ marginTop: "18px" }}>Stock {p.name} in your practice.</h2>
            <p>Request product samples and our full catalogue — and get a dedicated point of contact for your clinic or pharmacy.</p>
          </div>
          <div className="cta-actions reveal"><Link to="/contact/" className="btn btn-primary">Contact Us <span className="ar">→</span></Link></div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductTemplate;

export const Head = ({ data, location }) => {
  const seo = data.strapiProduct.seo || {};
  return (
    <Seo
      title={data.strapiProduct.name}
      description={seo.metaDescription}
      image={seo.ogImage && seo.ogImage.localFile && seo.ogImage.localFile.publicURL}
      pathname={location && location.pathname}
    />
  );
};

export const query = graphql`
  query ($slug: String!) {
    strapiProduct(slug: { eq: $slug }) {
      name slug kicker subtitle description accent
      seo { metaDescription ogImage { localFile { publicURL } } }
      main_image { alternativeText localFile { childImageSharp { gatsbyImageData(layout: CONSTRAINED, width: 760, quality: 92, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED) } publicURL } }
      gallery { alternativeText localFile { childImageSharp { gatsbyImageData(layout: CONSTRAINED, width: 1100, quality: 92, formats: [AUTO, WEBP, AVIF], placeholder: BLURRED) } publicURL } }
      tags { value }
      specs { label value }
      benefits { icon text }
      how_to_use { title text }
      ingredients { value }
    }
  }
`;
