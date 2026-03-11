import { ITechnology } from '@/types/technology'

export interface IIntroTechnologiesMarqueeProps {
  direction?: 'left' | 'right'
  technologies: Array<ITechnology>
}
