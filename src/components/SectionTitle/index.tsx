import { Norican } from 'next/font/google'
import { clsx } from 'clsx'
import { FC } from 'react'
import { SectionTitleProps } from './types'

const norican = Norican({
  subsets: ['latin'],
  weight: ['400'],
})

const SectionTitle: FC<SectionTitleProps> = (props) => {
  const rootClassName = props?.rootClassName ?? ''

  return (
    <h2
      className={clsx(
        'mb-20 text-center text-4xl font-medium tracking-tight text-balance sm:text-5xl md:text-6xl',
        rootClassName
      )}
      style={{
        textShadow: 'rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.25) 0px 8px 30px',
      }}
    >
      <p className="mb-3 text-xs font-normal tracking-widest text-black/80 uppercase md:text-sm dark:text-white/70">
        {props.title}
      </p>
      <>
        <span>{props.description}</span>
        <span
          className={`${norican.className} text-colorful animate-gradient-x ml-3 bg-linear-to-b text-5xl font-light tracking-wide text-transparent italic md:text-6xl lg:text-7xl dark:from-zinc-700 dark:via-zinc-200 dark:to-zinc-50`}
        >
          {props.descriptionKeyword}
        </span>
      </>
    </h2>
  )
}

export default SectionTitle
