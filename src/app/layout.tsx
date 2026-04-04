import ErrorBoundary from "@/components/error-boundary"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { LanguageProvider } from "@/contexts/language-context"
import type { Metadata } from 'next'
import './globals.css'

// Note: Apple SF Pro fonts are configured but require manual download
// See SF_PRO_FONTS_SETUP.md for instructions
// For now, using system fonts with -apple-system fallback

export const metadata: Metadata = {
  metadataBase: new URL('https://matheusabrahao.com.br'),
  title: {
    default: 'Matheus Abrahão | Senior Software Engineer | Apple Swift Student Challenge Winner',
    template: '%s | Matheus Abrahão',
  },
  description: 'Senior Software Engineer with 5+ years building production web applications. Apple Swift Student Challenge 2026 Winner. Built $90K+ e-commerce platform. Expertise in React, Next.js, Node.js, TypeScript, Swift, SwiftUI, and Shopify. Available for remote work from São Paulo, Brazil.',
  keywords: [
    // English keywords
    'Senior Software Engineer',
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
    'Shopify Developer',
    'Shopify Expert',
    'Software Engineer',
    'Web Developer',
    'Remote Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'JavaScript Developer',
    'REST API Developer',
    'GraphQL Developer',
    'Brazil Developer',
    'São Paulo Developer',
    'Remote Software Engineer',
    'Freelance Full Stack Developer',
    'Web Application Developer',
    'SaaS Developer',
    'AI Developer',
    'LangChain Developer',
    'Hire Full Stack Developer',
    'Hire React Developer',
    'Hire Shopify Developer',
    // Portuguese keywords (Brazilian market)
    'Desenvolvedor Full Stack',
    'Engenheiro de Software',
    'Programador São Paulo',
    'Desenvolvedor React',
    'Desenvolvedor Node.js',
    'Desenvolvedor Web',
    'Freelancer React Brasil',
    'Desenvolvedor TypeScript',
    'Desenvolvedor E-commerce',
    'Desenvolvedor Shopify Brasil',
    'Programador Full Stack Remoto',
    'Desenvolvedor Front-end',
    'Desenvolvedor Back-end',
    'Contratar Desenvolvedor Full Stack',
    'Contratar Programador React',
  ],
  authors: [{ name: 'Matheus Abrahão', url: 'https://matheusabrahao.com.br' }],
  creator: 'Matheus Abrahão',
  publisher: 'Matheus Abrahão',
  category: 'Technology',
  classification: 'Full Stack Development',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['pt_BR'],
    url: 'https://matheusabrahao.com.br',
    title: 'Matheus Abrahão | Senior Software Engineer | Apple Swift Student Challenge Winner',
    description: 'Senior Software Engineer with 5+ years experience. Apple Swift Student Challenge 2026 Winner. Built $90K+ e-commerce platform. React, Next.js, Node.js, Swift, SwiftUI, TypeScript, Shopify.',
    siteName: 'Matheus Abrahão - Senior Software Engineer',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Matheus Abrahão - Senior Full Stack Engineer Portfolio',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matheus Abrahão | Senior Software Engineer | Apple Swift Student Challenge Winner',
    description: 'Senior Software Engineer with 5+ years experience. Apple Swift Student Challenge 2026 Winner. Built $90K+ e-commerce platform. React, Next.js, Node.js, Swift, TypeScript.',
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
      'en': 'https://matheusabrahao.com.br',
      'pt-BR': 'https://matheusabrahao.com.br',
      'x-default': 'https://matheusabrahao.com.br',
    },
  },
  other: {
    'geo.region': 'BR-SP',
    'geo.placename': 'São Paulo',
    'geo.position': '-23.5505;-46.6333',
    'ICBM': '-23.5505, -46.6333',
    'DC.title': 'Matheus Abrahão - Senior Software Engineer Portfolio',
    'DC.creator': 'Matheus Abrahão',
    'DC.subject': 'Software Engineering, React, Next.js, Node.js, TypeScript, Swift, SwiftUI, E-commerce, Shopify, AI',
    'DC.description': 'Senior Software Engineer building production web applications, iOS apps, e-commerce platforms, and AI systems. Apple Swift Student Challenge 2026 Winner.',
    'DC.publisher': 'Matheus Abrahão',
    'DC.contributor': 'Matheus Abrahão',
    'DC.date': '2026',
    'DC.type': 'Text',
    'DC.format': 'text/html',
    'DC.identifier': 'https://matheusabrahao.com.br',
    'DC.language': 'en',
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />

        {/* Structured Data: Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Matheus Abrahão",
              "alternateName": ["Matheus Abrahao", "abrahao-dev"],
              "jobTitle": "Senior Software Engineer",
              "description": "Senior Software Engineer with 5+ years building production web applications. Apple Swift Student Challenge 2026 Winner. Built $90K+ e-commerce platform. Expertise in React, Next.js, Node.js, TypeScript, Swift, SwiftUI, and Shopify.",
              "url": "https://matheusabrahao.com.br",
              "image": "https://matheusabrahao.com.br/profile.jpg",
              "sameAs": [
                "https://github.com/abrahao-dev",
                "https://linkedin.com/in/abrahao-dev",
                "https://instagram.com/abrahao.dev"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Virtustant",
                "url": "https://virtustant.com"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Universidade São Francisco"
              },
              "knowsAbout": [
                "React", "Next.js", "TypeScript", "Node.js", "Express",
                "Swift", "SwiftUI", "iOS Development",
                "REST APIs", "GraphQL", "PostgreSQL", "MongoDB", "Prisma",
                "Shopify", "Shopify Liquid", "Docker", "AWS", "GCP", "Firebase",
                "CI/CD", "E-commerce", "LangChain", "Python",
                "Tailwind CSS", "Framer Motion", "Three.js", "AI/ML",
                "Vercel", "Git", "Agile", "Scrum",
                "Postman", "DBeaver", "PostHog"
              ],
              "knowsLanguage": ["en", "pt-BR"],
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
              "name": "Matheus Abrahão - Senior Software Engineer Portfolio",
              "url": "https://matheusabrahao.com.br",
              "description": "Portfolio showcasing Full Stack development projects, e-commerce platforms, and production web applications",
              "inLanguage": ["en", "pt-BR"],
              "author": {
                "@type": "Person",
                "name": "Matheus Abrahão"
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
              "name": "Matheus Abrahão - Software Engineering Services",
              "description": "Professional software engineering services including React, Next.js, Node.js, Swift, SwiftUI, Shopify, and AI/ML solutions. Apple Swift Student Challenge 2026 Winner. Available for freelance and remote contract work.",
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
                "name": "Development Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Full Stack Web Development",
                      "description": "Custom web applications using React, Next.js, Node.js, and TypeScript"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "E-commerce Development",
                      "description": "Shopify stores, custom themes, and e-commerce platforms"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "iOS & Mobile Development",
                      "description": "Native iOS apps using Swift and SwiftUI — Apple Swift Student Challenge 2026 Winner"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI & Automation Solutions",
                      "description": "AI chatbots, LangChain integrations, and process automation"
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
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What technologies does Matheus Abrahão work with?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Matheus specializes in React, Next.js, Node.js, TypeScript, Swift, SwiftUI, Shopify (Liquid), Python, PostgreSQL, MongoDB, Docker, AWS, and GCP. He is an Apple Swift Student Challenge 2026 Winner and also works with AI/ML tools like LangChain and OpenAI."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Matheus Abrahão available for remote work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Matheus is based in São Paulo, Brazil, and is available for remote work with clients worldwide. He has successfully worked with companies in the USA, Canada, Portugal, and France."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What kind of projects has Matheus Abrahão built?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Matheus has built a $90K+ e-commerce platform, AI chatbots with LangChain, Shopify custom themes, iOS apps with Swift/SwiftUI, NFT marketplaces, real-time messaging platforms, and IoT dashboards. He is an Apple Swift Student Challenge 2026 Winner and specializes in full stack web applications, mobile development, and e-commerce solutions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I hire Matheus Abrahão as a developer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can reach Matheus through WhatsApp at +55 11 98851-2788, email at contato.matheusabrahao@gmail.com, or through his portfolio contact page at matheusabrahao.com.br/contact. He is available for freelance projects, contract work, and full-time remote positions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quais tecnologias o Matheus Abrahão utiliza?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Matheus é especialista em React, Next.js, Node.js, TypeScript, Swift, SwiftUI, Shopify, Python, PostgreSQL, MongoDB, Docker, AWS e GCP. É vencedor do Apple Swift Student Challenge 2026 e também trabalha com ferramentas de IA/ML como LangChain e OpenAI."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Como contratar o Matheus Abrahão?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Você pode entrar em contato com o Matheus pelo WhatsApp +55 11 98851-2788, email contato.matheusabrahao@gmail.com, ou pela página de contato do portfólio em matheusabrahao.com.br/contact. Ele está disponível para projetos freelance, contratos e posições remotas."
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
            </ThemeProvider>
          </LanguageProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}