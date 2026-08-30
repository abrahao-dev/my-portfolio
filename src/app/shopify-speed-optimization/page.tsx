import { SeoLanding, seoMeta, type SeoLandingData } from "@/components/seo-landing"
import type { Metadata } from "next"

export const metadata: Metadata = seoMeta({
  slug: "shopify-speed-optimization",
  title: "Shopify Speed Optimization — Core Web Vitals & CRO | Matheus Abrahão",
  description:
    "Shopify speed optimization by a senior developer: Core Web Vitals (LCP, INP, CLS), theme and script auditing, image and font delivery, third-party app cleanup, and conversion rate optimisation. Real store results, no plugin shortcuts.",
})

const data: SeoLandingData = {
  slug: "shopify-speed-optimization",
  eyebrow: "Core Web Vitals and conversion work",
  h1: "Shopify Speed Optimization",
  lede:
    "Real Shopify speed optimization: theme code, render path, third-party scripts and image delivery — fixed at the source, not hidden behind a speed app that lazy-loads your buy button.",
  intro: [
    "Every slow Shopify store is slow for boring reasons. A hero image served at 3000px into a 400px slot. Six apps injecting render-blocking scripts on every page, including the ones you stopped paying for. A theme that ships 400KB of JavaScript to display a product title. Web fonts loading late and pushing the whole layout down. None of it is exotic, and none of it is fixed by installing another app.",
    "I do this work as a senior engineer who has lived on the revenue side. On my own Shopify brand, Martin (martin4shop.com.br), page speed was the difference between a profitable ad campaign and a wasted one across 1,959 orders. For an international luxury fashion brand I rebuilt storefront components specifically around Core Web Vitals, and combined with technical SEO the store grew +455% in sessions, +114% in orders and +74% in revenue. I have also kept two storefronts (B2C and B2B) fast for a US manufacturer running a catalog with heavy multi-variant product pages.",
    "Speed is not a vanity score. Google uses Core Web Vitals as a ranking signal, mobile shoppers abandon slow carts, and paid traffic gets more expensive per conversion when the landing page stalls. The goal is not a green Lighthouse badge on your homepage — it is faster product pages and a faster checkout path for the traffic you already pay for.",
  ],
  playbookLine:
    "Four stores, four verticals, and in every one a faster storefront came before the revenue curve moved.",
  servicesTitle: "What gets fixed",
  services: [
    {
      title: "Core Web Vitals diagnosis",
      body:
        "LCP, INP and CLS measured on field data from real users, not just a lab test. I identify the actual LCP element, the scripts blocking interaction and the elements causing layout shift on the templates that matter most.",
    },
    {
      title: "Third-party script audit",
      body:
        "Every app, pixel and tag inventoried with its real cost in bytes and blocking time. Dead apps removed, survivors deferred or loaded conditionally, and tracking moved server-side where it can be without losing data.",
    },
    {
      title: "Theme and Liquid refactor",
      body:
        "Reduce the JavaScript bundle, kill jQuery dependencies left over from older themes, split critical CSS, defer non-critical work and cut Liquid loops that force slow server render on collection pages.",
    },
    {
      title: "Image, video and font delivery",
      body:
        "Correct responsive image sizes and formats through Shopify's CDN, proper lazy-loading boundaries that never delay the LCP image, poster frames for video, and font loading that stops text from jumping.",
    },
    {
      title: "Checkout and cart path",
      body:
        "The pages between add-to-cart and payment matter more than the homepage. Faster cart drawer, fewer blocking requests on the PDP, and no third-party widget allowed to delay the buy button.",
    },
    {
      title: "CRO experiments",
      body:
        "Once the store is fast, speed compounds with conversion work: PDP layout, trust signals, shipping thresholds, upsells and simplified navigation, prioritised by revenue impact and validated against real data.",
    },
  ],
  stepsTitle: "The optimisation process",
  steps: [
    {
      title: "Baseline measurement",
      body:
        "I capture field and lab data for homepage, collection, product and cart on both mobile and desktop, plus current conversion rate by device. Without a documented baseline there is no way to prove what the work was worth.",
    },
    {
      title: "Prioritised plan",
      body:
        "You get a written list of every issue found, ranked by impact against effort, with the ones that need a business decision flagged separately — like removing an app your marketing team relies on.",
    },
    {
      title: "Implementation on staging",
      body:
        "All work happens on a duplicated theme. Each change is verified in isolation so we know what produced which gain, and nothing is published until you have clicked through the preview yourself.",
    },
    {
      title: "Publish and re-measure",
      body:
        "We publish in a low-traffic window, then compare field data over the following 28 days as real-user metrics update. You get a before-and-after report and a short guide on keeping the store fast as you add apps.",
    },
  ],
  faqTitle: "Speed optimization FAQ",
  faq: [
    {
      q: "How much does a speed optimization project cost?",
      a:
        "A full audit with a prioritised, written action plan is a fixed fee starting around US$500. Implementation is quoted from that audit and depends on how customised the theme is — a clean Dawn-based theme is far cheaper than a heavily modified legacy one. Ad-hoc work is US$60 to US$90 per hour, and you always approve the number in advance.",
    },
    {
      q: "How do you handle working from a different time zone?",
      a:
        "I am in São Paulo, UTC-3, one to two hours ahead of US Eastern, so a normal US business day leaves four to six hours of live overlap. Publishing happens in your store's lowest-traffic window, which usually means late night your time — that is my morning, so I am awake and watching when it goes live.",
    },
    {
      q: "Do you sign an NDA and a contract?",
      a:
        "Yes, on every engagement, and I will use your NDA or MSA if you prefer. I access the store through a staff account you create with the permissions the work requires, I always duplicate the theme before touching anything, and I keep a rollback point so the previous version can be restored in under a minute.",
    },
    {
      q: "Who owns the optimised code?",
      a:
        "You do, in full, on payment. That includes the refactored theme, any custom scripts, the audit document and the handover notes. I do not install a proprietary loader, I do not charge a monthly fee to keep the improvements working, and any other developer can read and maintain what I leave behind.",
    },
    {
      q: "Will you guarantee a 90+ Lighthouse score?",
      a:
        "No, and be careful with anyone who does. On Shopify the platform, your apps and your marketing pixels all contribute to the score, and hitting a specific number often means breaking things your business needs. I commit to measurable improvements in real-user Core Web Vitals and to telling you exactly what a higher score would cost you in functionality.",
    },
    {
      q: "Are speed optimization apps worth it?",
      a:
        "Rarely. Most of them defer scripts indiscriminately, which improves the lab score while making the page feel worse and occasionally breaking add-to-cart. They also add another script to a store that already has too many. Fixing the theme and removing dead apps produces a better result that does not require a subscription to keep.",
    },
  ],
  ctaTitle: "Want to know why your store is slow?",
  ctaBody:
    "Send me your store URL. I will run a real diagnostic and tell you the top three causes — free, before you commit to anything.",
  waText:
    "Hi Matheus, I found your Shopify speed optimization page. My store is slow — here is the URL:",
  serviceName: "Shopify Speed Optimization & CRO",
  serviceDescription:
    "Shopify speed optimization and conversion rate optimisation: Core Web Vitals diagnosis, third-party script auditing, Liquid and theme refactoring, image and font delivery, checkout path performance and revenue-prioritised CRO experiments.",
  breadcrumb: "Shopify Speed Optimization",
  related: [
    { href: "/shopify-expert", label: "Shopify Expert" },
    { href: "/hire-shopify-developer", label: "Hire a Shopify Developer" },
    { href: "/klaviyo-expert", label: "Klaviyo Expert" },
    { href: "/shopify-migration-expert", label: "Shopify Migration Expert" },
  ],
}

export default function ShopifySpeedOptimizationPage() {
  return <SeoLanding data={data} />
}
