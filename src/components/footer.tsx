"use client"

import { EMAIL, WHATSAPP_DISPLAY, whatsappLink } from "@/components/seo-landing"
import { Language, useLanguage } from "@/contexts/language-context"
import { Github, Instagram, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

// Resolved inside the component, not at module scope: a module-level constant
// cannot read `language`, so pt-BR visitors were handed an English prefill.
const WA_INTRO: Record<Language, string> = {
  en: "Hi Matheus, I found your site and I'd like to talk about my Shopify store:",
  "pt-BR": "Oi Matheus, achei seu site. Queria falar sobre a minha loja Shopify:",
}

// Labels go through t() — these were hardcoded English while the mobile nav
// translated the same six links, so the two navs disagreed on pt-BR.
const SERVICES = [
  { href: "/shopify-expert", key: "services.shopify" },
  { href: "/shopify-seo-expert", key: "services.seo" },
  { href: "/hire-shopify-developer", key: "services.hire" },
  { href: "/matrixify-expert", key: "services.matrixify" },
  { href: "/klaviyo-expert", key: "services.klaviyo" },
  { href: "/shopify-speed-optimization", key: "services.speed" },
  { href: "/shopify-migration-expert", key: "services.migration" },
] as const

const SOCIALS = [
  { href: "https://github.com/abrahao-dev", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/abrahao-dev", icon: Linkedin, label: "LinkedIn" },
  { href: "https://instagram.com/abrahao.dev", icon: Instagram, label: "Instagram" },
  { href: `mailto:${EMAIL}`, icon: Mail, label: "Email" },
]

export function Footer() {
  const { t, language } = useLanguage()
  const WA = whatsappLink(WA_INTRO[language] ?? WA_INTRO.en)

  return (
    <footer className="border-t border-border bg-secondary/25 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4">
            <p className="flex items-center gap-2 text-base font-bold tracking-tight">
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
              {t("footer.title")}
            </p>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">{t("footer.subtitle")}</p>
            <div className="mt-5 flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <s.icon className="h-[18px] w-[18px]" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h2 className="type-eyebrow text-muted-foreground">{t("footer.services")}</h2>
            <ul className="mt-4 space-y-1">
              {SERVICES.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex min-h-[44px] items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site */}
          <div className="lg:col-span-2">
            <h2 className="type-eyebrow text-muted-foreground">{t("footer.quicklinks")}</h2>
            <ul className="mt-4 space-y-1">
              {[
                { href: "/about", label: t("nav.about") },
                { href: "/projects", label: t("nav.projects") },
                { href: "/blog", label: t("nav.blog") },
                { href: "/contact", label: t("nav.contact") },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex min-h-[44px] items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h2 className="type-eyebrow text-muted-foreground">{t("footer.connect")}</h2>
            <ul className="mt-4 space-y-1">
              <li>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[44px] items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  WhatsApp {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex min-h-[44px] items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {/* The address is one unbreakable token wider than the column.
                      `break-words` on the flex container never applied to the
                      anonymous text item; the item also needs min-w-0 before it
                      is allowed to shrink at all. */}
                  <span className="min-w-0 break-all">{EMAIL}</span>
                </a>
              </li>
              <li className="pt-1 text-sm text-muted-foreground">São Paulo, Brazil · UTC-3</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">{t("footer.copyright")}</p>
          <nav aria-label={t("footer.legal")} className="flex items-center gap-5 text-sm">
            <Link
              href="/privacy-policy"
              className="inline-flex min-h-[44px] items-center text-muted-foreground transition-colors hover:text-primary"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              href="/cookie-policy"
              className="inline-flex min-h-[44px] items-center text-muted-foreground transition-colors hover:text-primary"
            >
              {t("footer.cookies")}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
