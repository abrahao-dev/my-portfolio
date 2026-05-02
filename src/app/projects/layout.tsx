import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projetos | Matheus Abrahão — E-commerce, Shopify, IA & Full Stack',
  description: 'Projetos em produção de Matheus Abrahão: marca Martin com $90K+ em vendas, plataforma de luxo internacional (+455% sessões, +74% receita), chatbot de IA com LangChain para govtech, temas Shopify, marketplaces NFT e dashboards IoT. Construídos com Shopify Liquid, React, Next.js, Node.js, TypeScript, Python e Go.',
  alternates: {
    canonical: 'https://matheusabrahao.com.br/projects',
    languages: {
      'pt-BR': 'https://matheusabrahao.com.br/projects',
      'en': 'https://matheusabrahao.com.br/projects',
      'x-default': 'https://matheusabrahao.com.br/projects',
    },
  },
  openGraph: {
    title: 'Projetos | Matheus Abrahão — Portfólio Full Stack & Shopify',
    description: 'Projetos em produção: e-commerce, sistemas de IA, temas Shopify, automação. Shopify Liquid, React, Next.js, Node.js, TypeScript.',
    url: 'https://matheusabrahao.com.br/projects',
    locale: 'pt_BR',
    alternateLocale: ['en_US'],
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Matheus Abrahão — Portfólio Full Stack & Shopify' }],
  },
  twitter: {
    title: 'Projetos | Matheus Abrahão — Full Stack & Shopify Portfolio',
    description: 'Production projects: e-commerce, AI chatbots, Shopify themes, automation. Shopify Liquid, React, Next.js, Node.js, TypeScript.',
  },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
