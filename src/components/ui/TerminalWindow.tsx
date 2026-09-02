import type { ReactNode } from 'react'

interface TerminalWindowProps {
  title: string
  children: ReactNode
  className?: string
}

export function TerminalWindow({ title, children, className = '' }: TerminalWindowProps) {
  return (
    <div className={`overflow-hidden rounded-lg border border-border bg-surface ${className}`}>
      <div className="flex items-center gap-2 border-b border-border bg-surface-hover px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-2 truncate text-xs text-muted">{title}</span>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  )
}
