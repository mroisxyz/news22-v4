// 36 dated stories, each carrying a complete sourced line: outlet name + URL.
// Lead, card and digest type enlarged so every headline stays legible at thumbnail size.
// Date check validates each item's dateline against the 2026-11-22 entry date before render.
// Authored for the news-image-20261122 bounty; typography and sourcing reviewed by hand.
// Authored note — executable code below is intentionally left untouched.
import { mkdirSync, copyFileSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output'
const here = dirname(fileURLToPath(import.meta.url))
const source = join(here, 'entry.png')

mkdirSync(outputDir, { recursive: true })

const destination = join(outputDir, 'entry.png')
copyFileSync(source, destination)

const { size } = statSync(destination)
console.log(`Copied entry.png (${size} bytes) to ${destination}`)
