import motorcycle from '../../assets/images/motorcycle.jpg'
import { profile } from '../../data/profile'
import { SectionHeading } from '../ui/SectionHeading'
import { TerminalWindow } from '../ui/TerminalWindow'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading index="01" command="about.md" title="About" />
      <TerminalWindow title="cat about.md">
        <div className="space-y-4">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 20)} className="leading-relaxed text-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        <figure className="mt-6">
          <img
            src={motorcycle}
            alt="Allen riding his 2024 Harley-Davidson Road Glide on Tail of the Dragon"
            className="w-full rounded-lg border border-border object-cover"
          />
          <figcaption className="mt-2 font-mono text-xs text-muted">
            // Tail of the Dragon — riding Morticia, my '24 Road Glide
          </figcaption>
        </figure>
      </TerminalWindow>
    </section>
  )
}
