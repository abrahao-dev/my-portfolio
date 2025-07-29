import ErrorBoundary from "@/components/error-boundary"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://matheusabrahao.com.br'),
  title: 'Matheus Abrahão - Software Engineer | Full Stack Developer | TypeScript & Golang Expert',
  description: 'Experienced Software Engineer specializing in full-stack development with TypeScript, Golang, Docker, and Cloud technologies. Built scalable e-commerce platforms generating $80K+ revenue. Expert in modern web applications, AI integration, and clean architecture.',
  keywords: [
    'Software Engineer',
    'Full Stack Developer',
    'TypeScript Developer',
    'Golang Developer',
    'React Developer',
    'Next.js Developer',
    'E-commerce Developer',
    'Shopify Developer',
    'AI Integration',
    'Machine Learning',
    'Docker Expert',
    'Cloud Engineer',
    'Freelance Developer',
    'Brazil Developer',
    'São Paulo Developer',
    'Clean Architecture',
    'SOLID Principles',
    'REST API',
    'GraphQL',
    'PostgreSQL',
    'AWS',
    'Vercel',
    'CI/CD',
    'GitHub Actions',
    'OpenAI',
    'LangChain',
    'LLM Integration',
    'RAG Systems',
    'Vector Databases'
  ],
  authors: [{ name: 'Matheus Abrahão' }],
  creator: 'Matheus Abrahão',
  publisher: 'Matheus Abrahão',
  category: 'Technology',
  classification: 'Software Development',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://matheusabrahao.com.br',
    title: 'Matheus Abrahão - Software Engineer | Full Stack Developer',
    description: 'Experienced Software Engineer specializing in full-stack development with TypeScript, Golang, Docker, and Cloud technologies. Built scalable e-commerce platforms generating $80K+ revenue.',
    siteName: 'Matheus Abrahão - Software Engineer',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Matheus Abrahão - Software Engineer Portfolio',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matheus Abrahão - Software Engineer | Full Stack Developer',
    description: 'Experienced Software Engineer specializing in full-stack development with TypeScript, Golang, Docker, and Cloud technologies.',
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
    'DC.title': 'Matheus Abrahão - Software Engineer Portfolio',
    'DC.creator': 'Matheus Abrahão',
    'DC.subject': 'Software Engineering, Full Stack Development, TypeScript, Golang',
    'DC.description': 'Experienced Software Engineer specializing in full-stack development',
    'DC.publisher': 'Matheus Abrahão',
    'DC.contributor': 'Matheus Abrahão',
    'DC.date': '2025',
    'DC.type': 'Text',
    'DC.format': 'text/html',
    'DC.identifier': 'https://matheusabrahao.com.br',
    'DC.language': 'en',
    'DC.coverage': 'World',
    'DC.rights': 'Copyright 2025 Matheus Abrahão',
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
              "jobTitle": "Software Engineer",
              "description": "Experienced Software Engineer specializing in full-stack development with TypeScript, Golang, Docker, and Cloud technologies.",
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
                "Golang",
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
      <body className={inter.className}>
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