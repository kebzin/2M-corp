# AI Agent Instructions for 2m-website

## Project Overview

Next.js 16 website for **2M Corp (2MC)** - https://2m-corp.com/ - a software solutions firm based in The Gambia, West Africa, specializing in Data Analytics and Software Development. The company has 20+ years of experience in data analysis, large-scale impact evaluations, surveys, and custom software development for institutions across Africa.

**Core Services:**

- Custom Software Development
- Data Collection & Management Services
- Microsoft 365 Implementation & Consulting
- Data Visualization & Analysis
- Monitoring & Evaluation (M&E)
- Social Protection Systems
- Training in Data Analysis & Statistical Software

**Key Sectors:** Health facilities, banks, international money transfer institutions, government agencies, social protection programs.

Built with App Router, TypeScript, React 19, shadcn/ui components, and Tailwind CSS v4.

## Architecture & Structure

### Layout Pattern

- **Global layout**: `app/layout.tsx` wraps all pages with `<Navbar>` and `<Footer>` components
- `<Navbar>` and `<Footer>` are imported from `components/common/` (currently placeholder implementations)
- Font configuration uses Geist Sans and Geist Mono via `next/font/google`

### Component Organization

- `components/common/`: Shared layout components (Navbar, Footer)
- `components/heroSection/`: Page section components
- `components/ui/`: shadcn/ui primitives (Button, etc.)
- All components use default exports, not named exports

### Path Aliases

Use `@/` prefix for imports (configured in `tsconfig.json`):

```tsx
import { cn } from "@/lib/utils";
import Navbar from "@/components/common/Navbar";
```

## Styling & Design System

### Tailwind CSS v4 with Custom Theme

- **CSS Variables**: Design tokens defined in `app/globals.css` as CSS custom properties (e.g., `--background`, `--foreground`)
- **OKLCH Colors**: All colors use OKLCH format for better perceptual uniformity
- **Dark Mode**: Uses `.dark` class variant (not media query) - `@custom-variant dark (&:is(.dark *))`
- **Radius System**: `--radius-sm/md/lg/xl` calculated from base `--radius: 0.65rem`
- **Theme Inline**: Custom Tailwind theme defined in `@theme inline {}` block

### shadcn/ui Configuration

- Style: `new-york` variant
- RSC enabled (React Server Components)
- Base color: `neutral`
- Uses `lucide-react` for icons
- Components installed via `shadcn` CLI to `components/ui/`

### Utility Pattern

Use `cn()` from `@/lib/utils` to merge Tailwind classes conditionally:

```tsx
import { cn } from "@/lib/utils"
className={cn("base-classes", variant && "variant-classes")}
```

## Development Workflow

### Commands

- `pnpm dev` - Start development server (port 3000)
- `pnpm build` - Production build
- `pnpm start` - Run production build
- `pnpm lint` - Run ESLint (no custom config detected)

### Adding shadcn/ui Components

When adding new UI components, use shadcn CLI:

```bash
pnpm dlx shadcn@latest add <component-name>
```

This installs to `components/ui/` following the project's configuration.

## Component Patterns

### Button Component Example

From `components/ui/button.tsx`:

- Uses `class-variance-authority` (cva) for variant management
- Supports `asChild` prop with `@radix-ui/react-slot` for polymorphic rendering
- Focus states use `focus-visible:ring` pattern with 3px rings
- Uses `data-slot="button"` attribute for component identification

### Component Structure

Components follow this pattern:

```tsx
import React from "react";

const ComponentName = () => {
  return <div>content</div>;
};

export default ComponentName;
```

## Project-Specific Conventions

1. **No Barrel Exports**: Import directly from component files, not index files
2. **TypeScript Strict Mode**: Enabled - all code must be type-safe
3. **CSS Variables Over Direct Colors**: Use theme tokens from `globals.css`, not arbitrary Tailwind colors
4. **React 19**: Latest React features available (useTransition, etc.)
5. **Server Components by Default**: Components are RSC unless `"use client"` directive is added

## Company Information & Contact

**Location:** Fajara M Section, Bakau, KSMD, The Gambia, West Africa  
**Email:** sales@2m-corp.com, info@2m-corp.com, support@2m-corp.com  
**Phone:** +220 449 6266 | +220 248 1590 | +220 594 7766 | +220 995 3346 | +220 676 7617  
**Social:** LinkedIn, Facebook, Twitter  
**Support Portal:** https://2mcorp.powerappsportals.com/

## Content Structure & Navigation

Based on the existing 2M Corp website, expected sections include:

- **Home**: Company overview and value proposition
- **About Us**: Company history, expertise (20+ years), team
- **Services**: Data Services, Software Services, Microsoft 365, Training
- **Products**: Custom solutions portfolio
- **Projects**: Case studies and client work (Government agencies, International organizations, Private sector)
- **Contacts**: Multi-channel contact form with location and support options

## Known Design Patterns

From provided mockups, the site features:

- Contact form section with country code selector
- Statistics/metrics display (company achievements, reach, team size)
- Multi-column footer with service categories and contact information
- Dark theme with navy/slate backgrounds
- Orange/warm accent colors for CTAs
- Project showcase cards with client logos and descriptions

## Next Steps for AI Agents

When implementing from the designs:

1. Extract color values from designs and map to existing OKLCH CSS variables
2. Build reusable form components using shadcn/ui primitives (Input, Select, Textarea)
3. Create responsive grid layouts matching the design system
4. Implement country code selector using shadcn/ui Select component
5. Update Navbar and Footer with actual navigation and content from designs
