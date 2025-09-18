import { clsx } from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { projectItemThemeColors } from '@/lib/project-item-theme-colors'
import { ProjectsListItemPropsType } from '@/app/(main)/projects/components/projects-list-item-props.type'
import TechnologyBadge from '@/components/TechnologyBadge'

export default function ProjectsListItem(props: ProjectsListItemPropsType) {
  return (
    <div className="relative mx-auto flex w-full flex-col items-center">
      <div
        className="project-card flex w-full flex-row sm:aspect-square"
        style={{
          opacity: 1,
          transform: 'none',
        }}
      >
        <div className="flex w-full flex-col">
          <Link
            className="border-white-3 relative h-full cursor-pointer overflow-hidden rounded-2xl border bg-[#f2f2f20c] p-1.5 shadow-2xl lg:rounded-3xl lg:p-2 dark:border-white/15"
            href="/projects/next-venture"
          >
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  'linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)',
              }}
            ></div>
            <div className="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl from-black/40 to-transparent transition-all duration-300 lg:rounded-2xl dark:bg-linear-to-b">
              <div
                className={clsx(
                  'absolute inset-0 -z-1',
                  projectItemThemeColors[props.projectDetails.theme].gradient
                )}
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
                  projectItemThemeColors[props.projectDetails.theme].description
                )}
              >
                <h3 className="text-lg">{props.projectDetails.description}</h3>
              </div>
              <Image
                alt={props.projectDetails.title}
                loading="lazy"
                width={1203}
                height={753}
                decoding="async"
                className={clsx(
                  'w-full max-w-[85%] translate-y-5 -rotate-3 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-500 will-change-transform lg:block lg:rotate-0 lg:group-hover:translate-y-10 lg:group-hover:scale-[1.08]',
                  projectItemThemeColors[props.projectDetails.theme].shadow
                )}
                style={{ color: 'transparent' }}
                src={props.projectDetails.imageUrl}
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="flex-1 py-4">
        <div className="top-40">
          <div className="flex flex-col">
            <div
              className={clsx(
                'my-2 h-1 w-16 rounded-full',
                projectItemThemeColors[props.projectDetails.theme].background
              )}
            />
            <div className="flex flex-col items-start lg:h-[500px]">
              <div className="flex items-center gap-3">
                <h3 className="text-foreground text-2xl font-bold">{props.projectDetails.title}</h3>
              </div>
              <p className="text-muted-foreground my-2 text-base font-light">
                {props.projectDetails.subtitle}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2 text-sm lg:mt-10">
                {props.projectDetails.technologies.map((technology) => (
                  <TechnologyBadge key={technology.title} {...technology} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
