import type { Project } from '../../types/content'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col rounded-lg border border-border bg-surface p-6">
      <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
      {project.highlight && <p className="mt-3 text-xs text-accent">→ {project.highlight}</p>}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
      <div className="mt-5 flex gap-3">
        <Button href={project.repoUrl} target="_blank" rel="noreferrer" variant="secondary">
          View Code
        </Button>
        {project.liveUrl && (
          <Button href={project.liveUrl} target="_blank" rel="noreferrer">
            Live Demo
          </Button>
        )}
      </div>
    </div>
  )
}
