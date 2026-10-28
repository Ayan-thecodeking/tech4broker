# Tech4Broker Website: Project Rules & Architecture

These rules apply to every task in this project. Follow them unless explicitly instructed otherwise.

## 1. Project Overview

Build a premier marketing website for **Tech4Broker**, an institutional brokerage technology & infrastructure provider. The site features a sleek dark fintech theme, glowing cyan/blue accents, glassmorphic card elements, and high-performance interactive sections.

## 2. Tech Stack

- **Framework:** Next.js (App Router) + TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Animation:** GSAP + ScrollTrigger, using the `@gsap/react` `useGSAP` hook
- **Smooth Scroll:** Lenis, synced with GSAP ScrollTrigger
- **Images:** `next/image`
- **Fonts:** `next/font/google` (Inter)
- **Icons:** `lucide-react`
- **Package Manager:** npm

## 3. Folder Structure

```
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    layout/        Navbar.tsx, Footer.tsx
    sections/      Hero.tsx, Solutions.tsx, Platform.tsx, Liquidity.tsx, etc.
    ui/            Button.tsx, ArrowButton.tsx, Pill.tsx, SectionLabel.tsx
  lib/             gsap.ts, utils.ts
  providers/       app-providers.tsx (Lenis + ScrollTrigger sync)
  data/            Content, feature lists, pricing/plans data
public/
  images/          Site assets and graphics
  reference/       Design mockups & references
```

## 4. Design Guidelines

- **Theme:** Rich dark fintech aesthetic (`#070913` base background, glassmorphism, cyan/blue neon accents).
- **Typography:** Inter, clean letter spacing, fluid clamp sizes.
- **Components:** Modular, accessible, responsive across mobile (375px), tablet (768px), and desktop (1024px+).
- **Code Standards:** TypeScript strict, semantic HTML, functional components, server components by default with `"use client"` only where state/animation is needed.
