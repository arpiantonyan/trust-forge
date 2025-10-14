# TrustForge AI Landing Page

A modern, responsive landing page for TrustForge AI - an enterprise AI validation platform built with React, TypeScript, Vite, and Tailwind CSS.

## Quick Start

### Prerequisites
- Node.js 18 or higher (you have v22.19.0 ✅)
- npm (comes with Node.js)

### Installation & Running

```bash
# 1. Install dependencies (first time only)
npm install

# 2. Start development server
npm run dev

# 3. Open browser to http://localhost:5173
```

That's it! Your landing page should now be running at [http://localhost:5173](http://localhost:5173)

## Why Can't I Open index.html Directly?

This is a **React application**, not a static HTML website. It requires a build process:

- ❌ Opening `index.html` in browser → White screen (doesn't work)
- ✅ Running `npm run dev` → Full website (works correctly)

React code needs to be compiled from TypeScript/JSX into browser-readable JavaScript. The Vite development server handles this automatically.

## Available Scripts

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Build optimized production files to /dist
npm run preview  # Preview production build locally
npm run lint     # Check code for errors
```

## Project Structure

```
src/
├── App.tsx              # Main landing page (all sections)
├── main.tsx             # React entry point
├── components/
│   └── Logo.tsx         # Animated TrustForge logo
└── lib/
    └── lumi.ts          # Analytics SDK initialization
```

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite 5** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Icon library

## Features

- Fully responsive design (mobile, tablet, desktop)
- Smooth scroll animations
- Interactive demo form
- SEO optimized
- Fast loading with Vite

## Need More Help?

See [SETUP.md](SETUP.md) for detailed setup instructions and troubleshooting.

See [CLAUDE.md](CLAUDE.md) for architecture details and development guidelines.

## Building for Production

```bash
# Create optimized build
npm run build

# Files will be in /dist folder - upload to your hosting provider
```

Upload the `dist` folder to services like Netlify, Vercel, or any static hosting.

---

**Questions?** Read the detailed [SETUP.md](SETUP.md) guide.
