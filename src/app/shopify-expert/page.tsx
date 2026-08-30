import { SeoLanding, seoMeta, type SeoLandingData } from "@/components/seo-landing"
import type { Metadata } from "next"

export const metadata: Metadata = seoMeta({
  slug: "shopify-expert",
  title: "Shopify Expert — Senior Shopify Developer for Hire | Matheus Abrahão",
    description:
    "Shopify expert and senior Shopify developer for hire, working with US and Canadian brands. 6+ years on Shopify, currently operating paired B2C and B2B Shopify storefronts for a US manufacturer. Liquid themes, custom apps, integrations, technical SEO and CRO. +455% sessions and +74% revenue for an international luxury fashion brand.",
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
      q: "What do you charge?",
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
    { href: "/klaviyo-expert", label: "Klaviyo Expert" },
    { href: "/shopify-speed-optimization", label: "Shopify Speed Optimization" },
    { href: "/shopify-migration-expert", label: "Shopify Migration Expert" },
  ],
}

export default function ShopifyExpertPage() {
  return <SeoLanding data={data} />
}
