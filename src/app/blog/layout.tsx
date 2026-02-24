import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Matheus Abrahão – Full Stack Engineering Articles & Tutorials',
  description: 'Technical articles on React, Next.js, Shopify, TypeScript, Docker, CI/CD, and AI/ML by Matheus Abrahão. Practical guides for building scalable web applications and e-commerce platforms.',
  alternates: {
    canonical: 'https://matheusabrahao.com.br/blog',
  },
  openGraph: {
    title: 'Blog | Matheus Abrahão – Engineering Articles',
    description: 'Technical articles on React, Next.js, Shopify, TypeScript, Docker, and AI/ML. Practical guides for scalable web applications.',
    url: 'https://matheusabrahao.com.br/blog',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Matheus Abrahão - Engineering Blog' }],
  },
  twitter: {
    title: 'Blog | Matheus Abrahão – Engineering Articles',
    description: 'Technical articles on React, Next.js, Shopify, Docker, and AI/ML by a Senior Full Stack Engineer.',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
