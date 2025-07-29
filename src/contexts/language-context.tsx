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
    'nav.services': 'Services',
    'nav.contact': 'Contact',

    // Homepage
    'home.title': 'Matheus Abrahão',
    'home.subtitle': 'Software Engineer | Full Stack Developer | TypeScript & Golang Expert',
    'home.description': 'Building scalable, modern applications with clean architecture and solid engineering principles. Generated $80K+ revenue through e-commerce platforms and AI-powered solutions.',
    'home.stats.revenue': 'Revenue Generated',
    'home.stats.revenue.value': '$80K+',
    'home.stats.experience': 'Years Experience',
    'home.stats.projects': 'Projects Delivered',
    'home.stats.technologies': 'Technologies',
    'home.cta.projects': 'View Projects',
    'home.cta.services': 'My Services',
    'home.cta.resume': 'Resume',
    'home.cta.contact': 'Get in Touch',
    'home.skills.title': 'Core Technologies',
    'home.connect.title': "Let's Connect",
    'home.connect.subtitle': 'Available for freelance projects and full-time opportunities',

    // About page
    'about.title': 'About Me',
    'about.professional.title': 'Professional Philosophy',
    'about.professional.excellence.title': 'Technical Excellence',
    'about.professional.excellence.desc': 'I believe in writing clean, maintainable code that follows SOLID principles and clean architecture patterns. Every solution I build is designed to be scalable, performant, and easy to maintain.',
    'about.professional.business.title': 'Business Impact',
    'about.professional.business.desc': 'My entrepreneurial background helps me understand the business side of technology. I focus on delivering solutions that not only work technically but also drive real business value.',
    'about.professional.learning.title': 'Continuous Learning',
    'about.professional.learning.desc': 'Technology evolves rapidly, and I stay current with the latest trends and best practices. I\'m particularly excited about AI/ML integration and its potential to transform businesses.',
    'about.professional.client.title': 'Client Success',
    'about.professional.client.desc': 'I measure my success by my clients\' success. I work closely with clients to understand their needs and deliver solutions that exceed their expectations.',
    'about.skills.title': 'Technical Skills',
    'about.experience.title': 'Work Experience',
    'about.timeline.title': 'Career Timeline',
    'about.achievements.revenue': '$80K+ Revenue Generated',
    'about.achievements.revenue.desc': 'Successfully built and operated e-commerce platforms generating significant revenue',
    'about.achievements.projects': '20+ Projects Delivered',
    'about.achievements.projects.desc': 'Completed diverse projects across web development, e-commerce, and AI integration',
    'about.achievements.international': 'International Experience',
    'about.achievements.international.desc': 'Worked with clients from multiple countries including France, USA, and Brazil',
    'about.achievements.excellence': 'Technical Excellence',
    'about.achievements.excellence.desc': 'Consistently delivered high-quality solutions using modern technologies and best practices',
    'about.summary.paragraph1': 'I\'m a passionate Software Engineer focused on building modern, scalable full-stack applications grounded in clean architecture, automation, and solid software engineering principles. I work primarily with TypeScript, Golang, Docker, and Cloud technologies, delivering robust end-to-end solutions with strong foundations in algorithms, data structures, and systems design.',
    'about.summary.paragraph2': 'Since 2021, I\'ve independently led the technical operations of Martin4Shop, a self-owned e-commerce brand that has generated over $80,000 in revenue. I built the entire platform from scratch using Shopify Hydrogen, React, and Remix, along with custom automations. This experience gave me deep, hands-on insight into how engineering, product, and business intersect.',
    'about.summary.paragraph3': 'I have complete command of the development lifecycle: modern web applications, REST/GraphQL APIs, relational and NoSQL databases, CI/CD pipelines, containerization, testing, and clean, maintainable code using SOLID principles. I also have practical experience with machine learning models and AI-powered solutions.',

    // Services page
    'services.title': 'Professional Services',
    'services.subtitle': 'Comprehensive software engineering services tailored to your business needs. From full-stack development to AI integration, I deliver scalable solutions that drive results.',
    'services.fullstack.title': 'Full Stack Development',
    'services.fullstack.desc': 'End-to-end web application development using modern technologies like TypeScript, React, Next.js, and Golang.',
    'services.ecommerce.title': 'E-commerce Solutions',
    'services.ecommerce.desc': 'Complete e-commerce platform development with Shopify, custom integrations, and conversion optimization.',
    'services.ai.title': 'AI Integration',
    'services.ai.desc': 'Intelligent solutions powered by machine learning, LLMs, and AI technologies for enhanced user experiences.',
    'services.backend.title': 'Database & Backend',
    'services.backend.desc': 'Robust backend systems with proper database design, API development, and infrastructure setup.',
    'services.cloud.title': 'Cloud & DevOps',
    'services.cloud.desc': 'Cloud infrastructure setup, CI/CD pipelines, and DevOps automation for scalable applications.',
    'services.performance.title': 'Performance Optimization',
    'services.performance.desc': 'Application performance optimization, speed improvements, and user experience enhancements.',
    'services.features': 'Key Features:',
    'services.technologies': 'Technologies:',
    'services.process.title': 'Development Process',
    'services.process.discovery': 'Discovery & Planning',
    'services.process.discovery.desc': 'Understanding your requirements, goals, and technical specifications to create a detailed project plan.',
    'services.process.design': 'Design & Architecture',
    'services.process.design.desc': 'Creating technical architecture, database design, and UI/UX wireframes for your project.',
    'services.process.development': 'Development & Testing',
    'services.process.development.desc': 'Building your solution with clean code, comprehensive testing, and regular progress updates.',
    'services.process.deployment': 'Deployment & Launch',
    'services.process.deployment.desc': 'Deploying to production, performance optimization, and providing documentation and training.',
    'services.cta.title': 'Ready to Start Your Project?',
    'services.cta.subtitle': 'Let\'s discuss your requirements and create a solution that drives your business forward. I\'m available for both freelance projects and long-term collaborations.',
    'services.cta.start': 'Get Started',
    'services.cta.portfolio': 'View Portfolio',

    // Contact page
    'contact.title': 'Get in Touch',
    'contact.connect.title': "Let's Connect",
    'contact.connect.subtitle': 'Have a question or want to work together? I\'d love to hear from you! Whether you have a project in mind or just want to say hello, feel free to reach out.',
    'contact.form.name': 'Name *',
    'contact.form.email': 'Email *',
    'contact.form.message': 'Message *',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email.placeholder': 'your.email@example.com',
    'contact.form.message.placeholder': 'Tell me about your project or how I can help...',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message sent successfully! I\'ll get back to you soon.',
    'contact.form.error.name': 'Name is required',
    'contact.form.error.name.length': 'Name must be at least 2 characters',
    'contact.form.error.email': 'Email is required',
    'contact.form.error.email.invalid': 'Please enter a valid email address',
    'contact.form.error.message': 'Message is required',
    'contact.form.error.message.length': 'Message must be at least 10 characters',

    // Footer
    'footer.title': 'Matheus Abrahão',
    'footer.subtitle': 'Software Engineer & Full Stack Developer',
    'footer.quicklinks': 'Quick Links',
    'footer.connect': 'Connect',
    'footer.copyright': '© 2025 Matheus Abrahão. All rights reserved.',
    'footer.built': 'Built with Next.js, TypeScript, and Tailwind CSS | São Paulo, Brazil',
    'mobile.menu': 'Menu',
    'mobile.language': 'Language',
    'mobile.theme': 'Theme',
  },
  'pt-BR': {
    // Navigation
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.services': 'Serviços',
    'nav.contact': 'Contato',

    // Homepage
    'home.title': 'Matheus Abrahão',
    'home.subtitle': 'Engenheiro de Software | Desenvolvedor Full Stack | Especialista em TypeScript & Golang',
    'home.description': 'Construindo aplicações modernas e escaláveis com arquitetura limpa e princípios sólidos de engenharia. Gerou mais de $80K em receita através de plataformas de e-commerce e soluções com IA.',
    'home.stats.revenue': 'Receita Gerada',
    'home.stats.revenue.value': 'R$400K+',
    'home.stats.experience': 'Anos de Experiência',
    'home.stats.projects': 'Projetos Entregues',
    'home.stats.technologies': 'Tecnologias',
    'home.cta.projects': 'Ver Projetos',
    'home.cta.services': 'Meus Serviços',
    'home.cta.resume': 'Currículo',
    'home.cta.contact': 'Entre em Contato',
    'home.skills.title': 'Tecnologias Principais',
    'home.connect.title': 'Vamos Conectar',
    'home.connect.subtitle': 'Disponível para projetos freelancer e oportunidades em tempo integral',

    // About page
    'about.title': 'Sobre Mim',
    'about.professional.title': 'Filosofia Profissional',
    'about.professional.excellence.title': 'Excelência Técnica',
    'about.professional.excellence.desc': 'Acredito em escrever código limpo e sustentável que segue os princípios SOLID e padrões de arquitetura limpa. Toda solução que construo é projetada para ser escalável, performática e fácil de manter.',
    'about.professional.business.title': 'Impacto nos Negócios',
    'about.professional.business.desc': 'Meu background empreendedor me ajuda a entender o lado comercial da tecnologia. Foco em entregar soluções que não apenas funcionam tecnicamente, mas também geram valor real para o negócio.',
    'about.professional.learning.title': 'Aprendizado Contínuo',
    'about.professional.learning.desc': 'A tecnologia evolui rapidamente, e eu me mantenho atualizado com as últimas tendências e melhores práticas. Estou particularmente animado com a integração de IA/ML e seu potencial para transformar negócios.',
    'about.professional.client.title': 'Sucesso do Cliente',
    'about.professional.client.desc': 'Meço meu sucesso pelo sucesso dos meus clientes. Trabalho de perto com os clientes para entender suas necessidades e entregar soluções que superam suas expectativas.',
    'about.skills.title': 'Habilidades Técnicas',
    'about.experience.title': 'Experiência Profissional',
    'about.timeline.title': 'Linha do Tempo da Carreira',
    'about.achievements.revenue': 'R$400K+ Receita Gerada',
    'about.achievements.revenue.desc': 'Construiu e operou com sucesso plataformas de e-commerce gerando receita significativa',
    'about.achievements.projects': '20+ Projetos Entregues',
    'about.achievements.projects.desc': 'Completou projetos diversos em desenvolvimento web, e-commerce e integração de IA',
    'about.achievements.international': 'Experiência Internacional',
    'about.achievements.international.desc': 'Trabalhou com clientes de múltiplos países incluindo França, EUA e Brasil',
    'about.achievements.excellence': 'Excelência Técnica',
    'about.achievements.excellence.desc': 'Entregou consistentemente soluções de alta qualidade usando tecnologias modernas e melhores práticas',
    'about.summary.paragraph1': 'Sou um Engenheiro de Software apaixonado focado em construir aplicações full-stack modernas e escaláveis baseadas em arquitetura limpa, automação e princípios sólidos de engenharia de software. Trabalho principalmente com TypeScript, Golang, Docker e tecnologias Cloud, entregando soluções robustas de ponta a ponta com bases sólidas em algoritmos, estruturas de dados e design de sistemas.',
    'about.summary.paragraph2': 'Desde 2021, lidero independentemente as operações técnicas da Martin4Shop, uma marca de e-commerce própria que gerou mais de R$400.000 em receita. Construí toda a plataforma do zero usando Shopify Hydrogen, React e Remix, junto com automações customizadas. Esta experiência me deu insights profundos e práticos sobre como engenharia, produto e negócio se intersectam.',
    'about.summary.paragraph3': 'Tenho domínio completo do ciclo de vida de desenvolvimento: aplicações web modernas, APIs REST/GraphQL, bancos de dados relacionais e NoSQL, pipelines de CI/CD, containerização, testes e código limpo e sustentável usando princípios SOLID. Também tenho experiência prática com modelos de machine learning e soluções com IA.',

    // Services page
    'services.title': 'Serviços Profissionais',
    'services.subtitle': 'Serviços abrangentes de engenharia de software adaptados às necessidades do seu negócio. Do desenvolvimento full-stack à integração de IA, entrego soluções escaláveis que geram resultados.',
    'services.fullstack.title': 'Desenvolvimento Full Stack',
    'services.fullstack.desc': 'Desenvolvimento de aplicações web de ponta a ponta usando tecnologias modernas como TypeScript, React, Next.js e Golang.',
    'services.ecommerce.title': 'Soluções de E-commerce',
    'services.ecommerce.desc': 'Desenvolvimento completo de plataformas de e-commerce com Shopify, integrações customizadas e otimização de conversão.',
    'services.ai.title': 'Integração de IA',
    'services.ai.desc': 'Soluções inteligentes alimentadas por machine learning, LLMs e tecnologias de IA para experiências de usuário aprimoradas.',
    'services.backend.title': 'Banco de Dados & Backend',
    'services.backend.desc': 'Sistemas backend robustos com design adequado de banco de dados, desenvolvimento de API e configuração de infraestrutura.',
    'services.cloud.title': 'Cloud & DevOps',
    'services.cloud.desc': 'Configuração de infraestrutura em nuvem, pipelines de CI/CD e automação DevOps para aplicações escaláveis.',
    'services.performance.title': 'Otimização de Performance',
    'services.performance.desc': 'Otimização de performance de aplicações, melhorias de velocidade e aprimoramentos da experiência do usuário.',
    'services.features': 'Principais Recursos:',
    'services.technologies': 'Tecnologias:',
    'services.process.title': 'Processo de Desenvolvimento',
    'services.process.discovery': 'Descoberta & Planejamento',
    'services.process.discovery.desc': 'Entendendo seus requisitos, objetivos e especificações técnicas para criar um plano detalhado do projeto.',
    'services.process.design': 'Design & Arquitetura',
    'services.process.design.desc': 'Criando arquitetura técnica, design de banco de dados e wireframes de UI/UX para seu projeto.',
    'services.process.development': 'Desenvolvimento & Testes',
    'services.process.development.desc': 'Construindo sua solução com código limpo, testes abrangentes e atualizações regulares de progresso.',
    'services.process.deployment': 'Deploy & Lançamento',
    'services.process.deployment.desc': 'Fazendo deploy em produção, otimização de performance e fornecendo documentação e treinamento.',
    'services.cta.title': 'Pronto para Começar Seu Projeto?',
    'services.cta.subtitle': 'Vamos discutir seus requisitos e criar uma solução que impulsione seu negócio. Estou disponível para projetos freelancer e colaborações de longo prazo.',
    'services.cta.start': 'Começar',
    'services.cta.portfolio': 'Ver Portfólio',

    // Contact page
    'contact.title': 'Entre em Contato',
    'contact.connect.title': 'Vamos Conectar',
    'contact.connect.subtitle': 'Tem uma pergunta ou quer trabalhar junto? Adoraria ouvir de você! Seja um projeto em mente ou apenas quer dizer olá, sinta-se à vontade para entrar em contato.',
    'contact.form.name': 'Nome *',
    'contact.form.email': 'Email *',
    'contact.form.message': 'Mensagem *',
    'contact.form.name.placeholder': 'Seu nome',
    'contact.form.email.placeholder': 'seu.email@exemplo.com',
    'contact.form.message.placeholder': 'Me conte sobre seu projeto ou como posso ajudar...',
    'contact.form.send': 'Enviar Mensagem',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
    'contact.form.error.name': 'Nome é obrigatório',
    'contact.form.error.name.length': 'Nome deve ter pelo menos 2 caracteres',
    'contact.form.error.email': 'Email é obrigatório',
    'contact.form.error.email.invalid': 'Por favor, insira um email válido',
    'contact.form.error.message': 'Mensagem é obrigatória',
    'contact.form.error.message.length': 'Mensagem deve ter pelo menos 10 caracteres',

    // Footer
    'footer.title': 'Matheus Abrahão',
    'footer.subtitle': 'Engenheiro de Software & Desenvolvedor Full Stack',
    'footer.quicklinks': 'Links Rápidos',
    'footer.connect': 'Conectar',
    'footer.copyright': '© 2025 Matheus Abrahão. Todos os direitos reservados.',
    'footer.built': 'Construído com Next.js, TypeScript e Tailwind CSS | São Paulo, Brasil',
    'mobile.menu': 'Menu',
    'mobile.language': 'Idioma',
    'mobile.theme': 'Tema',
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    // Check for saved language preference or browser language
    const savedLanguage = localStorage.getItem('language') as Language
    const browserLanguage = navigator.language.startsWith('pt') ? 'pt-BR' : 'en'
    setLanguage(savedLanguage || browserLanguage)
  }, [])

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
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