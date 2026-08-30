"use client"

import { LanguageSwitcher } from "@/components/language-switcher"
import { ModeToggle } from "@/components/mode-toggle"
import { EMAIL, WHATSAPP_DISPLAY, whatsappLink } from "@/components/seo-landing"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useLanguage } from "@/contexts/language-context"
import { Menu, MessageCircle } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useState } from "react"

const WA = whatsappLink("Hi Matheus, I found your site and I'd like to talk about my Shopify store:")

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, language } = useLanguage()
  const pathname = usePathname()
  const pt = language === "pt-BR"

  const primary = [
    { href: "/", label: pt ? "Início" : "Home" },
    { href: "/shopify-expert", label: "Shopify Expert" },
    { href: "/hire-shopify-developer", label: pt ? "Contratar Dev Shopify" : "Hire a Shopify Dev" },
    { href: "/klaviyo-expert", label: "Klaviyo Expert" },
    { href: "/matrixify-expert", label: "Matrixify Expert" },
    { href: "/shopify-speed-optimization", label: pt ? "Velocidade" : "Speed Optimization" },
    { href: "/shopify-migration-expert", label: pt ? "Migração" : "Migration" },
  ]

  const secondary = [
    { href: "/about", label: t("nav.about") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/blog", label: t("nav.blog") },
    { href: "/contact", label: t("nav.contact") },
  ]

  const close = useCallback(() => {
    // Small delay so the route transition starts before the sheet animates out
    setTimeout(() => setIsOpen(false), 150)
  }, [])

  const linkClass = (href: string) =>
    `flex min-h-[44px] items-center rounded-xl px-4 py-3 text-[15px] font-medium transition-colors ${
      pathname === href
        ? "bg-secondary text-primary"
        : "text-foreground hover:bg-secondary hover:text-primary"
    }`

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative z-50 h-10 w-10 touch-manipulation"
          aria-label={pt ? "Abrir menu" : "Open menu"}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full border-l border-border bg-background p-0 sm:w-[380px]"
        style={{
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)",
          paddingRight: "env(safe-area-inset-right)",
        }}
      >
        <SheetTitle className="sr-only">{t("mobile.menu")}</SheetTitle>
        <SheetDescription className="sr-only">
          {pt ? "Menu de navegação principal" : "Main navigation menu"}
        </SheetDescription>

        <div className="flex h-full flex-col overflow-y-auto px-5 pb-8 pt-16">
          <nav className="flex-1" aria-label={pt ? "Menu principal" : "Main menu"}>
            <p className="type-eyebrow px-4 pb-2 text-muted-foreground">
              {pt ? "Serviços Shopify" : "Shopify services"}
            </p>
            <ul>
              {primary.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass(item.href)} onClick={close}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="type-eyebrow px-4 pb-2 pt-6 text-muted-foreground">
              {pt ? "Mais" : "More"}
            </p>
            <ul>
              {secondary.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass(item.href)} onClick={close}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 space-y-4 border-t border-border pt-6">
            <Button asChild size="lg" className="h-12 w-full rounded-full">
              <a href={WA} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-[18px] w-[18px]" aria-hidden />
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
            </Button>
            <a
              href={`mailto:${EMAIL}`}
              className="block truncate text-center text-sm text-muted-foreground hover:text-primary"
            >
              {EMAIL}
            </a>
            <div className="flex items-center justify-center gap-2">
              <LanguageSwitcher />
              <ModeToggle />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
