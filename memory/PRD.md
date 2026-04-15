# La Casa HP&E Archive — PRD

## Original Problem Statement
Analyze and improve the La Casa HP&E Archive GitHub repository (sofiagrimm/la-casa-hpe-archive). A digital community archive for La Casa Cultural's Historical Preservation & Education committee at Yale University. Transform into a secure, accessible, production-quality digital archive.

## Architecture
- **Stack**: Static HTML/CSS/JS + Supabase (database + auth)
- **Shared CSS**: `styles.css` (design system tokens, components)
- **Shared JS**: `supabase-init.js` (single Supabase client init)
- **Fonts**: Playfair Display (headers), Space Mono (body/UI)
- **Design System**: Forest green (#1a2e1f) + Gold (#c9a84c) + Cream (#f2ead8)
- **Map**: Leaflet.js with CartoDB Dark Matter tiles (20 locations)
- **Hosting**: Railway (serve) / GitHub Pages

## What's Been Implemented

### Security (Jan 2026)
- Removed all hardcoded passwords from admin.html
- Implemented Supabase Auth (email/password) for admin login
- Zero secrets in any tracked file (confirmed via security scan)
- Only Supabase public anon key in frontend (safe by design)

### Code Quality
- Created shared `styles.css` design system (tokens, components, accessibility)
- Created shared `supabase-init.js` (single Supabase initialization)
- Fixed all 10 malformed HTML files
- Added semantic HTML (`header`, `nav`, `main`, `section`, `footer`, roles)
- Added skip-link for keyboard navigation
- Added ARIA labels, roles, aria-live regions
- Added focus-visible styles for keyboard users
- Added meta descriptions

### Features
- Homepage: Bold hero, featured carousel, card grid, CTA
- Collections: Live search + type filters from Supabase
- Map: 20 interactive Yale campus locations
- Timeline: Draggable horizontal timeline (1969–Present)
- Groups: 12 student organizations with external links
- Submit: Full form with all fields required, Contact Us sidebar
- Admin: Full CRUD dashboard (add/edit/approve/feature/delete)
- Storytelling: 3 community voice blocks
- Hub: 4 resource cards

### UX Improvements
- Informative empty states (not just "No results")
- Loading spinners for async content
- Toast notifications in admin
- Cards lift on hover with shadow
- Gold accent on interactive elements
- Footer links to submit page across all pages

## Remaining TODOs
### P0
- Configure valid Supabase API keys (current key may need updating)
- Create admin user in Supabase Auth dashboard
- Enable Row-Level Security (RLS) on archives table

### P1
- Add file upload via Supabase Storage
- Build individual archive detail pages
- Add remaining pages to shared styles.css (reduce inline styles)

### P2
- Audio/oral history player on Storytelling page
- Global search across all content
- "This Day in La Casa History" homepage widget

## Manual Setup Steps
1. Go to Supabase dashboard → Authentication → Users → Add admin user
2. Create `archives` table with schema documented in README.md
3. Enable RLS policies on the archives table
4. Update Supabase URL/key in `supabase-init.js` if using a new project
