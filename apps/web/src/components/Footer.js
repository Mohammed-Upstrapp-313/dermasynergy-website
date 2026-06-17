import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const SOCIALS = [
  { key: "social_instagram", label: "Instagram", icon: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></> },
  { key: "social_linkedin", label: "LinkedIn", icon: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 014 0v4M11 10v7" /></> },
  { key: "social_facebook", label: "Facebook", icon: <path d="M14 8h2V5h-2a3 3 0 00-3 3v2H9v3h2v6h3v-6h2l1-3h-3V8a1 1 0 011-1z" /> },
  { key: "social_youtube", label: "YouTube", icon: <><rect x="3" y="6" width="18" height="12" rx="3" /><path d="M11 9.5l4 2.5-4 2.5z" fill="currentColor" stroke="none" /></> },
];

const Footer = () => {
  const { strapiGlobal } = useStaticQuery(graphql`
    query {
      strapiGlobal {
        site_name copyright
        logo { alternativeText localFile { publicURL } }
        footer_about contact_email contact_phone contact_office
        social_instagram social_linkedin social_facebook social_youtube
        footer_menu { label url }
      }
    }
  `);
  const g = strapiGlobal || {};
  const menu = g.footer_menu || [];
  const year = new Date().getFullYear();
  const copyright = (g.copyright || "© {year} DermaSynergy™ · All rights reserved").replace("{year}", year);

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Link to="/" className="brand" aria-label={`${g.site_name || "DermaSynergy"} home`}>
              {g.logo && g.logo.localFile && g.logo.localFile.publicURL ? (
                <img src={g.logo.localFile.publicURL} alt={g.site_name || "DermaSynergy"} className="brand-logo" style={{ height: "30px", width: "auto", display: "block" }} />
              ) : (
                <><span className="brand-mark"></span><span className="brand-name">Derma<span className="g">Synergy</span><sup>™</sup></span></>
              )}
            </Link>
            {g.footer_about && <p className="footer-about">{g.footer_about}</p>}
            <div className="socials">
              {SOCIALS.filter((s) => g[s.key]).map((s) => (
                <a href={g[s.key]} aria-label={s.label} key={s.key} target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">{s.icon}</svg>
                </a>
              ))}
            </div>
          </div>
          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul>{menu.map((m) => <li key={m.label}><Link to={m.url}>{m.label}</Link></li>)}</ul>
          </div>
          <div className="footer-col footer-contact">
            <h5>Get in Touch</h5>
            {g.contact_email && <div className="ci"><div className="k">Trade Enquiries</div><div className="v">{g.contact_email}</div></div>}
            {g.contact_phone && <div className="ci"><div className="k">Phone</div><div className="v">{g.contact_phone}</div></div>}
            {g.contact_office && <div className="ci"><div className="k">Office</div><div className="v">{g.contact_office}</div></div>}
          </div>
        </div>
        <div className="footer-bottom">
          <span className="legal">{copyright}</span>
          <div className="fl"><Link to="/privacy/">Privacy</Link><Link to="/terms/">Terms</Link></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
