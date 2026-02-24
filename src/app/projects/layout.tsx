import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Matheus Abrahão – E-commerce, AI & Full Stack Portfolio',
  description: 'Explore production projects by Matheus Abrahão: $90K+ e-commerce platform, AI chatbots with LangChain, Shopify themes, NFT marketplaces, real-time messaging, and IoT dashboards. Built with React, Next.js, Node.js, TypeScript, Python, and Go.',
  alternates: {
    canonical: 'https://matheusabrahao.com.br/projects',
  },
  openGraph: {
    title: 'Projects | Matheus Abrahão – Full Stack Portfolio',
    description: 'Production projects: e-commerce platforms, AI systems, Shopify themes, and more. Built with React, Next.js, Node.js, TypeScript.',
    url: 'https://matheusabrahao.com.br/projects',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Matheus Abrahão - Full Stack Projects Portfolio' }],
  },
  twitter: {
    title: 'Projects | Matheus Abrahão – Full Stack Portfolio',
    description: 'Production projects: e-commerce, AI chatbots, Shopify themes, real-time messaging. React, Next.js, Node.js, TypeScript.',
  },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
