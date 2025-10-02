import { ProjectItemThemes } from '@/enums/project-item-themes'
import { Technology } from '@/types/technology'
import { ProjectStatus } from '@/enums/project-status'

export type Feature = {
  title: string
  description: string
  icon?: string
}

export type ProjectImages = {
  hero?: string
  featuresImages?: string[]
  gallery?: string[]
}

export type ChallengeSolution = {
  challenge: string
  solution: string
}

export type Project = {
  id: string
  title: string
  shortTitle: string
  subtitle: string
  description: string
  overview?: string
  imageUrl: string
  images?: ProjectImages
  theme: ProjectItemThemes
  features: Array<Feature>
  technologies: Array<Technology>
  role: string
  status: ProjectStatus
  startYear: number
  finishYear?: number
  repositoryUrl?: string
  demoUrl?: string
  challengesAndSolutions?: Array<ChallengeSolution>
  results?: Array<string>
  gallery?: Array<string>
}
