# La Casa HP&E Archive

A digital community archive for La Casa Cultural's Historical Preservation & Education (HP&E) committee at Yale University.

## What this is

A multi-page static HTML site that models a community-centered digital archive. It includes:

- Multimedia collections browser (photos, audio, video, flyers, oral histories)
- Interactive Yale memory map with campus landmarks (Leaflet.js)
- Horizontal timeline system (1969 – present)
- Affiliated group profiles (MEChA, Ballet Folklórico, Sabrosura, etc.)
- Public contribution form (writes to Supabase)
- Admin dashboard with CRUD operations (Supabase Auth)
- Forest green & gold visual system
- Fully responsive, accessible multi-page layout

## Architecture

```
├── index.html          Homepage and portal
├── mission.html        Project mission and ethics
├── collections.html    Multimedia archive browser (Supabase-powered)
├── map.html            Interactive campus map (Leaflet.js)
├── timeline.html       Historical timeline (1969–present)
├── groups.html         Student group profiles with links
├── storytelling.html   Oral histories and community voices
├── hub.html            Resource center and preservation toolkit
├── submit.html         Public contribution form (Supabase insert)
├── admin.html          Admin dashboard (Supabase Auth required)
├── styles.css          Shared design system
├── supabase-init.js    Shared Supabase client initialization
├── serve.json          Static server config (Railway / serve)
└── package.json        Dependencies and start script
```

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#1a2e1f` | Page background |
| Surface | `#223327` | Cards, panels |
| Text | `#f2ead8` | Primary text (cream) |
| Muted | `#9aab97` | Secondary text (sage) |
| Accent | `#c9a84c` | Links, buttons, highlights (gold) |
| Font (display) | Playfair Display | Headings |
| Font (body) | Space Mono | Body text, UI |

## Local Development

```bash
# Install dependencies
npm install

# Start local server
npm start
# → http://localhost:3000
```

The site is static HTML — no build step required. `serve` hosts the files locally.

## Deployment

### Railway
- Connect your GitHub repo to Railway
- Railway will detect `package.json` and run `npm start`
- The `serve.json` configures clean URLs and disables directory listings

### GitHub Pages
- Enable GitHub Pages in repo settings (Source: main branch, root)
- All `.html` files are served directly — no build required

### Vercel / Netlify
- Point to the repo root; the site works out of the box

## Environment Variables

This project uses **no server-side environment variables**. All configuration is in the frontend:

| Variable | Location | Description |
|----------|----------|-------------|
| Supabase URL | `supabase-init.js` | Supabase project URL (public) |
| Supabase anon key | `supabase-init.js` | Supabase public anon key (safe for frontend) |

> **Security note:** The anon key is a *public* key with row-level security (RLS) enforced by Supabase. It is safe to include in frontend code. Never put the `service_role` key in this repo.

## Admin Authentication

Admin access uses **Supabase Auth** (email + password). No passwords are stored in this repository.

### Setup
1. Go to your [Supabase dashboard](https://supabase.com/dashboard)
2. Navigate to **Authentication → Users → Add User**
3. Create an admin user with email and password
4. That user can now log in at `/admin.html`

### How it works
- `admin.html` calls `sbClient.auth.signInWithPassword({ email, password })`
- On success, the dashboard UI is revealed and data loads from Supabase
- Session state is managed by Supabase (not `sessionStorage` or cookies we control)
- Logout calls `sbClient.auth.signOut()`

## Supabase Schema

The site expects an `archives` table with these columns:

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid (PK) | Auto-generated |
| `title` | text | Archive item title |
| `description` | text | Detailed description |
| `media_type` | text | photograph, document, flyer, oral-history, video, audio, other |
| `organization` | text | Associated student group |
| `archive_date` | text | Date or date range (e.g., "1974", "March 1985") |
| `thumbnail_url` | text | URL to thumbnail image |
| `status` | text | `pending` or `published` |
| `featured` | boolean | Show on homepage carousel |
| `submitter_name` | text | Contributor name (from submit form) |
| `submitter_email` | text | Contributor email |
| `file_link` | text | Link to uploaded files |
| `created_at` | timestamptz | Auto-generated |

## How to Extend

### Adding a new page
1. Create `your-page.html` in the root
2. Include `<link rel="stylesheet" href="styles.css" />` for shared styles
3. If it needs Supabase, add both script tags:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
   <script src="supabase-init.js"></script>
   ```
4. Add a link in the `<nav>` of all pages

### Adding archive items
- **Via admin dashboard:** Log in at `/admin.html` → "Add New" tab
- **Via public form:** Submit at `/submit.html` (creates a `pending` entry)
- **Directly in Supabase:** Insert rows into the `archives` table

## Submissions

Public contributions are submitted via `submit.html` and stored in Supabase with `status: 'pending'`. Admins review and publish them via the admin dashboard.

## Security

- **No hardcoded secrets** in any tracked file
- Admin auth is handled exclusively by Supabase Auth
- Only the Supabase `anon` (public) key is in frontend code
- Row-Level Security (RLS) should be enabled on your Supabase tables

## License

Concept prototype for La Casa Cultural at Yale University. Memory is ours. Build it together.
