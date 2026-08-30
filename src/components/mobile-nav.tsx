"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useLanguage } from "@/contexts/language-context"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useCallback, useState } from "react"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, language } = useLanguage()

  const navItems = [
    { href: "/", label: language === 'pt-BR' ? "Início" : "Home" },
    { href: "/about", label: t('nav.about') },
    { href: "/shopify-expert", label: "Shopify Expert" },
    { href: "/hire-shopify-developer", label: language === 'pt-BR' ? "Contratar Dev Shopify" : "Hire a Shopify Dev" },
    { href: "/projects", label: t('nav.projects') },
    { href: "/blog", label: t('nav.blog') },
    { href: "/contact", label: t('nav.contact') },
  ]

  const handleLinkClick = useCallback(() => {
    // Small delay so the route transition starts before the sheet animates out
    setTimeout(() => setIsOpen(false), 150)
  }, [])

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden relative z-50 h-10 w-10 touch-manipulation"
          aria-label={language === 'pt-BR' ? 'Abrir menu' : 'Open menu'}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full sm:w-[350px] p-0 border-l border-border/50 bg-background/95 backdrop-blur-xl"
        style={{
          paddingTop: 'env(safe-area-inset-top)',
          paddingBottom: 'env(safe-area-inset-bottom)',
          paddingRight: 'env(safe-area-inset-right)',
        }}
      >
        <SheetTitle className="sr-only">{t('mobile.menu')}</SheetTitle>
        <SheetDescription className="sr-only">
          {language === 'pt-BR' ? 'Menu de navegação principal' : 'Main navigation menu'}
        </SheetDescription>
        <div className="flex flex-col h-full pt-16 pb-8 px-6">
          <nav className="flex-1" aria-label={language === 'pt-BR' ? 'Menu principal' : 'Main menu'}>
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center py-4 px-4 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200 active:scale-[0.98] touch-manipulation"
                    onClick={handleLinkClick}
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="pt-6 border-t border-border/50">
            <p className="text-sm text-muted-foreground text-center">
              © 2026 Matheus Abrahão
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}