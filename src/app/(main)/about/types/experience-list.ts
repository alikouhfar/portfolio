import { ITechnology } from '@/types/technology'

export interface IRoleWithDescription {
  id: string
  role: string
  description: string
  startYear: number
  finishYear?: number | null
}

export interface IExperience {
  id: string
  startYear: number
  finishYear?: number | null
  companyTitle: string
  location: string
  technologies: Array<ITechnology>
  rolesWithDescription: Array<IRoleWithDescription>
  isRemote: boolean
}
