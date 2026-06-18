import React, { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const Brand = ({ logo, name }) => (
  <Link to="/" className="brand" aria-label={`${name || "DermaSynergy"} home`}>
    {logo && logo.localFile && logo.localFile.publicURL ? (
      <img src={logo.localFile.publicURL} alt={name || "DermaSynergy"} className="brand-logo" style={{ height: "30px", width: "auto", display: "block" }} />
    ) : (
      <>
        <span className="brand-mark"></span>
        <span className="brand-name">Derma<span className="g">Synergy</span><sup>™</sup></span>
      </>
    )}
  </Link>
);

const Header = () => {
  const { strapiGlobal, allStrapiProduct } = useStaticQuery(graphql`
    query {
      strapiGlobal {
        site_name
        header_cta_label
        logo { alternativeText localFile { publicURL } }
        header_menu { label url }
      }
      allStrapiProduct(sort: { createdAt: ASC }) { nodes { name slug } }
    }
  `);
  const g = strapiGlobal || {};
  const menu = g.header_menu || [];
  const products = (allStrapiProduct && allStrapiProduct.nodes) || [];
  const ctaLabel = g.header_cta_label || "Let's connect";
  const [open, setOpen] = useState(false);

  const openStyle = {
    display: "flex", position: "absolute", top: "74px", left: 0, right: 0,
    flexDirection: "column", background: "#fff", padding: "18px var(--gutter)",
    borderBottom: "1px solid var(--line)", gap: "4px",
  };

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Brand logo={g.logo} name={g.site_name} />
        <nav className="nav-links" style={open ? openStyle : undefined}>
          {menu.map((m) => {
            const isProducts = (m.url || "").replace(/\/+$/, "") === "/products";
            if (isProducts && products.length) {
              return (
                <div className="has-sub" key={m.label}>
                  <Link to={m.url}>{m.label}<svg className="caret" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg></Link>
                  <div className="submenu">
                    {products.map((p) => (
                      <Link to={`/products/${p.slug}/`} key={p.slug}>{p.name}</Link>
                    ))}
                  </div>
                </div>
              );
            }
            return <Link to={m.url} key={m.label}>{m.label}</Link>;
          })}
        </nav>
        <div className="nav-cta">
          <Link to="/contact/" className="btn btn-primary">{ctaLabel} <span className="ar">→</span></Link>
          <button className="btn btn-ghost nav-toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>Menu</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
