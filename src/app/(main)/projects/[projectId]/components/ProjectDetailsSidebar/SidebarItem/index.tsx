import { FC } from 'react'
import { SidebarItemPropsType } from './types'

const SidebarItem: FC<SidebarItemPropsType> = (props) => {
  return (
    <li
      ref={props.ref}
      className="group flex cursor-pointer items-center gap-2 border-l border-zinc-600 py-2 pl-3"
      onClick={(e) => {
        e.preventDefault()
        const element = document.getElementById(props.id)
        if (element) {
          const offset = 600
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          })

          window.history.pushState(null, '', `#${props.id}`)
        }
      }}
    >
      {props.emoji && (
        <span
          className={`${props.isActive ? '' : 'transition-all duration-300 group-hover:scale-125 group-hover:-rotate-6'}`}
        >
          {props.emoji}
        </span>
      )}
      <span
        className={`transition-all duration-300 ${props.isActive ? 'font-semibold text-zinc-50' : 'text-zinc-600 group-hover:font-semibold group-hover:text-indigo-300'}`}
      >
        {props.title}
      </span>
    </li>
  )
}

export default SidebarItem
