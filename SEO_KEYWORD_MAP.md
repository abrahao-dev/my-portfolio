# Mapa de keywords — matheusabrahao.com.br

Dados medidos com DataForSEO em 30/ago/2026 (Google Ads search volume + Labs keyword difficulty).
KD = dificuldade 0-100. CPC em US$ = o que anunciantes pagam por clique (proxy do valor do lead).

## Regra de leitura

CPC alto + KD baixo = dinheiro fácil. É onde a página tem que existir.
Volume no Brasil para termos Shopify é irrelevante (10-40/mês). **O público é inglês.**

---

## Tier 1 — páginas obrigatórias (alto valor, baixa dificuldade)

| Keyword | Vol/mês | KD | CPC | País | Página |
|---|---|---|---|---|---|
| shopify expert | 1.300 | **7** | US$37 | US | `/shopify-expert` |
| shopify developer partner | 14.800 | 16 | US$22 | US | `/shopify-expert` (seção) |
| shopify expert developer | 1.300 | 26 | US$37 | US | `/shopify-expert` |
| **matrixify** | **1.300** | — | **US$24** | US | `/matrixify-expert` ✅ criada |
| shopify seo expert | 480 | **0** | US$2 | US | `/shopify-expert` (seção SEO) |
| hire shopify developer | 480 | 46 | US$26 | US | `/hire-shopify-developer` |
| shopify consultant | 260 | — | **US$61** | US | `/hire-shopify-developer` |
| freelance shopify developer | 210 | 19 | US$49 | US | `/hire-shopify-developer` |
| klaviyo expert | 140 | — | **US$82** | US | `/klaviyo-expert` |
| klaviyo agency | 170 | — | US$29 | US | `/klaviyo-expert` |
| klaviyo developer | 140 | — | US$30 | US | `/klaviyo-expert` |
| shopify speed optimization | 170 | — | US$8 | US | `/shopify-speed-optimization` |
| shopify migration expert | 110 | **0** | — | US | `/shopify-migration-expert` |
| shopify developer for hire | 70 | **8** | **US$92** | US | `/hire-shopify-developer` |
| top shopify developer | 90 | 16 | **US$101** | US | `/shopify-expert` |
| shopify expert agency | 90 | 6 | **US$193** | US | `/shopify-expert` |

---

## Rank check — 30/ago/2026 (DataForSEO, Google US, desktop, top 100)

**Resultado: zero posições. Nenhuma das 6 páginas aparece no top 100 de nenhuma keyword.**

| Keyword | Página | Posição | Quem está em #1 |
|---|---|---|---|
| shopify expert | `/shopify-expert` | não está no top 100 | shopify.com/partners/directory |
| matrixify | `/matrixify-expert` | não está no top 100 | apps.shopify.com/excel-export-import |
| hire shopify developer | `/hire-shopify-developer` | não está no top 100 | shopify.com/partners/directory |
| klaviyo expert | `/klaviyo-expert` | não está no top 100 | connect.klaviyo.com/partner/email-experts |
| shopify speed optimization | `/shopify-speed-optimization` | não está no top 100 | apps.shopify.com/page-speed-optimizer |
| shopify migration expert | `/shopify-migration-expert` | não está no top 100 | ecommerce.folio3.com |

### A causa não é conteúdo. É indexação.

`site:matheusabrahao.com.br` no Google US devolve **4 URLs**: home, /contact, /projects, /about.
Nenhuma das 6 páginas de serviço e nenhum dos 12 posts está no índice.

Motivo mecânico encontrado em 30/ago: o site é servido em `www.matheusabrahao.com.br`
(o host sem www dá 301 para o www), mas o `sitemap.xml`, os canonicals das páginas de
serviço e os `llms.txt` apontavam todos para o host **sem** www. Ou seja: cada URL do
sitemap redirecionava, e cada canonical apontava para uma URL que redireciona.
Corrigido em 30/ago (sitemap.ts, robots.ts, seo-landing.tsx, llms.txt, llms-full.txt).

**Ainda pendente (arquivos de outro dono):** `about/layout.tsx`, `projects/layout.tsx`,
`contact/layout.tsx` continuam com canonical sem www, e `next.config.mjs` só autoriza
o host sem www em `images.remotePatterns`.

### O gap real contra o top 5

Em 4 das 6 keywords o #1 é a **própria plataforma** (shopify.com/partners/directory,
apps.shopify.com, connect.klaviyo.com). Esses resultados não são batíveis com conteúdo —
são propriedade de marca. O alvo realista é a posição 5-15, disputada por:

- **Diretórios e marketplaces** (Upwork, Fiverr Pro, Toptal, Storetasker) — ganham por
  volume de perfis e autoridade de domínio, não por qualidade de página.
- **Agências com blog** (sherocommerce, bacancy, folio3, netalico, outerbox) — páginas
  de serviço de 2.000-4.000 palavras + blog denso + backlinks de anos.
- **Reddit e YouTube** aparecem no top 5 de 3 das 6 keywords. Intenção de pesquisa aqui
  é "quero uma opinião de terceiro", não "quero uma landing page".

O que essas páginas têm e esta não tem: **domínio com histórico e backlinks**. As landing
pages daqui já têm 1.300-2.900 palavras, FAQ com schema, e mais profundidade técnica que
a maioria delas. Conteúdo não é o gargalo. Indexação e autoridade são.

---

## Tier 1B — novas oportunidades medidas em 30/ago/2026

Dados: DataForSEO Labs (KD) + Google Ads search volume, US, inglês.

| Keyword | Vol/mês | KD | CPC | Onde ficou |
|---|---|---|---|---|
| **shopify developer partner** | **14.800** | 16 | US$23 | `/shopify-expert` — seção "Shopify developer partner work" (subcontratação para agências) |
| shopify api developer | 1.900 | 36 | US$8 | `/shopify-expert` — seção "Custom apps and the Admin API" |
| **hire shopify expert** | **320** | **21** | **US$55** | `/hire-shopify-developer` — seção H2 "Hire a Shopify expert, a developer, or a consultant?" |
| shopify expert near me | 210 | 20 | US$35 | `/hire-shopify-developer` — item "Looking for a Shopify expert near you?" |
| klaviyo developer | 140 | **9** | US$30 | `/klaviyo-expert` — seção "Klaviyo developer, or Klaviyo agency?" |
| shopify checkout extensibility | 140 | **9** | US$12 | `/shopify-expert` — item "Shopify checkout customization" |
| shopify stripe integration | 110 | **11** | — | `/shopify-expert` — item "Stripe and payment integrations" |
| woocommerce to shopify migration | 110 | 32 | **US$44** | `/shopify-migration-expert` (já era o primeiro service card) |
| shopify plus expert | 70 | 25 | — | `/shopify-expert` — item "Shopify Plus developer" |
| shopify seo consultant | 70 | **2** | — | `/shopify-expert` — seção H2 "Shopify SEO expert work" |
| how much does it cost to hire a shopify expert | 50 | **8** | — | FAQ de `/hire-shopify-developer` (pergunta literal) |
| shopify expert for hire | 50 | 15 | US$21 | `/hire-shopify-developer` |
| shopify ecommerce consultant | 50 | 17 | — | `/hire-shopify-developer` |
| hire a shopify seo expert | 40 | **2** | US$4,50 | `/shopify-expert` — seção SEO |
| shopify plus consultant | 40 | **5** | — | `/shopify-expert` / `/hire-shopify-developer` |
| shopify marketing expert | 40 | **4** | — | `/klaviyo-expert` |

**O maior achado:** "shopify developer partner" — 14.800/mês com KD 16. Volume 11x maior
que "shopify expert" e dificuldade parecida. Boa parte é intenção navegacional (gente
procurando o Shopify Partner Program), mas a fatia comercial — agências procurando
capacidade sênior subcontratada — é lead de ticket alto e sem quase nenhuma disputa.

**O mais barato:** "shopify seo expert" e variantes (480/mês somados, **KD 0-2**).
Custo de aquisição praticamente zero e não existia seção dedicada até 30/ago.

### PAA — perguntas reais no SERP (usadas para renomear FAQs)

Extraídas do "People Also Ask" das 6 keywords em 30/ago. As FAQs das páginas agora usam
a redação literal, porque é ela que aciona o rich result:

- "How much does a Shopify expert cost?" · "Is it worth it to hire a Shopify expert?" ·
  "Can I hire someone to manage my Shopify store?" → `/shopify-expert`
- "How much does it cost to hire a Shopify developer per hour?" → `/hire-shopify-developer`
- "How much does Klaviyo cost per month?" → `/klaviyo-expert`
- "Why is my Shopify so laggy?" → `/shopify-speed-optimization`
- "What is Matrixify used for?" · "How much does Matrixify cost?" → `/matrixify-expert`
- "How much would it cost to migrate my website to Shopify?" → `/shopify-migration-expert`

### Descartados (medidos, não valem página)

- **shopify expert marketplace** (480/mês, KD 14) e **shopify expert directory** (170, KD 16):
  intenção navegacional pura — a pessoa quer o diretório da Shopify, não um freelancer.
- **shopify expert salary / jobs** (related searches): intenção de emprego, não de contratação.
- **shopify b2b developer**: CPC US$90 mas só 10 buscas/mês. Menção, não página.
- **shopify hydrogen developer**: 10/mês. Ainda não existe demanda.

---

## Tier 2 — nichos de serviço (menor volume, ticket alto)

KD medido em 30/ago/2026. Status = onde a keyword realmente está no site hoje.

| Keyword | Vol/mês | KD | CPC | Onde | Status |
|---|---|---|---|---|---|
| shopify checkout customization | 170 | 36 | US$8 | `/shopify-expert` | ✅ item próprio (30/ago) |
| shopify checkout extensibility | 140 | **9** | US$12 | `/shopify-expert` | ✅ mesmo item + FAQ Plus |
| shopify stripe integration | 110 | **11** | — | `/shopify-expert` | ✅ item "Stripe and payment integrations" (30/ago) |
| sms marketing shopify | 90 | 32 | US$29 | `/klaviyo-expert` | ✅ service card + seção + post de blog |
| shopify theme developer | 90 | 16 | US$11 | `/shopify-expert` | ✅ item próprio (30/ago) + service card em `/hire-shopify-developer` |
| shopify plus developer | 140 | 36 | — | `/shopify-expert` | ✅ item próprio (30/ago) |
| shopify inventory sync | 50 | 19 | US$26 | `/matrixify-expert` | ✅ service card + post de blog |
| shopify csv import | 50 | 18 | US$11 | `/matrixify-expert` | ✅ intro + service cards |
| bulk product upload shopify | 40 | 12 | US$1,32 | `/matrixify-expert` | ✅ service card renomeado (30/ago) |

## Tier 3 — outros idiomas (validado, vale hreflang)

| Mercado | Keyword | Vol/mês | CPC |
|---|---|---|---|
| 🇩🇪 Alemanha | shopify agentur | 880 | **US$28** |
| 🇩🇪 Alemanha | shopify entwickler | 90 | **US$41** |
| 🇫🇷 França | agence shopify | 590 | US$6 |
| 🇫🇷 França | expert shopify | 210 | US$19 |
| 🇳🇱 Holanda | shopify developer | 320 | US$21 |
| 🇳🇱 Holanda | shopify expert | 140 | US$24 |
| 🇦🇺 Austrália | shopify developer | 480 | **US$50** |
| 🇦🇺 Austrália | hire shopify developer | 50 | **US$94** |
| 🇨🇦 Canadá | shopify expert | 260 | US$31 |
| 🇪🇸 Espanha | agencia shopify | 170 | US$11 |

**Nota:** Austrália e Canadá falam inglês — as páginas em EN já servem esses mercados,
basta hreflang `en-AU` / `en-CA` e menção às regiões no conteúdo. Alemão e francês
exigiriam tradução de verdade (fase 2, só depois que o inglês estiver rankeando).

## O que NÃO perseguir

- **Brasil/Portugal para Shopify**: "especialista shopify" 20/mês, "desenvolvedor shopify" 40/mês,
  Portugal 10/mês. Não paga o esforço. Manter PT no site pela identidade, não pela busca.
- **"yampi checkout" (880/mês BR, CPC US$1)**: volume existe, mas CPC de US$1 significa lead
  de baixíssimo valor. Não vale página dedicada; no máximo menção.
- **"shopify developer login/portal/documentation"**: intenção de suporte, não de contratação.

## Prioridade de execução

1. `/shopify-expert` — maior volume + KD 7
2. `/hire-shopify-developer` — intenção de compra mais direta
3. `/klaviyo-expert` — CPC US$82, quase sem concorrência
4. `/matrixify-expert` — "matrixify" 1.300/mês é o achado mais subestimado
5. `/shopify-speed-optimization` e `/shopify-migration-expert`
6. Blog: 1 post por keyword de Tier 2, cada um linkando para a página de serviço
