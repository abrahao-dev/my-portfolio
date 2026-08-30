import { SeoLanding, seoMeta, type SeoLandingData } from "@/components/seo-landing"
import type { Metadata } from "next"

export const metadata: Metadata = seoMeta({
  slug: "hire-shopify-developer",
  title: "Hire a Shopify Developer — Freelance Shopify Contractor | Matheus Abrahão",
  description:
    "Hire a dedicated freelance Shopify developer for US and Canadian brands. 6+ years on Shopify, currently operating a US$1M/month B2C + B2B Shopify business. Fixed-price projects, monthly retainers, rescue work. US$60-90/hour, fluent English, full North American time zone overlap.",
})

const data: SeoLandingData = {
  slug: "hire-shopify-developer",
  eyebrow: "Taking on new contracts",
  h1: "Hire a Shopify Developer",
  lede:
    "A senior freelance Shopify developer for hire — no agency markup, no junior handoff. Contract, dedicated monthly retainer or fractional lead engineer, working directly with US and Canadian brands in your own time zone.",
  intro: [
    "Hiring a Shopify developer usually goes one of two ways. You go to an agency and pay for an account manager, a project manager and a junior who does the work. Or you gamble on a marketplace freelancer, get something that works for a month, and then discover nobody can maintain it. I am the third option: a senior engineer working as an independent Shopify contractor, engaged directly, with six years of stores behind me.",
    "The reason I am worth hiring is that I have been the client too. I founded and ran Martin (martin4shop.com.br), a Shopify brand that processed 1,959 orders and roughly R$552,000 — I built the theme, ran the ads, handled the fulfilment and lived with every technical shortcut I took. Since then I have been the sole engineer for an international luxury fashion brand, where sessions grew +455%, orders +114% and revenue +74%, and I have maintained two storefronts (B2C and B2B) plus 7+ sales channels for a US manufacturer. I have also won the Apple Swift Student Challenge 2026, which is a way of saying that when your problem needs real software rather than a theme setting, I can write it.",
    "Most clients start with a small paid scope — a broken checkout flow, a slow product page, a migration nobody wants to touch. If that goes well it usually becomes a retainer. I have no interest in selling you a twelve-month contract on day one.",
  ],
  playbookLine:
    "Four stores, four verticals, one engineer — from my own brand to a US$1M/month operation. That is what you are hiring.",
  servicesTitle: "Ways to hire me",
  services: [
    {
      title: "Fixed-price project",
      body:
        "One defined outcome: a new theme, a custom PDP, a set of integrations, a migration. Written scope, fixed price, fixed date. Best when you already know exactly what you want built and want budget certainty.",
    },
    {
      title: "Hire a dedicated Shopify developer",
      body:
        "A monthly retainer with a reserved block of senior Shopify hours: continuous improvement, new features and the small emergencies that always come up. Priority response, a running backlog we reprioritise weekly, and the same person every month.",
    },
    {
      title: "Fractional lead developer",
      body:
        "For brands with a marketing team but no engineer. I own the technical side of the store: architecture decisions, code review of other vendors, roadmap, security and release process — typically one or two days a week.",
    },
    {
      title: "Emergency and rescue work",
      body:
        "Checkout broken, theme update gone wrong, an app that corrupted product data, a store that fell off Google. I take rescue jobs at short notice, diagnose first, and give you a written explanation of what actually happened.",
    },
    {
      title: "Second-opinion audit",
      body:
        "A read-only review of theme code, app stack, tracking, SEO and performance, delivered as a prioritised list with effort and revenue impact. Useful before you sign with an agency, or before you renew with the one you have.",
    },
    {
      title: "Hire a Shopify web developer for your team",
      body:
        "I plug into your existing sprint process, repo and Slack as a Shopify contractor alongside your in-house developers. Pull requests, code review, standups in English — the same as a hire, without the headcount or the recruiting cycle.",
    },
    {
      title: "Shopify theme developer for hire",
      body:
        "Just need theme work? Liquid sections, Online Store 2.0 templates, a design file turned into a working storefront, or an existing theme extended without turning it into spaghetti. Scoped as a standalone job with no retainer attached.",
    },
  ],
  extraSections: [
    {
      title: "What you are actually hiring",
      intro:
        "The short version: an engineer who currently runs a Shopify operation averaging about US$1,000,000 per month in revenue, across both a B2C and a B2B storefront.",
      items: [
        {
          title: "Operating experience, not just build experience",
          body:
            "I am the day-to-day operator of a US building-products manufacturer's Shopify business — 1.6M sessions and 3,500+ orders per quarter across two storefronts and 7+ sales channels. That is a very different job from shipping a theme and disappearing, and it shows in the decisions I make about your store.",
        },
        {
          title: "B2B as well as B2C",
          body:
            "Company accounts, catalogs and price lists, payment terms, minimum and maximum order rules, MAP and MSRP pricing policy, and a wholesale checkout that behaves differently from the consumer one. Most Shopify freelancers have never touched any of it.",
        },
        {
          title: "Enterprise catalog and retail syndication",
          body:
            "Product data syndicated to Lowe's, Home Depot US and Canada, Menards, Amazon and KB, with Salsify PIM as the source of truth and Matrixify for bulk Shopify operations. If your growth plan involves selling through retailers, I have already done the unglamorous part.",
        },
        {
          title: "A real software engineer underneath",
          body:
            "Apple Swift Student Challenge 2026 winner, working across React, Next.js, Node.js, TypeScript and Python. When the answer is a custom app, a script or an API integration rather than another US$49-a-month subscription, I can actually build it.",
        },
      ],
    },
  ],
  stepsTitle: "How hiring works",
  steps: [
    {
      title: "Tell me the problem",
      body:
        "WhatsApp or email with your store URL and a few sentences about what you need. If you have a written brief, even better. I reply within one business day, always personally.",
    },
    {
      title: "Free 30-minute call",
      body:
        "We go through the store together, I ask about traffic, order volume, apps and constraints, and I tell you what I would do first. If your problem is smaller or cheaper than you think, I say so on that call.",
    },
    {
      title: "Scope, contract, deposit",
      body:
        "You get a written scope with deliverables, timeline and price, plus a contract covering confidentiality and IP assignment. Projects start on a 50% deposit; retainers are invoiced monthly in advance.",
    },
    {
      title: "Work in the open",
      body:
        "Staging theme, preview links at every milestone, a shared change log, and a standing weekly check-in. You always know what is done, what is next and what it cost.",
    },
  ],
  faqTitle: "Hiring FAQ",
  faq: [
    {
      q: "How much does it cost to hire a Shopify developer?",
      a:
        "In North America, agencies typically bill US$120 to US$250 per hour, US and Canadian freelancers US$75 to US$150, and offshore marketplaces US$15 to US$40 — where you usually pay again to have the work redone. I sit deliberately in the middle: US$60 to US$90 per hour, senior level, working directly with you. A small scoped job such as a bug fix, a new section or a speed pass starts around US$500. A full theme build or a migration is quoted from a written scope. The honest answer is that the hourly rate matters far less than how many hours the person needs, which is where experience actually saves you money.",
    },
    {
      q: "What are your rates and how do retainers work?",
      a:
        "Ad-hoc work runs US$60 to US$90 per hour depending on the type of work and urgency. Small scoped jobs are fixed-price starting around US$500. If you want a dedicated Shopify developer rather than one-off tickets, a monthly retainer with a reserved weekly hour block is the best value and comes with priority response. I quote before anything starts, and I never bill for the discovery call or the estimate.",
    },
    {
      q: "What time zone are you in and how much overlap do I get?",
      a:
        "São Paulo, UTC-3. That is one to two hours ahead of US Eastern depending on daylight saving, so a full US or Canadian business day gives me almost complete overlap with your team — from Toronto and New York to Vancouver and Los Angeles. I take calls in English, work your hours when the project needs it, and I am reachable on WhatsApp for anything urgent.",
    },
    {
      q: "Do you work with Canadian brands?",
      a:
        "Yes, and regularly. I have delivered storefront and conversion engineering for a Canadian fashion retailer, and I currently syndicate product data to Home Depot Canada as part of a multi-retailer catalog operation. I work with brands in Toronto, Vancouver and across North America, invoice in USD or CAD, and I am used to Canadian tax, shipping and duty considerations in a Shopify setup.",
    },
    {
      q: "Do you sign an NDA and a proper contract?",
      a:
        "Always. Every engagement runs on a written contract covering scope, payment terms, confidentiality and IP assignment, and I will sign your NDA or MSA rather than insisting on my own paperwork. I access stores through a staff account you control, with the minimum permissions the work requires, and I do not subcontract without telling you.",
    },
    {
      q: "Who owns the code and the accounts?",
      a:
        "You own everything: theme code, custom apps, scripts, documentation and any account created for your business. IP assignment is written into the contract and takes effect on payment. Nothing is licensed back to you, nothing depends on a framework only I can maintain, and I hand over a repository any competent Shopify developer can pick up.",
    },
    {
      q: "How do I pay a freelance developer in Brazil?",
      a:
        "Wise or Payoneer for international transfers, or a standard bank wire. I invoice in USD or EUR, and I can invoice through a registered Brazilian company if your finance team needs a formal vendor with tax documents. Projects are 50% up front and 50% on delivery; retainers are billed monthly in advance.",
    },
    {
      q: "What if it does not work out?",
      a:
        "Retainers are month to month with 30 days' notice, no lock-in. On fixed-price projects, if I decide part way through that I am not the right person to finish the job, I hand over everything done so far with documentation and refund the unearned portion. I would rather lose an invoice than leave you with a half-built store.",
    },
  ],
  ctaTitle: "Ready to hire a Shopify developer?",
  ctaBody:
    "Send the store URL and what you need done. You get a real answer within one business day, from the person who would do the work.",
  waText:
    "Hi Matheus, I want to hire a Shopify developer. Here is my store and what I need:",
  serviceName: "Freelance Shopify Developer",
  serviceDescription:
    "Hire a senior freelance Shopify developer and contractor for fixed-price projects, monthly retainers, fractional lead engineering, rescue work, audits and team augmentation on Shopify and Shopify Plus.",
  breadcrumb: "Hire a Shopify Developer",
  related: [
    { href: "/shopify-expert", label: "Shopify Expert" },
    { href: "/klaviyo-expert", label: "Klaviyo Expert" },
    { href: "/shopify-speed-optimization", label: "Shopify Speed Optimization" },
    { href: "/shopify-migration-expert", label: "Shopify Migration Expert" },
  ],
}

export default function HireShopifyDeveloperPage() {
  return <SeoLanding data={data} />
}
