import { getPostBySlug, getAllPostSlugs } from '@/lib/blog-posts'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = { params: { slug: string }; children: React.ReactNode }

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  const url = `https://matheusabrahao.com.br/blog/${post.slug}`
  const image = post.image ?? '/og-image.jpg'

  return {
    title: `${post.title} | Matheus Abrahão`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: 'Matheus Abrahão', url: 'https://matheusabrahao.com.br' }],
    alternates: {
      canonical: url,
      languages: {
        'pt-BR': url,
        'en': url,
        'x-default': url,
      },
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url,
      locale: 'pt_BR',
      alternateLocale: ['en_US'],
      publishedTime: new Date(post.date).toISOString(),
      authors: ['Matheus Abrahão'],
      tags: post.tags,
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: '@abrahao_dev',
      images: [image],
    },
  }
}

export default function BlogPostLayout({ params, children }: Props) {
  if (!getPostBySlug(params.slug)) notFound()
  return children
}
