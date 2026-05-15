# Reynoso Construction — Marketing Site

Bilingual (English / Spanish) one-page marketing site for **Home Improvements By Reynoso Construction LLC**, a licensed home-improvement contractor based in Staten Island, NY.

Built with Next.js 16 (App Router) + Tailwind CSS v4 + `next-intl`. Deploys free on Vercel.

## What this site does

- Lists all 12 services from the business card.
- Drives leads to WhatsApp (`+1 347-634-2725`) via a contact form that opens WhatsApp with the message pre-filled.
- Provides an always-visible sticky WhatsApp button (bottom-right).
- Includes JSON-LD `GeneralContractor` schema for Google local-business listings.
- Auto-generates `sitemap.xml`, `robots.txt`, dynamic OG image, and `hreflang` alternates between EN/ES.

## Run locally

```bash
npm install
npm run dev
```

Visit:

- `http://localhost:3000` — English version
- `http://localhost:3000/es` — Spanish version

Switch languages from the globe button in the top-right of the page.

## Build & preview

```bash
npm run build
npm run start
```

## Deploy to Vercel (free)

This site uses zero environment variables and no backend services, so deploy is one click.

1. **Push to GitHub** (already done if you cloned this repo from GitHub).
2. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
3. Click **Import** next to the `reynoso-construction-site` repo.
4. Vercel auto-detects the Next.js framework — leave every default as-is.
5. Click **Deploy**.

Within ~60 seconds you'll have a live URL like `https://reynoso-construction.vercel.app`. Share that URL with customers, put it on business cards, etc.

### Optional: custom domain

In the Vercel dashboard → project → **Settings → Domains**, add your domain (e.g., `reynosoconstruction.com`). Vercel walks you through the DNS records and provisions a free SSL certificate.

### Optional: set canonical URL

Once you have a final domain, add an environment variable in Vercel:

- **Key:** `NEXT_PUBLIC_SITE_URL`
- **Value:** `https://your-real-domain.com`

This makes the sitemap, JSON-LD, and OG tags point at the right URL. (Until you set it, the default placeholder is `https://reynoso-construction.vercel.app`.)

## Project layout

```
app/[locale]/        Bilingual home page + opengraph-image
app/sitemap.ts       Sitemap (auto /sitemap.xml)
app/robots.ts        Robots policy
app/icon.svg         Favicon
components/          UI sections + reusable components
i18n/                next-intl routing, navigation, request config
lib/business-info.ts Single source of truth for NAP + service list
lib/whatsapp.ts      WhatsApp deep-link builder
messages/en.json     English copy
messages/es.json     Spanish copy
middleware.ts        next-intl locale routing
```

## Editing the content

All text lives in `messages/en.json` and `messages/es.json`. Edit those files and the site updates — no code changes needed.

All business contact info (phone, email, address, service list) lives in `lib/business-info.ts`. Update once and it propagates to the header, footer, contact form, JSON-LD schema, and OG image.

## Notes for Francisco

- **Spanish copy review:** the Spanish translations were drafted by an LLM. Have a native Spanish speaker (ideally Dominican-Spanish) read through `messages/es.json` and tighten anything that sounds stiff before promoting the URL.
- **Real photos:** the site uses icons rather than fake stock photos. When you have real project photos, drop them into `public/projects/` and the site can be updated to show them.
- **NYC contractor license:** the site currently cites the NY State LLC ID (`#7572472`). If you have a separate **NYC Department of Consumer & Worker Protection Home Improvement Contractor License**, mention it instead — it's a stronger trust signal for NYC customers.

## Tech stack

| Layer | Choice |
|:------|:-------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Styling | Tailwind CSS v4 |
| i18n | `next-intl` v4 |
| Icons | `lucide-react` + inline brand SVGs |
| Type system | TypeScript 5 |
| Hosting | Vercel (free tier) |
| Backend | None — contact form → WhatsApp deep link |

## License

This site is owned by Home Improvements By Reynoso Construction LLC.
