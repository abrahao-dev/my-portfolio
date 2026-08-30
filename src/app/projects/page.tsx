"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { TiltCard } from "@/components/ui/tilt-card"
import { useLanguage } from "@/contexts/language-context"
import { AnimatePresence, motion } from "framer-motion"
import { ExternalLink, Github, ShoppingBag, Sparkles, TrendingUp } from "lucide-react"
import { useState } from "react"

type Project = {
  titleEn: string
  titlePt: string
  problemEn: string
  problemPt: string
  solutionEn: string
  solutionPt: string
  impactEn: string
  impactPt: string
  tags: string[]
  link?: string
  demoLink?: string
  hasCode?: boolean
  hasDemo?: boolean
  featured?: boolean
}

const projects: Project[] = [
  {
    titleEn: "US Building-Products Manufacturer — B2C + B2B Shopify Operations",
    titlePt: "Fabricante Americana de Construção — Operação Shopify B2C + B2B",
    problemEn: "Two Shopify storefronts (consumer and wholesale) sharing one physical catalog of 2,800+ products and 13,000+ variants, feeding 7+ sales channels — with MAP/MSRP pricing rules that cannot drift and separate product IDs per store.",
    problemPt: "Duas lojas Shopify (consumidor e atacado) compartilhando um catálogo físico de 2.800+ produtos e 13.000+ variantes, alimentando 7+ canais de venda — com regras de preço MAP/MSRP que não podem divergir e IDs de produto separados por loja.",
    solutionEn: "Operate both storefronts end to end: Matrixify bulk catalog workflows keyed on SKU across stores, MAP/MSRP pricing governance, Shopify Flow automation, Search & Discovery, Markets, and retail syndication through Salsify PIM to Lowe's, Home Depot US & Canada, Menards, Amazon Seller and Vendor Central. Built a Python inventory pipeline replacing an 18MB 48-tab Excel macro.",
    solutionPt: "Opero as duas lojas ponta a ponta: fluxos de catálogo em massa via Matrixify chaveados por SKU entre lojas, governança de preços MAP/MSRP, automação com Shopify Flow, Search & Discovery, Markets e sindicalização de catálogo via Salsify PIM para Lowe's, Home Depot EUA e Canadá, Menards, Amazon Seller e Vendor Central. Construí um pipeline de inventário em Python que substitui uma macro Excel de 18MB e 48 abas.",
    impactEn: "Two storefronts kept correct at the same time: one enterprise-scale catalog with multi-level variants, MAP/MSRP pricing that never drifts across 7+ channels, and product data accepted by every major retail partner from a single source of truth.",
    impactPt: "Duas lojas mantidas corretas ao mesmo tempo: um catálogo em escala enterprise com variantes multinível, preços MAP/MSRP que não divergem entre 7+ canais e dados de produto aceitos por todos os grandes varejistas a partir de uma única fonte de verdade.",
    tags: ["Shopify Plus", "Matrixify", "B2B Wholesale", "Salsify PIM", "Retail Syndication", "Amazon", "Python", "MAP Pricing"],
    featured: true,
  },
  {
    titleEn: "International Luxury Fashion Brand — Shopify Plus",
    titlePt: "Marca Internacional de Moda de Luxo — Shopify Plus",
    problemEn: "A large-scale luxury catalog with multi-level variants needed reliability, technical SEO, Core Web Vitals and multi-channel operations — with a single engineer owning all of it.",
    problemPt: "Um catálogo de luxo de larga escala com variantes multi-nível precisava de confiabilidade, SEO técnico, Core Web Vitals e operações multicanal — com um único engenheiro responsável por tudo.",
    solutionEn: "Sole engineer: custom Liquid components for Core Web Vitals, JSON-LD schema emitted from product metafields, llms.txt for AI search readiness, omnichannel integrations (Amazon Seller Central, Google Merchant Center, Meta CAPI/Pixel) and Klaviyo automation flows.",
    solutionPt: "Engenheiro único: componentes Liquid customizados para Core Web Vitals, schema JSON-LD emitido a partir de metafields de produto, llms.txt para prontidão em busca com IA, integrações omnichannel (Amazon Seller Central, Google Merchant Center, Meta CAPI/Pixel) e fluxos de automação Klaviyo.",
    impactEn: "+455% platform sessions, +114% orders, +74% total sales — compounding wins across technical SEO, catalog hygiene, performance and marketing automation.",
    impactPt: "+455% de sessões, +114% de pedidos, +74% em vendas totais — ganhos compostos em SEO técnico, higiene de catálogo, performance e automação de marketing.",
    tags: ["Shopify Plus", "Liquid", "Klaviyo", "Meta CAPI", "Google Merchant", "Technical SEO", "Core Web Vitals"],
    featured: true,
  },
  {
    titleEn: "US Beauty & Lifestyle Brand — Shopify Growth",
    titlePt: "Marca Americana de Beleza & Lifestyle — Crescimento Shopify",
    problemEn: "A quiet Shopify store with an incoherent catalog, silently rejecting product feeds, no discovery layer and unreliable analytics — technically live, commercially invisible.",
    problemPt: "Uma loja Shopify parada, com catálogo incoerente, feeds de produto sendo rejeitados em silêncio, sem camada de descoberta e analytics não confiável — tecnicamente no ar, comercialmente invisível.",
    solutionEn: "Normalized the entire catalog through Matrixify (types, vendors, handles, Google Shopping fields, SEO titles/descriptions, tags), fixed Merchant Center disapprovals by class, then layered Google & YouTube, Meta, Pinterest, Shopify Collective, Flow, Search & Discovery and Markets.",
    solutionPt: "Normalizei todo o catálogo via Matrixify (tipos, vendors, handles, campos Google Shopping, SEO title/description, tags), corrigi as reprovações do Merchant Center por classe e então adicionei Google & YouTube, Meta, Pinterest, Shopify Collective, Flow, Search & Discovery e Markets.",
    impactEn: "US$207.3K in total sales (+254%), 157 orders (+324%) and 51.5K sessions (+1,700%) in 12 months — no redesign, no rebrand.",
    impactPt: "US$207,3K em vendas totais (+254%), 157 pedidos (+324%) e 51,5K sessões (+1.700%) em 12 meses — sem redesign, sem rebranding.",
    tags: ["Shopify", "Matrixify", "Google Merchant Center", "Pinterest", "Search & Discovery", "Markets", "Technical SEO"],
    featured: true,
  },
  {
    titleEn: "Martin — Founder E-commerce Brand",
    titlePt: "Martin — Marca de E-commerce Própria",
    problemEn: "Build a profitable men's fashion brand from zero, owning every layer: technical, brand, content, and operations. This is where the six-plus years of Shopify started.",
    problemPt: "Construir uma marca de moda masculina lucrativa do zero, com ownership total: técnico, marca, conteúdo e operações. Foi aqui que começaram os 6+ anos de Shopify.",
    solutionEn: "Designed and operated the full stack on Shopify/Liquid + Hydrogen + Remix + Tailwind. Built custom checkout logic, internal tooling, marketing integrations, inventory automation, and content (TikTok, Instagram).",
    solutionPt: "Projetei e operei toda a stack em Shopify/Liquid + Hydrogen + Remix + Tailwind. Construí lógica de checkout customizada, ferramentas internas, integrações de marketing, automação de inventário e conteúdo (TikTok, Instagram).",
    impactEn: "1,959 orders, ~R$552,000 processed and 299,000+ sessions since 2023. TikTok grown to 51K followers and 500K+ likes; individual videos at 1.7M+ views — all solo.",
    impactPt: "1.959 pedidos, ~R$552.000 processados e 299.000+ sessões desde 2023. TikTok com 51K seguidores e 500K+ curtidas; vídeos individuais com 1,7M+ visualizações — tudo solo.",
    tags: ["Shopify", "Hydrogen", "Remix", "React", "Tailwind CSS", "E-commerce", "Founder"],
    demoLink: "https://martin4shop.com.br",
    hasDemo: true,
    featured: true,
  },
  {
    titleEn: "AlerteHit — Pokémon TCG Headless Storefront (France)",
    titlePt: "AlerteHit — Storefront Headless Pokémon TCG (França)",
    problemEn: "International e-commerce project for the Pokémon TCG market needed a custom, performant, headless storefront.",
    problemPt: "Projeto internacional de e-commerce para o mercado de Pokémon TCG precisava de um storefront headless customizado e performático.",
    solutionEn: "Custom React-based frontend on Shopify Hydrogen + Remix, Storefront API integration for product/collection/checkout flows, and interactive Three.js visuals.",
    solutionPt: "Frontend React customizado em Shopify Hydrogen + Remix, integração com Storefront API para fluxos de produto/coleção/checkout e visuais interativos com Three.js.",
    impactEn: "Visually differentiated headless storefront with strong performance and scalability for a niche international market.",
    impactPt: "Storefront headless visualmente diferenciado com forte performance e escalabilidade para um mercado internacional de nicho.",
    tags: ["Shopify Hydrogen", "Remix", "React", "Three.js", "Storefront API"],
    featured: true,
  },
  {
    titleEn: "Venna — Shopify Conversion Engineering (Portugal)",
    titlePt: "Venna — Engenharia de Conversão Shopify (Portugal)",
    problemEn: "Shopify store needed conversion-focused engineering and personalized checkout experiences.",
    problemPt: "Loja Shopify precisava de engenharia focada em conversão e experiências de checkout personalizadas.",
    solutionEn: "Advanced Liquid customizations, dynamic upsell flows, personalized checkout, and multi-channel automation via Mailchimp, Zapier, and Wati.io (WhatsApp).",
    solutionPt: "Customizações avançadas em Liquid, fluxos dinâmicos de upsell, checkout personalizado e automação multicanal via Mailchimp, Zapier e Wati.io (WhatsApp).",
    impactEn: "Improved AOV, mobile-consistent UX, and reduced manual marketing operations through automation.",
    impactPt: "AOV melhorado, UX consistente em mobile e redução de operações manuais de marketing por automação.",
    tags: ["Shopify", "Liquid", "Mailchimp", "Zapier", "Wati.io", "Automation"],
    featured: true,
  },
  {
    titleEn: "Clecci — Canadian Fashion Storefront",
    titlePt: "Clecci — Storefront Canadense de Moda",
    problemEn: "Canadian fashion retailer needed advanced customizations beyond standard Shopify theme limitations to lift AOV and conversion.",
    problemPt: "Varejista de moda canadense precisava de customizações avançadas além das limitações do tema Shopify padrão para aumentar AOV e conversão.",
    solutionEn: "Re-architected PDP with reactive variant selection engine, engineered native tiered pricing (Buy More, Save More), rebuilt Add-to-Cart with AJAX, slide-out cart drawer, shipping progress, and upsell modules.",
    solutionPt: "Re-arquitetei a PDP com engine de seleção reativa de variantes, criei sistema nativo de tiered pricing (Buy More, Save More), refiz o Add-to-Cart com AJAX, drawer lateral de carrinho, progresso de frete e módulos de upsell.",
    impactEn: "Higher Average Order Value, improved perceived performance and conversion rate, cleaner legacy codebase.",
    impactPt: "AOV mais alto, performance percebida e taxa de conversão melhoradas, código legado mais limpo.",
    tags: ["Shopify", "Liquid", "JavaScript", "AJAX", "Conversion Optimization"],
    featured: true,
  },
  {
    titleEn: "Martin Auto-Fulfillment",
    titlePt: "Martin Auto-Fulfillment",
    problemEn: "Manual order fulfillment between Shopify and Shopee was time-consuming.",
    problemPt: "O fulfillment manual de pedidos entre Shopify e Shopee era demorado.",
    solutionEn: "Custom automation integrating Shopify orders with Shopee for streamlined fulfillment, address formatting, and tracking.",
    solutionPt: "Automação customizada integrando pedidos Shopify com Shopee para fulfillment, formatação de endereço e rastreamento simplificados.",
    impactEn: "Automated fulfillment workflow that removed daily manual work.",
    impactPt: "Workflow de fulfillment automatizado que eliminou trabalho manual diário.",
    tags: ["Python", "Streamlit", "Playwright", "Shopify API", "Automation"],
    link: "https://github.com/abrahao-dev/martin-autofulfill",
    hasCode: true,
    featured: false,
  },
  {
    titleEn: "Venna Shopify Theme",
    titlePt: "Tema Shopify Venna",
    problemEn: "Reusable Shopify 2.0 theme starter following best practices.",
    problemPt: "Tema-base Shopify 2.0 reutilizável seguindo as melhores práticas.",
    solutionEn: "Modern Shopify theme with Liquid sections and structured, reusable components.",
    solutionPt: "Tema Shopify moderno com seções Liquid e componentes estruturados e reutilizáveis.",
    impactEn: "Reference implementation showcasing Shopify theme best practices.",
    impactPt: "Implementação de referência demonstrando melhores práticas de temas Shopify.",
    tags: ["Shopify", "Liquid", "JavaScript", "CSS"],
    link: "https://github.com/abrahao-dev/venna-shopify-theme",
    hasCode: true,
    featured: false,
  },
]

export default function Projects() {
  const { t, language } = useLanguage()
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const handleProjectClick = (link?: string) => {
    if (link && link !== '#') {
      window.open(link, '_blank', 'noopener,noreferrer')
    }
  }

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  const pickTitle = (p: Project) => (language === 'pt-BR' ? p.titlePt : p.titleEn)
  const pickProblem = (p: Project) => (language === 'pt-BR' ? p.problemPt : p.problemEn)
  const pickSolution = (p: Project) => (language === 'pt-BR' ? p.solutionPt : p.solutionEn)
  const pickImpact = (p: Project) => (language === 'pt-BR' ? p.impactPt : p.impactEn)

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-gradient inline-block py-2">{t('projects.title')}</span>
      </motion.h1>

      <motion.p
        className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-base sm:text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {t('projects.subtitle')}
      </motion.p>

      <motion.div
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 flex items-center gap-2">
          <ShoppingBag className="h-5 w-5 text-primary" />
          {t('projects.featured')}
          <TrendingUp className="h-5 w-5 text-primary ml-auto sm:ml-2" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.titleEn}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <TiltCard className="h-full" tiltAmount={5} glareEnabled={true}>
                <Card className="h-full flex flex-col bg-gradient-to-br from-primary/5 to-secondary/10 backdrop-blur-sm border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 overflow-hidden glass-card">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="default" className="bg-primary/20 text-primary text-xs">
                        <Sparkles className="h-3 w-3 mr-1" />
                        {t('projects.featured')}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg sm:text-xl lg:text-2xl font-semibold leading-tight group-hover:text-primary transition-colors duration-300">
                      {pickTitle(project)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow py-2 space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                        {t('projects.problem')}
                      </p>
                      <p className="text-sm text-foreground">{pickProblem(project)}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                        {t('projects.solution')}
                      </p>
                      <p className="text-sm text-foreground">{pickSolution(project)}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                        {t('projects.impact')}
                      </p>
                      <p className="text-sm text-foreground font-medium">{pickImpact(project)}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.slice(0, 5).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-secondary/50 text-xs hover:bg-secondary/70 transition-colors duration-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 5 && (
                        <Badge variant="secondary" className="bg-secondary/50 text-xs">
                          +{project.tags.length - 5}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2 gap-2">
                    {project.hasCode && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 group/btn"
                        onClick={() => handleProjectClick(project.link)}
                        disabled={!project.link || project.link === '#'}
                      >
                        <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        {t('projects.code')}
                      </Button>
                    )}
                    {project.hasDemo && (
                      <Button
                        variant="default"
                        size="sm"
                        className="flex-1 group/btn"
                        onClick={() => handleProjectClick(project.demoLink)}
                        disabled={!project.demoLink || project.demoLink === '#'}
                      >
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        {t('projects.live')}
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">{t('projects.other')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.titleEn}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + featuredProjects.length) * 0.05 }}
              className="relative group"
              onMouseEnter={() => setHoveredProject(index + featuredProjects.length)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card className="h-full flex flex-col bg-secondary/10 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 overflow-hidden group-hover:scale-[1.02]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg sm:text-xl font-semibold leading-tight group-hover:text-primary transition-colors duration-300">
                    {pickTitle(project)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow py-2 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                      {t('projects.problem')}
                    </p>
                    <p className="text-sm text-foreground">{pickProblem(project)}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                      {t('projects.solution')}
                    </p>
                    <p className="text-sm text-foreground">{pickSolution(project)}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                      {t('projects.impact')}
                    </p>
                    <p className="text-sm text-foreground font-medium">{pickImpact(project)}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-primary/20 text-primary-foreground text-xs hover:bg-primary/30 transition-colors duration-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 4 && (
                      <Badge variant="secondary" className="bg-primary/20 text-primary-foreground text-xs">
                        +{project.tags.length - 4}
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="pt-2 gap-2">
                  {project.hasCode && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn"
                      onClick={() => handleProjectClick(project.link)}
                      disabled={!project.link || project.link === '#'}
                    >
                      <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      {t('projects.code')}
                    </Button>
                  )}
                  {project.hasDemo && (
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1 group/btn"
                      onClick={() => handleProjectClick(project.demoLink)}
                      disabled={!project.demoLink || project.demoLink === '#'}
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      {t('projects.live')}
                    </Button>
                  )}
                </CardFooter>
              </Card>
              <AnimatePresence>
                {hoveredProject === index + featuredProjects.length && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-16 text-center"
      >
        <Card className="max-w-xl mx-auto bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border-primary/20">
          <CardContent className="py-8">
            <Github className="h-10 w-10 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">{t('projects.github.title')}</h3>
            <p className="text-muted-foreground mb-6">{t('projects.github.desc')}</p>
            <Button
              variant="default"
              size="lg"
              onClick={() => window.open('https://github.com/abrahao-dev', '_blank', 'noopener,noreferrer')}
            >
              <Github className="mr-2 h-5 w-5" />
              {t('projects.github.cta')}
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Structured data: ItemList of featured projects for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            'name': 'Projetos | Matheus Abrahão',
            'url': 'https://matheusabrahao.com.br/projects',
            'inLanguage': ['pt-BR', 'en'],
            'mainEntity': {
              '@type': 'ItemList',
              'name': 'Featured Projects by Matheus Abrahão',
              'itemListElement': featuredProjects.map((p, i) => ({
                '@type': 'ListItem',
                'position': i + 1,
                'item': {
                  '@type': 'CreativeWork',
                  'name': p.titleEn,
                  'description': p.solutionEn,
                  'keywords': p.tags.join(', '),
                  'creator': { '@type': 'Person', 'name': 'Matheus Abrahão' },
                  ...(p.demoLink ? { 'url': p.demoLink } : {}),
                },
              })),
            },
          }),
        }}
      />
    </div>
  )
}
