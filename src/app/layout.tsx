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
  title: 'Matheus Abrahão - iOS Software Engineer',
  description: 'iOS Software Engineer focused on building and shipping real-world mobile applications. Specialized in Swift, SwiftUI, UIKit, and MVVM with clean architecture and Apple platform best practices.',
  keywords: [
    'iOS Developer',
    'iOS Software Engineer',
    'Swift Developer',
    'SwiftUI Developer',
    'UIKit Developer',
    'Mobile Developer',
    'Apple Developer',
    'MVVM Architecture',
    'Clean Architecture',
    'App Store',
    'Native iOS Apps',
    'iPhone Developer',
    'Combine Framework',
    'SwiftData',
    'Core Data',
    'WidgetKit',
    'Brazil Developer',
    'São Paulo Developer',
    'Remote iOS Developer',
    'Freelance iOS Developer',
    'XCTest',
    'iOS Testing',
    'Mobile App Development'
  ],
  authors: [{ name: 'Matheus Abrahão' }],
  creator: 'Matheus Abrahão',
  publisher: 'Matheus Abrahão',
  category: 'Technology',
  classification: 'iOS Development',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://matheusabrahao.com.br',
    title: 'Matheus Abrahão - iOS Software Engineer',
    description: 'iOS Software Engineer focused on building and shipping real-world mobile applications with Swift, SwiftUI, UIKit, and MVVM.',
    siteName: 'Matheus Abrahão - iOS Software Engineer',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Matheus Abrahão - iOS Software Engineer Portfolio',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matheus Abrahão - iOS Software Engineer',
    description: 'iOS Software Engineer focused on building and shipping real-world mobile applications with Swift, SwiftUI, UIKit, and MVVM.',
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
    'DC.title': 'Matheus Abrahão - iOS Software Engineer Portfolio',
    'DC.creator': 'Matheus Abrahão',
    'DC.subject': 'iOS Development, Swift, SwiftUI, UIKit, Mobile Development',
    'DC.description': 'iOS Software Engineer focused on building native mobile applications',
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
    <html lang="pt-BR" suppressHydrationWarning>
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
              "jobTitle": "Software Engineer",
              "description": "Experienced Software Engineer specializing in full-stack development with TypeScript, Docker, and Cloud technologies.",
              "url": "https://matheusabrahao.com.br",
              "image": "https://matheusabrahao.com.br/profile.jpg",
              "sameAs": [
                "https://github.com/abrahao-dev",
                "https://linkedin.com/in/abrahao-dev",
                "https://www.abrahaolabs.com.br"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Martin4Shop",
                "url": "https://martin4shop.com.br"
              },
              "knowsAbout": [
                "TypeScript",
                "React",
                "Next.js",
                "Docker",
                "AWS",
                "PostgreSQL",
                "Shopify",
                "AI Integration",
                "Machine Learning",
                "Clean Architecture",
                "SOLID Principles"
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
              "name": "Matheus Abrahão - Software Engineer Portfolio",
              "url": "https://matheusabrahao.com.br",
              "description": "Portfolio website showcasing software engineering projects and expertise",
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
      <body className="antialiased">
        <ErrorBoundary>
          <LanguageProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Navigation />
              <main className="container mx-auto mt-8 px-4 min-h-[calc(100vh-8rem)]">
                {children}
              </main>
              <Footer />
            </ThemeProvider>
          </LanguageProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}