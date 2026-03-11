import { ProjectItemThemesType } from './project-item-themes'
import { ITechnology } from './technology'

export interface IFeature {
  id: string
  title: string
  icon?: string
  description: string
}

export interface IResult {
  id: string
  title: string
}

export interface IGallery {
  id: string
  src: string
}

export interface IProjectImages {
  hero?: string
  featuresImages?: string[]
  gallery?: string[]
}

export interface IChallengeSolution {
  id: string
  solution: string
  challenge: string
}

export interface IProject {
  id: string
  title: string
  shortTitle: string
  subtitle: string
  description: string
  overview?: string
  imageUrl: string
  images?: IProjectImages
  theme: ProjectItemThemesType
  features: Array<IFeature>
  technologies: Array<ITechnology>
  role: string
  status: 'ongoing' | 'completed'
  startYear: number
  finishYear?: number
  repositoryUrl?: string
  demoUrl?: string
  challengesAndSolutions?: Array<IChallengeSolution>
  results?: Array<IResult>
  gallery?: Array<IGallery>
}
