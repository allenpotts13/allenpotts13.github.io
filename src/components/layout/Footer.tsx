import { profile } from '../../data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {profile.name}
        </p>
        <p>Built with React, TypeScript &amp; Tailwind CSS.</p>
      </div>
    </footer>
  )
}
