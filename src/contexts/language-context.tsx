"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'

export type Language = 'en' | 'pt-BR'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation keys
const translations = {
  'en': {
    // Navigation
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',

    // Homepage
    'home.badge': 'Available for new Shopify work',
    'home.title': 'Shopify stores that make money.',
    'home.subtitle': 'Shopify Expert & E-commerce Operator',
    'home.description': "I'm Matheus Abrahão. For 6+ years I have run Shopify stores end to end for brands in the US and Canada — catalog, site speed, email and the unglamorous operational work that quietly decides whether a store grows. You are not hiring an agency. You talk to the person doing the work.",
    'home.stats.experience': 'Years Experience',
    'home.stats.revenue': 'Sales Channels Operated',
    'home.stats.projects': 'Production Systems',
    'home.stats.remote': 'Countries Served',
    'home.stats.years': 'running Shopify stores end to end',
    'home.portrait.alt': 'Matheus Abrahão, Shopify expert and e-commerce operator',
    'home.cta.projects': 'See my work',
    'home.cta.contact': 'Talk on WhatsApp',
    'home.cta.title': 'Tell me what your store is doing.',
    'home.cta.desc': 'Send me your store URL and what is bothering you. I will tell you what I would fix first, and what it is worth — free, no pitch deck.',
    'home.services.title': 'What I fix for store owners',
    'home.services.subtitle': 'Plain language, no jargon. Pick the one that sounds like your store.',
    'home.skills.title': 'The e-commerce stack I run every day',
    'home.skills.subtitle': 'Shopify and the systems around it. Nothing else.',
    'home.connect.title': 'Your store deserves an operator, not a ticket queue.',
    'home.connect.subtitle': 'I take on a small number of Shopify brands at a time so the work stays hands-on. If your store is growing and the back end is holding it back, message me.',

    // About page
    'about.title': 'Shopify Expert & E-commerce Operator',
    'about.professional.title': 'Professional Philosophy',
    'about.professional.excellence.title': 'Technical Excellence',
    'about.professional.excellence.desc': 'I build scalable, maintainable Shopify systems — Liquid themes, Hydrogen storefronts, catalog pipelines and app integrations — with React, Next.js, Node.js and TypeScript. Every solution is designed for performance, reliability, and long-term maintainability.',
    'about.professional.business.title': 'Business Impact',
    'about.professional.business.desc': 'Engineering decisions should drive business outcomes. I focus on solutions that deliver measurable value — from high-volume B2C and B2B Shopify operations to automated workflows that reduce operational costs.',
    'about.professional.learning.title': 'Continuous Improvement',
    'about.professional.learning.desc': 'The web evolves rapidly. I stay current with React patterns, Node.js best practices, and modern DevOps tooling to deliver the best possible solutions.',
    'about.professional.client.title': 'Product Ownership',
    'about.professional.client.desc': 'I take end-to-end ownership — from architecture and implementation to production delivery. I collaborate closely with stakeholders and translate requirements into well-engineered solutions.',
    'about.skills.title': 'Technical Skills',
    'about.experience.title': 'Work Experience',
    'about.timeline.title': 'Career Timeline',
    'about.skills.shopify': 'Shopify Ecosystem',
    'about.skills.ecommerce': 'E-commerce Stack',
    'about.skills.web': 'Web Engineering',
    'about.skills.data': 'Data & Analytics',
    'about.skills.ai': 'Automation & Data',
    'about.skills.devops': 'DevOps & Tooling',
    'about.skills.mobile': 'Catalog & PIM',
    'about.achievements.apple': 'Apple WWDC Winner',
    'about.achievements.apple.desc': 'Selected as a global winner of the Apple Swift Student Challenge 2026, building a complete App Playground from scratch with Swift',
    'about.achievements.revenue': '+455% Growth',
    'about.achievements.revenue.desc': 'Drove +455% platform sessions, +114% orders, and +74% sales for an international luxury brand through technical SEO and optimization',
    'about.achievements.projects': 'Founder of Martin',
    'about.achievements.projects.desc': 'Built and operated my own e-commerce brand Martin end-to-end — 1,959 orders, ~R$552K processed and 299K+ sessions as a single founder',
    'about.achievements.international': 'Global Remote Work',
    'about.achievements.international.desc': 'Shopify work delivered for brands in the United States and Canada, plus Europe and Brazil — 10+ countries',
    'about.achievements.excellence': 'Technical Leadership',
    'about.achievements.excellence.desc': 'End-to-end technical ownership from architecture to deployment',
    'about.summary.paragraph1': "My first line of code was a C++ mod for a Rainbow Six Siege videogame. I was 14, had no idea what I was doing, and couldn't stop. That feeling — making a machine do exactly what I wanted — never went away.",
    'about.summary.paragraph2': "By 16, I was building websites for clients. But I didn't just want to write code; I wanted to see how technical architecture drives real business. So, I founded my own e-commerce brand, Martin. I built the entire technical stack from scratch, ran the marketing, and operated the business end-to-end — 1,959 orders, roughly R$552,000 processed and 299,000+ sessions.",
    'about.summary.paragraph3': "That experience shifted my entire career. It taught me how to think like an operator and a founder, making engineering decisions based on direct, measurable impact.",
    'about.summary.paragraph4': "Today I bring that same end-to-end ownership to international brands. I currently run paired B2C and B2B Shopify storefronts for a US building-products manufacturer — an enterprise-scale catalog with multi-level variants, syndicated to Lowe's, Home Depot, Menards and Amazon — and I was the sole engineer behind an international luxury fashion brand's Shopify ecosystem. I specialize in catalog data at scale, technical SEO, multichannel sync, and marketing automation.",

    // Contact page
    'contact.title': "Let's Work Together",
    'contact.connect.title': "Let's Connect",
    'contact.connect.subtitle': 'Tell me about your store. Whether it is a slow theme, a catalog nobody can keep up with, Klaviyo that is not earning, a migration onto Shopify, or you just need a reliable person on call — send it over and I will tell you what I would do first. WhatsApp is the fastest way to reach me.',
    'contact.form.name': 'Name *',
    'contact.form.email': 'Email *',
    'contact.form.message': 'Message *',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email.placeholder': 'your.email@example.com',
    'contact.form.message.placeholder': 'Tell me about your project or how I can help...',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Your email app is opening with the message ready — just hit send. Prefer WhatsApp? Use the button below.',
    'contact.form.error.name': 'Name is required',
    'contact.form.error.name.length': 'Name must be at least 2 characters',
    'contact.form.error.email': 'Email is required',
    'contact.form.error.email.invalid': 'Please enter a valid email address',
    'contact.form.error.message': 'Message is required',
    'contact.form.error.message.length': 'Message must be at least 10 characters',

    // Footer
    'footer.title': 'Matheus Abrahão',
    'footer.subtitle': 'Shopify Expert & E-commerce Operator',
    'footer.quicklinks': 'Quick Links',
    'footer.connect': 'Contact',
    'footer.newsletter': 'Insights',
    'footer.newsletter.desc': 'Shopify & e-commerce insights',
    'footer.newsletter.cta': 'Read the Blog',
    'footer.copyright': '© 2026 Matheus Abrahão. All rights reserved.',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookie Policy',
    'footer.services': 'Shopify Services',

    // Service links — shared wording between the footer and the mobile nav
    'services.shopify': 'Shopify Expert',
    'services.seo': 'Shopify SEO Expert',
    'services.hire': 'Hire a Shopify Developer',
    'services.matrixify': 'Matrixify Expert',
    'services.klaviyo': 'Klaviyo Expert',
    'services.speed': 'Speed Optimization',
    'services.migration': 'Shopify Migration',

    // Cookie consent banner
    'cookie.banner.title': 'A quick question about analytics',
    'cookie.banner.text': 'This site would like to use analytics cookies to measure which pages people read. Nothing loads until you choose, and no data is ever sold or used for advertising.',
    'cookie.banner.link': 'Read the cookie policy',
    'cookie.banner.accept': 'Accept',
    'cookie.banner.reject': 'Essential only',
    'mobile.menu': 'Menu',
    'mobile.language': 'Language',
    'mobile.theme': 'Theme',

    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Shopify Operations, E-commerce Engineering & SEO',
    'blog.description': 'Field notes on Shopify Operations, technical SEO, catalog data management, and e-commerce engineering — drawn from running production stores at high volume.',
    'blog.readmore': 'Read More',
    'blog.coming': 'Coming Soon',
    'blog.coming.desc': 'New articles on Shopify Operations and e-commerce engineering coming soon.',
    'blog.featured': 'Featured Articles',
    'blog.all': 'All Articles',
    'blog.subscribe': 'Subscribe to RSS feed for updates',
    'blog.newsletter.title': 'Stay Updated',
    'blog.newsletter.desc': 'Get notified when I publish new articles on Shopify Operations, technical SEO, catalog data, and e-commerce engineering.',
    'blog.newsletter.placeholder': 'Enter your email',
    'blog.newsletter.cta': 'Subscribe',

    // Projects
    'projects.title': 'Production Projects',
    'projects.subtitle': 'Shopify ecosystems first — stores I build and operate end to end, with the numbers they actually produced. Other engineering work follows.',
    'projects.featured': 'Featured Work',
    'projects.other': 'Other Engineering Work',
    'projects.problem': 'Problem',
    'projects.solution': 'Solution',
    'projects.impact': 'Impact',
    'projects.code': 'Code',
    'projects.live': 'View Live',
    'projects.github.title': 'More on GitHub',
    'projects.github.desc': 'More projects, contributions, and experiments are available on my GitHub profile.',
    'projects.github.cta': 'View GitHub Profile',
  },
  'pt-BR': {
    // Navigation
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.blog': 'Blog',
    'nav.contact': 'Contato',

    // Homepage
    'home.badge': 'Disponível para novos projetos Shopify',
    'home.title': 'Shopify: lojas que vendem de verdade.',
    'home.subtitle': 'Shopify Expert & Operador de E-commerce',
    'home.description': 'Sou o Matheus Abrahão. Há 6+ anos opero lojas Shopify de ponta a ponta para marcas nos EUA e no Canadá — catálogo, velocidade do site, e-mail e todo o trabalho operacional invisível que decide, no fim, se a loja cresce ou trava. Você não contrata uma agência. Você fala direto com quem executa.',
    'home.stats.experience': 'Anos de Experiência',
    'home.stats.revenue': 'Canais de Venda Operados',
    'home.stats.projects': 'Sistemas em Produção',
    'home.stats.remote': 'Países Atendidos',
    'home.stats.years': 'operando lojas Shopify de ponta a ponta',
    'home.portrait.alt': 'Matheus Abrahão, Shopify Expert e operador de e-commerce',
    'home.cta.projects': 'Ver meu trabalho',
    'home.cta.contact': 'Chamar no WhatsApp',
    'home.cta.title': 'Me conta o que a sua loja está fazendo.',
    'home.cta.desc': 'Manda o link da sua loja e o que está te incomodando. Eu te digo o que arrumaria primeiro e quanto isso vale — de graça, sem apresentação comercial.',
    'home.services.title': 'O que eu resolvo para donos de loja',
    'home.services.subtitle': 'Em português claro, sem jargão. Escolha o que parece a sua loja.',
    'home.skills.title': 'A stack de e-commerce que eu opero todo dia',
    'home.skills.subtitle': 'Shopify e os sistemas ao redor dele. Mais nada.',
    'home.connect.title': 'Sua loja merece um operador, não uma fila de chamados.',
    'home.connect.subtitle': 'Atendo poucas marcas Shopify por vez para o trabalho continuar mão na massa. Se a sua loja está crescendo e o back-end está segurando, me chama.',

    // About page
    'about.title': 'Shopify Expert & Operador de E-commerce',
    'about.professional.title': 'Filosofia Profissional',
    'about.professional.excellence.title': 'Excelência Técnica',
    'about.professional.excellence.desc': 'Construo sistemas Shopify escaláveis e sustentáveis — temas Liquid, storefronts Hydrogen, pipelines de catálogo e integrações de apps — com React, Next.js, Node.js e TypeScript. Toda solução é projetada para performance, confiabilidade e manutenibilidade a longo prazo.',
    'about.professional.business.title': 'Impacto no Negócio',
    'about.professional.business.desc': 'Decisões de engenharia devem gerar resultados de negócio. Foco em soluções que entregam valor mensurável — de operações Shopify B2C e B2B de alto volume a fluxos automatizados que reduzem custos operacionais.',
    'about.professional.learning.title': 'Melhoria Contínua',
    'about.professional.learning.desc': 'A web evolui rapidamente. Me mantenho atualizado com padrões React, melhores práticas Node.js e ferramentas modernas de DevOps para entregar as melhores soluções possíveis.',
    'about.professional.client.title': 'Ownership de Produto',
    'about.professional.client.desc': 'Assumo ownership ponta a ponta — da arquitetura e implementação até a entrega em produção. Colaboro de perto com stakeholders e traduzo requisitos em soluções bem engenheiradas.',
    'about.skills.title': 'Habilidades Técnicas',
    'about.experience.title': 'Experiência Profissional',
    'about.timeline.title': 'Linha do Tempo da Carreira',
    'about.skills.shopify': 'Ecossistema Shopify',
    'about.skills.ecommerce': 'Stack E-commerce',
    'about.skills.web': 'Engenharia Web',
    'about.skills.data': 'Dados & Analytics',
    'about.skills.ai': 'Automação & Dados',
    'about.skills.devops': 'DevOps & Ferramentas',
    'about.skills.mobile': 'Catálogo & PIM',
    'about.achievements.apple': 'Apple WWDC Vencedor',
    'about.achievements.apple.desc': 'Selecionado como vencedor global do Apple Swift Student Challenge 2026, construindo um App Playground completo do zero com Swift',
    'about.achievements.revenue': '+455% de Crescimento',
    'about.achievements.revenue.desc': 'Gerei +455% de sessões, +114% de pedidos e +74% de vendas para uma marca de luxo internacional via SEO técnico e otimização',
    'about.achievements.projects': 'Fundador da Martin',
    'about.achievements.projects.desc': 'Construí e operei minha própria marca de e-commerce Martin do zero — 1.959 pedidos, ~R$552 mil processados e 299 mil+ sessões como fundador único',
    'about.achievements.international': 'Trabalho Remoto Global',
    'about.achievements.international.desc': 'Trabalho Shopify entregue para marcas nos Estados Unidos e Canadá, além de Europa e Brasil — 10+ países',
    'about.achievements.excellence': 'Liderança Técnica',
    'about.achievements.excellence.desc': 'Ownership técnico de ponta a ponta, da arquitetura ao deployment',
    'about.summary.paragraph1': "Minha primeira linha de código foi um mod em C++ para o videogame Rainbow Six Siege. Eu tinha 14 anos, nenhuma ideia do que estava fazendo, e não conseguia parar. Aquela sensação — fazer uma máquina executar exatamente o que eu queria — nunca foi embora.",
    'about.summary.paragraph2': "Aos 16, já construía sites para clientes. Mas eu não queria só escrever código; queria ver como a arquitetura técnica gera negócio real. Então fundei minha própria marca de e-commerce, Martin. Construí toda a stack técnica do zero, conduzi o marketing e operei o negócio ponta a ponta — 1.959 pedidos, cerca de R$552.000 processados e 299.000+ sessões.",
    'about.summary.paragraph3': "Essa experiência mudou minha carreira. Me ensinou a pensar como operador e fundador, tomando decisões de engenharia baseadas em impacto direto e mensurável.",
    'about.summary.paragraph4': "Hoje levo essa mesma propriedade ponta a ponta para marcas internacionais. Opero lojas Shopify B2C e B2B simultâneas de uma fabricante americana de produtos de construção — catálogo em escala enterprise, com variantes multinível e sindicalização para Lowe's, Home Depot, Menards e Amazon — e fui o engenheiro único do ecossistema Shopify de uma marca internacional de moda de luxo. Sou especializado em dados de catálogo em escala, SEO técnico, sincronização multicanal e automação de marketing.",

    // Contact page
    'contact.title': 'Vamos Trabalhar Juntos',
    'contact.connect.title': 'Vamos Conectar',
    'contact.connect.subtitle': 'Me conta sobre a sua loja. Tema lento, catálogo que ninguém dá conta de atualizar, Klaviyo que não fatura, migração para o Shopify ou só alguém de confiança à disposição — manda que eu te digo o que faria primeiro. O WhatsApp é o jeito mais rápido de me achar.',
    'contact.form.name': 'Nome *',
    'contact.form.email': 'E-mail *',
    'contact.form.message': 'Mensagem *',
    'contact.form.name.placeholder': 'Seu nome',
    'contact.form.email.placeholder': 'seu.email@exemplo.com',
    'contact.form.message.placeholder': 'Me conte sobre seu projeto ou como posso ajudar...',
    'contact.form.send': 'Enviar Mensagem',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': 'Seu app de e-mail está abrindo com a mensagem pronta — é só enviar. Prefere WhatsApp? Use o botão abaixo.',
    'contact.form.error.name': 'Nome é obrigatório',
    'contact.form.error.name.length': 'Nome deve ter pelo menos 2 caracteres',
    'contact.form.error.email': 'E-mail é obrigatório',
    'contact.form.error.email.invalid': 'Por favor, insira um e-mail válido',
    'contact.form.error.message': 'Mensagem é obrigatória',
    'contact.form.error.message.length': 'Mensagem deve ter pelo menos 10 caracteres',

    // Footer
    'footer.title': 'Matheus Abrahão',
    'footer.subtitle': 'Shopify Expert & Operador de E-commerce',
    'footer.quicklinks': 'Links Rápidos',
    'footer.connect': 'Contato',
    'footer.newsletter': 'Insights',
    'footer.newsletter.desc': 'Conteúdo sobre Shopify e e-commerce',
    'footer.newsletter.cta': 'Leia o Blog',
    'footer.copyright': '© 2026 Matheus Abrahão. Todos os direitos reservados.',
    'footer.legal': 'Legal',
    'footer.privacy': 'Política de Privacidade',
    'footer.cookies': 'Política de Cookies',
    'footer.services': 'Serviços Shopify',

    // Links de serviço — mesma redação usada no menu mobile
    'services.shopify': 'Shopify Expert',
    'services.seo': 'SEO para Shopify',
    'services.hire': 'Contratar Dev Shopify',
    'services.matrixify': 'Matrixify Expert',
    'services.klaviyo': 'Klaviyo Expert',
    'services.speed': 'Otimização de Velocidade',
    'services.migration': 'Migração para Shopify',

    // Banner de consentimento de cookies
    'cookie.banner.title': 'Uma pergunta rápida sobre analytics',
    'cookie.banner.text': 'Este site gostaria de usar cookies de analytics para medir quais páginas as pessoas leem. Nada carrega antes de você escolher, e nenhum dado é vendido ou usado para publicidade.',
    'cookie.banner.link': 'Leia a política de cookies',
    'cookie.banner.accept': 'Aceitar',
    'cookie.banner.reject': 'Somente essenciais',
    'mobile.menu': 'Menu',
    'mobile.language': 'Idioma',
    'mobile.theme': 'Tema',

    // Blog
    'blog.title': 'Blog',
    'blog.subtitle': 'Shopify Operations, Engenharia de E-commerce & SEO',
    'blog.description': 'Anotações de campo sobre Shopify Operations, SEO técnico, gestão de catálogo e engenharia de e-commerce — extraídas da operação de lojas em produção em alto volume.',
    'blog.readmore': 'Ler Mais',
    'blog.coming': 'Em Breve',
    'blog.coming.desc': 'Novos artigos sobre Shopify Operations e engenharia de e-commerce em breve.',
    'blog.featured': 'Artigos em Destaque',
    'blog.all': 'Todos os Artigos',
    'blog.subscribe': 'Assine o feed RSS para atualizações',
    'blog.newsletter.title': 'Fique Atualizado',
    'blog.newsletter.desc': 'Seja notificado quando publico novos artigos sobre Shopify Operations, SEO técnico, dados de catálogo e engenharia de e-commerce.',
    'blog.newsletter.placeholder': 'Digite seu e-mail',
    'blog.newsletter.cta': 'Inscrever',

    // Projects
    'projects.title': 'Projetos em Produção',
    'projects.subtitle': 'Ecossistemas Shopify primeiro — lojas que eu construo e opero ponta a ponta, com os números que elas realmente produziram. Outros trabalhos de engenharia vêm depois.',
    'projects.featured': 'Trabalhos em Destaque',
    'projects.other': 'Outros Trabalhos de Engenharia',
    'projects.problem': 'Problema',
    'projects.solution': 'Solução',
    'projects.impact': 'Impacto',
    'projects.code': 'Código',
    'projects.live': 'Ver Online',
    'projects.github.title': 'Mais no GitHub',
    'projects.github.desc': 'Mais projetos, contribuições e experimentos estão disponíveis no meu perfil do GitHub.',
    'projects.github.cta': 'Ver Perfil do GitHub',
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt-BR')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null
    if (savedLanguage === 'en' || savedLanguage === 'pt-BR') {
      setLanguage(savedLanguage)
      document.documentElement.lang = savedLanguage === 'pt-BR' ? 'pt-BR' : 'en'
      return
    }
    // First visit: detect browser language. Domain is .com.br, so default to pt-BR
    // unless the user's browser is explicitly English-speaking.
    const browser = typeof navigator !== 'undefined' ? navigator.language || '' : ''
    const next: Language = browser.toLowerCase().startsWith('en') ? 'en' : 'pt-BR'
    setLanguage(next)
    document.documentElement.lang = next === 'pt-BR' ? 'pt-BR' : 'en'
  }, [])

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLanguage === 'pt-BR' ? 'pt-BR' : 'en'
    }
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}