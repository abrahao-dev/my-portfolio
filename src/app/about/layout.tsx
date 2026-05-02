import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre Matheus Abrahão | Engenheiro de Software Sênior & Shopify Operator',
  description: 'Engenheiro de Software Sênior e Shopify Operator com 5+ anos de experiência na Scale Army, Virtustant, NEX Agency e Martin E-commerce. Especialista em Shopify (Liquid, Matrixify), SEO técnico, gestão de catálogo, automação, React, Next.js, Node.js, Swift e SwiftUI. Vencedor do Apple Swift Student Challenge 2026. Baseado em São Paulo, Brasil — disponível para trabalho remoto global.',
  alternates: {
    canonical: 'https://matheusabrahao.com.br/about',
    languages: {
      'pt-BR': 'https://matheusabrahao.com.br/about',
      'en': 'https://matheusabrahao.com.br/about',
      'x-default': 'https://matheusabrahao.com.br/about',
    },
  },
  openGraph: {
    title: 'Sobre Matheus Abrahão | Engenheiro de Software Sênior & Shopify Operator',
    description: 'Da primeira linha de código (mod em C++ aos 14) até $90K+ como fundador e +455% de crescimento para uma marca de luxo internacional. Conheça a trajetória do engenheiro que pensa como operador.',
    url: 'https://matheusabrahao.com.br/about',
    locale: 'pt_BR',
    alternateLocale: ['en_US'],
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Sobre Matheus Abrahão — Senior Software Engineer & Shopify Operator' }],
  },
  twitter: {
    title: 'Sobre Matheus Abrahão | Senior Software Engineer & Shopify Operator',
    description: 'Engenheiro que pensa como operador. $90K+ como fundador, +455% de sessões para marca de luxo internacional, vencedor do Apple Swift Student Challenge 2026.',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
