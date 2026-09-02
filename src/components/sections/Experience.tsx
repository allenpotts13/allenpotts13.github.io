import { experience } from '../../data/experience'
import { SectionHeading } from '../ui/SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading index="03" command="experience.log" title="Experience" />
      <div className="space-y-10 border-l border-border pl-6">
        {experience.map((entry) => (
          <div key={`${entry.org}-${entry.role}`} className="relative">
            <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-semibold text-foreground">{entry.role}</h3>
              <span className="text-xs text-muted">
                {entry.start} – {entry.end}
              </span>
            </div>
            <p className="text-sm text-accent">{entry.org}</p>
            <ul className="mt-3 space-y-1.5 text-sm text-muted">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="text-accent">›</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
