import { SeoLanding, seoMeta, type SeoLandingData } from "@/components/seo-landing"
import type { Metadata } from "next"

export const metadata: Metadata = seoMeta({
  slug: "shopify-expert",
  title: "Shopify Expert — Senior Shopify Developer & SEO Expert for Hire | Matheus Abrahão",
  description:
    "Shopify expert developer for hire, working with US and Canadian brands. 6+ years on Shopify, currently operating paired B2C and B2B Shopify Plus storefronts for a US manufacturer. Shopify theme development, checkout customization, custom apps, Shopify SEO and CRO. +455% sessions and +74% revenue for an international luxury fashion brand.",
})

const data: SeoLandingData = {
  slug: "shopify-expert",
  eyebrow: "Available for new Shopify projects",
  h1: "Shopify Expert",
  lede:
    "I am a Shopify expert developer with 6+ years of hands-on store building — a senior engineer who has also run his own Shopify business end to end. If you need a Shopify developer for hire who understands both the code and the P&L, you are in the right place.",
  intro: [
    "Most people who call themselves a Shopify expert have only ever worked from a ticket queue. I started differently: my first Shopify store was my own. I built the theme, wrote the Liquid, set up the payment and shipping stack, ran the ads, packed the boxes and answered the support emails. That store, Martin (martin4shop.com.br), went on to process 1,959 orders and roughly R$552,000 in revenue. Every technical decision I make for a client is shaped by having personally paid the price of a bad one.",
    "Since then I have worked as the sole engineer for an international luxury fashion brand, where I rebuilt the storefront around Core Web Vitals, corrected the technical SEO foundation, cleaned up a sprawling catalog and wired the marketing stack together properly. Over that engagement the store grew +455% in sessions, +114% in orders and +74% in revenue. I have also run a two-storefront setup (B2C and B2B) with 7+ sales channels kept in sync for a US manufacturer with a difficult multi-variant catalog — the kind of project where a single bad CSV import can take a catalog offline for a day.",
    "I work as an individual contractor, not an agency. You talk to the person writing the code. No account manager, no junior developer quietly assigned to your store, no ticket that sits for a week. That is usually the difference between a Shopify expert developer who ships and a vendor who bills.",
  ],
  playbookLine:
    "Four stores, four verticals, one playbook: fix the data, fix the speed, fix the funnel — at enterprise scale and at startup scale.",
  servicesTitle: "What a Shopify expert actually does for you",
  services: [
    {
      title: "Custom Shopify theme development",
      body:
        "Liquid, Online Store 2.0 sections, metaobjects and JSON templates. I build new themes from a design file or extend the one you already run, keeping the code readable so the next developer does not have to start over. No page builder bloat.",
    },
    {
      title: "Storefront and PDP engineering",
      body:
        "Reactive variant selectors, tiered pricing, AJAX add-to-cart, cart drawers, free-shipping progress bars, bundles and upsell modules — the pieces that move average order value on stores that already have traffic.",
    },
    {
      title: "Technical SEO and structured data",
      body:
        "Crawl and index audits, collection and facet architecture, canonical rules, product and FAQ schema, internal linking and content structure. This is what drove the +455% sessions result, and it compounds long after the invoice is paid.",
    },
    {
      title: "App integrations and custom apps",
      body:
        "Klaviyo, Meta CAPI, Google Merchant Center, Amazon Seller Central, review and subscription apps, ERP and 3PL syncs. When no app fits, I build a private Shopify app with the Admin API instead of duct-taping three subscriptions together.",
    },
    {
      title: "Catalog data operations",
      body:
        "Matrixify and CSV workflows, bulk edits across thousands of SKUs, multi-level variant configuration, metafield migrations and inventory synchronisation across channels — done on a staging copy first, with a rollback file kept ready.",
    },
    {
      title: "Speed, CRO and analytics",
      body:
        "Core Web Vitals work on real Shopify constraints, third-party script auditing, GA4 and server-side tracking that reports numbers you can trust, and conversion experiments prioritised by revenue impact rather than by opinion.",
    },
  ],
  extraSections: [
    {
      title: "B2C and B2B on Shopify, at real volume",
      intro:
        "Most Shopify developers have only ever built direct-to-consumer stores. I run both sides daily for a US building-products manufacturer — a B2C storefront and a B2B storefront sharing one enterprise-scale catalog with multi-level variants.",
      items: [
        {
          title: "Two storefronts, two different rulebooks",
          body:
            "B2C and B2B are not the same store with a different theme. Pricing logic, customer accounts, tax handling, minimum order rules, payment terms and checkout behaviour all diverge, and a change made carelessly on one side leaks into the other. I keep both aligned where they should be and separated where they must be.",
        },
        {
          title: "MAP and MSRP pricing discipline",
          body:
            "Manufacturer pricing policies are contractual, not cosmetic. Channel-specific price rules, MAP floors and MSRP display have to hold across the storefronts and every connected sales channel, which means the rules live in the data layer rather than in someone's memory.",
        },
        {
          title: "Catalog syndication to national retailers",
          body:
            "Product data published from the same source of truth out to Lowe's, Home Depot in the US and Canada, Menards, Amazon and KB, managed through Salsify PIM and Matrixify. Each retailer has its own attribute, image and content requirements to satisfy before a listing goes live.",
        },
        {
          title: "The real operating stack",
          body:
            "Matrixify, Shopify Flow, Search & Discovery, Markets, Bundles, Shopify Collective, order-limit and form-builder apps, upsell apps, plus the Google, YouTube, Facebook and Instagram channels — configured to work together instead of fighting each other for the same page.",
        },
      ],
    },
    {
      title: "Shopify SEO expert work",
      intro:
        "Search is the cheapest traffic a Shopify store will ever buy, and on most stores it is broken in ways an SEO agency cannot fix because the fix lives in Liquid. I work as a Shopify SEO expert and a developer at the same time, which removes the usual handoff where a consultant writes a recommendation nobody can implement.",
      items: [
        {
          title: "Crawl budget and index bloat",
          body:
            "Shopify generates duplicate product URLs under every collection, paginated facets, and tag pages that multiply into thousands of near-identical documents. I map what Google is actually crawling, canonicalise the duplicates, block what should never have been crawlable and get the crawl budget pointed at pages that can rank.",
        },
        {
          title: "Collection and facet architecture",
          body:
            "Most stores put every product in one flat collection and lose every mid-tail search term. I design the collection tree around how people actually search, build filterable sub-collections that are indexable when they have real demand behind them, and keep the rest out of the index.",
        },
        {
          title: "Structured data that validates",
          body:
            "Product, Offer, AggregateRating, BreadcrumbList, FAQPage and Organization markup written into the theme rather than injected by an app. Valid schema is what gets a store into rich results, and increasingly what gets it quoted by AI answer engines.",
        },
        {
          title: "Internal linking and content structure",
          body:
            "Heading hierarchy, descriptive anchor text, collection-to-product and blog-to-collection links, and hub pages for the terms worth owning. This is unglamorous work that compounds for years, and it is the largest single contributor to the +455% sessions result on the luxury fashion storefront.",
        },
        {
          title: "Migration and redirect safety",
          body:
            "If your SEO fell off a cliff after a replatform or a theme change, the cause is almost always a redirect map that was never built properly. I diagnose it against server logs and Search Console rather than guessing. See the dedicated Shopify migration page for the full process.",
        },
      ],
    },
    {
      title: "Specialisations inside Shopify",
      intro:
        "Shopify is one platform with a dozen very different jobs inside it. These are the ones I am hired for most often, and the ones where a generalist agency usually stalls.",
      items: [
        {
          title: "Shopify theme developer",
          body:
            "Online Store 2.0 sections, blocks, JSON templates and metaobjects, written so a merchandiser can rearrange a page without opening a ticket. I extend Dawn and commercial themes as often as I build from scratch, and I refuse to ship a theme that depends on a page-builder subscription to stay editable.",
        },
        {
          title: "Shopify Plus developer",
          body:
            "Shopify Functions for discounts, payment and delivery customisation, checkout extensibility with UI extensions, B2B company accounts and catalogs, Shopify Flow automations, Markets and multi-store setups. I also tell clients when a problem they have does not actually justify the Plus price tag.",
        },
        {
          title: "Shopify checkout customization",
          body:
            "Since checkout.liquid was retired, checkout customization means checkout extensibility: UI extensions, branding API, and Functions that change how discounts, shipping and payment options behave. Anything still relying on checkout.liquid scripts needs migrating, and that migration is a project of its own rather than an afternoon.",
        },
        {
          title: "Custom apps and the Admin API",
          body:
            "Private and custom Shopify apps in Node or Remix against the Admin GraphQL API, webhooks with proper retry and idempotency handling, and ERP, PIM or 3PL integrations. Built when no app in the store solves it, not as a default.",
        },
        {
          title: "Stripe and payment integrations",
          body:
            "Shopify Payments, Stripe, PayPal and local gateways, plus the reconciliation work nobody scopes for: matching payouts to orders, handling partial refunds and chargebacks, and getting the numbers in your accounting system to agree with the numbers in Shopify.",
        },
        {
          title: "Shopify developer partner work",
          body:
            "I also work as a subcontracted developer for agencies and Shopify Partners who need senior Liquid, catalog or integration capacity without hiring a full-time engineer. White-labelled, under your paperwork, invoiced to you.",
        },
      ],
    },
  ],
  stepsTitle: "How working with me goes",
  steps: [
    {
      title: "Free 30-minute call",
      body:
        "You tell me what is broken or what you want to build. I ask about traffic, order volume, current theme and apps, and where the money is actually leaking. If I am not the right person for the job, I tell you on that call and point you elsewhere.",
    },
    {
      title: "Written scope and fixed price",
      body:
        "Within two business days you get a short document: what I will do, what I will not do, the deliverables, the timeline and the price. Small jobs are fixed-price. Ongoing work is a monthly retainer with a defined number of hours.",
    },
    {
      title: "Build on a staging theme",
      body:
        "Nothing touches your live store until you have seen it. I work on a duplicated theme or a development store, share a preview link at each milestone, and keep a written change log so you always know what moved.",
    },
    {
      title: "Launch, measure, hand over",
      body:
        "We publish during your lowest-traffic window, watch analytics and error logs for the first days, then I hand over documentation and the repository. You own everything, and you are free to take it to any other developer.",
    },
  ],
  faqTitle: "Shopify expert FAQ",
  faq: [
    {
      q: "How much does a Shopify expert cost?",
      a:
        "Small scoped jobs — a section, a bug, a speed pass — are usually fixed-price and start around US$500. Larger builds are quoted from the written scope. Ongoing work runs as a monthly retainer with an agreed number of hours per week, which is the cheapest way to buy senior Shopify time. My hourly rate for ad-hoc work is US$60 to US$90 depending on the type of work and urgency, and I always tell you the number before anything starts.",
    },
    {
      q: "You are in Brazil. How does that work with a US team?",
      a:
        "I am in São Paulo, UTC-3, one to two hours ahead of US Eastern depending on the season. That means I overlap with essentially your entire business day, whether your team is in New York, Toronto, Chicago, Vancouver or Los Angeles. I attend calls in fluent English, respond on Slack or WhatsApp during your working hours, and no work gets pushed to a night shift you cannot reach.",
    },
    {
      q: "Do you sign a contract and an NDA?",
      a:
        "Yes, on every engagement. I work under a written contract covering scope, payment schedule, confidentiality and IP assignment, and I am happy to sign your NDA or MSA instead of mine. I have worked under client paperwork for US and Canadian companies, and I handle store credentials through your own staff-account permissions with the minimum access needed.",
    },
    {
      q: "Who owns the code you write?",
      a:
        "You do, completely, from the moment it is delivered and paid. Themes, custom apps, scripts and documentation are assigned to you in the contract. I do not keep licensing fees, I do not lock work behind a proprietary framework, and I do not hold your store hostage. If you hire another developer next year, everything I wrote is readable, commented and portable.",
    },
    {
      q: "Do you work on Shopify Plus?",
      a:
        "Yes. Plus work includes Shopify Functions, checkout extensibility, B2B catalogs and company accounts, Shopify Flow automations, and multi-store or multi-market setups. I also work on standard Shopify plans, and I will tell you honestly when a problem you have does not actually require upgrading to Plus.",
    },
    {
      q: "Can I hire someone to manage my Shopify store?",
      a:
        "Yes, that is the monthly retainer. It covers the ongoing work a store generates whether or not anyone plans for it: theme and app updates, new sections and landing pages, catalog and pricing changes, broken tracking, performance regressions, and the occasional emergency. You get a reserved block of senior hours, a shared backlog we reprioritise on a weekly call, and the same person every month rather than whoever is free. It is not a managed-services contract you cannot leave — 30 days' notice, and you keep the code, the documentation and every account.",
    },
    {
      q: "Is it worth it to hire a Shopify expert?",
      a:
        "It depends entirely on what your traffic is already worth. If a store does US$20,000 a month and converts at 1.2%, a two-point improvement in checkout completion pays for a month of senior work several times over, and speed, catalog and SEO fixes compound for years after. If the store has almost no traffic yet, engineering is the wrong spend — you need demand first, and I will say so rather than sell you a theme rebuild. The honest test is whether you can name the number you expect to move. If you cannot, start with a paid audit instead of a build.",
    },
    {
      q: "Are you a Shopify expert agency or an individual?",
      a:
        "An individual, deliberately. A Shopify expert agency sells you a senior name in the pitch and staffs the work with whoever is free that sprint, and you pay for the account manager, the project manager and the sales commission on top of the code. You get me directly, at one rate, with no layer in between. Where a project genuinely needs more hands — design, copy, paid media — I bring in people I have worked with and you contract them yourself, so nothing is marked up.",
    },
    {
      q: "How do I tell a top Shopify developer from a cheap one?",
      a:
        "Ask for a store they operated, not just built, and ask what the numbers did afterwards. Ask them to explain a decision they got wrong and what it cost. Ask what happens to your store the day they stop working on it — a good answer involves documentation and a repository you own, a bad answer involves a retainer you cannot leave. Rates on Shopify work range from roughly US$25 to over US$200 an hour, and the cheap end almost always gets re-done within a year.",
    },
    {
      q: "Do you do Shopify SEO, or only development?",
      a:
        "Both, and on Shopify they are the same job. Most Shopify SEO problems — duplicate collection URLs, index bloat from tag pages, missing or invalid structured data, a redirect map that was never built after a replatform — are fixed in Liquid and in the store settings, not in a content calendar. I audit, prioritise and then implement, which is the part a standalone Shopify SEO consultant usually cannot do.",
    },
    {
      q: "Can you take over a store another developer built?",
      a:
        "That is a large part of what I do. I start with a read-only audit: theme code quality, app conflicts, broken tracking, SEO regressions and anything that will bite during the next update. You get the findings as a prioritised list with effort and impact estimates, and you decide what to fix. There is no obligation to continue with me after the audit.",
    },
  ],
  ctaTitle: "Need a Shopify expert this week?",
  ctaBody:
    "Send me the store URL and what is going wrong. You get an honest opinion within one business day — free, no sales call required.",
  waText:
    "Hi Matheus, I found your Shopify expert page. I need help with my Shopify store — here is the URL:",
  serviceName: "Shopify Expert Development",
  serviceDescription:
    "Senior Shopify expert services: custom Liquid theme development, storefront and PDP engineering, technical SEO, app and custom app integrations, catalog data operations, speed optimisation and CRO for Shopify and Shopify Plus stores.",
  breadcrumb: "Shopify Expert",
  related: [
    { href: "/hire-shopify-developer", label: "Hire a Shopify Developer" },
    { href: "/matrixify-expert", label: "Matrixify Expert" },
    { href: "/klaviyo-expert", label: "Klaviyo Expert" },
    { href: "/shopify-speed-optimization", label: "Shopify Speed Optimization" },
    { href: "/shopify-migration-expert", label: "Shopify Migration Expert" },
  ],
}

export default function ShopifyExpertPage() {
  return <SeoLanding data={data} />
}
