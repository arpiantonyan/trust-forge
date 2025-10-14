# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **TrustForge AI landing page** - a single-page marketing website built with React, TypeScript, Vite, and Tailwind CSS. The site promotes an AI validation service targeting CTOs, VPs of Engineering, and AI Product Managers at B2B SaaS companies.

## Development Commands

**Important**: This is a React + Vite project. You CANNOT open `index.html` directly in a browser. You must use the development server.

```bash
# First time setup - install dependencies
npm install

# Start development server (default port 5173)
npm run dev

# Build for production
npm run build

# Build for development (unminified, with dev flags)
npm run build:dev

# Run linter
npm run lint

# Preview production build
npm run preview
```

**Note**: The project uses `pnpm` in package.json scripts, but you can use `npm` instead. Both work identically.

Once the dev server is running, open your browser to: **http://localhost:5173**

## Architecture

### Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5 with SWC (faster than Babel)
- **Styling**: Tailwind CSS 3.4 with custom gradient themes
- **Animations**: Framer Motion 12
- **Icons**: Lucide React
- **SDK Integration**: @lumi.new/sdk for analytics/tracking

### Project Structure
- **[src/App.tsx](src/App.tsx)** - Main landing page component containing all sections (hero, value prop, process, case study, demo form, footer)
- **[src/components/Logo.tsx](src/components/Logo.tsx)** - Animated logo component with SVG graphics, supports `default`, `white`, and `icon` variants
- **[src/lib/lumi.ts](src/lib/lumi.ts)** - Lumi SDK client initialization for project tracking
- **[src/main.tsx](src/main.tsx)** - React app entry point
- **[index.html](index.html)** - HTML shell with SEO meta tags

### Key Design Patterns

**Single-Page Application**: All content lives in [App.tsx](src/App.tsx) as a single scrollable page with hash-based navigation (`#process`, `#results`, `#demo`).

**Color Scheme**:
- Primary: Blue (`blue-800`, `blue-900`, `indigo-900`) for trust/professionalism
- Accent: Orange (`orange-500`, `orange-600`) for CTAs and energy
- Neutral: Slate for text and backgrounds

**Animation Strategy**: Uses Framer Motion's `initial`, `animate`, `whileInView` patterns for scroll-triggered animations with staggered delays (`delay: index * 0.1`).

**Form Handling**: Controlled components pattern with local state in [App.tsx:8-14](src/App.tsx#L8-L14). Form submission currently logs to console - no backend integration yet.

### Vite Configuration

[vite.config.ts](vite.config.ts) includes special handling for development vs production builds:
- **Development mode** (`pnpm build:dev`): Disables minification, preserves names, enables JSX dev mode
- **Alias**: `@` points to `/src` directory
- **Optimization**: Excludes `lucide-react` from dependency pre-bundling

### Lumi SDK Integration

The [@lumi.new/sdk](src/lib/lumi.ts) is initialized with project ID `p368293418273599488`. This appears to be for analytics/tracking but is not currently used in the app. The SDK provides auth and API capabilities.

## Component Development

### Logo Component
The [Logo component](src/components/Logo.tsx) is a sophisticated SVG-based logo with:
- Animated shield/diamond shape with gradient fills
- Pulsing glow effects using radial gradients
- Bouncing forge particles
- Three display modes controlled by props
- White variant for dark backgrounds (used in footer)

### App Component Structure
1. **Navigation** - Sticky nav with logo and CTA buttons
2. **Hero Section** - Gradient background with animated dashboard mockup
3. **Value Proposition** - 4-column grid of benefits with metrics
4. **Process Section** - 5-phase validation process with detailed steps
5. **Case Study** - Results showcase with before/after metrics
6. **Trust Signals** - Client statistics and testimonials
7. **Demo Form** - Lead capture form with validation
8. **Footer** - Multi-column footer with links and contact info

## Styling Conventions

- Uses Tailwind's utility classes exclusively (no custom CSS beyond [index.css](src/index.css))
- Gradient backgrounds: `from-blue-800 via-blue-900 to-indigo-900`
- Hover effects: `hover:scale-110`, `hover:bg-orange-600` with `transition-all`
- Responsive breakpoints: `md:` (768px), `lg:` (1024px)
- Card styling: `rounded-xl p-8 border border-slate-200 hover:shadow-lg`

## Form Implementation

The demo form ([App.tsx:582-676](src/App.tsx#L582-L676)) collects:
- Full Name (required)
- Work Email (required)
- Company (required)
- Job Title (required)
- Message (optional)

**To implement backend**: Replace `console.log` at [App.tsx:26](src/App.tsx#L26) with API call to your backend endpoint.

## Linting

ESLint configured with TypeScript, React Hooks, and React Refresh rules. Run `pnpm lint` before committing changes.
