# QuantumNest

> High performance custom websites and automated booking systems for local businesses in Vancouver and Surrey, BC.

Custom built for driving schools, automotive repair shops, restaurants, medical clinics, and hair salons. Optimized for 390px mobile screens, sub-second load times, and conversion copy that turns local searches into daily customers.

---

## Developer and Founder Information

- **Founder:** Yug Patel
- **Location:** Vancouver and Surrey, BC, Canada
- **Phone:** [+1 (604) 603 7976](tel:+16046037976)
- **WhatsApp:** [+1 (604) 603 7976](https://wa.me/16046037976)
- **Email:** [yug256450@gmail.com](mailto:yug256450@gmail.com)
- **Consultation Scheduler:** [Book a 10 minute chat](https://cal.com/quantumnest/intro)

---

## Core Features and Architecture

1. **Floating Transparent Navigation**
   - Translucent frosted glass header (`backdrop-blur-xl bg-white/60`) floating off the top edge.
   - Full screen animated mobile drawer with staggered link arrival.
   - Direct shortcuts for WhatsApp, phone calling, and preview requests.

2. **Hero Section with 3D Objects and Live Industry Switcher**
   - 3D Floating metric cards (99.4 Google score, 0.6s interactive load, simulated live booking alerts).
   - Smooth mouse-tracked 3D perspective tilt on the mobile phone showcase.
   - 5 industry tabs (Driving school, Auto shop, Restaurant, Clinic, Salon) with a 200ms skeleton transition and clickable interactive booking flows.

3. **Mandatory Tagline Reveal**
   - Scroll-driven word-by-word opacity transition from 30% to 100% on a custom cubic bezier curve (`cubic-bezier(0.22, 1, 0.36, 1)`).
   - Built with IntersectionObserver and requestAnimationFrame, respecting reduced motion preferences.

4. **Interactive Revenue Loss Calculator and Scope Builder**
   - **Tab 1 (Lost Leads):** Real-time calculation of monthly customer and dollar losses based on local search volume and average ticket value.
   - **Tab 2 (Scope Builder):** Feature selector with dynamic turnaround estimation and instant WhatsApp pre-fill link generation.

5. **Custom Frosted Dropdown System**
   - Replaces native browser selects with frosted glass menus (`backdrop-blur-xl`).
   - Categorized Phosphor icons for each business niche.

6. **Outcome-Driven Benefits and Problem-to-Solution Grid**
   - Contrasts the traditional DIY / bloated agency trap against direct local engineering.
   - 4 mobile-first outcome cards with nested corner radii.

7. **Technical Benchmarks and Testimonials**
   - Lighthouse metrics in Geist Mono (`99.4` Mobile Score, `0.6s` First Contentful Paint, `100%` Responsive Compliance).
   - Before and after drag comparison slider component included.

8. **Direct Local Developer Accountability Card**
   - In-person meeting offer across Vancouver and Surrey.
   - 100 percent risk free preview guarantee: clients inspect their custom homepage on their phone before paying anything.

9. **Accessible 8-Question FAQ Accordion**
   - Clear answers covering pricing, timelines, hosting, Google ranking, and ongoing maintenance.

10. **Conversion Hub and Complete Ship Requirements**
    - Client-side validated quick contact form with SMS/WhatsApp routing.
    - Toggleable Cal.com scheduling embed.
    - Accessible skip to content link, working Privacy Policy and Terms of Service modals, and a previewable custom branded 404 page.

---

## Tech Stack

- **Framework:** React 18
- **Bundler:** Vite
- **Styling:** Tailwind CSS with custom named utility classes
- **Icons:** Phosphor Icons (`@phosphor-icons/react`)
- **Typography:** Manrope (primary sans-serif) + Geist Mono (metrics and timestamps)
- **Animation:** Native CSS keyframes + IntersectionObserver + requestAnimationFrame (zero heavy runtime animation bloat)

---

## Central Configuration (`SITE_CONFIG`)

All business identity values are managed in one location inside [`src/config.js`](src/config.js):

```javascript
export const SITE_CONFIG = {
  brandName: "QuantumNest",
  founderName: "Yug Patel",
  city: "Vancouver and Surrey, BC",
  phoneDisplay: "+1 (604) 603 7976",
  phoneRaw: "16046037976",
  whatsappNumber: "16046037976",
  email: "yug256450@gmail.com",
  calendarEmbedUrl: "https://cal.com/quantumnest/intro",
};
```

---

## Project Structure

```
├── index.html                           # Manrope and Geist Mono fonts, meta tags
├── package.json                         # Dependencies and build scripts
├── postcss.config.js                    # PostCSS configuration
├── tailwind.config.js                   # Color system, spacing tokens, easing curves
├── README.md                            # Project documentation
├── .gitignore                           # Excludes node_modules, skill files, and build outputs
├── src/
│   ├── config.js                        # SITE_CONFIG and industry category datasets
│   ├── index.css                        # B1 named text styles and keyframe animations
│   ├── main.jsx                         # Application root
│   ├── App.jsx                          # Main assembly and scroll reveal controller
│   └── components/
│       ├── Navbar.jsx                   # Transparent frosted header and mobile drawer
│       ├── Hero.jsx                     # 3D floating objects and interactive app switcher
│       ├── CustomCategorySelect.jsx     # Frosted glass category select with icons
│       ├── TaglineReveal.jsx            # Word-by-word scroll reveal section
│       ├── InteractiveEstimator.jsx     # Revenue loss calculator and scope builder
│       ├── Benefits.jsx                 # Old way vs QuantumNest + 4 outcome cards
│       ├── HowItWorks.jsx               # 3 simple steps
│       ├── TechnicalProof.jsx           # Lighthouse metrics and before/after slider
│       ├── DeveloperAccountability.jsx  # Founder bio and 100% risk free guarantee
│       ├── FaqSection.jsx               # 8 accessible accordion items
│       ├── ConversionHub.jsx            # Validated form and calendar integration
│       ├── Footer.jsx                   # Semantic footer with Privacy and Terms modals
│       └── NotFoundView.jsx             # Custom branded 404 page view
```

---

## Getting Started

### Prerequisites

Node.js v18 or later and npm.

### Installation

```bash
# Clone the repository
git clone https://github.com/yugcpatel/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Local Development

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Production Build

```bash
npm run build
```

The compiled, production-ready static assets are written to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## License

MIT License. Designed and developed by Yug Patel.
