import { SeoLanding, seoMeta, type SeoLandingData } from "@/components/seo-landing"
import type { Metadata } from "next"

export const metadata: Metadata = seoMeta({
  slug: "klaviyo-expert",
  title: "Klaviyo Expert & Developer — Shopify Email and SMS Marketing | Matheus Abrahão",
  description:
    "Klaviyo expert and developer for Shopify: flow architecture, segmentation, deliverability, SMS marketing, custom API integrations and server-side tracking. Built the Klaviyo stack for an international luxury fashion brand that grew +74% in revenue.",
})

const data: SeoLandingData = {
  slug: "klaviyo-expert",
  eyebrow: "Klaviyo flows, SMS and integrations",
  h1: "Klaviyo Expert for Shopify",
  lede:
    "A Klaviyo expert who is also a developer. I build the flows, the segments and the templates — and when Klaviyo does not do what you need out of the box, I write the API integration that makes it happen.",
  intro: [
    "Most Klaviyo work is sold by agencies who can design a beautiful email but cannot touch the data underneath it. That is where owned-channel revenue quietly stalls: events are not firing, identifiers are not stitched, a flow filter excludes half your audience, and nobody in the room can read the payload to find out. I come at Shopify email marketing from the engineering side first, which is why the flows I build stay accurate as the store changes.",
    "I built and ran the Klaviyo stack for an international luxury fashion brand as its sole engineer, alongside Meta CAPI, Google Merchant Center and Amazon integrations. Over that engagement the store went from a broken measurement setup to +455% sessions, +114% orders and +74% revenue. I also ran email and SMS for my own Shopify brand, Martin (martin4shop.com.br), through 1,959 orders and roughly R$552,000 in revenue — so I have written the abandoned-cart sequence that had to actually pay for my inventory, not just look good in a case study.",
    "Klaviyo should be somewhere between a fifth and a third of a healthy store's revenue. If yours is well below that, the problem is almost never the copy. It is segmentation, timing, deliverability or data — and all four are fixable.",
  ],
  playbookLine:
    "Four stores, four verticals, the same owned-channel playbook behind the growth.",
  servicesTitle: "Klaviyo and owned-channel services",
  services: [
    {
      title: "Core flow architecture",
      body:
        "Welcome, browse abandonment, abandoned cart and checkout, post-purchase, replenishment, winback and back-in-stock — built as one coherent system with exclusion logic so a customer never receives three flows in the same hour.",
    },
    {
      title: "Segmentation and list health",
      body:
        "RFM-style segments, engagement tiers, sunset flows for dead addresses, and predictive-analytics-driven audiences. Cleaning the list is usually the fastest way to lift open rates and protect your sending reputation.",
    },
    {
      title: "SMS marketing for Shopify",
      body:
        "Compliant SMS collection, two-touch welcome, cart and shipping notifications, and campaign cadence that does not burn the channel. Includes consent handling, quiet hours and full US carrier compliance requirements.",
    },
    {
      title: "Deliverability rescue",
      body:
        "DMARC, SPF and DKIM configuration, dedicated sending domain setup, warm-up plans, and diagnosis when your emails start landing in Promotions or Spam. Measurable within two weeks, usually sooner.",
    },
    {
      title: "Custom events and API work",
      body:
        "Klaviyo Track and Identify APIs, server-side events from your backend, custom Shopify metafield sync, subscription and loyalty app data, and profile properties that make real personalisation possible.",
    },
    {
      title: "Templates and Shopify data",
      body:
        "Responsive, on-brand email templates with dynamic product blocks pulled from live Shopify catalog data, so recommendations, prices and stock status are correct at the moment the email opens rather than when it was designed.",
    },
  ],
  stepsTitle: "How a Klaviyo engagement runs",
  steps: [
    {
      title: "Account audit",
      body:
        "I review flows, segments, deliverability, integration health and the last 90 days of revenue attribution. You get a written report showing exactly where owned-channel revenue is leaking and what each fix is worth.",
    },
    {
      title: "Fix the data layer first",
      body:
        "Before writing a single email I make sure events fire correctly, identifiers stitch across sessions and the Shopify integration is passing everything it should. Flows built on broken data just automate the mistake.",
    },
    {
      title: "Build and launch flows",
      body:
        "Flows go live in priority order — usually cart and checkout abandonment first, since that is the fastest payback — each one live-tested with real orders and a test profile before it is switched on for your list.",
    },
    {
      title: "Measure and iterate",
      body:
        "Monthly review of flow revenue, deliverability and list growth, with A/B tests on subject lines, timing and offers. Retainer clients get a running backlog we reprioritise together based on what the numbers say.",
    },
  ],
  faqTitle: "Klaviyo expert FAQ",
  faq: [
    {
      q: "What does Klaviyo work cost?",
      a:
        "A full account audit with a written action plan is a fixed fee starting around US$500. Building a complete core flow set typically runs as a project quoted from that audit. Ongoing campaign and optimisation work is a monthly retainer. My hourly rate for ad-hoc Klaviyo development is US$60 to US$90, and you always see the number before work starts.",
    },
    {
      q: "You are in Brazil — can you work with my US marketing team?",
      a:
        "Yes. I am in São Paulo, UTC-3, one to two hours ahead of US Eastern, which leaves four to six hours of live overlap with a US business day. Campaign sends are scheduled in your customers' time zone, not mine, and I am on WhatsApp for anything time-sensitive around a launch or a sale.",
    },
    {
      q: "Do you sign an NDA before touching my account?",
      a:
        "Always. Every engagement runs under a written contract covering confidentiality, scope and IP, and I am happy to sign your NDA or MSA. Customer data is sensitive: I work through a Klaviyo user account you create and control, with the minimum role required, and I never export your list.",
    },
    {
      q: "Who owns the flows and templates you build?",
      a:
        "You do. Everything lives inside your own Klaviyo account, and template code, custom integration code and documentation are assigned to you in the contract. If you move to another agency there is nothing to migrate and nothing to unlock — it is already yours.",
    },
    {
      q: "Klaviyo or something cheaper?",
      a:
        "For a Shopify store doing real volume, Klaviyo's native integration and segmentation are worth the price difference, and cheaper tools usually cost more in engineering time to reach the same place. That said, if you are pre-revenue or sending to a very small list, I will tell you to wait rather than sell you a build you cannot use yet.",
    },
    {
      q: "Can you fix an account someone else set up?",
      a:
        "That is most of my Klaviyo work. Inherited accounts usually have overlapping flows, stale segments, broken integration events and a sending reputation nobody has looked at. I map what exists before changing anything, keep what works, and document every change so your team can follow what happened.",
    },
  ],
  ctaTitle: "Want your owned channels to actually earn?",
  ctaBody:
    "Send me your store URL and roughly what Klaviyo is doing today. I will tell you where the money is sitting — free.",
  waText:
    "Hi Matheus, I found your Klaviyo expert page. I need help with Klaviyo email/SMS for my Shopify store:",
  serviceName: "Klaviyo Expert & Developer",
  serviceDescription:
    "Klaviyo expert and developer services for Shopify: flow architecture, segmentation, SMS marketing, deliverability, custom API events, server-side tracking and dynamic email templates driven by live Shopify catalog data.",
  breadcrumb: "Klaviyo Expert",
  related: [
    { href: "/shopify-expert", label: "Shopify Expert" },
    { href: "/hire-shopify-developer", label: "Hire a Shopify Developer" },
    { href: "/shopify-speed-optimization", label: "Shopify Speed Optimization" },
    { href: "/shopify-migration-expert", label: "Shopify Migration Expert" },
  ],
}

export default function KlaviyoExpertPage() {
  return <SeoLanding data={data} />
}
