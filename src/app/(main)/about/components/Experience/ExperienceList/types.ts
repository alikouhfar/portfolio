import { Technology } from '@/types/technology'

export type RoleWithDescription = {
  role: string
  description: string
  startYear: number
  finishYear?: number | null
}

export type ExperienceType = {
  startYear: number
  finishYear?: number | null
  companyTitle: string
  location: string
  technologies: Array<Technology>
  rolesWithDescription: Array<RoleWithDescription>
  isRemote: boolean
}
