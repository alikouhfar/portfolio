import { PROJECTS } from '@/constants/projects'
import { IconExternalLink } from '@tabler/icons-react'
import clsx from 'clsx'
import { motion } from 'motion/react'
import { FC } from 'react'
import { ProjectsProps } from '../types'
import Link from 'next/link'

export const Projects: FC<ProjectsProps> = ({ lang, dictionary }) => {
  return (
    <section id="project" className="bg-ink relative overflow-hidden px-6 py-32 text-white md:px-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-theme/10 absolute top-[-20%] right-[-10%] h-[50%] w-[50%] rounded-full blur-[150px]" />
        <div className="bg-theme/5 absolute bottom-[-20%] left-[-10%] h-[50%] w-[50%] rounded-full blur-[150px]" />
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
          <p className="max-w-xs text-sm text-white/60">{dictionary.desc}</p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS[lang].map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-white/5 shadow-2xl shadow-black/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="bg-ink/40 absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <Link
                    target="_blank"
                    href={project.link}
                    className="flex h-16 w-16 scale-0 items-center justify-center rounded-full bg-white transition-transform duration-500 group-hover:scale-100"
                  >
                    <IconExternalLink className="text-ink h-6 w-6" />
                  </Link>
                </div>
                <div
                  className={`absolute bottom-6 ${lang === 'fa' ? 'right-6' : 'left-6'} flex w-4/5 flex-wrap gap-2`}
                >
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold text-white uppercase backdrop-blur-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex items-start justify-between">
                <div>
                  <p className={clsx('text-theme mb-1 text-xs uppercase', lang !== 'fa' && 'font-mono')}>
                    {project.category}
                  </p>
                  <h3
                    className={clsx(
                      'text-display text-2xl font-bold uppercase',
                      lang !== 'fa' && 'font-grotesk'
                    )}
                  >
                    {project.title}
                  </h3>
                </div>
                <span className={clsx('text-sm text-white/40', lang !== 'fa' && 'font-mono')}>
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
