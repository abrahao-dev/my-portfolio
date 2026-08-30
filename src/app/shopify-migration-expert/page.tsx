import { SeoLanding, seoMeta, type SeoLandingData } from "@/components/seo-landing"
import type { Metadata } from "next"

export const metadata: Metadata = seoMeta({
  slug: "shopify-migration-expert",
  title: "Shopify Migration Expert — WooCommerce, Wix & Magento to Shopify | Matheus Abrahão",
  description:
    "Shopify migration expert: WooCommerce, Wix, Magento, BigCommerce and custom platforms moved to Shopify without losing SEO, customers or order history. Catalog, redirects, data integrity and a launch plan that does not cost you rankings.",
})

const data: SeoLandingData = {
  slug: "shopify-migration-expert",
  eyebrow: "Replatforming without losing rankings",
  h1: "Shopify Migration Expert",
  lede:
    "WooCommerce, Wix, Magento or BigCommerce moved to Shopify with the catalog intact, the customers intact, the order history intact — and, most importantly, the organic traffic intact.",
  intro: [
    "The scary part of a Shopify migration is not moving the products. It is everything attached to them: URL structures that Google has indexed for years, customer accounts and their password hashes, historical orders your finance team still needs, subscriptions mid-cycle, reviews, metafields, and the tax and shipping rules nobody documented. Migrations fail on those details, and the failure usually shows up as a traffic collapse three weeks after launch when it is expensive to undo.",
    "I have spent 6+ years inside Shopify, starting with my own store — I built and ran Martin (martin4shop.com.br) through 1,959 orders and roughly R$552,000 in revenue, which is where I learned what actually breaks when store data moves. Since then I have handled catalog and data operations at scale: two storefronts (B2C and B2B) with 7+ sales channels for a US manufacturer, and the technical SEO foundation for an international luxury fashion brand where sessions grew +455%, orders +114% and revenue +74%.",
    "A migration done properly is boring. You should launch, watch rankings stay flat for a week, and then start seeing them improve because the new store is faster and better structured. That outcome comes from a redirect map built before anything is exported, not from hope.",
  ],
  playbookLine:
    "Four stores, four verticals, and none of them lost data or rankings on my watch.",
  servicesTitle: "What a migration includes",
  services: [
    {
      title: "WooCommerce to Shopify",
      body:
        "Products with variations, categories, customers, coupons and completed orders exported from WordPress and mapped into Shopify's data model. Custom fields become metafields rather than getting silently dropped.",
    },
    {
      title: "Magento and BigCommerce to Shopify",
      body:
        "Complex attribute sets, configurable products, customer groups and tiered B2B pricing translated into Shopify variants, metafields, markets and B2B company accounts — including what has to be rethought rather than copied.",
    },
    {
      title: "Wix, Squarespace and custom platforms",
      body:
        "Stores with no clean export path, scraped and reconstructed carefully: catalog, content pages, blog posts and images, rebuilt with proper structure instead of a lossy one-click import.",
    },
    {
      title: "SEO preservation and redirects",
      body:
        "A complete old-to-new URL map covering products, collections, blog posts and content pages, implemented as 301 redirects before launch. Plus title, meta and schema parity so nothing regresses on day one.",
    },
    {
      title: "Theme and storefront rebuild",
      body:
        "Migrations are the right moment to leave a legacy theme behind. I rebuild the storefront on a clean Online Store 2.0 foundation that is faster and easier to maintain than what you are moving off.",
    },
    {
      title: "Apps, integrations and post-launch",
      body:
        "ERP, 3PL, accounting, email, reviews, subscriptions and analytics reconnected and verified against the new store, then monitored through the first weeks so anything that drifts is caught while it is still cheap.",
    },
  ],
  stepsTitle: "How a migration runs",
  steps: [
    {
      title: "Audit and inventory",
      body:
        "Before any data moves I document what exists: catalog size and structure, custom fields, integrations, top organic URLs by traffic and revenue, and the business rules hidden in your current platform. This is where migrations are won.",
    },
    {
      title: "Build on a development store",
      body:
        "The new store is built and populated in a Shopify development store you can click through. Data is imported in staged passes with validation between each one, so errors are caught on 50 products rather than on 50,000.",
    },
    {
      title: "Redirect map and dress rehearsal",
      body:
        "Every indexed URL is mapped to its new destination and tested. We do a full rehearsal of launch day, including DNS steps, payment gateway checks and a written rollback plan, before anything real happens.",
    },
    {
      title: "Cutover and 30-day watch",
      body:
        "We go live in your lowest-traffic window with a final data sync. Then I monitor Search Console coverage, 404s, rankings and conversion daily for the first week and weekly for the month, fixing anything that surfaces.",
    },
  ],
  faqTitle: "Migration FAQ",
  faq: [
    {
      q: "How much would it cost to migrate my website to Shopify?",
      a:
        "It depends almost entirely on catalog complexity and how much custom logic your current platform holds. A small, clean WooCommerce store is a fixed-price project; a Magento store with configurable products, customer groups and B2B pricing is a different scale of work. I scope every migration from an audit first, so the price you get is based on your actual data rather than an average. Hourly work is US$60 to US$90.",
    },
    {
      q: "Will I lose my Google rankings?",
      a:
        "Not if the redirect map is built before the migration rather than after. Every indexed URL gets a 301 to its closest new equivalent, title tags and structured data carry over, and Search Console is monitored daily after cutover. A short ranking wobble in the first two weeks is normal as Google recrawls; a permanent loss is a preventable mistake, not an inevitability.",
    },
    {
      q: "How long does it take?",
      a:
        "A straightforward store of a few hundred products is usually two to four weeks including the redirect work. Large or complex catalogs, B2B pricing, subscriptions or heavy custom integrations run six to twelve weeks. I give you a dated plan in the scope document, and your current store stays live and selling the entire time.",
    },
    {
      q: "You are in Brazil — how does the launch window work?",
      a:
        "I am in São Paulo, UTC-3, one to two hours ahead of US Eastern, giving four to six hours of live overlap with a US business day. Cutovers happen in your store's quietest window, typically the small hours in your time zone — which is my early morning, so I am fully awake and monitoring rather than half asleep at 3am.",
    },
    {
      q: "Do you sign an NDA, and how do you handle customer data?",
      a:
        "Yes to a written contract and NDA on every project, including yours instead of mine if you prefer. Customer data is handled on a need-to-know basis: exports are stored encrypted, deleted after the migration is verified, and never moved through third-party tools you have not approved. I work through accounts you create and can revoke.",
    },
    {
      q: "Who owns the store and the code afterwards?",
      a:
        "You do, entirely. The Shopify account is yours, the theme code and any custom apps are assigned to you in the contract on payment, and I hand over documentation, the redirect map and the import files. There is no ongoing licence and no dependency on me — you can hire any other developer the day after launch.",
    },
  ],
  ctaTitle: "Thinking about moving to Shopify?",
  ctaBody:
    "Tell me what platform you are on and roughly how many products. I will tell you honestly what the migration involves and what it should cost.",
  waText:
    "Hi Matheus, I found your Shopify migration page. I want to migrate my store to Shopify — here are the details:",
  serviceName: "Shopify Migration Expert",
  serviceDescription:
    "Shopify migration services from WooCommerce, Wix, Squarespace, Magento, BigCommerce and custom platforms: catalog and customer data migration, order history, SEO-preserving 301 redirect maps, theme rebuild, integration reconnection and post-launch monitoring.",
  breadcrumb: "Shopify Migration Expert",
  related: [
    { href: "/shopify-expert", label: "Shopify Expert" },
    { href: "/hire-shopify-developer", label: "Hire a Shopify Developer" },
    { href: "/matrixify-expert", label: "Matrixify Expert" },
    { href: "/shopify-speed-optimization", label: "Shopify Speed Optimization" },
  ],
}

export default function ShopifyMigrationExpertPage() {
  return <SeoLanding data={data} />
}
