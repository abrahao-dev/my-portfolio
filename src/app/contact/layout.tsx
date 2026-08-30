import type { Metadata } from 'next'

export const metadata: Metadata = {
  // `absolute` skips the root layout's `%s | Matheus Abrahão` template — this
  // title already carries the name, and the template doubled it.
  title: { absolute: 'Contato Matheus Abrahão | Contratar Shopify Expert & Desenvolvedor Shopify' },
  description: 'Entre em contato com Matheus Abrahão para projetos Shopify: desenvolvimento de tema Liquid, Matrixify e operações de catálogo, Klaviyo, otimização de velocidade, SEO técnico e migrações — freelance, contrato ou dedicado. WhatsApp +55 11 98851-2788, contato.matheusabrahao@gmail.com. Remoto de São Paulo (UTC-3), atendendo marcas nos EUA e Canadá.',
  alternates: {
    canonical: 'https://matheusabrahao.com.br/contact',
    languages: {
      'pt-BR': 'https://matheusabrahao.com.br/contact',
      'en': 'https://matheusabrahao.com.br/contact',
      'x-default': 'https://matheusabrahao.com.br/contact',
    },
  },
  openGraph: {
    title: 'Contato Matheus Abrahão | Contratar Shopify Expert',
    description: 'Contrate um Shopify Expert com 6+ anos de plataforma. Liquid, Matrixify, Klaviyo, performance, migrações — remoto, fuso UTC-3, atendendo marcas nos EUA e Canadá.',
    url: 'https://matheusabrahao.com.br/contact',
    locale: 'pt_BR',
    alternateLocale: ['en_US'],
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Contato Matheus Abrahão — Contratar Shopify Expert' }],
  },
  twitter: {
    title: 'Contact Matheus Abrahão | Hire a Shopify Expert',
    description: 'Hire a Shopify expert with 6+ years on the platform. Liquid, Matrixify, Klaviyo, speed, migrations — remote, UTC-3, working with US and Canadian brands.',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
