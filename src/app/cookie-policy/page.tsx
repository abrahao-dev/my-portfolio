"use client"

import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

/**
 * Cookie Policy.
 *
 * Verified against the code: this site sets NO cookies. The only browser
 * storage is localStorage — `theme` (next-themes) and `language`
 * (language-context) — plus `cookie-consent`, which is only ever written if a
 * consent-requiring script (currently none) is configured. Keep this page in
 * sync with src/components/cookie-consent.tsx.
 */

const LAST_UPDATED = { en: "August 30, 2026", pt: "30 de agosto de 2026" }

type Row = { name: string; type: string; purpose: string; life: string }
type Section = { h: string; p: string[]; table?: Row[]; after?: string[] }
type Content = {
  title: string
  updated: string
  disclaimer: string
  sections: Section[]
  footerLink: string
  contact: string
  questions: string
}

const EN: Content = {
  title: "Cookie Policy",
  updated: "Last updated: ",
  disclaimer:
    "This page describes exactly what this site stores in your browser. It is not legal advice — if you rely on it for a compliance requirement, have a lawyer review it.",
  sections: [
    {
      h: "What cookies are",
      p: [
        "A cookie is a small text file a website asks your browser to store and then sends back on every later request. Cookies are what make advertising networks able to recognise you across unrelated sites — which is why they need consent.",
        "There is a related but different mechanism: localStorage. It also stores small values in your browser, but it is never automatically sent to a server. It just sits on your machine so the page can read it back the next time you open it.",
      ],
    },
    {
      h: "What this site actually uses",
      p: [
        "This site sets no cookies at all. Not one. No advertising cookies, no analytics cookies, no session cookies, no first-party or third-party tracking of any kind. There is no analytics tool installed here — no Google Analytics, no tag manager, no pixel, no Vercel Analytics — so there is nothing that would want a cookie in the first place.",
        "What it does use is localStorage, for two preferences that would otherwise reset on every page you open:",
      ],
      table: [
        {
          name: "theme",
          type: "localStorage — strictly necessary / preference",
          purpose:
            "Remembers whether you chose light, dark, or system appearance. Written by the theme switcher in the header.",
          life: "Until you clear your browser storage.",
        },
        {
          name: "language",
          type: "localStorage — strictly necessary / preference",
          purpose:
            "Remembers whether you chose English or Portuguese. Written by the language switcher. If it is absent, the site guesses once from your browser's language setting and does not store anything.",
          life: "Until you clear your browser storage.",
        },
        {
          name: "cookie-consent",
          type: "localStorage — strictly necessary",
          purpose:
            "Records your answer to the consent banner, so it does not ask you again. Written only if a consent-requiring script is configured on the site — which today it is not, so the banner does not appear and this value is not created.",
          life: "12 months, then the banner asks again.",
        },
      ] as Row[],
      after: [
        "None of these three values leave your device. They contain no identifier, nothing that could single you out, and nothing that is sent to me or to anyone else. Under the GDPR and the ePrivacy Directive they fall under the strictly-necessary / user-requested exemption, which is why the site does not block itself behind a banner to store them.",
      ],
    },
    {
      h: "Third-party requests",
      p: [
        "One external resource is loaded on every page: the Devicon icon font from the jsDelivr CDN (cdn.jsdelivr.net), used to draw the technology logos. Your browser has to contact jsDelivr to fetch it, so jsDelivr sees your IP address and user agent. jsDelivr states that it sets no cookies and does not track users.",
        "The site is hosted on Vercel, which keeps standard server logs for delivery and security. Those are logs, not cookies — you cannot opt out of them and still receive the page, because they are how the page reaches you.",
      ],
    },
    {
      h: "If analytics is ever added",
      p: [
        "If I ever add an analytics tool to this site, the consent banner switches on and no analytics script loads until you press Accept. Choosing \"Essential only\" means the script is never inserted into the page — not loaded and muted, not loaded at all. You can change your mind at any time by clearing the cookie-consent value as described below.",
      ],
    },
    {
      h: "How to inspect or clear what is stored",
      p: [
        "You do not have to trust this page — check it. Open your browser's developer tools, go to Application (Chrome/Edge) or Storage (Firefox/Safari), and look at Cookies and Local Storage for matheusabrahao.com.br. You should see an empty cookie list and at most the values in the table above.",
        "To clear them: in the same panel, right-click the values and delete them, or use your browser's \"Clear browsing data\" for this site. Clearing them only means the site forgets your theme and language and asks again. Nothing breaks.",
        "You can also block storage entirely — most browsers let you refuse cookies and site data per-site, and private/incognito windows discard everything on close. This site works normally either way; it just will not remember your preferences.",
      ],
    },
  ],
  footerLink: "Privacy Policy",
  contact: "Contact",
  questions:
    "Questions about anything on this page? Email contato.matheusabrahao@gmail.com and I will answer it directly.",
}

const PT: Content = {
  title: "Política de Cookies",
  updated: "Última atualização: ",
  disclaimer:
    "Esta página descreve exatamente o que este site guarda no seu navegador. Não é aconselhamento jurídico — se você depende dela para uma exigência de compliance, peça a um advogado para revisar.",
  sections: [
    {
      h: "O que são cookies",
      p: [
        "Cookie é um pequeno arquivo de texto que um site pede ao seu navegador para guardar e que volta ao servidor em toda requisição seguinte. São os cookies que permitem a redes de publicidade reconhecerem você em sites que não têm relação entre si — e é por isso que eles exigem consentimento.",
        "Existe um mecanismo parecido, mas diferente: o localStorage. Ele também guarda valores pequenos no seu navegador, mas nunca é enviado automaticamente para um servidor. Fica na sua máquina só para a página conseguir ler de volta na próxima vez que você abrir.",
      ],
    },
    {
      h: "O que este site realmente usa",
      p: [
        "Este site não define nenhum cookie. Nenhum. Sem cookie de publicidade, sem cookie de analytics, sem cookie de sessão, sem rastreamento primário ou de terceiros de qualquer tipo. Não há ferramenta de analytics instalada aqui — sem Google Analytics, sem tag manager, sem pixel, sem Vercel Analytics — então não existe nada que quisesse um cookie para começo de conversa.",
        "O que ele usa é localStorage, para duas preferências que, sem isso, seriam reiniciadas a cada página aberta:",
      ],
      table: [
        {
          name: "theme",
          type: "localStorage — estritamente necessário / preferência",
          purpose:
            "Lembra se você escolheu tema claro, escuro ou o do sistema. Escrito pelo seletor de tema no cabeçalho.",
          life: "Até você limpar o armazenamento do navegador.",
        },
        {
          name: "language",
          type: "localStorage — estritamente necessário / preferência",
          purpose:
            "Lembra se você escolheu inglês ou português. Escrito pelo seletor de idioma. Se não existir, o site adivinha uma vez pelo idioma configurado no navegador e não guarda nada.",
          life: "Até você limpar o armazenamento do navegador.",
        },
        {
          name: "cookie-consent",
          type: "localStorage — estritamente necessário",
          purpose:
            "Registra sua resposta ao banner de consentimento, para não perguntar de novo. Só é escrito se houver um script que exija consentimento configurado no site — o que hoje não existe, então o banner não aparece e esse valor não é criado.",
          life: "12 meses; depois o banner pergunta novamente.",
        },
      ] as Row[],
      after: [
        "Nenhum desses três valores sai do seu dispositivo. Eles não contêm identificador, não permitem singularizar você e não são enviados a mim nem a ninguém. Sob o GDPR e a Diretiva ePrivacy, eles se enquadram na exceção de estritamente necessário / solicitado pelo usuário — por isso o site não se bloqueia atrás de um banner para guardá-los.",
      ],
    },
    {
      h: "Requisições a terceiros",
      p: [
        "Um recurso externo é carregado em todas as páginas: a fonte de ícones Devicon, vinda da CDN jsDelivr (cdn.jsdelivr.net), usada para desenhar os logos de tecnologia. Seu navegador precisa contatar a jsDelivr para buscá-la, então a jsDelivr vê seu IP e seu user agent. A jsDelivr declara não definir cookies e não rastrear usuários.",
        "O site é hospedado na Vercel, que mantém logs de servidor padrão para entrega e segurança. Isso são logs, não cookies — não dá para recusá-los e ainda assim receber a página, porque é assim que a página chega até você.",
      ],
    },
    {
      h: "Se algum dia houver analytics",
      p: [
        "Se eu adicionar uma ferramenta de analytics a este site, o banner de consentimento é ativado e nenhum script de analytics carrega antes de você clicar em Aceitar. Escolher \"Somente essenciais\" significa que o script nunca é inserido na página — não é carregado e silenciado, simplesmente não é carregado. Você pode mudar de ideia a qualquer momento apagando o valor cookie-consent, como descrito abaixo.",
      ],
    },
    {
      h: "Como inspecionar ou limpar o que está guardado",
      p: [
        "Você não precisa acreditar nesta página — confira. Abra as ferramentas de desenvolvedor do navegador, vá em Application (Chrome/Edge) ou Storage (Firefox/Safari) e olhe Cookies e Local Storage para matheusabrahao.com.br. Você deve ver a lista de cookies vazia e, no máximo, os valores da tabela acima.",
        "Para limpar: no mesmo painel, clique com o botão direito nos valores e apague, ou use a opção de \"Limpar dados de navegação\" do navegador para este site. Limpar significa apenas que o site esquece seu tema e seu idioma e pergunta de novo. Nada quebra.",
        "Você também pode bloquear o armazenamento por completo — a maioria dos navegadores permite recusar cookies e dados de site por domínio, e janelas anônimas descartam tudo ao fechar. O site funciona normalmente dos dois jeitos; ele só não vai lembrar suas preferências.",
      ],
    },
  ],
  footerLink: "Política de Privacidade",
  contact: "Contato",
  questions:
    "Dúvida sobre qualquer coisa nesta página? Escreva para contato.matheusabrahao@gmail.com e eu respondo diretamente.",
}

export default function CookiePolicy() {
  const { language } = useLanguage()
  const pt = language === "pt-BR"
  const c = pt ? PT : EN

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-3 text-gradient">{c.title}</h1>
        <p className="text-sm text-muted-foreground mb-8">
          {c.updated}
          {pt ? LAST_UPDATED.pt : LAST_UPDATED.en}
        </p>

        <div className="rounded-xl border border-border/60 bg-secondary/20 p-4 text-sm text-muted-foreground mb-10">
          {c.disclaimer}
        </div>

        <div className="space-y-10">
          {c.sections.map((section) => (
            <section key={section.h}>
              <h2 className="text-xl font-semibold mb-3 text-foreground">{section.h}</h2>
              <div className="space-y-3">
                {section.p.map((paragraph) => (
                  <p key={paragraph} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.table && (
                <div className="mt-5 space-y-4">
                  {section.table.map((row) => (
                    <div key={row.name} className="rounded-xl border border-border/60 bg-secondary/10 p-4">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                        <code className="text-sm font-semibold text-foreground">{row.name}</code>
                        <span className="text-xs text-muted-foreground">{row.type}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{row.purpose}</p>
                      <p className="text-xs text-muted-foreground/80 mt-2">{row.life}</p>
                    </div>
                  ))}
                </div>
              )}

              {section.after && (
                <div className="mt-4 space-y-3">
                  {section.after.map((paragraph) => (
                    <p key={paragraph} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        <p className="mt-10 text-muted-foreground leading-relaxed">{c.questions}</p>

        <div className="mt-12 pt-6 border-t border-border/50 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/privacy-policy" className="text-primary hover:text-primary/80 transition-colors">
            {c.footerLink}
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
            {c.contact}
          </Link>
        </div>
      </div>
    </div>
  )
}
