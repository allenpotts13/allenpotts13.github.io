export interface Project {
  name: string
  description: string
  tech: string[]
  repoUrl: string
  liveUrl?: string
  highlight?: string
}

export interface ExperienceEntry {
  role: string
  org: string
  start: string
  end: string
  bullets: string[]
}

export interface EducationEntry {
  program: string
  school: string
  date: string
  detail?: string
}

export interface SkillCategory {
  label: string
  items: string[]
}

export interface Profile {
  name: string
  title: string
  tagline: string
  location: string
  email: string
  githubUrl: string
  linkedinUrl: string
  resumeUrl: string
  about: string[]
}
