"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useLanguage } from "@/contexts/language-context"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState, useCallback } from "react"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: t('nav.about') },
    { href: "/projects", label: t('nav.projects') },
    { href: "/blog", label: t('nav.blog') },
    { href: "/contact", label: t('nav.contact') },
  ]

  const handleLinkClick = useCallback(() => {
    // Small delay to allow animation before closing
    setTimeout(() => setIsOpen(false), 150)
  }, [])

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden relative z-50 h-10 w-10 touch-manipulation"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full sm:w-[350px] p-0 border-l border-border/50 bg-background/95 backdrop-blur-xl"
      >
        <div className="flex flex-col h-full pt-16 pb-8 px-6">
          {/* Navigation Links */}
          <nav className="flex-1">
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

          {/* Footer Info */}
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