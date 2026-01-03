"use client"

import { LanguageSwitcher } from "@/components/language-switcher"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { useLanguage } from "@/contexts/language-context"
import { Code } from 'lucide-react'
import Link from 'next/link'

export function Navigation() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <nav className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200 touch-manipulation"
          >
            <Code className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-gradient">Matheus Abrahão</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {[
              { href: '/about', label: t('nav.about') },
              { href: '/projects', label: t('nav.projects') },
              { href: '/blog', label: t('nav.blog') },
              { href: '/contact', label: t('nav.contact') },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center space-x-2">
            <LanguageSwitcher />
            <ModeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-1">
            <LanguageSwitcher />
            <ModeToggle />
            <MobileNav />
          </div>
        </nav>
      </div>
    </header>
  )
}