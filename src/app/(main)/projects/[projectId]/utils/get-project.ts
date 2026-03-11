import { projects } from '@/lib/projects'
import { IProject } from '@/types/project'

export const getProject = (id: string): IProject => {
  const project = projects.find((project) => project.id === id)
  return project as IProject
}
