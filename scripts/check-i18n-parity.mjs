#!/usr/bin/env node
/**
 * Asserts the `en` and `pt-BR` translation maps in language-context.tsx have
 * identical key sets. A key present in one and missing from the other makes
 * `t()` fall back to printing the raw key, which ships as visible garbage.
 *
 * Run: node scripts/check-i18n-parity.mjs   (exits 1 on drift)
 *
 * ponytail: parses the file with a scoped regex instead of the TS AST — the
 * translations object is a flat string-literal map and stays that way. If it
 * ever gains nesting or computed keys, swap in typescript's parser.
 */
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const file = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  'src',
  'contexts',
  'language-context.tsx'
)
const src = await readFile(file, 'utf8')

/** Keys of one `'<lang>': { ... }` block, matched by brace depth. */
function keysOf(lang) {
  const open = src.indexOf(`'${lang}': {`)
  if (open === -1) throw new Error(`no '${lang}' translation block found in ${file}`)
  let i = src.indexOf('{', open)
  let depth = 0
  let end = -1
  for (; i < src.length; i++) {
    if (src[i] === '{') depth++
    else if (src[i] === '}' && --depth === 0) {
      end = i
      break
    }
  }
  if (end === -1) throw new Error(`unbalanced braces in '${lang}' block`)
  const body = src.slice(open, end)
  const keys = [...body.matchAll(/^\s*'([^']+)':/gm)].map((m) => m[1]).slice(1) // drop the lang key itself
  const dupes = keys.filter((k, n) => keys.indexOf(k) !== n)
  if (dupes.length) throw new Error(`duplicate keys in '${lang}': ${dupes.join(', ')}`)
  return new Set(keys)
}

const en = keysOf('en')
const pt = keysOf('pt-BR')
const missingInPt = [...en].filter((k) => !pt.has(k))
const missingInEn = [...pt].filter((k) => !en.has(k))

if (missingInPt.length || missingInEn.length) {
  if (missingInPt.length) console.error(`Missing in pt-BR (${missingInPt.length}):\n  ${missingInPt.join('\n  ')}`)
  if (missingInEn.length) console.error(`Missing in en (${missingInEn.length}):\n  ${missingInEn.join('\n  ')}`)
  process.exit(1)
}

console.log(`i18n parity OK — ${en.size} keys in both en and pt-BR.`)
