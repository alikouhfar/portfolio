import Link from 'next/link'
import { FC } from 'react'
import { FooterPageListProps } from './types'

const FooterPageList: FC<FooterPageListProps> = (props) => {
  return (
    <ul className="flex flex-wrap items-start gap-x-4 gap-y-2 text-sm md:flex-col md:gap-y-3 dark:text-neutral-300">
      {props.pages.map((item, index) => (
        <li key={index}>
          <Link
            className="after:bg-primary relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
            href={item.route}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default FooterPageList
