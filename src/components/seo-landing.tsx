import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Check, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

export const SITE = "https://matheusabrahao.com.br"
export const EMAIL = "contato.matheusabrahao@gmail.com"

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

const STORES = [
  {
    name: "US building-products manufacturer",
    role: "Day-to-day operator, B2C + B2B storefronts",
    metrics: [
      { value: "US$1M", label: "revenue / month" },
      { value: "1.6M", label: "sessions / quarter" },
      { value: "3,500+", label: "orders / quarter" },
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

const CREDIBILITY = [
  "I currently operate a Shopify business averaging US$1,000,000 per month in revenue across a B2C and a B2B storefront for a US building-products manufacturer — 1.6M sessions and 3,500+ orders per quarter, plus 7+ connected sales channels.",
  "Sole engineer for an international luxury fashion brand: +455% sessions, +114% orders and +74% revenue after taking over the storefront.",
  "US-based beauty & lifestyle brand: +254% in total sales, +324% in orders and +1,700% in sessions in twelve months.",
  "Founder and operator of Martin (martin4shop.com.br) — 1,959 orders and roughly R$552,000 processed on a store I built, ran and marketed myself.",
  "Product data flowing from Shopify out to Lowe's, Home Depot (US and Canada), Menards, Amazon and KB — managed through Salsify PIM and Matrixify.",
  "6+ years on Shopify, and it started with my own store. I did not learn this from a ticket queue.",
  "Apple Swift Student Challenge 2026 Winner — I write real software, not just theme tweaks.",
]

export function SeoLanding({ data }: { data: SeoLandingData }) {
  const url = `${SITE}/${data.slug}`
  const wa = whatsappLink(data.waText)

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE}/#person`,
        name: "Matheus Abrahão",
        jobTitle: "Shopify Expert & Senior Software Engineer",
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

      {/* Hero */}
      <section className="aurora-bg px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            {data.eyebrow}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            <span className="text-gradient">{data.h1}</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {data.lede}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="h-12 px-8 shadow-lg hover:shadow-xl hover-glow transition-all duration-300">
              <a href={wa} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                Message me on WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 border-2 hover:bg-primary/5 transition-all duration-300">
              <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(data.serviceName)}`} className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Email me
              </a>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            Working with US and Canadian brands · UTC-3, overlapping almost the entire North American
            business day · fluent English · invoiced in USD
          </p>
        </div>
      </section>

      {/* Proof numbers — three stores, three verticals */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {STORES.map((store) => (
              <div
                key={store.name}
                className="p-5 sm:p-6 rounded-2xl bg-background border border-border/50 shadow-sm"
              >
                <p className="text-sm font-semibold text-foreground">{store.name}</p>
                <p className="text-xs text-muted-foreground mb-4">{store.role}</p>
                <div className="grid grid-cols-3 gap-2">
                  {store.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="text-lg sm:text-xl font-bold text-primary">{m.value}</div>
                      <div className="text-[11px] sm:text-xs text-muted-foreground">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">{data.playbookLine}</p>
        </div>
      </section>

      {/* Intro + credibility */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {data.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border border-primary/20">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Track record</h2>
            <ul className="space-y-3">
              {CREDIBILITY.map((c) => (
                <li key={c} className="flex gap-3 text-sm sm:text-base text-foreground">
                  <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 text-center">
            {data.servicesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.services.map((s) => (
              <Card
                key={s.title}
                className="h-full bg-background border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold leading-tight">{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Extra sections */}
      {data.extraSections?.map((section) => (
        <section key={section.title} className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center">
              {section.title}
            </h2>
            {section.intro && (
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 text-center max-w-3xl mx-auto">
                {section.intro}
              </p>
            )}
            <dl className="space-y-6">
              {section.items.map((item) => (
                <div key={item.title} className="border-l-2 border-primary/30 pl-5">
                  <dt className="text-lg font-semibold mb-1">{item.title}</dt>
                  <dd className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {item.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ))}

      {/* How it works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 text-center">
            {data.stepsTitle}
          </h2>
          <ol className="space-y-6">
            {data.steps.map((s, i) => (
              <li key={s.title} className="flex gap-4 sm:gap-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 text-center">
            {data.faqTitle}
          </h2>
          <div className="space-y-6">
            {data.faq.map((f) => (
              <div key={f.q} className="p-6 rounded-2xl bg-background border border-border/50">
                <h3 className="text-base sm:text-lg font-semibold mb-2">{f.q}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border border-primary/20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">{data.ctaTitle}</h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6">{data.ctaBody}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="h-12 px-8">
              <a href={wa} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp +55 11 98851-2788
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8">
              <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(data.serviceName)}`} className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                {EMAIL}
              </a>
            </Button>
          </div>
        </div>

        {/* Related services */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            More Shopify services
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {data.related.map((r) => (
              <Link key={r.href} href={r.href}>
                <Badge
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {r.label}
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

/** Shared metadata bits for the money pages. */
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
    title,
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
