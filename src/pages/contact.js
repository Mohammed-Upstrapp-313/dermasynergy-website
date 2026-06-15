import React, { useState } from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const emailOk = (v) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);

const ContactPage = () => {
  const [values, setValues] = useState({ name: "", phone: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = {};
    ["name", "phone", "email", "message"].forEach((k) => {
      if (!values[k].trim()) next[k] = true;
    });
    if (values.email.trim() && !emailOk(values.email)) next.email = true;
    setErrors(next);
    if (Object.keys(next).length) return;

    // No backend yet — show confirmation and reset (matches original behaviour).
    setSent(true);
    setValues({ name: "", phone: "", email: "", company: "", message: "" });
    setTimeout(() => setSent(false), 6000);
  };

  const errStyle = (k) => (errors[k] ? { borderColor: "#d98b8b" } : undefined);

  return (
    <Layout>
      {/* BANNER */}
      <section className="page-banner">
        <div className="wrap">
          <span className="eyebrow">Get in Touch</span>
          <h1>Contact Us</h1>
          <div className="breadcrumb"><Link to="/">Home</Link> <span>/</span> Contact Us</div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section-pad">
        <div className="wrap contact-grid">
          {/* left: intro + details */}
          <div className="contact-aside reveal">
            <span className="eyebrow">Let's Connect</span>
            <h2 className="h2">Partner with DermaSynergy.</h2>
            <p className="lede">Tell us about your clinic or pharmacy and what you're looking for. Our team will get back to you with the right information and a dedicated point of contact.</p>
            <div className="contact-points">
              <div className="cp">
                <span className="cp-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 6h16v12H4z" /><path d="M4 7l8 6 8-6" /></svg></span>
                <div><div className="k">Trade Enquiries</div><div className="v">partners@dermasynergy.com</div></div>
              </div>
              <div className="cp">
                <span className="cp-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 4h4l2 5-3 2a12 12 0 005 5l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" /></svg></span>
                <div><div className="k">Phone</div><div className="v">+91 22 4567 8900</div></div>
              </div>
              <div className="cp">
                <span className="cp-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s-7-4.5-7-10a7 7 0 0114 0c0 5.5-7 10-7 10z" /><circle cx="12" cy="11" r="2.5" /></svg></span>
                <div><div className="k">Office</div><div className="v">Andheri East, Mumbai 400 069</div></div>
              </div>
            </div>
          </div>

          {/* right: form */}
          <div className="contact-card reveal">
            <form className="form-grid" onSubmit={onSubmit} noValidate>
              <div className="field">
                <label htmlFor="f-name">Name <span className="req">*</span></label>
                <input id="f-name" name="name" type="text" placeholder="Your full name" value={values.name} onChange={update} style={errStyle("name")} />
              </div>
              <div className="field">
                <label htmlFor="f-phone">Phone <span className="req">*</span></label>
                <input id="f-phone" name="phone" type="tel" placeholder="+91 00000 00000" value={values.phone} onChange={update} style={errStyle("phone")} />
              </div>
              <div className="field">
                <label htmlFor="f-email">Email <span className="req">*</span></label>
                <input id="f-email" name="email" type="email" placeholder="you@clinic.com" value={values.email} onChange={update} style={errStyle("email")} />
              </div>
              <div className="field">
                <label htmlFor="f-company">Company Name</label>
                <input id="f-company" name="company" type="text" placeholder="Clinic / pharmacy name" value={values.company} onChange={update} />
              </div>
              <div className="field full">
                <label htmlFor="f-message">Message <span className="req">*</span></label>
                <textarea id="f-message" name="message" placeholder="How can we help your practice?" value={values.message} onChange={update} style={errStyle("message")}></textarea>
              </div>
              <div className="form-actions">
                <button type="submit" className="btn btn-primary btn-lg">Send <span className="ar">→</span></button>
                <span className="form-note">We typically reply within 1–2 business days.</span>
              </div>
              <div className={`form-ok${sent ? " show" : ""}`}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 12l3 3 5-6" /></svg>
                Thanks — your message has been noted. We'll be in touch shortly.
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <Seo title="Contact Us" />;
