import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Matheus Abrahão | Senior Full Stack Engineer | Experience & Skills',
  description: 'Senior Full Stack Engineer with 5+ years of experience at Virtustant, Martin E-commerce, Clecci, Venna, and CLEATUS. Expert in React, Next.js, Node.js, TypeScript, Shopify, and AI/ML systems. Based in São Paulo, Brazil — available for remote work worldwide.',
  alternates: {
    canonical: 'https://matheusabrahao.com.br/about',
  },
  openGraph: {
    title: 'About Matheus Abrahão | Senior Full Stack Engineer',
    description: 'Senior Full Stack Engineer with 5+ years building production web applications at companies in the USA, Canada, Portugal, France, and Brazil.',
    url: 'https://matheusabrahao.com.br/about',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'About Matheus Abrahão - Senior Full Stack Engineer' }],
  },
  twitter: {
    title: 'About Matheus Abrahão | Senior Full Stack Engineer',
    description: 'Senior Full Stack Engineer with 5+ years building production web applications. React, Next.js, Node.js, TypeScript, Shopify.',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
