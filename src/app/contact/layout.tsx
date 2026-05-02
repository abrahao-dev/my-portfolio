import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato Matheus Abrahão | Contratar Engenheiro de Software & Shopify Operator',
  description: 'Entre em contato com Matheus Abrahão para projetos de Shopify Operations, engenharia full stack, iOS ou IA — freelance, contrato ou posição remota full-time. WhatsApp +55 11 98851-2788, contato.matheusabrahao@gmail.com. Baseado em São Paulo, atendendo globalmente.',
  alternates: {
    canonical: 'https://matheusabrahao.com.br/contact',
    languages: {
      'pt-BR': 'https://matheusabrahao.com.br/contact',
      'en': 'https://matheusabrahao.com.br/contact',
      'x-default': 'https://matheusabrahao.com.br/contact',
    },
  },
  openGraph: {
    title: 'Contato Matheus Abrahão | Contratar Engenheiro & Shopify Operator',
    description: 'Contrate um Engenheiro de Software Sênior e Shopify Operator. Shopify, React, Next.js, iOS, IA — remoto, atendendo globalmente.',
    url: 'https://matheusabrahao.com.br/contact',
    locale: 'pt_BR',
    alternateLocale: ['en_US'],
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Contato Matheus Abrahão — Contratar Engenheiro & Shopify Operator' }],
  },
  twitter: {
    title: 'Contato Matheus Abrahão | Hire a Senior Engineer & Shopify Operator',
    description: 'Hire a Senior Software Engineer and Shopify Operator. Shopify, React, Next.js, iOS, AI — remote worldwide.',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
