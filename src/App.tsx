import {
  BookOpen,
  ChevronDown,
  Code2,
  Download,
  FileSearch,
  FolderOpen,
  Github,
  GitBranch,
  History,
  Languages,
  SplitSquareHorizontal
} from 'lucide-react'
import { useEffect, useState } from 'react'
import type { ReactElement } from 'react'

const releaseUrl = 'https://github.com/miclle/gitwikitree/releases/latest'
const sourceUrl = 'https://github.com/miclle/gitwikitree'
const licenseUrl = 'https://github.com/miclle/gitwikitree/blob/main/LICENSE'
const authorUrl = 'https://github.com/miclle'
const assetPath = (path: string): string => `${import.meta.env.BASE_URL}${path}`
const localeStorageKey = 'gitwikitree.website.locale'

const siteContent = {
  en: {
    locale: 'en',
    nav: {
      features: 'Features',
      download: 'Download',
      github: 'GitHub'
    },
    hero: {
      title: 'Git Wikitree',
      kicker: 'Local Git repositories, readable like a wiki.',
      lede:
        'Open a repository from disk, browse its file tree, read Markdown, edit notes, search content, and check blame without leaving the desktop app.',
      download: 'Download',
      source: 'View source'
    },
    essentials: [
      {
        title: 'Open local repositories',
        text: 'Start from an existing working tree or linked worktree. Files, previews, saves, search, and blame stay anchored to that path.',
        icon: FolderOpen
      },
      {
        title: 'Read and edit Markdown',
        text: 'Move between preview, code, and split modes for Markdown and text-like files, including directory README.md pages.',
        icon: SplitSquareHorizontal
      },
      {
        title: 'Use Git context deliberately',
        text: 'Check branch state, open worktrees, inspect blame, and keep repository actions visible where they matter.',
        icon: GitBranch
      }
    ],
    features: {
      title: 'What stays in reach',
      rows: [
        {
          title: 'Repository tree',
          text: 'Browse project files while .git, .worktrees, and dependency folders stay out of the way.',
          icon: FolderOpen
        },
        {
          title: 'Fast search',
          text: 'Find paths first, then searchable Markdown, text, HTML, and SVG content in the local workspace.',
          icon: FileSearch
        },
        {
          title: 'Rich previews',
          text: 'Preview Markdown, code blocks, Mermaid diagrams, SVG, images, PDF, HTML, and compact directory listings.',
          icon: BookOpen
        },
        {
          title: 'Remembered sessions',
          text: 'Reopen with recent repositories, tabs, active files, expanded folders, and window bounds restored.',
          icon: History
        },
        {
          title: 'Focused editing',
          text: 'Use CodeMirror editing, dirty markers, save guards, and split preview when documentation needs a change.',
          icon: Code2
        }
      ]
    },
    footer: {
      builtBy: 'Built by',
      author: 'Miclle Zheng',
      source: 'Source',
      releases: 'Releases',
      license: 'License'
    },
    a11y: {
      home: 'Git Wikitree home',
      primary: 'Primary',
      primaryActions: 'Primary actions',
      essentials: 'Git Wikitree essentials',
      language: 'Language',
      footer: 'Footer',
      screenshot:
        'Git Wikitree desktop app showing the miclle/gitwikitree repository, README.md preview, TODO.md and LICENSE tabs, gitwikitree-icon.png in the file tree, Preview controls, Working tree status, and Markdown file facts.'
    }
  },
  'zh-CN': {
    locale: 'zh-CN',
    nav: {
      features: '功能',
      download: '下载',
      github: 'GitHub'
    },
    hero: {
      title: 'Git Wikitree',
      kicker: '本地 Git 仓库，也能像 Wiki 一样阅读。',
      lede:
        '从磁盘打开仓库，浏览文件树，阅读 Markdown，编辑笔记，搜索内容，并在桌面应用内查看 blame。',
      download: '下载',
      source: '源代码'
    },
    essentials: [
      {
        title: '打开本地仓库',
        text: '从现有 working tree 或关联 worktree 开始。文件、预览、保存、搜索和 blame 都锚定在这个路径上。',
        icon: FolderOpen
      },
      {
        title: '阅读和编辑 Markdown',
        text: '在 Markdown 与类文本文件中切换预览、源码和分屏模式，也支持目录 README.md 页面。',
        icon: SplitSquareHorizontal
      },
      {
        title: '有意识地使用 Git 上下文',
        text: '查看分支状态、打开 worktree、检查 blame，并把仓库操作放在需要它们的位置。',
        icon: GitBranch
      }
    ],
    features: {
      title: '随手可用的能力',
      rows: [
        {
          title: '仓库文件树',
          text: '浏览项目文件，同时让 .git、.worktrees 和依赖目录保持在视线之外。',
          icon: FolderOpen
        },
        {
          title: '快速搜索',
          text: '先查找路径，再搜索本地工作区里的 Markdown、文本、HTML 和 SVG 内容。',
          icon: FileSearch
        },
        {
          title: '丰富预览',
          text: '预览 Markdown、代码块、Mermaid 图、SVG、图片、PDF、HTML 和紧凑目录列表。',
          icon: BookOpen
        },
        {
          title: '记住会话',
          text: '重新打开时恢复最近仓库、标签页、当前文件、展开目录和窗口尺寸。',
          icon: History
        },
        {
          title: '专注编辑',
          text: '在需要修改文档时使用 CodeMirror 编辑、脏标记、保存保护和分屏预览。',
          icon: Code2
        }
      ]
    },
    footer: {
      builtBy: '由',
      author: 'Miclle Zheng',
      source: '源代码',
      releases: '发布版本',
      license: '许可证'
    },
    a11y: {
      home: 'Git Wikitree 首页',
      primary: '主导航',
      primaryActions: '主要操作',
      essentials: 'Git Wikitree 核心能力',
      language: 'Language',
      footer: '页脚',
      screenshot:
        'Git Wikitree 桌面应用截图，显示 miclle/gitwikitree 仓库、README.md 预览、TODO.md 和 LICENSE 标签页、文件树中的 gitwikitree-icon.png、预览控件、工作区状态和 Markdown 文件信息。'
    }
  }
} as const

type Locale = keyof typeof siteContent

const localeOptions: Array<{ label: string; value: Locale }> = [
  { label: 'English', value: 'en' },
  { label: '简体中文', value: 'zh-CN' }
]

const isLocale = (value: string | null): value is Locale => {
  return value === 'en' || value === 'zh-CN'
}

function readStoredLocale(): Locale | null {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    return window.localStorage.getItem(localeStorageKey) as Locale | null
  } catch {
    return null
  }
}

function writeStoredLocale(locale: Locale): void {
  try {
    window.localStorage.setItem(localeStorageKey, locale)
  } catch {
    // Ignore blocked storage; language still works for the current page.
  }
}

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') {
    return 'en'
  }

  const storedLocale = readStoredLocale()
  if (isLocale(storedLocale)) {
    return storedLocale
  }

  return window.navigator.language.startsWith('zh') ? 'zh-CN' : 'en'
}

function WorkspaceShot({ alt }: { alt: string }): ReactElement {
  return (
    <figure className="workspace-shot">
      <div className="screenshot-frame">
        <img
          className="app-screenshot"
          src={assetPath('gitwikitree-app-screenshot.png')}
          alt={alt}
        />
      </div>
    </figure>
  )
}

function App(): ReactElement {
  const [isScrolled, setIsScrolled] = useState(false)
  const [locale, setLocale] = useState<Locale>(getInitialLocale)
  const content = siteContent[locale]

  useEffect(() => {
    document.documentElement.lang = locale
    writeStoredLocale(locale)
  }, [locale])

  useEffect(() => {
    const updateHeaderState = () => {
      setIsScrolled((window.scrollY || document.documentElement.scrollTop) > 12)
    }

    updateHeaderState()
    window.addEventListener('scroll', updateHeaderState, { passive: true })
    document.addEventListener('scroll', updateHeaderState, { passive: true })
    return () => {
      window.removeEventListener('scroll', updateHeaderState)
      document.removeEventListener('scroll', updateHeaderState)
    }
  }, [])

  return (
    <main lang={content.locale}>
      <header className={`site-header${isScrolled ? ' scrolled' : ''}`} aria-label={content.a11y.primary}>
        <a className="brand" href="#top" aria-label={content.a11y.home}>
          <img src={assetPath('gitwikitree-icon.png')} alt="" />
          <span>Git Wikitree</span>
        </a>
        <div className="header-actions">
          <nav>
            <a href="#features">{content.nav.features}</a>
            <a href={releaseUrl}>{content.nav.download}</a>
            <a href={sourceUrl}>{content.nav.github}</a>
          </nav>
          <label className="language-select-label">
            <span className="sr-only">{content.a11y.language}</span>
            <Languages size={16} aria-hidden="true" />
            <select
              aria-label="Language"
              className="language-select"
              value={locale}
              onChange={(event) => setLocale(event.target.value as Locale)}
            >
              {localeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown size={14} aria-hidden="true" className="language-select-chevron" />
          </label>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <img className="hero-icon" src={assetPath('gitwikitree-icon.png')} alt="" />
          <h1>{content.hero.title}</h1>
          <p className="hero-kicker">{content.hero.kicker}</p>
          <p className="hero-lede">{content.hero.lede}</p>
          <div className="hero-actions" aria-label={content.a11y.primaryActions}>
            <a className="button primary" href={releaseUrl}>
              <Download size={17} aria-hidden="true" />
              <span>{content.hero.download}</span>
            </a>
            <a className="text-link" href={sourceUrl}>
              <Github size={17} aria-hidden="true" />
              <span>{content.hero.source}</span>
            </a>
          </div>
        </div>

        <WorkspaceShot alt={content.a11y.screenshot} />
      </section>

      <section id="features" className="section">
        <div className="essentials" aria-label={content.a11y.essentials}>
          {content.essentials.map((item) => (
            <article className="essential" key={item.title}>
              <div className="essential-title">
                <item.icon size={21} aria-hidden="true" />
                <h3>{item.title}</h3>
              </div>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="feature-list">
          <h2>{content.features.title}</h2>
          {content.features.rows.map((feature) => (
            <article className="feature-row" key={feature.title}>
              <feature.icon size={21} aria-hidden="true" />
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <img src={assetPath('gitwikitree-icon.png')} alt="" />
          <span>
            {content.footer.builtBy}{' '}
            <a href={authorUrl}>{content.footer.author}</a>
          </span>
        </div>
        <nav className="footer-links" aria-label={content.a11y.footer}>
          <a href={sourceUrl}>{content.footer.source}</a>
          <a href={releaseUrl}>{content.footer.releases}</a>
          <a href={licenseUrl}>{content.footer.license}</a>
        </nav>
      </footer>
    </main>
  )
}

export default App
