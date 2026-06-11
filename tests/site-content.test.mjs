import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'

test('home page carries the product, download, and help surfaces', async () => {
  const html = await readFile(new URL('../src/App.tsx', import.meta.url), 'utf8')

  for (const text of [
    'Git Wikitree',
    'Download',
    'Local Git repositories',
    'Open local repositories',
    'Read and edit Markdown',
    'Use Git context deliberately',
    'Rich previews',
    'Install Git Wikitree v1.0.0',
    'miclle/gitwikitree',
    'Download latest release',
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

test('visual styling defines responsive actual-app screenshot and compact download area', async () => {
  const css = await readFile(new URL('../src/App.css', import.meta.url), 'utf8')

  assert.match(css, /\.workspace-shot/)
  assert.match(css, /\.app-screenshot/)
  assert.match(css, /aspect-ratio/)
  assert.match(css, /\.download-actions/)
  assert.doesNotMatch(css, /\.download-card/)
  assert.match(css, /@media \(max-width: 640px\)/)
})

test('build is prepared for GitHub Pages deployment', async () => {
  const app = await readFile(new URL('../src/App.tsx', import.meta.url), 'utf8')
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8')
  const viteConfig = await readFile(new URL('../vite.config.ts', import.meta.url), 'utf8')
  const workflow = await readFile(
    new URL('../.github/workflows/deploy.yml', import.meta.url),
    'utf8'
  )

  assert.match(viteConfig, /base:\s*['"]\.\/['"]/)
  assert.match(app, /import\.meta\.env\.BASE_URL/)
  assert.match(html, /%BASE_URL%gitwikitree-icon\.png/)
  assert.match(workflow, /actions\/upload-pages-artifact@v3/)
  assert.match(workflow, /actions\/deploy-pages@v4/)
  assert.match(workflow, /npm test/)
  assert.doesNotMatch(workflow, /continue-on-error:\s*true/)
})
