import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'

test('home page carries the product, download, and help surfaces', async () => {
  const html = await readFile(new URL('../src/App.tsx', import.meta.url), 'utf8')

  for (const text of [
    'Git Wikitree',
    'Download',
    'Documentation',
    'Architecture',
    'Editor',
    'Version control',
    'Preview modes',
    'Markdown',
    'worktree',
    'blame',
    'README.md',
    'LICENSE',
    'Working tree',
    'gitwikitree-icon.png',
    'gitwikitree-app-screenshot.png',
    'https://github.com/miclle/gitwikitree/releases/latest'
  ]) {
    assert.match(html, new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
  }
})

test('visual styling defines responsive actual-app screenshot and download cards', async () => {
  const css = await readFile(new URL('../src/App.css', import.meta.url), 'utf8')

  assert.match(css, /\.workspace-shot/)
  assert.match(css, /\.screenshot-frame/)
  assert.match(css, /\.app-screenshot/)
  assert.match(css, /aspect-ratio/)
  assert.match(css, /\.download-grid/)
  assert.match(css, /@media \(max-width: 760px\)/)
})
