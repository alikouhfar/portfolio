import { Icon } from '@iconify/react'
import Marquee from 'react-fast-marquee'
import { HomeIntroTechnologiesMarqueePropsType } from '@/app/_components/home-intro/home-intro-technologies-marquee-props.type'

export default function HomeIntroTechnologiesMarquee(props: HomeIntroTechnologiesMarqueePropsType) {
  const { direction = 'left' } = props

  return (
    <Marquee direction={direction} gradient={false} speed={20} loop={100} className="p-2">
      {props.technologies.map((technology, index) => (
        <div
          key={index}
          data-slot="badge"
          className="mx-2 inline-flex items-center justify-center gap-2 rounded-md border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm text-white"
          aria-label={technology.name}
        >
          {technology.logo && <Icon icon={technology.logo} width="14" color="#ffffff" />}
          <span>{technology.name}</span>
        </div>
      ))}
    </Marquee>
  )
}
