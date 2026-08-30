import { SeoLanding, seoMeta, type SeoLandingData } from "@/components/seo-landing"
import type { Metadata } from "next"

export const metadata: Metadata = seoMeta({
  slug: "shopify-seo-expert",
  title: "Shopify SEO Expert — Technical SEO, Schema Markup & AI Search | Matheus Abrahão",
  description:
    "Shopify SEO expert for US and Canadian brands. Technical SEO for Shopify: crawlability, canonicals and duplicate collection URLs, index bloat, schema markup and structured data, robots.txt.liquid and sitemaps, plus AI search optimization (llms.txt, answer engine optimization) so ChatGPT, Claude, Perplexity and Google AI Overviews quote your store correctly. A developer who implements the fixes, not a consultant who writes a report.",
})

const data: SeoLandingData = {
  slug: "shopify-seo-expert",
  eyebrow: "Taking on Shopify SEO work now",
  h1: "Shopify SEO Expert",
  lede:
    "Most Shopify SEO problems are not content problems. They are Liquid problems, settings problems and duplicate-URL problems — and the SEO agency you hired cannot fix them because the fix lives in the theme. I do both halves: I find what is broken and then I go in and change it.",
  intro: [
    "Here is the pattern I see on almost every store that comes to me. Someone has been paid for six months of SEO. There is a keyword spreadsheet, a content calendar and a monthly PDF. Meanwhile the store has four thousand crawlable URLs for eleven hundred products, half the collection pages canonicalise to themselves under three different filter combinations, and the product schema is being injected by an app that also injects a second, conflicting copy. None of that shows up in a content calendar. All of it decides whether Google indexes you at all.",
    "I am a Shopify developer first. That matters more than it sounds like it should. A Shopify SEO consultant hands you a recommendation and you go looking for someone who can implement it — and the implementation is where the project usually dies. I write the Liquid, edit robots.txt.liquid, restructure the collection tree, fix the canonicals and then verify the result in Search Console. One person, no handoff, no translation loss.",
    "I also did every one of these things on this site during the past week, which means you can check my work instead of taking my word for it. This site serves a full JSON-LD @graph on every page — Person, Service, FAQPage, BreadcrumbList. It publishes an llms.txt and an llms-full.txt written for AI crawlers. Its sitemap and robots directives are generated from code rather than hand-maintained. And it had a canonical host mismatch: the site is served on the www host, but the sitemap, the canonical tags and the llms files all pointed at the non-www host, which 308-redirects. Every URL in the sitemap redirected. Every canonical named a URL that redirected. Nineteen URLs — every service page and every blog post — sat outside Google's index because of it. I found it, I fixed it, and I can walk you through exactly how I found it.",
  ],
  playbookLine:
    "Four stores, four verticals, one order of operations: make the pages indexable, make the data machine-readable, then make the content worth ranking.",
  servicesTitle: "What Shopify SEO services actually cover",
  services: [
    {
      title: "Technical SEO for Shopify",
      body:
        "Crawlability, canonical rules, duplicate collection and filter URLs, pagination, internal linking and index bloat from variants and tag pages. This is the part that decides whether your pages are even eligible to rank, and on Shopify it is broken by default more often than not.",
    },
    {
      title: "Schema markup and structured data",
      body:
        "Product, Offer, AggregateRating, BreadcrumbList, FAQPage and Organization written into the theme, validated, and de-duplicated against whatever your apps are already emitting. Valid markup is what makes a listing show a price, stock status and stars instead of a plain blue link.",
    },
    {
      title: "robots.txt and sitemap control",
      body:
        "Shopify generates both automatically and gets parts of them wrong for your store specifically. I customise robots.txt.liquid to stop the crawl waste, keep the sitemap honest, and make sure the two are not contradicting each other — a surprisingly common and completely silent failure.",
    },
    {
      title: "AI search optimization — GEO and AEO",
      body:
        "Getting your store quoted accurately by ChatGPT, Claude, Perplexity and Google AI Overviews: llms.txt and llms-full.txt, AI crawler access, and content structured so an answer engine can lift a correct fact about you instead of guessing. Almost nobody is selling this yet.",
    },
    {
      title: "Blog and content SEO that links back to money",
      body:
        "Topical clusters built around what people actually search, each article linking into the product and collection pages it supports. Content that does not route traffic to something buyable is a hobby, not a channel.",
    },
    {
      title: "Measurement you can check yourself",
      body:
        "Search Console and GA4 set up so you can see indexing status, impressions and rich-result eligibility without asking me. I would rather you audit my work than trust a monthly PDF. Page speed is a ranking input too — that work lives on the Shopify speed optimization page.",
    },
  ],
  extraSections: [
    {
      title: "Technical SEO for Shopify",
      intro:
        "Shopify is a good platform that makes a handful of SEO decisions on your behalf, and several of them are wrong for a catalog of any size. None of these are exotic. All of them are common, and all of them are invisible until someone looks.",
      items: [
        {
          title: "Duplicate collection and filter URLs",
          body:
            "This is the classic Shopify trap. The same product exists at /products/x and at /collections/anything/products/x, and Shopify's default canonical usually handles the simple case — but the moment you add filters, sort orders and tag pages, you get /collections/shoes/blue, /collections/shoes?filter.v.option.color=blue and /collections/shoes/blue?sort_by=price-ascending all serving near-identical content. Google crawls all of them, splits the ranking signals between them, and often picks the wrong one to show. I map what is actually being crawled, set the canonical rules, and cut the rest off.",
        },
        {
          title: "Index bloat from variants and tag pages",
          body:
            "A store with 1,200 products and eight tags per product can generate tens of thousands of crawlable tag URLs, none of which anyone searches for and all of which consume the crawl budget your real pages need. The fix is not one setting — it is deciding which of those pages have genuine search demand behind them, keeping those, and removing the rest from the index properly rather than with a blanket robots block that also hides the signals.",
        },
        {
          title: "Canonicals, redirects and the host problem",
          body:
            "A canonical tag that points at a URL which redirects is not a hint, it is a contradiction, and Google resolves it by not indexing the page. Same for a sitemap full of redirecting URLs. This is exactly the failure I found and fixed on my own site this week, and it is far more common than it should be — it happens quietly every time a store switches between www and non-www, adds a domain, or migrates and keeps an old base URL in a template.",
        },
        {
          title: "Pagination and infinite scroll",
          body:
            "If page two of a collection cannot be reached without JavaScript, the products on it may never be discovered. Infinite scroll implemented badly hides most of a catalog from crawlers while looking perfect to a human. I check what is reachable from a plain HTML fetch, because that is what the crawler sees.",
        },
        {
          title: "Internal linking and site architecture",
          body:
            "Internal links are how importance moves through a site, and most Shopify stores leak it — every product in one flat collection, no hub pages, navigation that links to twelve things and body copy that links to nothing. I design the collection tree around how people search rather than how the warehouse is organised, and build the collection-to-product and blog-to-collection links that make the structure legible.",
        },
        {
          title: "Search Console as the source of truth",
          body:
            "Not a third-party score out of 100. The Page indexing report tells you which of your URLs Google has excluded and why, in Google's own words. Most stores have never had anyone read it line by line. That report is where I start on every engagement, and it is where you will see the first results.",
        },
      ],
    },
    {
      title: "Shopify schema markup and structured data",
      intro:
        "Structured data is you telling Google, in a format it does not have to interpret, what a page is. Done right it changes how your listing looks in the results. Done wrong it does nothing, and there is a lot of markup on Shopify stores that does nothing.",
      items: [
        {
          title: "What actually earns a richer listing",
          body:
            "Product with a valid Offer — price, currency and availability — is what puts price and stock into the search result. BreadcrumbList replaces the raw URL with a readable path. FAQPage can earn expandable questions under your listing. AggregateRating can show stars, but only when the reviews are genuinely on the page and genuinely from customers. Organization ties the store to a logo and social profiles in the knowledge panel.",
        },
        {
          title: "What is quietly ignored",
          body:
            "Marking up content that is not visible on the page. Review markup you wrote about yourself. Stuffing keywords into schema properties. Article markup on a product page. Google either drops these or, for the review case, applies a manual action. Plenty of Shopify SEO apps emit exactly this kind of markup by default and report it to you as a green check.",
        },
        {
          title: "The double-schema problem",
          body:
            "Your theme emits Product schema. Your review app emits its own. Your SEO app emits a third. They disagree about price or availability, and Google gets to choose which one to believe. I audit everything a page is emitting, consolidate it into one @graph the theme controls, and turn off the duplicates at the source.",
        },
        {
          title: "Written into the theme, not injected by an app",
          body:
            "App-injected schema breaks when you change themes, disappears when you cancel the subscription, and usually renders after the page loads. Markup in the Liquid template ships in the HTML, survives, and is yours. It also costs nothing per month.",
        },
        {
          title: "Validated, then re-validated",
          body:
            "Every change goes through the Rich Results Test and the Schema.org validator before it ships, and through Search Console's enhancement reports after. Schema that validates in a tool but throws errors on live URLs is common, and the only way to know is to check the live URLs.",
        },
      ],
    },
    {
      title: "robots.txt and sitemap on Shopify",
      intro:
        "Shopify generates both for you. That is convenient and it is also the problem: the defaults are written for the average store, and the crawl-waste patterns that hurt you are specific to your catalog.",
      items: [
        {
          title: "What Shopify gives you by default",
          body:
            "An automatically generated robots.txt that already blocks the cart, checkout, account and internal search pages, and an auto-generated sitemap.xml that splits into child sitemaps for products, collections, blogs and pages. For a small store this is fine. It is genuinely a good default.",
        },
        {
          title: "Where the defaults fall short",
          body:
            "The default rules do not know about your filter parameters, your tag pages, or the thousands of near-duplicate URLs your specific merchandising creates. The generated sitemap includes every published product and page whether or not it should be indexed, so a store with a large archive of thin or discontinued products is asking Google to spend its crawl budget on them. And nothing in the default reconciles the sitemap against your canonicals.",
        },
        {
          title: "robots.txt.liquid customisation",
          body:
            "Shopify lets you override the generated file with a robots.txt.liquid template, which is the correct place to add crawl rules, block parameter patterns that produce duplicates, control specific crawlers, and add sitemap references. It is also a file where one careless line can deindex a store, so it gets version-controlled, reviewed and tested against real URLs before it goes live.",
        },
        {
          title: "AI crawlers are a separate decision",
          body:
            "GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot and a dozen others each identify themselves and each can be allowed or blocked independently. That is a business decision, not a technical one: blocking them protects your content and removes you from AI answers, allowing them does the reverse. Most store owners have never made the decision consciously — they inherited whatever the default was. I make sure it is a choice.",
        },
        {
          title: "Sitemap discipline",
          body:
            "Every URL in the sitemap should return 200 and should be the canonical version of itself. No redirects, no noindexed pages, no URLs pointing at a host that forwards somewhere else. It sounds obvious. It is the single most common thing I find broken, and it was broken on this site until I fixed it.",
        },
      ],
    },
    {
      title: "GEO and AEO — getting cited by AI, not just ranked",
      intro:
        "A growing share of the questions your customers used to type into Google now get answered by ChatGPT, Claude, Perplexity, Gemini or a Google AI Overview — and the answer names a small number of sources. Being one of those named sources is a different job from ranking, and almost nobody is selling it yet. Generative engine optimization and answer engine optimization are the terms people are settling on; the work behind both is the same.",
      items: [
        {
          title: "Why a brand wants to be the source an AI names",
          body:
            "When someone asks an assistant to recommend a product, the model answers from what it can retrieve and it attributes the answer to a handful of sites. If your store is not one of them, a competitor is — and the customer never sees a search result page where you could have appeared. Worse than being absent is being present and wrong: models will state your price, your shipping policy or your return window from whatever they can find, and if that information is not clearly structured on your site, they will infer it. Being citable is partly about traffic and mostly about controlling what is said about you.",
        },
        {
          title: "llms.txt and llms-full.txt",
          body:
            "A plain-text file at the root of your domain that states, in the model's own preferred format, who you are, what you sell, what is true about your policies, and which pages matter. llms.txt is the summary; llms-full.txt carries the detail. There is no search volume behind the term yet and no search engine requires it — that is precisely why it is cheap to do now. This site publishes both, and you can read them.",
        },
        {
          title: "Content an answer engine can actually lift",
          body:
            "Models quote passages, not pages. That rewards a specific shape of writing: a direct question as a heading, a complete answer in the first two sentences under it, facts stated as sentences rather than implied by a table, and no critical information trapped in an image or loaded by JavaScript. Most product pages fail this on the third point alone. FAQ sections with real questions and self-contained answers are the highest-leverage single change for most stores.",
        },
        {
          title: "Structured data does double duty",
          body:
            "The same Product, Offer and FAQPage markup that earns rich results in Google also gives a retrieval system an unambiguous statement of your price, availability and answers. You are not doing two jobs. You are doing one job that pays out in two places, which is the main reason GEO work is not a separate budget line.",
        },
        {
          title: "Crawler access, checked rather than assumed",
          body:
            "None of the above matters if GPTBot is getting a 403 from your CDN or your bot-protection app is silently blocking ClaudeBot. I verify what each crawler actually receives instead of assuming robots.txt is being honoured by the layers in front of it.",
        },
        {
          title: "How this gets measured, honestly",
          body:
            "There is no Search Console for AI answers yet. What can be measured: referral traffic from chatgpt.com, perplexity.ai and similar sources in GA4, whether the crawlers are fetching you in your server logs, and manual spot-checks asking the assistants your own category questions and recording who they name. That is a real, repeatable measurement — it is just not a rank tracker, and I will not pretend it is one.",
        },
      ],
    },
    {
      title: "Blog and content SEO that feeds the store",
      intro:
        "Content is the slowest part of SEO and the only part that keeps compounding after you stop paying for it. It is also where most Shopify content budgets are wasted, because the articles never connect to anything you can buy.",
      items: [
        {
          title: "Clusters, not scattered posts",
          body:
            "One substantial hub page for a topic your store should own, surrounded by articles that answer the specific questions around it, all linked to each other and all linked into the collection they support. Twelve unrelated posts on twelve unrelated topics build nothing. Twelve posts around one topic build an argument that your site is the place to read about it.",
        },
        {
          title: "Topics chosen from demand, not from opinion",
          body:
            "I pull real search volume and difficulty data before anything gets written, and I would rather target a 90-searches-a-month term where you can plausibly rank than a 20,000-a-month term where the first page is Amazon, Wikipedia and three publishers with twenty years of links. The map of what is worth targeting comes before the calendar.",
        },
        {
          title: "Every article routes to something buyable",
          body:
            "In-body links from articles into the exact collection or product they discuss, with anchor text that describes the destination. This is how blog traffic turns into revenue instead of into a chart you show at a meeting, and it is also how a collection page accumulates the internal links it needs to rank.",
        },
        {
          title: "Product and collection copy counts as content",
          body:
            "Collection pages with a real introduction and a real answer to what a shopper is choosing between will outrank a bare product grid. Product descriptions that answer the questions your support inbox gets will outrank a manufacturer's copy pasted onto four hundred other stores. This is usually the cheapest content work available and almost always the last thing anyone does.",
        },
      ],
    },
    {
      title: "What to expect — and what nobody can promise",
      intro:
        "Every SEO page you have read promises rankings. This one does not. What follows is what typically happens and on what timeline, stated as expectations rather than guarantees. Outcomes depend on your store, your niche, your competition and how much was broken to begin with. Nobody can guarantee a position in Google, because nobody selling SEO controls the ranking system. Anyone who guarantees one is either misinformed or counting on you not checking.",
      items: [
        {
          title: "Days: the fixes that are binary",
          body:
            "Some things are not a matter of degree. A page is either eligible to be indexed or it is not. If your canonicals point at a host that redirects, or your sitemap lists URLs that 301, those pages will not be indexed — and no content change alters that. Fixing it flips a page from excluded to eligible, and Search Console's Page indexing report reflects it typically within a few days to two weeks after a recrawl. That part is verifiable and you can watch it happen in your own account. What position the page then takes is a completely separate question with a completely different answer.",
        },
        {
          title: "Days to weeks: structured data and rich results",
          body:
            "Valid markup shows up in Search Console's enhancement reports shortly after a recrawl, usually within days. Whether it changes how your listing looks in the results is Google's call, not mine — rich results are an eligibility, not an entitlement, and Google withholds them from plenty of pages with perfectly valid schema. When they do appear it is typically a matter of a few weeks. Expect improved eligibility with certainty and improved appearance with confidence, not certainty.",
        },
        {
          title: "Weeks to months: ranking movement",
          body:
            "Once pages are indexable and the duplication is resolved, movement usually shows up first on long-tail and mid-tail terms — the specific product and category phrases where the competition is thinner. Typically that begins somewhere in the four-to-twelve-week range and continues after. Head terms move more slowly and usually need links and brand signals rather than more code, which is honest work but not work I can do for you in a sprint.",
        },
        {
          title: "Months: content and topical authority",
          body:
            "A content cluster takes roughly three to nine months to carry meaningful traffic, because it needs to be written, indexed, linked and then trusted. If someone tells you an article will rank in two weeks, they are describing a keyword nobody searches for. This is the part of SEO that requires patience, and the part that keeps paying after the engagement ends.",
        },
        {
          title: "The size of the outcome is set by your store, not by me",
          body:
            "Two results already published on this site: an international luxury fashion brand at +455% sessions, +114% orders and +74% revenue over the engagement, and a US-based beauty and lifestyle brand at +254% in total sales. Those are real numbers on real stores. They are not a forecast for yours. They happened in specific niches with specific catalogs, and technical SEO was one of several things moving at the same time — catalog data, page speed and marketing all changed too. I publish them as evidence that I have done the work, never as an average you should expect.",
        },
        {
          title: "Some number one results cannot be won, and I will tell you which",
          body:
            "In several of the highest-intent Shopify queries, the result sitting at number one is a page the platform itself owns — shopify.com/partners/directory, apps.shopify.com. In adjacent categories it is the same story with the vendor's own site. Those positions are brand property and no amount of content outranks a platform on its own terms. The realistic target is a position beneath them, or the long tail where the platform has no page at all. I know this precisely because I measured it on my own site and it was not the answer I wanted. I would rather tell you that on the first call than sell you a number one you were never going to get.",
        },
        {
          title: "What I will actually commit to",
          body:
            "Not rankings, and not a pay-when-you-rank arrangement, because both require pretending I control an algorithm I do not. What I commit to is the work and the reporting: a full audit with findings you can verify yourself, the fixes implemented rather than recommended, documentation of every change, and a straight answer every month about what moved, what did not, and what I got wrong.",
        },
      ],
    },
  ],
  stepsTitle: "How a Shopify SEO engagement runs",
  steps: [
    {
      title: "Free 30-minute call",
      body:
        "You tell me the store URL and what you think is wrong. I look at it while we talk — index coverage, what is actually being crawled, whether the schema validates, whether the sitemap is honest. If the problem is not SEO, or if you do not have enough traffic yet for SEO to be the right spend, I say so on that call.",
    },
    {
      title: "Shopify SEO audit",
      body:
        "A fixed-price technical audit: crawl of the whole store, Search Console indexing analysis, structured data validation on real URLs, robots and sitemap review, internal link structure, and an AI-crawler and citation check. You get a prioritised list with effort and expected impact against each item, and you own it whether or not you continue with me.",
    },
    {
      title: "Implementation, highest impact first",
      body:
        "The indexability and duplication fixes ship first because they are the ones that gate everything else. Everything is built on a duplicated theme, previewed, and pushed with a written change log. Nothing goes to your live store before you have seen it.",
    },
    {
      title: "Verify, then keep going",
      body:
        "After launch we watch the Page indexing and enhancement reports together — those move first and confirm the fixes landed. From there it is either a handover with documentation, or a monthly retainer for the slower work: content clusters, internal linking, and the next round of what the data says to do.",
    },
  ],
  faqTitle: "Shopify SEO expert FAQ",
  faq: [
    {
      q: "How much does a Shopify SEO expert cost?",
      a:
        "A standalone technical audit is fixed-price and starts around US$500, and you keep the findings whether or not you hire me to implement them. Implementation is quoted from that audit, so you see the price after you know the scope rather than before. Ongoing SEO — content clusters, internal linking, monthly monitoring — runs as a retainer with an agreed number of hours. My hourly rate for ad-hoc work is US$60 to US$90. I will not quote a number before I have looked at the store.",
    },
    {
      q: "Is Shopify good for SEO?",
      a:
        "Yes, with two caveats. Shopify handles the fundamentals well: fast hosting, clean URL structure, automatic sitemaps, mobile-ready themes, HTTPS everywhere. The caveats are that it forces a URL structure you cannot fully control — /collections/ and /products/ are fixed — and that it generates duplicate URLs for products inside collections and for filtered and tagged pages. Both are manageable. Neither is fixed for you automatically. That is most of what a Shopify SEO expert is actually hired to deal with.",
    },
    {
      q: "Do I need an SEO app for Shopify?",
      a:
        "Usually not, and often the app is the problem. Most Shopify SEO apps do three things: bulk-edit meta titles, inject schema, and generate a score. The bulk editing is useful. The injected schema frequently conflicts with what your theme already emits, giving Google two contradictory descriptions of the same product. The score is not a metric any search engine uses. I would rather put the markup in the theme where you own it and it costs nothing per month.",
    },
    {
      q: "What is GEO, and is it different from SEO?",
      a:
        "GEO — generative engine optimization, sometimes called AEO or answer engine optimization — is optimising to be cited by AI systems that answer questions directly: ChatGPT, Claude, Perplexity, Gemini and Google's AI Overviews. It overlaps heavily with technical SEO rather than replacing it. The same structured data, clean crawlability and clear factual writing serve both. The parts specific to GEO are llms.txt and llms-full.txt, deliberate AI-crawler access decisions, and writing in passages an answer engine can lift verbatim. Practically: if you are doing technical SEO properly you are already most of the way there, and the remaining distance is cheap to cover right now while few competitors are covering it.",
    },
    {
      q: "Can you guarantee first page rankings?",
      a:
        "No, and neither can anyone else. Nobody selling SEO controls Google's ranking system, so a guarantee is either a misunderstanding or a sales tactic. What I can tell you with certainty is which of your pages are currently excluded from the index and why, because Google publishes that in your own Search Console. Fixing an indexability problem is a verifiable change from excluded to eligible. Ranking is a competition, and I can improve your position in it without promising the result.",
    },
    {
      q: "How long does Shopify SEO take to work?",
      a:
        "Technical fixes appear in Search Console within days to a couple of weeks — indexing status and structured data reports move first. Ranking movement on long-tail and mid-tail terms typically begins somewhere between four and twelve weeks after the fixes land. Content and topical authority is a three-to-nine-month horizon. Competitive head terms can take longer than that and often depend on links and brand strength more than on anything in the theme. Any timeline more precise than that is a guess dressed up as a plan.",
    },
    {
      q: "Why are my Shopify products not showing up on Google?",
      a:
        "In order of how often I find it: the pages are excluded from the index for a technical reason and nobody has read the Page indexing report; canonical tags or the sitemap point at URLs that redirect, so Google will not index the destination; the products are duplicated across collection and filter URLs and the ranking signal is split; the pages are indexed but rank below the fold of page three, which feels identical to not being indexed but is a completely different problem with a completely different fix. The first diagnostic step is always Search Console, not a keyword tool.",
    },
    {
      q: "What is the difference between you and an SEO agency?",
      a:
        "An agency will produce the audit and then hand you a list of things someone else has to implement in your theme, which is where most Shopify SEO projects quietly stall. I write the Liquid. The audit and the fix are the same engagement and the same person, so nothing gets lost in translation and nothing waits on a developer being scheduled. You also talk to the person doing the work rather than to an account manager. Where an agency genuinely wins is volume content production, and if that is what you need I will tell you.",
    },
    {
      q: "Do you work on page speed too?",
      a:
        "Yes, but it is a separate discipline with a separate page. Core Web Vitals are a ranking input and a conversion input, and the work — third-party script auditing, LCP and CLS fixes, theme and image optimisation — is different enough from technical SEO that it is scoped separately. See the Shopify speed optimization page. Most engagements end up touching both, and I sequence indexability first because a fast page that Google will not index is worth nothing.",
    },
    {
      q: "Can I see an example of this work?",
      a:
        "This site is the example, and it is the only one I can show you in full because client work is under NDA. Every page here serves a complete JSON-LD @graph — Person, Service, FAQPage and BreadcrumbList. There is an llms.txt and an llms-full.txt at the root, both written for AI crawlers. The sitemap and robots directives are generated from code so they cannot drift from reality. And it had a real, embarrassing bug: a canonical host mismatch that kept nineteen URLs — every service page and every blog post — outside Google's index. I found it by reading the indexing report rather than by guessing, and I fixed it. View the source on any page here and check.",
    },
  ],
  ctaTitle: "Want to know why your Shopify store is not ranking?",
  ctaBody:
    "Send me the store URL. I will look at your index coverage, your canonicals and your structured data and tell you what is actually wrong within one business day — free, no sales call required.",
  waText:
    "Hi Matheus, I found your Shopify SEO expert page. I need help with SEO on my Shopify store — here is the URL:",
  serviceName: "Shopify SEO Services",
  serviceDescription:
    "Shopify SEO expert services: technical SEO audits and implementation, crawlability and canonical fixes, duplicate collection and filter URL handling, index bloat removal, Product and FAQPage schema markup and structured data, robots.txt.liquid and sitemap customisation, AI search optimization (llms.txt, generative and answer engine optimization) and blog content clusters for Shopify and Shopify Plus stores.",
  breadcrumb: "Shopify SEO Expert",
  related: [
    { href: "/shopify-expert", label: "Shopify Expert" },
    { href: "/shopify-speed-optimization", label: "Shopify Speed Optimization" },
    { href: "/hire-shopify-developer", label: "Hire a Shopify Developer" },
    { href: "/shopify-migration-expert", label: "Shopify Migration Expert" },
    { href: "/matrixify-expert", label: "Matrixify Expert" },
    { href: "/klaviyo-expert", label: "Klaviyo Expert" },
  ],
}

export default function ShopifySeoExpertPage() {
  return <SeoLanding data={data} />
}
