import { SeoLanding, seoMeta, type SeoLandingData } from "@/components/seo-landing"
import type { Metadata } from "next"

export const metadata: Metadata = seoMeta({
  slug: "matrixify-expert",
  title: "Matrixify Expert — Shopify Catalog Operations at Scale | Matheus Abrahão",
  description:
    "Matrixify expert for Shopify: bulk product upload, CSV import, inventory sync, tags and variant commands, metafields, collections, images, translations and platform migrations. Daily Matrixify operator running two storefronts and 7+ sales channels for a US manufacturer.",
})

const data: SeoLandingData = {
  slug: "matrixify-expert",
  eyebrow: "Bulk catalog work, done safely",
  h1: "Matrixify Expert — Shopify Catalog Operations",
  lede:
    "I run Matrixify every working day: bulk product and order imports, tag and variant commands, metafield migrations, image cleanup and full platform migrations — on live stores, without breaking the catalog.",
  intro: [
    "Matrixify (formerly Excelify) is the Shopify app that turns your entire store into a spreadsheet and back again. Products, variants, inventory, collections, customers, orders, draft orders, discounts, metafields, translations, redirects, pages and blog posts all export to Excel, CSV or Google Sheets, get edited in bulk, and import back with far more control than Shopify's native CSV importer gives you. If you have ever needed to change one field across 40,000 variants, you already know why it exists.",
    "The reason to hire a Matrixify expert rather than learning it yourself is that the app is genuinely powerful, which also means it is genuinely capable of destroying a catalog. An import with the wrong Command column can overwrite prices across the store. A missing Variant ID can duplicate every variant on every product. Matrixify itself is careful and gives you an undo path on many jobs, but the fastest way to find the edge cases is on production, at 4pm, before a sale.",
    "I operate two storefronts — B2C and B2B — for a US manufacturer, keeping a multi-level variant catalog synchronised across 7+ sales channels with MAP and MSRP pricing rules that differ per channel. Matrixify is the backbone of that operation. My Shopify experience goes back 6+ years and started with my own store, Martin (martin4shop.com.br), where I did the catalog work myself across 1,959 orders because there was nobody else to do it.",
  ],
  playbookLine:
    "Four stores, four verticals, and behind each one the same unglamorous discipline: clean catalog data.",
  servicesTitle: "Matrixify commands and jobs I run",
  services: [
    {
      title: "Bulk product upload and import",
      body:
        "Bulk product upload to Shopify across thousands of SKUs — titles, descriptions, vendors, types, pricing, SEO fields and status. I always match on Handle or Variant ID rather than title, run a NEW-only pass before a full update, and keep the pre-import export as a rollback file.",
    },
    {
      title: "Order import",
      body:
        "Historical orders brought in from another platform or from a spreadsheet, with line items, taxes, shipping, financial and fulfilment status preserved. Critical during migrations so your finance and support teams do not lose two years of history. Imported without triggering customer notifications.",
    },
    {
      title: "Tags command (MERGE, REPLACE, DELETE)",
      body:
        "The Tags Command column is the single most useful and most dangerous field in Matrixify. MERGE adds tags without touching what is already there; leaving it blank silently replaces the whole tag set. I use it to run collection logic, channel eligibility and merchandising rules across the catalog safely.",
    },
    {
      title: "Variant command and options",
      body:
        "Adding, reordering, renaming and removing variants and option values in bulk — including restructuring multi-level option sets without orphaning inventory or losing variant IDs. This is where most DIY imports go wrong and where a careful staging pass pays for itself.",
    },
    {
      title: "Metafields and metaobjects",
      body:
        "Bulk creation and migration of product, variant, collection and customer metafields with the correct namespace, key and type — including moving legacy metafields into Online Store 2.0 definitions and metaobjects so your theme can actually render them.",
    },
    {
      title: "Collections",
      body:
        "Smart and manual collections created and updated in bulk, with rules, sort order, SEO fields, images and product membership. Combined with tag work, this rebuilds a whole merchandising structure in one pass instead of hundreds of clicks.",
    },
    {
      title: "Product images",
      body:
        "Bulk image upload from URLs, reordering, alt text for accessibility and SEO, assigning images to specific variants, and removing duplicates. Alt text alone is one of the cheapest SEO wins available on a large catalog.",
    },
    {
      title: "Translations and markets",
      body:
        "Translated content exported, edited in bulk and reimported for multi-language stores, keeping product, collection and theme translations consistent across markets instead of drifting file by file.",
    },
    {
      title: "Inventory and pricing updates",
      body:
        "Scheduled recurring imports from a supplier feed or a Google Sheet to keep inventory levels, costs, compare-at pricing and channel-specific price rules current across locations without a person retyping numbers.",
    },
  ],
  extraSections: [
    {
      title: "Platform migrations with Matrixify",
      intro:
        "Matrixify is the cleanest path off most legacy platforms because it preserves the data model instead of flattening it. I use it for full migrations and for the messy partial ones.",
      items: [
        {
          title: "WooCommerce to Shopify",
          body:
            "WooCommerce product variations, categories, coupons, customers and completed orders exported and mapped into Shopify's structure. Custom WooCommerce fields become properly typed Shopify metafields rather than being dropped, and order history is imported so support does not lose context on day one.",
        },
        {
          title: "Magento to Shopify",
          body:
            "Magento's configurable products and attribute sets do not map one to one onto Shopify's three-option limit, so part of this work is deciding what becomes a variant, what becomes a metafield and what becomes a separate product. Customer groups and tiered pricing translate into Shopify B2B company accounts and catalogs.",
        },
        {
          title: "BigCommerce and other platforms",
          body:
            "BigCommerce, PrestaShop, Wix and custom databases all follow the same pattern: export, normalise into the Matrixify sheet format, import into a development store in staged passes, validate counts and spot-check the edge cases before anything goes near the live domain.",
        },
        {
          title: "Store-to-store copying",
          body:
            "Duplicating a catalog between Shopify stores for a new market, a B2B storefront or a staging environment — with pricing, tags and channel publication rules adjusted during the transfer instead of afterwards.",
        },
      ],
    },
    {
      title: "Retail syndication and PIM",
      intro:
        "Shopify is rarely the only place your product data has to live. I syndicate catalogs out to national US retailers and manage the source of truth in Salsify PIM, which is a different discipline from uploading a CSV to a store.",
      items: [
        {
          title: "Big-box retailer syndication",
          body:
            "Product data published to Lowe's, Home Depot US, Home Depot Canada, Menards, Amazon and KB. Each retailer has its own required attributes, taxonomy, image specification and content rules, and each one rejects submissions for reasons the others do not care about. Managing that queue of validations, rejections and resubmissions is the actual job.",
        },
        {
          title: "Salsify PIM management",
          body:
            "Salsify as the enterprise source of truth: product records, attribute mapping per channel, digital asset management, readiness scoring and channel-specific content. Shopify then becomes one consumer of that data rather than the place where it is invented, which is what keeps 7+ channels consistent.",
        },
        {
          title: "Attribute and content compliance",
          body:
            "Required attributes, controlled vocabularies, unit and dimension formats, marketing copy length limits, image counts and background requirements, barcodes and GTINs. Getting these right up front is the difference between a listing going live this week and bouncing for a month.",
        },
        {
          title: "One source of truth, many channels",
          body:
            "The point of all of it is that a product change is made once and propagates everywhere — Shopify B2C, the B2B storefront, marketplaces and retailer feeds — instead of being retyped by four people into four systems and drifting apart within a quarter.",
        },
      ],
    },
    {
      title: "Beyond Matrixify: catalog operations",
      intro:
        "Matrixify is one tool in a wider catalog operation. The rest of the job is keeping the data correct once it is in.",
      items: [
        {
          title: "CSV, Excel and Google Sheets workflows",
          body:
            "Repeatable sheets your team can actually use — validated columns, dropdowns for controlled values, formulas that build handles and tags automatically, and a scheduled Google Sheets import so an update to a row becomes an update in the store without anyone opening the app.",
        },
        {
          title: "Multi-channel inventory synchronisation",
          body:
            "Keeping stock, pricing and product eligibility aligned across Shopify, marketplaces and wholesale channels, so a sale on one channel does not oversell another. Includes channel-specific rules such as MAP and MSRP pricing that must not leak between B2C and B2B storefronts.",
        },
        {
          title: "Product image correction and organisation",
          body:
            "Bulk renaming, deduplicating, reordering, resizing and re-hosting images across a catalog, assigning them correctly to variants, and writing alt text at scale. Large catalogs accumulate years of inconsistent image handling and it shows in both conversion and page speed.",
        },
        {
          title: "Catalog health audits in Python",
          body:
            "Scripted audits over a full catalog export: missing barcodes, duplicate SKUs, orphaned variants, products with no images, inconsistent option naming, broken metafield types, prices below MAP, items unpublished from channels they should be on. You get a report of what is wrong and a Matrixify import file that fixes it.",
        },
      ],
    },
  ],
  stepsTitle: "How catalog work runs",
  steps: [
    {
      title: "Export and audit first",
      body:
        "Nothing gets imported before I have exported. The current state becomes both the audit source and the rollback file, and the audit usually surfaces problems the client did not know existed — duplicate SKUs, wrong option names, products invisible on a channel.",
    },
    {
      title: "Build the import on a development store",
      body:
        "The import sheet is built and run against a development store or a small slice of production so the mapping is proven before it touches the real catalog. Counts are compared and edge cases are spot-checked manually.",
    },
    {
      title: "Staged production import",
      body:
        "Real imports go in batches, not all at once, scheduled outside peak hours. I watch the Matrixify job log for every batch and stop at the first unexpected result rather than discovering it 30,000 rows later.",
    },
    {
      title: "Verify, document, hand over",
      body:
        "After the import I verify counts, storefront rendering, channel publication and search indexing, then hand over the sheets, the mapping notes and the rollback files so your team can repeat the process without me.",
    },
  ],
  faqTitle: "Matrixify FAQ",
  faq: [
    {
      q: "What is Matrixify used for?",
      a:
        "Matrixify, formerly called Excelify, is a Shopify app for bulk import and export of store data using Excel, CSV or Google Sheets. It handles products, variants, inventory, collections, customers, orders, draft orders, discounts, metafields, translations, redirects, pages, blogs and more — far beyond what Shopify's built-in CSV import supports. It is the standard tool for large catalog edits, platform migrations and scheduled data syncs.",
    },
    {
      q: "How much does Matrixify cost?",
      a:
        "Matrixify is billed by Shopify as a monthly subscription tiered by how many rows you import and export per month, with a free tier for very small jobs and higher plans for large catalogs and migrations. The app fee is paid by you directly to Shopify, separate from my fee. For a one-off migration it is common to subscribe to a higher tier for a single month and step back down afterwards, which I will tell you how to do.",
    },
    {
      q: "When should I use Matrixify instead of Shopify's native CSV import?",
      a:
        "Use the native importer for simple product creation on a small catalog. Use Matrixify when you need to update existing records rather than replace them, when you are touching metafields, orders, collections or translations, when you need commands like MERGE on tags, when the job is large enough that partial failure matters, or when you need a scheduled recurring import. The native importer also silently overwrites fields you leave blank, which is a common way to wipe data by accident.",
    },
    {
      q: "How risky is running an import on a live store?",
      a:
        "Risky enough to justify a process. Every job I run starts with a full export as a rollback file, gets tested on a development store or a ten-row slice first, runs in batches outside peak hours, and is monitored row by row in the job log. Matrixify itself supports an undo on many import types, but undo is a safety net, not a plan. I have never had to restore a client catalog from a rollback file, and I still make one every time.",
    },
    {
      q: "What do you charge for catalog work?",
      a:
        "Ad-hoc Matrixify and catalog operations run US$60 to US$90 per hour. A defined job — a migration, a metafield restructure, a catalog audit with fix files — is quoted fixed-price from a look at your export first. Ongoing catalog operations are a monthly retainer with an agreed hour block, which is what most clients with a large or fast-changing catalog end up on.",
    },
    {
      q: "You are in Brazil — how does that work for scheduled imports?",
      a:
        "I am in São Paulo, UTC-3, one to two hours ahead of US Eastern, so a normal US business day gives four to six hours of live overlap. Large imports run in your store's quiet window, typically overnight your time, which is my morning — so someone is awake and watching the job log while it runs rather than reading the failure the next day.",
    },
    {
      q: "Do you sign an NDA, and who owns the files?",
      a:
        "Yes to a written contract and NDA on every engagement, including yours instead of mine. Catalog and customer exports are sensitive commercial data: they are stored encrypted, never shared, and deleted once the work is verified. All sheets, scripts, mapping documentation and audit tooling I build for you are yours on payment, and your team can keep running them without me.",
    },
  ],
  ctaTitle: "Have a catalog job nobody wants to touch?",
  ctaBody:
    "Send me an export, or just describe the mess. I will tell you whether it is a one-hour Matrixify job or a two-week operation — free.",
  waText:
    "Hi Matheus, I found your Matrixify page. I need help with bulk Shopify catalog work — here are the details:",
  serviceName: "Matrixify & Shopify Catalog Operations",
  serviceDescription:
    "Matrixify expert services for Shopify: bulk product and order imports, tags and variant commands, metafield and metaobject migrations, collections, product images, translations, scheduled inventory and pricing syncs, platform migrations from WooCommerce, Magento and BigCommerce, and Python-based catalog health audits.",
  breadcrumb: "Matrixify Expert",
  related: [
    { href: "/shopify-expert", label: "Shopify Expert" },
    { href: "/shopify-seo-expert", label: "Shopify SEO Expert" },
    { href: "/shopify-migration-expert", label: "Shopify Migration Expert" },
    { href: "/hire-shopify-developer", label: "Hire a Shopify Developer" },
    { href: "/shopify-speed-optimization", label: "Shopify Speed Optimization" },
  ],
}

export default function MatrixifyExpertPage() {
  return <SeoLanding data={data} />
}
