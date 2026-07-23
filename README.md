# Wispr Flow — React + Framer Motion recreation

A from-scratch recreation of the [Wispr Flow](https://wisprflow.ai/) marketing
site, built with **React** and **Framer Motion**. This is an educational clone —
it recreates the layout, copy, and motion feel of the original using original
components and placeholder assets. No proprietary code or images are copied.

## Stack

- [Vite](https://vitejs.dev/) — dev server & build
- [React 18](https://react.dev/)
- [Framer Motion](https://www.framer.com/motion/) — scroll reveals & micro-interactions

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Structure

```
src/
├─ App.jsx            # page composition
├─ index.css          # design tokens + component styles
├─ anim.js            # shared Framer Motion variants
├─ data.js            # all page copy (features, pricing, testimonials, …)
└─ components/
   ├─ Navbar.jsx      # sticky nav with animated mobile menu
   ├─ Hero.jsx        # headline + animated "listening" waveform
   ├─ LogoStrip.jsx   # social-proof logo row
   ├─ Features.jsx    # 6-card feature grid
   ├─ Stats.jsx       # headline metrics
   ├─ CommandMode.jsx # voice-editing demo with command chips
   ├─ Languages.jsx   # 100+ languages cloud
   ├─ Testimonials.jsx
   ├─ Pricing.jsx     # Basic / Pro / Enterprise tiers
   ├─ CTA.jsx         # closing call to action
   ├─ Footer.jsx
   └─ Icons.jsx       # inline SVG icon set
```

## Features

- Fully responsive (desktop → mobile) with a working animated mobile menu
- Scroll-triggered reveal animations throughout via Framer Motion
- Signature flowing gradient used as an accent across the design
- Respects `prefers-reduced-motion`
- Zero external asset dependencies — all icons are inline SVG

---

*Design and content adapted from wisprflow.ai for learning purposes.*
