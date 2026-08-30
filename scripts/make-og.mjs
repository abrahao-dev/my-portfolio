/**
 * Gera public/og-image.jpg (1200x630) a partir de public/profile.jpg.
 * One-off: rode `node scripts/make-og.mjs` quando a foto ou o posicionamento mudar.
 * Usa next/og (já é dependência do Next) — nenhum pacote extra.
 */
import { ImageResponse } from 'next/og.js'
import { readFileSync, writeFileSync } from 'node:fs'
import { createElement as h } from 'react'

const LIME = '#A3E048'
const photo = `data:image/jpeg;base64,${readFileSync('public/profile.jpg').toString('base64')}`

const el = h(
  'div',
  {
    style: {
      width: '1200px',
      height: '630px',
      display: 'flex',
      background: '#0A0A0A',
      color: 'white',
      fontFamily: 'sans-serif',
    },
  },
  h(
    'div',
    {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 72px',
        flex: 1,
      },
    },
    h('div', { style: { fontSize: 66, fontWeight: 700, letterSpacing: '-0.03em' } }, 'Matheus Abrahão'),
    h('div', { style: { fontSize: 46, fontWeight: 700, color: LIME, marginTop: 10 } }, 'Shopify Expert'),
    h(
      'div',
      { style: { fontSize: 26, color: '#A1A1A1', marginTop: 26, lineHeight: 1.4 } },
      'E-commerce operator · 6+ years · B2C + B2B'
    ),
    h('div', { style: { fontSize: 22, color: '#6E6E6E', marginTop: 34 } }, 'matheusabrahao.com.br')
  ),
  h('div', { style: { display: 'flex', width: '4px', background: LIME } }),
  h('img', { src: photo, width: 500, height: 630, style: { objectFit: 'cover' } })
)

const png = Buffer.from(await new ImageResponse(el, { width: 1200, height: 630 }).arrayBuffer())
writeFileSync('public/og-image.png', png)
console.log('wrote public/og-image.png', png.length, 'bytes')
