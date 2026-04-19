import { SPOKEN_LANGUAGES } from '@/constants/languages'
import clsx from 'clsx'
import { motion } from 'motion/react'
import { FC } from 'react'
import { LanguagesProps } from '../types'

export const Languages: FC<LanguagesProps> = ({ lang, dictionary }) => {
  return (
    <section id="languages" className="bg-ink relative overflow-hidden px-6 py-32 text-white md:px-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-theme/10 absolute top-[-20%] left-[-10%] h-[50%] w-[50%] rounded-full blur-[150px]" />
        <div className="bg-theme/5 absolute right-[-10%] bottom-[-20%] h-[50%] w-[50%] rounded-full blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <span className={clsx('text-theme mb-2 block text-sm', lang !== 'fa' && 'font-mono')}>
          {dictionary.title}
        </span>
        <h2
          className={clsx(
            'text-display mb-16 text-5xl font-bold uppercase md:text-7xl',
            lang !== 'fa' && 'font-grotesk'
          )}
        >
          {dictionary.heading}
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {SPOKEN_LANGUAGES[lang].map((language, i) => (
            <motion.div
              key={language.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col items-center rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
            >
              <span className="mb-6 text-6xl transition-transform duration-500 group-hover:scale-110">
                {language.flag}
              </span>
              <h4
                className={clsx(
                  'text-display mb-2 text-2xl font-bold uppercase',
                  lang !== 'fa' && 'font-grotesk'
                )}
              >
                {language.name}
              </h4>
              <span className="bg-theme/20 text-theme rounded-full px-4 py-1 text-[10px] font-bold tracking-widest uppercase">
                {language.level}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
