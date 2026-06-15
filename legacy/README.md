# DermaSynergy — B2B Website

Static multi-page website (HTML + CSS). No build step or dependencies — open `index.html` in any browser or serve the folder with any static host.

## Pages
- `index.html` ............ Homepage (Hero, About, What We Do, Approach, Process, Why Choose, Products, Clientele, CTA, Footer)
- `About Us.html` ......... About (story, Mission & Vision, Why Choose, Clientele)
- `Contact Us.html` ....... Contact details + enquiry form (front-end validation only — wire to a backend/email service)
- `product-rebalanse.html`  Rebalanse Exfoliating Cleanser detail page
- `product-revivon.html`    Revivon Copper Peptide Serum detail page

## Files
- `styles.css` ............ All shared styles (design tokens live in `:root` at the top)
- `image-slot.js` ......... Drag-and-drop image placeholder web component (homepage only)
- `assets/` ............... Product photography, client logos, lab imagery

## Design tokens (top of styles.css)
- Primary mint: #64ccad   ·   Deep teal: #1c5f51   ·   Text/slate: #313c45
- Type: Newsreader (serif headings), Hanken Grotesk (body), monospace labels — loaded via Google Fonts in each page `<head>`

## Notes for the developer
- The contact form (`Contact Us.html`) is client-side only. Hook the `#contactForm` submit handler to your backend / email API.
- Social links in the footer use placeholder `#` hrefs.
- Reveal-on-scroll uses a small IntersectionObserver in each page's inline `<script>`.
- Client logos are real partner marks in `assets/client-*.png`.
