import CookieConsent from "@/components/cookie-consent"
import ErrorBoundary from "@/components/error-boundary"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import WhatsAppButton from "@/components/whatsapp-button"
import { LanguageProvider } from "@/contexts/language-context"
import type { Metadata } from 'next'
import './globals.css'

// Note: Apple SF Pro fonts are configured but require manual download
// See SF_PRO_FONTS_SETUP.md for instructions
// For now, using system fonts with -apple-system fallback

export const metadata: Metadata = {
  metadataBase: new URL('https://matheusabrahao.com.br'),
  title: {
    default: 'Matheus Abrahão | Engenheiro de Software Sênior & Shopify Operator',
    template: '%s | Matheus Abrahão',
  },
  description: 'Shopify Expert e Engenheiro de E-commerce com 6+ anos operando lojas Shopify. Opera uma operação de ~US$1M/mês (B2C e B2B) e gerou +455% de sessões e +74% de receita para uma marca de moda de luxo internacional. Especialista em Matrixify, catálogo, Klaviyo, SEO técnico, performance e Liquid. Atende marcas nos EUA e Canadá — fuso UTC-3, sobreposição total com o horário comercial americano.',
  keywords: [
    // Portuguese keywords (primary — domain is .com.br)
    'Engenheiro de Software Sênior',
    'Shopify Operator',
    'Especialista Shopify',
    'Desenvolvedor Shopify',
    'Desenvolvedor Shopify Brasil',
    'Desenvolvedor Full Stack',
    'Engenheiro de Software',
    'Programador São Paulo',
    'Desenvolvedor React',
    'Desenvolvedor Next.js',
    'Desenvolvedor Node.js',
    'Desenvolvedor Web',
    'Freelancer React Brasil',
    'Desenvolvedor TypeScript',
    'Desenvolvedor E-commerce',
    'SEO Técnico Shopify',
    'Automação E-commerce',
    'Gestão de Catálogo Shopify',
    'Matrixify Shopify',
    'Programador Full Stack Remoto',
    'Desenvolvedor Front-end',
    'Desenvolvedor Back-end',
    'Contratar Desenvolvedor Full Stack',
    'Contratar Programador React',
    'Contratar Especialista Shopify',
    'Vencedor Apple Swift Student Challenge',
    'Desenvolvedor Swift',
    'Desenvolvedor iOS',
    // English keywords (secondary — international audience)
    'Senior Software Engineer',
    'Senior Shopify Operator',
    'Shopify Expert',
    'Shopify Developer',
    'Full Stack Developer',
    'Full Stack Engineer',
    'Apple Swift Student Challenge Winner',
    'Swift Developer',
    'SwiftUI Developer',
    'iOS Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'TypeScript Developer',
    'E-commerce Developer',
    'Technical SEO Shopify',
    'Shopify Catalog Management',
    'Matrixify Expert',
    'Shopify Liquid Developer',
    'Software Engineer',
    'Remote Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'AI Developer',
    'LangChain Developer',
    'Hire Full Stack Developer',
    'Hire Shopify Operator',
    'Hire Shopify Developer',
  ],
  authors: [{ name: 'Matheus Abrahão', url: 'https://matheusabrahao.com.br' }],
  creator: 'Matheus Abrahão',
  publisher: 'Matheus Abrahão',
  category: 'Technology',
  classification: 'Full Stack Development',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: ['en_US'],
    url: 'https://matheusabrahao.com.br',
    title: 'Matheus Abrahão | Engenheiro de Software Sênior & Shopify Operator',
    description: 'Shopify Expert e Engenheiro de E-commerce. Opera ~US$1M/mês em Shopify (B2C + B2B). +455% sessões e +74% receita para marca de moda de luxo internacional. Matrixify, Klaviyo, SEO técnico, Liquid. Disponível para marcas nos EUA e Canadá.',
    siteName: 'Matheus Abrahão — Senior Software Engineer & Shopify Operator',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Matheus Abrahão — Senior Software Engineer & Shopify Operator',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matheus Abrahão | Engenheiro de Software Sênior & Shopify Operator',
    description: 'Shopify Expert & E-commerce Engineer. Runs a ~US$1M/month Shopify operation (B2C + B2B). +455% sessions and +74% revenue for an international luxury fashion brand. Available for US and Canadian brands.',
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
    'DC.title': 'Matheus Abrahão - Senior Software Engineer & Shopify Operator',
    'DC.creator': 'Matheus Abrahão',
    'DC.subject': 'Software Engineering, Shopify Operator, Technical SEO, Catalog Management, React, Next.js, Node.js, TypeScript, Swift, SwiftUI, E-commerce, AI',
    'DC.description': 'Senior Software Engineer and Shopify Operator scaling production-grade e-commerce ecosystems. Apple Swift Student Challenge 2026 Winner.',
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
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="alternate" hrefLang="pt-BR" href="https://matheusabrahao.com.br" />
        <link rel="alternate" hrefLang="en" href="https://matheusabrahao.com.br" />
        <link rel="alternate" hrefLang="x-default" href="https://matheusabrahao.com.br" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
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
              "jobTitle": "Senior Software Engineer & Shopify Operator",
              "description": "Senior Software Engineer and Shopify Operator with 5+ years scaling production-grade e-commerce ecosystems. Apple Swift Student Challenge 2026 Winner. Founded an e-commerce brand to $90K+ in sales. Drove +455% sessions, +114% orders, and +74% revenue for an international luxury brand through technical SEO, catalog data management, and system automation. Expert in Shopify, React, Next.js, Node.js, TypeScript, Swift, and SwiftUI.",
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
                  "name": "Scale Army",
                  "url": "https://scalearmy.com"
                },
                {
                  "@type": "Organization",
                  "name": "Virtustant",
                  "url": "https://virtustant.com"
                },
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
                  "name": "Senior Shopify Operator",
                  "occupationLocation": { "@type": "Country", "name": "United States" },
                  "skills": "Shopify Plus, Liquid, Matrixify, CSV workflows, technical SEO, schema markup, GA4 analytics, app integrations, conversion optimization, catalog data management, multi-variant configuration"
                },
                {
                  "@type": "Occupation",
                  "name": "Senior Software Engineer",
                  "skills": "React, Next.js, Node.js, TypeScript, Swift, SwiftUI, PostgreSQL, MongoDB, Docker, AWS, GCP, REST APIs, GraphQL, LangChain"
                }
              ],
              "knowsAbout": [
                "Shopify", "Shopify Plus", "Shopify Liquid", "Shopify Operator",
                "Technical SEO", "Schema Markup", "Structured Data", "Core Web Vitals",
                "Catalog Data Management", "Matrixify", "Shopify CSV Workflows",
                "Multi-Variant Configuration", "Inventory Synchronization",
                "Klaviyo", "Meta CAPI", "Google Merchant Center", "Amazon Seller Central",
                "GA4", "PostHog", "E-commerce Automation",
                "React", "Next.js", "TypeScript", "Node.js", "Express",
                "Swift", "SwiftUI", "iOS Development",
                "REST APIs", "GraphQL", "PostgreSQL", "MongoDB", "Prisma",
                "Docker", "AWS", "GCP", "Firebase",
                "CI/CD", "LangChain", "Python", "OpenAI",
                "Tailwind CSS", "Framer Motion", "Three.js", "AI/ML",
                "Vercel", "Git", "Agile", "Scrum"
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
              "name": "Matheus Abrahão — Senior Software Engineer & Shopify Operator",
              "url": "https://matheusabrahao.com.br",
              "description": "Portfólio do Engenheiro de Software Sênior e Shopify Operator Matheus Abrahão — projetos de e-commerce, SEO técnico, automação de sistemas e aplicações web em produção.",
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
              "name": "Matheus Abrahão — Software Engineering & Shopify Operations",
              "description": "Senior Software Engineer and Shopify Operator services: production-grade Shopify operations (catalog data management, technical SEO, system automation), full-stack web development (React, Next.js, Node.js, TypeScript), iOS native development (Swift, SwiftUI), and AI/automation solutions (LangChain, OpenAI). Apple Swift Student Challenge 2026 Winner. Available for freelance, contract, and full-time remote roles.",
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
                { "@type": "Country", "name": "Brazil" },
                { "@type": "Country", "name": "United States" },
                { "@type": "Country", "name": "Canada" },
                { "@type": "Country", "name": "Portugal" },
                { "@type": "Country", "name": "France" }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Engineering & Shopify Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Shopify Operations & Technical SEO",
                      "description": "Senior Shopify Operator services: catalog data management with Matrixify and CSV workflows, multi-variant configuration, structured data and schema markup, Core Web Vitals, GA4 analytics, app integration stability, navigation and checkout optimization for high-volume B2B and B2C stores."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "E-commerce Engineering",
                      "description": "Custom Shopify themes (Liquid), headless storefronts (Hydrogen, Remix), Klaviyo flows, Meta CAPI / Pixel, Amazon Seller Central and Google Merchant Center integrations."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Full Stack Web Development",
                      "description": "Production web applications using React, Next.js, Node.js, and TypeScript with strong Core Web Vitals and SEO."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "iOS & Mobile Development",
                      "description": "Native iOS apps using Swift and SwiftUI — Apple Swift Student Challenge 2026 Winner."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI & Automation Solutions",
                      "description": "AI chatbots, LangGraph and LangChain integrations, OpenAI APIs, PDF-to-Markdown pipelines, and end-to-end process automation."
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
                    "text": "Matheus Abrahão é Engenheiro de Software Sênior e Shopify Operator com mais de 6 anos de experiência. Hoje opera uma operação Shopify que fatura em média US$ 1 milhão por mês (lojas B2C e B2B de uma fabricante americana) e atua como engenheiro técnico de uma marca de moda de luxo internacional. Vencedor global do Apple Swift Student Challenge 2026, fundou e opera a marca de e-commerce Martin (martin4shop.com.br). É baseado em Atibaia, São Paulo, Brasil, e atende marcas nos Estados Unidos e Canadá."
                  }
                },
                {
                  "@type": "Question",
                  "name": "O que é um Shopify Operator?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Shopify Operator é um perfil que combina engenharia técnica e operação de negócio em ambientes Shopify de alto volume. Matheus atua como Shopify Operator gerenciando atualizações em massa de catálogo, configurações de variantes multi-nível com Matrixify e fluxos CSV, SEO técnico com structured data, integrações entre apps Shopify, e otimizações de checkout — sempre cruzando dados de GA4 para gerar estratégias de upsell, cross-sell e merchandising."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quais resultados Matheus Abrahão já entregou?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Para uma marca de moda de luxo internacional, gerou +455% em sessões, +114% em pedidos e +74% em vendas totais através de SEO técnico, performance e integrações de marketing. Para uma marca de beleza e lifestyle dos EUA, +254% em vendas e +324% em pedidos em 12 meses. Opera uma operação Shopify de aproximadamente US$ 1 milhão por mês (B2C e B2B) para uma fabricante americana, com sindicalização de catálogo para Lowe's, Home Depot, Menards e Amazon via Salsify PIM e Matrixify. Como fundador da Martin (martin4shop.com.br), escalou a loja a quase 2.000 pedidos e 297.000+ sessões operando ponta a ponta."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quais tecnologias o Matheus Abrahão utiliza?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Shopify Plus, Shopify Liquid, Matrixify, Klaviyo, Meta CAPI, Google Merchant Center, Amazon Seller Central, GA4, PostHog. Stack web: React, Next.js, Node.js, TypeScript, Tailwind CSS, PostgreSQL, MongoDB, Prisma. iOS: Swift e SwiftUI. AI: LangGraph, LangChain, OpenAI. DevOps: Docker, AWS, GCP, Vercel, Firebase, CI/CD."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Como contratar o Matheus Abrahão?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Você pode entrar em contato pelo WhatsApp +55 11 98851-2788, email contato.matheusabrahao@gmail.com, ou pela página de contato em matheusabrahao.com.br/contact. Está disponível para projetos freelance, contratos e posições remotas — Shopify Operations, engenharia full stack ou iOS."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Who is Matheus Abrahão?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Matheus Abrahão is a Senior Software Engineer and Shopify Operator with 6+ years of experience. He currently runs a ~US$1M/month Shopify operation (B2C and B2B storefronts) for a US building-products manufacturer, and is the sole engineer behind an international luxury fashion brand's Shopify ecosystem. Global winner of the Apple Swift Student Challenge 2026 and founder of the e-commerce brand Martin (martin4shop.com.br). Based in Atibaia, São Paulo, Brazil, working with US and Canadian brands."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What technologies does Matheus Abrahão work with?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Shopify Plus, Liquid, Matrixify, Klaviyo, Meta CAPI, Google Merchant Center, Amazon Seller Central, GA4, PostHog. Web: React, Next.js, Node.js, TypeScript, Tailwind, PostgreSQL, MongoDB, Prisma. iOS: Swift, SwiftUI. AI: LangGraph, LangChain, OpenAI. DevOps: Docker, AWS, GCP, Vercel, Firebase."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What results has Matheus Abrahão delivered?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "+455% sessions, +114% orders, and +74% total sales for an international luxury brand through technical optimizations, SEO, and marketing integrations. $90K+ in revenue and 297,000+ sessions as the founder of Martin, operating end-to-end as a single founder. Delivered solutions to clients across 10+ countries via NEX Agency."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I hire Matheus Abrahão?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "WhatsApp +55 11 98851-2788, email contato.matheusabrahao@gmail.com, or the contact page at matheusabrahao.com.br/contact. Open to freelance, contract, and full-time remote roles — Shopify Operations, full stack engineering, or iOS."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="antialiased min-h-screen bg-background animated-gradient-bg">
        <ErrorBoundary>
          <LanguageProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange={false}
            >
              <ScrollProgress />
              <div className="relative flex min-h-screen flex-col">
                <Navigation />
                <main className="flex-1">
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