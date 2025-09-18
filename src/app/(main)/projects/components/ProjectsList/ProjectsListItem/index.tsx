import { clsx } from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { projectItemThemeColors } from '@/lib/project-item-theme-colors'
import { ProjectListItemProps } from './types'
import TechnologyBadge from '@/components/TechnologyBadge'
import { FC } from 'react'

const ProjectsListItem: FC<ProjectListItemProps> = (props) => {
  return (
    <div className="relative mx-auto">
      <Link className="flex flex-col items-center" href={`/projects/${props.project.id}`}>
        <div className="relative flex max-w-80 flex-col self-baseline py-4">
          <div
            className={clsx(
              'absolute top-1 -left-3 h-12 w-12 blur-xl',
              projectItemThemeColors[props.project.theme].background
            )}
          />
          <h2 className="text-foreground z-10 text-2xl font-bold">{props.project.title}</h2>
        </div>
        <div className="border-white-3 relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-2xl border bg-[#f2f2f20c] p-1.5 shadow-2xl sm:aspect-square lg:rounded-3xl lg:p-2 dark:border-white/15">
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background:
                'linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)',
            }}
          ></div>
          <div className="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl from-black/40 to-transparent transition-all duration-300 lg:rounded-2xl dark:bg-linear-to-b">
            <div
              className={clsx('absolute inset-0 -z-1', projectItemThemeColors[props.project.theme].gradient)}
            />
            <div
              className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70"
              style={{
                background:
                  'linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)',
              }}
            ></div>
            <div
              className={clsx(
                'flex w-full items-center justify-between gap-2 p-6',
                projectItemThemeColors[props.project.theme].description
              )}
            >
              <h3 className="text-lg">{props.project.description}</h3>
            </div>
            <Image
              alt={props.project.title}
              width={200}
              height={100}
              loading="lazy"
              decoding="async"
              className={clsx(
                'w-full max-w-[85%] translate-y-5 -rotate-3 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-500 will-change-transform group-hover:translate-y-10 group-hover:scale-[1.08] lg:block lg:rotate-0',
                projectItemThemeColors[props.project.theme].shadow
              )}
              style={{ color: 'transparent' }}
              src={props.project.imageUrl}
            />
          </div>
        </div>
      </Link>
      <div className="flex flex-col items-start py-4 lg:h-[500px]">
        <p className="text-muted-foreground my-2 text-base font-light">{props.project.subtitle}</p>
        <ul className="mt-3 flex flex-wrap gap-2 text-sm lg:mt-10">
          {props.project.technologies.map((technology) => (
            <TechnologyBadge key={technology.title} {...technology} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProjectsListItem
