# Authors Cabin — 11ty + Netlify CMS Starter

A cozy, lightweight blog for authorscabin.com. Write posts in Markdown or use the `/admin` editor.

## Features
- **Easy posting** via Netlify CMS (`/admin`) — creates Markdown files in `src/posts/`
- **Cozy theme** with warm palette and serif typography
- **YouTube shortcode**: `{% youtube "VIDEO_ID" %}`
- **Discord CTA** on every post + footer social links
- **RSS feed** at `/feed.xml`
- **Pure static** (no server), deploy to Netlify/Vercel/GitHub Pages

## Quick start
```bash
# 1) Clone the repo and install (Node 18+)
npm install

# 2) Run locally
npm run dev
# open http://localhost:8080

# 3) Build
npm run build
```

## Deploy (Netlify recommended)
1. Push to a Git repo (GitHub).
2. Create a new site on Netlify, connect the repo.
3. Build command: `npm run build`  — Publish directory: `_site`
4. Enable **Identity** + **Git Gateway** (if using the built-in CMS).
5. Visit `/admin`, log in, and start posting.

### Customize
- Update site metadata in `src/_data/site.json`
- Theme styles in `src/assets/styles.css`
- Layouts in `src/_includes/layouts/`
- Social links set from `site.json`

### Logo
Replace `src/img/logo.png` with your logo (same filename). It appears in the header and OG image defaults.

### Embeds
Use `{% youtube "VIDEO_ID" %}` inside any Markdown post.

### Discord funnel
Header nav + footer + post CTA all link to your Discord invite.

---

MIT License