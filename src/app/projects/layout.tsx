import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Projetos Shopify & E-commerce | Matheus Abrahão' },
  description: 'Projetos em produção de Matheus Abrahão: operação Shopify B2C + B2B em escala enterprise, marca de luxo internacional (+455% sessões, +74% receita), marca americana de beleza (+254% vendas), e a marca própria Martin (1.959 pedidos, ~R$552 mil). Construídos com Shopify Liquid, React, Next.js, Node.js, TypeScript, Python e Go.',
  alternates: {
    canonical: 'https://www.matheusabrahao.com.br/projects',
    languages: {
      'pt-BR': 'https://www.matheusabrahao.com.br/projects',
      'en': 'https://www.matheusabrahao.com.br/projects',
      'x-default': 'https://www.matheusabrahao.com.br/projects',
    },
  },
  openGraph: {
    title: 'Projetos Shopify & E-commerce | Matheus Abrahão',
    description: 'Projetos em produção: e-commerce, sistemas de IA, temas Shopify, automação. Shopify Liquid, React, Next.js, Node.js, TypeScript.',
    url: 'https://www.matheusabrahao.com.br/projects',
    locale: 'pt_BR',
    alternateLocale: ['en_US'],
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Matheus Abrahão — Shopify & E-commerce' }],
  },
  twitter: {
    title: 'Projetos Shopify & E-commerce | Matheus Abrahão',
    description: 'Production projects: e-commerce, AI chatbots, Shopify themes, automation. Shopify Liquid, React, Next.js, Node.js, TypeScript.',
  },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
