"use client"

import {
  EMAIL,
  HEADLINE_PROOF,
  STORES,
  StackStrip,
  WHATSAPP_DISPLAY,
  whatsappLink,
} from "@/components/seo-landing"
import { Button } from "@/components/ui/button"
import { useLanguage, type Language } from "@/contexts/language-context"
import { ArrowUpRight, Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCallback, useState } from "react"

/**
 * Home-page copy that is data, not prose: the WhatsApp prefill and the proof
 * numbers. Kept as a per-language record rather than t() keys because a
 * missing language here is a TypeScript error, while a missing t() key only
 * shows up as a raw key printed on the page.
 */
const COPY: Record<Language, { waText: string; serviceCta: string; proofNote: string }> = {
  en: {
    waText: "Hi Matheus, I found your site. I'd like to talk about my Shopify store:",
    serviceCta: "See how it works",
    proofNote: "Four stores, four verticals, the same operational playbook behind the growth.",
  },
  "pt-BR": {
    waText: "Oi Matheus, achei seu site. Queria falar sobre a minha loja Shopify:",
    serviceCta: "Ver detalhes",
    proofNote:
      "Quatro lojas, quatro segmentos, o mesmo trabalho de operação por trás do crescimento.",
  },
}

type Store = (typeof STORES)[number]

/**
 * The four client cards under the services grid.
 *
 * `STORES` and `HEADLINE_PROOF` in seo-landing.tsx are written for the
 * English-only SEO landing pages, so the pt-BR home needs its own copy —
 * including the number formatting (1.959, not 1,959).
 */
const PROOF: Record<Language, { headline: typeof HEADLINE_PROOF; stores: Store[] }> = {
  en: { headline: HEADLINE_PROOF, stores: STORES },
  "pt-BR": {
    headline: [
      {
        value: "B2C + B2B",
        unit: "lojas",
        label: "operação Shopify que opero hoje, ponta a ponta",
      },
      { value: "+455%", unit: "sessões", label: "marca internacional de moda de luxo" },
      { value: "+254%", unit: "vendas", label: "marca de beleza e lifestyle dos EUA" },
    ],
    stores: [
      {
        name: "Fabricante americana de material de construção",
        role: "Operação do dia a dia, lojas B2C + B2B",
        metrics: [
          { value: "2", label: "lojas (B2C + B2B)" },
          { value: "7+", label: "canais de venda" },
          { value: "PIM", label: "catálogo sindicalizado no Salsify" },
        ],
      },
      {
        name: "Marca internacional de moda de luxo",
        role: "Engenheiro único",
        metrics: [
          { value: "+455%", label: "sessões" },
          { value: "+114%", label: "pedidos" },
          { value: "+74%", label: "faturamento" },
        ],
      },
      {
        name: "Marca americana de beleza e lifestyle",
        role: "Assumi a operação",
        metrics: [
          { value: "+254%", label: "vendas totais" },
          { value: "+324%", label: "pedidos" },
          { value: "+1.700%", label: "sessões" },
        ],
      },
      {
        name: "Martin — minha própria marca",
        role: "Fundador e operador",
        metrics: [
          { value: "1.959", label: "pedidos" },
          { value: "~R$552 mil", label: "processados" },
          { value: "299 mil", label: "sessões" },
        ],
      },
    ],
  },
}

/**
 * Services written for a store owner, not a developer.
 * Each card leads with the problem, in the words the owner would use.
 */
const SERVICES = {
  en: [
    {
      href: "/shopify-speed-optimization",
      tag: "Speed & conversion",
      problem: "Your store is slow and you are losing sales",
      body: "Pages that take four seconds to load quietly cost you orders every day. I find what is dragging the store down — apps, images, theme code — and fix it, and you see it in the checkout numbers.",
    },
    {
      href: "/klaviyo-expert",
      tag: "Klaviyo email & SMS",
      problem: "Your emails are not bringing anyone back",
      body: "Abandoned carts, welcome sequences, win-backs. Email should be a fifth to a third of your revenue. When it is not, it is almost never the copy — it is the setup underneath it.",
    },
    {
      href: "/shopify-seo-expert",
      tag: "SEO & AI search",
      problem: "Google barely shows your store, and AI never mentions it",
      body: "Shopify quietly creates duplicate URLs, thin collection pages and canonicals that fight each other. I fix what is keeping pages out of the index, then make the store readable to ChatGPT, Perplexity and AI Overviews so it gets named when someone asks for a recommendation.",
    },
    {
      href: "/matrixify-expert",
      tag: "Catalog operations",
      problem: "Updating your catalog eats your whole week",
      body: "Thousands of products, prices and variants changed safely in bulk instead of one at a time. Nobody on your team should be editing products by hand at midnight.",
    },
    {
      href: "/shopify-migration-expert",
      tag: "Migration",
      problem: "You need to move to Shopify without losing Google",
      body: "Coming off WooCommerce, Magento or Wix. Products, customers, orders — and the part most people get wrong, your search rankings, with every redirect in place.",
    },
    {
      href: "/shopify-expert",
      tag: "Shopify development",
      problem: "Your theme cannot do what the business needs",
      body: "Custom sections, B2B pricing, bundles, subscriptions, wholesale portals. Built properly into your theme instead of stacked as five more apps that slow the store down.",
    },
    {
      href: "/hire-shopify-developer",
      tag: "Ongoing support",
      problem: "You just need a reliable person on call",
      body: "Ongoing hours for the things that keep coming up — a broken app, a launch, a report nobody can pull. The same person every time, who already knows your store.",
    },
  ],
  "pt-BR": [
    {
      href: "/shopify-speed-optimization",
      tag: "Velocidade e conversão",
      problem: "Sua loja está lenta e perde venda",
      body: "Página que demora quatro segundos para abrir custa pedido todo dia, em silêncio. Eu descubro o que está travando a loja — apps, imagens, código do tema — e arrumo. Isso aparece no número do checkout.",
    },
    {
      href: "/klaviyo-expert",
      tag: "Klaviyo e-mail e SMS",
      problem: "Seus e-mails não trazem ninguém de volta",
      body: "Carrinho abandonado, boas-vindas, recuperação de cliente. E-mail deveria ser de um quinto a um terço do seu faturamento. Se não é, quase nunca é o texto — é a estrutura por baixo.",
    },
    {
      href: "/shopify-seo-expert",
      tag: "SEO e busca com IA",
      problem: "O Google mal mostra sua loja, e a IA nunca cita ela",
      body: "O Shopify cria URL duplicada, página de coleção vazia e canonical brigando entre si sem você perceber. Eu corrijo o que está mantendo páginas fora do índice e depois deixo a loja legível para ChatGPT, Perplexity e AI Overviews, para ela ser citada quando alguém pede recomendação.",
    },
    {
      href: "/matrixify-expert",
      tag: "Operação de catálogo",
      problem: "Atualizar o catálogo consome a semana inteira",
      body: "Milhares de produtos, preços e variantes alterados em massa com segurança, em vez de um por um. Ninguém do seu time deveria editar produto na mão de madrugada.",
    },
    {
      href: "/shopify-migration-expert",
      tag: "Migração",
      problem: "Precisa migrar para o Shopify sem perder o Google",
      body: "Saindo de WooCommerce, Magento ou Wix. Produtos, clientes, pedidos — e a parte que quase todo mundo erra, seu posicionamento na busca, com todos os redirects certos.",
    },
    {
      href: "/shopify-expert",
      tag: "Desenvolvimento Shopify",
      problem: "Seu tema não faz o que o negócio precisa",
      body: "Seções sob medida, preço B2B, kits, assinatura, portal de atacado. Feito direito dentro do tema, em vez de empilhar mais cinco apps que deixam a loja lenta.",
    },
    {
      href: "/hire-shopify-developer",
      tag: "Suporte contínuo",
      problem: "Você só quer alguém de confiança à disposição",
      body: "Horas contínuas para o que sempre aparece — um app quebrado, um lançamento, um relatório que ninguém consegue tirar. Sempre a mesma pessoa, que já conhece sua loja.",
    },
  ],
} as const

/**
 * Hero photo slot. `public/profile.jpg` is 1003x1254 — a 4:5 portrait, which is
 * why the frame below is `aspect-[4/5]`. Swapping in a differently-shaped photo
 * means changing that ratio too, or `object-cover` will crop it. Set to null to
 * fall back to the monogram card, which has identical dimensions.
 */
const PORTRAIT_SRC: string | null = "/profile.jpg"

function HeroPortrait() {
  const { t } = useLanguage()
  // Belt and braces: if the file at PORTRAIT_SRC ever 404s or is unreadable,
  // fall back to the monogram instead of a broken glyph.
  const [ok, setOk] = useState(true)
  const check = useCallback((el: HTMLImageElement | null) => {
    if (el?.complete && el.naturalWidth === 0) setOk(false)
  }, [])

  return (
    <div className="relative mx-auto w-full max-w-[320px] lg:max-w-none">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 scale-110 rounded-[2rem] bg-[radial-gradient(60%_55%_at_50%_45%,hsl(var(--brand)/0.45),transparent_70%)] blur-2xl"
      />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border bg-secondary">
        {PORTRAIT_SRC && ok ? (
          <Image
            ref={check}
            src={PORTRAIT_SRC}
            alt={t("home.portrait.alt")}
            fill
            sizes="(max-width: 1024px) 320px, 440px"
            priority
            onError={() => setOk(false)}
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[linear-gradient(155deg,hsl(var(--secondary)),hsl(var(--card)))]">
            <span className="text-7xl font-bold tracking-tighter text-primary">MA</span>
            <span className="type-eyebrow text-muted-foreground">Matheus Abrahão</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Home() {
  const { t, language } = useLanguage()
  const copy = COPY[language]
  const wa = whatsappLink(copy.waText)
  const services = SERVICES[language]
  const { headline, stores } = PROOF[language]

  const proof = [
    ...headline,
    {
      value: "6+",
      unit: language === "pt-BR" ? "anos" : "years",
      label: t("home.stats.years"),
    },
  ]

  // The headline always opens with "Shopify"; paint it in the accent colour.
  const title = t("home.title")
  const titleRest = title.startsWith("Shopify") ? title.slice("Shopify".length) : ` ${title}`

  return (
    <div className="relative">
      {/* ---------- Hero ---------- */}
      <section className="brand-glow relative overflow-hidden px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
        <div aria-hidden className="grid-texture pointer-events-none absolute inset-0 -z-10" />

        <div className="mx-auto max-w-content">
          {/* Status pill left, connect pill right */}
          <div className="flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              {t("home.badge")}
            </span>

            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:text-sm"
            >
              {t("home.cta.contact")}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>

          {/* No entry animation on the hero: it is the LCP element and must be
              painted by the server, not revealed by JavaScript. */}
          <div className="mt-10 grid items-center gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <p className="type-eyebrow text-primary">{t("home.subtitle")}</p>

              <h1 className="type-hero mt-5 text-foreground">
                <span className="text-primary">Shopify</span>
                {titleRest}
              </h1>

              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {t("home.description")}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 rounded-full px-7 text-[15px]">
                  <a href={wa} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-[18px] w-[18px]" aria-hidden />
                    WhatsApp {WHATSAPP_DISPLAY}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-full px-7 text-[15px]"
                >
                  <Link href="/shopify-expert">
                    {t("home.cta.projects")}
                    <ArrowUpRight className="ml-2 h-[18px] w-[18px]" aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4">
              <HeroPortrait />
            </div>
          </div>

          {/* Headline numbers — value and label stack, so nothing can collide */}
          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 lg:mt-16 lg:grid-cols-4">
            {proof.map((p) => (
              <div key={p.label}>
                <dd className="flex flex-wrap items-baseline gap-x-2">
                  <span className="tabular text-3xl font-bold leading-none text-primary sm:text-4xl">
                    {p.value}
                  </span>
                  <span className="text-sm text-muted-foreground">{p.unit}</span>
                </dd>
                <dt className="mt-2 text-sm leading-snug text-muted-foreground">{p.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <StackStrip label={t("home.skills.title")} />

      {/* ---------- Services, in plain language ---------- */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-content">
          <div className="max-w-2xl">
            <h2 className="type-section">{t("home.services.title")}</h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              {t("home.services.subtitle")}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex flex-col bg-card p-6 transition-colors hover:bg-secondary/60 sm:p-7"
              >
                <span className="type-eyebrow text-primary">{s.tag}</span>
                <h3 className="mt-3 text-lg font-semibold leading-snug">{s.problem}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  {copy.serviceCta}
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Same layout as <ProofBand> in seo-landing.tsx, but fed localized store
          data — that component hardcodes the English STORES array. If it ever
          grows a `stores` prop, delete this block and go back to using it. */}
      <section className="border-y border-border bg-secondary/25 px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-content">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {stores.map((store) => (
              <div key={store.name} className="bg-card p-5 sm:p-6">
                <p className="text-sm font-semibold leading-snug text-foreground">{store.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{store.role}</p>
                <dl className="mt-4">
                  {store.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="flex items-baseline justify-between gap-4 border-t border-border/70 py-2.5"
                    >
                      <dt className="text-xs leading-snug text-muted-foreground">{m.label}</dt>
                      <dd className="tabular whitespace-nowrap text-lg font-bold leading-none text-primary sm:text-xl">
                        {m.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted-foreground sm:text-center">{copy.proofNote}</p>
        </div>
      </section>

      {/* ---------- Closing pitch ---------- */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="brand-glow relative mx-auto max-w-content overflow-hidden rounded-3xl border border-border bg-card p-7 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <h2 className="type-display">{t("home.connect.title")}</h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {t("home.connect.subtitle")}
              </p>
            </div>

            <div className="lg:col-span-5">
              <p className="text-lg font-semibold">{t("home.cta.title")}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t("home.cta.desc")}
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <Button asChild size="lg" className="h-12 rounded-full px-7 text-[15px]">
                  <a href={wa} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-[18px] w-[18px]" aria-hidden />
                    WhatsApp {WHATSAPP_DISPLAY}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 max-w-full rounded-full px-7 text-[15px]"
                >
                  <a href={`mailto:${EMAIL}`}>
                    <Mail className="mr-2 h-[18px] w-[18px] shrink-0" aria-hidden />
                    <span className="truncate">{EMAIL}</span>
                  </a>
                </Button>
              </div>

              <div className="mt-6 flex items-center gap-2">
                {[
                  { href: "https://github.com/abrahao-dev", icon: Github, label: "GitHub" },
                  { href: "https://linkedin.com/in/abrahao-dev", icon: Linkedin, label: "LinkedIn" },
                  { href: "https://instagram.com/abrahao.dev", icon: Instagram, label: "Instagram" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    <s.icon className="h-[18px] w-[18px]" aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
