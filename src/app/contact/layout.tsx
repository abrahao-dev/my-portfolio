import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Matheus Abrahão | Hire a Senior Full Stack Developer',
  description: 'Get in touch with Matheus Abrahão for full stack development projects, freelance work, or full-time remote opportunities. Expert in React, Next.js, Node.js, Shopify, and AI systems. Based in São Paulo, available worldwide.',
  alternates: {
    canonical: 'https://matheusabrahao.com.br/contact',
  },
  openGraph: {
    title: 'Contact Matheus Abrahão | Hire a Full Stack Developer',
    description: 'Hire a Senior Full Stack Engineer for React, Next.js, Shopify, or AI projects. Available for remote work worldwide.',
    url: 'https://matheusabrahao.com.br/contact',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Contact Matheus Abrahão - Hire a Full Stack Developer' }],
  },
  twitter: {
    title: 'Contact Matheus Abrahão | Hire a Full Stack Developer',
    description: 'Hire a Senior Full Stack Engineer for React, Next.js, Shopify, or AI projects. São Paulo, Brazil — remote worldwide.',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
