import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { clsx } from 'clsx'
import { LinkWithArrowIconProps } from './types'
import { FC } from 'react'

const LinkWithArrowIcon: FC<LinkWithArrowIconProps> = (props) => {
  const rootClassName = props?.rootClassName ?? ''

  return (
    <Link
      className={clsx(
        'group mx-auto mt-10 flex w-fit items-center justify-center gap-2 text-white capitalize',
        rootClassName
      )}
      href={props.href}
    >
      {props.title}
      <div className="bg-white-1/50 size-[25px] overflow-hidden rounded-full border border-neutral-300 transition-all duration-500 group-hover:bg-neutral-200 dark:border-white/10 dark:bg-white/5 dark:group-hover:bg-white/10">
        <div className="flex w-12 -translate-x-1/2 transition-transform duration-500 ease-in-out group-hover:translate-x-0">
          <span className="flex size-6">
            <ArrowRight size={14} className="m-auto" />
          </span>
          <span className="flex size-6">
            <ArrowRight size={14} className="m-auto" />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default LinkWithArrowIcon
