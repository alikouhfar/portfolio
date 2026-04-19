import { EDUCATIONS } from '@/constants/educations'
import clsx from 'clsx'
import { motion } from 'motion/react'
import { FC } from 'react'
import { EducationProps } from '../types'

export const Education: FC<EducationProps> = ({ lang, dictionary }) => {
  return (
    <section id="education" className="bg-bg border-ink/5 border-b px-6 py-32 md:px-20">
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
      </div>

      <div className="relative">
        <div className="bg-ink/10 absolute top-0 left-4 h-full w-px md:left-1/2" />

        <div className="space-y-24">
          {EDUCATIONS[lang].map((education, index) => {
            const isEven = (index + 1) % 2 === 0

            return (
              <motion.div
                key={education.id}
                initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative flex flex-col items-start pl-12 md:flex-row md:items-center md:justify-between md:pl-0"
              >
                <div
                  className={clsx(
                    'mb-4 md:mb-0 md:w-[45%]',
                    isEven ? 'md:order-2' : lang === 'fa' ? 'md:text-left' : 'md:text-right'
                  )}
                >
                  <p className={clsx('text-theme mb-2 text-sm', lang !== 'fa' && 'font-mono')}>
                    {education.period}
                  </p>
                  <h5 className={clsx('mb-1 text-2xl font-bold uppercase', lang !== 'fa' && 'font-grotesk')}>
                    {education.major}
                  </h5>
                  <p className="text-ink-muted font-medium">{education.institute}</p>
                </div>

                <div className="bg-theme ring-bg absolute left-3.25 h-2 w-2 rounded-full ring-4 md:left-1/2 md:-translate-x-1/2" />

                <div
                  className={clsx(
                    'md:w-[45%]',
                    isEven && 'md:order-1',
                    lang === 'fa'
                      ? isEven
                        ? 'md:text-left'
                        : 'md:text-right'
                      : isEven
                        ? 'md:text-right'
                        : 'md:text-left'
                  )}
                >
                  <p className="text-ink-muted text-justify text-sm leading-relaxed">
                    {education.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
