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
    titleEn: "Scale Army — Shopify Operations",
    titlePt: "Scale Army — Operações Shopify",
    problemEn: "High-volume B2B and B2C Shopify clients needed reliable catalog data management, technical SEO, and ecosystem stability at scale.",
    problemPt: "Clientes Shopify B2B e B2C de alto volume precisavam de gestão confiável de catálogo, SEO técnico e estabilidade do ecossistema em escala.",
    solutionEn: "Senior Shopify Operator role — running bulk Matrixify/CSV catalog workflows, managing structured data and schema markup, monitoring app integrations, and translating GA4 insights into upsell and merchandising strategy.",
    solutionPt: "Atuação como Senior Shopify Operator — executando fluxos de catálogo em massa via Matrixify/CSV, gerenciando structured data e schema markup, monitorando integrações de apps e traduzindo dados do GA4 em estratégias de upsell e merchandising.",
    impactEn: "Stable production stores ready for AI-powered search, with friction-free navigation and checkout across multi-level variant catalogs.",
    impactPt: "Lojas em produção estáveis e prontas para busca com IA, com navegação e checkout sem fricção em catálogos de variantes multi-nível.",
    tags: ["Shopify Plus", "Matrixify", "Technical SEO", "Schema Markup", "GA4", "Klaviyo", "Catalog Management"],
    featured: true,
  },
  {
    titleEn: "Luxury Fashion E-commerce (Virtustant)",
    titlePt: "E-commerce de Moda de Luxo (Virtustant)",
    problemEn: "International luxury fashion brand needed reliability, scalability, and growth across a large-scale product catalog and multi-channel operations.",
    problemPt: "Marca de moda de luxo internacional precisava de confiabilidade, escalabilidade e crescimento em um catálogo de produtos de larga escala e operações multicanal.",
    solutionEn: "Sole engineer building custom Liquid components for Core Web Vitals, leading omnichannel integrations (Amazon Seller Central, Google Merchant, Meta CAPI/Pixel), and engineering Klaviyo + AI-assisted automation flows.",
    solutionPt: "Engenheiro único construindo componentes Liquid customizados para Core Web Vitals, liderando integrações omnichannel (Amazon Seller Central, Google Merchant, Meta CAPI/Pixel) e engenharia de fluxos Klaviyo + automação assistida por IA.",
    impactEn: "+455% platform sessions, +114% orders, +74% total sales since joining — driven by technical SEO, performance, and marketing integrations.",
    impactPt: "+455% de sessões na plataforma, +114% em pedidos, +74% em vendas totais desde o início — impulsionado por SEO técnico, performance e integrações de marketing.",
    tags: ["Shopify", "Liquid", "Klaviyo", "Meta CAPI", "Google Merchant", "Amazon Integration", "Core Web Vitals"],
    featured: true,
  },
  {
    titleEn: "Martin — Founder E-commerce Brand",
    titlePt: "Martin — Marca de E-commerce Própria",
    problemEn: "Build a profitable men's fashion brand from zero, owning every layer: technical, brand, content, and operations.",
    problemPt: "Construir uma marca de moda masculina lucrativa do zero, com ownership total: técnico, marca, conteúdo e operações.",
    solutionEn: "Designed and operated the full stack on Shopify/Liquid + Hydrogen + Remix + Tailwind. Built custom checkout logic, internal tooling, marketing integrations, inventory automation, and content (TikTok, Instagram).",
    solutionPt: "Projetei e operei toda a stack em Shopify/Liquid + Hydrogen + Remix + Tailwind. Construí lógica de checkout customizada, ferramentas internas, integrações de marketing, automação de inventário e conteúdo (TikTok, Instagram).",
    impactEn: "$90,000+ revenue, ~2,000 orders, 297,000+ sessions. TikTok grown to 51K followers and 500K+ likes; individual videos at 1.7M+ views — all solo.",
    impactPt: "$90.000+ em receita, ~2.000 pedidos, 297.000+ sessões. TikTok com 51K seguidores e 500K+ curtidas; vídeos individuais com 1,7M+ visualizações — tudo solo.",
    tags: ["Shopify", "Hydrogen", "Remix", "React", "Tailwind CSS", "E-commerce", "Founder"],
    demoLink: "https://martin4shop.com.br",
    hasDemo: true,
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
    titleEn: "CLEATUS — Govtech AI Platform",
    titlePt: "CLEATUS — Plataforma de IA para Govtech",
    problemEn: "Companies struggled to discover, analyze, and win government contracts efficiently from unstructured PDFs and SAM.gov data.",
    problemPt: "Empresas tinham dificuldade em descobrir, analisar e ganhar contratos governamentais a partir de PDFs não estruturados e dados do SAM.gov.",
    solutionEn: "Built an internal AI chatbot using LangGraph and LangChain for natural-language queries over structured/unstructured data; PDF-to-Markdown pipelines and PostHog analytics integration.",
    solutionPt: "Construí um chatbot interno de IA com LangGraph e LangChain para consultas em linguagem natural sobre dados estruturados/não estruturados; pipelines de PDF-para-Markdown e integração de analytics com PostHog.",
    impactEn: "Natural-language access to contract data, automated PDF analysis, and SAM.gov ETL exporting clean CSV.",
    impactPt: "Acesso em linguagem natural a dados de contratos, análise automatizada de PDFs e ETL do SAM.gov exportando CSV limpo.",
    tags: ["LangGraph", "LangChain", "OpenAI", "Python", "PostgreSQL", "PostHog", "AI/ML"],
    featured: true,
  },
  {
    titleEn: "Onmed Farmacêutica — Institutional SPA",
    titlePt: "Onmed Farmacêutica — SPA Institucional",
    problemEn: "Pharmaceutical distributor needed digital modernization with strong performance, mobile-first design, and resolved legacy infrastructure.",
    problemPt: "Distribuidora farmacêutica precisava de modernização digital com forte performance, design mobile-first e infraestrutura legada resolvida.",
    solutionEn: "Built a high-performance institutional SPA using React, Next.js, and Vite; mobile-first glassmorphism UI with Tailwind; resolved DNS/domain consolidation and built a Linktree-style lead-capture hub.",
    solutionPt: "Construí um SPA institucional de alta performance com React, Next.js e Vite; UI glassmorphism mobile-first com Tailwind; resolvi consolidação de DNS/domínio e construí um hub de captura de leads no estilo Linktree.",
    impactEn: "Strong Lighthouse scores, streamlined social-media-to-lead funnel, modernized digital footprint.",
    impactPt: "Pontuações Lighthouse fortes, funil de social-media-para-lead simplificado, presença digital modernizada.",
    tags: ["React", "Next.js", "Vite", "Tailwind CSS", "SEO", "Mobile-First"],
    featured: false,
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
    featured: false,
  },
  {
    titleEn: "AlerteHit — Pokémon TCG Headless Storefront (France)",
    titlePt: "AlerteHit — Storefront Headless Pokémon TCG (França)",
    problemEn: "International e-commerce project for the Pokémon TCG market needed a custom, performant, headless storefront.",
    problemPt: "Projeto internacional de e-commerce para o mercado de Pokémon TCG precisava de um storefront headless customizado e performático.",
    solutionEn: "Custom React-based frontend on Shopify Hydrogen + Remix, Storefront API integration for product/collection/checkout flows, and interactive Three.js visuals.",
    solutionPt: "Frontend React customizado em Shopify Hydrogen + Remix, integração com Storefront API para fluxos de produto/coleção/checkout e visuais interativos com Three.js.",
    impactEn: "Visually differentiated storefront with strong performance and scalability for a niche international market.",
    impactPt: "Storefront visualmente diferenciado com forte performance e escalabilidade para um mercado internacional de nicho.",
    tags: ["Shopify Hydrogen", "Remix", "React", "Three.js", "Storefront API"],
    featured: false,
  },
  {
    titleEn: "AbrahaoLabs AI Chatbot",
    titlePt: "Chatbot de IA AbrahaoLabs",
    problemEn: "Needed an AI chatbot for marketing teams with PDF/CSV/TXT document support.",
    problemPt: "Era necessário um chatbot de IA para equipes de marketing com suporte a documentos PDF/CSV/TXT.",
    solutionEn: "LangChain + Hugging Face fine-tuning (DistilGPT2) and RAG with multi-format ingestion served by Flask.",
    solutionPt: "LangChain + fine-tuning Hugging Face (DistilGPT2) e RAG com ingestão multi-formato servido por Flask.",
    impactEn: "Document-grounded Q&A for marketing automation use cases.",
    impactPt: "Q&A baseado em documentos para casos de uso de automação de marketing.",
    tags: ["Python", "LangChain", "Hugging Face", "RAG", "Flask"],
    link: "https://github.com/abrahao-dev/abrahao-labs-chatbot",
    hasCode: true,
    featured: false,
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
  {
    titleEn: "EHR Integration System",
    titlePt: "Sistema de Integração EHR",
    problemEn: "Healthcare providers needed standardized patient data mapping to multiple EHR systems.",
    problemPt: "Profissionais de saúde precisavam de mapeamento padronizado de dados de pacientes para múltiplos sistemas EHR.",
    solutionEn: "Internal tool for mapping and submitting patient data to Electronic Health Record systems with multi-provider support.",
    solutionPt: "Ferramenta interna para mapear e enviar dados de pacientes para sistemas de Electronic Health Record com suporte multi-provedor.",
    impactEn: "Tested, scalable, production-ready integration across multiple EHR providers.",
    impactPt: "Integração testada, escalável e pronta para produção em múltiplos provedores de EHR.",
    tags: ["TypeScript", "Node.js", "React", "Express", "Healthcare"],
    link: "https://github.com/abrahao-dev/ehr-integration",
    hasCode: true,
    featured: false,
  },
  {
    titleEn: "NFT Marketplace",
    titlePt: "Marketplace NFT",
    problemEn: "Needed a complete decentralized marketplace for NFT trading with modern architecture.",
    problemPt: "Era necessário um marketplace descentralizado completo para negociação de NFTs com arquitetura moderna.",
    solutionEn: "Full-stack Web3 dApp with React frontend, Go backend, and Solidity smart contracts.",
    solutionPt: "dApp Web3 full-stack com frontend React, backend Go e contratos inteligentes em Solidity.",
    impactEn: "Complete marketplace with wallet integration, minting, and trading.",
    impactPt: "Marketplace completo com integração de carteira, minting e negociação.",
    tags: ["React", "Go", "Solidity", "Web3", "Smart Contracts"],
    link: "https://github.com/abrahao-dev/nft-marketplace",
    hasCode: true,
    featured: false,
  },
  {
    titleEn: "Smart Irrigation Dashboard",
    titlePt: "Dashboard de Irrigação Inteligente",
    problemEn: "Farmers needed real-time monitoring of soil conditions and remote irrigation control.",
    problemPt: "Agricultores precisavam de monitoramento em tempo real de condições do solo e controle remoto de irrigação.",
    solutionEn: "Real-time React dashboard with MQTT connecting to ESP32 sensors.",
    solutionPt: "Dashboard React em tempo real com MQTT conectado a sensores ESP32.",
    impactEn: "Soil moisture, temperature, and rainfall monitoring with remote irrigation control.",
    impactPt: "Monitoramento de umidade do solo, temperatura e chuva com controle remoto de irrigação.",
    tags: ["React", "MQTT", "IoT", "ESP32", "Real-time"],
    link: "https://github.com/abrahao-dev/smart-irrigation-dashboard",
    hasCode: true,
    featured: false,
  },
  {
    titleEn: "CPF/CNPJ Validator (Rust)",
    titlePt: "Validador CPF/CNPJ (Rust)",
    problemEn: "Needed a fast, reliable validator for Brazilian tax IDs.",
    problemPt: "Era necessário um validador rápido e confiável para CPFs e CNPJs.",
    solutionEn: "CLI tool in Rust with automatic formatting and official validation algorithms.",
    solutionPt: "Ferramenta CLI em Rust com formatação automática e algoritmos oficiais de validação.",
    impactEn: "Fast CLI validation with full formatting support for Brazilian documents.",
    impactPt: "Validação CLI rápida com suporte completo a formatação de documentos brasileiros.",
    tags: ["Rust", "CLI", "Brazil"],
    link: "https://github.com/abrahao-dev/cpf-cnpj-validator",
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
