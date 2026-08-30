"use client"

import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

/**
 * Privacy Policy.
 *
 * Written against what this site ACTUALLY does today (checked in the code, not
 * copied from a template):
 *  - static Next.js portfolio on Vercel, no database, no API routes
 *  - no analytics, no tag manager, no pixels, no ad networks
 *  - the only browser storage is `theme` (next-themes) and `language`
 *  - the /contact form is validated client-side and never transmitted
 * If any of that changes, this page must change with it.
 */

const LAST_UPDATED = { en: "August 30, 2026", pt: "30 de agosto de 2026" }

type Block =
  | { p: string }
  | { list: string[] }
  | { links: { label: string; href: string }[] }

type Section = { h: string; blocks: Block[] }

const EN: Section[] = [
  {
    h: "1. Who is responsible for your data",
    blocks: [
      {
        p: "This website — matheusabrahao.com.br — is operated by Matheus Abrahão, an individual software engineer and Shopify specialist based in Atibaia, São Paulo, Brazil. Under the GDPR he is the \"controller\"; under the LGPD, the \"controlador\"; under the CCPA/CPRA, the \"business\".",
      },
      {
        p: "There is no data protection officer, because the volume of personal data processed here does not require one. Every request below goes to the same place: my inbox.",
      },
      {
        links: [
          { label: "contato.matheusabrahao@gmail.com", href: "mailto:contato.matheusabrahao@gmail.com" },
          { label: "WhatsApp +55 11 98851-2788", href: "https://wa.me/5511988512788" },
        ],
      },
    ],
  },
  {
    h: "2. The short version",
    blocks: [
      {
        p: "This is a portfolio. It sells nothing, has no user accounts, no database, and no advertising. It does not profile you, does not track you across sites, and does not sell or share your data with anyone for marketing purposes.",
      },
      {
        p: "The only personal data I actually end up holding is what you deliberately send me — an email or a WhatsApp message — plus the ordinary server logs my hosting provider keeps to serve the page to you.",
      },
    ],
  },
  {
    h: "3. What is collected when you just browse",
    blocks: [
      {
        p: "Nothing that I can see or use. There is no analytics tool on this site: no Google Analytics, no Google Tag Manager, no Meta Pixel, no Vercel Analytics or Speed Insights, no heatmaps, no session recording, no A/B testing. I do not know how many people visit this site, or which pages they read.",
      },
      {
        p: "Two things happen automatically that involve your device, and you should know about both:",
      },
      {
        list: [
          "Server logs. Vercel, my hosting provider, records standard request data (IP address, timestamp, requested URL, user agent, response status) in order to deliver the page, keep the platform running, and defend against abuse. These logs are held by Vercel under its own retention rules; I do not export, enrich, or analyse them.",
          "One external asset. The icon font used for technology logos is loaded from the jsDelivr CDN (cdn.jsdelivr.net). Your browser therefore makes a request to jsDelivr, which sees your IP address and user agent. jsDelivr states that it does not use cookies or track users. Nothing else on this site is loaded from a third-party domain.",
        ],
      },
      { p: "Legal basis: legitimate interest (GDPR art. 6(1)(f)) / legitimate interest under LGPD art. 7, IX — operating and securing a website. The purpose is limited to delivery and security; there is no profiling." },
    ],
  },
  {
    h: "4. The contact form — read this before you use it",
    blocks: [
      {
        p: "The form at /contact currently has no backend. Your name, email and message are validated inside your own browser and then discarded when you leave or reload the page. They are not sent to a server, not stored, and not emailed to me. The success message you see is the form's front end, not a delivery confirmation.",
      },
      {
        p: "That means two things. First, nothing you type into that form ever becomes data I hold. Second, if you actually want to reach me, use email or WhatsApp — those work.",
      },
      {
        p: "If and when the form is connected to a real backend, this section will be rewritten before that change goes live, and it will state the processor used, the retention period, and the legal basis.",
      },
    ],
  },
  {
    h: "5. When you email or message me",
    blocks: [
      {
        p: "If you contact me by email or WhatsApp, I receive whatever you chose to send: typically your name, your email address or phone number, and the content of your message — often including details about your business or your Shopify store.",
      },
      { p: "Purpose: to reply to you, to quote and discuss possible work, and to carry out any engagement we agree on." },
      {
        p: "Legal basis: your request / steps prior to entering a contract (GDPR art. 6(1)(b), LGPD art. 7, V), and my legitimate interest in answering business enquiries (GDPR art. 6(1)(f), LGPD art. 7, IX).",
      },
      {
        p: "Retention: enquiries that do not lead to work are kept in my mailbox for up to 24 months, so I can pick up a conversation that resumes later, and then deleted. Correspondence tied to actual paid work is kept for as long as I may need it for tax, accounting or legal-defence purposes under Brazilian law. You can ask me to delete your messages sooner and I will, unless a legal obligation requires me to keep them.",
      },
      {
        p: "Note the obvious: email and WhatsApp are not private channels between just the two of us. Google processes my email and Meta processes my WhatsApp messages, each under their own terms. If your message is sensitive, say so and we will move to a channel you choose.",
      },
    ],
  },
  {
    h: "6. What is never collected",
    blocks: [
      {
        list: [
          "No accounts, passwords or authentication of any kind.",
          "No payment or card data — this site takes no payments.",
          "No cookies set by me for advertising, remarketing or cross-site tracking.",
          "No purchase, location, biometric or sensitive-category data.",
          "No data about children. This site is aimed at businesses and professionals and is not directed at anyone under 18.",
          "No sale or sharing of personal information as those terms are defined by the CCPA/CPRA — I have never sold or shared personal information, and I do not intend to.",
        ],
      },
    ],
  },
  {
    h: "7. Cookies and browser storage",
    blocks: [
      {
        p: "This site sets no tracking cookies. It does keep two small preferences in your browser's localStorage — your chosen theme and your chosen language — which never leave your device. The details, including how to clear them, are on the cookie page.",
      },
    ],
  },
  {
    h: "8. Third parties",
    blocks: [
      { p: "These are the only third parties involved in running this site:" },
      {
        list: [
          "Vercel Inc. — hosting and content delivery. Receives your request data (including IP) as a processor.",
          "jsDelivr (Prospect One) — public CDN serving the icon font.",
          "Google LLC — only because my email address is a Gmail address, so Google processes messages you send me.",
          "Meta Platforms — only if you contact me through WhatsApp.",
        ],
      },
      {
        links: [
          { label: "Vercel Privacy Policy", href: "https://vercel.com/legal/privacy-policy" },
          { label: "jsDelivr Privacy Policy", href: "https://www.jsdelivr.com/terms/privacy-policy-jsdelivr-net" },
          { label: "Google Privacy Policy", href: "https://policies.google.com/privacy" },
          { label: "WhatsApp Privacy Policy", href: "https://www.whatsapp.com/legal/privacy-policy" },
        ],
      },
      {
        p: "Links to GitHub, LinkedIn and Instagram appear on this site. Following them takes you to services with their own privacy policies, over which I have no control.",
      },
    ],
  },
  {
    h: "9. International transfers",
    blocks: [
      {
        p: "I am in Brazil, but the site is hosted on infrastructure operated from the United States, and my email and messaging providers are US companies. So if you are in the EU, the UK, Canada or Brazil, data related to your visit or your message is processed outside your country.",
      },
      {
        p: "For transfers out of the EEA/UK, Vercel and Google rely on the European Commission's Standard Contractual Clauses and, where applicable, the EU-US Data Privacy Framework. For transfers out of Brazil, the transfer is grounded on the execution of a contract at your request and on your enquiry (LGPD art. 33). If this level of exposure is a problem for your organisation, tell me before you send anything.",
      },
    ],
  },
  {
    h: "10. Security",
    blocks: [
      {
        p: "The site is served over HTTPS with HSTS, and sends X-Content-Type-Options, X-Frame-Options, a strict Referrer-Policy and a restrictive Permissions-Policy. There is no database to breach and no credentials to steal, which is the strongest security property this site has.",
      },
      {
        p: "Your messages live in my Google and WhatsApp accounts, both protected by strong authentication. No system is perfect; if I ever became aware of a breach affecting your data, I would tell you and the relevant authority (ANPD in Brazil, the competent supervisory authority in the EU) as required by law.",
      },
    ],
  },
  {
    h: "11. Your rights",
    blocks: [
      {
        p: "Which law applies depends on where you are, but the practical answer is the same everywhere: email me and I will act on it. Be aware that for a plain visitor I usually hold nothing at all, so the honest answer to an access request may be \"I have no data about you\".",
      },
      {
        p: "Brazil — LGPD: confirmation of processing, access, correction, anonymisation or deletion of unnecessary or excessive data, portability, information about the entities I share data with, and the right to withdraw consent. You may also complain to the ANPD (gov.br/anpd).",
      },
      {
        p: "EU / UK — GDPR: access, rectification, erasure, restriction, portability, objection to processing based on legitimate interest, and the right to lodge a complaint with your national supervisory authority. There is no automated decision-making or profiling here.",
      },
      {
        p: "California — CCPA/CPRA: the right to know what is collected and why, to delete, to correct, to opt out of sale or sharing (nothing is sold or shared, so there is nothing to opt out of), to limit the use of sensitive personal information (none is collected), and not to be discriminated against for exercising these rights. Authorised agents may submit requests on your behalf.",
      },
      {
        p: "Canada — PIPEDA: the right to access the personal information I hold about you and to challenge its accuracy, and to complain to the Office of the Privacy Commissioner of Canada.",
      },
      {
        p: "To exercise any of these, email the address below with the subject \"Privacy request\". I answer within 15 days (LGPD) or 30 days (GDPR, CCPA/CPRA, PIPEDA), whichever is shorter for your case. I may ask a question or two to confirm you are who you say you are — usually just that you are writing from the address you originally contacted me from. Exercising a right is free.",
      },
      {
        links: [
          { label: "contato.matheusabrahao@gmail.com", href: "mailto:contato.matheusabrahao@gmail.com" },
        ],
      },
    ],
  },
  {
    h: "12. Changes to this policy",
    blocks: [
      {
        p: "If what this site does changes — an analytics tool, a working contact form, a newsletter — this policy gets updated before the change goes live, and the date at the top changes with it. There is no mailing list to notify, so the date is the honest signal.",
      },
    ],
  },
]

const PT: Section[] = [
  {
    h: "1. Quem é responsável pelos seus dados",
    blocks: [
      {
        p: "Este site — matheusabrahao.com.br — é operado por Matheus Abrahão, engenheiro de software e especialista Shopify, pessoa física estabelecida em Atibaia, São Paulo, Brasil. Ele é o \"controlador\" nos termos da LGPD, o \"controller\" nos termos do GDPR e o \"business\" nos termos da CCPA/CPRA.",
      },
      {
        p: "Não há encarregado (DPO) designado, porque o volume de dados pessoais tratado aqui não exige um. Todos os pedidos descritos abaixo chegam ao mesmo lugar: minha caixa de entrada.",
      },
      {
        links: [
          { label: "contato.matheusabrahao@gmail.com", href: "mailto:contato.matheusabrahao@gmail.com" },
          { label: "WhatsApp +55 11 98851-2788", href: "https://wa.me/5511988512788" },
        ],
      },
    ],
  },
  {
    h: "2. Versão curta",
    blocks: [
      {
        p: "Isto é um portfólio. Não vende nada, não tem cadastro de usuário, não tem banco de dados e não tem publicidade. Não faz perfilamento, não rastreia você entre sites e não vende nem compartilha seus dados com ninguém para fins de marketing.",
      },
      {
        p: "O único dado pessoal que efetivamente fica comigo é o que você deliberadamente me envia — um e-mail ou uma mensagem de WhatsApp — somado aos logs de servidor que a hospedagem mantém para entregar a página até você.",
      },
    ],
  },
  {
    h: "3. O que é coletado quando você apenas navega",
    blocks: [
      {
        p: "Nada que eu consiga ver ou usar. Não há ferramenta de analytics neste site: sem Google Analytics, sem Google Tag Manager, sem Meta Pixel, sem Vercel Analytics ou Speed Insights, sem mapa de calor, sem gravação de sessão, sem teste A/B. Eu não sei quantas pessoas acessam este site nem quais páginas elas leem.",
      },
      { p: "Duas coisas acontecem automaticamente envolvendo o seu dispositivo, e você deve saber das duas:" },
      {
        list: [
          "Logs de servidor. A Vercel, minha hospedagem, registra dados padrão de requisição (endereço IP, data e hora, URL solicitada, user agent, status da resposta) para entregar a página, manter a plataforma no ar e se defender de abusos. Esses logs ficam com a Vercel sob as regras de retenção dela; eu não exporto, não enriqueço e não analiso esses dados.",
          "Um recurso externo. A fonte de ícones usada para os logos de tecnologia é carregada da CDN jsDelivr (cdn.jsdelivr.net). Seu navegador, portanto, faz uma requisição à jsDelivr, que vê seu IP e seu user agent. A jsDelivr declara não usar cookies nem rastrear usuários. Nenhum outro recurso deste site vem de domínio de terceiro.",
        ],
      },
      { p: "Base legal: legítimo interesse (LGPD art. 7º, IX; GDPR art. 6(1)(f)) — operar e proteger um site. A finalidade se limita à entrega e à segurança; não há perfilamento." },
    ],
  },
  {
    h: "4. O formulário de contato — leia antes de usar",
    blocks: [
      {
        p: "O formulário em /contact hoje não tem backend. Seu nome, e-mail e mensagem são validados dentro do seu próprio navegador e descartados quando você sai ou recarrega a página. Não são enviados a servidor nenhum, não são armazenados e não chegam ao meu e-mail. A mensagem de sucesso que aparece é da interface, não é confirmação de entrega.",
      },
      {
        p: "Isso significa duas coisas. Primeiro: nada do que você digitar nesse formulário se torna um dado que eu detenho. Segundo: se você realmente quer falar comigo, use e-mail ou WhatsApp — esses funcionam.",
      },
      {
        p: "Se e quando o formulário for ligado a um backend real, esta seção será reescrita antes de a mudança entrar no ar, informando o operador utilizado, o prazo de retenção e a base legal.",
      },
    ],
  },
  {
    h: "5. Quando você me escreve",
    blocks: [
      {
        p: "Se você me contata por e-mail ou WhatsApp, eu recebo o que você escolheu enviar: normalmente seu nome, seu e-mail ou telefone e o conteúdo da mensagem — muitas vezes incluindo detalhes sobre o seu negócio ou a sua loja Shopify.",
      },
      { p: "Finalidade: responder você, orçar e discutir um possível trabalho e executar o que combinarmos." },
      {
        p: "Base legal: seu próprio pedido / procedimentos preliminares a contrato (LGPD art. 7º, V; GDPR art. 6(1)(b)) e meu legítimo interesse em responder a contatos comerciais (LGPD art. 7º, IX; GDPR art. 6(1)(f)).",
      },
      {
        p: "Retenção: contatos que não viram trabalho ficam na minha caixa por até 24 meses, para eu conseguir retomar uma conversa que volta depois, e então são apagados. Correspondência ligada a trabalho efetivamente contratado é mantida pelo tempo em que possa ser necessária para fins fiscais, contábeis ou de defesa em processo, conforme a lei brasileira. Você pode pedir a exclusão antes disso e eu apago, salvo obrigação legal de guarda.",
      },
      {
        p: "Vale o óbvio: e-mail e WhatsApp não são canais privados só entre nós dois. O Google trata o meu e-mail e a Meta trata as minhas mensagens de WhatsApp, cada um sob seus próprios termos. Se a sua mensagem for sensível, me avise e mudamos para um canal que você escolher.",
      },
    ],
  },
  {
    h: "6. O que nunca é coletado",
    blocks: [
      {
        list: [
          "Nenhuma conta, senha ou autenticação de qualquer tipo.",
          "Nenhum dado de pagamento ou de cartão — este site não recebe pagamentos.",
          "Nenhum cookie definido por mim para publicidade, remarketing ou rastreamento entre sites.",
          "Nenhum dado de compra, localização, biometria ou dado pessoal sensível.",
          "Nenhum dado de crianças. Este site é dirigido a empresas e profissionais e não se destina a menores de 18 anos.",
          "Nenhuma venda ou compartilhamento de informação pessoal no sentido da CCPA/CPRA — nunca vendi nem compartilhei, e não pretendo.",
        ],
      },
    ],
  },
  {
    h: "7. Cookies e armazenamento no navegador",
    blocks: [
      {
        p: "Este site não define cookies de rastreamento. Ele guarda duas pequenas preferências no localStorage do seu navegador — o tema escolhido e o idioma escolhido — que nunca saem do seu dispositivo. Os detalhes, incluindo como limpar, estão na página de cookies.",
      },
    ],
  },
  {
    h: "8. Terceiros",
    blocks: [
      { p: "Estes são os únicos terceiros envolvidos no funcionamento deste site:" },
      {
        list: [
          "Vercel Inc. — hospedagem e entrega de conteúdo. Recebe os dados da sua requisição (inclusive IP) na condição de operador.",
          "jsDelivr (Prospect One) — CDN pública que serve a fonte de ícones.",
          "Google LLC — apenas porque meu endereço de e-mail é Gmail, então o Google trata as mensagens que você me envia.",
          "Meta Platforms — apenas se você me contatar pelo WhatsApp.",
        ],
      },
      {
        links: [
          { label: "Política de Privacidade da Vercel", href: "https://vercel.com/legal/privacy-policy" },
          { label: "Política de Privacidade da jsDelivr", href: "https://www.jsdelivr.com/terms/privacy-policy-jsdelivr-net" },
          { label: "Política de Privacidade do Google", href: "https://policies.google.com/privacy" },
          { label: "Política de Privacidade do WhatsApp", href: "https://www.whatsapp.com/legal/privacy-policy" },
        ],
      },
      {
        p: "Há links para GitHub, LinkedIn e Instagram neste site. Segui-los leva você a serviços com políticas próprias, sobre as quais não tenho controle.",
      },
    ],
  },
  {
    h: "9. Transferência internacional de dados",
    blocks: [
      {
        p: "Eu estou no Brasil, mas o site é hospedado em infraestrutura operada a partir dos Estados Unidos, e meus provedores de e-mail e mensagem são empresas norte-americanas. Então, se você está na União Europeia, no Reino Unido, no Canadá ou no Brasil, os dados relativos à sua visita ou à sua mensagem são tratados fora do seu país.",
      },
      {
        p: "Para transferências para fora do EEE/Reino Unido, Vercel e Google se apoiam nas Cláusulas Contratuais Padrão da Comissão Europeia e, quando aplicável, no EU-US Data Privacy Framework. Para transferências a partir do Brasil, a transferência se fundamenta na execução de contrato a seu pedido e no seu próprio contato (LGPD art. 33). Se esse nível de exposição for um problema para a sua organização, me diga antes de enviar qualquer coisa.",
      },
    ],
  },
  {
    h: "10. Segurança",
    blocks: [
      {
        p: "O site é servido por HTTPS com HSTS e envia X-Content-Type-Options, X-Frame-Options, Referrer-Policy restritiva e Permissions-Policy restritiva. Não há banco de dados para vazar nem credenciais para roubar, o que é a propriedade de segurança mais forte deste site.",
      },
      {
        p: "Suas mensagens ficam nas minhas contas Google e WhatsApp, ambas protegidas por autenticação forte. Nenhum sistema é perfeito; se eu tomasse conhecimento de um incidente afetando seus dados, comunicaria você e a autoridade competente (ANPD no Brasil, a autoridade supervisora aplicável na UE) conforme exigido em lei.",
      },
    ],
  },
  {
    h: "11. Seus direitos",
    blocks: [
      {
        p: "Qual lei se aplica depende de onde você está, mas a resposta prática é a mesma em todo lugar: me mande um e-mail e eu atendo. Saiba que, para um visitante comum, normalmente eu não tenho absolutamente nada, então a resposta honesta a um pedido de acesso pode ser \"não tenho dado nenhum sobre você\".",
      },
      {
        p: "Brasil — LGPD: confirmação da existência de tratamento, acesso, correção, anonimização ou eliminação de dados desnecessários ou excessivos, portabilidade, informação sobre com quem compartilho dados e revogação do consentimento. Você também pode reclamar à ANPD (gov.br/anpd).",
      },
      {
        p: "UE / Reino Unido — GDPR: acesso, retificação, apagamento, limitação, portabilidade, oposição ao tratamento baseado em legítimo interesse e direito de reclamar à autoridade supervisora do seu país. Não há decisão automatizada nem perfilamento aqui.",
      },
      {
        p: "Califórnia — CCPA/CPRA: direito de saber o que é coletado e por quê, de excluir, de corrigir, de recusar a venda ou o compartilhamento (nada é vendido ou compartilhado, então não há do que recusar), de limitar o uso de informação pessoal sensível (nenhuma é coletada) e de não sofrer discriminação por exercer esses direitos. Agentes autorizados podem enviar pedidos em seu nome.",
      },
      {
        p: "Canadá — PIPEDA: direito de acessar a informação pessoal que eu detenho sobre você, de contestar sua exatidão e de reclamar ao Office of the Privacy Commissioner of Canada.",
      },
      {
        p: "Para exercer qualquer um desses direitos, escreva para o e-mail abaixo com o assunto \"Pedido de privacidade\". Respondo em até 15 dias (LGPD) ou 30 dias (GDPR, CCPA/CPRA, PIPEDA), o que for mais curto no seu caso. Posso fazer uma ou duas perguntas para confirmar que você é quem diz ser — em geral apenas que você escreve do mesmo endereço com que me contatou. Exercer um direito é gratuito.",
      },
      {
        links: [
          { label: "contato.matheusabrahao@gmail.com", href: "mailto:contato.matheusabrahao@gmail.com" },
        ],
      },
    ],
  },
  {
    h: "12. Alterações nesta política",
    blocks: [
      {
        p: "Se o que este site faz mudar — uma ferramenta de analytics, um formulário de contato funcionando, uma newsletter — esta política é atualizada antes de a mudança entrar no ar, e a data no topo muda junto. Não há lista de e-mails para avisar ninguém, então a data é o sinal honesto.",
      },
    ],
  },
]

export default function PrivacyPolicy() {
  const { language } = useLanguage()
  const pt = language === "pt-BR"
  const sections = pt ? PT : EN

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-3 text-gradient">
          {pt ? "Política de Privacidade" : "Privacy Policy"}
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          {pt ? "Última atualização: " : "Last updated: "}
          {pt ? LAST_UPDATED.pt : LAST_UPDATED.en}
        </p>

        <div className="rounded-xl border border-border/60 bg-secondary/20 p-4 text-sm text-muted-foreground mb-10">
          {pt
            ? "Este documento descreve, da forma mais direta possível, o que este site faz com dados pessoais. Ele não é aconselhamento jurídico. Se você depende dele para uma exigência de compliance, peça a um advogado da sua jurisdição para revisar."
            : "This document describes, as plainly as possible, what this site does with personal data. It is not legal advice. If you are relying on it for a compliance requirement, have a lawyer in your jurisdiction review it."}
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.h}>
              <h2 className="text-xl font-semibold mb-3 text-foreground">{section.h}</h2>
              <div className="space-y-3">
                {section.blocks.map((block, i) => {
                  if ("p" in block) {
                    return (
                      <p key={i} className="text-muted-foreground leading-relaxed">
                        {block.p}
                      </p>
                    )
                  }
                  if ("list" in block) {
                    return (
                      <ul key={i} className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
                        {block.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )
                  }
                  return (
                    <ul key={i} className="space-y-1">
                      {block.links.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target={link.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )
                })}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-border/50 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/cookie-policy" className="text-primary hover:text-primary/80 transition-colors">
            {pt ? "Política de Cookies" : "Cookie Policy"}
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
            {pt ? "Contato" : "Contact"}
          </Link>
        </div>
      </div>
    </div>
  )
}
