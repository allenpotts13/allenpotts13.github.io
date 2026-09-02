interface SectionHeadingProps {
  index: string
  command: string
  title: string
}

export function SectionHeading({ index, command, title }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <span className="text-sm text-muted">{index}</span>
      <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
        <span className="text-accent">&gt;</span> {title}
      </h2>
      <span className="text-xs text-muted">{command}</span>
    </div>
  )
}
