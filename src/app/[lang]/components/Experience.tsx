import { EXPERIENCE } from '@/constants/experience'
import { IconBriefcase } from '@tabler/icons-react'
import clsx from 'clsx'
import { motion } from 'motion/react'
import { FC } from 'react'
import { ExperienceProps } from '../types'

export const Experience: FC<ExperienceProps> = ({ lang, dictionary }) => {
  return (
    <section id="experience" className="bg-ink relative overflow-hidden px-6 py-32 text-white md:px-20">
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

      <div className="relative z-10">
        <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className={clsx('text-theme mb-2 block text-sm', lang !== 'fa' && 'font-mono')}>
              {dictionary.title}
            </span>
            <h2
              className={clsx(
                'text-display text-5xl font-bold uppercase md:text-7xl',
                lang !== 'fa' && 'font-grotesk'
              )}
            >
              {dictionary.heading}
            </h2>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
              <IconBriefcase className="text-theme" />
              <div>
                <p className="text-[10px] text-white/50 uppercase">{dictionary.current}</p>
                <p className="text-sm font-bold">{dictionary.role}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-0">
          {EXPERIENCE[lang].map((experience, i) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative -mx-6 grid grid-cols-1 gap-8 border-b border-white/10 px-6 py-12 md:grid-cols-[200px_1fr]"
            >
              <span className={clsx('text-sm text-white/40', lang !== 'fa' && 'font-mono')}>
                {experience.period}
              </span>
              <div>
                <h3
                  className={clsx(
                    'text-display mb-2 text-2xl font-bold uppercase',
                    lang !== 'fa' && 'font-grotesk'
                  )}
                >
                  {experience.role}
                </h3>
                <p className="text-theme mb-4 font-medium">{experience.company}</p>
                <p className="max-w-6xl text-sm leading-relaxed text-white/60">{experience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
