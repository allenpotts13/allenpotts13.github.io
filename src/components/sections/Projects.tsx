import { projects } from '../../data/projects'
import { SectionHeading } from '../ui/SectionHeading'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading index="04" command="projects/" title="Projects" />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
