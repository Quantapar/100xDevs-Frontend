<div align="center">

# 100xDevs — Frontend Remake

### A pixel-perfect, production-grade frontend clone of [100xDevs.com](https://100xdevs.com)

![100xDevsFrontend.png](100xDevsFrontend.png)

<br/>

<p align="center">
  <strong>A fully responsive, multi-page web application</strong> that recreates the 100xDevs learning platform's frontend<br/>
  with modern design patterns, smooth animations, and a bold neo-brutalist aesthetic.
</p>

</div>

---

## Highlights

| | Feature | Description |
|---|---|---|
| | **Neo-Brutalist Design** | Bold borders, hard shadows, vibrant accent colors (#0bae95, #04102d) — a distinctive, modern aesthetic |
| | **Fully Responsive** | Pixel-perfect across mobile, tablet, and desktop breakpoints |
| | **Lightning Fast** | Built on Vite 7 with optimized builds, instant HMR, and code splitting |
| | **Multi-Page SPA** | Client-side routing with React Router v7 across 10+ unique pages |
| | **Auth System** | Login/Signup modal with form validation, avatar generation, and session state |
| | **Currency Toggle** | Dynamic INR / USD pricing with context-based state management |
| | **Smooth Animations** | Hover effects, scroll transitions, and micro-interactions throughout |
| | **OG Meta Tags** | Full Open Graph and Twitter Card support for rich social sharing |

---

## Tech Stack

<div align="center">

| Layer | Technology |
|:---:|:---:|
| **Framework** | React 19 |
| **Language** | TypeScript 5.9 |
| **Styling** | Tailwind CSS 4 |
| **Build Tool** | Vite 7 |
| **Routing** | React Router v7 |
| **Icons** | Lucide React |
| **Deployment** | Vercel |
| **Package Manager** | Bun |

</div>

---

## Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | **Landing Page** | Hero, Stats, Info Boxes, Why 100xDevs, Cohorts, Podcasts, Community, FAQ, Contact |
| `/courses` | **Courses Catalog** | Browse all available bootcamps and programs with filtering |
| `/new-courses/:id` | **Course Details** | Detailed course overview with syllabus accordion, pricing, and enrollment CTA |
| `/new-courses/:id/content` | **Course Content** | Module-by-module content viewer for enrolled users |
| `/new-courses/:id/video/:videoId` | **Video Player** | Course video playback page |
| `/store` | **Merch Store** | 100xDevs merchandise catalog with product cards |
| `/store/:id` | **Product Details** | Individual product page with images and purchase options |
| `/profile` | **User Profile** | Customizable profile card with social links |
| `/terms` | **Terms of Service** | Legal terms page |
| `/privacy-policy` | **Privacy Policy** | Privacy policy page |
| `/refund-policy` | **Refund Policy** | Refund policy page |

---

## Project Structure

```
100xDevsFrontend/
├── public/                  # Static assets (favicon, OG images, merch photos)
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, AuthModal
│   │   └── sections/        # Landing page sections
│   │       ├── HeroSection.tsx
│   │       ├── StatsSection.tsx
│   │       ├── InfoBoxesSection.tsx
│   │       ├── WhySection.tsx
│   │       ├── CohortsSection.tsx
│   │       ├── PodcastsSection.tsx
│   │       ├── CommunitySection.tsx
│   │       ├── FaqSection.tsx
│   │       └── ContactSection.tsx
│   ├── context/             # CurrencyContext (INR/USD toggle)
│   ├── data/                # Static data (cohorts, FAQs, merch, podcasts)
│   ├── pages/               # Route-level page components (10 pages)
│   ├── App.tsx              # Root component with routing
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template with OG meta tags
├── vite.config.ts           # Vite configuration
├── vercel.json              # Vercel SPA rewrite rules
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+) or [Bun](https://bun.sh/)

### Installation

```bash
# Clone the repository
git clone https://github.com/Quantapar/100xDevs-Frontend.git
cd 100xDevs-Frontend/100xDevsFrontend

# Install dependencies
bun install
# or
npm install

# Start development server
bun dev
# or
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
bun run build
# or
npm run build
```

---

## Design Philosophy

This project follows a **neo-brutalist design language** characterized by:

- **Bold, thick borders** (`border-2 border-[#04102d]`) creating strong visual hierarchy
- **Hard drop shadows** (`shadow-[8px_8px_0_#0bae95]`) — no blur, pure offset for a punchy feel
- **Two-tone color palette** — Deep navy (`#04102d`) and emerald green (`#0bae95`) as primary accents
- **Generous white space** with large, confident typography
- **Interactive hover states** — elements shift and shadows compress for tactile feedback
- **Rounded cards with sharp shadows** creating depth without losing the flat aesthetic

---

## Key Implementation Details

- **State Management** — React Context API for global currency state; local `useState` for component-level state
- **Routing** — React Router v7 with a catch-all redirect to `/` for graceful 404 handling
- **Responsive Design** — Mobile-first approach with Tailwind's responsive prefixes (`sm:`, `lg:`)
- **Vercel Deployment** — SPA rewrites configured in `vercel.json` for proper client-side routing
- **Type Safety** — Full TypeScript coverage across all components and data models

---

## Live Demo

**[100xdevslanding.vercel.app](https://100xdevslanding.vercel.app/)**

---

<div align="center">

### Built by [Quantapar](https://github.com/Quantapar)

If you found this project useful or interesting, consider giving it a star!

</div>
