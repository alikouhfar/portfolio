import { Icon } from '@iconify/react'
import Marquee from 'react-fast-marquee'
import { IntroTechnologiesMarqueeProps } from './types'
import { FC } from 'react'

const IntroTechnologiesMarquee: FC<IntroTechnologiesMarqueeProps> = (props) => {
  const { direction = 'left' } = props


  return (
    <Marquee direction={direction} gradient={false} speed={20} loop={100} className="p-2">
      {props.technologies.map((technology, index) => (
        <div
          key={index}
          data-slot="badge"
          className="mx-2 inline-flex w-fit shrink-0 items-center cursor-context-menu justify-center gap-2 overflow-hidden rounded-lg border border-white/15 bg-neutral-900 px-3 py-1 text-sm whitespace-nowrap text-white transition-all duration-500 hover:border-white/40 hover:shadow-md hover:shadow-white/10"
          aria-label={technology.title}
        >
          {technology.logo && <Icon icon={technology.logo} width="14" color="#ffffff" />}
          <span>{technology.title}</span>
        </div>
      ))}
    </Marquee>
  )
}

export default IntroTechnologiesMarquee