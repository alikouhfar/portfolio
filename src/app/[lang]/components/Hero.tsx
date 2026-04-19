import { IconArrowUpRight, IconDownload } from '@tabler/icons-react'
import clsx from 'clsx'
import { motion, useTransform } from 'motion/react'
import { FC } from 'react'
import { HeroProps } from '../types'

export const Hero: FC<HeroProps> = (props) => {
  const { lang, dictionary, scrollYProgress } = props
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <section
      id="hero"
      className="bg-ink relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-20 text-white md:px-20"
    >
      <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 flex items-center gap-4"
        >
          <span className="bg-theme/20 border-theme/30 text-theme rounded-full border px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
            {dictionary.status}
          </span>
          <div className="h-px w-12 bg-white/20" />
          <span className="text-[10px] tracking-widest text-white/50 uppercase">{dictionary.location}</span>
        </motion.div>

        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-display flex flex-col text-7xl leading-[0.8] font-bold uppercase md:text-[12vw]"
          >
            <span className={clsx(lang !== 'fa' && 'font-grotesk')}>{dictionary.title1}</span>
            <span
              className={clsx(
                'stroke-white stroke-1 text-transparent md:stroke-2',
                lang !== 'fa' && 'font-grotesk'
              )}
              style={{ WebkitTextStroke: '1px white' }}
            >
              {dictionary.title2}
            </span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 max-w-3xl text-lg leading-relaxed font-light text-white/60 md:text-xl"
        >
          {dictionary.subtitle}
          <span className="decoration-theme font-medium text-white underline underline-offset-8">
            {dictionary.subtitleHighlight}
          </span>
          {dictionary.subtitleEnd}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex flex-wrap items-center gap-6"
        >
          <a
            href="#work"
            className="bg-theme group flex items-center gap-3 rounded-full px-8 py-4 text-xs font-bold tracking-widest text-white uppercase transition-transform hover:scale-105"
          >
            {dictionary.cta}
            <IconArrowUpRight className="rtl-flip h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
          <button
            disabled
            className="group flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 text-xs font-bold tracking-widest text-white uppercase transition-all not-disabled:hover:bg-white not-disabled:hover:text-black disabled:opacity-40"
          >
            {dictionary.cv}
            <IconDownload className="h-5 w-5 transition-transform group-hover:translate-y-1" />
          </button>
        </motion.div>
      </motion.div>

      <div className="bg-theme/10 absolute top-1/2 right-0 h-[60vw] w-[60vw] -translate-y-1/2 rounded-full blur-[180px]" />
    </section>
  )
}
