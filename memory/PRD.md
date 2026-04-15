# La Casa HP&E Archive — PRD

## Original Problem Statement
Analyze and improve the La Casa HP&E Archive GitHub repository (https://github.com/sofiagrimm/la-casa-hpe-archive). A digital community archive for La Casa Cultural's Historical Preservation & Education committee at Yale University.

## Architecture
- **Stack**: Static HTML/CSS/JS + Supabase (database + auth)
- **Fonts**: Playfair Display (headers), Space Mono (body/UI)
- **Design System**: Forest green (#1a2e1f) + Gold (#c9a84c) + Cream (#f2ead8)
- **Hosting**: Static file server (serve)
- **Map**: Leaflet.js with CartoDB Dark Matter tiles
- **Forms**: Supabase insert for submissions

## Pages
| Page | File | Description |
|------|------|-------------|
| Homepage | index.html | Hero, quote, featured carousel, nav cards |
| Collections | collections.html | Searchable/filterable archive browser (Supabase) |
| Map | map.html | Interactive Leaflet map with 11 Yale landmarks |
| Timeline | timeline.html | Horizontal draggable timeline (1969–Present) |
| Groups | groups.html | Student organization cards (6 groups) |
| Mission | mission.html | Project philosophy and features |
| Storytelling | storytelling.html | Community quotes and oral histories |
| Hub | hub.html | Resource links and preservation toolkit |
| Submit | submit.html | Contribution form (writes to Supabase) |
| Admin | admin.html | Dashboard with CRUD (Supabase Auth) |

## User Personas
- **Students/Alumni**: Browse collections, read stories, explore timeline/map
- **Contributors**: Submit archival materials via the Submit page
- **Admins**: Manage archive entries, approve submissions, feature items

## What's Been Implemented (Jan 2026)
- Fixed all 10 malformed HTML files (corrupted footer/CSS fragments)
- Upgraded admin auth from hardcoded password → Supabase Auth (email/password)
- Connected Collections page to Supabase with live search + type filters
- Connected Submit page to Supabase (submissions go to DB as "pending")
- Built full admin dashboard: stats, tabs (All Archives / Pending / Add New), edit modal
- Admin CRUD: add, edit, approve, feature/unfeature, delete archives
- Fixed JavaScript variable conflicts (Supabase double-declaration)
- Added data-testid attributes across all pages
- Improved responsive design (flex-wrap on nav, mobile breakpoints)
- Added Despierta Boricua group card and third storytelling quote
- Enhanced Hub page with resource cards grid

## Prioritized Backlog
### P0 (Critical)
- Configure valid Supabase API keys (current key from original repo may be expired)
- Create admin user in Supabase dashboard

### P1 (High)
- Add file upload support (Supabase Storage) for direct archive submissions
- Image gallery/lightbox view on Collections page
- Connect timeline events to Supabase for dynamic content

### P2 (Medium)
- Add Supabase Realtime for live dashboard updates
- Implement archive detail page (individual item view)
- Add alumni directory or contributor credits page
- Search across all pages (global search)

## Next Tasks
1. Set up valid Supabase project with proper API keys
2. Create `archives` table schema in Supabase if not already done
3. Seed initial archive data
4. Create admin user for Supabase Auth
5. Add file upload to Submit and Admin forms
