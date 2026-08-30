# Matheus Abrahão — Shopify & E-commerce Engineering Portfolio

Portfolio and SEO surface for a Shopify operator who runs stores for a living, built with
Next.js 15 (App Router), TypeScript and Tailwind. Live at
**[matheusabrahao.com.br](https://matheusabrahao.com.br)**.

This repository is public on purpose: the site sells engineering work, so the code that
builds it is part of the pitch.

## What this site is for

Most developer portfolios list technologies. This one is built to be **found** and to
**convert** — it targets the searches a US or Canadian brand actually types when they need
someone to run their Shopify store, and answers them with measured results instead of
adjectives.

Every keyword targeted here was measured with DataForSEO (volume, difficulty and CPC),
not guessed. The full research lives in [`SEO_KEYWORD_MAP.md`](./SEO_KEYWORD_MAP.md).

## Service pages

Six server-rendered landing pages, each mapped to a validated search intent:

| Route | Primary keyword | Vol/mo (US) | KD |
|---|---|---|---|
| `/shopify-expert` | shopify expert | 1,300 | 7 |
| `/matrixify-expert` | matrixify | 1,300 | 14 |
| `/hire-shopify-developer` | hire shopify developer | 480 | 46 |
| `/klaviyo-expert` | klaviyo expert | 140 | — |
| `/shopify-speed-optimization` | shopify speed optimization | 170 | — |
| `/shopify-migration-expert` | shopify migration expert | 110 | 0 |

All six share a single server component (`src/components/seo-landing.tsx`) — each page is a
data object, so proof metrics and schema stay consistent and change in one place.

## Tech stack

- **Framework:** Next.js 15 (App Router, React Server Components)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with CSS-variable design tokens
- **UI:** Radix primitives, custom components
- **Animation:** Framer Motion
- **3D:** React Three Fiber
- **Deployment:** Vercel
- **i18n:** custom lightweight context (en / pt-BR)

## SEO & AI discoverability

- JSON-LD `@graph` per service page: `Person` + `Service` + `FAQPage` + `BreadcrumbList`
- `sitemap.ts` and `robots.ts` generated at build time, with `en-US` / `en-CA` alternates
- `llms.txt` and `llms-full.txt` so LLM crawlers (ChatGPT, Claude, Perplexity) can read and
  cite the profile accurately — the same GEO work described in the blog
- Server-rendered pages: no client JS required for crawlers to read content
- Static generation with aggressive asset caching and security headers (`next.config.mjs`)

## Local development

```bash
git clone https://github.com/abrahao-dev/my-portfolio.git
cd my-portfolio
npm install
npm run dev          # http://localhost:3000
```

```bash
npm run build        # production build
npm run start        # serve the production build
npm run lint         # eslint
```

Node 18+ recommended.

## Project structure

```
src/
├── app/                    # App Router pages
│   ├── shopify-expert/     # service landing pages
│   ├── matrixify-expert/
│   ├── hire-shopify-developer/
│   ├── klaviyo-expert/
│   ├── shopify-speed-optimization/
│   ├── shopify-migration-expert/
│   ├── blog/[slug]/        # technical blog
│   ├── projects/           # case studies
│   ├── about/  contact/
│   ├── sitemap.ts  robots.ts
│   └── layout.tsx          # metadata + global schema
├── components/
│   ├── seo-landing.tsx     # shared landing renderer + schema builder
│   ├── whatsapp-button.tsx
│   └── ui/                 # design system primitives
├── contexts/               # language context
└── lib/
    └── blog-posts.ts       # blog content as data
```

## Content policy

Client and employer names never appear next to performance metrics. Results are attributed
to anonymous descriptors ("an international luxury fashion brand", "a US building-products
manufacturer"); only the author's own brand is named alongside numbers. Retailer and tool
names (Shopify, Matrixify, Salsify, Klaviyo, Amazon, Lowe's, Home Depot, Menards) appear as
channels and tooling, never as client attribution.

## Contact

- **Email:** contato.matheusabrahao@gmail.com
- **WhatsApp:** [+55 11 98851-2788](https://wa.me/5511988512788)
- **LinkedIn:** [abrahao-dev](https://linkedin.com/in/abrahao-dev)
- **Website:** [matheusabrahao.com.br](https://matheusabrahao.com.br)

Available for Shopify engineering and e-commerce operations work with US and Canadian
brands. Timezone UTC-3 — full overlap with US business hours.

## License

MIT — see [LICENSE](./LICENSE).
