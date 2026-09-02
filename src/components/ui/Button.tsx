import type { AnchorHTMLAttributes } from 'react'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary'
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors'
  const styles =
    variant === 'primary'
      ? 'bg-accent text-background hover:bg-accent-strong'
      : 'border border-border text-foreground hover:border-accent hover:text-accent'

  return (
    <a className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </a>
  )
}
