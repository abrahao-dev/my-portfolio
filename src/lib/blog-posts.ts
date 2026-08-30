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
    slug: 'shopify-canonical-urls-duplicate-content',
    title: 'Shopify Canonical URLs: The Duplicate Content Trap in Collections and Filters',
    description:
      'How Shopify canonical URLs actually work, why collection-scoped product URLs and filter parameters multiply your index, and the theme-level fixes that hold.',
    date: '2026-08-30',
    readTime: '11 min read',
    tags: ['Shopify SEO', 'Technical SEO', 'Canonical URLs', 'Liquid', 'Storefront Filtering'],
    featured: true,
    body: `## The same product, at four different addresses

Shopify canonical URLs are the single most misunderstood thing in Shopify technical SEO, and the reason is that the platform mostly gets them right — right up until a theme, an app or a merchandiser gets them wrong, and then nothing tells you.

Here is the shape of the problem. One product, on a stock store, is reachable at least four ways:

- \`/products/linen-shirt\`
- \`/collections/shirts/products/linen-shirt\`
- \`/collections/new-arrivals/products/linen-shirt\`
- \`/products/linen-shirt?variant=4409130\`

Add a collection with filters and it gets worse. Storefront filtering reflects every applied filter in the URL as a query parameter, and Shopify lets a merchant configure up to 25 filters on a collection. Filters combine with AND logic and values within a filter combine with OR, so a collection with a colour filter, a size filter and a price range is a combinatorial URL generator:

\`\`\`
/collections/shirts?filter.v.option.color=blue
/collections/shirts?filter.v.option.color=blue,white
/collections/shirts?filter.v.option.size=m&filter.v.option.color=blue
/collections/shirts?filter.p.tag=new&filter.v.availability=1
/collections/shirts?filter.v.price.gte=40&filter.v.price.lte=90
/collections/shirts?sort_by=price-ascending
/collections/shirts?page=3
\`\`\`

None of those are new content. All of them are crawlable if something links to them.

## What Shopify gives you for free

Shopify exposes a global Liquid object, \`canonical_url\`, that holds the canonical URL for the current page. Themes are expected to render it in the head of \`layout/theme.liquid\`:

\`\`\`liquid
<link rel="canonical" href="{{ canonical_url }}" />
\`\`\`

That one line does most of the work. On a stock theme, a product reached through a collection path resolves its canonical back to the bare \`/products/<handle>\` address, so the four URLs above consolidate into one.

The trap is that this is a *theme* responsibility, not a platform guarantee. Nothing on the platform forces the tag to exist, forces it to be unique, or stops a second one from being injected below it.

## The three ways it breaks in production

**1. The tag is missing on one template.** Custom templates, landing-page-builder templates and app-generated pages are the usual suspects, because they often bypass the standard layout. Check the head of every template type you have, not just the product page.

**2. There are two canonical tags.** An SEO app injects one, the theme renders one, and they disagree. Search engines will pick one or ignore both. This is the most common finding I have on stores that have installed and uninstalled two or three SEO apps over the years — uninstalling an app does not always remove the snippet it added to \`theme.liquid\`.

**3. Someone hardcoded the host.** A canonical pointing at a host that immediately redirects is a canonical pointing at nothing useful. I did this to my own site: sitemap entries and canonicals pointed at the bare domain while the site served on the \`www\` host and 301'd everything to it. Every canonical named a URL that redirected. Search Console kept the site down to four indexed URLs until I fixed it. Nothing errored, nothing warned, and it took a rank check across every service page to notice.

Verify it the boring way. Open your product page in incognito, view source, and search for \`rel="canonical"\`. Count the matches. There should be exactly one, and it should be an absolute URL on the host you actually serve.

## Internal linking is what creates the duplicates in the first place

Canonicals are damage control. The real fix is not generating the alternate URLs at scale.

In Liquid, \`product.url\` gives you \`/products/<handle>\`. The \`within\` filter is what produces the collection-scoped variant:

\`\`\`liquid
{% comment %} Emits /collections/shirts/products/linen-shirt {% endcomment %}
<a href="{{ product.url | within: collection }}">{{ product.title }}</a>

{% comment %} Emits /products/linen-shirt {% endcomment %}
<a href="{{ product.url }}">{{ product.title }}</a>
\`\`\`

Many themes use \`within: collection\` on product cards, because it powers the "next/previous product in this collection" navigation on the product page. That is a genuine UX feature and it has a genuine SEO cost: every collection page becomes a source of collection-scoped links to the same products.

The decision I make on most stores is to keep \`within\` only where the collection context is actually used by the template, and to use the bare \`product.url\` everywhere else — related products, search results, cart, upsell blocks, email templates, feeds. Then the canonical is a backstop rather than the primary mechanism.

## Filters: do not noindex your best pages by reflex

The standard advice is "block filtered URLs." I think that is wrong more often than it is right.

Some filtered URLs are genuinely valuable landing pages. \`/collections/shirts?filter.v.option.color=white\` is answering a real query with a real intent. If white shirts are a meaningful part of your business, that URL should probably become a real collection with its own handle, its own title, its own copy and its own place in the sitemap — not a parameter you hide.

The split I use:

- **Promote** the two or three filter combinations that map to real demand. Build them as actual collections. Now they have canonical URLs of their own and can rank.
- **Leave alone** the ordinary single-value filters. Canonicalised back to the collection, they cost you very little.
- **Block** the combinatorial tail and anything with no landing intent — sort orders, multi-value stacks, internal search results.

Internal search is the clearest case. Search result pages have no business in an index, and they are the easiest thing in the world to accidentally expose. You can block them at the crawl layer with the \`robots.txt.liquid\` template, adding a rule inside the group that targets all crawlers:

\`\`\`liquid
{% for group in robots.default_groups %}
  {{- group.user_agent }}
  {%- for rule in group.rules -%}
    {{ rule }}
  {%- endfor -%}
  {%- if group.user_agent.value == '*' -%}
    {{ 'Disallow: /*?q=*' }}
  {%- endif -%}
  {%- if group.sitemap != blank -%}
    {{ group.sitemap }}
  {%- endif -%}
{% endfor %}
\`\`\`

That is Shopify's own documented pattern: loop the default groups so you inherit the rules Shopify maintains, and add yours conditionally. Do not replace the whole file with static text — the default rule set gets updated and you would freeze it.

One thing worth being precise about: \`Disallow\` in robots.txt prevents crawling, not indexing. A URL that is blocked from crawling can still appear in results if enough pages link to it, and because the crawler cannot fetch it, it cannot see your canonical or your noindex either. Use robots.txt for crawl budget on worthless URLs. Use canonicals for consolidation. They are different tools and blocking a page you wanted consolidated is a self-inflicted wound.

## Removing pages from the index, properly

Shopify gives you two levers that most merchants never find:

- **The \`seo.hidden\` metafield.** Set it to \`1\` on a page, blog post or product and Shopify removes it from your sitemap, from search engines, and from your online store's own search.
- **Unlisted product status.** Sets a product so it stays reachable by direct link but drops out of sitemaps, collection pages and store search.

Both are better than a hand-rolled noindex conditional in \`theme.liquid\`, because they also fix the sitemap. A noindex meta tag on a URL that is still listed in your sitemap is a contradiction you are asking a crawler to resolve, and it wastes crawl budget every time.

## Hreflang, if you run Markets

If your store uses Shopify Markets, Shopify emits hreflang tags automatically through \`content_for_header\`, and those tags stay in sync with each page's canonical URL. That is the important part: the automatic tags and the canonical agree by construction.

Shopify's own warning is worth repeating verbatim in spirit — adding your own hreflang tags on top of the automatic ones produces duplicate or conflicting annotations and can hurt your ranking. If your theme or an app already outputs hreflang, turn one of them off. Two sources is always worse than either source alone.

## The audit, in order

This is what I actually run on a new store, and it takes about an hour:

- View source on one product, one collection, one filtered collection, one page and one blog post. Count canonical tags on each. Exactly one, absolute, on the live host.
- Grep the theme for \`within:\` and decide, per usage, whether the collection context is real.
- Open \`/robots.txt\` and read it. If it has been customised, read the \`robots.txt.liquid\` template and check it still loops \`robots.default_groups\` rather than hardcoding rules.
- Pull the URL list from Search Console's Pages report and sort by "Duplicate, Google chose a different canonical" and "Alternate page with proper canonical tag." The first bucket is your bug list. The second is the system working.
- Check every canonical resolves with a 200, not a 301. This is the one that took my own site out of the index.

Duplicate content on Shopify is rarely a content problem. It is a URL-generation problem with a one-line fix that four different things can quietly undo.

---

## Related services

Canonicals, filters and index hygiene are implementation work, not advice work — see [Shopify SEO expert services](/shopify-seo-expert) for what that covers, and [Shopify expert development](/shopify-expert) for the theme-level work behind it. If a replatform is what broke your canonicals, [Shopify migration expert](/shopify-migration-expert) covers the redirect and URL-inventory side. Related reading: [robots.txt and sitemap.xml on Shopify](/blog/shopify-robots-txt-sitemap-guide).

---

*I fix Shopify technical SEO on production stores. See [Shopify SEO expert services](/shopify-seo-expert) or [hire a Shopify developer](/hire-shopify-developer).*

*Direct: [WhatsApp +55 11 98851-2788](https://wa.me/5511988512788) · [contato.matheusabrahao@gmail.com](mailto:contato.matheusabrahao@gmail.com)*`,
  },
  {
    slug: 'shopify-schema-markup-rich-results',
    title: 'Shopify Schema Markup: What Actually Earns Rich Results Now',
    description:
      'FAQ rich results are gone. What still earns them: the structured_data Liquid filter, Product vs ProductGroup, and the required merchant listing fields.',
    date: '2026-08-29',
    readTime: '12 min read',
    tags: ['Shopify SEO', 'Schema.org', 'Structured Data', 'JSON-LD', 'Liquid'],
    featured: false,
    body: `## Half of what you have been told about Shopify schema markup is now false

Shopify schema markup advice ages badly, because the thing it depends on — which structured data types Google actually renders as a rich result — changes without warning and the blog posts do not.

Two concrete examples of advice that was correct and is not any more:

- **FAQPage.** Google narrowed FAQ rich results in September 2023 so that they only showed for well-known, authoritative government and health sites. It then removed the feature from search results entirely in May 2026 and retired the documentation the following month. Every "add an FAQ app to get rich results" post is now selling you nothing.
- **HowTo.** Same story, earlier.

Meanwhile the thing that *does* still earn rich results on an ecommerce store got easier, because Shopify now emits it for you. This post is the current state.

## Start by finding out what your theme already emits

Modern Shopify themes do not hand-write product JSON-LD any more. Dawn emits it with one line:

\`\`\`liquid
<script type="application/ld+json">
  {{ product | structured_data }}
</script>
\`\`\`

\`structured_data\` is a real Liquid filter and it is worth understanding precisely, because almost nobody writing about Shopify SEO mentions it. It converts an object into schema.org structured data, it works on the \`product\` and \`article\` objects, and the output type depends on the data:

- A product **without** variants outputs as a schema.org \`Product\`.
- A product **with** variants outputs as a \`ProductGroup\`.
- An article outputs as an \`Article\`.

That \`Product\` versus \`ProductGroup\` split matters. \`ProductGroup\` is how you tell Google that six URLs are colours of one thing rather than six competing products, and getting variant relationships right is the difference between a clean merchant listing and a catalogue that looks duplicated from the outside.

So the first job on any store is not "add schema." It is: view source on a product page, find every \`application/ld+json\` block, and count them. I routinely find three — one from the theme, one from an SEO app, and one hardcoded into \`theme.liquid\` by whoever came before. They disagree about price. That is worse than having none, because you have handed a crawler a contradiction and let it choose.

## What Google actually requires

For merchant listing experiences — the price, availability and shipping detail that shows next to a product result — the required properties are short:

On \`Product\`:

- \`name\`
- \`image\`
- \`offers\`

On the \`Offer\`:

- \`price\` (or \`priceSpecification.price\`)
- \`priceCurrency\` (or \`priceSpecification.priceCurrency\`), a three-letter ISO 4217 code

And one constraint that catches people: merchant listing experiences require a price **greater than zero**. Products priced at 0 as a "call for pricing" placeholder — extremely common on trade and made-to-order catalogues — are not eligible, and no amount of markup fixes that. If you sell that way, the honest answer is that merchant listings are not your channel and you should put the effort into the collection and content pages instead.

Everything beyond those fields is optional enrichment: \`sku\`, \`gtin\`, \`brand\`, \`availability\`, \`itemCondition\`, \`aggregateRating\`, \`review\`, shipping and return policy details. Optional does not mean useless — a listing with GTIN and brand matches to Google's product knowledge graph far more reliably — but it does mean you should fix required-field failures before you go looking for enrichment.

## The JSON-LD bugs I keep finding in themes

If your theme or an agency hand-builds JSON-LD instead of using the filter, there are two failure modes that produce *valid-looking* markup with wrong values. Shopify documents both, and I have found both in production.

**1. Filter order in string concatenation.** This looks harmless:

\`\`\`liquid
{%- assign json_price = '"price": "' | append: product.price | money_without_currency -%}
\`\`\`

The \`money_without_currency\` filter applies to the whole concatenated string, not to the price. The string parses as \`0.0\` and the block silently renders \`0.00\`. Your product page says 89.00 and your structured data says 0.00, and nothing in the theme errors.

**2. Money filters in a schema price.** Never use \`money_without_currency\` for a schema.org price at all. It formats using the store's currency settings, so a locale that uses a comma as the decimal separator produces an invalid price value. Output a plain decimal instead:

\`\`\`liquid
{%- for product in collection.products -%}
  <script type="application/ld+json">
  {
    "@type": "Product",
    "name": {{ product.title | json }},
    "price": "{{ product.price | divided_by: 100.0 }}"
  }
  </script>
{%- endfor -%}
\`\`\`

Note \`| json\` on the title. Product titles contain quotes, ampersands and apostrophes, and an unescaped title is how a whole JSON-LD block becomes unparseable — which fails silently, because an invalid block is simply ignored.

Both of these are the same underlying lesson: **structured data fails quietly**. There is no console error, no visual change, no 500. The only way you find out is by testing.

## What is still worth marking up

Given FAQ and HowTo are gone, here is where I still spend the effort on a Shopify store:

**Product / ProductGroup.** The one that earns money. Emit it from Liquid with the source of truth being product fields and metafields, not an app that reads your rendered HTML.

**BreadcrumbList.** Still rendered by Google, and cheap. It should match your actual collection hierarchy, which means if your breadcrumbs are generated from the referring collection rather than a real hierarchy, fix the hierarchy first.

**Organization**, sitewide, with logo, \`sameAs\` links to your real social profiles, and contact details. This is the entity record. It does not produce a rich result on its own and it is disproportionately what answer engines quote when someone asks whether your brand is legitimate.

**Article** on blog posts, which you get from \`{{ article | structured_data }}\`.

**FAQPage — still yes, but for a different reason.** It no longer earns a rich result. It does still give a machine a clean, unambiguous question-and-answer structure on the page, and question-and-answer content is what gets lifted into AI answers and summaries. Mark it up because it makes the content parseable, not because you expect a blue accordion in the SERP. Anyone selling you FAQ schema as a rich-result play in 2026 has not checked in three years.

**Review and AggregateRating — carefully.** Reviews must be genuinely on the page, genuinely from customers, and genuinely about the thing being marked up. Self-serving markup on a page with no visible reviews is a manual-action risk, and the upside is not worth it.

## How to actually verify

Three checks, in this order, every time:

- **Rich Results Test** on the live URL, not on pasted code. Pasted code tests your JSON. The URL test catches the app that injects a second conflicting block after page load.
- **Search Console's Merchant listings and Product snippets reports.** These show what Google saw at crawl time across the whole site, which is the only way to catch the one template out of six that is broken.
- **View source and count \`ld+json\` blocks.** Manually. Once per template type. It takes two minutes and it is the check that finds the duplicates.

And the thing to internalise: structured data is a claim about your data, so it can only be as correct as your data. A product with a missing GTIN, an inconsistent brand value and a blank product type will produce technically valid markup that describes an incoherent product. Catalogue hygiene comes first — that is why [bulk catalogue operations](/matrixify-expert) and structured data are the same job on a store of any size.

## The short version

- Find out what your theme already emits before you add anything. Count the \`ld+json\` blocks.
- Use \`{{ product | structured_data }}\` unless you have a specific reason not to. It handles the Product versus ProductGroup distinction for you.
- Required for merchant listings: \`name\`, \`image\`, \`offers\`, with \`price\` and \`priceCurrency\`, and the price has to be above zero.
- Never build a schema price with a money filter. Output a plain decimal.
- FAQ and HowTo rich results are gone. Keep FAQPage for machine readability, drop it from your rich-result plan.
- Test the live URL, not the snippet.

---

## Related services

Structured data is one half of [Shopify SEO expert work](/shopify-seo-expert); clean product data is the other, which is [Matrixify catalog operations](/matrixify-expert). Theme-level implementation lives under [Shopify expert development](/shopify-expert). Related reading: [Shopify canonical URLs and the duplicate content trap](/blog/shopify-canonical-urls-duplicate-content).

---

*I implement structured data at the Liquid and metafield level, not with an app that guesses from your HTML. See [Shopify SEO expert services](/shopify-seo-expert) or [hire a Shopify developer](/hire-shopify-developer).*

*Direct: [WhatsApp +55 11 98851-2788](https://wa.me/5511988512788) · [contato.matheusabrahao@gmail.com](mailto:contato.matheusabrahao@gmail.com)*`,
  },
  {
    slug: 'llms-txt-shopify-agents-md-geo',
    title: 'llms.txt on Shopify Is Already Built: agents.md, UCP, and Being Citable by AI',
    description:
      'Shopify now serves llms.txt, llms-full.txt and agents.md for every store. What each file is, how to override them, and what GEO work is actually left to do.',
    date: '2026-08-25',
    readTime: '12 min read',
    tags: ['GEO', 'llms.txt', 'AI Search', 'Shopify', 'agents.md'],
    featured: true,
    body: `## The advice changed under everyone's feet

Four months ago I wrote that you should hand-author an \`llms.txt\` for your Shopify store and put a longer version at \`/llms-full.txt\`. That was correct advice at the time and it is now mostly obsolete, because Shopify ships this natively.

If you run a Shopify store, open \`yourdomain.com/agents.md\` right now. There is a file there. You did not put it there.

This post is what those files are, what overrides what, and — the part that matters commercially — what GEO work is actually left once the platform has done the easy part.

## Three URLs, one document

Shopify's canonical agent-facing document is \`/agents.md\`. It describes the store to AI agents and shopping assistants: how to discover the store's commerce capabilities, how to browse it read-only, what the published policies are, and how to transact.

\`/llms.txt\` and \`/llms-full.txt\` are **alternate URLs for the same document**. By default they mirror \`/agents.md\`, so an agent or crawler that requests either of the community-convention filenames still finds a usable description of the store.

Shopify manages all three by default, for every store, and keeps them aligned with the store's actual commerce configuration. No theme file exists for them unless you create one.

Three details that matter operationally:

- These files are served at the **bare primary domain**, without a locale or Shopify Markets subfolder prefix. There is no localized counterpart. One store, one agent document.
- The default content stays in sync as your commerce configuration changes. A hand-maintained file does not.
- The Shopify-generated file deliberately omits merchant contact details, because it is broadly cached and served to every agent that asks.

## The override chain, and why you probably should not use it

You can take control with theme templates, and the lookup order is specific:

For \`/agents.md\`: \`agents.md.liquid\` if present, otherwise the Shopify-generated default.

For \`/llms.txt\`: \`llms.txt.liquid\`, then \`agents.md.liquid\`, then the Shopify default.

For \`/llms-full.txt\`: \`llms-full.txt.liquid\`, then \`agents.md.liquid\`, then the Shopify default.

So \`agents.md.liquid\` is the lever that changes all three at once, and a dedicated \`llms.txt.liquid\` only diverges that one URL. None of these templates ship in any theme by default — you create them in the \`templates\` folder the same way you create \`robots.txt.liquid\`.

Shopify's own guidance is to use the managed default unless you have an advanced requirement, and I agree, for a reason that has nothing to do with laziness: **the moment you add the template, you own keeping it current.** The managed file tracks Shopify's agent-discovery capabilities as they ship. A hand-edited file is a snapshot of what was true on the day someone wrote it, and agent discovery is moving faster right now than any other part of the platform.

If you do override it, use the \`agents\` object rather than hardcoding URLs, so the values stay in sync:

\`\`\`liquid
# Agent Instructions — {{ agents.store_name }}

This document describes how AI agents can interact with the online store
at {{ agents.store_url }}.

## Commerce Protocol (UCP)

- Discovery: GET {{ agents.ucp_discovery_url }}
- MCP endpoint: POST {{ agents.mcp_endpoint_url }}

## Read-only browsing

- All products: GET /collections/all
- Sitemap: {{ agents.sitemap_url }}

Pricing and availability are returned in {{ agents.currency }}.
\`\`\`

And take Shopify's caution seriously: do not output private merchant data — contact emails, phone numbers — into that file. It is cached broadly and served to everybody.

## What is actually behind those endpoints

The agent document is a pointer. What it points at is the interesting part.

**UCP** — the Universal Commerce Protocol — is the discovery and transaction layer. \`agents.ucp_discovery_url\` is where an agent learns what your store can do; \`agents.mcp_endpoint_url\` is where it acts.

**Storefront Catalog MCP** lets an agent search and discover products from a single merchant's catalogue. This is what a store-scoped shopping assistant uses. **Global Catalog MCP** does the same across the whole Shopify ecosystem, clustering offers from multiple merchants by a universal product ID — that is comparison shopping, and your product is either in that cluster with good data or it is in it with bad data.

**WebMCP** is the one people have not noticed yet. Shopify provides WebMCP tools on every Liquid storefront with nothing to install. When a shopper brings an agent to your store in their browser, the agent can call structured tools to search your catalogue, manage the cart and navigate, instead of scraping your HTML and simulating clicks. Cart tools go through the same standard storefront actions apps use, so if your theme opens a cart drawer on add-to-cart, the agent triggers that too. Agent support is currently limited to Chromium-based browsers, so this is early — but it is live, not announced.

There is also a \`sitemap_agentic_discovery.xml\` sitting inside the sitemap index on stores today, alongside the product, collection, page and blog sitemaps.

## So what is left to do?

This is the honest part, and it is the reason GEO work is still worth paying for.

The platform now handles **discovery**. It publishes the files, the endpoints and the protocol. It cannot handle **substance**. Every one of those surfaces reads your product data, your policies and your content, and returns exactly what is in them.

The work that is left:

**1. Make the catalogue answerable.** An agent asked "does this brand ship to Canada, and what is the return window" reads your policy pages. An agent asked "which of these is waterproof" reads product metafields and body copy. If the attribute a customer would filter on does not exist as structured data on your product, no protocol invents it. This is the same catalogue hygiene work that feeds Google Shopping and on-site filtering — normalised product types, populated metafields, real body copy — which is why [bulk catalogue operations](/matrixify-expert) is the unglamorous foundation of AI visibility.

**2. Do not block the crawlers.** Discovery protocols are for agents acting in a session. Being *cited* in a model's answer still depends on the model's training and retrieval crawlers being allowed in. Plenty of stores block them without knowing it, through an inherited \`robots.txt\` customisation. If you want to be cited, allow them explicitly, and do it inside the \`robots.txt.liquid\` template so you inherit Shopify's maintained default rules rather than freezing a snapshot:

\`\`\`
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /
\`\`\`

This does not make you appear. It removes a barrier to appearing. Also: this is a business decision, not only a technical one. Allowing training crawlers is a choice about whether your content contributes to models. Make it deliberately.

**3. Keep prices and availability true at the source.** Agents read \`/products/{handle}.json\` and the catalogue endpoints, which do not pass through your theme. A price your theme hides is still in the JSON. If you run trade pricing or logged-out price gating, test your storefront **logged out**, including the JSON endpoints, before you assume anything is private.

**4. Structured data still matters.** Merchant listing markup, \`ProductGroup\` for variants, \`Organization\` for the entity record. The protocol layer is for agents that already know where you are. Structured data is for the ones that do not.

**5. Measure the only way you can.** There is no click for a citation. What you can watch: branded query volume in Search Console as a leading indicator, no-referrer direct traffic, and a standing fortnightly test where you ask the major assistants the five questions your customers actually ask and read what comes back. If you are not cited, the fix is almost never the markup. It is that the answer is not on your site in plain language anywhere.

## The reframe

For two years, "AI SEO" on Shopify meant writing a text file. Shopify has now written the text file. What it has not done, and cannot do, is make your catalogue worth quoting.

That was always the actual job. The file was just the part that was easy to sell.

---

## Related services

Making a store legible to machines is [Shopify SEO expert work](/shopify-seo-expert) plus [catalog operations](/matrixify-expert) — structured product data is what every one of these surfaces reads. Theme-level implementation sits under [Shopify expert development](/shopify-expert). Related reading: [robots.txt and sitemap.xml on Shopify](/blog/shopify-robots-txt-sitemap-guide) and the earlier, now partly superseded [technical SEO for AI search](/blog/technical-seo-ai-search-shopify).

---

*I get Shopify stores structurally ready to be found and cited by machines, which is mostly a data problem. See [Shopify SEO expert services](/shopify-seo-expert) or [hire a Shopify developer](/hire-shopify-developer).*

*Direct: [WhatsApp +55 11 98851-2788](https://wa.me/5511988512788) · [contato.matheusabrahao@gmail.com](mailto:contato.matheusabrahao@gmail.com)*`,
  },
  {
    slug: 'shopify-robots-txt-sitemap-guide',
    title: 'robots.txt and sitemap.xml on Shopify: What the Platform Gives You and What It Gets Wrong',
    description:
      'Customising Shopify robots.txt with robots.txt.liquid, what is really inside the generated sitemap.xml, and the two levers that remove a URL from it.',
    date: '2026-08-23',
    readTime: '11 min read',
    tags: ['Shopify SEO', 'robots.txt', 'Sitemap', 'Technical SEO', 'Liquid'],
    featured: false,
    body: `## Two files you do not own, and one you can

Shopify robots.txt and sitemap.xml are both generated by the platform. One of them you can edit. The other you genuinely cannot, and most of the advice online pretends otherwise.

Knowing which is which saves you a lot of wasted effort.

## robots.txt: editable, via a template most themes do not have

Shopify generates a default \`robots.txt\` that is fine for most stores. If you want to change it, you add a \`robots.txt.liquid\` template — and it will not be there, because it ships in no theme by default. You create it in the theme code editor, in the \`templates\` folder, named exactly \`robots.txt.liquid\`.

Two constraints worth knowing before you start:

- **It cannot be a JSON template.** It has to be \`robots.txt.liquid\`.
- **It supports only six Liquid objects:** \`robots\`, \`group\`, \`rule\`, \`user_agent\`, \`sitemap\`, and \`request\`. No \`product\`, no \`collection\`, no \`settings\`. This is a text file with a very small window into the store.

The whole default file is mirrored through the \`robots\` object, and the base template is a loop:

\`\`\`liquid
{% for group in robots.default_groups %}
  {{- group.user_agent -}}
  {% for rule in group.rules %}
    {{- rule -}}
  {% endfor %}
  {%- if group.sitemap != blank -%}
    {{ group.sitemap }}
  {%- endif -%}
{% endfor %}
\`\`\`

**Keep the loop.** You *can* replace the entire template with plain text rules, and Shopify strongly recommends against it, for a reason that is easy to underrate: the default rules are updated regularly to keep SEO best practices applied. Hardcode them and you have frozen a snapshot of what was correct on the day you wrote it, and you will never notice the drift.

### The three edits worth making

**Add a rule to an existing group.** Blocking internal search results is the most common one — check for the group and inject:

\`\`\`liquid
{%- if group.user_agent.value == '*' -%}
  {{ 'Disallow: /*?q=*' }}
{%- endif -%}
\`\`\`

**Remove a default rule.** Shopify blocks \`/policies/\` by default. If you want your policy pages crawlable — and on a store where returns and shipping terms are a real buying objection, you might — skip that rule while emitting the others:

\`\`\`liquid
{%- unless rule.directive == 'Disallow' and rule.value == '/policies/' -%}
  {{ rule }}
{%- endunless -%}
\`\`\`

**Add rules for crawlers that are not in the default set.** This is where you allow or block AI crawlers, and it goes outside the default-groups loop as plain text:

\`\`\`
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /
\`\`\`

There is also a host-specific pattern using the \`request\` object, which only makes sense if you run Shopify Markets with distinct domains per market:

\`\`\`liquid
{%- if request.host == 'example.fr' -%}
  {{ 'Disallow: /en/' }}
{%- endif -%}
\`\`\`

That lets a French domain block English content while everything else keeps the defaults. If you do not run multiple market domains, you do not need this and adding it is a way to break something later.

### The thing people get wrong about Disallow

\`Disallow\` stops crawling. It does not stop indexing, and it actively prevents the crawler from seeing anything on the page — including your canonical tag and your noindex meta tag.

So blocking a URL you wanted *consolidated* is counterproductive: the crawler can no longer read the canonical that would have consolidated it. Use robots.txt to save crawl budget on URLs with no value at all. Use canonicals for duplicates. They are not interchangeable and people use the first when they need the second constantly.

## sitemap.xml: generated, and you cannot edit it

Shopify serves a sitemap index at \`/sitemap.xml\`, and it links out to a set of child sitemaps. On a live production store today, that index looks like this:

\`\`\`
/sitemap_products_1.xml?from=1878194389061&to=7369944137808
/sitemap_collections_1.xml?from=423410055&to=279444029520
/sitemap_pages_1.xml?from=248230535&to=94637621328
/sitemap_blogs_1.xml
/sitemap_metaobject_pages_1.xml
/sitemap_agentic_discovery.xml
\`\`\`

Worth noticing, because most write-ups on this are years old:

- The child sitemaps are **numbered and paginated by resource ID range**, which is what the \`from\` and \`to\` parameters are. Big catalogues get \`_2\`, \`_3\` and so on. If you have ever wondered why a product is "missing from the sitemap," check the later numbered files before concluding anything.
- **Metaobject pages have their own sitemap.** If you have built content on metaobjects, it is being submitted, which surprises people who assumed metaobjects were invisible to search.
- **\`sitemap_agentic_discovery.xml\` is new**, and it is part of the same agent-discovery layer that produces \`/agents.md\`, \`/llms.txt\` and \`/llms-full.txt\`. Worth reading once, because it tells you what Shopify thinks an agent should be pointed at.

You cannot add a URL, remove a URL, reorder, set priorities, or change change-frequencies. There is no setting and no template. This is the part where a lot of migration checklists ask for something impossible.

### The two levers that do remove a URL

Since you cannot edit the file, you change what qualifies for it:

- **The \`seo.hidden\` metafield.** Set the value to \`1\` on a page, blog post or product and Shopify removes it from sitemaps, from search engines, and from your online store's internal search. One metafield, three effects.
- **Unlisted product status.** For products specifically, Unlisted keeps the product reachable by direct link while removing it from sitemaps, collection pages and store search. This is the right status for a product that exists for a specific customer, a warranty replacement part, or a channel-only SKU.

Both are better than a noindex conditional in \`theme.liquid\`, because they fix the sitemap too. A noindexed URL that is still listed in your sitemap is a contradiction — you are submitting a page and asking for it not to be indexed, and you burn crawl budget on it every cycle.

If you inherited a store with noindex conditionals in the theme, audit them against the sitemap. I usually find the theme is noindexing things the sitemap is still submitting, and nobody has looked in years.

## The failure that costs the most, and does not warn you

Everything above assumes the URLs in your sitemap resolve.

I broke this on my own site. The site is served on the \`www\` host and the bare host 301s to it. My sitemap, my canonicals and my agent-discovery files all pointed at the bare host. So every URL in the sitemap redirected, and every canonical named a URL that redirected.

Nothing errored. The site looked perfect. \`site:\` search returned four indexed URLs out of a few dozen, and every service page was outside the top 100 on keywords with a difficulty of zero. I spent time assuming it was a content and authority problem before checking the mechanical one.

So: after any domain change, any migration, any CDN change, take three URLs out of your sitemap, curl them, and confirm they return 200 and not 301. It takes a minute and it is the highest-value minute in technical SEO.

The same check applies to the primary domain more broadly. Shopify serves the sitemap on the primary domain, and stores that have collected extra domains over the years frequently have the sitemap submitted for the wrong one in Search Console.

## The audit

- Open \`/robots.txt\`. Read it. If it has been customised, open \`templates/robots.txt.liquid\` and confirm it still loops \`robots.default_groups\` rather than hardcoding a frozen rule set.
- Open \`/sitemap.xml\` and read the index. Note the numbered files and follow at least the last one.
- Curl three URLs from a child sitemap. Confirm 200, not 301.
- Cross-check: any URL you are noindexing in the theme should be handled with \`seo.hidden\` or Unlisted instead, so it leaves the sitemap too.
- Confirm Search Console has the sitemap submitted on the host you actually serve.

Neither of these files will win you rankings. Both of them can quietly cost you the entire index, and one of them cost me exactly that.

---

## Related services

Crawl and index mechanics are part of [Shopify SEO expert work](/shopify-seo-expert); the theme-level implementation is [Shopify expert development](/shopify-expert). If the damage came from a replatform, [Shopify migration expert](/shopify-migration-expert) covers URL inventories and redirects. Related reading: [Shopify canonical URLs and the duplicate content trap](/blog/shopify-canonical-urls-duplicate-content) and [llms.txt, agents.md and being citable by AI](/blog/llms-txt-shopify-agents-md-geo).

---

*I audit and fix Shopify crawl and index configuration on stores where the traffic is already paid for. See [Shopify SEO expert services](/shopify-seo-expert) or [hire a Shopify developer](/hire-shopify-developer).*

*Direct: [WhatsApp +55 11 98851-2788](https://wa.me/5511988512788) · [contato.matheusabrahao@gmail.com](mailto:contato.matheusabrahao@gmail.com)*`,
  },
  {
    slug: 'shopify-checkout-extensibility-migration',
    title: 'Shopify Checkout Extensibility: Every Deadline, and What to Migrate First',
    description:
      'The real checkout.liquid sunset dates, the Plus-only limits, block vs static targets, and the October 2026 Polaris deadline nobody has diarised.',
    date: '2026-08-21',
    readTime: '12 min read',
    tags: ['Shopify Checkout Extensibility', 'Shopify Plus', 'Checkout UI Extensions', 'Shopify Functions', 'Migration'],
    featured: false,
    body: `## The dates, first, because they are the whole story

Shopify checkout extensibility is not a feature announcement any more, it is a series of deadlines, and if you are still reading blog posts from 2024 you have the wrong ones. Here is the actual sequence, straight from Shopify's deprecation notices:

- **August 13, 2024** — \`checkout.liquid\` becomes unsupported for the Information, Shipping and Payment steps. This one is long past.
- **August 28, 2025** — \`checkout.liquid\` and additional scripts are sunset for the **Thank you** and **Order status** pages.
- **August 28, 2025** — script tags are sunset on those pages for **Plus** stores.
- **August 26, 2026** — script tags are sunset on those pages for **non-Plus** stores. That was four days ago as I write this.
- **October 1, 2026** — the one almost nobody has diarised. API version 2025-07 was the last to support React-based UI components in checkout UI extensions. After October 1 you are blocked from *updating* an extension that has not moved to Polaris web components.

If you own or maintain a store with checkout customisations, the first three are archaeology and the last two are your quarter.

## What actually broke on August 26

Non-Plus stores that were still injecting script tags into the Thank you and Order status pages lost them. In practice that is: post-purchase survey scripts, referral-program widgets, some analytics and conversion tags, upsell embeds, and review-request pixels.

The failure mode is the ugly kind. The page still renders. Checkout still works. Orders still complete. The only symptom is that a number somewhere goes flat — a conversion count, a referral signup rate, a post-purchase survey response rate — and nobody connects it to a date.

If you have not looked, look now: pull your post-purchase conversion metric and your referral signups for the last two weeks against the two weeks before. A step change on August 26 is not a coincidence.

## The Plus line, stated plainly

This is the thing merchants find out too late.

**Checkout UI extensions for the Information, Shipping and Payment steps are available only to stores on a Shopify Plus plan.**

Thank you and Order status page extensions are not restricted the same way, which is why the practical advice for a non-Plus store is: everything you wanted to do *inside* checkout is not available to you, and the post-purchase pages are where your remaining budget goes.

Custom **payments** extensions are Plus-only as well, and additionally restricted to approved partners on Shopify's Payments Platform. If a proposal you have been sent involves building a bespoke payment method, check both of those before anything else.

## Block targets versus static targets

Once you are building, the first real decision is where the extension renders.

**\`purchase.checkout.block.render\`** is the general-purpose block target. It is not tied to a specific checkout section or feature, and the merchant chooses its placement in the checkout and accounts editor. It renders regardless of which checkout features are available, which makes it the safe default — an extension bound to a feature the store does not use simply does not appear.

**Static targets** render at fixed locations tied to specific sections. Use them when the extension only makes sense in one place, and accept that it will not render if that section is not present.

I default to the block target for anything a merchant might reasonably want to move, and static only when position is semantically load-bearing.

Block targets give you read access to cart contents, buyer identity and delivery details. To store custom data — gift wrap preference, delivery instructions, a PO number — write **cart metafields** through the Metafields API. And check cart instructions before calling a mutation, because which mutations are available depends on the checkout.

## The blocking change from January 2026

This one changed behaviour under existing extensions, and it is worth understanding because it also changes the right architecture.

As of **January 26, 2026**, checkout UI extensions that support blocking default to **non-blocking**. A merchant must explicitly turn on the "Allow app to block checkout" setting in the checkout and accounts editor for blocking to work.

If your extension's entire purpose is validation — "you must accept these terms," "this address is not serviceable," "minimum order quantity not met" — it now silently does nothing until someone flips a switch you cannot flip for them. Shopify's guidance for extension authors is to detect this in the editor with the \`useExtensionEditor()\` hook and warn the merchant, and to include the step in your activation instructions.

The deeper recommendation is the useful one: **build checkout validation with Cart and Checkout Validation Functions, not with UI extensions.** Functions are more secure, more performant, and guaranteed to run across supported checkouts. A UI extension is a rendering surface; validation that matters belongs in a Function that runs server-side and cannot be bypassed by a client hitting the cart API directly. On a wholesale store, somebody will.

That is the same principle as order-quantity rules on a B2B storefront: theme-level or client-level validation is a suggestion, not a rule.

## Thank you and Order status are two different surfaces

They look the same to a merchant and they are not the same to a developer.

**Thank you page** — target \`purchase.thank-you\`. The critical detail: **the order is not yet created when the extension renders.** The order *id* is available. You can use \`OrderConfirmationApi\` to get the confirmation number or the id, and then fetch the rest through the GraphQL API once order creation completes.

That constraint kills a whole class of naive designs. "Show the customer their loyalty points balance including this order" does not work on the Thank you page if you assumed the order exists. Design for the id, fetch later.

**Order status page** — target \`customer-account.order-status\`. Here the order is always available, and \`OrderStatusApi\` gives you the id, name and confirmation number directly. This is where post-purchase surveys, review requests, digital download links and order-lookup experiences belong.

And a limitation to plan around from the start: **there is no support for mutating an order from a UI extension.** You can \`fetch\` out to your own service, but if the customer needs to change what they bought, that is a post-purchase extension, not a UI extension on these pages.

## The migration order that saves the most work

Shopify's own recommendation, and I have not found a case where it was wrong: **plan the in-checkout, Thank you and Order status upgrades together.**

The reasons are practical. You avoid maintaining two tech stacks in parallel. You apply styling once across the whole experience. And you manage one deadline instead of two.

If you genuinely cannot do them together, do in-checkout first and the after-purchase pages second.

Before any of that, use the **report in the Shopify admin** that identifies your existing checkout customisations and maps them to Shopify Extensions in Checkout. It exists specifically to make this review shorter, and I have watched teams reverse-engineer their own checkout by hand without knowing it was there.

## The practical sequence

This is how I actually run one of these:

- **Inventory what is live.** The admin report plus a manual pass over the checkout in a real session. Every script, every app, every injected element. Status per item: KEEP / REPLACE WITH APP / REBUILD AS EXTENSION / REBUILD AS FUNCTION / DROP.
- **Sort by whether it is validation or presentation.** Validation goes to Functions. Presentation goes to UI extensions. Getting this split right up front avoids building the same thing twice.
- **Check the Plus line for each item.** If you are not on Plus, in-checkout items are not migrations, they are deletions or business cases for upgrading.
- **Look for a public app first.** Shopify keeps adding checkout apps built on extensions. Building custom is the last resort, not the first instinct, and this is one of the few places where I mean that.
- **Rebuild against a current API version, with Polaris web components.** Not React. The October 1, 2026 cutoff is real and it blocks updates, which means it blocks your ability to fix a bug in an extension you shipped.
- **Test conversions last and watch them live.** The single most expensive way to get a checkout migration wrong is to break the purchase event while fixing a survey widget. Order matters, and a broken conversion tag costs more than a missing feature.

## The short version

- Non-Plus script tags on Thank you and Order status died on August 26, 2026. Check your post-purchase metrics for a step change.
- In-checkout UI extensions are Plus-only. Custom payments extensions are Plus-only and partner-gated.
- Use \`purchase.checkout.block.render\` unless position is semantically required.
- Validation belongs in Cart and Checkout Validation Functions, not UI extensions — and extensions no longer block by default anyway.
- On the Thank you page the order does not exist yet. Only the id does.
- Move to Polaris web components before October 1, 2026, or you cannot update your own extension.

---

## Related services

Checkout customisation, Functions and extension work sit under [Shopify expert development](/shopify-expert). B2B checkout requirements — PO numbers, net terms, quantity rules — are covered in [Shopify B2B: company accounts, catalogs and price lists](/blog/shopify-b2b-company-accounts-catalogs). If you need senior capacity on a deadline, [hire a Shopify developer](/hire-shopify-developer).

---

*I migrate checkout customisations on stores where a broken checkout is not an option, and I do the conversion-tracking verification as part of the job. See [Shopify expert development](/shopify-expert) or [hire a Shopify developer](/hire-shopify-developer).*

*Direct: [WhatsApp +55 11 98851-2788](https://wa.me/5511988512788) · [contato.matheusabrahao@gmail.com](mailto:contato.matheusabrahao@gmail.com)*`,
  },
  {
    slug: 'shopify-stripe-integration',
    title: 'Shopify and Stripe: Why You Probably Cannot Use Stripe as Your Gateway',
    description:
      'Stripe is Shopify Payments’ banking partner, so it is not offered as a separate gateway. What to build instead, and how to reconcile the two.',
    date: '2026-08-19',
    readTime: '10 min read',
    tags: ['Shopify Stripe Integration', 'Shopify Payments', 'Payments', 'Reconciliation', 'Shopify Expert'],
    featured: false,
    body: `## The answer nobody wants

"Shopify Stripe integration" is a search with a disappointing answer, and I would rather give you the disappointing answer in the first paragraph than sell you around it.

**In countries where Shopify Payments is available, Stripe is not offered as a separate third-party payment gateway.** Shopify's own documentation gives the reason directly: Stripe is Shopify Payments' banking partner, and all payment reporting and management takes place in your Shopify admin.

You are already on Stripe. You just do not have a Stripe dashboard, because the merchant-facing layer is Shopify's.

There is a narrow exception — merchants in a Shopify Payments region who cannot activate Shopify Payments for eligibility reasons can contact Shopify support to ask about standalone Stripe access. That is a support conversation about your specific account, not an integration you can plan around.

So if you came here to swap gateways, the project is usually over. What follows is what people actually need when they ask this question, because in my experience they are asking one of four different things.

## Question 1: "I want lower fees"

Adding a third-party gateway is almost never how you get them.

Shopify applies **third-party transaction fees on all third-party and alternate payment gateways, even when Shopify Payments is activated.** That fee is a percentage that varies by plan, and it stacks on top of whatever the gateway itself charges you. So the comparison is not "Shopify's rate versus Stripe's rate" — it is "Shopify's rate" versus "the other processor's rate plus Shopify's third-party fee."

One structural exception: on the Shopify Plus plan, third-party transaction fees may be waived when Shopify Payments is activated, depending on your location. If you are on Plus and running a second gateway for a specific market, that is worth confirming with Shopify for your region rather than assuming either way.

The genuinely useful version of "lower fees" on Shopify is usually not a gateway change at all. It is: getting off manual card entry, reducing international-card mix by localising properly with Markets, and killing the chargebacks you are eating because your fulfilment communication is bad. Those move the number. Gateway shopping mostly moves it sideways.

## Question 2: "I need a payment method Shopify Payments does not offer"

This one is legitimate and it is the actual use case for a third-party gateway. Shopify supports over a hundred credit card payment providers, and running one alongside Shopify Payments is a supported configuration — you keep Shop Pay and the local payment methods that come with Shopify Payments, and add the specific method you need on top.

The trade is the third-party fee on those transactions, and a second reconciliation surface. Both are fine if the payment method is genuinely unlocking revenue. Neither is fine if you added a gateway "for flexibility."

If you need something deeper than an available provider — a bespoke payment method, custom authorisation and capture timing — that is a **payments app extension**, and there are two gates: only approved partners can build on Shopify's Payments Platform, and building a custom payments extension is limited to eligible Shopify Plus merchants. Check eligibility before scoping anything.

## Question 3: "I need Stripe for something that is not the storefront checkout"

This is the request I get most often, and it is the one where the answer is yes.

Plenty of businesses running a Shopify storefront also need Stripe for money that does not flow through a cart:

- **Subscriptions and recurring billing** managed outside the storefront — memberships, service retainers, SaaS-style plans sold alongside physical goods.
- **B2B invoicing on net terms**, where the order is placed in Shopify but the invoice is issued and collected separately.
- **Marketplace or multi-vendor payouts** through Stripe Connect, where the storefront takes the order and a second system splits the money.
- **Deposits, quotes and custom orders** — high-ticket, made-to-measure or freight-quoted items where the final amount is not known at the time of order.

These are integrations, not gateway swaps, and they are perfectly buildable. The architecture is always the same shape: **Shopify owns the order, Stripe owns that payment, and a small service keeps them consistent.**

The rules I hold on those builds:

**One system owns each payment.** A payment that both Shopify and Stripe think they own is a double charge waiting for a race condition. Decide per payment type, write it down, and never let the two paths overlap.

**Webhooks must be idempotent.** Both platforms retry. A webhook handler that creates a record without checking whether it already exists will, on a bad day, create it four times. Key on the event id, store what you have processed, and make replays free.

**Reconcile against the order, not the total.** Which brings me to the fourth question.

## Question 4: "The numbers do not match"

This is the least glamorous and most valuable work in this whole area, and it applies whether you are on Shopify Payments or a third-party gateway.

Your Shopify order totals will never equal your payout amounts, and the reasons are all boring:

- Payouts are batched on a schedule and cross day boundaries, so a payout contains orders from more than one reporting day.
- Processing fees are deducted from the payout, not from the order.
- Refunds land in a different payout than the original charge, often in a different month.
- Chargebacks, reversals and their fees appear as separate transactions with their own timing.
- Multi-currency orders settle at a conversion rate applied at settlement, not at checkout.
- Gift cards, store credit and third-party financing mean part of an order total never touches the processor at all.

Finance teams see the gap, assume something is wrong, and ask engineering to explain it. The deliverable that ends that conversation forever is a reconciliation table, not a dashboard: one row per payout, joined to its constituent transactions, joined to Shopify orders, with an explicit column for every deduction. Anything that does not reconcile gets a reason code.

My stack for this is deliberately dull — export the payout data and the order data, join them in Python or DuckDB, and produce a small table. It is the same approach I use for [custom Shopify reporting](/blog/shopify-custom-reports-ga4-analytics), and for the same reason: the answer is a table and three sentences, not a BI tool nobody logs into.

Build it once, run it monthly, and you convert a recurring argument into a lookup.

## The short version

- In Shopify Payments countries, Stripe is not available as a separate gateway, because it is Shopify Payments' banking partner. You are already on it.
- Third-party transaction fees apply to third-party gateways even with Shopify Payments active. Adding a gateway rarely reduces total cost.
- Custom payments extensions are approved-partner and Plus-gated. Confirm eligibility before scoping.
- The real Shopify-plus-Stripe builds are subscriptions, invoicing, marketplace payouts and deposits — money that does not go through the storefront cart.
- One system owns each payment. Webhooks are idempotent. Reconcile per payout, with a reason code for every gap.

---

## Related services

Payment integrations, custom apps and Admin API work sit under [Shopify expert development](/shopify-expert). Checkout-side customisation has its own constraints — see [Shopify checkout extensibility](/blog/shopify-checkout-extensibility-migration). For B2B net terms and company-level payment configuration, see [Shopify B2B: company accounts, catalogs and price lists](/blog/shopify-b2b-company-accounts-catalogs).

---

*I build the integrations around Shopify's payment layer and the reconciliation that keeps finance from having to guess. See [Shopify expert development](/shopify-expert) or [hire a Shopify developer](/hire-shopify-developer).*

*Direct: [WhatsApp +55 11 98851-2788](https://wa.me/5511988512788) · [contato.matheusabrahao@gmail.com](mailto:contato.matheusabrahao@gmail.com)*`,
  },
  {
    slug: 'shopify-csv-import-bulk-product-upload',
    title: 'Shopify CSV Import: Where the Native Importer Breaks and When to Stop Using It',
    description:
      'The Shopify CSV import rules nobody tells you: the 15 MB cap, the option-column edit that destroys variant IDs, no bulk delete, no cancel.',
    date: '2026-08-17',
    readTime: '11 min read',
    tags: ['Shopify CSV Import', 'Bulk Product Upload', 'Matrixify', 'Catalog Operations', 'Shopify'],
    featured: false,
    body: `## The importer is better than its reputation and worse than you need

Shopify CSV import is the first bulk tool every merchant meets. It is free, it is built in, and it will get you from zero to a few hundred products faster than anything else.

It also has a small set of behaviours that are not obvious, are not warned about, and can quietly destroy data that other systems depend on. This post is those behaviours, and the honest line for when to stop using it.

## The rules that are not on the screen

**The file cannot exceed 15 MB.** If your upload errors or times out, the fix is to split it into smaller files. Note that 15 MB of CSV is a lot of rows — you will usually hit this because of long HTML product descriptions, not because of SKU count.

**\`Handle\` is the key.** With "Overwrite any current products that have the same handle" enabled, a handle in your file that matches an existing product means the CSV values overwrite the matching columns on that product. That is the whole update mechanism. There is no ID matching, no SKU matching, no "update if newer."

**One row per variant, product fields on the first row only.** The first row of a handle carries title, body, vendor, type, tags. Subsequent rows for the same handle carry only variant data. Additional images get their own rows with just the handle and the image columns.

**Never sort the file in a spreadsheet editor.** This is Shopify's own warning and it is the one that catches people: sorting a product CSV in Excel or Numbers can separate products from their image rows, and the images are lost. The row order is structural. If you need to sort to review the data, sort a copy and import the original.

**You cannot delete products with a CSV.** There is no delete command. Bulk deletion is a different workflow entirely.

**An import cannot be cancelled once it starts.** There is no stop button. If you realise thirty seconds in that you uploaded the wrong file, your options are to wait and then repair. Which is why the next section exists.

**There is no import history.** You cannot open a list of past imports and see what changed. The activity log is the closest thing, and it is not a diff.

## The one that costs the most

This is the behaviour I would put on a warning sticker:

**Changing data in the Option1/Option2/Option3 value columns deletes the existing variant IDs and creates new ones.**

Renaming "Med" to "Medium" is not an edit. It is a delete and a create. The variant is gone and a new variant with a new ID takes its place.

Shopify says plainly that any change to variant ID values can break third-party dependencies, and in practice the list is long: inventory records tied to the old variant, third-party inventory and ERP syncs keyed on variant ID, subscription contracts, back-in-stock waitlists, wishlist entries, Klaviyo product references, ad platform catalogues, and any \`?variant=\` URL sitting in a live campaign or an email that has already gone out.

Nothing about the import tells you this happened. The product page looks correct afterward. The store looks fine. What breaks is everything downstream, days later, in a way that never gets traced back to a tidy-up of option names.

If you need to normalise option values across a catalogue — and everyone does eventually, because "Med / Medium / M" accumulates — treat it as a migration with a plan for the downstream systems, not as a spreadsheet cleanup.

## Working safely inside the native importer

If the native importer is the right tool for where you are, these five habits cover most of the risk:

**Export first, always.** The export you take before the import is your rollback file. There is no undo, so this is the undo.

**Import only the columns you are changing, plus the handle.** The importer overwrites matching columns. Every extra column you include is an assertion about a field you did not look at. A price update is a handle, a SKU and a price — not forty-one columns.

**Test on five rows.** Import five, open them in the admin, look at them. Then import the rest. The five-row test catches encoding problems, column-name typos and option-value surprises for the cost of two minutes.

**Format ID-shaped columns as Text before you paste.** A 13-digit identifier pasted into Excel becomes \`1.05E+13\`. This is the single most common cause of an import that reports success against zero matched rows.

**Never sort. Never re-save through a tool that re-encodes.** Especially watch out for anything that converts to UTF-16 or strips the BOM.

## Where the native importer stops being enough

There is a real line, and it is not about SKU count. It is about what you need to touch.

The native product CSV covers products, variants, images and the basic Google Shopping fields. It does not give you a comfortable path to:

- **Metafields** across the catalogue, which is where the actual differentiating product data lives on any serious store.
- **Inventory per location**, once you have more than one.
- **URL redirects**, which you need every time a handle changes.
- **Collections, customers, orders, pages and discounts** as bulk-editable objects.
- **A dry run.** There is no "tell me what this would do" pass. You find out by doing it.
- **A results file.** You cannot open a per-row report of what changed after the fact.
- **Deletion**, at all.

The moment your recurring work includes metafields, redirects, or multi-location inventory, you are fighting the tool. And the moment a bad import would cost real money — a price change, a status flip on a live product, a redirect on a page with paid traffic pointed at it — the absence of a dry run stops being an inconvenience and becomes the actual risk.

That is where I move stores to [Matrixify for bulk catalogue operations](/matrixify-expert). What you buy is not speed, it is safety: an Analyze pass that reports what would change per row before anything is written, per-field commands so a tag import appends instead of wiping, a results file you can read afterwards, and coverage of every object type instead of just products.

The discipline I run there is a separate piece — [the Matrixify field guide](/blog/matrixify-shopify-bulk-operations-guide) covers the command columns, the key-column choice, and the rollback-asymmetry rule that decides how hard I review a given file.

## The honest recommendation

If you are under a few hundred products, changing only product-level fields, and not syncing to anything downstream: the native importer is fine. Use it. Keep an export as your rollback and test five rows.

If any of these are true, you have outgrown it:

- Your catalogue feeds a marketplace, an ERP, a PIM or a retail partner.
- Your product data lives in metafields.
- You have more than one inventory location.
- Anyone will notice within an hour if a price is wrong.
- You have ever needed to answer "what exactly did that import change?"

The upgrade is cheap relative to a single bad import. And the muscle you are building either way is the same one: never let an unreviewed change reach a live catalogue.

---

## Related services

Bulk product upload, CSV and Excel workflows, metafield backfills and inventory sync are [Matrixify expert services](/matrixify-expert). If the catalogue problem is really a platform problem, see [Shopify migration expert](/shopify-migration-expert). For everything else on the storefront, [Shopify expert development](/shopify-expert). Related reading: [the Matrixify field guide](/blog/matrixify-shopify-bulk-operations-guide).

---

*I run catalogue operations on stores from a few hundred SKUs to enterprise-scale multi-variant catalogues. See [Matrixify expert services](/matrixify-expert) or [hire a Shopify developer](/hire-shopify-developer).*

*Direct: [WhatsApp +55 11 98851-2788](https://wa.me/5511988512788) · [contato.matheusabrahao@gmail.com](mailto:contato.matheusabrahao@gmail.com)*`,
  },
  {
    slug: 'shopify-b2b-company-accounts-catalogs',
    title: 'Shopify B2B: Company Accounts, Catalogs and Price Lists Next to a B2C Storefront',
    description:
      'How native Shopify B2B models wholesale — companies, locations, catalogs, price lists — and the Liquid that makes one theme serve both audiences.',
    date: '2026-08-15',
    readTime: '12 min read',
    tags: ['Shopify B2B', 'Shopify Plus', 'Wholesale', 'Liquid', 'Price Lists'],
    featured: false,
    body: `## One store, two audiences, one theme

Native Shopify B2B lets you run wholesale inside the same store as your consumer storefront. I have also run the alternative — two entirely separate stores on one catalogue — and I have written about [why we made that trade and what it costs](/blog/shopify-b2b-wholesale-alongside-b2c).

This post is the other side: what native B2B actually is, how it models a wholesale relationship, and what you have to write in the theme to make one storefront serve a contractor and a consumer without either of them noticing the other exists.

If you are choosing today and you do not have a hard reason for separation — a different tax engine, a genuinely different app stack, a different catalogue — native B2B in one store is the right answer. The duplication tax on two stores is real and it is paid every single week.

## The object model, in the order it matters

Shopify B2B is four objects and one configuration, and once you hold them in your head the rest of the platform makes sense.

**Company.** The business you sell to. A company organises multiple locations and multiple contacts who can place orders on behalf of the organisation. Note that a company is not a customer — customers are attached to it.

**Company location.** A location or branch of a company. This is the object that carries almost everything operational: its own billing and shipping addresses, its own tax settings, its own checkout configuration. Locations are why a national contractor with fourteen branches works on Shopify at all.

**Catalog.** Attached to a company location, a catalog determines **which products are published** to that location and **what they cost**. Different locations of the same company can have different catalogs.

**Price list.** The pricing inside a catalog. This is where wholesale pricing actually lives — not as a discount code, not as a customer tag conditional in the theme, but as a first-class price for a specific set of buyers.

**Buyer experience configuration.** Attached to the location, this determines checkout behaviour — payment terms, and whether orders require merchant review before they are accepted. Plus tax exemption values on the location.

The crucial mechanic: **a B2B customer selects which location they are purchasing for**, and that selection determines the applicable catalogs, pricing, tax exemption and checkout settings for the order. Everything downstream of that choice is derived. Which is why the location picker is not a nice-to-have — it is the control that makes the entire model work.

## What you need turned on

Before any of this exists in your store:

- A plan that supports B2B capabilities, with B2B enabled.
- **New customer accounts activated.** B2B does not work on the legacy account system.
- At least one company with customer access configured.

That second one strands people. If your store is still on classic accounts, enabling B2B is an account-system migration first and a wholesale project second, and the account-system change touches every login link in every email flow you have ever sent.

## The theme work: six Liquid properties

Shopify gives you a small, clean set of B2B objects in Liquid. This is the whole surface you need:

- \`customer.b2b?\`
- \`customer.current_company\`
- \`customer.current_location\`
- \`customer.company_available_locations\`
- \`company\` and \`company_location\`

The location picker is the first thing to build, and it is genuinely simple:

\`\`\`liquid
{% if customer.b2b? %}
  <div>
    <h2>Welcome, {{ customer.name }} from {{ customer.current_company.name }}!</h2>
    <p>You are purchasing for the {{ customer.current_location.name }} location.</p>

    {% if customer.company_available_locations.size > 1 %}
      <h3>Select a different location:</h3>
      <ul>
        {% for location in customer.company_available_locations %}
          {% unless location.current? %}
            <li>
              <a href="{{ location.url_to_set_as_current }}">{{ location.name }}</a>
            </li>
          {% endunless %}
        {% endfor %}
      </ul>
    {% endif %}
  </div>
{% endif %}
\`\`\`

\`location.url_to_set_as_current\` is the piece to notice. You do not write a form, a POST handler or a session variable — Shopify gives you a URL that switches the buying context, and the catalog and price list follow.

The \`current?\` check on each location is what keeps the currently-selected branch out of the "switch to" list. Small thing, and it is the difference between a picker that reads clearly and one that makes a buyer second-guess which branch they are on.

## Serving two audiences from one theme

\`customer.b2b?\` is the conditional that does the heavy lifting. On a store serving both audiences, or on a dedicated B2B store, the elements you typically gate are:

- Product prices
- The cart icon in the header
- Add to cart buttons
- Other calls to action on the product page

\`\`\`liquid
{%- if customer.b2b? -%}
  {% comment %} trade price and add-to-cart {% endcomment %}
{%- else -%}
  {% comment %} log in to see trade pricing {% endcomment %}
{%- endif -%}
\`\`\`

You can also branch on the company or the location itself, which is how you do account-specific merchandising without an app:

\`\`\`liquid
{% if customer.current_company.name == 'Northline Supply' %}
  <h3>Delivery and installation included.</h3>
{% endif %}
\`\`\`

Two design notes from having shipped this:

**Do not build the B2B experience as a hidden layer under the B2C one.** A logged-out contractor researching your product is a lead. If your product pages show nothing useful until login, you have suppressed the exact top-of-funnel that generates trade signups. Show the product, show the specs, show a "get trade pricing" call to action — hide the number, not the page.

**Cross-link the audiences deliberately.** A visible trade-pricing prompt on the consumer storefront is, in my experience, one of the highest-converting acquisition paths in a mixed setup, because contractors land on the consumer site constantly while researching. It costs one link.

## Quantity rules and volume pricing

Two B2B pricing mechanics that people try to build in theme JavaScript and should not.

**Quantity rules** are per-product and carry a **minimum**, a **maximum** and an **increment**. Case packs, pallet quantities, and "you can only buy these in fours" are all this feature. The increment is the one themes get wrong — the plus and minus buttons on a quantity selector have to step by the increment, and the decrement has to stop at the minimum rather than at 1.

**Volume price breaks** are quantity-based tiers within a price list — buy 10, get the tier-2 price. Surfacing these on the product page is a real conversion lever on a wholesale storefront, because a buyer who cannot see the break does not buy up to it.

The rule I hold: **quantity rules must be enforced server-side, not in the theme.** Theme-level quantity validation is trivially bypassed by anyone hitting the cart API directly, and on a wholesale store somebody eventually will — usually not maliciously, usually through a punchout system or a bulk-order script. Shopify's own recommendation for checkout validation is Cart and Checkout Validation Functions, and that is the right place for anything that must be true about an order.

If you are on headless or Hydrogen, the equivalent discipline is that **every product query must be contextualised with buyer information** — company location plus customer token. An uncontextualised query returns consumer pricing, and it will do so silently and correctly-looking. That is the single most common B2B headless bug.

## Checkout, and what B2B needs that B2C does not

The consumer checkout is optimised for speed. The wholesale checkout has different jobs: purchase order numbers, net payment terms, quantity minimums, tax exemption certificates, freight quoting for palletised goods, and a sales rep attached to the order.

Payment terms and merchant order review come from the buyer experience configuration on the location, so those are configuration rather than code. Tax exemption is on the location too.

The custom fields — a PO number input, a "ship to my yard" toggle, a certificate upload — are Checkout UI extensions, and here is the constraint that decides your project: **checkout UI extensions for the Information, Shipping and Payment steps are Shopify Plus only.** Off Plus, you push what you can into cart attributes and accept the ceiling. The full set of deadlines and targets is in [the checkout extensibility piece](/blog/shopify-checkout-extensibility-migration).

## The thing to test before you launch

One finding I would want every merchant to read before turning wholesale on.

Test your storefront **logged out**, with a normal browser user agent, including \`/products.json\` and \`/collections/<handle>/products.json\`.

The theme can be perfectly correct — hiding prices, showing "contact us for pricing" — and the number can still be sitting in the JSON embedded in the product page and in those public endpoints. Those are native platform endpoints that do not pass through Liquid. No theme code opens them and no theme code can close them.

The levers are configuration, not code: Shopify's catalog restriction settings, the store-wide password or login-required setting, or a CDN edge rule blocking the JSON endpoints for unauthenticated requests.

Choose your position on that trade-off consciously. The alternative is discovering it when a retail partner emails you a screenshot of your trade pricing.

## The short version

- Company → company location → catalog → price list. The location is where the operational configuration lives.
- The customer picks a location, and that choice determines pricing, catalogue, tax and checkout behaviour.
- New customer accounts are required. If you are on classic accounts, that migration comes first.
- The theme work is six Liquid properties and a location picker built on \`url_to_set_as_current\`.
- Hide the price, not the page. A logged-out contractor is a lead.
- Quantity rules go server-side. Theme validation is a suggestion.
- On headless, contextualise every product query with buyer identity or you will silently serve consumer prices.
- Test logged out, including the JSON endpoints, before launch.

---

## Related services

B2B setup, theme work and checkout extensions sit under [Shopify expert development](/shopify-expert); the catalogue and price-list data work is [Matrixify catalog operations](/matrixify-expert). Related reading: [running B2B wholesale alongside B2C on separate storefronts](/blog/shopify-b2b-wholesale-alongside-b2c) and [Shopify checkout extensibility](/blog/shopify-checkout-extensibility-migration).

---

*I run B2B and B2C Shopify storefronts in production on shared catalogues, including the pricing, tagging and checkout work underneath them. See [Shopify expert development](/shopify-expert) or [hire a Shopify developer](/hire-shopify-developer).*

*Direct: [WhatsApp +55 11 98851-2788](https://wa.me/5511988512788) · [contato.matheusabrahao@gmail.com](mailto:contato.matheusabrahao@gmail.com)*`,
  },
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

## Where this work lives on this site

The pieces of this playbook each have their own page: [Shopify expert development](/shopify-expert) for the theme, technical SEO and integration work; [Shopify speed optimization](/shopify-speed-optimization) for the Core Web Vitals half of the story; [Matrixify catalog operations](/matrixify-expert) for the bulk data cleanup that made the SEO gains possible; and [Klaviyo email and SMS](/klaviyo-expert) for the owned-channel stack.

---

*Want this kind of work on your store? You can [hire a Shopify developer](/hire-shopify-developer) directly, or [get in touch](/contact) — I take on a small number of senior engineering and operations engagements each quarter.*`,
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

## Getting help with this

The full service page for this work is [Matrixify expert and Shopify catalog operations](/matrixify-expert) — bulk product imports, CSV and Excel workflows, multi-level variant configuration and inventory sync. If the catalog problem is really a platform problem, see [Shopify migration expert](/shopify-migration-expert). For everything else on the storefront, [Shopify expert development](/shopify-expert).

---

*Need help wiring this up on your store? [Hire a Shopify developer](/hire-shopify-developer) for a one-week catalog hygiene sprint, or [reach out](/contact) first if you want a second opinion on scope.*`,
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

## Related services

Technical SEO on Shopify is implementation work, not advice work — see [Shopify SEO and expert development](/shopify-expert) for what that covers. Page speed is half of it: [Shopify speed optimization](/shopify-speed-optimization). Clean structured product data is the other half: [Matrixify catalog operations](/matrixify-expert). And if a replatform is what damaged your rankings, [Shopify migration expert](/shopify-migration-expert) covers the redirect work.

---

*This is part of how I work as a Shopify Operator. If your store needs a technical SEO and AI-readiness audit, [hire a Shopify developer](/hire-shopify-developer) or [let's talk](/contact).*`,
  },
  {
    slug: 'matrixify-shopify-bulk-operations-guide',
    title: 'Matrixify: The Field Guide to Shopify Bulk Operations at Scale',
    description:
      'Six years of running Matrixify on production Shopify stores — export discipline, import commands, cross-store sync, dry runs, rollback files, and the failure modes nobody warns you about.',
    date: '2026-08-28',
    readTime: '14 min read',
    tags: ['Matrixify', 'Shopify', 'Bulk Product Upload', 'Shopify CSV Import', 'Catalog Operations'],
    featured: true,
    body: `## Why this post exists

Matrixify is the single most important tool in my Shopify stack, and almost nothing written about it goes past "here is how to export a CSV."

I have used it every week for years — on my own store, on an international luxury fashion brand, on a US beauty and lifestyle brand, and today on two storefronts of a US building-products manufacturer that together run **an enterprise-scale catalog of 2,800+ products and 13,000+ multi-level variants**. That is where you learn what Matrixify actually is: not an import app, but the *write layer* for a catalog that no human can maintain by hand.

This is the field guide I wish I had in year one.

## What Matrixify really is

Shopify's admin is a single-record editor. Matrixify turns the entire store — products, variants, inventory, metafields, customers, orders, redirects, collections, pages, discounts — into spreadsheets you can export, diff, edit, version, and replay.

That reframing matters. Once the catalog is a file, catalog work becomes software work: you get diffs, you get review, you get rollback, you get repeatability. Without it, "update pricing on 900 SKUs" is a two-week project with a 100% chance of at least one typo reaching a customer.

## The three commands that do 90% of the work

Every Matrixify import sheet can carry a \`Command\` column, and getting this wrong is how people nuke production.

- \`UPDATE\` — touch existing records only. If a row does not match an existing product, it is skipped. **This is the default I use for everything.** It cannot create garbage.
- \`NEW\` — create only. Fails on collision instead of silently overwriting.
- \`REPLACE\` — wipe and rewrite the record. Powerful, and the reason people have bad days.

Then there are the per-field commands, and the one that matters most is \`Tags Command\`:

- \`MERGE\` — append the tags in this row, leave existing tags alone.
- \`REPLACE\` — the row's tags become the *entire* tag set. Everything else is gone.

I have seen a single \`Tags Command: REPLACE\` erase merchandising tags across a whole collection because someone exported tags a week earlier and re-imported a stale column. **Default to MERGE. Always.** Same logic applies to \`Variant Command\` and \`Metafield Command\`.

\`\`\`
Handle              Command   Tags                       Tags Command
redi-base-32x60     UPDATE    clearance,spring-2026      MERGE
redi-base-36x60     UPDATE    clearance,spring-2026      MERGE
\`\`\`

That sheet adds two tags. Change \`MERGE\` to \`REPLACE\` and it deletes every other tag those products had.

## Rule 1: the export you did yesterday is already wrong

Every change starts with a **fresh export**, not because the old one was wrong when you took it, but because someone else on the team, an app, or a sync job may have touched the catalog since.

The discipline: *never edit yesterday's export.* I keep one folder per operation:

- \`source.xlsx\` — the fresh export, never modified
- \`changes.xlsx\` — import-ready, only the rows and columns that change
- \`rollback.xlsx\` — current state of exactly the rows I am about to touch
- \`validation.csv\` — a script-generated diff of what *should* change

If the diff does not match my expectation, the import does not run. That is the whole gate.

## Rule 2: export narrow, import narrower

The biggest cause of accidental damage is exporting everything and importing everything back.

If you export 91 columns and import 91 columns, you are asserting the value of 91 fields on every row — including fields you never looked at, and fields that an app owns. Import **only the key column plus the columns you are changing.** Matrixify ignores what is not present.

A pricing update is four columns: \`Handle\`, \`Variant SKU\`, \`Variant Price\`, \`Variant Compare At Price\`. Not ninety-one.

## Rule 3: choose your key deliberately

Matrixify can match on \`ID\`, \`Handle\`, or \`Variant SKU\`. They fail differently:

- **ID** is exact and store-specific. It is also the one that silently corrupts: a 13-digit product ID pasted into Excel becomes \`1.05E+13\` and every row fails or, worse, matches nothing and reports success on zero rows. Format the column as **Text** before you paste, every time.
- **Handle** is stable and human-readable, but changes if someone renames a product, and a handle change is a URL change.
- **Variant SKU** is the best key for anything inventory-shaped, because it is the identifier your ERP, your 3PL and your retail partners already speak. Its catch: SKU maps to *variants*, so a product-level operation keyed by SKU needs de-duplication first — I have collapsed 90 variant SKUs down to 3 product IDs in a single migration batch.

## Rule 4: Analyze before Import, every time

Matrixify's "Analyze" pass reads your file and reports what it *would* do, per row, without writing. Use it for:

- Any first run of a new sheet format
- Anything touching more than ~100 rows
- Anything touching price, inventory, status, or redirects

The output tells you how many rows matched. If you uploaded 340 rows and Analyze reports 338 matched, stop. Those two rows are the bug. They are usually a trailing space in a SKU, a scientific-notation ID, or a product that lives on the other store.

Then run 5 rows for real. Look at them in the admin. Then run the 340.

## Rule 5: the sheet name is load-bearing

For XLSX imports, Matrixify reads the **sheet name** to know what object you are importing. A sheet of product statuses must be on a tab named exactly \`Products\`. Not \`Products (1)\`, not \`Sheet1\`, not \`products\`.

This costs people an hour the first time and never again. Same class of gotcha: the redirects import is a two-column CSV — \`Redirect from,Redirect to\` — and it wants **full absolute URLs on the destination side**, per store domain.

## Cross-store sync: the hardest thing Matrixify does

Running a B2C storefront and a B2B storefront on the same catalog means **every catalog action happens twice**, and the two stores do not share product IDs. A B2C product ID used against the B2B store returns "product not found."

What I actually do:

- **Key cross-store operations on SKU, never ID.** SKU is the only identifier that means the same thing in both places.
- **Maintain a mapping sheet** — SKU → B2C product ID → B2B product ID — regenerated from fresh exports, never hand-maintained.
- **Generate both stores' files from one approved input list.** I wrote a small Python generator that takes a list of parent SKUs, expands children, resolves each store's IDs separately, and emits every file for the round. It was validated by regenerating a historical batch and byte-matching the original.
- **Treat out-of-sync inventory as a Sev-1.** A SKU that is live on one store and drafted on the other is a support ticket and a lost order.

And the trap that is not obvious: **tags are product-level data shared by every theme in the store.** Importing tags to test a badge on an unpublished preview theme immediately changes smart-collection membership on the *live* theme. There is no theme scoping on catalog data.

## Order of operations is a real thing

The clearest example: retiring an old SKU and replacing it with a new one is three operations — new product to Active, old product to Draft, old URL 301 to the new URL.

Run them in that order. **Shopify ignores a URL redirect while the source URL still resolves to a live product.** Draft the old product first, or your redirects silently do nothing and you find out from Search Console six weeks later.

## Rule 6: keep a rollback file, and know the asymmetry

Before any non-trivial import I export the current state of the affected rows to \`rollback.xlsx\`. If something goes sideways, recovery is one import away.

But rollback is not symmetric, and this drives what I review hardest:

- A wrong product field is reversible in five minutes.
- A wrong **price** may have already been charged.
- A wrong **redirect** on a product with live ads is lost revenue and lost SEO *instantly*, and no rollback un-loses it.

So price and redirect files get a line-by-line before/after review with a human sign-off. Description and tag files get a spot check.

## Rule 7: schedule imports, do not surprise people

- Pricing: low-traffic window, mid-week morning.
- Inventory: small deltas, hourly, automated.
- Metafield and description backfills: weekends.
- Anything touching the homepage collection or a product in an active campaign: never during the campaign.

Large jobs also queue. A 13,000-variant full import is not a thing you kick off at 4:55pm on a Friday.

## Failure modes I have actually hit

- **Silent zero-match success.** The job completes, the report says 0 items imported, and nobody reads the report. Always open the results file.
- **Scientific-notation IDs.** Covered above. It is always this.
- **Parent/child relationships.** Activating a "mother" product can activate derived child products you did not list — separate products, separate IDs, separate URLs. Variants are not children. Missing a child leaves an orphaned live URL.
- **Active but unpublished.** Products flipped to Active without the Online Store sales channel added: in stock, correctly priced, and unbuyable. One audit across two stores found 164 of them, 35 carrying inventory, one with 5,469 units sitting idle. Detection is a read-only export filtered to \`Status = Active\`, then one query for \`active AND published = false\`, sorted by inventory. Note the limitation: the \`Published\` column reflects the Online Store channel only — a true multi-channel audit needs the Admin API \`publications\` query.
- **Images.** Image rows import in order and can duplicate if you re-run a sheet that includes \`Image Src\` without \`Image Command: REPLACE\` scoped correctly. Image work deserves its own dry run.

## The part that is not about Matrixify

The tool is the easy half. What makes bulk operations safe is that every recurring job is written down: what it does, its inputs, its key column, its validation rules, its schedule, who signs off, and when it last ran with what outcome.

That document is the difference between "I import stuff sometimes" and an operations function a business can depend on. Matrixify is what makes the operations function possible; the runbook is what makes it trustworthy.

## Where to start

If you have never run a bulk operation on your store, start with the least dangerous one: export your products, add SEO titles and descriptions to fifty rows, import with \`Command: UPDATE\` and only the columns you changed. Look at the results file. Then do five hundred.

The muscle you are building is not spreadsheet skill. It is the habit of never letting an unreviewed change reach a live catalog.

---

*I have run Matrixify operations on catalogs from 600 SKUs to 13,000+ variants, across single stores and paired B2C/B2B setups. If your catalog work is still happening one product at a time, I can help — see [Matrixify expert services](/matrixify-expert), [Shopify development services](/shopify-expert), or [hire a Shopify developer](/hire-shopify-developer).*

*Direct: [WhatsApp +55 11 98851-2788](https://wa.me/5511988512788) · [contato.matheusabrahao@gmail.com](mailto:contato.matheusabrahao@gmail.com)*`,
  },
  {
    slug: 'retail-syndication-salsify-lowes-home-depot',
    title: "Retail Syndication: Getting Product Data Accepted by Lowe's, Home Depot and Menards",
    description:
      'How product data actually flows from Shopify through a PIM like Salsify out to Lowe’s, Home Depot, Menards and Amazon — attribute requirements, image specs, rejection reasons, and keeping one source of truth.',
    date: '2026-08-27',
    readTime: '13 min read',
    tags: ['Retail Syndication', 'Salsify', 'PIM', 'Product Data', 'Shopify Multichannel'],
    featured: true,
    body: `## The job nobody writes about

Search "Shopify developer" and you get themes. Search "product data syndication to Lowe's" and you get vendor marketing.

But if you sell physical products at any scale, the hardest engineering problem you have is not your storefront. It is that the same product must exist, correctly and identically, in eight places at once: your own store, your wholesale store, Amazon Seller Central, Amazon Vendor Central, Lowe's, Home Depot US, Home Depot Canada, Menards, and the Kitchen & Bath channel.

I run exactly that for a US building-products manufacturer — 361 SKUs in the syndication set, fed from Shopify through **Salsify** out to six retail partners plus Amazon. Here is how it actually works.

## The topology: Shopify is the source, the PIM is the distributor

The stable architecture is a straight line with one branch point:

- **Shopify** owns commercial truth — price, inventory, what is sellable, what is retired.
- **Salsify (the PIM)** owns descriptive truth — attributes, marketing copy, images, documents, certifications, and every retailer-specific mapping.
- **Retailers** consume from Salsify, each with their own template, their own required attributes, and their own idea of what a "product" is.

Getting this wrong in the obvious way — letting each retailer's portal become its own source of truth — is how brands end up with the same product described five different ways across five sites.

## Direct channels vs export channels, and why it matters

Salsify channels come in two flavors, and confusing them is expensive:

- **Direct** channels publish straight to the retailer. Press the button and it is gone. **Irreversible.**
- **Export** channels produce a file you then load somewhere else by hand — a portal upload, a second PIM, sometimes an email attachment.

In practice the topology is messier than the docs suggest. One of our partners has no portal at all and consumes a spreadsheet by email. Another sits behind a *second* PIM in the middle of the chain — our PIM feeds their PIM which feeds the retailer. One channel labelled "direct" in the tool behaves as an export.

**Verify what each channel actually does before you publish, not after.** The button does not tell you whether it is reversible.

## The data model trap: "variant" means two different things

This one has cost people entire catalogs.

Salsify is three levels — **Style → Variant → SKU** — with attribute inheritance flowing down from parents. Shopify is two levels — **Product → Variant**.

A PIM "variant" is a *group of SKUs*. A Shopify "variant" is a *single PIM SKU*. Same word, different cardinality. Map them naively and every relationship in your catalog is off by one level.

Worse, and this is the part that surprises people: **PIM exports do not flatten inheritance.** Export a SKU row and it comes out missing every value it was inheriting from its Style and Variant parents. If you have ever exported from a PIM, looked at half-empty rows, and assumed the data was missing — it was not. It was inherited and the export did not resolve it.

That is exactly why custom channels exist: a vendor-built mapping that resolves inheritance at publish time. Trying to export and hand-join in Excel is the long way around, and you will get it wrong on the products with the deepest hierarchy — which are always your best sellers.

## Pricing rules that cost real money

Three rules I would tattoo on a new hire:

**1. MAP must be byte-identical everywhere.** Minimum Advertised Price is not a suggestion and not a per-channel experiment. A price that lands on one retailer and not the others is a defect. In Shopify terms: MSRP goes in \`compare_at_price\` (the struck-through number), MAP goes in \`variant_price\` (what is actually charged).

**2. In a retailer's template, the field labelled "MSRP" usually means your MAP.** This is not a typo on their end — retailers use the label to mean "the price shown on the site." Send true MSRP into that field and you will list your products meaningfully above your own store. One partner is the genuine exception and consumes both: MSRP as compare-at, plus a separate dealer cost.

**3. Dealer cost is MSRP × the retailer's multiplier — not MAP × anything.** Different retailers, different multipliers. Get this into a formula, not a hand calculation.

And a small one that fails silently: **GTIN is the UPC with two leading zeros.** Twelve-digit UPC, fourteen-digit GTIN. Send the UPC into the GTIN field and validation may accept it and matching will fail downstream.

## Attribute requirements: the actual work

Each retailer publishes a template with required, recommended, and optional attributes. The engineering discipline is:

- **Formulas before new properties.** When a retailer asks for a field, the order of preference is: an existing property → a single static value → a formula derived from existing properties → and only as a last resort, a new property. Roughly 150 one-off per-retailer properties were built historically in this catalog and nearly every one is regretted, because each is a field somebody has to remember to fill forever.
- **Position attributes in steps of 10.** Display order 10, 20, 30 — so you can slide a new attribute in at 15 without renumbering the world.
- **Mirror portal fixes back the same day.** If someone fixes a typo in the Home Depot portal and not in the PIM, the next publish overwrites the fix. Silently. The portal is never the source of truth.
- **Record ID is the import key.** Export → fix in Excel → import is the bulk lever inside the PIM too, and no Record ID means no import.

## Images: where completion scores lie to you

Image requirements differ per retailer — minimum dimensions, white background, naming convention, main-image-plus-N-alternates, sometimes a required lifestyle shot or a spec drawing.

Salsify gives you a completion score per channel. Learn to read it as a diff, not a grade. A score of **331 out of 361** after an image mapping run does not mean "94% good." It means **30 specific SKUs did not map**, and the cause is almost always that one product family's asset filenames follow a different convention than the main line — an older product range, an acquisition, a supplier who names files differently.

Chase the 30. The number only matters as a pointer.

## Every retailer has its own template, and that is the whole problem

There is no shared standard. Lowe's, Home Depot US, Home Depot Canada, Menards, Amazon and the Kitchen & Bath channel each publish their own workbook, and they disagree on almost everything that matters:

- **Different required attributes per category.** A shower base needs drain location and load rating at one retailer, and neither at another — but that one wants an ADA compliance flag the first has never heard of.
- **Different units and formats.** Inches as a decimal vs. a fraction vs. a string with the unit inside it. Weight in pounds vs. ounces. Yes/No vs. TRUE/FALSE vs. Y/N. A "23.5" that should have been "23 1/2" fails validation with a message about data type, not about fractions.
- **Different category taxonomies.** Your product is one thing; each retailer's tree calls it something else, and the required-attribute set is derived from *their* category, not yours.
- **Different image specs.** Minimum pixel dimensions, background requirements, how many alternates, whether a spec drawing counts as an image or a document, and file-naming conventions that must match the SKU in a specific way.
- **Different file mechanics.** Legacy \`.xls\` with three instruction rows above the header. XLSX with reserved rows the parser needs untouched. CSV in latin-1. Home Depot Canada wants French copy that the US template has no column for.

So a meaningful share of this job is exactly what it sounds like: **taking each retailer's template, filling it correctly, fixing what they reject, and resubmitting until the catalog is live.** It is not glamorous and it is the difference between a product being on a shelf and not.

## The correction cycle: rejected → diagnose → fix → resubmit → approved

The loop is always the same four steps, and the discipline is in step two.

**Rejected.** The feed comes back with a status and, if you are lucky, a reason. Sometimes the reason is a row number and an error code with no field name. Sometimes it is "data standards not met." Sometimes it is silence and the item simply never goes live.

**Diagnose.** Never fix the row you were told about until you know the class of the error. The question is always *how many other rows have this same problem?* One rejected SKU with a missing certification attribute is usually forty SKUs in the same product family, and fixing one at a time turns a one-hour job into six weeks of round trips. I diff the rejected set against the accepted set on the suspect column — that comparison names the cause faster than any error message.

**Fix at the source, not in the template.** This is the rule that keeps the work from repeating forever. If the fix belongs in the product data, it goes into Salsify (or into Shopify and then Salsify). If the fix belongs in the *mapping* — a unit conversion, a category translation, a concatenation the retailer wants — it goes into the channel mapping or a formula, so the next publish is correct automatically. **A fix typed directly into a downloaded template is a fix you will make again next month.**

**Resubmit and confirm.** Resubmit only the corrected rows where the channel allows partial updates, and check the result against the *live retailer page*, not the portal status. Accepted and rendered are different states — I have had items pass validation, show green in the portal, and display with no images on the site for weeks.

**Log the reason and its fix.** Every rejection reason goes into a running table with the diagnosis and the resolution. The second time a code appears it should be a lookup, not an investigation. This single habit is what turns syndication from a permanent firefight into a maintainable process.

The most common causes, in the order I actually see them: missing required attribute for that retailer's category; wrong unit or number format; image below the minimum resolution or wrong background; GTIN/UPC mismatch (remember the two leading zeros); category mapped to a tree node with different requirements; description containing a competitor, a channel reference, or a URL; price outside the allowed MAP window.

## Rejections and resubmission

Retailer rejections come back through the portal, sometimes by email, and — this is the important part — **sometimes not at all**.

Portal work queues (items to enrich, data-standards maintenance) sit there silently forever. Nothing pings you. Nothing appears in a dashboard. I have found items that had been waiting for months.

The mitigation is unglamorous and it works:

- A **daily sweep** of every retailer portal, filtered to items owned by us.
- A **weekly spot-check** of live retailer product pages against the PIM. The recurring finding is images that exist in the PIM and are simply not on the live page — published, accepted, and never rendered.
- A standing rule that "no news" is not "approved." An item is done when it renders correctly on the retailer's own site.

## API reality check

Do not plan an automation strategy before you check what is actually available.

In this stack, the PIM's \`/products\` endpoint works with **Bearer** auth (Basic returns 401) and was good enough to bulk-verify all 361 records programmatically. But \`/channels\` and the organization root return 404 — so channel configuration and readiness work stay in the UI, permanently. And **three of the six retailer platforms are browser-only with no API key at all.**

So the honest architecture is hybrid: automate verification and file generation, accept that publishing on some channels is a human clicking a button, and put your engineering effort into making that human's job checkable rather than pretending it will disappear.

## Keeping Shopify as the source of truth

The loop that holds it together:

- Shopify exports (via Matrixify) are the canonical list of what exists, what it costs, and what is sellable.
- The PIM is updated from those exports, never the reverse, for any commercial field.
- Descriptive enrichment happens in the PIM, because that is where the per-retailer mappings live.
- Every publish is preceded by a readiness check by attribute, not by vibe.
- Anything fixed downstream gets pushed back upstream the same day.

## Why this is worth learning

There are a lot of people who can build a Shopify theme. There are very few who can get a product accepted by Lowe's, Home Depot, Menards and Amazon from a single source of truth and keep it accurate through a price change.

The second skill is where the leverage is, because a rejected SKU at a national retailer is not a bug ticket. It is a product that is not on a shelf.

---

*I run Shopify → PIM → retailer syndication in production across Lowe's, Home Depot US and Canada, Menards, Amazon and Kitchen & Bath channels. If your catalog is fighting its channels, [let's talk](/shopify-expert) — or [hire me directly](/hire-shopify-developer).*

*Direct: [WhatsApp +55 11 98851-2788](https://wa.me/5511988512788) · [contato.matheusabrahao@gmail.com](mailto:contato.matheusabrahao@gmail.com)*`,
  },
  {
    slug: 'shopify-speed-optimization-core-web-vitals',
    title: 'Shopify Speed Optimization: What Actually Moved Core Web Vitals on a 13,000-Variant Catalog',
    description:
      'A real Shopify speed optimization audit — lab score 31, field CWV passing. Duplicate tags, render-blocking consent scripts, LCP priority hints, and the fixes that were worth shipping.',
    date: '2026-08-26',
    readTime: '12 min read',
    tags: ['Shopify Speed Optimization', 'Core Web Vitals', 'Performance', 'Liquid', 'Case Study'],
    featured: true,
    body: `## The number that starts every one of these conversations

Someone runs PageSpeed Insights on their Shopify store, sees **31**, and forwards it to the team with a red exclamation mark.

That happened on a storefront I operate for a US building-products manufacturer — a catalog of 2,800+ products and 13,000+ multi-level variants taking millions of sessions a year. Mobile lab Performance: 31. Desktop: 56.

And the field data — the numbers Google actually uses for ranking — were **passing on both**.

That gap is the whole subject of this post. Shopify speed optimization done well starts with knowing which number you are optimizing, because chasing the wrong one burns a quarter and moves nothing.

## Lab vs field, on one page, same capture

Field (real users, 28-day rolling), mobile / desktop:

- **LCP** 2.0s / 1.9s — passing
- **INP** 110ms / 78ms — passing
- **CLS** 0 / 0.04 — passing
- **TTFB** 1.3s / 1.1s

Lab (simulated throttled mid-tier Android, cold cache), mobile / desktop:

- **LCP** 8.0s / 1.9s
- **Total Blocking Time** 2,320ms / 1,030ms
- **Speed Index** 8.8s / 2.6s
- **Main-thread work** 8.2s / 5.8s
- **Long tasks** 20 / 17
- **Total payload** ~4,445 KiB / ~4,405 KiB

Same page. The lab is simulating a device and network that most of this store's actual traffic does not use. That does not make the lab useless — it makes it a **magnifying glass**. Everything the lab screams about is real; it is just amplified. Ranking is safe. Experience on a bad phone is not.

So the framing I use with stakeholders: *field CWV is the scoreboard, lab is the bug list.*

## What was actually slow, in order of measured cost

**1. Duplicated Google tag loads — by far the biggest single item.**

Seven distinct Google Tag / GTM / gtag script loads on one page. GA4 was loading **twice** — once through the GTM container and once through a direct \`gtag/js\` include. The Ads conversion tag, twice. Two extra \`GT-*\` containers nobody could account for.

Combined: ~1,066 KiB transferred, ~1,704ms of CPU, 1,569ms of long tasks on mobile, ~467 KiB of it flagged as unused JavaScript. Each duplicate removed was worth an estimated 140–180 KiB and 200–450ms of mobile CPU.

This is the most common finding I have on Shopify stores and it is never a code problem. It accumulates: someone installs the Google & YouTube sales channel (which injects its own tag), an agency adds GTM, a developer hardcodes gtag in \`theme.liquid\` as a "quick fix," and nobody removes anything.

**2. The consent management script.** 148.9 KiB, render-blocking for 2,850ms on mobile, 852ms of long tasks on desktop, and a 4-hour CDN cache TTL.

It is also **not deferrable** — it has to run synchronously for consent auto-blocking to work at all. Deferring it would break the thing it exists to do. So this went in the "accepted cost" column, and the only real levers were asking the vendor for a lighter embed and a longer cache TTL. Worth saying out loud: a legitimate part of a performance audit is deciding what you are *not* going to fix.

**3. Render-blocking first-party CSS and JS**, ~118.5 KiB across ~8 files. A monolithic \`theme.css\` at 60.2 KiB with ~52 KiB unused and ~9 KiB of it unminified. A carousel bundle at 39.6 KiB costing 1,410ms of render blocking, 930ms of desktop CPU, and a 45ms forced reflow. Several per-section CSS files at 350–530ms each.

**4. The LCP element was mis-hinted.** The hero slideshow image was discoverable in the initial HTML and correctly not lazy-loaded — but had no \`fetchpriority="high"\`.

The LCP breakdown told the whole story:

- TTFB: 40ms
- Resource load **delay**: 790ms
- Resource load duration: 330ms
- Element render delay: 580ms

The loss was almost entirely *delay*, not download. The browser knew about the image and did not prioritise it. One attribute.

\`\`\`liquid
{{ section.settings.hero_image
   | image_url: width: 1600
   | image_tag:
       loading: 'eager',
       fetchpriority: 'high',
       sizes: '100vw',
       widths: '480, 768, 1024, 1440, 1600' }}
\`\`\`

**5. Desktop and mobile were served different formats.** The same hero slide went out as WebP to mobile and PNG to desktop — which is why desktop image savings (877 KiB) were roughly 3× mobile's (291 KiB). A theme conditional that had drifted.

**6. The theme's runtime responsive-image picker was oversizing everything.** A custom client-side srcset selector was choosing \`width=1620\` sources for thumbnails rendered at 80–422px, because it measures containers that are hidden or collapsed at pick time. ~500 KiB of desktop waste.

I flagged this and did not fix it. The logic lives inside a vendor theme's bundled JS; the fix is real theme surgery with real regression risk, and it sits behind four cheaper wins. Sequencing is part of the job.

**7. Images uploaded through a plain URL text field bypass Shopify's image pipeline entirely.** Two PNGs at 137 KiB and 87 KiB were being served raw — no WebP conversion, no responsive srcset — because the section used an \`image_url\` string setting instead of the native image picker.

This fix was **editorial, not technical**: re-upload through the picker, clear the text field. Then I added a responsive \`srcset\` to the fallback path in Liquid so the next person to use that field does less damage.

**8. Over-preconnecting.** Eight \`preconnect\` hints, four of them unused. Lighthouse warns above four, and each unused one is a wasted DNS + TLS handshake competing with resources you actually need.

**9. Twelve registered web pixels** — five from apps, seven custom. The \`wpm:pixel:register\` User Timing marks showed the custom pixels alone taking ~1.8–2.0s to register.

**10. A review-platform loader running on a page with no reviews** — 41 KiB, with its own performance marks measuring 5.4–6.5s. Fixed in the vendor's settings, not in the theme.

**11. DOM size**: 5,737 elements, depth 19, with one product-gallery node holding 348 children.

## What actually shipped

One branch, six Liquid files:

- Deferred the carousel bundle and moved its init to \`DOMContentLoaded\`
- Added \`fetchpriority="high"\` to the first slide image in both the desktop and mobile variants
- Removed three unused preconnects
- Added responsive \`srcset\` to the \`image_url\` fallback images
- Gave hotspot and quick-shop anchors real \`href\` values — this fixes the "links are not crawlable" SEO failure without changing behaviour, because the JS already calls \`preventDefault()\`
- De-duplicated an \`aria-label\` where a phone link was inheriting a CTA's label

Small diff. That is deliberate. On a store doing this volume, a performance branch that touches thirty files is a risk, not an improvement.

## What I explicitly refused to chase

Naming these up front saves everyone a month:

- **TTFB.** Hosted platform plus app proxies. Not yours.
- **\`ERR_BLOCKED_BY_CLIENT\` console noise.** That is Lighthouse's own ad-blocking.
- **Platform telemetry 400s.** Shopify's, not yours.
- **CSP / HSTS / COOP / Trusted-Types headers.** Platform-controlled on a hosted storefront. You cannot set them and the audit will always fail.
- **Legacy-JS polyfills inside third-party bundles.** You do not own that build.
- **The theme's jQuery dependency.** Removing it is a rewrite, not an optimisation.

One bonus finding: the page's only colour-contrast accessibility failure was on the **consent vendor's own Accept/Decline buttons**. Fixed in the vendor dashboard. Zero theme change.

## The tag cleanup deserves its own discipline

The duplicate-tag problem is the biggest win available on most Shopify stores, and it is also the easiest one to break checkout tracking with. The sequence I use:

- **Inventory every tag first** with a status per tag: KEEP / MIGRATE / FIX / INVESTIGATE / REMOVE?
- **Inspect what the legacy container actually fires in production** before touching it. Nobody remembers what is in there.
- **Install the new container empty**, firing nothing.
- **Migrate tag by tag**, verifying each in preview mode.
- **Conversions last**, with the ads owner watching live.
- **Only then** remove the legacy container and the hardcoded duplicates.
- **Re-run PageSpeed against the dated baseline** so the improvement is measured, not asserted.

A broken conversion tag costs more than a slow page. Order matters.

## The short version

If someone hands you a Shopify store and a red PageSpeed score:

- Check field CWV first. If it passes, you are optimising experience, not ranking — say so, and set expectations accordingly.
- Count the analytics tags. There are more than anyone thinks.
- Look at the LCP breakdown, not the LCP number. Delay and download need different fixes.
- Ship the four cheapest fixes and measure before touching the theme's core JS.
- Write down what you are not fixing and why.

---

*I do Shopify speed optimization on production stores where breaking things is not an option. See [Shopify speed optimization services](/shopify-speed-optimization) or [hire a Shopify developer](/hire-shopify-developer).*

*Direct: [WhatsApp +55 11 98851-2788](https://wa.me/5511988512788) · [contato.matheusabrahao@gmail.com](mailto:contato.matheusabrahao@gmail.com)*`,
  },
  {
    slug: 'klaviyo-expert-flow-audit',
    title: 'Klaviyo Expert Field Notes: 11 Flow Defects That Quietly Kill Email Revenue',
    description:
      'Real Klaviyo flow defects found in a production audit — broken dynamic coupons, SMS/email branching bugs, dead conversion metrics, UTM fragmentation — and how flow revenue recovered to ~$15.8K in 7 days.',
    date: '2026-08-24',
    readTime: '13 min read',
    tags: ['Klaviyo Expert', 'Klaviyo Flows', 'Email Marketing', 'Retention', 'Case Study'],
    featured: true,
    body: `## Broken Klaviyo flows do not look broken

That is the whole problem. A flow with a fatal defect shows the same green **Live** badge as a flow that is printing money. The preview renders. The test send arrives. The dashboard shows sends going out.

And the revenue line is flat, and nobody knows why.

I audited a production Klaviyo account across two storefronts and found eleven distinct defects. Not "opportunities to optimise" — actual bugs, each one costing money every day it stayed live. Here they are, because I promise at least three are on your account right now.

## 1. Static text where a dynamic coupon belonged

The account had two properly configured dynamic coupon objects — prefix plus eight random characters, unique per recipient. Three emails printed the bare **prefix** as typed text.

Every single recipient received a code that does not exist.

Why nobody caught it: the prefix looks like a real coupon code. \`SAVE10\` in the preview looks exactly like a working \`SAVE10\`. The only way to catch it is to look at whether the token in the editor is a *variable* or *text* — or to actually redeem the code from a real send.

## 2. Copy promising an expiry the coupon does not have

Emails said "valid for 5 days." The coupons were configured at 30 days.

This is not a copy nit, it is structural: **a shared static code physically cannot give each recipient N days from their own send date.** Only a dynamic coupon can. If your email says "expires in 5 days," you have committed to dynamic coupons whether you know it or not.

Same class of bug in the welcome email, where a literal \`[INSERT EXPIRY DATE]\` placeholder had been shipped to production. Fixed by rendering the date as send date plus N days.

## 3. A live transactional email advertising a deleted discount code

For roughly ten weeks, a live flow was sending a code that had been deleted from Shopify. Recipients clicked, applied it, and got a checkout error.

The fix had two parts, and the second is the one people skip: recreate the code as a **bridge** — matching the original's exact scope (percentage off a specific non-custom collection, one use per customer, no end date) — then retire it deliberately after the flow migration, rather than leaving a mystery code alive forever.

## 4. The SMS/email branch that silently muted a whole segment

The Abandoned Checkout flow branched on SMS consent. Anyone who was SMS-subscribed got exactly one text and **zero emails**.

Read that again: your most engaged subscribers — the ones who gave you their phone number — were the ones receiving the *least* communication about an abandoned checkout.

The correct shape is not a branch. It is a base and a bonus:

- **Everyone** receives the full email sequence.
- **SMS subscribers** additionally receive the text.

SMS is additive. If your flow chart has SMS on one side of a split and email on the other, you have this bug.

## 5. Empty product variables

Abandoned Cart and Browse Abandonment were rendering "you added ___ to your cart" — the product name variable resolving to nothing.

The catch is that this **passes in preview**, because preview injects sample data. The only reliable test is triggering the flow against a real event on the live store and reading the email that actually arrives.

## 6. Cross-flow double-hitting

Browse Abandonment was firing at people who had already added the item to cart, so they got a "still thinking about it?" email and a cart reminder about the same product within an hour.

Two fixes:

- An **exclusion filter** on Browse Abandonment for anyone who has started checkout or added to cart.
- A **30-day re-entry cooldown** on Abandoned Cart, so a repeat visitor stops receiving the same email every week.

## 7. Flows pointed at a dead conversion metric

This one is my favourite because it makes a working flow report zero.

The account had **two** \`Placed Order\` metrics: one from the current Shopify integration (live, 22–35 orders/day) and one left over from a **previous ecommerce platform** whose integration had been removed years earlier. The old one still appears in the dropdown. It records 0 every single day.

Any flow whose conversion metric points at the dead one reports **$0.00 revenue** forever, no matter how well it performs. Teams then kill their best-performing flow because "it doesn't make money."

Check every flow's conversion metric. If your store has ever been migrated, check twice.

## 8. Inconsistent Smart Sending inside one flow

Smart Sending on for email 1, off for emails 2 and 3. Not a catastrophe, but it means your frequency cap is a suggestion, and it is the kind of drift that indicates nobody has reviewed the flow end-to-end in a long time.

## 9. Links pointing at the myshopify.com domain

Three welcome emails and a browse-abandonment product feed were linking to \`*.myshopify.com\` instead of the customer-facing domain. Plus several primary CTA buttons with \`href="#"\`.

The myshopify links technically work — they redirect — but they burn a redirect hop, they look untrustworthy in a hover preview, and they break UTM attribution on some setups.

## 10. The popup and the flow were pointed at different lists

This is the one that cost the most.

The site popup deposited subscribers into **List A**. The Welcome Series triggered on **List B**.

Result: **8,276 email subscribers gained in 90 days**, and a Live Welcome Series showing **$0.00**. A bucket being filled through a hole.

Related: two competing popups were running, one from the theme and one from Klaviyo. Important mechanic here — you kill the duplicate by disabling the individual **form** in Klaviyo, *not* by turning off the Klaviyo app embed in the theme editor. That embed powers the onsite tracking that feeds Browse Abandonment and Abandoned Checkout, which between them were doing about $6.6K/week. Turn off the embed and you turn off two revenue flows to fix a cosmetic problem.

## 11. UTM parameters set to the list name

The account had \`utm_source\` configured to resolve to **the list or segment name**. Every send produced a unique source value.

GA4 attributed the clicks correctly — and then never aggregated them, because "email" had shattered into dozens of one-off sources. The email channel looked tiny because it was spread across forty rows.

The fix is boring and correct:

- \`utm_source\` — static. One value. \`klaviyo\`.
- \`utm_medium\` — \`email\`.
- \`utm_campaign\` — carries all the detail.
- Per-message UTM tracking enabled.

The second storefront had a worse version: the master UTM toggle was **entirely off**, so every link left with no UTM at all and analytics filed the traffic as direct. And that store's theme had no analytics tag installed either — so flipping the Klaviyo toggle alone would have changed nothing. Two independent fixes, both required.

**An important nuance I put in writing for the client:** revenue was still being captured correctly *in Klaviyo* the whole time, via Shopify's Placed Order metric. The GA4 gap was a reporting hole, not lost money. Those are very different problems and conflating them causes panic. On the wholesale account, a welcome flow was doing ~$32.7K/30 days that GA4 could not see at all.

## What the recovery looked like

Before the audit, a 39-day sending blackout with the revenue flows sitting in Draft had collapsed flow revenue by roughly **98.9%**.

After the fixes, with four flows genuinely live, seven-day flow revenue came back to about **$15.8K**:

- Cart reminder: ~$9.1K (~$212 per recipient)
- Checkout reminder: ~$3.6K (~$80 per recipient)
- Browse abandonment: ~$3.0K (~$109 per recipient)

## The go-live checklist that prevents most of this

Turning a flow "on" is more than one switch, and this is where people get burned:

- Flip the **flow** to Live.
- Flip each **message inside the flow** to Live. A live flow full of draft messages sends nothing. This is the single most common cause of "we turned it on and nothing happened."
- **Pause Shopify's native abandoned-cart automations in the same sitting**, or every customer gets two emails.
- Verify the **conversion metric** on every flow.
- Verify **coupons are attached as dynamic objects**, not typed text.
- Verify **links resolve to the customer-facing domain**.
- Trigger each flow with a **real event on the live store** and read the email that arrives.
- Check the **trigger list matches the list your forms actually write to.**

## What is still missing on most accounts

The D2C side had Welcome, Browse Abandonment, Abandoned Cart and Abandoned Checkout — and **no Post Purchase and no Winback**. The wholesale account was missing Browse Abandonment, Abandoned Cart, Abandoned Checkout and Winback entirely.

Post-purchase and winback are the two flows that turn a first order into a customer. They are also the two that get built last, because they do not have the urgency of a cart reminder. Build them anyway.

---

*I audit and rebuild Klaviyo flows on stores where email is a real revenue line. See [Klaviyo expert services](/klaviyo-expert) or [hire a Shopify developer](/hire-shopify-developer).*

*Direct: [WhatsApp +55 11 98851-2788](https://wa.me/5511988512788) · [contato.matheusabrahao@gmail.com](mailto:contato.matheusabrahao@gmail.com)*`,
  },
  {
    slug: 'shopify-b2b-wholesale-alongside-b2c',
    title: 'Shopify B2B Wholesale Alongside B2C: Running Two Storefronts on One Catalog',
    description:
      'How to run a Shopify B2B wholesale storefront next to a consumer store — MAP vs MSRP pricing, customer tagging, trade tiers, catalog sync, checkout differences, and the price-leakage problem nobody mentions.',
    date: '2026-08-22',
    readTime: '13 min read',
    tags: ['Shopify B2B Wholesale', 'Shopify Plus', 'MAP Pricing', 'Catalog Operations', 'Case Study'],
    featured: true,
    body: `## Two audiences, one catalog, zero tolerance for drift

I operate two Shopify storefronts for a US building-products manufacturer. A consumer store and a wholesale store, running the same theme, sharing the same physical products, and sharing almost nothing else.

The shape of the problem, so you know what the constraints are:

- **Consumer store:** millions of sessions a year against an enterprise-scale catalog — 2,800+ products and 13,000+ multi-level variants.
- **Wholesale store:** the same physical products behind customer accounts, net terms, separate price lists and a completely different checkout.

Both storefronts, one source of truth. This post is about what it actually takes to keep both correct at the same time.

## Decision one: two stores or one store with B2B enabled?

Shopify Plus gives you native B2B — Companies, company locations, catalogs, price lists, payment terms — inside a single store. It is genuinely good, and for most brands it is the right answer.

We run two separate stores. That is a deliberate trade, and the honest version is:

**What two stores buy you:** completely separate app stacks (the wholesale store runs request-a-quote, checkout blocks, direct-mail and landing-page tools the consumer store has no business loading); separate tax providers, which turns out to matter more than anyone expects; separate email accounts and separate analytics, so wholesale behaviour never pollutes consumer reporting; a wholesale domain you can put behind a login without touching consumer SEO; and no risk of a merchandising change on one side leaking to the other.

**What two stores cost you:** every catalog action happens twice, and **the two stores do not share product IDs**. A product ID from the consumer store used against the wholesale store returns "product not found." Every bulk operation is generated twice, from two exports, keyed on SKU.

The golden rule, written down and enforced: **any SKU change in one store must be replicated in the other and in every connected app.** Out-of-sync inventory between the two is the number one operational risk, above everything else on the list.

If you are choosing today and you do not have a hard reason for separation — a different tax engine, a different app stack, a genuinely different catalog — use native B2B in one store. The duplication tax is real.

## Pricing: MSRP, MAP, and trade tiers

This is where wholesale gets structurally different from consumer, and where mistakes are expensive.

The model in Shopify terms:

- **MSRP → \`compare_at_price\`.** The struck-through number. What the product "is worth."
- **MAP → \`variant_price\`.** Minimum Advertised Price. What is actually charged and displayed.
- **Trade tier 1 → 30% off**, applied to the trade audience.
- **Trade tier 2 → certified installer.** And here is the interesting part: tier 2 is not a deeper discount. It is a **lead-routing tier** — certified installers get referred work. Promoted on the consumer site, not on the wholesale one.

Two rules that carry real money:

**MAP must be byte-identical across every channel and the webstore.** Not "close." Not "we'll test a lower price on one channel." A price that lands on one retail channel and nowhere else is treated as a defect, and it is one, because your retail partners are watching and their agreements say so.

**Cross-link the tiers.** The consumer store carries a "get trade pricing" CTA pointing at wholesale signup. That single link is one of the highest-converting acquisition paths in the whole system, because contractors land on the consumer site constantly while researching.

## Customer tagging: the mess you will inherit

Every B2B Shopify store I have touched has this problem, and it is worth describing precisely because the fix is counterintuitive.

A single logical concept — *this customer is a trade account* — was encoded across at least **four different tag variants**, including one with a typo. On top of that: legacy migration artifacts from the previous platform (\`<platform> Group:1\`, \`migrated\`), test and debug tags left in production, and one tag repeated four times inside a single tag string.

The instinct is to clean it up first. That is the wrong order, because segmentation is blocking revenue today and tag cleanup is a project.

What I did instead: **build segments that OR across every known tag variant**, ship the revenue work, and file full tag cleanup as its own tracked piece of technical debt. Trusting one canonical tag before you have made it canonical is how you silently exclude a third of your trade customers from a campaign.

When you do clean up: inventory every tag first, with a status per tag (KEEP / MERGE / REMOVE), and confirm what each one is actually wired to — smart collections, Klaviyo segments, theme conditionals, discount rules — before deleting anything.

## Product tagging as feature-gating, and the multi-theme trap

A pattern worth stealing: use one master product tag to drive a smart collection (\`Tag Equals <master>\`), and separate child tags to gate different PDP and grid render paths.

The bug that pattern produces, and I have shipped it: the theme's grid badge gated on tag X while the smart collection filtered on tag Y. Silent mismatch — the collection populated correctly and the badge never rendered anywhere. Nothing errors. You find it by eye.

And the genuinely non-obvious trap: **tags are product-level data shared by every theme in the store.** Importing tags to test a badge on an *unpublished preview theme* immediately changes smart-collection membership on the **live** theme. There is no theme scoping on catalog data. Your options are: accept the brief exposure, reverse it with a second import, or defer the tag import to go-live day. There is no fourth option.

For the import itself: key on Variant SKU, use \`Tags Command: MERGE\` (append, never wipe), \`Command: UPDATE\` (touch existing only, create nothing), and run the Analyze pass first to confirm every row matches.

## Checkout is where B2B and B2C diverge most

The consumer checkout is optimised for speed: guest checkout, express payment buttons, upsells, a shipping-threshold progress bar.

The wholesale checkout has different jobs entirely — purchase order numbers, net payment terms, quantity minimums and multiples, tax exemption certificates, freight quoting for palletised goods, and a sales rep attached to the order.

On Shopify Plus, **Checkout UI Extensions** are the supported way to add these: a PO number field, a "ship to my yard" toggle, a certificate upload. They render inside Shopify's checkout without the maintenance liability of checkout.liquid. Off Plus, you push what you can into cart attributes and post-purchase, and you accept the ceiling.

Order-quantity rules — minimums, multiples, case packs — are worth solving with a dedicated app rather than theme JavaScript, because theme-level quantity validation is trivially bypassed by anyone hitting the cart API directly. And on a wholesale store, someone will.

## The price-leakage problem nobody mentions

This is the finding I would most want a merchant to read before launching wholesale on Shopify.

I tested the wholesale storefront with unauthenticated requests carrying a normal browser user agent. The home page, collection pages, product pages, a resources page and **\`/products.json\`** all returned 200 with **no redirect to login**.

The theme behaves correctly: for a logged-out visitor it hides the price and renders a "contact us for pricing" message. That part works exactly as designed.

But the number is still in the JSON embedded in the product page, and in the public \`/products.json\` and \`/collections/<handle>/products.json\` endpoints. A logged-out request returned the discounted price against the compare-at, consistent with the trade tier.

The critical detail: **these are native platform endpoints that do not pass through Liquid.** No theme code opens them and no theme code can close them. This is default behaviour on every Shopify storefront, not a defect anyone introduced.

Your actual levers are configuration, not code:

- Shopify's **catalog restriction** settings on the B2B catalog
- The store-wide **password / login-required** setting
- A **CDN or edge rule** blocking the JSON endpoints for unauthenticated requests

And the honest conclusion I wrote for the client: running true trade pricing on a publicly reachable Shopify storefront has an inherent leakage trade-off. You choose your position on it consciously, or you discover it when a retail partner sends you a screenshot.

## Architecture: when the right answer is not a catalog

A related question came up: how do you serve a *specifier* audience — architects and engineers who research products and never buy online — alongside a transactional trade audience, when their product lines conflict?

Four options were on the table:

- A **non-ecommerce specification hub** on a subdomain or path, with "Download Specs" and "Contact Rep" instead of Add to Cart.
- A **tabbed PDP** that swaps SKU, specs and CTA per install method — consolidates page authority for SEO, but needs real PDP template work.
- **Role-based catalog gating** via customer tagging — rejected, because putting research content behind a login suppresses exactly the lead generation the content exists for.
- A **guided product finder** that forces self-identification before showing conflicting information.

The recommendation was the first one, on the reasoning that the research audience are **not ecommerce users at all**. Building them a catalog is solving the wrong problem well.

That is the general lesson of B2B on Shopify: most of the hard decisions are not about Shopify. They are about correctly identifying who is on the page and what job they came to do.

## The short version

- Choose two stores only for a concrete reason. Otherwise use native B2B.
- MSRP in compare-at, MAP in price, and MAP is identical everywhere.
- Segment across every tag variant you have, then clean the tags as a separate project.
- Tags are store-wide, not theme-scoped. Plan imports around go-live.
- Test your wholesale storefront logged out, including \`/products.json\`, before you launch.
- Solve wholesale checkout with Checkout UI Extensions and server-side quantity rules, not theme JavaScript.

---

*I run paired B2C and B2B Shopify storefronts in production, on one enterprise-scale catalog. If you are launching or fixing wholesale on Shopify, see [Shopify development services](/shopify-expert) or [hire a Shopify developer](/hire-shopify-developer).*

*Direct: [WhatsApp +55 11 98851-2788](https://wa.me/5511988512788) · [contato.matheusabrahao@gmail.com](mailto:contato.matheusabrahao@gmail.com)*`,
  },
  {
    slug: 'shopify-migration-expert-seo-redirects',
    title: 'Shopify Migration Expert Notes: Moving URLs Without Losing SEO',
    description:
      'The redirect ordering rule Shopify does not document, URL inventories, rollback asymmetry, and what a platform migration leaves behind years later. Field notes from repeatable Shopify migrations.',
    date: '2026-08-20',
    readTime: '12 min read',
    tags: ['Shopify Migration Expert', 'Technical SEO', '301 Redirects', 'Matrixify', 'Case Study'],
    featured: false,
    body: `## Migrations are not a project, they are a process

Most migration advice assumes you do it once: leave Magento, arrive on Shopify, cry, celebrate.

The migrations that taught me the most are the ones that happen **every three to four weeks**. On a US building-products manufacturer's storefronts, an old product line is progressively retired and replaced with a new one — old SKUs out, new SKUs in, URLs redirected, across two stores. Same operation, dozens of times.

Repetition is what turns migration from an art into a runbook. Here is the runbook.

## The atomic operation

Per SKU pair, three things happen:

- Old product → **Draft**
- New product → **Active**
- Old URL → **301** to the new URL

Three operations, two stores, in a fixed order. And the order is not arbitrary.

## The ordering rule Shopify does not put in a warning box

**Upload Active first, then Draft, then Redirects.**

The reason: **Shopify ignores a URL redirect while the source URL still resolves to a live product.** The redirect record exists, it appears in the admin, and it does nothing. The live product wins.

So if you create redirects before drafting the old products, your redirects silently do not fire. You will not get an error. You will find out from Search Console six weeks later, after the equity has already leaked.

Draft the old product first. Then the redirect takes effect.

## The mechanics, concretely

Per round, six import files — three per store, times two stores:

- Two XLSX files (activate, draft) with a sheet named **exactly** \`Products\`, containing only \`ID\` and \`Status\`. Not \`Sheet1\`. Not \`Products (1)\`.
- One CSV: \`Redirect from,Redirect to\`, with **full absolute URLs** on the destination side, using that store's own domain.

Three things that will bite you:

**Product IDs are store-specific.** A consumer-store ID used against the wholesale store gives "product not found." The two stores have entirely separate ID spaces.

**Scientific notation silently corrupts IDs.** A 13-digit product ID pasted into Excel becomes \`1.05E+13\`. Format the column as Text before pasting. This is the single most common cause of a migration import that reports success against zero rows.

**Parent and child products are not variants.** Variants are finishes inside one product. Children are *separate products* with separate IDs and separate URLs — multi-unit versions, kit bundles, cut-down sizes. Activating a "mother" product activates its children. If your redirect list only covers parents, every child leaves an orphaned live URL behind.

## Verification, and the audit trail Shopify does not give you

Verification is thirty seconds and non-negotiable: open two or three old URLs **in incognito** and confirm the 301 lands where it should. Then confirm the new pages are live on both stores.

Incognito matters because your logged-in admin session can render draft products.

And a detail worth knowing: **Shopify records a product's creation date, not its activation date.** If you will ever need to answer "when did this SKU go live?" — for a retailer, for a warranty claim, for a marketing post-mortem — you have to log it yourself, out of band. We keep a workbook with activation dates and a release-schedule legend. The platform does not remember, so you do.

## Batching, because the cost is fixed

The whole process takes 20–30 minutes whether you migrate one pair or six. That fixed cost drives an explicit decision rule:

- **4–6+ pairs ready** → run the round.
- **1–3 slow movers** → hold and batch them with the next round.
- **1 fast mover** → run it alone as a deliberate exception, because the revenue justifies the overhead.

Making that rule explicit stops the process from being run ad hoc every time someone asks nicely.

## Automating the file generation

The six files per round are mechanical, which means they should not be made by hand.

I wrote a Python generator that reads the redirect-mapping workbook read-only, takes an approved list of parent SKUs, filters to those parents (children included automatically), **de-duplicates variant SKUs down to product IDs**, resolves old SKUs to old product IDs, keeps the two stores' ID spaces separate, and emits all six files.

How I validated it: regenerated a historical round that had already been run manually and **byte-matched the output**. One parent expanded to 90 variant SKUs which collapsed to 3 product IDs — exactly the kind of arithmetic a human gets wrong at 6pm.

## Redirect safety rules

**Live ads point at existing URLs.** A wrong redirect in a bulk file breaks paid traffic silently — the ad still runs, the click still costs, the landing page is now something else. Never generate a redirect file without showing the before/after pairs for review first.

**The asymmetry rule.** This is the thing I want people to internalise:

- Deleting a wrong SKU is reversible in five minutes.
- A broken redirect on a fast-selling product is lost revenue and lost SEO **instantly**, and no rollback un-loses it.

So price files and redirect files get line-by-line human review. Description and tag files get a spot check. Review effort should follow blast radius, not row count.

**Always export current state before importing.** That export is your rollback. **Test 5 rows before 200.**

## URL inventory: the artifact you build before you move anything

For a genuine site split or replatform, the pre-work is an inventory, not a plan.

We built a full crawl-and-classify inventory of roughly **2,072 URLs per store — about 4,144 across both** — with columns for store, page type, title, URL and last-modified date. Then joined it against organic performance data to produce three artifacts:

- **A master URL → traffic map**: organic traffic per month, keyword count, traffic share, top query with its volume and position, and primary intent, per URL. This is what tells you which redirects are load-bearing.
- **A "ranking but not in inventory" list.** 33 URLs earning organic traffic that the inventory did not know existed — including legacy product URLs from a discontinued material line and a bare \`http://\` homepage. **These are the URLs a migration loses**, because nobody redirects a page they do not know they have.
- **A query-opportunity list**: high-volume terms sitting at positions 11–19. Page-two risk. A migration can push these either direction, so you want them identified before you move.

That triad is the artifact set. If you are quoted a migration and nobody mentions a URL inventory, the quote is for something else.

## What a migration leaves behind, years later

The store I work on migrated from another platform long before I arrived. The residue is still measurable, and every item on this list is a real bug I found:

- **Dead conversion metrics** in the email platform — a \`<old platform> Placed Order\` metric still selectable in dropdowns, recording 0 every day. Any flow pointed at it reports $0 revenue forever.
- **Legacy customer tags**: \`<old platform> Group:1\`, \`migrated\`. Still being written by nothing, still matched by segments.
- **Legacy product metafields** with the old platform's namespace, still on the schema, still populated on old products and empty on new ones.
- **Products with no compare-at price**, because the old platform did not have that field and the migration had nowhere to put MSRP.

Budget a post-migration cleanup sprint at 90 days. Nobody does, and this is what it costs.

## The failure mode that follows every activation

Products get flipped to Active and the **Online Store sales channel is never added**. They are active, in stock, correctly priced, and completely unbuyable.

The first audit for this across two stores found **164** of them — 86 on one store, 78 on the other. 35 were carrying inventory. One had **5,469 units** sitting idle.

Detection is cheap: export read-only, filter to \`Status = Active\`, then one query for rows where \`active AND published = false\`, sorted by inventory descending. I run it over the CSV with DuckDB in about ten seconds.

One caveat that matters: the \`Published\` column reflects **only** the Online Store channel. A true "published to N of 8 channels" audit needs the Admin API \`publications\` query. If you syndicate to retail channels, the CSV will tell you a comfortable half-truth.

## If you are migrating to a new domain

The hardest migration is not the catalog. It is moving a **logged-in, revenue-generating** audience.

Every bookmark, every saved login link, every email flow URL, every sales-rep email signature and every paid campaign points at the current address. The position I hold on this: **the redirect map is built before anything moves, it is its own workstream with its own owner, and it does not get absorbed into whoever happens to be building the new pages.**

Migrations fail in the gaps between people's job descriptions, not in the technology.

---

*I run Shopify migrations and URL restructures on stores where downtime and lost rankings are not acceptable. See [Shopify migration services](/shopify-migration-expert) or [hire a Shopify developer](/hire-shopify-developer).*

*Direct: [WhatsApp +55 11 98851-2788](https://wa.me/5511988512788) · [contato.matheusabrahao@gmail.com](mailto:contato.matheusabrahao@gmail.com)*`,
  },
  {
    slug: 'shopify-multichannel-inventory-sync',
    title: 'Shopify Multichannel: Syncing 7+ Sales Channels Without Breaking the Catalog',
    description:
      'Replacing an 18MB Excel macro with a real inventory pipeline — Amazon Seller and Vendor Central, Google Merchant Center, dropship networks, and why every channel has a different key column.',
    date: '2026-08-18',
    readTime: '13 min read',
    tags: ['Shopify Multichannel', 'Shopify Inventory Sync', 'Amazon Seller Central', 'Google Merchant Center', 'Python'],
    featured: false,
    body: `## The real multichannel problem

Everyone thinks the multichannel problem is *listing* products on more channels. It is not. Listing is a one-time cost.

The problem is that once a product is on eight channels, **the quantity number has to be right on all eight, every day, forever** — and every channel wants it in a different file format, keyed on a different identifier, in a different column.

I run this daily for a US building-products manufacturer: two Shopify storefronts, three retailer dropship feeds (two big-box US chains and one Canadian arm), Amazon Vendor Central and Amazon Seller Central, plus product-data syndication to six retail partners. Around 3,000 SKUs on the inventory side, 13,000+ variants on the consumer store.

This post is about the engineering of keeping that in sync.

## What it looked like before

An **18 MB single-user Excel workbook** with roughly **48 worksheet tabs**, macro-driven, living on a virtual desktop. It computed sellable quantity per channel and emitted seven daily files. A human then uploaded each file to its destination by hand.

Every failure mode you would predict:

- **File lock.** One person at a time. If they are on holiday, inventory does not sync.
- **No version control.** The formula that broke last Tuesday is unrecoverable.
- **No schedule.** It runs when someone remembers.
- **No audit trail.** "Why did this SKU go to zero?" is unanswerable.

Worth saying: it *worked*. It ran a real business for years. The point of replacing it is not that it was stupid — it is that its correctness lived in one person's head.

## Every channel has a different key and a different quantity column

This is the detail that makes multichannel sync annoying rather than trivial. The seven daily outputs:

- **Shopify ×2** — keyed on \`Variant ID\`, quantity in \`Variant Inventory Qty\`, XLSX, sheet must be named \`Products\`.
- **Three retailer dropship templates** — keyed on \`VENDOR SKU\`, quantity in \`QTY\`, legacy **.xls**, three instruction rows above the header (the real header is on row 4).
- **Amazon Seller** — keyed on \`item_sku\`, quantity in \`quantity\`, plus \`update_delete = PartialUpdate\`, XLSX with three reserved metadata rows.
- **Amazon Vendor** — keyed on \`SKU\`, quantity in \`Available units\`, CSV, **latin-1 encoding**.

Seven files, seven key columns, four file formats, one encoding gotcha. Any generic "sync tool" that promises to handle this without configuration is lying to you about at least three of them.

## The pipeline that replaced it

Shape: **INGEST → SQLite → TRANSFORM → OUTPUT**.

Six tables replaced 48 tabs:

- \`products\` — the SKU master
- \`channel_membership\` — which SKUs are offered on which channel
- \`inventory\` — quantity on hand
- \`oos_status\` — out-of-stock flags
- \`overrides\` — force-in-stock and manual adjustments
- \`exceptions\` — SKUs suppressed on specific channels

Plus one computed view, \`channel_state\`.

The core rule set is deliberately tiny, and keeping it tiny is the whole design:

- A SKU is offered on a channel only if it is a **member** and **not in exceptions**.
- \`sellable_qty\` starts at \`qty_on_hand\`.
- OOS and not force-in-stock → **0**.
- Force-in-stock → keep on-hand regardless of OOS.

Four rules. When someone reports a wrong quantity, you can hold all four in your head while you debug.

\`\`\`sql
SELECT p.sku,
       CASE
         WHEN o.force_in_stock = 1 THEN i.qty_on_hand
         WHEN s.is_oos = 1        THEN 0
         ELSE i.qty_on_hand
       END AS sellable_qty
FROM channel_membership m
JOIN products  p ON p.sku = m.sku
JOIN inventory i ON i.sku = m.sku
LEFT JOIN oos_status s ON s.sku = m.sku
LEFT JOIN overrides  o ON o.sku = m.sku AND o.channel = m.channel
WHERE m.channel = ?
  AND NOT EXISTS (
    SELECT 1 FROM exceptions e
    WHERE e.sku = m.sku AND e.channel = m.channel
  );
\`\`\`

## The output trick: fill the template, do not rebuild it

This is the part I would most recommend copying.

The obvious approach is to generate each channel's file from scratch. The better approach: **open the channel's real template file and update only the quantity column, keyed on that channel's own key, preserving everything else byte-for-byte.**

Why it matters — the templates carry things you do not want to reimplement and cannot afford to lose: retailer instruction rows, Amazon's \`TemplateType=fptcustom\` metadata block, column ordering the parser depends on, and thousands of rows of static product data.

Verification was straightforward: run both systems on the same day and diff the outputs against the macro's own files. 16,654 rows preserved on the largest file, instruction rows intact, Amazon metadata block untouched.

## Migration safety: shadow mode, then per-channel cutover

The old system stays the source of truth until each channel is individually proven.

- Run the new engine **alongside** the macro, on the same schedule.
- Compute what it *would* push. Do not push it.
- **Diff** against what the macro actually pushed. Log every divergence.
- After several consecutive days of matching, flip **one channel** to live.
- Repeat per channel.

This pattern — parallel run, then retire — shows up three separate times in this operation, and it has never once been the wrong call.

## Being honest about what is not ported yet

The POC deliberately does **not** implement: reserved inventory, fuzzy SKU matching, old-SKU to new-SKU reassignment during a product-line transition, and the components gap check (do not sell a shower pan whose drain plate is out of stock).

Those four contain most of the remaining institutional knowledge. Naming them explicitly is what keeps a "we replaced the spreadsheet" claim honest — the spreadsheet still knows things the pipeline does not.

## Stack choices, and what I refused to use

Python plus SQLite. \`openpyxl\` for XLSX, \`xlrd\`/\`xlutils\`/\`xlwt\` for the legacy .xls formats. Cron via a CI scheduler. Metabase or Streamlit for the dashboard. A chat webhook for alerts.

No Airflow. No Kubernetes. No Kafka. For 3,000 SKUs and seven daily files, that infrastructure is a second job, not a solution. SQLite goes to Postgres the day there is a second concurrent writer, and not a day before.

## The Amazon feed that broke, and how it was fixed

A real incident worth generalising.

The daily Amazon Seller inventory upload started failing because **Amazon retired the Listing Loader template** the export targeted. The replacement demanded a Product Type on every SKU — which the daily feed has no business carrying, because it only pushes quantity and handling time.

The fix: switch the output to Amazon's still-supported **Price & Quantity flat file**, which requires no Product Type. All business logic stayed where it was; a thin formatting tab and an export macro were added on top.

And the part that matters: **the old export was left running in parallel for a week as a safety net** before retirement, with the change written into a change log.

The general rule — when a channel changes its spec under you, change the *format layer*, never the *logic layer*. If your quantity calculation has to be rewritten because Amazon changed a template, your architecture has a seam in the wrong place.

## The target end state

Every one of the six manual uploads has an API equivalent:

- **Shopify** — Admin API \`inventorySetQuantities\`, or a scheduled import-from-URL.
- **The dropship network** — V3 REST API, OAuth bearer tokens, with a staging host to test against.
- **Amazon Vendor** — SP-API Vendor Direct Fulfillment Inventory.
- **Amazon Seller** — SP-API Feeds and Listings.

Proof order: one channel first, easiest auth first. Not all six at once, and not the hardest one first to "prove it works."

## Google Merchant Center and the tag sprawl problem

One multichannel side effect that is almost universal: **sales channel apps inject their own analytics tags.**

The Google & YouTube channel installs a Merchant Center tag. If you also run GTM, and someone previously hardcoded gtag, you now have three. On the store I audited, that contributed to seven distinct Google tag loads on a single page — over a megabyte of transfer and ~1.7 seconds of CPU.

So when you add a channel, audit the storefront afterwards. The channel does more to your site than list your products on it.

## Detecting the silent multichannel failure

Products flipped to Active with the sales channel never added. Active, in stock, and unbuyable. First audit: **164 across two stores, 35 with inventory, one with 5,469 units.**

The catch: a CSV export's \`Published\` column reflects **only the Online Store channel**. A real "published to N of 8 channels" audit needs the Admin API \`publications\` query. If you syndicate widely, the CSV is telling you a comfortable half-truth.

## The short version

- Every channel has its own key column and file format. Design for that, do not fight it.
- Keep the sellable-quantity rules small enough to reason about.
- Fill the real template rather than generating files from scratch.
- Shadow-run before cutover. Cut over one channel at a time.
- Separate business logic from output formatting, because channels change their formats and your logic should not care.
- Audit which channels each product is actually published to, with the API, not the CSV.

---

*I build and run multichannel inventory and catalog pipelines across Shopify, Amazon, Google and national retail partners. See [Shopify development services](/shopify-expert) or [hire a Shopify developer](/hire-shopify-developer). Related reading: [the Matrixify field guide](/blog/matrixify-shopify-bulk-operations-guide) and [retail syndication to Lowe's, Home Depot and Menards](/blog/retail-syndication-salsify-lowes-home-depot).*

*Direct: [WhatsApp +55 11 98851-2788](https://wa.me/5511988512788) · [contato.matheusabrahao@gmail.com](mailto:contato.matheusabrahao@gmail.com)*`,
  },
  {
    slug: 'shopify-sms-marketing-retention',
    title: 'Shopify SMS Marketing: Building Consent-Safe SMS and Email Retention That Compounds',
    description:
      'How to build a Shopify SMS marketing program that is TCPA-defensible — one canonical opt-in form, nine capture surfaces, verbal double opt-in, and why SMS must be additive to email, never instead of it.',
    date: '2026-08-16',
    readTime: '12 min read',
    tags: ['Shopify SMS Marketing', 'Klaviyo', 'Retention', 'Compliance', 'Case Study'],
    featured: false,
    body: `## The problem is consent, not messaging

Every "Shopify SMS marketing" guide starts with copy and send times. The actual blocker is upstream and much less fun: **you cannot legally text people who have not documented consent, and most of your list has not.**

On a wholesale program I worked on, the numbers were stark: **1,437 active trade accounts — 37% of the base — had no documented SMS consent**, because they were onboarded before an opt-in checkbox existed. Only 388 had opted in since it went live.

The consent gap was not a records problem. Multiple onboarding paths bypassed the checkbox entirely — manual sign-ups entered by inside sales, accounts created by third-party cold callers, phone orders typed in by hand.

And TCPA requires **documented, timestamped, source-attributed** consent. Klaviyo enforces it: a profile without a clean consent record simply cannot be messaged. There is no override.

So the architecture question is not "what do we send?" It is **"how does consent get captured everywhere a customer touches us, without building nine different consent mechanisms?"**

## One canonical opt-in form. Every channel surfaces to it.

That is the whole design principle, and it is worth stating as a rule:

**Build one Klaviyo-native sign-up form on one landing page. Every other touchpoint funnels to that URL.**

What you get for free:

- **One place** to maintain compliance language. When legal changes the wording, you change it once.
- **Uniform source tracking** via URL parameters, so every channel is measurable without extra instrumentation.
- Klaviyo automatically captures **timestamp, IP, the exact consent text shown, and the source**. That is your audit trail, generated as a side effect.
- Audit complexity collapses from nine mechanisms to one.
- Implementation drops from engineering to **configuration plus thin surface layers**.

The alternative — a checkout checkbox that writes consent one way, a popup that writes it another, a rep entering it manually a third — is nine places for the compliance language to drift out of sync, and nine things to re-verify when the law changes.

## Nine surfaces, and they are "and", not "or"

Each catches a different slice of the audience. You need all of them because no single one reaches everybody:

- **An email campaign to the un-consented segment.** Cheapest reach, highest volume, one send.
- **The landing page** with the embedded form. The destination everything else points at.
- **A checkout checkbox.** First-class on Shopify Plus via Checkout UI Extensions; a workaround off Plus.
- **A logged-in popup**, segment-targeted at "trade AND not SMS-subscribed", triggered on **exit-intent or 50% scroll — never on page load.** Page-load popups on a logged-in B2B dashboard are a support ticket, not a growth tactic.
- **A dismissible login prompt** with a 7-day remind-me TTL.
- **A dashboard banner**, conditional on customer tag plus a metafield.
- **An order-confirmation block.** High attention, zero friction.
- **A printed QR code on packaging**, pointing at the same URL. This one reaches people who never log in.
- **A win-back campaign** for dormant accounts, where the SMS offer is the reason to re-engage.

## Closing the verbal-channel gap

The hardest slice is the one that never touches a screen: customers who give a phone number **on a call**.

The clean solution is Klaviyo-native **double opt-in by text**:

- The operator captures the number during the call.
- The profile is added to Klaviyo.
- Klaviyo fires a confirmation SMS.
- The customer replies **YES**.
- Klaviyo records timestamped consent with a source value marking it as verbal double opt-in.

Compliant, no paperwork, no dependency on anyone's memory or handwriting. A variant that also works: the operator texts the canonical opt-in URL from a company line mid-call, and the customer completes it themselves.

## The automated backstop

Nothing above catches everyone, so there is a flow underneath it all — triggered on \`Customer Created\`, filtered to the trade tag:

- **T+0** — welcome email including an SMS opt-in section.
- **T+24h** — second touch if still not opted in.
- **T+72h** — dashboard banner turns on for that customer.

## Source attribution: the free metric

Every URL pointing at the opt-in page carries a \`?source=\` parameter drawn from a fixed vocabulary:

\`\`\`
?source=checkout
?source=popup_logged_in
?source=login_prompt
?source=dashboard_banner
?source=order_confirmation
?source=packaging_qr
?source=verbal_inside_sales
?source=email_campaign_2026_q3
\`\`\`

Klaviyo captures the parameter as a profile property automatically. Which means **"opt-in rate by source"** costs nothing to build and tells you exactly which of your nine surfaces is worth keeping.

The fixed vocabulary matters. \`checkout\`, \`Checkout\` and \`checkout-page\` are three sources in your report and one source in reality.

## The SMS/email routing bug that is probably on your account

I found this in a live Abandoned Checkout flow, and I have since found it on other accounts.

The flow branched on SMS consent. **SMS subscribers received exactly one text and zero emails.** The people who trusted you with a phone number were receiving the least communication about an abandoned checkout.

The correct shape is base-plus-bonus, never a split:

- **Everyone** gets the full email sequence.
- **SMS-consented profiles** additionally get the text.

If your abandoned-checkout flow has SMS on one branch and email on the other, you have this bug right now.

## Measure these

- **Opt-in rate by source** — which surfaces earn their maintenance.
- **Time-to-opt-in** — \`Profile Created\` vs \`SMS Consent Date\`. Long gaps mean your early surfaces are not working.
- **SMS click-through and conversion.**
- **AOV of SMS-opted vs email-only** profiles. This is the number that justifies the program.
- **STOP / unsubscribe rate.** Your early warning on frequency, and the only metric that tells you to send *less*.
- **Per-opt-in audit trail** — timestamp, source, IP, consent text. Not a growth metric; a legal one.
- **LTV by opt-in-speed cohort.** Customers who opt in within 24 hours behave differently from those who take a month.

## The honest reframe

Discovery on this program found something that changed the entire pitch: **email was already healthy.** Roughly 39.5% open rate and about US$4.00 revenue per recipient.

So SMS was not rescuing a broken email program. It was **additive**, and the urgency narrative that had been built around it was wrong. I said so in writing, because a retention program built on a false premise gets measured against the wrong baseline and gets killed when it does not deliver a rescue nobody needed.

Similarly, the conclusion of discovery was not "build a system." It was: **"finish publishing one that is already 80% there."** The opt-in form existed in Draft with correct compliance language and a proper teaser → form → success structure. SMS was already enabled. The trade tag already synced from Shopify to Klaviyo, so segment targeting needed zero setup.

The blockers were **legal, not technical** — consent disclosure wording pending outside counsel. That is worth naming for anyone planning an SMS program: budget for the legal review, because it is the critical path and it does not compress.

## A related build worth stealing

Back-in-stock waitlists, scoped Klaviyo-native rather than as a new app:

- Per-variant button on the product page.
- Automatic email on restock, SMS optional for consented profiles.
- **Phase 1:** a weekly CSV to inside sales as callback leads. Unglamorous, immediately valuable.
- **Phase 2:** order-management integration.

Phase 1 is a CSV export and a calendar reminder. It captured demand signal for months while the real integration was scoped.

## The short version

- Consent is the constraint. Solve it first.
- One canonical opt-in form. Every surface points at it.
- Nine surfaces, all of them, because each reaches a different person.
- Double opt-in by text closes the verbal channel legally.
- \`?source=\` on every link, from a fixed vocabulary.
- SMS is additive to email. Never a branch.
- Be honest about whether email is broken before you sell SMS as the fix.

---

*I build retention programs where email and SMS work together and the consent record survives an audit. See [Klaviyo expert services](/klaviyo-expert) or [hire a Shopify developer](/hire-shopify-developer). Related: [11 Klaviyo flow defects that quietly kill email revenue](/blog/klaviyo-expert-flow-audit).*

*Direct: [WhatsApp +55 11 98851-2788](https://wa.me/5511988512788) · [contato.matheusabrahao@gmail.com](mailto:contato.matheusabrahao@gmail.com)*`,
  },
  {
    slug: 'shopify-custom-reports-ga4-analytics',
    title: 'Shopify Custom Reports: Turning GA4 and Sales Data Into Decisions, Not Dashboards',
    description:
      'Store owners do not need another pretty dashboard — they need to know which decision to make. How I build custom Shopify reports joining GA4, order data and catalog exports into merchandising and upsell calls.',
    date: '2026-08-14',
    readTime: '12 min read',
    tags: ['Shopify Analytics', 'Shopify Custom Reports', 'GA4', 'Python', 'Catalog Health'],
    featured: false,
    body: `## Nobody needs another dashboard

I have never once been asked for a dashboard and actually needed to build one.

What people ask for is a dashboard. What they need is an answer to a question they have not phrased yet: *which products should be in the hero slot next month?* *Is the upsell app earning its fee?* *Why did revenue drop 8% when sessions went up?*

A dashboard answers none of those. It displays numbers and leaves the reasoning to a human who is already busy. A **custom report** answers one question, ends in a recommendation, and gets thrown away when the decision is made.

This is how I build them, and why it is the part of ecommerce engineering that almost nobody offers.

## Why store analytics lie by default

Before any report is trustworthy, three things have to be true, and on most stores none of them are.

**1. Your channel data is not fragmented.** I found an account where Klaviyo's \`utm_source\` was set to resolve to the *list or segment name*. Every send produced a unique source value. GA4 attributed every click correctly and then never aggregated them — the email channel had shattered into dozens of one-off rows, each too small to notice.

Email looked like a rounding error. It was one of the biggest channels. The fix is static \`utm_source\`, \`utm_medium=email\`, and detail carried in \`utm_campaign\`.

**2. Your tag is actually installed, everywhere.** A second storefront in that same operation had **no analytics tag at all** on its theme, and its email platform had UTM tagging entirely switched off. Two independent failures, both required to fix, and fixing only one changes nothing. Always verify with view-source, not with a settings screen.

**3. You know which numbers are reporting gaps and which are lost money.** In that same audit, revenue was being captured perfectly *inside Klaviyo* via Shopify's Placed Order metric the whole time. The GA4 hole was a **reporting** problem. A wholesale welcome flow was doing about **US$32.7K per 30 days that GA4 could not see**.

Conflating those two causes panic and bad decisions. Say it explicitly in the report: *this money exists, we just cannot see it here, and here is where it is visible.*

## The join that makes reports useful

Shopify and GA4 each know half the story.

- **Shopify** knows what was ordered, by whom, at what margin, with what tags, from what catalog state.
- **GA4** knows how they arrived, what they looked at, and what they did not buy.

Neither is enough on its own. The reports that actually change behaviour come from joining them — usually a Shopify order/product export plus a GA4 export, joined on product handle or SKU, then aggregated the way the *decision* needs rather than the way either tool defaults to.

My working stack is intentionally dull: **Shopify or Matrixify export → CSV → Python (pandas) or DuckDB → a small table and three sentences.** No warehouse until there is a reason for a warehouse.

DuckDB in particular is underrated for this. It queries CSV files directly, so a catalog audit is one query against an export with no ingestion step.

\`\`\`sql
-- Active, in stock, and not buyable on the online store
SELECT "Variant SKU", "Title", "Variant Inventory Qty"
FROM read_csv_auto('products_export.csv')
WHERE "Top Row" = true
  AND lower("Status") = 'active'
  AND "Published" = false
ORDER BY "Variant Inventory Qty" DESC;
\`\`\`

That query, on a real store, returned **164 products across two storefronts** — 86 and 78 — that were active, correctly priced, in stock, and completely unbuyable. 35 were carrying inventory. One had **5,469 units** sitting idle.

Nobody would ever have found those by looking at a dashboard. Revenue charts do not show you the product that could not be bought.

One caveat I always attach: the \`Published\` column reflects **only the Online Store channel**. A true multi-channel publication audit needs the Admin API \`publications\` query.

## Reports that produced actual decisions

**The URL-to-traffic map.** A full inventory of roughly 2,072 URLs per store — about 4,144 across both — with page type, title and last-modified date, joined against organic performance: traffic per month, keyword count, traffic share, top query with volume and position, and primary intent, per URL.

Decisions it produced: which pages a migration must redirect first; which collection pages deserve content investment; and a "**ranking but not in inventory**" list of **33 URLs earning organic traffic that nobody knew existed** — including legacy product URLs from a discontinued material line and a bare \`http://\` homepage. Those are exactly the pages a replatform quietly loses.

**The page-two report.** High-volume queries sitting at positions 11–19. Not a metric — a work queue, sorted by expected traffic gain. It answers "what should I write next month" in one sorted column.

**Catalog health as a recurring audit.** Missing required metafields, missing compare-at prices (a migration artifact — the old platform had no such field), image counts below the retail-channel minimum, products with no collection membership, variant option axes used inconsistently. Each of these is a one-line filter over an export and each one, left alone, degrades a feed somewhere downstream.

**Retail readiness by attribute.** For syndicated catalogs, a completion score per channel. The trick is reading it as a **diff, not a grade**: 331 of 361 does not mean "94% good," it means **30 specific SKUs did not map**, and the cause is almost always one product family whose asset filenames follow a different convention. The report's output is thirty SKUs, not a percentage.

**Flow-level revenue per recipient.** After a Klaviyo rebuild, seven-day flow revenue broke down as roughly $212 per recipient on the cart reminder, $109 on browse abandonment, and $80 on the checkout reminder. Revenue per recipient — not total revenue — is what tells you which flow to expand and which to leave alone, because total revenue just tells you which segment is biggest.

## The operational spreadsheet is a legitimate deliverable

Not every report should be a report. Sometimes the deliverable is **a spreadsheet that replaces a manual process**, and engineers are snobby about this to their own cost.

One operation I inherited ran on an 18 MB, 48-tab Excel workbook that computed sellable quantity for seven channels. It was single-user, unversioned, unscheduled and unauditable — and it correctly ran a real business for years.

Replacing it was worth doing. But the intermediate step that delivered value in week one was not the pipeline — it was a **read-only reporting layer over the same data**, so people could finally answer "why is this SKU zero on Amazon?" without opening the workbook and taking the file lock.

Ship the answer before you ship the architecture.

## What a good custom report looks like

Every report I hand over has the same four parts:

- **The question**, in one sentence, in the client's words.
- **The table.** Usually fewer than 50 rows. If it is longer, the question was too broad.
- **The recommendation.** What I would do, stated as an action, not an observation.
- **The caveat.** What this data cannot tell you, and what would be needed to answer that.

The last one is what makes the first three trustworthy. A report with no stated limits is a report someone will over-extend into a decision it cannot support.

And the format is deliberately cheap: a table and three sentences, delivered in whatever the client already reads. Not a BI tool they have to log into. The best report is the one that gets read on a phone between meetings and changes what happens that afternoon.

## Why this matters commercially

Most people selling Shopify work sell themes. Almost nobody sells **the ability to look at a store's own data and say what to do about it.**

That is the difference between a Shopify developer and an ecommerce operations engineer — and it is where the interesting problems, and the interesting contracts, actually are. The catalog is a database, the storefront is a search system, the marketing stack is a pipeline, and all three produce data that nobody is reading.

Start reading it.

---

*I build custom Shopify reporting — GA4 joined with order and catalog data, Python catalog-health tooling, and operational spreadsheets that replace manual work. See [Shopify development services](/shopify-expert) or [hire a Shopify developer](/hire-shopify-developer).*

*Direct: [WhatsApp +55 11 98851-2788](https://wa.me/5511988512788) · [contato.matheusabrahao@gmail.com](mailto:contato.matheusabrahao@gmail.com)*`,
  },
  {
    slug: 'scaling-small-shopify-store-sessions-revenue',
    title: 'How I Took a Small Shopify Store to +1,700% Sessions and +254% Sales in 12 Months',
    description:
      'A US beauty and lifestyle brand went from a quiet Shopify store to US$207.3K in sales, +324% orders and 51.5K sessions in twelve months. The stack, the sequence, and why the same method worked on three very different stores.',
    date: '2026-08-12',
    readTime: '11 min read',
    tags: ['Shopify Growth', 'Case Study', 'Technical SEO', 'Google Shopping', 'Matrixify'],
    featured: true,
    body: `## The result first

Twelve months operating a **US-based beauty and lifestyle brand's** Shopify store, from August 2025:

- **Total sales: US$207.3K — up 254%**
- **Orders: 157 — up 324%**
- **Sessions: 51.5K — up 1,700%**

No redesign. No rebrand. No funding round. The store looked broadly the same at the end as at the start.

What changed was everything underneath it.

## What a small store actually looks like when you inherit it

Small stores fail in a very consistent way, and it is almost never "the design is bad."

- The catalog is technically live but commercially incoherent — inconsistent titles, missing product types, empty tags, SEO fields left at the theme default.
- Feeds are connected but rejecting silently. Google Merchant Center has more disapprovals than approvals, and nobody has opened it in months.
- There are apps installed for things nobody uses, each loading scripts on every page.
- Analytics is installed twice, or once and wrong, so nothing that follows can be measured.
- There is no discovery layer: no meaningful search, no filters, no merchandising logic. Every visitor sees the same eleven products in creation order.

Nothing is broken. Everything is 1–3% worse than it should be, in twenty places at once. Sessions have nowhere to come from because the store is invisible to every machine that could send traffic.

## The stack I actually ran

Deliberately boring, and every piece earns its place:

- **Matrixify** — the write layer for the catalog. Every bulk change goes through it.
- **Nabu** — Google Shopping feed plus the Ads pixel.
- **Google & YouTube** and **Facebook & Instagram** sales channels.
- **Pinterest** — genuinely underrated for beauty and lifestyle, where the audience is in discovery mode rather than search mode.
- **Shopify Collective** — catalog expansion without inventory risk.
- **Shopify Flow** — the automation layer that removes recurring manual work.
- **Search & Discovery** — filters, synonyms, and merchandising rules.
- **Markets** — international pricing and currency, so international sessions do not bounce at the cart.

There is no growth-hack app in that list. There is one bulk-editing tool, four channels, and three native features most stores never configure.

## The sequence, and why order matters

**Phase 1 — make the catalog machine-readable.**

Nothing else works until this is done, because every downstream system (Google, Meta, Pinterest, on-site search, AI answer engines) reads the same product data.

The work, all through Matrixify: normalise product **types** into a closed vocabulary; collapse **vendor** to a canonical value; rewrite **handles** — inherited handles from marketplace imports are routinely 100+ character keyword-stuffed strings, which are bad URLs and worse signals; populate **Google Shopping fields** including product category and gender; write real **SEO titles and descriptions** at roughly 155 characters with intent and a call to action; move **tags** from empty to a working keyword set per product; and double the **body copy** on the products that matter.

I ran this as two passes — raw → cleaned → cleaned v2 — with the intermediate version preserved, so any single change is attributable. Pass one was pure taxonomy (handles, types, vendors). Pass two was content and SEO fields. Separating them is what makes it reviewable.

**Phase 2 — fix the feeds.**

With the catalog normalised, Google Merchant Center disapprovals mostly resolve themselves, because the majority are missing category, missing GTIN, missing gender or a title that does not match the landing page. Then Pinterest and Meta catalogs, which read the same fields.

This is the phase that produced most of the session growth. Feed-driven surfaces do not need brand awareness — they need clean structured data.

**Phase 3 — fix discovery on-site.**

Search & Discovery filters, synonyms for the words customers actually use (which are not the words in your product titles), and collection merchandising rules so the best sellers surface first. Sessions are worth nothing if the visitor cannot find the second product.

**Phase 4 — automate the recurring work.**

Shopify Flow for tagging, inventory alerts, and customer segmentation. Every manual task that happens weekly becomes a rule, so the operator's time goes to decisions instead of maintenance.

**Phase 5 — open the geography.**

Markets, so international traffic gets local currency and correct pricing instead of a confusing cart.

## The pattern is the point

This is not the first store where this worked, and that is the argument I would actually make to a merchant:

- **An international luxury fashion brand:** +455% sessions, +114% orders, +74% total sales, as sole engineer.
- **A US beauty and lifestyle brand:** +254% sales, +324% orders, +1,700% sessions.
- **Martin (martin4shop.com.br), my own brand:** built and operated end to end — 1,959 orders, ~R$552K processed, 299K sessions since 2023.

And today, two storefronts for a US building-products manufacturer — **B2C and B2B running side by side** on one enterprise-scale catalog, syndicated out to seven-plus sales channels.

Three very different catalogs. Different countries, different price points, different customers. **Same method, same order of operations.** That is what makes it a method rather than a lucky quarter.

I started with Martin — my own store, my own money, my own mistakes — and expanded outward for six-plus years. Everything I do for other brands was first tested on a store where a bad decision came out of my own pocket. That is not a credential, but it is a very effective filter for advice that only works in slide decks.

## What I would not do again

**Do not start with the theme.** It is the most visible thing and almost never the constraint. A redesign on a store with a broken catalog produces a prettier version of the same problem, and it burns the budget that should have gone into data.

**Do not add apps to solve data problems.** Most "SEO apps" and "feed apps" are wrapping fields you can populate yourself, correctly, once, with a bulk import — and then they load scripts on every page forever.

**Do not run paid traffic into an unfixed catalog.** You are paying for clicks that land on pages Google is already unwilling to show for free.

**Do not skip the measurement setup.** Verify the analytics tag is actually on the page, verify UTM parameters resolve to stable values, and verify the conversion metric points at the live integration and not a dead one left over from a previous platform. If you cannot measure phase one, phases two through five are guesswork.

## If you are running a small store right now

The highest-leverage week you can spend is not on design. It is:

- Export your full catalog. Look at it as a spreadsheet, once, honestly.
- Fill in product type, category, gender, SEO title, SEO description and tags for every product.
- Re-import through Matrixify with \`Command: UPDATE\` and only the columns you changed.
- Open Google Merchant Center and fix every disapproval class, not every disapproval.
- Turn on Search & Discovery filters and add synonyms for the words your customers use.

That is a week of unglamorous work and it is the foundation everything else compounds on. Sessions follow structured data. Orders follow sessions. Revenue follows orders.

There is no shortcut, but there is a correct order.

---

*I operate Shopify stores end to end — catalog, feeds, performance, retention and reporting. See [Shopify development services](/shopify-expert) or [hire a Shopify developer](/hire-shopify-developer). Related: [the Matrixify field guide](/blog/matrixify-shopify-bulk-operations-guide).*

*Direct: [WhatsApp +55 11 98851-2788](https://wa.me/5511988512788) · [contato.matheusabrahao@gmail.com](mailto:contato.matheusabrahao@gmail.com)*`,
  },
]

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug)
}

export function getAllPostSlugs() {
  return blogPosts.map((p) => p.slug)
}
