import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { blogPosts, getPostBySlug } from '@/lib/blog-posts'
import { ArrowLeft, Calendar, Clock, Github, Linkedin, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const dynamicParams = false

function renderBody(body: string) {
  // Tiny markdown-ish renderer for our authored posts. Supports:
  // - ## heading
  // - inline **bold** and *italic*
  // - inline [text](url)
  // - inline `code`
  // - --- horizontal rules
  // - paragraphs separated by blank lines
  const blocks = body.split(/\n\n+/)

  const renderInline = (text: string) => {
    const nodes: (string | JSX.Element)[] = []
    const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g
    let lastIndex = 0
    let match: RegExpExecArray | null
    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index))
      const token = match[0]
      if (token.startsWith('**')) {
        nodes.push(<strong key={match.index} className="text-foreground font-semibold">{token.slice(2, -2)}</strong>)
      } else if (token.startsWith('`')) {
        nodes.push(
          <code key={match.index} className="px-1.5 py-0.5 rounded bg-secondary/70 text-foreground font-mono text-[0.9em]">
            {token.slice(1, -1)}
          </code>
        )
      } else if (token.startsWith('[')) {
        const linkMatch = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(token)
        if (linkMatch) {
          const [, label, url] = linkMatch
          const internal = url.startsWith('/')
          nodes.push(
            internal ? (
              <Link key={match.index} href={url} className="text-primary hover:underline">{label}</Link>
            ) : (
              <a key={match.index} href={url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{label}</a>
            )
          )
        } else {
          nodes.push(token)
        }
      } else if (token.startsWith('*')) {
        nodes.push(<em key={match.index} className="italic text-foreground">{token.slice(1, -1)}</em>)
      }
      lastIndex = match.index + token.length
    }
    if (lastIndex < text.length) nodes.push(text.slice(lastIndex))
    return nodes
  }

  return blocks.map((block, i) => {
    const trimmed = block.trim()
    if (!trimmed) return null
    if (trimmed === '---') {
      return <hr key={i} className="my-10 border-border/50" />
    }
    if (trimmed.startsWith('## ')) {
      return (
        <h2 key={i} className="mt-12 mb-4 text-2xl sm:text-3xl font-bold tracking-tight">
          {renderInline(trimmed.slice(3))}
        </h2>
      )
    }
    if (trimmed.startsWith('```')) {
      const codeBlock = trimmed.replace(/^```[a-z]*\n?/, '').replace(/```$/, '')
      return (
        <pre key={i} className="my-6 p-4 rounded-xl bg-secondary/40 overflow-x-auto text-sm font-mono leading-relaxed border border-border/50">
          <code>{codeBlock}</code>
        </pre>
      )
    }
    if (trimmed.startsWith('- ')) {
      const items = trimmed.split('\n').map((line) => line.replace(/^- /, ''))
      return (
        <ul key={i} className="my-4 space-y-2 list-disc pl-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {items.map((item, j) => (
            <li key={j}>{renderInline(item)}</li>
          ))}
        </ul>
      )
    }
    return (
      <p key={i} className="my-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
        {renderInline(trimmed)}
      </p>
    )
  })
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const url = `https://www.matheusabrahao.com.br/blog/${post.slug}`
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image ? `https://www.matheusabrahao.com.br${post.image}` : 'https://www.matheusabrahao.com.br/og-image.jpg',
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: 'Matheus Abrahão',
      url: 'https://www.matheusabrahao.com.br',
    },
    publisher: {
      '@type': 'Person',
      name: 'Matheus Abrahão',
      url: 'https://www.matheusabrahao.com.br',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.matheusabrahao.com.br/apple-touch-icon.png',
      },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: post.tags.join(', '),
    inLanguage: 'en',
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.matheusabrahao.com.br' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.matheusabrahao.com.br/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <article className="container mx-auto py-10 px-4 sm:px-6 lg:px-8 max-w-3xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to all articles
      </Link>

      <header className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
          {post.title}
        </h1>
        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{post.description}</p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" /> {formattedDate}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" /> {post.readTime}
          </span>
          <span className="flex items-center gap-1.5">
            By <Link href="/about" className="text-primary hover:underline">Matheus Abrahão</Link>
          </span>
        </div>
      </header>

      <div className="max-w-none">{renderBody(post.body)}</div>

      <Card className="mt-16 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border-primary/20">
        <CardContent className="py-8 px-6 sm:px-8 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold mb-3">Need a senior engineer who thinks like an operator?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            I take on a small number of Shopify operations and senior engineering engagements each quarter. If your store needs catalog hygiene, technical SEO, performance, or marketing automation done right &mdash; let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="h-12 px-8">
              <Link href="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                Get in touch
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8">
              <a href="https://linkedin.com/in/abrahao-dev" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8">
              <a href="https://github.com/abrahao-dev" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Continue reading</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="block p-5 rounded-2xl bg-secondary/10 border border-border/40 hover:border-primary/40 transition-colors"
              >
                <div className="text-xs text-muted-foreground mb-2 flex gap-3">
                  <span>{new Date(p.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span>{p.readTime}</span>
                </div>
                <h3 className="font-semibold leading-tight mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{p.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
