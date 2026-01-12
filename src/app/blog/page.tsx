"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock, Rss } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable E-commerce with Shopify & React",
    description: "A comprehensive guide to building high-performance e-commerce platforms using Shopify Hydrogen, React, and custom checkout logic.",
    date: "2026-01-15",
    readTime: "10 min read",
    tags: ["Shopify", "React", "E-commerce"],
    slug: "scalable-ecommerce-shopify-react",
    featured: true,
  },
  {
    id: 2,
    title: "Full Stack Architecture Patterns for Production",
    description: "Deep dive into implementing scalable architecture patterns for Full Stack applications with React, Node.js, and PostgreSQL.",
    date: "2026-01-10",
    readTime: "12 min read",
    tags: ["Architecture", "Node.js", "React"],
    slug: "fullstack-architecture-patterns",
    featured: true,
  },
  {
    id: 3,
    title: "Building AI-Powered Features with LangChain",
    description: "Learn how to integrate LLMs into your applications using LangChain, LangGraph, and OpenAI for intelligent data processing.",
    date: "2026-01-05",
    readTime: "15 min read",
    tags: ["AI/ML", "LangChain", "Python"],
    slug: "ai-features-langchain",
    featured: false,
  },
  {
    id: 4,
    title: "Next.js 14 App Router: Best Practices",
    description: "A practical guide to leveraging Next.js 14 App Router features for better performance, SEO, and developer experience.",
    date: "2025-12-28",
    readTime: "8 min read",
    tags: ["Next.js", "React", "Performance"],
    slug: "nextjs-14-app-router-best-practices",
    featured: false,
  },
  {
    id: 5,
    title: "TypeScript Patterns for Robust APIs",
    description: "Advanced TypeScript patterns for building type-safe, maintainable REST and GraphQL APIs with Node.js and Express.",
    date: "2025-12-20",
    readTime: "10 min read",
    tags: ["TypeScript", "Node.js", "API"],
    slug: "typescript-patterns-apis",
    featured: false,
  },
  {
    id: 6,
    title: "Docker & CI/CD for Full Stack Projects",
    description: "Set up production-ready Docker containers and CI/CD pipelines with GitHub Actions for your Full Stack applications.",
    date: "2025-12-15",
    readTime: "12 min read",
    tags: ["Docker", "CI/CD", "DevOps"],
    slug: "docker-cicd-fullstack",
    featured: false,
  },
]

export default function Blog() {
  const { t } = useLanguage()

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
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          {t('blog.description')}
        </p>
        <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground">
          <Rss className="h-4 w-4" />
          <span>Subscribe to RSS feed for updates</span>
        </div>
      </motion.div>

      {/* Featured Posts */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-6">Featured Articles</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Card className="h-full bg-gradient-to-br from-primary/5 to-secondary/10 border-primary/20 hover:border-primary/40 transition-all duration-300 group cursor-pointer">
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
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
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* All Posts */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-6">All Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.05 }}
            >
              <Card className="h-full bg-secondary/5 border-border/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer hover:shadow-lg">
                <CardHeader className="pb-2">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Newsletter CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-16 text-center"
      >
        <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border-primary/20">
          <CardContent className="py-8">
            <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Get notified when I publish new articles about Full Stack development, React, Node.js, and web engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
