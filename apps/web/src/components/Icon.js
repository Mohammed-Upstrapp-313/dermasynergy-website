import React from "react";

/**
 * Icon-key -> SVG map. Keys match the values seeded into Strapi (same set as the
 * PHP CMS Icons.php), so sections/products store an icon name and the frontend renders it.
 */
const ICONS = {
  "shield-check": <><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9.5 12l1.7 1.7L15 10" /></>,
  rows: <path d="M4 7h16M4 12h16M4 17h16" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  "people-plus": <path d="M16 18a4 4 0 00-8 0M12 11a3 3 0 100-6 3 3 0 000 6zM3 18a4 4 0 015-3.5M21 18a4 4 0 00-5-3.5" />,
  people: <path d="M16 18a4 4 0 00-8 0M12 11a3 3 0 100-6 3 3 0 000 6z" />,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /></>,
  search: <><circle cx="11" cy="11" r="6" /><path d="M20 20l-4-4" /></>,
  flask: <path d="M9 3h6M10 3v5l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3" />,
  "check-circle": <><circle cx="12" cy="12" r="8" /><path d="M9 12l2 2 4-4" /></>,
  cube: <path d="M12 2v20M5 9l7-4 7 4M5 9v6l7 4 7-4V9" />,
  truck: <><rect x="3" y="8" width="13" height="10" rx="1" /><path d="M16 11h3l2 3v3h-5" /><circle cx="7" cy="18" r="1.6" /><circle cx="17" cy="18" r="1.6" /></>,
  chart: <path d="M3 17l5-5 4 3 8-8M21 7v5M21 7h-5" />,
  building: <path d="M4 21V8l8-5 8 5v13M9 21v-6h6v6" />,
  eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></>,
  mail: <><path d="M4 6h16v12H4z" /><path d="M4 7l8 6 8-6" /></>,
  phone: <path d="M5 4h4l2 5-3 2a12 12 0 005 5l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />,
  pin: <><path d="M12 21s-7-4.5-7-10a7 7 0 0114 0c0 5.5-7 10-7 10z" /><circle cx="12" cy="11" r="2.5" /></>,
  droplet: <path d="M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z" />,
  sparkle: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.4 2.4M15.6 15.6 18 18M18 6l-2.4 2.4M8.4 15.6 6 18" />,
  smile: <><circle cx="12" cy="12" r="9" /><path d="M8 14c1.2 1.6 6.8 1.6 8 0" /><circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" /><circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" /></>,
  pore: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="2.4" /></>,
  tube: <><rect x="8" y="3" width="8" height="18" rx="3" /><path d="M8 8h8" /></>,
  ph: <path d="M12 3v18M5 8h14M5 8l-2 5a3 3 0 006 0zM19 8l-2 5a3 3 0 006 0z" />,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" /></>,
  face: <><circle cx="12" cy="8" r="3.2" /><path d="M5 20a7 7 0 0114 0z" /></>,
  renew: <><path d="M4 12a8 8 0 0113-6.2M20 12a8 8 0 01-13 6.2" /><path d="M18 3v4h-4M6 21v-4h4" /></>,
  absorb: <path d="M3 8h11a3 3 0 100-6M3 12h15a3 3 0 110 6M3 16h7" />,
  "no-fragrance": <><circle cx="12" cy="12" r="9" /><path d="M6 6l12 12" /></>,
  "all-skin": <><circle cx="9" cy="9" r="3" /><path d="M3.5 19a5.5 5.5 0 0111 0" /><path d="M16 6.5a3 3 0 010 5.8M20.5 18a5.5 5.5 0 00-3.8-5.2" /></>,
};

const FALLBACK = <circle cx="12" cy="12" r="9" />;

const Icon = ({ name, className, strokeWidth = 1.6 }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth}>
    {ICONS[name] || FALLBACK}
  </svg>
);

export default Icon;
