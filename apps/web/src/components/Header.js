import React, { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const Brand = () => (
  <Link to="/" className="brand" aria-label="DermaSynergy home">
    <span className="brand-mark"></span>
    <span className="brand-name">Derma<span className="g">Synergy</span><sup>™</sup></span>
  </Link>
);

const Header = () => {
  const { strapiGlobal } = useStaticQuery(graphql`
    query { strapiGlobal { header_menu { label url } } }
  `);
  const menu = (strapiGlobal && strapiGlobal.header_menu) || [];
  const [open, setOpen] = useState(false);

  const openStyle = {
    display: "flex", position: "absolute", top: "74px", left: 0, right: 0,
    flexDirection: "column", background: "#fff", padding: "18px var(--gutter)",
    borderBottom: "1px solid var(--line)", gap: "4px",
  };

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Brand />
        <nav className="nav-links" style={open ? openStyle : undefined}>
          {menu.map((m) => <Link to={m.url} key={m.label}>{m.label}</Link>)}
        </nav>
        <div className="nav-cta">
          <Link to="/contact/" className="btn btn-primary">Let's connect <span className="ar">→</span></Link>
          <button className="btn btn-ghost nav-toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>Menu</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
