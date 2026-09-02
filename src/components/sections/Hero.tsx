import headshot from '../../assets/images/headshot.jpg'
import { profile } from '../../data/profile'
import { Button } from '../ui/Button'
import { TerminalWindow } from '../ui/TerminalWindow'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-16 pt-20 sm:pt-28">
      <TerminalWindow title="whoami">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <img
            src={headshot}
            alt={profile.name}
            className="h-24 w-24 shrink-0 rounded-full border border-border object-cover sm:h-28 sm:w-28"
          />

          <div>
            <p className="font-mono text-sm text-muted">
              <span className="text-accent">$</span> whoami
            </p>
            <h1 className="mt-3 text-3xl font-bold text-foreground sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-lg text-accent sm:text-xl">{profile.title}</p>
            <p className="mt-4 max-w-xl text-muted">{profile.tagline}</p>
            <p className="mt-1 text-sm text-muted">{profile.location}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={profile.resumeUrl} download="Allen_Potts_Resume.pdf">
                Download Resume
              </Button>
              <Button href="#projects" variant="secondary">
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </TerminalWindow>
    </section>
  )
}
