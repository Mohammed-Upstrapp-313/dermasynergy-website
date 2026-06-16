import React, { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Icon from "./Icon";
import StrapiImage from "./StrapiImage";

const STRAPI_URL = process.env.GATSBY_STRAPI_API_URL || "http://localhost:1337";

/* helpers ----------------------------------------------------------------- */
const highlight = (text) => {
  if (!text) return null;
  return text.split(/(\*[^*]+\*)/g).map((p, i) =>
    p.startsWith("*") && p.endsWith("*") ? <span className="hl" key={i}>{p.slice(1, -1)}</span> : <React.Fragment key={i}>{p}</React.Fragment>
  );
};
const SmartLink = ({ to, className, children }) =>
  to && to.startsWith("#") ? <a href={to} className={className}>{children}</a> : <Link to={to || "/"} className={className}>{children}</Link>;
const tintClass = (t) => `section-pad${t ? " tint" : ""}`;
const Arrow = () => <span className="ar">→</span>;

/* section renderers ------------------------------------------------------- */
const Hero = (s) => (
  <section className="hero">
    <span className="hero-blob"></span>
    <div className="wrap hero-grid">
      <div className="hero-copy reveal">
        {s.eyebrow && <span className="eyebrow">{s.eyebrow}</span>}
        <h1 className="display">{highlight(s.heading)}</h1>
        {s.lede && <p className="lede">{s.lede}</p>}
        {s.cta_label && (
          <div className="hero-actions"><SmartLink to={s.cta_url} className="btn btn-primary btn-lg">{s.cta_label} <Arrow /></SmartLink></div>
        )}
        {s.meta && s.meta.length > 0 && (
          <div className="hero-meta">{s.meta.map((m) => <div className="m" key={m.label}><span className="k">{m.label}</span><span className="v">{m.value}</span></div>)}</div>
        )}
      </div>
      <div className="hero-visual reveal">
        <div className="hero-panel">
          <span className="hero-ring r2"></span><span className="hero-ring"></span>
          <StrapiImage media={s.image} className="hero-prod" objectFit="contain" loading="eager" />
        </div>
      </div>
    </div>
  </section>
);

const TrustStrip = (s) => (
  <div className="trust-strip">
    <div className="wrap">
      {(s.items || []).map((it) => <div className="trust-item" key={it.text}><Icon name={it.icon} className="ic" /> {it.text}</div>)}
    </div>
  </div>
);

const AboutSplit = (s) => (
  <section className={tintClass(s.tint)}>
    <div className="wrap split narrow-l" style={s.image_side === "right" ? { direction: "rtl" } : undefined}>
      <div className="reveal" style={{ direction: "ltr" }}>
        <div className="media frame-portrait"><StrapiImage media={s.image} fill objectFit="cover" /></div>
      </div>
      <div className="reveal stack-gap" style={{ direction: "ltr" }}>
        {s.eyebrow && <span className="eyebrow">{s.eyebrow}</span>}
        {s.heading && <h2 className="h2">{s.heading}</h2>}
        {s.lede && <p className="lede">{s.lede}</p>}
        {(s.body || "").split("\n").filter(Boolean).map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </div>
  </section>
);

const sectionHeadSplit = (s) => (
  <div className="section-head reveal" style={{ maxWidth: "none", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "30px", flexWrap: "wrap" }}>
    <div>
      {s.eyebrow && <span className="eyebrow" style={{ marginBottom: "18px" }}>{s.eyebrow}</span>}
      {s.heading && <h2 className="h2" style={{ maxWidth: "16ch" }}>{s.heading}</h2>}
    </div>
    {s.lede && <p className="lede" style={{ maxWidth: "42ch" }}>{s.lede}</p>}
  </div>
);
const sectionHeadGrid = (s) => (
  <div className="section-head reveal" style={{ maxWidth: "none", display: "grid", gridTemplateColumns: "1.25fr .75fr", alignItems: "end", gap: "40px" }}>
    <div>
      {s.eyebrow && <span className="eyebrow" style={{ marginBottom: "18px" }}>{s.eyebrow}</span>}
      {s.heading && <h2 className="h2" style={{ maxWidth: "18ch" }}>{s.heading}</h2>}
    </div>
    {s.lede && <p className="lede" style={{ maxWidth: "42ch" }}>{s.lede}</p>}
  </div>
);

const FeatureRow = (s) => (
  <section className={`${tintClass(s.tint)}`}>
    <div className="wrap">
      <div className="split narrow-r" style={{ alignItems: "flex-end" }}>
        <div className="section-head reveal">
          {s.eyebrow && <span className="eyebrow">{s.eyebrow}</span>}
          {s.heading && <h2 className="h2">{s.heading}</h2>}
        </div>
        {s.lede && <p className="lede reveal">{s.lede}</p>}
      </div>
      <div className="feature-row reveal">
        {(s.items || []).map((it, i) => (
          <div className="feature-cell" key={it.title}><div className="fnum">{String(i + 1).padStart(2, "0")}</div><h4 className="h4">{it.title}</h4><p>{it.text}</p></div>
        ))}
      </div>
    </div>
  </section>
);

const RuleList = (s) => (
  <section className={tintClass(s.tint)}>
    <div className="wrap split narrow-r" style={{ alignItems: "start" }}>
      <div className="reveal stack-gap" style={{ position: "sticky", top: "110px" }}>
        {s.eyebrow && <span className="eyebrow">{s.eyebrow}</span>}
        {s.heading && <h2 className="h2">{s.heading}</h2>}
        {s.lede && <p className="lede">{s.lede}</p>}
        {s.link_label && <SmartLink to={s.link_url} className="link-arrow">{s.link_label} <Arrow /></SmartLink>}
      </div>
      <div className="reveal">
        <div className="rulelist">
          {(s.items || []).map((it) => (
            <div className="item" key={it.title}><span className="ix"><Icon name={it.icon} /></span><div><h4 className="h4">{it.title}</h4><p>{it.text}</p></div></div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ProcessSteps = (s) => (
  <section className={tintClass(s.tint)} id="process">
    <div className="wrap">
      {sectionHeadSplit(s)}
      <div className="process-grid reveal">
        {(s.items || []).map((it, i) => (
          <div className="pstep" key={it.title}><span className="pdot"></span><div className="pnum">{i + 1}</div><h4>{it.title}</h4><p>{it.text}</p></div>
        ))}
      </div>
    </div>
  </section>
);

const WhyChoose = (s) => (
  <section className={`${tintClass(s.tint)} why`} id="why">
    <div className="wrap">
      {sectionHeadSplit(s)}
      <div className="why-grid reveal">
        {(s.items || []).map((it) => <div className="why-cell" key={it.title}><Icon name={it.icon} className="wic" strokeWidth={1.5} /><h4>{it.title}</h4></div>)}
      </div>
    </div>
  </section>
);

const ProductsGrid = (s) => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiProduct(sort: { createdAt: ASC }) {
        nodes {
          name slug kicker short_desc accent is_featured
          main_image { alternativeText localFile { childImageSharp { gatsbyImageData(width: 520, placeholder: BLURRED) } } }
        }
      }
    }
  `);
  let products = data.allStrapiProduct.nodes;
  if (s.source !== "all") products = products.filter((p) => p.is_featured);
  return (
    <section className={`${tintClass(s.tint)} product`} id="products">
      <div className="wrap">
        <div className="products-head reveal">
          <div>
            {s.eyebrow && <span className="eyebrow" style={{ marginBottom: "18px" }}>{s.eyebrow}</span>}
            {s.heading && <h2 className="h2">{s.heading}</h2>}
          </div>
          {s.lede && <p className="lede" style={{ maxWidth: "42ch" }}>{s.lede}</p>}
        </div>
        <div className="product-cards reveal">
          {products.map((p, i) => (
            <div className="pcard" id={i === 1 ? "revivon" : undefined} key={p.slug}>
              <div className={`pcard-media ${p.accent || "green"}`}><StrapiImage media={p.main_image} className="pcard-prod" objectFit="contain" /></div>
              <div className="pcard-body">
                {p.kicker && <div className="product-kicker">{p.kicker}</div>}
                <h3 className="h3">{p.name}</h3>
                {p.short_desc && <p className="pcard-desc">{p.short_desc}</p>}
                <Link to={`/products/${p.slug}/`} className="btn btn-primary">Know More <Arrow /></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Clientele = (s) => (
  <section className={tintClass(s.tint)}>
    <div className="wrap">
      {sectionHeadGrid(s)}
      <div className="client-logos reveal">
        {(s.logos || []).map((l) => <div className="clogo" key={l.name}><StrapiImage media={l.image} alt={l.name} objectFit="contain" /></div>)}
      </div>
    </div>
  </section>
);

const CtaBand = (s) => (
  <section className="cta-band" id="cta">
    <span className="grad-edge"></span>
    <div className="wrap cta-inner">
      <div className="reveal">
        {s.eyebrow && <span className="eyebrow">{s.eyebrow}</span>}
        {s.heading && <h2 className="h2" style={{ marginTop: "18px" }}>{s.heading}</h2>}
        {s.body && <p>{s.body}</p>}
      </div>
      {s.cta_label && <div className="cta-actions reveal"><SmartLink to={s.cta_url} className="btn btn-primary">{s.cta_label} <Arrow /></SmartLink></div>}
    </div>
  </section>
);

const MissionVision = (s) => (
  <section className={tintClass(s.tint)}>
    <div className="wrap">
      {sectionHeadGrid(s)}
      <div className="mv-grid reveal">
        {(s.cards || []).map((c) => (
          <div className="mv-card" key={c.title}><div className="mv-ic"><Icon name={c.icon} /></div><h3 className="h3">{c.title}</h3><p>{c.text}</p></div>
        ))}
      </div>
    </div>
  </section>
);

const PageBanner = (s) => (
  <section className="page-banner">
    <div className="wrap">
      {s.eyebrow && <span className="eyebrow">{s.eyebrow}</span>}
      <h1>{s.heading}</h1>
      <div className="breadcrumb"><Link to="/">Home</Link> <span>/</span> {s.breadcrumb}</div>
    </div>
  </section>
);

const RichText = (s) => (
  <section className="section-pad">
    <div className="wrap" style={{ maxWidth: "760px" }}>
      <div className="reveal stack-gap">
        {s.lede && <p className="lede">{s.lede}</p>}
        {s.html && <div dangerouslySetInnerHTML={{ __html: s.html.data ? s.html.data.html : s.html }} />}
      </div>
    </div>
  </section>
);

const emailOk = (v) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);
const ContactBlock = (s) => {
  const [v, setV] = useState({ name: "", phone: "", email: "", company: "", message: "" });
  const [err, setErr] = useState({});
  const [sent, setSent] = useState(false);
  const upd = (e) => setV((o) => ({ ...o, [e.target.name]: e.target.value }));
  const submit = async (e) => {
    e.preventDefault();
    const next = {};
    ["name", "phone", "email", "message"].forEach((k) => { if (!v[k].trim()) next[k] = true; });
    if (v.email.trim() && !emailOk(v.email)) next.email = true;
    setErr(next);
    if (Object.keys(next).length) return;
    try {
      await fetch(`${STRAPI_URL}/api/enquiries`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: v }),
      });
      setSent(true);
      setV({ name: "", phone: "", email: "", company: "", message: "" });
      setTimeout(() => setSent(false), 6000);
    } catch (_) { setSent(true); }
  };
  const es = (k) => (err[k] ? { borderColor: "#d98b8b" } : undefined);
  return (
    <section className="section-pad">
      <div className="wrap contact-grid">
        <div className="contact-aside reveal">
          {s.eyebrow && <span className="eyebrow">{s.eyebrow}</span>}
          {s.heading && <h2 className="h2">{s.heading}</h2>}
          {s.lede && <p className="lede">{s.lede}</p>}
          <div className="contact-points">
            {(s.points || []).map((p) => (
              <div className="cp" key={p.label}><span className="cp-ic"><Icon name={p.icon} /></span><div><div className="k">{p.label}</div><div className="v">{p.value}</div></div></div>
            ))}
          </div>
        </div>
        <div className="contact-card reveal">
          <form className="form-grid" onSubmit={submit} noValidate>
            <div className="field"><label htmlFor="f-name">Name <span className="req">*</span></label><input id="f-name" name="name" type="text" placeholder="Your full name" value={v.name} onChange={upd} style={es("name")} /></div>
            <div className="field"><label htmlFor="f-phone">Phone <span className="req">*</span></label><input id="f-phone" name="phone" type="tel" placeholder="+91 00000 00000" value={v.phone} onChange={upd} style={es("phone")} /></div>
            <div className="field"><label htmlFor="f-email">Email <span className="req">*</span></label><input id="f-email" name="email" type="email" placeholder="you@clinic.com" value={v.email} onChange={upd} style={es("email")} /></div>
            <div className="field"><label htmlFor="f-company">Company Name</label><input id="f-company" name="company" type="text" placeholder="Clinic / pharmacy name" value={v.company} onChange={upd} /></div>
            <div className="field full"><label htmlFor="f-message">Message <span className="req">*</span></label><textarea id="f-message" name="message" placeholder="How can we help your practice?" value={v.message} onChange={upd} style={es("message")}></textarea></div>
            <div className="form-actions">
              <button type="submit" className="btn btn-primary btn-lg">Send <Arrow /></button>
              {s.form_note && <span className="form-note">{s.form_note}</span>}
            </div>
            <div className={`form-ok${sent ? " show" : ""}`}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 12l3 3 5-6" /></svg>
              Thanks — your message has been noted. We'll be in touch shortly.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

/* dispatcher -------------------------------------------------------------- */
const MAP = {
  STRAPI__COMPONENT_SECTIONS_HERO: Hero,
  STRAPI__COMPONENT_SECTIONS_TRUST_STRIP: TrustStrip,
  STRAPI__COMPONENT_SECTIONS_ABOUT_SPLIT: AboutSplit,
  STRAPI__COMPONENT_SECTIONS_FEATURE_ROW: FeatureRow,
  STRAPI__COMPONENT_SECTIONS_RULE_LIST: RuleList,
  STRAPI__COMPONENT_SECTIONS_PROCESS_STEPS: ProcessSteps,
  STRAPI__COMPONENT_SECTIONS_WHY_CHOOSE: WhyChoose,
  STRAPI__COMPONENT_SECTIONS_PRODUCTS_GRID: ProductsGrid,
  STRAPI__COMPONENT_SECTIONS_CLIENTELE: Clientele,
  STRAPI__COMPONENT_SECTIONS_CTA_BAND: CtaBand,
  STRAPI__COMPONENT_SECTIONS_MISSION_VISION: MissionVision,
  STRAPI__COMPONENT_SECTIONS_PAGE_BANNER: PageBanner,
  STRAPI__COMPONENT_SECTIONS_RICH_TEXT: RichText,
  STRAPI__COMPONENT_SECTIONS_CONTACT_BLOCK: ContactBlock,
};

const Sections = ({ sections }) => (
  <>
    {(sections || []).map((s, i) => {
      const Cmp = MAP[s.__typename];
      return Cmp ? <Cmp key={i} {...s} /> : null;
    })}
  </>
);

export default Sections;
