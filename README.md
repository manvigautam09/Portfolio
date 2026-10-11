# Manvi Sharma — portfolio

Personal portfolio built with Next.js (static export), TypeScript and plain CSS.
Lavender theme with light and dark modes, built to WCAG 2.2 AA.

## Editing content

All text lives in [`src/data/profile.ts`](src/data/profile.ts): about, experience, projects
(`featured: true` shows a project on the home page; the rest appear on `/archive`), tech stack
and links. The résumé download is `public/Manvi_Sharma_Resume.pdf`.

Client names are anonymised on purpose ("a global leader in AI computing", "a Fortune 500
agricultural machinery maker"). Keep them that way.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static site in ./out
npm run check:contrast
```

## Accessibility

- Every colour pair is checked by `npm run check:contrast` (4.5:1 text, 3:1 UI). Change a
  colour in `src/app/globals.css`, then run it.
- Skip link, landmarks, one `h1` per page, labelled lists, visible focus rings.
- Theme follows the system setting until the visitor chooses; the choice is remembered.
- The pointer glow and smooth scrolling switch off for `prefers-reduced-motion`.
- External links announce that they open in a new tab.
- Windows High Contrast (forced colours) is supported.

## Deploy on Vercel

1. Go to vercel.com → **Add New → Project** → import `manvigautam09/portfolio`.
2. Keep the defaults (framework: Next.js) and click **Deploy**.
3. Every push to `main` redeploys automatically.

## Custom domain (GoDaddy)

1. In Vercel: **Project → Settings → Domains → Add** your domain (e.g. `manvisharma.dev`).
2. In GoDaddy DNS, add the records Vercel shows. Usually:
   - `A` record, host `@`, value `76.76.21.21`
   - `CNAME` record, host `www`, value `cname.vercel-dns.com`
3. Wait for DNS (minutes to a few hours). Vercel issues HTTPS automatically.
4. In Vercel, add the env var `NEXT_PUBLIC_SITE_URL=https://your-domain` and redeploy so
   link previews use the right URL.
