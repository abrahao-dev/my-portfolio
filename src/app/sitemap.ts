import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://matheusabrahao.com.br'

  // Blog post slugs for individual crawling
  const blogSlugs = [
    { slug: 'scalable-ecommerce-shopify-react', date: '2026-02-10' },
    { slug: 'nextjs-performance-optimization', date: '2026-01-20' },
    { slug: 'ai-features-langchain', date: '2026-01-05' },
    { slug: 'nextjs-14-app-router', date: '2025-12-28' },
    { slug: 'typescript-fullstack-patterns', date: '2025-12-20' },
    { slug: 'docker-cicd-fullstack', date: '2025-12-15' },
  ]

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date('2026-02-24'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2026-02-24'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date('2026-02-24'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-02-24'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2026-02-24'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ]

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
}