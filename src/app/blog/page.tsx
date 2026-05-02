"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { blogPosts } from "@/lib/blog-posts"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock, Rss } from "lucide-react"
import Link from "next/link"

export default function Blog() {
  const { t, language } = useLanguage()

  const featured = blogPosts.filter((p) => p.featured)
  const all = blogPosts

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
          <span className="text-gradient">{t('blog.title')}</span>
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
          {t('blog.subtitle')}
        </p>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-6">
          {t('blog.description')}
        </p>
        <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground">
          <Rss className="h-4 w-4" />
          <span>{t('blog.subscribe')}</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-6">{t('blog.featured')}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featured.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="block h-full group">
                <Card className="h-full bg-gradient-to-br from-primary/5 to-secondary/10 border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer">
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString(language === 'pt-BR' ? 'pt-BR' : 'en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-primary group-hover:gap-2 transition-all">
                        {t('blog.readmore')} <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-6">{t('blog.all')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {all.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.05 }}
            >
              <Link href={`/blog/${post.slug}`} className="block h-full group">
                <Card className="h-full bg-secondary/5 border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer hover:shadow-lg">
                  <CardHeader className="pb-2">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.description}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString(language === 'pt-BR' ? 'pt-BR' : 'en-US', {
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-16 text-center"
      >
        <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border-primary/20">
          <CardContent className="py-8">
            <h3 className="text-xl font-semibold mb-2">{t('blog.newsletter.title')}</h3>
            <p className="text-muted-foreground mb-6">{t('blog.newsletter.desc')}</p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                const input = (e.currentTarget.elements.namedItem('email') as HTMLInputElement)
                if (input?.value) {
                  window.location.href = `mailto:contato.matheusabrahao@gmail.com?subject=Newsletter%20signup&body=${encodeURIComponent(input.value)}`
                }
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                name="email"
                required
                placeholder={t('blog.newsletter.placeholder')}
                className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                {t('blog.newsletter.cta')}
              </button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
