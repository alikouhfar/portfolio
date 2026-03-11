import { IFooterPageListProps } from '@/types/footer-page-list'
import Link from 'next/link'
import { FC } from 'react'

const FooterPageList: FC<IFooterPageListProps> = (props) => {
  const { pages } = props

  return (
    <ul className="flex flex-wrap items-start gap-x-4 gap-y-2 text-sm md:flex-col md:gap-y-3 dark:text-neutral-300">
      {pages.map((page) => (
        <li key={page.id}>
          <Link
            className="after:bg-primary relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
            href={page.route}
          >
            {page.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default FooterPageList
