import React from "react";

/**
 * "Why choose" icon grid — shared by Home and About (single source of truth).
 * Ten reasons, rendered from data.
 */
const ICON = {
  shield: <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />,
  flask: <path d="M9 3h6M10 3v5l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3" />,
  badgeCheck: (<><circle cx="12" cy="12" r="8" /><path d="M9 12l2 2 4-4" /></>),
  lines: <path d="M4 7h16M4 12h16M4 17h16" />,
  box: <path d="M12 2v20M5 9l7-4 7 4M5 9v6l7 4 7-4V9" />,
  truck: (<><rect x="3" y="8" width="13" height="10" rx="1" /><path d="M16 11h3l2 3v3h-5" /><circle cx="7" cy="18" r="1.6" /><circle cx="17" cy="18" r="1.6" /></>),
  clock: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
  people: <path d="M16 18a4 4 0 00-8 0M12 11a3 3 0 100-6 3 3 0 000 6z" />,
  growth: <path d="M3 17l5-5 4 3 8-8M21 7v5M21 7h-5" />,
  building: <path d="M4 21V8l8-5 8 5v13M9 21v-6h6v6" />,
};

const REASONS = [
  { icon: "shield", title: "Dermatologist-focused formulations" },
  { icon: "flask", title: "Carefully selected ingredients" },
  { icon: "badgeCheck", title: "Quality-controlled manufacturing" },
  { icon: "lines", title: "Consistent batch-to-batch quality" },
  { icon: "box", title: "Competitive pricing" },
  { icon: "truck", title: "Reliable product availability" },
  { icon: "clock", title: "On-time delivery" },
  { icon: "people", title: "Dedicated partner support" },
  { icon: "growth", title: "Growing portfolio of solutions" },
  { icon: "building", title: "Built for dermatology practice needs" },
];

const WhyChoose = () => (
  <section className="section-pad why" id="why">
    <div className="wrap">
      <div className="section-head reveal" style={{ maxWidth: "none", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "30px", flexWrap: "wrap" }}>
        <div>
          <span className="eyebrow" style={{ marginBottom: "18px" }}>Why Choose DermaSynergy</span>
          <h2 className="h2" style={{ maxWidth: "16ch" }}>Ten reasons clinics partner with us.</h2>
        </div>
        <p className="lede" style={{ maxWidth: "42ch" }}>Everything a dermatology practice needs from a skincare supplier — from the formulation bench to the loading dock.</p>
      </div>
      <div className="why-grid reveal">
        {REASONS.map((r) => (
          <div className="why-cell" key={r.title}>
            <svg className="wic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{ICON[r.icon]}</svg>
            <h4>{r.title}</h4>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;
