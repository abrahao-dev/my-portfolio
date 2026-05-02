import { blogPosts } from '@/lib/blog-posts'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://matheusabrahao.com.br'
  const lastUpdate = new Date('2026-05-02')

  const blogSlugs = blogPosts.map((p) => ({ slug: p.slug, date: p.date }))

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: lastUpdate,
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          'pt-BR': baseUrl,
          'en': baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          'pt-BR': `${baseUrl}/about`,
          'en': `${baseUrl}/about`,
        },
      },
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: lastUpdate,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          'pt-BR': `${baseUrl}/projects`,
          'en': `${baseUrl}/projects`,
        },
      },
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: lastUpdate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastUpdate,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/llms.txt`,
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/llms-full.txt`,
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.5,
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