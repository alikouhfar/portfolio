import { SKILLS } from '@/constants/skills'
import clsx from 'clsx'
import { motion } from 'motion/react'
import { FC } from 'react'
import { SkillsProps } from '../types'

export const Skills: FC<SkillsProps> = ({ lang, dictionary }) => {
  return (
    <section id="expertise" className="bg-bg text-ink px-6 py-32 md:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <span className={clsx('text-theme mb-2 block text-sm', lang !== 'fa' && 'font-mono')}>
            {dictionary.title}
          </span>
          <h2
            className={clsx(
              'text-display text-5xl leading-tight font-bold uppercase md:text-7xl',
              lang !== 'fa' && 'font-grotesk'
            )}
          >
            {dictionary.heading}
          </h2>
        </div>

        <div className="grid auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-4">
          {SKILLS[lang].map((skill, i) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group border-ink/10 hover:border-theme relative flex flex-col justify-between overflow-hidden rounded-3xl border p-8 transition-all duration-500 ${skill.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''} ${skill.size === 'medium' ? 'md:col-span-2' : ''} `}
            >
              <div className="relative z-10">
                <div className="text-theme mb-4 w-fit transition-transform duration-500 group-hover:scale-110">
                  {skill.icon}
                </div>
                <h4
                  className={clsx(
                    'mb-2 text-xl font-bold tracking-tight uppercase',
                    lang !== 'fa' && 'font-grotesk'
                  )}
                >
                  {skill.name}
                </h4>
                {skill.desc && (
                  <p className="text-ink-muted max-w-60 text-xs leading-relaxed transition-opacity duration-500">
                    {skill.desc}
                  </p>
                )}
              </div>

              <div className="bg-theme/5 group-hover:bg-theme/10 absolute -right-4 -bottom-4 size-24 rounded-full blur-2xl transition-colors duration-500" />

              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-5"
                style={{
                  backgroundImage: 'radial-gradient(circle, #141414 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
