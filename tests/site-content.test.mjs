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
    'Built by',
    'Miclle Zheng',
    'Releases',
    'License',
    'Markdown',
    'worktree',
    'blame',
    'README.md',
    'LICENSE',
    'Working tree',
    'gitwikitree-icon.png',
    'gitwikitree-app-screenshot.png',
    'https://github.com/miclle/gitwikitree/releases/latest',
    'https://github.com/miclle/gitwikitree/blob/main/LICENSE',
    'https://github.com/miclle'
  ]) {
    assert.match(html, new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
  }
})

test('home page ships English and Simplified Chinese content with a language switcher', async () => {
  const html = await readFile(new URL('../src/App.tsx', import.meta.url), 'utf8')

  for (const text of [
    "en:",
    "'zh-CN':",
    'const localeOptions',
    'setLocale',
    'aria-label="Language"',
    'className="language-select-label"',
    'className="sr-only"',
    '<Languages size={16}',
    '<ChevronDown size={14}',
    '<select',
    'className="language-select"',
    'value={locale}',
    'onChange={(event) => setLocale(event.target.value as Locale)}',
    'English',
    '简体中文',
    '本地 Git 仓库，也能像 Wiki 一样阅读。',
    '从磁盘打开仓库，浏览文件树，阅读 Markdown，编辑笔记，搜索内容，并在桌面应用内查看 blame。',
    '功能',
    '下载',
    '源代码',
    '打开本地仓库',
    '阅读和编辑 Markdown',
    '有意识地使用 Git 上下文',
    '由'
  ]) {
    assert.match(html, new RegExp(text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
  }

  assert.match(html, /lang=\{content\.locale\}/)
  assert.match(html, /document\.documentElement\.lang = locale/)
  assert.doesNotMatch(html, /aria-pressed/)
})

test('language persistence tolerates unavailable localStorage', async () => {
  const html = await readFile(new URL('../src/App.tsx', import.meta.url), 'utf8')

  assert.match(html, /function readStoredLocale\(\): Locale \| null/)
  assert.match(html, /function writeStoredLocale\(locale: Locale\): void/)
  assert.match(html, /try \{\n\s+return window\.localStorage\.getItem\(localeStorageKey\)/)
  assert.match(html, /try \{\n\s+window\.localStorage\.setItem\(localeStorageKey, locale\)/)
  assert.match(html, /catch \{\n\s+return null/)
  assert.match(html, /catch \{\n\s+\/\/ Ignore blocked storage/)
  assert.doesNotMatch(html, /window\.localStorage\.getItem\(localeStorageKey\)\n\s+if/)
})

test('visual styling defines responsive screenshot and compact footer', async () => {
  const css = await readFile(new URL('../src/App.css', import.meta.url), 'utf8')

  assert.match(css, /\.workspace-shot/)
  assert.match(css, /\.app-screenshot/)
  assert.match(css, /\.sr-only/)
  assert.match(css, /\.language-select-label/)
  assert.match(css, /appearance:\s*none/)
  assert.match(css, /field-sizing:\s*content/)
  assert.match(css, /padding:\s*0 18px 0 0/)
  assert.match(css, /\.language-select-chevron/)
  assert.doesNotMatch(css, /width:\s*96px/)
  assert.match(css, /aspect-ratio/)
  assert.match(css, /\.site-footer/)
  assert.doesNotMatch(css, /\.download-card/)
  assert.doesNotMatch(css, /\.download-band/)
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
