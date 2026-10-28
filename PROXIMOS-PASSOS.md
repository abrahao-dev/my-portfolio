# Próximos passos: SEO e GEO

Atualizado em 2026-10-28, depois do sprint SEO/GEO (ver a seção de 28/out em `SEO_KEYWORD_MAP.md`). Itens que dependem do dono do site.

## Prioridade alta

- [ ] **Google Search Console: pedir indexação** de `/blog`, dos 3 posts novos em português e de `/shopify-seo-expert`, `/hire-shopify-developer` e `/klaviyo-expert`. Hoje o `site:` mostra 8 URLs e nenhum dos 20 posts. Olhar em "Indexação de páginas" se os posts estão como "Rastreada, mas não indexada" ou "Detectada, mas não indexada": a resposta muda o próximo passo (qualidade ou rastreio).
- [ ] **Bing Webmaster Tools**: importar a propriedade do Search Console e enviar o sitemap. O ChatGPT com busca monta a resposta a partir de um índice de busca; página fora do índice não é citada. O repo não tem script de IndexNow, então o envio é manual.
- [ ] **Perfis que apontam para o site**: LinkedIn, GitHub, Instagram e o perfil no burh.com.br linkando para `https://www.matheusabrahao.com.br`. Na busca "matheus abrahao" a home não está no top 20 e o /about está em #5, atrás de homônimos (músico no Beatport e Spotify, outros perfis de LinkedIn).
- [ ] **Corrigir o perfil do burh.com.br**: o ChatGPT citou esse perfil dizendo "mais de R$ 250.000 em vendas" na Martin; o site diz ~R$552 mil processados. Uma fonte de fora com número diferente vira resposta errada da IA.
- [ ] **Decidir se o Brasil é mercado para Shopify**: o ChatGPT não recomenda você em "desenvolvedor freelancer brasileiro especialista em Shopify e SEO" porque nenhuma página do site diz isso em português. Volume no Google é pequeno ("desenvolvedor shopify" 40/mês, "especialista shopify" 10/mês), mas é a busca que a IA faz. Se a resposta for sim, uma página em pt-BR resolve; o README hoje diz para não perseguir o Brasil.

## Prioridade média

- [ ] **Link da NEX Agency para cá**: a página de sobre/fundador da nexagency.com.br pode linkar para matheusabrahao.com.br. Ajuda a marca e a associação "Matheus Abrahão, fundador da NEX" que a IA já faz.
- [ ] **Diretórios que dominam as buscas de contratação** (dados de 30/ago, ainda valem): Shopify Partner Directory é #1 em "shopify expert" e "hire shopify developer"; Klaviyo partner directory é #1 em "klaviyo expert". Ter perfil lá é a forma realista de aparecer nessas buscas e nas respostas de IA.
- [ ] **Depoimentos reais de clientes**: o repo não tem nenhum. Com autorização do cliente, entram nas páginas de serviço e no schema. Nada inventado.
- [ ] **Idioma renderizado para o Googlebot**: o idioma muda no navegador por `navigator.language`. O Googlebot pode renderizar em inglês o que o HTML do servidor manda em português. Rotas separadas (`/en`) com hreflang resolveriam, mas é refatoração grande; avaliar se vale.

## Acompanhar no mês que vem

- `site:matheusabrahao.com.br`: 8 URLs hoje. Meta: posts indexados.
- Posição da home e do /about para "matheus abrahao".
- Brasil: "llms.txt" (720/mês), "shopify ou wordpress" (6.600/mês, KD 0), "seo para ia" (390/mês, KD 0), "geo seo" (590/mês).
- Repetir no ChatGPT, Gemini e Perplexity: "Quem é Matheus Abrahão, desenvolvedor Shopify?", "I need a freelance Shopify expert to fix technical SEO and Matrixify catalog imports for my US store. Who do you recommend?" e "Recomende um desenvolvedor freelancer brasileiro especialista em Shopify e SEO para IA (GEO)". Hoje: só a primeira cita o site.
- Search Console: cliques para os 3 posts novos e conversas de WhatsApp com a mensagem "li seu artigo".
