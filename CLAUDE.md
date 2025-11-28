# CLAUDE.md - Epic Moments Website Guidelines

## Project Overview

**Epic Moments - J Smith Media** is a professional sports photography website specializing in action shots, media day portraits, team events, and athlete headshots. The website URL is **www.epicmoments.photo**.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 (utility-first)
- **Components**: Shadcn/UI (`@/components/ui/*`)
- **Icons**: Lucide React
- **State**: React hooks only (useState, useReducer, useEffect, useRef)

## Critical Constraints

**NO external libraries** for features achievable with native APIs:
- Carousels: Use CSS scroll-snap + `useRef` + `scrollTo()` — NOT Swiper/Embla
- Animations: Use CSS transitions/keyframes — NOT Framer Motion
- Masonry grids: Use CSS Grid — NOT react-masonry-css
- Form validation: Use native HTML5 validation + custom hooks — NOT react-hook-form/zod
- Scroll effects: Use Intersection Observer API — NOT scroll libraries
- Images: Use standard `<img>` with `loading="lazy"`

## Brand Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Space | `#1a0a2e` | Primary dark background |
| Midnight Purple | `#2d1b4e` | Secondary backgrounds, cards |
| Royal Purple | `#4a2c7a` | Hover states, borders |
| Aurora Cyan | `#00d4aa` | Primary CTAs, links, highlights |
| Aurora Teal | `#20b2aa` | Secondary accents |
| Aurora Green | `#4ade80` | Success states, gradients |
| Electric Cyan | `#00ffff` | Glow effects |
| Soft White | `#f0f0f0` | Body text on dark |
| Silver | `#a0a0b0` | Muted text, captions |

### Typography

- **Headings & UI**: Montserrat (400-800 weight)
- **Brand Accent**: Playfair Display (italic for "J Smith Media" tagline)
- **Brand Name**: "EPIC MOMENTS" always uppercase, tracking-wider

### Key Visual Effects

```css
/* Glass morphism */
.glass {
  background: rgba(45, 27, 78, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 212, 170, 0.2);
}

/* Aurora CTA gradient */
.bg-cta-gradient {
  background: linear-gradient(90deg, #00d4aa, #20b2aa, #4ade80);
}

/* Hero overlay */
.bg-hero-overlay {
  background: linear-gradient(to top, rgba(26,10,46,0.95) 0%, rgba(45,27,78,0.6) 40%, transparent 100%);
}

/* Cyan glow */
.glow-cyan {
  box-shadow: 0 0 30px rgba(0, 212, 170, 0.3);
}
```

### Spacing

- Section padding: `py-20 md:py-32`
- Container: `max-w-7xl mx-auto px-6 sm:px-8 lg:px-12`
- Card padding: `p-8 md:p-10`
- Grid gaps: `gap-6 md:gap-8`

## File Structure

```
/app
  layout.js           # Root layout with Navbar, Footer
  page.js             # Home page
  /gallery/page.js    # Gallery page
  /contact/page.js    # Contact page
  globals.css         # Tailwind + custom CSS

/components
  /ui                 # Shadcn components
  Navbar.jsx
  Footer.jsx
  Hero.jsx
  FeaturedGallery.jsx
  ServicesOverview.jsx
  CTASection.jsx
  GalleryGrid.jsx
  GalleryLightbox.jsx
  ContactForm.jsx
  ContactInfo.jsx

/hooks
  useIntersectionObserver.js
  useFormValidation.js

/data
  images.js           # Image placeholder data
  services.js         # Services & brand info
```

## Available Shadcn Components

```jsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
```

## Custom Hooks

### useIntersectionObserver
For scroll-triggered animations. Returns `{ ref, isVisible }`.

### useStaggeredIntersection
For staggered animations on multiple elements. Returns `{ setRef, isItemVisible }`.

### useFormValidation
For form handling. Returns `{ values, errors, isSubmitting, isSuccess, handleChange, handleSubmit, resetForm }`.

## Quick Commands

```bash
# Development
npm run dev

# Build
npm run build

# Start production
npm run start

# Add Shadcn component
npx shadcn@latest add [component-name]
```

## Design Guidelines

### DO:
- Use aurora gradient for key CTAs and highlights
- Keep backgrounds dark to make images pop
- Use generous whitespace between sections
- Add subtle glow effects on hover states
- Use glass morphism for overlays on images
- Use aurora cyan sparingly but impactfully

### DON'T:
- Use pure black (`#000`) - use Deep Space (`#1a0a2e`) instead
- Overuse bright cyan - it should draw attention to key elements
- Use flat solid backgrounds - add subtle gradients
- Make text too small on dark backgrounds
- Forget the brand's premium, cinematic feel
- Use harsh borders - prefer subtle glows and transparency

## Accessibility

- Skip link as first focusable element (implemented in layout)
- Focus states use aurora cyan outline
- Color contrast meets WCAG 2.1 AA
- All interactive elements have visible focus states
- Images use meaningful alt text

## Future Phases (Not Yet Built)

- About page
- Services detail pages
- Blog/MDX setup
