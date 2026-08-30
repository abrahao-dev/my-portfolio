"use client"

import { LanguageSwitcher } from "@/components/language-switcher"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { whatsappLink } from "@/components/seo-landing"
import { useLanguage } from "@/contexts/language-context"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const WA = whatsappLink("Hi Matheus, I found your site and I'd like to talk about my Shopify store:")

export function Navigation() {
  const { t, language } = useLanguage()
  const pathname = usePathname()

  const items = [
    { href: "/shopify-expert", label: "Shopify Expert" },
    { href: "/klaviyo-expert", label: "Klaviyo" },
    { href: "/matrixify-expert", label: "Matrixify" },
    { href: "/about", label: t("nav.about") },
    { href: "/blog", label: t("nav.blog") },
    { href: "/contact", label: t("nav.contact") },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex min-h-[44px] shrink-0 items-center gap-2 text-[15px] font-bold tracking-tight"
          >
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
            Matheus Abrahão
          </Link>

          <div className="hidden items-center gap-0.5 lg:flex">
            {items.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "text-primary"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-1.5">
            <div className="hidden sm:flex sm:items-center sm:gap-1.5">
              <LanguageSwitcher />
              <ModeToggle />
            </div>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-primary px-4 text-[13px] font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:text-sm"
            >
              {language === "pt-BR" ? "Fale comigo" : "Let's connect"}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </a>
            <div className="lg:hidden">
              <MobileNav />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
