# TrustForge AI - Setup Guide

## Why Opening index.html Doesn't Work

This is a **React + Vite project**, not a static HTML website. React needs to be compiled/transpiled before it can run in the browser. When you open `index.html` directly, you see a white screen because:

1. The browser can't execute TypeScript (`.tsx` files)
2. React JSX syntax needs to be transformed to JavaScript
3. The `import` statements need to be resolved by a bundler
4. All dependencies need to be downloaded and linked

## How React Projects Work

```
Source Code (TypeScript/JSX)  →  Build Tool (Vite)  →  Browser-Ready JavaScript
```

**Two modes:**
- **Development**: Vite runs a local server that compiles on-the-fly
- **Production**: Vite creates optimized HTML/CSS/JS files you can deploy

## Step-by-Step Setup

### Step 1: Verify Node.js is Installed

Open a terminal and run:
```bash
node --version
```

You should see `v18` or higher. ✅ (You have v22.19.0)

### Step 2: Install Dependencies

You have two options:

#### Option A: Using npm (Recommended for you)
```bash
npm install
```

#### Option B: Using pnpm (faster, but requires installation)
```bash
# First install pnpm globally
npm install -g pnpm

# Then install dependencies
pnpm install
```

**What this does:** Downloads all packages listed in `package.json` into a `node_modules` folder (~200MB). This includes React, Vite, TypeScript, Tailwind CSS, and all other dependencies.

### Step 3: Start the Development Server

```bash
npm run dev
```

**What this does:**
- Starts Vite development server on `http://localhost:5173`
- Compiles your React/TypeScript code in real-time
- Enables Hot Module Replacement (changes appear instantly without refresh)

### Step 4: Open in Browser

Open your browser and go to:
```
http://localhost:5173
```

**You should now see the TrustForge AI landing page!**

## Common Commands

```bash
# Start development server (http://localhost:5173)
npm run dev

# Build for production (creates 'dist' folder)
npm run build

# Preview production build
npm run preview

# Run linter to check code quality
npm run lint
```

## Troubleshooting

### "Port 5173 is already in use"
Another Vite server is running. Either:
- Close the other terminal running Vite
- Or Vite will automatically use port 5174 instead

### White screen with console errors
1. Check browser console (F12) for error messages
2. Make sure `npm install` completed successfully
3. Try deleting `node_modules` and running `npm install` again

### Changes not appearing
- Make sure the dev server is running (`npm run dev`)
- Try hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Check terminal for compilation errors

### Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Production Deployment

When you're ready to deploy to a web server:

```bash
npm run build
```

This creates a `dist` folder with optimized HTML/CSS/JS files. Upload this folder to:
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any static hosting service

## Understanding the Project Structure

```
TrustForge AI Landing Page/
├── src/                    # Source code
│   ├── App.tsx            # Main landing page component
│   ├── main.tsx           # React entry point
│   ├── components/        # Reusable components
│   └── lib/               # Utilities and SDK setup
├── public/                # Static assets (if any)
├── index.html             # HTML shell (don't open directly!)
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind CSS config
└── tsconfig.json          # TypeScript config
```

## Key Concepts

### What is Vite?
A modern build tool that's **extremely fast**. It uses native ES modules in development and Rollup for production builds.

### What is npm/pnpm?
Package managers that download and manage JavaScript libraries. Like "app stores" for code.

### What is React?
A JavaScript library for building user interfaces with reusable components. Your entire landing page is one React component tree.

### What is TypeScript?
JavaScript with type safety. Files ending in `.tsx` contain TypeScript + JSX (React's HTML-like syntax).

## Quick Start (TL;DR)

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open browser to http://localhost:5173
```

That's it! Your landing page should now be running. 🚀
