import { HomeIntroTechnologiesMarqueeItemType } from '@/app/_components/home-intro/home-intro-technologies-marquee-item.type'

export type HomeIntroTechnologiesMarqueePropsType = {
   direction?: 'left' | 'right'
   technologies: Array<HomeIntroTechnologiesMarqueeItemType>
}
