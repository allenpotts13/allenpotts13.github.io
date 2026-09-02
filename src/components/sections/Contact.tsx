import { profile } from '../../data/profile'
import { Button } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'
import { TerminalWindow } from '../ui/TerminalWindow'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading index="06" command="contact.sh" title="Contact" />
      <TerminalWindow title="contact.sh">
        <p className="text-muted">
          <span className="text-accent">$</span> Let's talk about data engineering, software
          roles, or anything in between.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={`mailto:${profile.email}`}>Email Me</Button>
          <Button href={profile.linkedinUrl} target="_blank" rel="noreferrer" variant="secondary">
            LinkedIn
          </Button>
          <Button href={profile.githubUrl} target="_blank" rel="noreferrer" variant="secondary">
            GitHub
          </Button>
          <Button href={profile.resumeUrl} download="Allen_Potts_Resume.pdf" variant="secondary">
            Resume
          </Button>
        </div>
      </TerminalWindow>
    </section>
  )
}
