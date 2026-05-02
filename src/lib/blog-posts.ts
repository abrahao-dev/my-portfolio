export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  tags: string[]
  featured: boolean
  /** Markdown-ish content rendered by the post page (very small subset). */
  body: string
  /** Optional cover image URL (defaults to /og-image.jpg). */
  image?: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'scalable-ecommerce-shopify-react',
    title: 'How I Drove +455% Sessions and +74% Sales on a Luxury Shopify Store',
    description:
      'A breakdown of the technical SEO, catalog data, and automation playbook I used as the sole engineer for an international luxury fashion brand on Shopify Plus.',
    date: '2026-05-02',
    readTime: '12 min read',
    tags: ['Shopify Plus', 'Technical SEO', 'Catalog Management', 'Klaviyo', 'Case Study'],
    featured: true,
    body: `## TL;DR

Over ten months as the sole engineer for an international luxury fashion brand on Shopify Plus, I drove **+455% platform sessions, +114% orders, and +74% total sales**. None of it came from a redesign or a magic button — it came from compounding wins across four areas: **technical SEO, catalog data hygiene, Core Web Vitals, and marketing automation**.

This post is the playbook.

## The starting line

When I joined, the store had:

- Hundreds of SKUs with inconsistent metadata, missing structured data, and duplicate canonical URLs.
- A theme that was custom-built but rarely revisited — Lighthouse scores stuck in the yellow range, especially on PDPs.
- Decent traffic but bad signal-to-noise: a lot of low-intent sessions, weak organic search visibility, and no AI-search readiness.
- A marketing stack (Klaviyo, Meta CAPI, Google Merchant Center, Amazon Seller Central) that was technically connected but not actually trusted by anyone.

Operator's read: every layer was almost-fine. Nothing was broken in a way that screamed. Everything was bleeding 1–3% somewhere.

## 1. Technical SEO done at the schema level

The fastest wins came from treating SEO as a data problem, not a content problem.

What I did:

- **Cleaned canonical and hreflang.** A store with international ambitions cannot ship duplicate canonicals on collection pages. Fixed at the theme level so it survives merchandising changes.
- **Schema.org JSON-LD on every commercial page.** Product, Offer, AggregateRating, Brand, BreadcrumbList — emitted from Liquid using product metafields as the source of truth. No third-party app, no JS-injected schema. Crawlers and AI search engines see it on first paint.
- **Site architecture for crawlability.** Internal linking from PLP to PDP to "you might also like" was rebuilt around hubs, not flat lists. This is the kind of change that pays back over months, not days.
- **AI-search readiness.** I added a public *llms.txt* describing the brand, catalog structure, and contact paths so models like ChatGPT, Claude, and Perplexity can answer brand questions correctly when users ask.

Result: organic sessions started compounding from week three onward. By month six, organic was the largest channel.

## 2. Catalog data is the lever no one talks about

Shopify is only as good as the data you feed it. With multi-level variants (size × color × fit) across thousands of SKUs, manual edits are not just slow — they introduce errors that downstream tools (Google Merchant, Meta, Klaviyo) silently inherit.

My setup:

- **Matrixify + CSV workflows** for every recurring change: pricing adjustments, inventory sync, metadata backfills, image alt-text generation. Each workflow is a versioned spreadsheet I can re-run.
- **Strict variant naming and metafield conventions.** This is unglamorous work and the highest-leverage thing in any catalog.
- **Validation step before publish.** I wrote a small script that checks the proposed CSV against the live catalog and flags anomalies (negative inventory, malformed prices, missing required metafields).

The win wasn't speed — it was that we stopped breaking things during bulk updates. That trust let merchandising move faster.

## 3. Performance: Core Web Vitals as a daily metric

PDPs were the bottleneck. The fix was unsexy:

- **Image strategy.** Responsive sources, AVIF/WebP, true above-the-fold prioritization. Hero image LCP went from ~3.2s to under 1.6s on 4G.
- **Liquid rendering discipline.** Replaced section blocks that were doing too much per request, deferred non-critical app blocks, removed unused theme assets.
- **Third-party scripts on a leash.** Every pixel and tag goes through Google Tag Manager with Consent Mode v2; nothing loads before user intent except CAPI and CMP.
- **Theme asset budget.** I review the JS bundle weekly. Anything over 200 KB gzipped is on the chopping block.

Lighthouse Performance moved from the high 60s to the low 90s on key templates. CWV passed in Search Console.

## 4. Marketing automation that actually moves revenue

The integrations were already there — they just weren't trusted.

- **Klaviyo.** Rebuilt flows around behavioral triggers, not list pushes. Welcome, browse-abandon, cart-abandon, post-purchase, win-back, and replenishment — each with proper exit conditions and attribution windows.
- **Meta CAPI + Pixel.** Server-side events for the full funnel; deduplication via event_id. Match quality went from "fine" to "excellent."
- **Google Merchant Center & Amazon Seller Central.** Automated feeds with the same metafield source of truth as the storefront. No more "the product page says one thing and the feed says another."
- **AI-assisted content pipelines** for product descriptions and metadata, with human review. This is where AI helps real businesses today — high-volume, structured, low-creativity copy at consistent quality.

## The compounding effect

Each of these moves on its own would have produced a single-digit lift. Stacked together over 10 months, they compounded:

- **+455%** platform sessions
- **+114%** orders
- **+74%** total sales

The numbers reflect what happens when an engineer thinks like an operator: catalog hygiene, SEO, performance, and automation are all the same job.

## What I'd tell another founder

If you run a Shopify store and you're hiring engineering help, the highest-leverage role is rarely "ship a new feature." It's **someone who treats your catalog like a database, your storefront like a search system, and your marketing stack like a single pipeline.**

That's what a Shopify Operator does. And it's the job I love most.

---

*Want this kind of work on your store? [Get in touch](/contact) — I take on a small number of senior engineering and operations engagements each quarter.*`,
  },
  {
    slug: 'shopify-catalog-matrixify-playbook',
    title: 'The Matrixify Playbook: Bulk Catalog Operations Without Breaking Production',
    description:
      'A field guide to running large Shopify bulk imports with Matrixify and CSV workflows — versioning, validation, rollback, and the conventions that keep multi-variant catalogs sane.',
    date: '2026-04-18',
    readTime: '9 min read',
    tags: ['Shopify', 'Matrixify', 'Catalog Management', 'CSV Workflows', 'Operations'],
    featured: true,
    body: `## Why Matrixify is the most underrated tool on Shopify

Most Shopify stores hit a wall around 1,000 SKUs and multi-level variants. The Admin UI is fine for one-off edits, but it doesn't scale to seasonal pricing rounds, metadata backfills, or wholesale price-list changes.

Matrixify (formerly Excelify) turns the entire catalog into a spreadsheet you can read, edit, version, and replay. Used badly, it's a way to nuke production. Used well, it's the operating layer of any serious Shopify business.

This is the playbook I use.

## 1. Treat exports as the source of truth

Every change starts with a fresh export. Not because the previous export is wrong, but because *anything else* on the team might have changed something between then and now. The discipline is: **never edit yesterday's CSV.**

I keep one folder per workflow (e.g. \`pricing-update-2026-04\`, \`metafield-backfill-color-family\`) with three files:

- \`source.csv\` — the fresh export
- \`changes.csv\` — the import-ready file with only changed rows
- \`validation.csv\` — a script-generated diff of what *should* change

If the diff doesn't match expectations, the import doesn't run.

## 2. Strict naming and metafield conventions

Multi-level variants are where stores die. The rule:

- **One option = one axis.** Don't combine "Color" and "Material" into a single option called "Style" — it makes filtering, GMC feeds, and Klaviyo segmentation a nightmare.
- **Predictable handles.** Product handles, variant SKUs, and metafield keys all follow a single naming convention documented in the catalog readme.
- **Required metafields enforced.** Every PDP has the same metafield contract — material, country of origin, care instructions, sustainability tags. No PDP ships without them.

Once this is in place, bulk operations become safe.

## 3. Validate before publish

Matrixify will happily import bad data. The fix is a pre-flight check:

- Negative inventory? Flag.
- Price decrease >50%? Flag.
- Required metafield missing? Flag.
- New SKU collision with an existing one? Flag.

I usually write this as a small Python or Node script that reads the import CSV against the live export and produces \`validation.csv\`. If anything is flagged, a human signs off before the run.

## 4. Run in dry-run mode first

Matrixify supports dry runs. Use them. Always. Especially for:

- First imports of a new workflow
- Imports that touch >100 rows
- Imports that touch pricing, inventory, or anything customer-facing

The dry run produces a per-row "what would change" report. If something looks wrong, you fix the CSV and re-run the dry run. Production never sees the bad version.

## 5. Schedule, don't surprise

Bulk imports during peak traffic are a self-inflicted wound. I schedule:

- **Pricing imports**: Tuesday mornings, low-traffic window.
- **Inventory sync**: every hour during business hours, smaller deltas only.
- **Metafield backfills**: weekends.
- **Anything touching the homepage collection or featured products**: never during a campaign.

## 6. Keep a rollback CSV

Before any non-trivial import, I save the current state of the affected rows as \`rollback.csv\`. If something goes sideways, the rollback is one Matrixify import away. It has saved me twice. Both times paid for the entire workflow ten times over.

## 7. Document the workflow, not just the import

Each recurring operation lives in a markdown file in the catalog repo:

- What it does
- Inputs and outputs
- Validation rules
- Schedule
- Who signs off
- Last run date and outcome

This is the difference between "I import some stuff sometimes" and an operations function. It's also what makes a Shopify Operator role genuinely repeatable.

## Closing

Catalog data is invisible until it breaks. The best stores are the ones where the catalog never breaks — not because no one touches it, but because *every change is a versioned, validated, reversible operation.*

That's what Matrixify gives you when you respect it.

---

*Need help wiring this up on your store? [Reach out](/contact) — happy to do a one-week catalog hygiene sprint.*`,
  },
  {
    slug: 'technical-seo-ai-search-shopify',
    title: 'Technical SEO for AI Search: Making Your Shopify Store Readable to ChatGPT, Claude & Perplexity',
    description:
      'A practical guide to schema markup, llms.txt, structured data, and site architecture that makes your Shopify store surface in AI-powered search and conversational answers.',
    date: '2026-04-02',
    readTime: '10 min read',
    tags: ['Technical SEO', 'AI Search', 'Schema.org', 'Shopify', 'llms.txt'],
    featured: true,
    body: `## Search has changed. Twice.

The first shift was Google adding AI Overviews. The second is users skipping Google entirely and asking ChatGPT, Claude, Perplexity, and Gemini for product recommendations.

Both depend on the same thing: machines understanding your store at the **data layer**, not the visual layer.

This post is how I get a Shopify store from "invisible to AI" to "well-cited by AI."

## 1. JSON-LD on every commercial page

If you do nothing else, do this. AI crawlers and traditional search both rely on Schema.org JSON-LD. On a Shopify store you want, at minimum:

- **Product** with offers, prices, availability, brand, and aggregate rating.
- **BreadcrumbList** matching your collection hierarchy.
- **Organization** sitewide with logo, sameAs, and contact info.
- **FAQPage** for common product, shipping, and return questions.
- **WebSite** with a SearchAction so engines surface your search.

I emit all of this from Liquid using product metafields as the source of truth. No third-party app, no JS injection. The schema is in the HTML on first paint.

## 2. Add a public llms.txt

\`llms.txt\` is the emerging standard ([llmstxt.org](https://llmstxt.org)) for telling LLMs what your site is about, who runs it, and where the canonical content lives. Think of it as a robots.txt for meaning instead of crawl rules.

A good llms.txt for a Shopify store includes:

- Brand name, location, contact.
- A short, factual description of what you sell and to whom.
- Your top collections and key product categories.
- Sizing, shipping, return policies in plain text.
- Links to canonical pages.

Put it at \`/llms.txt\` and a longer version at \`/llms-full.txt\`. Reference both in your sitemap.

## 3. Allow AI crawlers explicitly

Many stores accidentally block GPTBot, ClaudeBot, PerplexityBot, Applebot-Extended, and Google-Extended through restrictive robots.txt rules they don't even know about (often inherited from older themes or apps).

Audit your \`/robots.txt\`. If you want to be cited, allow these explicitly:

\`\`\`
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /
\`\`\`

This won't make you appear; it removes a barrier that prevents you from appearing.

## 4. Site architecture humans and machines both like

LLMs cluster by topic. So does Google. Your collection structure should mirror how a customer would describe what you sell.

- Each collection page should answer one question. ("Men's linen shirts" — not "New arrivals.")
- Internal links should connect collections that belong together.
- Avoid orphan PDPs.
- Make breadcrumbs match your collection hierarchy. JSON-LD breadcrumbs included.

## 5. Hreflang done right

If you sell internationally, you need hreflang. If you have it but it's wrong, you have a problem. Common mistakes:

- Self-referencing hreflang missing from each language version.
- \`x-default\` missing.
- Mismatched canonicals (canonical points to one URL, hreflang points to another).

Fix these before doing anything else. Bad hreflang doesn't just hurt SEO — it confuses AI summaries that try to pick the right version for the user.

## 6. Make your most-asked questions easy to find

LLMs love to quote FAQs. Concrete, factual, well-structured Q&A on shipping, returns, sizing, and care will get cited disproportionately often when users ask "is X store reliable?" or "how does X handle returns?"

Mark up these pages with FAQPage schema and link to them from the footer.

## 7. Watch the right metrics

You can't measure AI citations the way you measure clicks. What you *can* measure:

- **Branded query volume** in Search Console (a leading indicator that AI is referring users).
- **Direct traffic from no-referrer**, especially mobile (often a chat or voice referral).
- **Mention monitoring** — set alerts for your brand on Reddit, X, and via tools like Mention or Brand24.
- **Test queries**: every two weeks, ask the major chat models the questions your customers would ask. See if you're cited. If not, ask why and fix the underlying data.

## Bottom line

AI search isn't a separate channel. It's the same SEO discipline taken seriously: clean data, fast pages, well-structured content, explicit permissions, and a real description of who you are and what you sell.

A Shopify store that is well-built for AI search is also a Shopify store that converts better, ranks higher in classic SEO, and is easier to operate. Win on all three at once.

---

*This is part of how I work as a Shopify Operator. If your store needs a technical SEO and AI-readiness audit, [let's talk](/contact).*`,
  },
]

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug)
}

export function getAllPostSlugs() {
  return blogPosts.map((p) => p.slug)
}
