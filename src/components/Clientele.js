import React from "react";
import Img from "./Img";

/** Clientele logo row — shared by Home and About. Logos from data. */
const LOGOS = [
  { file: "client-sn-hospital.png", name: "SN Hospital" },
  { file: "client-dr-netis.png", name: "Dr. Neti's Skin Hair & Nail Clinic" },
  { file: "client-eeshritha.png", name: "Eeshritha Skin & Hair Institute" },
  { file: "client-tripura.png", name: "Tripura Skin and Cosmetology Clinic" },
];

const Clientele = () => (
  <section className="section-pad tint">
    <div className="wrap">
      <div className="section-head reveal" style={{ maxWidth: "none", display: "grid", gridTemplateColumns: "1.25fr .75fr", alignItems: "end", gap: "40px" }}>
        <div>
          <span className="eyebrow" style={{ marginBottom: "18px" }}>Our Clientele</span>
          <h2 className="h2" style={{ maxWidth: "18ch" }}>Trusted by skin &amp; hair specialists.</h2>
        </div>
        <p className="lede" style={{ maxWidth: "42ch" }}>Dermatology clinics, skin &amp; hair institutes, and hospitals choose DermaSynergy formulations for their patients — and keep coming back.</p>
      </div>
      <div className="client-logos reveal">
        {LOGOS.map((l) => (
          <div className="clogo" key={l.file}>
            <Img name={l.file} alt={l.name} objectFit="contain" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Clientele;
