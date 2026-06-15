import React from "react";
import { Link } from "gatsby";

const Footer = () => (
  <footer className="footer">
    <div className="wrap">
      <div className="footer-top">
        <div>
          <Link to="/" className="brand">
            <span className="brand-mark"></span>
            <span className="brand-name">
              Derma<span className="g">Synergy</span>
              <sup>™</sup>
            </span>
          </Link>
          <p className="footer-about">
            Dermatology-grade skincare developed for clinics and healthcare
            professionals — effective, well-made formulations backed by reliable
            supply.
          </p>
          <div className="socials">
            <a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
            </a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 014 0v4M11 10v7" /></svg>
            </a>
            <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M14 8h2V5h-2a3 3 0 00-3 3v2H9v3h2v6h3v-6h2l1-3h-3V8a1 1 0 011-1z" /></svg>
            </a>
            <a href="https://www.youtube.com/" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="6" width="18" height="12" rx="3" /><path d="M11 9.5l4 2.5-4 2.5z" fill="currentColor" stroke="none" /></svg>
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h5>Quick Links</h5>
          <ul>
            <li><Link to="/about/">About</Link></li>
            <li><Link to="/products/rebalanse/">Rebalanse Cleanser</Link></li>
            <li><Link to="/products/revivon/">Revivon Serum</Link></li>
            <li><Link to="/contact/">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-col footer-contact">
          <h5>Get in Touch</h5>
          <div className="ci"><div className="k">Trade Enquiries</div><div className="v">partners@dermasynergy.com</div></div>
          <div className="ci"><div className="k">Phone</div><div className="v">+91 22 4567 8900</div></div>
          <div className="ci"><div className="k">Office</div><div className="v">Andheri East, Mumbai 400 069</div></div>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="legal">© 2026 DermaSynergy™ · All rights reserved</span>
        <div className="fl">
          <Link to="/privacy/">Privacy</Link>
          <Link to="/terms/">Terms</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
