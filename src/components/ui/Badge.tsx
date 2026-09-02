interface BadgeProps {
  children: string
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded border border-border bg-surface px-2.5 py-1 text-xs text-muted">
      {children}
    </span>
  )
}
