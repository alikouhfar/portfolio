import { ProjectItemDirections } from './enums'
import { Project } from '@/types/project'

export type ProjectItemProps = {
  direction?: ProjectItemDirections
  projectDetails: Project
}