import CookieConsent from "@/components/cookie-consent"
import ErrorBoundary from "@/components/error-boundary"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import WhatsAppButton from "@/components/whatsapp-button"
import { LanguageProvider } from "@/contexts/language-context"
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

// Self-hosted variable fonts already vendored in the repo — no webfont request,
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

export const metadata: Metadata = {
  metadataBase: new URL('https://matheusabrahao.com.br'),
  title: {
    default: 'Matheus Abrahão | Shopify Expert & Desenvolvedor Shopify',
    template: '%s | Matheus Abrahão',
  },
  description: 'Shopify Expert e Engenheiro de E-commerce com 6+ anos operando lojas Shopify. Opera lojas B2C e B2B simultâneas em escala enterprise e gerou +455% de sessões e +74% de receita para uma marca de moda de luxo internacional. Especialista em Matrixify, catálogo, Klaviyo, SEO técnico, performance e Liquid. Atende marcas nos EUA e Canadá — fuso UTC-3, sobreposição total com o horário comercial americano.',
  keywords: [
    // English keywords (primary — target market is US and Canada; DataForSEO-validated)
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
    // Portuguese keywords (secondary — domain is .com.br)
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
  authors: [{ name: 'Matheus Abrahão', url: 'https://matheusabrahao.com.br' }],
  creator: 'Matheus Abrahão',
  publisher: 'Matheus Abrahão',
  category: 'Technology',
  classification: 'Shopify Development & E-commerce Engineering',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: ['en_US'],
    url: 'https://matheusabrahao.com.br',
    title: 'Matheus Abrahão | Shopify Expert & Desenvolvedor Shopify',
    description: 'Shopify Expert e Engenheiro de E-commerce. Opera lojas Shopify B2C + B2B em escala enterprise. +455% sessões e +74% receita para marca de moda de luxo internacional. Matrixify, Klaviyo, SEO técnico, Liquid. Disponível para marcas nos EUA e Canadá.',
    siteName: 'Matheus Abrahão — Shopify Expert & E-commerce Engineer',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Matheus Abrahão — Shopify Expert & E-commerce Engineer',
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
    canonical: 'https://matheusabrahao.com.br',
    languages: {
      'pt-BR': 'https://matheusabrahao.com.br',
      'en': 'https://matheusabrahao.com.br',
      'x-default': 'https://matheusabrahao.com.br',
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
    'DC.identifier': 'https://matheusabrahao.com.br',
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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="alternate" hrefLang="pt-BR" href="https://matheusabrahao.com.br" />
        <link rel="alternate" hrefLang="en" href="https://matheusabrahao.com.br" />
        <link rel="alternate" hrefLang="x-default" href="https://matheusabrahao.com.br" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0B0B0B" />
        <meta name="msapplication-TileColor" content="#0B0B0B" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />

        {/* Structured Data: Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Matheus Abrahão",
              "alternateName": ["Matheus Abrahao", "abrahao-dev", "abrahao.dev"],
              "jobTitle": "Shopify Expert & E-commerce Engineer",
              "description": "Shopify expert and e-commerce engineer with 6+ years on the platform, starting with his own Shopify store (Martin, martin4shop.com.br) and growing into running stores for international brands. Currently operates paired B2C and B2B Shopify storefronts for a US building-products manufacturer on one enterprise-scale catalog, with catalog syndication to Lowe's, Home Depot, Menards and Amazon via Salsify PIM and Matrixify. Drove +455% sessions, +114% orders, and +74% revenue as sole engineer for an international luxury fashion brand, and +254% sales, +324% orders and +1,700% sessions for a US beauty and lifestyle brand. Expert in Shopify Plus, Liquid, Matrixify, Klaviyo, technical SEO, speed optimization, and platform migrations. Remote from São Paulo, Brazil (UTC-3), working with brands in the US and Canada.",
              "url": "https://matheusabrahao.com.br",
              "image": "https://matheusabrahao.com.br/profile.jpg",
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
              "name": "Matheus Abrahão — Shopify Expert & E-commerce Engineer",
              "url": "https://matheusabrahao.com.br",
              "description": "Portfólio do Shopify Expert Matheus Abrahão — desenvolvimento de tema Liquid, operações de catálogo com Matrixify, Klaviyo, otimização de velocidade, SEO técnico e migrações para Shopify.",
              "inLanguage": ["pt-BR", "en"],
              "author": {
                "@type": "Person",
                "name": "Matheus Abrahão"
              },
              "potentialAction": {
                "@type": "ContactAction",
                "name": "Contact Matheus Abrahão",
                "target": "https://matheusabrahao.com.br/contact"
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
              "name": "Matheus Abrahão — Shopify Development & E-commerce Engineering",
              "description": "Shopify expert services for e-commerce brands in the US and Canada: Shopify theme and Liquid development, Matrixify and catalog operations at scale, Klaviyo email and SMS flows, Shopify speed optimization and Core Web Vitals, technical SEO, and platform migrations to Shopify. 6+ years on the platform. Remote, UTC-3 with near-full overlap with US business hours. Available for freelance, contract, and dedicated engagements.",
              "url": "https://matheusabrahao.com.br",
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
                      "url": "https://matheusabrahao.com.br/shopify-expert",
                      "description": "Custom Shopify theme and Liquid development, storefront and PDP engineering, checkout extensibility, app integrations, and B2B storefronts for high-volume stores."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Matrixify & Catalog Operations",
                      "url": "https://matheusabrahao.com.br/matrixify-expert",
                      "description": "Bulk product, order and customer imports and exports with Matrixify, multi-level variant configuration, pricing and inventory synchronization, and retail channel syndication via Salsify PIM."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Klaviyo Email & SMS Marketing",
                      "url": "https://matheusabrahao.com.br/klaviyo-expert",
                      "description": "Klaviyo flow architecture, segmentation, list health, Shopify data integration, and revenue attribution for e-commerce brands."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Shopify Speed Optimization",
                      "url": "https://matheusabrahao.com.br/shopify-speed-optimization",
                      "description": "Core Web Vitals diagnosis, third-party script audits, theme and image optimization, and conversion-focused performance work."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Shopify Migration",
                      "url": "https://matheusabrahao.com.br/shopify-migration-expert",
                      "description": "WooCommerce, Wix, Magento and BigCommerce to Shopify migrations with catalog, customer and order data integrity plus SEO-safe redirects."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Hire a Shopify Developer",
                      "url": "https://matheusabrahao.com.br/hire-shopify-developer",
                      "description": "Fixed-price projects, retainers, and dedicated Shopify developer engagements. Remote, UTC-3, near-full overlap with US business hours, invoiced in USD."
                    }
                  }
                ]
              }
            })
          }}
        />

        {/* Structured Data: BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://matheusabrahao.com.br"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About",
                  "item": "https://matheusabrahao.com.br/about"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Projects",
                  "item": "https://matheusabrahao.com.br/projects"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Blog",
                  "item": "https://matheusabrahao.com.br/blog"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Contact",
                  "item": "https://matheusabrahao.com.br/contact"
                }
              ]
            })
          }}
        />

        {/* Structured Data: FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "inLanguage": ["pt-BR", "en"],
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Quem é Matheus Abrahão?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Matheus Abrahão é Shopify Expert e engenheiro de e-commerce com mais de 6 anos de Shopify. Começou pela própria loja, a Martin (martin4shop.com.br), e cresceu até operar lojas para marcas internacionais. Hoje opera lojas Shopify B2C e B2B simultâneas de uma fabricante americana, com catálogo em escala enterprise, e foi o engenheiro único de uma marca de moda de luxo internacional. Trabalha remoto de São Paulo, Brasil (UTC-3), atendendo marcas nos Estados Unidos e Canadá."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quais serviços Shopify o Matheus Abrahão oferece?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Desenvolvimento Shopify e tema Liquid, operações de catálogo em escala com Matrixify e Salsify PIM, Klaviyo (fluxos de email e SMS, segmentação e atribuição de receita), otimização de velocidade e Core Web Vitals, SEO técnico com structured data, e migrações de WooCommerce, Wix, Magento ou BigCommerce para Shopify. Também atua como desenvolvedor Shopify dedicado em projetos de preço fechado ou retainer."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quais resultados Matheus Abrahão já entregou?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Para uma marca de moda de luxo internacional, gerou +455% em sessões, +114% em pedidos e +74% em vendas totais através de SEO técnico, performance e integrações de marketing. Para uma marca de beleza e lifestyle dos EUA, +254% em vendas e +324% em pedidos em 12 meses. Opera lojas Shopify B2C e B2B simultâneas para uma fabricante americana, com catálogo em escala enterprise, variantes multinível e sindicalização de catálogo para Lowe's, Home Depot, Menards e Amazon via Salsify PIM e Matrixify. Como fundador da Martin (martin4shop.com.br), escalou a loja a 1.959 pedidos, ~R$552 mil processados e 299.000+ sessões operando ponta a ponta."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quais tecnologias o Matheus Abrahão utiliza?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Shopify Plus, Shopify Liquid, temas e sections, Checkout Extensibility, Shopify Admin e Storefront API, Hydrogen. Operações de catálogo: Matrixify, Salsify PIM e fluxos CSV em massa. Marketing e canais: Klaviyo, Meta CAPI e Pixel, Google Merchant Center, Amazon Seller Central. Dados: GA4 e PostHog. Front-end de apoio: React, Next.js, TypeScript e Tailwind CSS."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Como contratar o Matheus Abrahão?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Você pode entrar em contato pelo WhatsApp +55 11 98851-2788, email contato.matheusabrahao@gmail.com, ou pela página de contato em matheusabrahao.com.br/contact. Atende marcas de e-commerce nos EUA e Canadá em projetos de preço fechado, retainer mensal ou como desenvolvedor Shopify dedicado. Remoto, fuso UTC-3 com sobreposição quase total ao horário comercial americano, inglês fluente, faturamento em USD."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Who is Matheus Abrahão?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Matheus Abrahão is a Shopify expert and e-commerce engineer with 6+ years on the platform. He started with his own Shopify store, Martin (martin4shop.com.br), and grew into running stores for international brands. He currently runs paired B2C and B2B Shopify storefronts for a US building-products manufacturer, and is the sole engineer behind an international luxury fashion brand's Shopify ecosystem. Remote from São Paulo, Brazil (UTC-3), working with e-commerce brands in the United States and Canada."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What technologies does Matheus Abrahão work with?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Shopify Plus, Liquid, themes and sections, checkout extensibility, Shopify Admin and Storefront API, Hydrogen. Catalog operations: Matrixify, Salsify PIM, bulk CSV workflows. Marketing and channels: Klaviyo, Meta CAPI and Pixel, Google Merchant Center, Amazon Seller Central. Data: GA4, PostHog. Supporting frontend: React, Next.js, TypeScript, Tailwind CSS."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What results has Matheus Abrahão delivered?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "+455% sessions, +114% orders, and +74% total sales for an international luxury fashion brand through technical optimizations, SEO, and marketing integrations. +254% sales, +324% orders, and +1,700% sessions for a US beauty and lifestyle brand. Paired B2C and B2B Shopify storefronts on one enterprise-scale catalog for a US building-products manufacturer, syndicated to Lowe\u0027s, Home Depot, Menards and Amazon via Salsify PIM. As founder of Martin (martin4shop.com.br): 1,959 orders, roughly R$552,000 processed, and 299,000+ sessions, operating end-to-end as a single founder."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I hire Matheus Abrahão?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "WhatsApp +55 11 98851-2788, email contato.matheusabrahao@gmail.com, or the contact page at matheusabrahao.com.br/contact. Available for fixed-price Shopify projects, monthly retainers, and dedicated developer engagements with e-commerce brands in the US and Canada. Remote, UTC-3 with near-full overlap with US business hours, fluent English, invoiced in USD."
                  }
                }
              ]
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
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
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