import { education } from '../../data/education'
import { SectionHeading } from '../ui/SectionHeading'

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading index="05" command="education.yaml" title="Education" />
      <div className="grid gap-4 sm:grid-cols-2">
        {education.map((entry) => (
          <div
            key={`${entry.school}-${entry.program}`}
            className="rounded-lg border border-border bg-surface p-5"
          >
            <h3 className="font-semibold text-foreground">{entry.program}</h3>
            <p className="text-sm text-accent">{entry.school}</p>
            <p className="mt-1 text-xs text-muted">
              {entry.date}
              {entry.detail ? ` · ${entry.detail}` : ''}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
