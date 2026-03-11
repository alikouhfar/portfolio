import { IProject } from '@/types/project'

export interface IProjectItemProps {
  direction?: 'left' | 'right'
  projectDetails: IProject
}