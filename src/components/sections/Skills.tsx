import { skills } from '../../data/skills'
import { Badge } from '../ui/Badge'
import { SectionHeading } from '../ui/SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading index="02" command="skills.json" title="Skills" />
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((category) => (
          <div key={category.label} className="rounded-lg border border-border bg-surface p-5">
            <h3 className="mb-3 text-sm font-semibold text-accent">{category.label}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
