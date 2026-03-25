# GTG Perfumes — Fine Fragrance Storefront

A premium, fully responsive e-commerce landing page for GTG Perfumes, built with vanilla HTML, CSS, and JavaScript. No frameworks. No dependencies.

---

## Live Preview

> Deploy via GitHub Pages and paste your URL here.
> `https://Dhanush-1213.github.io/gtg-perfumes-storefront`

---

## Screenshots

| Desktop | Mobile |
|--------|--------|
| Full hero, gallery, product form | Stacked single-column layout |

---

## Features

- **Sticky header** with blur backdrop and animated underline nav links
- **Hamburger menu** — accessible, aria-expanded toggled on tablet & mobile
- **Hero section** — floating bottle animation, social proof avatars, gold radial glow
- **Animated marquee** — seamless infinite scroll ticker strip
- **Product image gallery** — arrows, thumbnail strip, dot indicators, fade transition, mobile swipe support
- **Dynamic product form** — two radio groups (fragrance + purchase type) that update the cart link and selection summary in real time
- **Expandable subscription panels** — slide open when subscription options are selected
- **Benefits section** — hover-animated feature cards with gold top-line reveal
- **Stats section** — count-up animation triggered on scroll via IntersectionObserver
- **Ingredients section** — elegant accordion-style note rows
- **Comparison table** — highlighted GTG column with gold accent
- **Premium favicon** — inline SVG, no external file needed
- **Scroll fade-up animations** — elements animate in as they enter the viewport
- **Noise texture overlay** — subtle grain for a luxury print feel

---

## Project Structure

```
gtg-perfumes-storefront/
├── index.html          # Main page (self-contained, all CSS + JS inline)
├── assets/
│   ├── hero-bottle.svg
│   ├── product-1.svg
│   ├── product-2.svg
│   ├── product-3.svg
│   └── product-4.svg
├── css/
│   └── styles.css      # Standalone stylesheet (legacy reference)
├── js/
│   └── script.js       # Standalone JS (legacy reference)
└── README.md
```

> The production `index.html` is fully self-contained — CSS and JS are embedded inline for single-file deployment.

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Markup | Semantic HTML5 |
| Styling | Vanilla CSS (custom properties, clamp, grid, flexbox) |
| Scripting | Vanilla JavaScript (ES6+, IntersectionObserver) |
| Fonts | Google Fonts — Cormorant Garamond + DM Sans |
| Images | Unsplash (via CDN URL) |
| Icons | Unicode / emoji (no icon library needed) |

---

## Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| `> 1024px` | Full two-column desktop layout |
| `≤ 1024px` | Product section stacks, footer 2-column |
| `≤ 768px` | Single column, image above hero text, 2-col stats |
| `≤ 520px` | Full mobile — stacked actions, single-col stats |

---

## Getting Started

### Run locally

Just open `index.html` in your browser — no build step needed.

```bash
# Option 1 — open directly
open index.html

# Option 2 — serve locally (avoids any CORS quirks)
npx serve .
# or
python -m http.server 8080
```

### Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/Dhanush-1213/gtg-perfumes-storefront.git
git branch -M main
git push -u origin main
```

Then go to **GitHub repo → Settings → Pages → Source: main branch / root** and save.

---

## Customisation

| What | Where |
|------|-------|
| Brand colours & tokens | `:root` variables at top of `<style>` in `index.html` |
| Fragrance options | `<fieldset>` radio groups in the product form |
| Gallery images | `images[]` array in the `<script>` block |
| Pricing | `.cta-price` element in the CTA box |
| Cart URL | `addToCartLink.href` in the JS `updateCart()` function |
| Stats numbers | `data-target` attributes on `.count-up` elements |
| Nav links | `<nav class="primary-nav">` in the header |

---

## Accessibility

- Semantic HTML5 landmarks (`header`, `main`, `footer`, `nav`, `article`)
- `aria-label` and `aria-expanded` on interactive controls
- `role="list"` / `role="tab"` on gallery navigation
- Keyboard-navigable product form (native radio inputs)
- Decorative elements marked `aria-hidden="true"`

---
