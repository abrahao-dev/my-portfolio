import { Button } from "@/components/ui/button"
import { ArrowUpRight, Check, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

export const SITE = "https://matheusabrahao.com.br"
export const EMAIL = "contato.matheusabrahao@gmail.com"
export const WHATSAPP_DISPLAY = "+55 11 98851-2788"

export function whatsappLink(text: string) {
  return `https://wa.me/5511988512788?text=${encodeURIComponent(text)}`
}

export type SeoLandingData = {
  /** Route path without leading slash, e.g. "shopify-expert" */
  slug: string
  eyebrow: string
  h1: string
  lede: string
  /** Opening body copy, one <p> per item */
  intro: string[]
  /** One line under the three-store metrics band */
  playbookLine: string
  servicesTitle: string
  services: { title: string; body: string }[]
  /** Optional extra content blocks rendered between services and "how it works" */
  extraSections?: { title: string; intro?: string; items: { title: string; body: string }[] }[]
  stepsTitle: string
  steps: { title: string; body: string }[]
  faqTitle: string
  faq: { q: string; a: string }[]
  ctaTitle: string
  ctaBody: string
  /** Pre-filled WhatsApp message */
  waText: string
  /** schema.org Service */
  serviceName: string
  serviceDescription: string
  breadcrumb: string
  related: { href: string; label: string }[]
}

/** Client work. Rule: metrics stay with an anonymous client; only Martin is named. */
export const STORES = [
  {
    name: "US building-products manufacturer",
    role: "Day-to-day operator, B2C + B2B storefronts",
    metrics: [
      { value: "2", label: "storefronts (B2C + B2B)" },
      { value: "7+", label: "sales channels" },
      { value: "PIM", label: "Salsify syndication" },
    ],
  },
  {
    name: "International luxury fashion brand",
    role: "Sole engineer",
    metrics: [
      { value: "+455%", label: "sessions" },
      { value: "+114%", label: "orders" },
      { value: "+74%", label: "revenue" },
    ],
  },
  {
    name: "US-based beauty & lifestyle brand",
    role: "Took over the operation",
    metrics: [
      { value: "+254%", label: "total sales" },
      { value: "+324%", label: "orders" },
      { value: "+1,700%", label: "sessions" },
    ],
  },
  {
    name: "Martin — my own brand",
    role: "Founder and operator",
    metrics: [
      { value: "1,959", label: "orders" },
      { value: "~R$552K", label: "processed" },
      { value: "299K", label: "sessions" },
    ],
  },
]

/** The three headline numbers. Used in the hero proof panel and on the home page. */
export const HEADLINE_PROOF = [
  { value: "B2C + B2B", unit: "storefronts", label: "Shopify operation I run today, end to end" },
  { value: "+455%", unit: "sessions", label: "international luxury fashion brand" },
  { value: "+254%", unit: "sales", label: "US beauty & lifestyle brand" },
]

/** E-commerce stack only. No general-purpose dev tooling on the marketing pages. */
export const ECOM_STACK = [
  "Shopify Plus",
  "Liquid",
  "Hydrogen + Remix",
  "Shopify Functions",
  "Matrixify",
  "Klaviyo",
  "Salsify PIM",
  "GA4",
  "Meta CAPI",
  "Google Merchant Center",
  "Amazon Seller Central",
]

const CREDIBILITY = [
  "I currently operate paired B2C and B2B Shopify storefronts for a US building-products manufacturer — an enterprise-scale catalog with multi-level variants, separate pricing and customer accounts, across 7+ connected sales channels.",
  "Sole engineer for an international luxury fashion brand: +455% sessions, +114% orders and +74% revenue after taking over the storefront.",
  "US-based beauty & lifestyle brand: +254% in total sales, +324% in orders and +1,700% in sessions in twelve months.",
  "Founder and operator of Martin (martin4shop.com.br) — 1,959 orders and roughly R$552,000 processed on a store I built, ran and marketed myself.",
  "Product data flowing from Shopify out to Lowe's, Home Depot (US and Canada), Menards, Amazon and KB — managed through Salsify PIM and Matrixify.",
  "6+ years on Shopify, and it started with my own store. I did not learn this from a ticket queue.",
]

/** Paints the platform term in the accent colour without touching page data. */
function AccentHeadline({ text }: { text: string }) {
  const parts = text.split(/(Shopify|Klaviyo|Matrixify)/g)
  return (
    <>
      {parts.map((part, i) =>
        /^(Shopify|Klaviyo|Matrixify)$/.test(part) ? (
          <span key={i} className="text-primary">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  )
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
      </span>
      {children}
    </span>
  )
}

/**
 * Four client cards.
 *
 * Metrics render as label/value rows instead of a fixed three-column grid.
 * The old grid gave every metric exactly one third of the card, so a wide
 * value ("~R$552K") overflowed its column and collided with the next one.
 * A row takes the width it needs, at any viewport, for any value.
 */
export function ProofBand({ note }: { note?: string }) {
  return (
    <section className="border-y border-border bg-secondary/25 px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {STORES.map((store) => (
            <div key={store.name} className="bg-card p-5 sm:p-6">
              <p className="text-sm font-semibold leading-snug text-foreground">{store.name}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{store.role}</p>
              <dl className="mt-4">
                {store.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="flex items-baseline justify-between gap-4 border-t border-border/70 py-2.5"
                  >
                    <dt className="text-xs leading-snug text-muted-foreground">{m.label}</dt>
                    <dd className="tabular whitespace-nowrap text-lg font-bold leading-none text-primary sm:text-xl">
                      {m.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
        {note && <p className="mt-5 text-sm text-muted-foreground sm:text-center">{note}</p>}
      </div>
    </section>
  )
}

/** Small, discreet stack strip. Text wordmarks — no icon CDN, no layout shift. */
export function StackStrip({ label }: { label: string }) {
  const items = [...ECOM_STACK, ...ECOM_STACK]
  return (
    <div className="border-y border-border py-5">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <p className="type-eyebrow mb-3 text-muted-foreground">{label}</p>
        <div className="marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_5%,#000_95%,transparent)]">
          <ul
            className="marquee-track flex w-max items-center gap-x-8"
            aria-label={ECOM_STACK.join(", ")}
          >
            {items.map((tech, i) => (
              <li
                key={`${tech}-${i}`}
                aria-hidden={i >= ECOM_STACK.length}
                className="whitespace-nowrap text-sm font-medium text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export function SeoLanding({ data }: { data: SeoLandingData }) {
  const url = `${SITE}/${data.slug}`
  const wa = whatsappLink(data.waText)
  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(data.serviceName)}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE}/#person`,
        name: "Matheus Abrahão",
        jobTitle: "Shopify Expert & E-commerce Operator",
        url: SITE,
        email: EMAIL,
        telephone: "+55-11-98851-2788",
        image: `${SITE}/profile.jpg`,
        sameAs: [
          "https://github.com/abrahao-dev",
          "https://linkedin.com/in/abrahao-dev",
          "https://instagram.com/abrahao.dev",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "São Paulo",
          addressRegion: "SP",
          addressCountry: "BR",
        },
        knowsAbout: [
          "Shopify",
          "Shopify Plus",
          "Shopify Liquid",
          "Klaviyo",
          "Technical SEO",
          "Core Web Vitals",
          "Conversion Rate Optimization",
          "Shopify Migration",
          "Matrixify",
        ],
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: data.serviceName,
        description: data.serviceDescription,
        url,
        serviceType: data.serviceName,
        provider: { "@id": `${SITE}/#person` },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "Canada" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: data.servicesTitle,
          itemListElement: data.services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.body },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: data.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: data.breadcrumb, item: url },
        ],
      },
    ],
  }

  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero — asymmetric: headline left, hard numbers right */}
      <section className="brand-glow relative overflow-hidden px-4 pb-10 pt-12 sm:px-6 sm:pb-14 sm:pt-16 lg:px-8">
        <div
          aria-hidden
          className="grid-texture pointer-events-none absolute inset-0 -z-10 opacity-70"
        />
        <div className="mx-auto grid max-w-content items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Eyebrow>{data.eyebrow}</Eyebrow>

            <h1 className="type-hero mt-6 text-foreground">
              <AccentHeadline text={data.h1} />
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {data.lede}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full px-7 text-[15px]">
                <a href={wa} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-[18px] w-[18px]" aria-hidden />
                  Message me on WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-full px-7 text-[15px]"
              >
                <a href={mailto}>
                  <Mail className="mr-2 h-[18px] w-[18px]" aria-hidden />
                  Email me
                </a>
              </Button>
            </div>

            <p className="mt-6 max-w-xl text-xs leading-relaxed text-muted-foreground">
              Working with US and Canadian brands · UTC-3, overlapping almost the entire North
              American business day · fluent English · invoiced in USD
            </p>
          </div>

          {/* Proof panel — gives the hero weight and removes the dead space */}
          <div className="lg:col-span-5">
            <div className="surface rounded-2xl p-6 sm:p-7">
              <p className="type-eyebrow text-muted-foreground">Currently on my desk</p>
              <dl className="mt-5 divide-y divide-border">
                {HEADLINE_PROOF.map((p) => (
                  <div key={p.label} className="py-4 first:pt-0 last:pb-0">
                    <dd className="flex flex-wrap items-baseline gap-x-2">
                      <span className="tabular text-3xl font-bold leading-none text-primary sm:text-4xl">
                        {p.value}
                      </span>
                      <span className="text-sm text-muted-foreground">{p.unit}</span>
                    </dd>
                    <dt className="mt-2 text-sm leading-snug text-muted-foreground">{p.label}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <ProofBand note={data.playbookLine} />

      {/* Intro + track record */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-content gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-[17px] lg:col-span-7">
            {data.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <aside className="lg:col-span-5">
            <div className="surface rounded-2xl p-6 sm:p-7">
              <h2 className="text-lg font-bold">Track record</h2>
              <ul className="mt-5 space-y-4">
                {CREDIBILITY.map((c) => (
                  <li key={c} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-border px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-content">
          <h2 className="type-section max-w-3xl">{data.servicesTitle}</h2>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {data.services.map((s, i) => (
              <article key={s.title} className="bg-card p-6 sm:p-7">
                <span className="tabular type-eyebrow text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold leading-tight">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Extra sections */}
      {data.extraSections?.map((section) => (
        <section
          key={section.title}
          className="border-t border-border px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="mx-auto grid max-w-content gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <h2 className="type-section">{section.title}</h2>
              {section.intro && (
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {section.intro}
                </p>
              )}
            </div>
            <dl className="space-y-7 lg:col-span-8">
              {section.items.map((item) => (
                <div key={item.title} className="border-l-2 border-primary/40 pl-5">
                  <dt className="text-lg font-semibold">{item.title}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ))}

      {/* How it works */}
      <section className="border-t border-border px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-content gap-10 lg:grid-cols-12 lg:gap-14">
          <h2 className="type-section lg:col-span-4">{data.stepsTitle}</h2>
          <ol className="lg:col-span-8">
            {data.steps.map((s, i) => (
              <li
                key={s.title}
                className="flex gap-5 border-t border-border py-6 first:border-t-0 first:pt-0 sm:gap-7"
              >
                <span className="tabular shrink-0 text-2xl font-bold leading-none text-primary sm:text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ — native <details>, keyboard accessible, no JS */}
      <section className="border-t border-border bg-secondary/25 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-content gap-10 lg:grid-cols-12 lg:gap-14">
          <h2 className="type-section lg:col-span-4">{data.faqTitle}</h2>
          <div className="lg:col-span-8">
            {data.faq.map((f) => (
              <details
                key={f.q}
                className="group border-t border-border first:border-t-0 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-semibold sm:text-lg">
                  {f.q}
                  <span
                    aria-hidden
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="pb-6 pr-2 text-sm leading-relaxed text-muted-foreground sm:pr-10 sm:text-base">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="brand-glow relative mx-auto max-w-content overflow-hidden rounded-3xl border border-border bg-card p-7 sm:p-12">
          <h2 className="type-display max-w-2xl">{data.ctaTitle}</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {data.ctaBody}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-full px-7 text-[15px]">
              <a href={wa} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-[18px] w-[18px]" aria-hidden />
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 max-w-full rounded-full px-7 text-[15px]"
            >
              <a href={mailto}>
                <Mail className="mr-2 h-[18px] w-[18px] shrink-0" aria-hidden />
                <span className="truncate">{EMAIL}</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Related services */}
        <div className="mx-auto mt-12 max-w-content">
          <p className="type-eyebrow text-muted-foreground">More Shopify services</p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {data.related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                {r.label}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

/**
 * Shared metadata for the money pages.
 *
 * `title` is returned as `{ absolute }` on purpose: these page titles already
 * end in "| Matheus Abrahão", and the root layout applies
 * `template: '%s | Matheus Abrahão'`, which produced a doubled name in the
 * browser tab and in search results.
 */
export function seoMeta({
  slug,
  title,
  description,
}: {
  slug: string
  title: string
  description: string
}) {
  const url = `${SITE}/${slug}`
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: { 'en-US': url, 'en-CA': url, en: url, 'x-default': url },
    },
    openGraph: {
      title,
      description,
      url,
      locale: 'en_US',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: title }],
    },
    twitter: { title, description },
  }
}
