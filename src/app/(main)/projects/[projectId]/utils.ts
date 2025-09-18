import { Project } from '@/types/project'
import { projects } from '@/lib/projects'

export const getProject = (id: string): Project => {
  const project = projects.find((project) => project.id === id)
  return project as Project
}
