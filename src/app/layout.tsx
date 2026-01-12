import ErrorBoundary from "@/components/error-boundary"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import type { Metadata } from 'next'
import './globals.css'

// Note: Apple SF Pro fonts are configured but require manual download
// See SF_PRO_FONTS_SETUP.md for instructions
// For now, using system fonts with -apple-system fallback

export const metadata: Metadata = {
  metadataBase: new URL('https://matheusabrahao.com.br'),
  title: 'Matheus Abrahão | Senior Full Stack Engineer | React, Next.js, Node.js',
  description: 'Senior Full Stack Engineer with 5+ years building production web applications. Built $90K+ e-commerce platform. Expertise in React, Next.js, Node.js, TypeScript, and Shopify.',
  keywords: [
    'Full Stack Developer',
    'Full Stack Engineer',
    'Senior Full Stack Engineer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'TypeScript Developer',
    'E-commerce Developer',
    'Shopify Developer',
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
    'SaaS Developer'
  ],
  authors: [{ name: 'Matheus Abrahão' }],
  creator: 'Matheus Abrahão',
  publisher: 'Matheus Abrahão',
  category: 'Technology',
  classification: 'Full Stack Development',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://matheusabrahao.com.br',
    title: 'Matheus Abrahão | Senior Full Stack Engineer',
    description: 'Senior Full Stack Engineer with 5+ years experience. Built $90K+ e-commerce platform. React, Next.js, Node.js, TypeScript, Shopify.',
    siteName: 'Matheus Abrahão - Senior Full Stack Engineer',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Matheus Abrahão - Senior Full Stack Engineer Portfolio',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matheus Abrahão | Senior Full Stack Engineer',
    description: 'Senior Full Stack Engineer with 5+ years experience. Built $90K+ e-commerce platform. React, Next.js, Node.js, TypeScript.',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://matheusabrahao.com.br',
  },
  other: {
    'geo.region': 'BR-SP',
    'geo.placename': 'São Paulo',
    'geo.position': '-23.5505;-46.6333',
    'ICBM': '-23.5505, -46.6333',
    'DC.title': 'Matheus Abrahão - Senior Full Stack Engineer Portfolio',
    'DC.creator': 'Matheus Abrahão',
    'DC.subject': 'Full Stack Development, React, Next.js, Node.js, TypeScript, E-commerce',
    'DC.description': 'Senior Full Stack Engineer building production web applications and e-commerce platforms',
    'DC.publisher': 'Matheus Abrahão',
    'DC.contributor': 'Matheus Abrahão',
    'DC.date': '2026',
    'DC.type': 'Text',
    'DC.format': 'text/html',
    'DC.identifier': 'https://matheusabrahao.com.br',
    'DC.language': 'en',
    'DC.coverage': 'World',
    'DC.rights': 'Copyright 2026 Matheus Abrahão',
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

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Matheus Abrahão",
              "jobTitle": "Senior Full Stack Engineer",
              "description": "Senior Full Stack Engineer with 5+ years building production web applications. Built $90K+ e-commerce platform. Expertise in React, Next.js, Node.js, TypeScript, and Shopify.",
              "url": "https://matheusabrahao.com.br",
              "image": "https://matheusabrahao.com.br/profile.jpg",
              "sameAs": [
                "https://github.com/abrahao-dev",
                "https://linkedin.com/in/abrahao-dev"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Virtustant",
                "url": "https://virtustant.com"
              },
              "knowsAbout": [
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Express",
                "REST APIs",
                "GraphQL",
                "PostgreSQL",
                "Prisma",
                "Shopify",
                "Docker",
                "AWS",
                "GCP",
                "CI/CD",
                "E-commerce"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "São Paulo",
                "addressRegion": "SP",
                "addressCountry": "BR"
              },
              "email": "contato.matheusabrahao@gmail.com",
              "telephone": "+55-11-99243-1835"
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Matheus Abrahão - Senior Full Stack Engineer Portfolio",
              "url": "https://matheusabrahao.com.br",
              "description": "Portfolio showcasing Full Stack development projects, e-commerce platforms, and production web applications",
              "author": {
                "@type": "Person",
                "name": "Matheus Abrahão"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://matheusabrahao.com.br/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="antialiased min-h-screen bg-background">
        <ErrorBoundary>
          <LanguageProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange={false}
            >
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