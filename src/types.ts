export type ProjectCategory = 'frontend' | 'backend'

export type ProjectStatus = 'completed' | 'in-progress'

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
  status: ProjectStatus
  highlights: string[]
  year: number
}

export interface Skill {
  name: string
  category: ProjectCategory | 'tools'
}

export interface SocialLink {
  label: string
  url: string
  icon: 'github' | 'linkedin' | 'email' | 'twitter'
}

export interface PersonalInfo {
  name: string
  role: string
  tagline: string
  bio: string
  location: string
  email: string
  availableForWork: boolean
  social: SocialLink[]
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string
}
