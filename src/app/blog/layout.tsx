import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Matheus Abrahão — Shopify, E-commerce, Full Stack & IA',
  description: 'Artigos técnicos de Matheus Abrahão sobre Shopify Operations, SEO técnico, gestão de catálogo, React, Next.js, TypeScript, Docker, CI/CD e IA/ML. Guias práticos para construir aplicações web escaláveis e plataformas de e-commerce de alto volume.',
  alternates: {
    canonical: 'https://matheusabrahao.com.br/blog',
    languages: {
      'pt-BR': 'https://matheusabrahao.com.br/blog',
      'en': 'https://matheusabrahao.com.br/blog',
      'x-default': 'https://matheusabrahao.com.br/blog',
    },
  },
  openGraph: {
    title: 'Blog | Matheus Abrahão — Shopify, E-commerce & Full Stack',
    description: 'Artigos técnicos sobre Shopify Operations, SEO técnico, catálogo, React, Next.js, TypeScript e IA/ML.',
    url: 'https://matheusabrahao.com.br/blog',
    locale: 'pt_BR',
    alternateLocale: ['en_US'],
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Matheus Abrahão — Engineering & Shopify Blog' }],
  },
  twitter: {
    title: 'Blog | Matheus Abrahão — Shopify, E-commerce & Full Stack',
    description: 'Articles on Shopify Operations, technical SEO, catalog management, React, Next.js, and AI by a Senior Software Engineer & Shopify Operator.',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
