"use client"

import { EMAIL, WHATSAPP_DISPLAY, whatsappLink } from "@/components/seo-landing"
import { useLanguage } from "@/contexts/language-context"
import { Github, Instagram, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const WA = whatsappLink("Hi Matheus, I found your site and I'd like to talk about my Shopify store:")

const SERVICES = [
  { href: "/shopify-expert", label: "Shopify Expert" },
  { href: "/hire-shopify-developer", label: "Hire a Shopify Developer" },
  { href: "/matrixify-expert", label: "Matrixify Expert" },
  { href: "/klaviyo-expert", label: "Klaviyo Expert" },
  { href: "/shopify-speed-optimization", label: "Speed Optimization" },
  { href: "/shopify-migration-expert", label: "Shopify Migration" },
]

const SOCIALS = [
  { href: "https://github.com/abrahao-dev", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/abrahao-dev", icon: Linkedin, label: "LinkedIn" },
  { href: "https://instagram.com/abrahao.dev", icon: Instagram, label: "Instagram" },
  { href: `mailto:${EMAIL}`, icon: Mail, label: "Email" },
]

export function Footer() {
  const { t } = useLanguage()

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
            <h2 className="type-eyebrow text-muted-foreground">Shopify Services</h2>
            <ul className="mt-4 space-y-1">
              {SERVICES.map((item) => (
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
                  className="flex min-h-[44px] items-center break-words text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {EMAIL}
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
