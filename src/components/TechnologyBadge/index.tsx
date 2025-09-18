import { Icon } from '@iconify/react'
import { FC } from 'react'
import { TechnologyBadgeProps } from './types'

const TechnologyBadge: FC<TechnologyBadgeProps> = (props) => {
  return (
    <li
      data-slot="badge"
      className="inline-flex w-fit shrink-0 cursor-context-menu items-center justify-center gap-2 overflow-hidden rounded-lg border border-white/15 bg-neutral-900 px-3 py-1 text-sm whitespace-nowrap text-white transition-all duration-500 hover:border-white/40 hover:shadow-md hover:shadow-white/10"
    >
      {props.logo && (
        <div className="w-3.5">
          <Icon icon={props.logo} width="14" color="#ffffff" />
        </div>
      )}
      {props.title}
    </li>
  )
}

export default TechnologyBadge
