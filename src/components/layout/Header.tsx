import { useState } from 'react'
import { profile } from '../../data/profile'

const links = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#experience', label: 'experience' },
  { href: '#projects', label: 'projects' },
  { href: '#education', label: 'education' },
  { href: '#contact', label: 'contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-sm">
          <span className="text-accent">allen@portfolio</span>
          <span className="text-muted">:~$</span>
        </a>

        <ul className="hidden gap-6 text-sm text-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href={profile.resumeUrl}
            download="Allen_Potts_Resume.pdf"
            className="hidden text-sm text-accent transition-colors hover:text-accent-strong sm:inline"
          >
            resume ↓
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 sm:hidden"
          >
            <span className="h-px w-5 bg-foreground" />
            <span className="h-px w-5 bg-foreground" />
            <span className="h-px w-5 bg-foreground" />
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border px-6 py-4 text-sm text-muted sm:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumeUrl}
              download="Allen_Potts_Resume.pdf"
              className="block py-2 text-accent"
            >
              resume ↓
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
