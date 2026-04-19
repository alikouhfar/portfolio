import { IconCircleCheck } from '@tabler/icons-react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { FC } from 'react'
import { AboutProps } from '../types'
import clsx from 'clsx'

export const About: FC<AboutProps> = ({ lang, dictionary }) => {
  const startYear = 2024
  const currentYear = new Date().getFullYear()
  const activityDuration = currentYear - startYear

  return (
    <section id="about" className="bg-bg px-6 py-32 md:px-20">
      <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: lang === 'fa' ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square overflow-hidden rounded-3xl shadow-2xl grayscale transition-all duration-700 hover:grayscale-0">
            <Image
              fill
              priority
              alt="Ali Kouhfar"
              src="/images/portrait.png"
              className="object-cover object-top"
            />
          </div>
          <div
            className={`absolute -bottom-10 ${lang === 'fa' ? '-left-10' : '-right-10'} bg-theme hidden rounded-2xl p-8 text-white shadow-xl md:block`}
          >
            <p className={clsx('text-4xl font-bold', lang !== 'fa' && 'font-grotesk')}>{activityDuration}+</p>
            <p className="text-xs tracking-widest uppercase opacity-80">{dictionary.exp}</p>
          </div>
        </motion.div>

        <div>
          <span className={clsx('text-theme mb-4 block text-sm', lang !== 'fa' && 'font-mono')}>
            {dictionary.title}
          </span>
          <h2
            className={clsx(
              'text-display mb-8 text-5xl leading-tight font-bold uppercase md:text-7xl',
              lang !== 'fa' && 'font-grotesk'
            )}
            dangerouslySetInnerHTML={{ __html: dictionary.heading }}
          />
          <div className="text-ink-muted space-y-6 text-lg leading-relaxed">
            <p>{dictionary.p1}</p>
            <p>{dictionary.p2}</p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8">
            <div className="flex items-start gap-3">
              <IconCircleCheck className="text-theme mt-1 h-6 w-6" />
              <div>
                <h4 className="text-sm font-bold uppercase">{dictionary.cleanCode}</h4>
                <p className="text-ink-muted text-xs">{dictionary.cleanCodeDesc}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <IconCircleCheck className="text-theme mt-1 h-6 w-6" />
              <div>
                <h4 className="text-sm font-bold uppercase">{dictionary.userCentric}</h4>
                <p className="text-ink-muted text-xs">{dictionary.userCentricDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
