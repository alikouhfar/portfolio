import { HomeProjectItemThemesEnum } from '@/app/_components/home-projects/home-project-item-themes.enum'
import { HomeIntroTechnologiesMarqueeItemType } from '@/app/_components/home-intro/home-intro-technologies-marquee-item.type'

export type HomeProjectDetailsType = {
   title: string
   subtitle: string
   description: string
   imageUrl: string
   theme: HomeProjectItemThemesEnum
   features: Array<string>
   technologies: Array<HomeIntroTechnologiesMarqueeItemType>
}