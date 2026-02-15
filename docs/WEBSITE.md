# Epic Moments Website Documentation

This document is the implementation and maintenance guide for the Epic Moments marketing website.

## 1. Overview

Epic Moments is a multi-page sports photography marketing site for J Smith Media.

Primary goals:
- Showcase portfolio work
- Present services and media day pricing
- Capture new inquiries through a contact form

## 2. Technology

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui primitives (Radix wrappers in `components/ui/`)
- Lucide icons

## 3. Local Development

Requirements:
- Node.js 20+
- npm

Commands:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Other scripts:

```bash
npm run lint
npm run build
npm run start
```

## 4. Route Map

### `/` Home
File: `app/page.tsx`

Sections:
- `Hero`
- `FeaturedGallery`
- `ServicesOverview`
- `CTASection`

### `/gallery`
File: `app/gallery/page.tsx`

Sections:
- `PageHeader`
- `GalleryGrid`

Behavior:
- Category tabs filter in-memory image data
- Clicking an image opens a lightbox modal
- Lightbox supports keyboard controls (`Escape`, `ArrowLeft`, `ArrowRight`)

### `/media-day`
File: `app/media-day/page.tsx` (client component)

Sections:
- Hero banner and CTA
- Media day package cards
- Media day showcase grid
- Custom banner pricing and inclusions
- Final booking CTA

Behavior:
- Scroll-based reveal animations via intersection hooks
- Feature/checklist content driven by `data/mediaDay.ts`

### `/contact`
File: `app/contact/page.tsx`

Sections:
- `PageHeader`
- `ContactForm`
- `ContactInfo`

Behavior:
- Client-side form validation for required fields
- Submission is simulated (no backend/API route)
- Success state replaces form after simulated submit

## 5. Global App Structure

### Root layout
File: `app/layout.tsx`

Provides:
- Global metadata (title, description, keywords, Open Graph)
- Persistent `Navbar` and `Footer`
- Skip link for keyboard accessibility (`#main-content`)

### Project directories

```text
app/            Routes + layout + global CSS
components/     Page sections and reusable components
components/ui/  shadcn/ui primitives
data/           Marketing content and image datasets
hooks/          Reusable UI behavior hooks
types/          Shared TypeScript interfaces
lib/            Utilities (e.g., className merge helper)
docs/           Documentation
```

## 6. Content Model (Where To Edit Copy/Data)

All business content is code-driven in `data/`.

### `data/services.ts`
Use this file for:
- Service cards on the home page
- Brand/contact identity (name, email, phone, location, social links)
- Contact form event type options

### `data/images.ts`
Use this file for:
- Home hero image
- Featured work cards on home
- Full gallery image list
- Gallery categories

### `data/mediaDay.ts`
Use this file for:
- Media day package pricing cards
- Banner add-on pricing
- Banner marketing copy/included items
- Media day showcase images

## 7. Component Notes

### Navigation and footer
- `components/Navbar.tsx`: sticky header, active link state, mobile sheet menu, social links
- `components/Footer.tsx`: quick links, social links, contact email, copyright year

### Gallery experience
- `components/GalleryGrid.tsx`: category state, filtered images, lightbox entry
- `components/GalleryLightbox.tsx`: modal image view with keyboard navigation

### Contact experience
- `components/ContactForm.tsx`: validation state, field-level errors, simulated async submit
- `components/ContactInfo.tsx`: contact cards and social profiles from `brandInfo`

### Reusable section primitives
- `components/PageHeader.tsx`
- `components/SectionHeader.tsx`
- `components/PricingCard.tsx`
- `components/FeatureCard.tsx`

## 8. Hooks and UX Behavior

### `hooks/useIntersectionObserver.ts`
- `useIntersectionObserver`: single-element visibility hook
- `useStaggeredIntersection`: multi-element staggered reveal helper

Used widely for scroll-triggered fades and staggered card/image entrance animations.

### `hooks/useFormValidation.ts`
Generic form hook used by `ContactForm`.

Default validation rules include:
- Required: `name`, `email`, `eventType`, `message`
- Email pattern validation
- Minimum message length: 20 chars

Submit behavior:
- Simulates async request with timeout
- Sets success state on completion

## 9. Styling System

File: `app/globals.css`

Includes:
- Brand color variables (deep-space + aurora palette)
- Tailwind theme variable mapping for shadcn compatibility
- Custom keyframes and animation utility classes
- Glassmorphism and gradient utility classes
- Focus/selection/scrollbar styling
- Dark-themed input/select/textarea overrides

Typography:
- `Montserrat` for primary UI text
- `Playfair Display` for brand accent styling

## 10. SEO and Metadata

Global metadata:
- `app/layout.tsx`

Route-level metadata:
- `app/gallery/page.tsx`
- `app/contact/page.tsx`

Note:
- `app/media-day/page.tsx` currently has no route-specific `metadata` export.

## 11. Accessibility

Implemented patterns:
- Skip link to main content in root layout
- `:focus-visible` ring styling in `globals.css`
- Accessible labels for icon-only buttons (menu/lightbox controls)
- Keyboard support in gallery lightbox

## 12. Known Limitations

- Contact form submission is simulated client-side (no backend integration)
- Image assets are placeholders (`picsum.photos`)
- Many images use native `<img>` instead of `next/image`

## 13. Deployment Notes

This is a standard Next.js app and can be deployed to Vercel or any Node host that supports Next.js.

Production flow:

```bash
npm run build
npm run start
```

Before release:
1. Replace placeholder image URLs with production assets
2. Wire contact form to an API endpoint or external form provider
3. Verify metadata/Open Graph content reflects final brand messaging
4. Run `npm run lint` and a production build
