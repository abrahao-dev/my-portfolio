import type { Metadata } from 'next'

export const metadata: Metadata = {
  // `absolute` skips the root layout's `%s | Matheus Abrahão` template — this
  // title already carries the name, and the template doubled it.
  title: { absolute: 'Sobre Matheus Abrahão | Shopify Expert & E-commerce Engineer' },
  description: 'Shopify Expert com 6+ anos operando lojas Shopify, começando pelo próprio e-commerce (Martin, martin4shop.com.br) e chegando a operar lojas para marcas internacionais. Hoje opera lojas B2C e B2B simultâneas em escala enterprise e foi o engenheiro único de uma marca internacional de moda de luxo. Especialista em Shopify Liquid, Matrixify, Salsify PIM, Klaviyo, SEO técnico, performance e migrações. Baseado em São Paulo, Brasil (UTC-3) — atende marcas nos EUA e no Canadá.',
  alternates: {
    canonical: 'https://www.matheusabrahao.com.br/about',
    languages: {
      'pt-BR': 'https://www.matheusabrahao.com.br/about',
      'en': 'https://www.matheusabrahao.com.br/about',
      'x-default': 'https://www.matheusabrahao.com.br/about',
    },
  },
  openGraph: {
    title: 'Sobre Matheus Abrahão | Shopify Expert & E-commerce Engineer',
    description: 'Da própria loja Shopify (Martin, 1.959 pedidos) até operar lojas B2C e B2B em escala enterprise para marcas internacionais e gerar +455% de sessões para uma marca de luxo. Conheça a trajetória do engenheiro que pensa como operador de e-commerce.',
    url: 'https://www.matheusabrahao.com.br/about',
    locale: 'pt_BR',
    alternateLocale: ['en_US'],
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Sobre Matheus Abrahão — Shopify Expert & E-commerce Engineer' }],
  },
  twitter: {
    title: 'Sobre Matheus Abrahão | Shopify Expert & E-commerce Engineer',
    description: '6+ anos de Shopify. Fundador da Martin (1.959 pedidos), +455% de sessões para marca de luxo internacional, operação Shopify B2C e B2B em escala enterprise. Atende marcas nos EUA e Canadá.',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
