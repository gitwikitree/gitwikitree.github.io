import {
  BookOpen,
  Code2,
  Download,
  FileSearch,
  FolderOpen,
  Github,
  GitBranch,
  History,
  SplitSquareHorizontal
} from 'lucide-react'
import { useEffect, useState } from 'react'
import type { ReactElement } from 'react'

const releaseUrl = 'https://github.com/miclle/gitwikitree/releases/latest'
const sourceUrl = 'https://github.com/miclle/gitwikitree'
const licenseUrl = 'https://github.com/miclle/gitwikitree/blob/main/LICENSE'
const authorUrl = 'https://github.com/miclle'
const assetPath = (path: string): string => `${import.meta.env.BASE_URL}${path}`

const siteContent = {
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
  features: {
    title: 'What stays in reach'
  },
  footer: {
    builtBy: 'Built by',
    author: 'Miclle Zheng',
    source: 'Source',
    releases: 'Releases',
    license: 'License'
  }
} as const

const essentials = [
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
]

const featureRows = [
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

function WorkspaceShot(): ReactElement {
  return (
    <figure className="workspace-shot">
      <div className="screenshot-frame">
        <img
          className="app-screenshot"
          src={assetPath('gitwikitree-app-screenshot.png')}
          alt="Git Wikitree desktop app showing the miclle/gitwikitree repository, README.md preview, TODO.md and LICENSE tabs, gitwikitree-icon.png in the file tree, Preview controls, Working tree status, and Markdown file facts."
        />
      </div>
    </figure>
  )
}

function App(): ReactElement {
  const [isScrolled, setIsScrolled] = useState(false)

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
    <main lang={siteContent.locale}>
      <header className={`site-header${isScrolled ? ' scrolled' : ''}`} aria-label="Primary">
        <a className="brand" href="#top" aria-label="Git Wikitree home">
          <img src={assetPath('gitwikitree-icon.png')} alt="" />
          <span>Git Wikitree</span>
        </a>
        <nav>
          <a href="#features">{siteContent.nav.features}</a>
          <a href={releaseUrl}>{siteContent.nav.download}</a>
          <a href={sourceUrl}>{siteContent.nav.github}</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <img className="hero-icon" src={assetPath('gitwikitree-icon.png')} alt="" />
          <h1>{siteContent.hero.title}</h1>
          <p className="hero-kicker">{siteContent.hero.kicker}</p>
          <p className="hero-lede">{siteContent.hero.lede}</p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href={releaseUrl}>
              <Download size={17} aria-hidden="true" />
              <span>{siteContent.hero.download}</span>
            </a>
            <a className="text-link" href={sourceUrl}>
              <Github size={17} aria-hidden="true" />
              <span>{siteContent.hero.source}</span>
            </a>
          </div>
        </div>

        <WorkspaceShot />
      </section>

      <section id="features" className="section">
        <div className="essentials" aria-label="Git Wikitree essentials">
          {essentials.map((item) => (
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
          <h2>{siteContent.features.title}</h2>
          {featureRows.map((feature) => (
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
            {siteContent.footer.builtBy}{' '}
            <a href={authorUrl}>{siteContent.footer.author}</a>
          </span>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <a href={sourceUrl}>{siteContent.footer.source}</a>
          <a href={releaseUrl}>{siteContent.footer.releases}</a>
          <a href={licenseUrl}>{siteContent.footer.license}</a>
        </nav>
      </footer>
    </main>
  )
}

export default App
