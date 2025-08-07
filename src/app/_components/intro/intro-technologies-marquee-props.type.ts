import { IntroTechnologiesMarqueeItemType } from '@/app/_components/intro/intro-technologies-marquee-item.type'

export type IntroTechnologiesMarqueePropsType = {
  readonly direction?: 'left' | 'right'
  readonly technologies: Array<IntroTechnologiesMarqueeItemType>
}
