"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, Rss } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with SwiftUI in 2026",
    description: "A comprehensive guide to building modern iOS apps with SwiftUI, covering the latest features and best practices.",
    date: "2026-01-15",
    readTime: "8 min read",
    tags: ["SwiftUI", "iOS", "Tutorial"],
    slug: "getting-started-swiftui-2026",
    featured: true,
  },
  {
    id: 2,
    title: "MVVM Architecture in iOS Apps",
    description: "Deep dive into implementing MVVM architecture pattern in your iOS applications for better testability and maintainability.",
    date: "2026-01-10",
    readTime: "12 min read",
    tags: ["Architecture", "MVVM", "Swift"],
    slug: "mvvm-architecture-ios",
    featured: true,
  },
  {
    id: 3,
    title: "Building Widgets with WidgetKit",
    description: "Learn how to create beautiful and functional Home Screen widgets for your iOS apps using WidgetKit.",
    date: "2026-01-05",
    readTime: "10 min read",
    tags: ["WidgetKit", "iOS", "Tutorial"],
    slug: "building-widgets-widgetkit",
    featured: false,
  },
  {
    id: 4,
    title: "SwiftData vs Core Data: Which to Choose?",
    description: "A comparison between Apple's new SwiftData framework and the traditional Core Data for data persistence.",
    date: "2025-12-28",
    readTime: "15 min read",
    tags: ["SwiftData", "Core Data", "Persistence"],
    slug: "swiftdata-vs-coredata",
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
              Get notified when I publish new articles about iOS development, Swift, and mobile engineering.
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
