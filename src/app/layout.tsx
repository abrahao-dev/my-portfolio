import CookieConsent from "@/components/cookie-consent"
import ErrorBoundary from "@/components/error-boundary"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import WhatsAppButton from "@/components/whatsapp-button"
import { LanguageProvider } from "@/contexts/language-context"
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'

// Self-hosted variable fonts already vendored in the repo: no webfont request,
// no FOUT, identical rendering on Android and Windows (the old SF Pro stack
// silently fell back to Roboto/Arial for most visitors).
const geist = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist',
  weight: '100 900',
  display: 'swap',
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
})

// Viewport pelo export do Next: a <meta name="viewport"> escrita à mão no
// <head> saía duplicada com a que o Next já emite (auditoria DataForSEO, 27/out).
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.matheusabrahao.com.br'),
  // Título e descrição em inglês de propósito: o mercado alvo é EUA e Canadá, e
  // as keywords com volume são todas em inglês (ver SEO_KEYWORD_MAP.md). O
  // conteúdo continua bilíngue. Só o metadata segue a busca que traz cliente.
  title: {
    default: 'Matheus Abrahão | Shopify Expert & E-commerce Developer',
    template: '%s | Matheus Abrahão',
  },
  description: 'Shopify expert and e-commerce engineer with 6+ years running Shopify stores. Operates simultaneous B2C and B2B storefronts at enterprise scale, and drove +455% sessions and +74% revenue for an international luxury fashion brand. Matrixify, catalog operations, Klaviyo, technical SEO, performance and Liquid. Working with brands in the US and Canada (UTC-3, near-full overlap with US business hours).',
  keywords: [
    // English keywords (primary: target market is US and Canada; DataForSEO-validated)
    'shopify expert',
    'shopify developer',
    'hire shopify developer',
    'matrixify',
    'matrixify expert',
    'klaviyo expert',
    'shopify consultant',
    'shopify migration',
    'shopify migration expert',
    'shopify speed optimization',
    'shopify plus developer',
    'ecommerce developer',
    'shopify liquid developer',
    'shopify theme developer',
    'shopify seo expert',
    'shopify catalog management',
    'shopify b2b developer',
    'freelance shopify developer',
    'klaviyo shopify integration',
    // Portuguese keywords (secondary: domain is .com.br)
    'Especialista Shopify',
    'Desenvolvedor Shopify',
    'Contratar Especialista Shopify',
    'Consultor Shopify',
    'Desenvolvedor Shopify Brasil',
    'Desenvolvedor E-commerce',
    'SEO Técnico Shopify',
    'Gestão de Catálogo Shopify',
    'Matrixify Shopify',
    'Klaviyo Shopify',
    'Migração para Shopify',
    'Otimização de Velocidade Shopify',
  ],
  authors: [{ name: 'Matheus Abrahão', url: 'https://www.matheusabrahao.com.br' }],
  creator: 'Matheus Abrahão',
  publisher: 'Matheus Abrahão',
  category: 'Technology',
  classification: 'Shopify Development & E-commerce Engineering',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: ['en_US'],
    url: 'https://www.matheusabrahao.com.br',
    title: 'Matheus Abrahão | Shopify Expert & Desenvolvedor Shopify',
    description: 'Shopify Expert e Engenheiro de E-commerce. Opera lojas Shopify B2C + B2B em escala enterprise. +455% sessões e +74% receita para marca de moda de luxo internacional. Matrixify, Klaviyo, SEO técnico, Liquid. Disponível para marcas nos EUA e Canadá.',
    siteName: 'Matheus Abrahão | Shopify Expert & E-commerce Engineer',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Matheus Abrahão | Shopify Expert & E-commerce Engineer',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matheus Abrahão | Shopify Expert & Desenvolvedor Shopify',
    description: 'Shopify Expert & E-commerce Engineer. Runs paired B2C and B2B Shopify storefronts at enterprise scale. +455% sessions and +74% revenue for an international luxury fashion brand. Available for US and Canadian brands.',
    creator: '@abrahao_dev',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.matheusabrahao.com.br',
    languages: {
      'pt-BR': 'https://www.matheusabrahao.com.br',
      'en': 'https://www.matheusabrahao.com.br',
      'x-default': 'https://www.matheusabrahao.com.br',
    },
  },
  other: {
    'geo.region': 'BR-SP',
    'geo.placename': 'São Paulo',
    'geo.position': '-23.5505;-46.6333',
    'ICBM': '-23.5505, -46.6333',
    'DC.title': 'Matheus Abrahão - Shopify Expert & E-commerce Engineer',
    'DC.creator': 'Matheus Abrahão',
    'DC.subject': 'Shopify Development, Shopify Plus, Liquid, Matrixify, Klaviyo, Technical SEO, Catalog Management, Shopify Migration, Speed Optimization, E-commerce Engineering',
    'DC.description': 'Shopify expert and e-commerce engineer with 6+ years on the platform, scaling production Shopify operations for brands in the US and Canada.',
    'DC.publisher': 'Matheus Abrahão',
    'DC.contributor': 'Matheus Abrahão',
    'DC.date': '2026',
    'DC.type': 'Text',
    'DC.format': 'text/html',
    'DC.identifier': 'https://www.matheusabrahao.com.br',
    'DC.language': 'pt-BR',
    'DC.coverage': 'World',
    'DC.rights': 'Copyright 2026 Matheus Abrahão',
    'revisit-after': '7 days',
    'rating': 'general',
    'distribution': 'global',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="alternate" hrefLang="pt-BR" href="https://www.matheusabrahao.com.br" />
        <link rel="alternate" hrefLang="en" href="https://www.matheusabrahao.com.br" />
        <link rel="alternate" hrefLang="x-default" href="https://www.matheusabrahao.com.br" />
        <meta name="theme-color" content="#0B0B0B" />
        <meta name="msapplication-TileColor" content="#0B0B0B" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />

        {/* Structured Data: Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://www.matheusabrahao.com.br/#person",
              "name": "Matheus Abrahão",
              "alternateName": ["Matheus Abrahao", "abrahao-dev", "abrahao.dev"],
              "jobTitle": "Shopify Expert & E-commerce Engineer",
              "description": "Shopify expert and e-commerce engineer with 6+ years on the platform, starting with his own Shopify store (Martin, martin4shop.com.br) and growing into running stores for international brands. Currently operates paired B2C and B2B Shopify storefronts for a US building-products manufacturer on one enterprise-scale catalog, with catalog syndication to Lowe's, Home Depot, Menards and Amazon via Salsify PIM and Matrixify. Drove +455% sessions, +114% orders, and +74% revenue as sole engineer for an international luxury fashion brand, and +254% sales, +324% orders and +1,700% sessions for a US beauty and lifestyle brand. Expert in Shopify Plus, Liquid, Matrixify, Klaviyo, technical SEO, speed optimization, and platform migrations. Remote from São Paulo, Brazil (UTC-3), working with brands in the US and Canada.",
              "url": "https://www.matheusabrahao.com.br",
              "image": "https://www.matheusabrahao.com.br/profile.jpg",
              "sameAs": [
                "https://github.com/abrahao-dev",
                "https://linkedin.com/in/abrahao-dev",
                "https://instagram.com/abrahao.dev"
              ],
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "NEX Agency",
                  "url": "https://nexagency.com.br"
                }
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Universidade São Francisco",
                "department": "Bachelor's Degree, Software Engineering"
              },
              "hasOccupation": [
                {
                  "@type": "Occupation",
                  "name": "Shopify Expert",
                  "occupationLocation": [
                    { "@type": "Country", "name": "United States" },
                    { "@type": "Country", "name": "Canada" }
                  ],
                  "skills": "Shopify Plus, Liquid, Matrixify, Salsify PIM, CSV workflows, technical SEO, schema markup, GA4 analytics, app integrations, conversion optimization, catalog data management, multi-variant configuration, B2B wholesale catalogs"
                },
                {
                  "@type": "Occupation",
                  "name": "E-commerce Developer",
                  "skills": "Shopify theme development, Liquid, Shopify Admin and Storefront API, Klaviyo flows and segmentation, Meta CAPI, Google Merchant Center, Amazon Seller Central, Core Web Vitals and speed optimization, WooCommerce and Magento to Shopify migrations"
                }
              ],
              "knowsAbout": [
                "Shopify", "Shopify Plus", "Shopify Liquid", "Shopify Themes",
                "Shopify Migration", "Shopify Speed Optimization", "Shopify B2B",
                "Technical SEO", "Schema Markup", "Structured Data", "Core Web Vitals",
                "Catalog Data Management", "Matrixify", "Salsify PIM", "Shopify CSV Workflows",
                "Multi-Variant Configuration", "Inventory Synchronization",
                "Klaviyo", "Email and SMS Marketing Automation",
                "Meta CAPI", "Google Merchant Center", "Amazon Seller Central",
                "GA4", "PostHog", "E-commerce Automation", "Conversion Rate Optimization",
                "Shopify Admin API", "Shopify Storefront API", "Shopify Hydrogen",
                "React", "Next.js", "TypeScript", "Node.js",
                "Tailwind CSS", "Vercel", "Git"
              ],
              "knowsLanguage": ["pt-BR", "en"],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "São Paulo",
                "addressRegion": "SP",
                "addressCountry": "BR"
              },
              "email": "contato.matheusabrahao@gmail.com",
              "telephone": "+55-11-98851-2788",
              "nationality": {
                "@type": "Country",
                "name": "Brazil"
              }
            })
          }}
        />

        {/* Structured Data: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Matheus Abrahão | Shopify Expert & E-commerce Engineer",
              "url": "https://www.matheusabrahao.com.br",
              "description": "Portfólio do Shopify Expert Matheus Abrahão: desenvolvimento de tema Liquid, operações de catálogo com Matrixify, Klaviyo, otimização de velocidade, SEO técnico e migrações para Shopify.",
              "inLanguage": ["pt-BR", "en"],
              "author": {
                "@type": "Person",
                "name": "Matheus Abrahão"
              },
              "potentialAction": {
                "@type": "ContactAction",
                "name": "Contact Matheus Abrahão",
                "target": "https://www.matheusabrahao.com.br/contact"
              }
            })
          }}
        />

        {/* Structured Data: ProfessionalService */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Matheus Abrahão | Shopify Development & E-commerce Engineering",
              "description": "Shopify expert services for e-commerce brands in the US and Canada: Shopify theme and Liquid development, Matrixify and catalog operations at scale, Klaviyo email and SMS flows, Shopify speed optimization and Core Web Vitals, technical SEO, and platform migrations to Shopify. 6+ years on the platform. Remote, UTC-3 with near-full overlap with US business hours. Available for freelance, contract, and dedicated engagements.",
              "url": "https://www.matheusabrahao.com.br",
              "telephone": "+55-11-98851-2788",
              "email": "contato.matheusabrahao@gmail.com",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "São Paulo",
                "addressRegion": "SP",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -23.5505,
                "longitude": -46.6333
              },
              "areaServed": [
                { "@type": "Country", "name": "United States" },
                { "@type": "Country", "name": "Canada" },
                { "@type": "Country", "name": "Brazil" }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Shopify Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Shopify Development",
                      "url": "https://www.matheusabrahao.com.br/shopify-expert",
                      "description": "Custom Shopify theme and Liquid development, storefront and PDP engineering, checkout extensibility, app integrations, and B2B storefronts for high-volume stores."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Shopify SEO and AI Search Optimization",
                      "url": "https://www.matheusabrahao.com.br/shopify-seo-expert",
                      "description": "Technical SEO for Shopify: canonical and duplicate-URL handling, structured data, robots.txt.liquid and sitemaps, plus GEO/AEO work: llms.txt and content structured to be cited accurately by ChatGPT, Claude, Perplexity and AI Overviews."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Matrixify & Catalog Operations",
                      "url": "https://www.matheusabrahao.com.br/matrixify-expert",
                      "description": "Bulk product, order and customer imports and exports with Matrixify, multi-level variant configuration, pricing and inventory synchronization, and retail channel syndication via Salsify PIM."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Klaviyo Email & SMS Marketing",
                      "url": "https://www.matheusabrahao.com.br/klaviyo-expert",
                      "description": "Klaviyo flow architecture, segmentation, list health, Shopify data integration, and revenue attribution for e-commerce brands."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Shopify Speed Optimization",
                      "url": "https://www.matheusabrahao.com.br/shopify-speed-optimization",
                      "description": "Core Web Vitals diagnosis, third-party script audits, theme and image optimization, and conversion-focused performance work."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Shopify Migration",
                      "url": "https://www.matheusabrahao.com.br/shopify-migration-expert",
                      "description": "WooCommerce, Wix, Magento and BigCommerce to Shopify migrations with catalog, customer and order data integrity plus SEO-safe redirects."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Hire a Shopify Developer",
                      "url": "https://www.matheusabrahao.com.br/hire-shopify-developer",
                      "description": "Fixed-price projects, retainers, and dedicated Shopify developer engagements. Remote, UTC-3, near-full overlap with US business hours, invoiced in USD."
                    }
                  }
                ]
              }
            })
          }}
        />

      </head>
      <body className="antialiased min-h-screen bg-background font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <ErrorBoundary>
          <LanguageProvider>
            {/*
              Sem enableSystem de propósito: a identidade do site é o tema escuro
              com lima. Com enableSystem, quem usa o SO em modo claro caía no tema
              claro já na primeira visita. O toggle continua disponível.
            */}
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              disableTransitionOnChange
            >
              <ScrollProgress />
              <div className="relative flex min-h-screen flex-col">
                <Navigation />
                <main id="main" className="flex-1">
                  {children}
                </main>
                <Footer />
              </div>
              <WhatsAppButton />
              <CookieConsent />
            </ThemeProvider>
          </LanguageProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}