import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code2,
  Download,
  FileSearch,
  FileText,
  Folder,
  GitBranch,
  Github,
  GitFork,
  History,
  Image,
  MonitorDown,
  PanelLeft,
  Search,
  ShieldCheck,
  Sparkles,
  SplitSquareHorizontal,
  TerminalSquare
} from 'lucide-react'
import type { ReactElement } from 'react'

const releaseUrl = 'https://github.com/miclle/gitwikitree/releases/latest'
const sourceUrl = 'https://github.com/miclle/gitwikitree'

const downloadLinks = [
  {
    label: 'macOS',
    detail: 'DMG package from the latest public release',
    href: releaseUrl,
    icon: MonitorDown
  },
  {
    label: 'Windows',
    detail: 'Setup installer from GitHub release assets',
    href: releaseUrl,
    icon: Download
  },
  {
    label: 'Linux',
    detail: 'AppImage, deb, or snap package when published',
    href: releaseUrl,
    icon: TerminalSquare
  }
]

const productPillars = [
  {
    label: 'Architecture',
    title: 'Just your repository on disk',
    text: 'Git Wikitree opens a local working tree or linked worktree directly. Repository trees, previews, saves, search results, and blame views all stay anchored to that filesystem context.',
    icon: Folder,
    facts: ['No database layer', 'Git internals ignored', 'Worktree-aware paths']
  },
  {
    label: 'Editor',
    title: 'Read, edit, and compare in one surface',
    text: 'Markdown and text-like files can move between preview, code, split, and blame modes. Directory README.md and index pages are editable first-class targets too.',
    icon: SplitSquareHorizontal,
    facts: ['CodeMirror editing', 'Stale-write protection', 'Dirty markers in tabs and tree']
  },
  {
    label: 'Version control',
    title: 'Branch and worktree choices stay explicit',
    text: 'Switch the current workspace when that is what you mean, or open a branch as a separate editable worktree under .worktrees when you need parallel context.',
    icon: GitBranch,
    facts: ['Branch picker', 'Open worktree action', 'Blame as file mode']
  },
  {
    label: 'Documentation',
    title: 'A wiki-style reader for project files',
    text: 'Markdown previews render local links, anchors, Mermaid diagrams, code blocks, SVG, images, PDF, HTML, and compact directory listings.',
    icon: BookOpen,
    facts: ['Repository links', 'Current-tab search', 'Local image assets']
  }
]

const featureGroups = [
  {
    title: 'Preview modes',
    text: 'Preview, code, split, and blame modes keep the same file target while changing how you read or edit it.',
    icon: SplitSquareHorizontal
  },
  {
    title: 'Repository search',
    text: 'Global search matches repository-relative paths first, then searchable local Markdown, text, HTML, and SVG content.',
    icon: Search
  },
  {
    title: 'Session memory',
    text: 'Open tabs, active paths, expanded tree folders, recent repositories, recent files, and window bounds come back with the project.',
    icon: History
  },
  {
    title: 'Git metadata',
    text: 'The status bar and blame view show active ref, workspace source, file facts, latest author metadata, and line-level history.',
    icon: GitFork
  },
  {
    title: 'Rich previews',
    text: 'Markdown, HTML, SVG, PDF, images, directory listings, and text-like files are rendered with local workspace context.',
    icon: Image
  },
  {
    title: 'Desktop guardrails',
    text: 'Main, preload, and renderer IPC contracts keep repository paths validated and user actions explicit.',
    icon: ShieldCheck
  }
]

const workflowSteps = [
  {
    title: 'Open the repository you already use',
    text: 'Start from a local Git working tree, linked worktree, or recent project without importing content into another system.',
    icon: Folder
  },
  {
    title: 'Read docs in their file context',
    text: 'README pages, Markdown links, images, directories, and source files stay next to the tree they came from.',
    icon: BookOpen
  },
  {
    title: 'Edit when the note needs to change',
    text: 'Switch into code or split mode for text-like files, then keep dirty state visible in tabs and the file tree.',
    icon: Code2
  },
  {
    title: 'Trace history before you leave',
    text: 'Use blame, branch, and worktree actions only when Git context matters, then reopen tomorrow where you left off.',
    icon: History
  }
]

const docs = [
  {
    title: 'Start with a local repository',
    text: 'Open a Git repository from disk. Git Wikitree builds the Files tree from local workspace files while ignoring .git, .worktrees, and dependency directories.',
    icon: PanelLeft
  },
  {
    title: 'Use README pages as home screens',
    text: 'Directories can show README.md, README.markdown, index.md, or _index.md before falling back to a compact directory listing.',
    icon: FileText
  },
  {
    title: 'Edit with preview beside code',
    text: 'Text-like files and directory index files use CodeMirror with split preview, save guards, and visible dirty state.',
    icon: Code2
  },
  {
    title: 'Trace history without leaving the file',
    text: 'Blame mode groups adjacent lines by commit and shows author, date, subject, age, short hash, and avatar fallback.',
    icon: History
  }
]

function WorkspaceShot(): ReactElement {
  return (
    <figure className="workspace-shot">
      <div className="screenshot-frame">
        <img
          className="app-screenshot"
          src="/gitwikitree-app-screenshot.png"
          alt="Git Wikitree desktop app showing the miclle/gitwikitree repository, README.md preview, TODO.md and LICENSE tabs, gitwikitree-icon.png in the file tree, Preview controls, Working tree status, and Markdown file facts."
        />
      </div>
    </figure>
  )
}

function App(): ReactElement {
  return (
    <main>
      <header className="site-header" aria-label="Primary">
        <a className="brand" href="#top" aria-label="Git Wikitree home">
          <img src="/gitwikitree-icon.png" alt="" />
          <span>Git Wikitree</span>
        </a>
        <nav>
          <a href="#architecture">Architecture</a>
          <a href="#features">Features</a>
          <a href="#download">Download</a>
          <a href="#docs">Documentation</a>
          <a href={sourceUrl}>GitHub</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <div className="product-lockup">
            <img src="/gitwikitree-icon.png" alt="" />
            <span>Git Wikitree</span>
          </div>
          <h1>Experience local Git docs without the context switching</h1>
          <p className="hero-lede">
            Open a local Git repository as a wiki-like desktop workspace. Browse the file
            tree, preview Markdown, edit docs, search the working tree, inspect blame,
            and choose branch or worktree actions without changing tools.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button primary" href={releaseUrl}>
              <Download size={18} aria-hidden="true" />
              <span>Download</span>
            </a>
            <a className="button secondary" href={sourceUrl}>
              <Github size={18} aria-hidden="true" />
              <span>View source</span>
            </a>
          </div>
        </div>

        <WorkspaceShot />
      </section>

      <section id="architecture" className="section narrative-section">
        <div className="section-heading">
          <p className="eyebrow">Product model</p>
          <h2>Built around the same files your repository already has</h2>
          <p>
            The site is organized the same way the app is used: local files first, editor
            and preview second, explicit Git actions when the workspace changes.
          </p>
        </div>
        <div className="pillar-grid">
          {productPillars.map((pillar) => (
            <article className="pillar-card" key={pillar.label}>
              <div className="pillar-label">
                <pillar.icon size={19} aria-hidden="true" />
                <span>{pillar.label}</span>
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
              <ul>
                {pillar.facts.map((fact) => (
                  <li key={fact}>
                    <CheckCircle2 size={15} aria-hidden="true" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="features" className="section feature-section">
        <div className="section-heading">
          <p className="eyebrow">Application surface</p>
          <h2>More than a Markdown previewer</h2>
        </div>
        <div className="feature-grid">
          {featureGroups.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <div className="feature-title">
                <feature.icon size={22} aria-hidden="true" />
                <h3>{feature.title}</h3>
              </div>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow-band">
        <div className="workflow-copy">
          <p className="eyebrow">Repository routine</p>
          <h2>Stay inside the repository</h2>
          <p>
            Git Wikitree keeps the daily loop close to the files: open the project,
            read docs in context, edit when needed, inspect Git history, and come back
            later with the same workspace remembered.
          </p>
        </div>
        <div className="workflow-steps" aria-label="Git Wikitree workflow">
          {workflowSteps.map((step, index) => (
            <article className="workflow-step" key={step.title}>
              <div className="workflow-step-head">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <step.icon size={20} aria-hidden="true" />
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="download" className="download-band">
        <div className="section-heading">
          <p className="eyebrow">Download</p>
          <h2>Install from the latest GitHub release</h2>
          <p>
            Git Wikitree is packaged with electron-builder for macOS, Windows, and Linux.
            These links intentionally stay on the latest public release.
          </p>
        </div>
        <div className="download-grid">
          {downloadLinks.map((link) => (
            <a className="download-card" href={link.href} key={link.label}>
              <link.icon size={24} aria-hidden="true" />
              <span>
                <strong>{link.label}</strong>
                <small>{link.detail}</small>
              </span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section id="docs" className="section docs-section">
        <div className="section-heading">
          <p className="eyebrow">Documentation</p>
          <h2>Core workflows to document first</h2>
          <p>
            These are the help surfaces the public site should grow into as release notes
            and user docs become public.
          </p>
        </div>
        <div className="docs-list">
          {docs.map((item) => (
            <article className="doc-row" key={item.title}>
              <item.icon size={22} aria-hidden="true" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="source-band">
        <div>
          <Sparkles size={22} aria-hidden="true" />
          <h2 className="source-title">
            <span>Local-first, Git-first,</span>
            <span>Markdown-friendly</span>
          </h2>
          <p>
            Git Wikitree is not a remote dashboard. It is a desktop workspace for the
            repository already on your machine, with Git actions exposed only where the
            user chooses them.
          </p>
        </div>
        <a className="button secondary" href={sourceUrl}>
          <Github size={18} aria-hidden="true" />
          <span>Explore the project</span>
        </a>
      </section>
    </main>
  )
}

export default App
