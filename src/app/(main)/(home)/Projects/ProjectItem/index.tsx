import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { FC } from 'react'
import { clsx } from 'clsx'
import { ProjectItemProps } from '@/app/(main)/(home)/Projects/ProjectItem/types'
import { ProjectItemDirections } from '@/app/(main)/(home)/Projects/ProjectItem/enums'
import { projectItemThemeColors } from '@/app/_lib/project-item-theme-colors'

const ProjectItem: FC<ProjectItemProps> = (props) => {
  return (
    <div
      className={`relative mx-auto flex w-full flex-col items-center ${props.direction === ProjectItemDirections.Right ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
    >
      <div
        className="project-card flex w-full flex-4 flex-row"
        style={{
          opacity: 1,
          transform: 'none',
        }}
      >
        <div className="flex w-full flex-col sm:w-4/5 lg:mx-10 lg:w-full">
          <a
            draggable="false"
            className="border-white-3 relative cursor-pointer overflow-hidden rounded-2xl border bg-[#f2f2f20c] p-1.5 shadow-2xl lg:h-[560px] lg:rounded-3xl lg:p-2 dark:border-white/15"
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
                  'hidden w-full flex-row items-center justify-between px-12 py-8 lg:flex',
                  projectItemThemeColors[props.projectDetails.theme].description
                )}
              >
                <h3 className="max-w-[90%] text-2xl">{props.projectDetails.description}</h3>
                <ArrowRight size={24} />
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
          </a>
        </div>
      </div>
      <div className="py-4 lg:flex-2">
        <div className="top-40">
          <div className="flex">
            <div
              aria-hidden="true"
              className={clsx(
                'my-4 mr-4 h-1 min-w-6 rounded-full',
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
              <ul className="text-accent-foreground/85 mt-4 hidden flex-col gap-y-2 text-base lg:flex">
                {props.projectDetails.features.map((item, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className={clsx(
                        'lg:bg-white-1 mt-1 mr-2 size-5 shrink-0',
                        projectItemThemeColors[props.projectDetails.theme].fill
                      )}
                    >
                      <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-1.5 text-sm lg:mt-10 lg:gap-3">
                {props.projectDetails.technologies.map(({ name, logo }) => (
                  <div key={name} style={{ opacity: 1, transform: 'none' }}>
                    <span
                      data-slot="badge"
                      className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border-white-3 bg-white-2 [a&]:hover:bg-primary/90 inline-flex w-fit shrink-0 items-center justify-center gap-2 overflow-hidden rounded-lg border px-3 py-1 text-sm whitespace-nowrap text-black transition-[color,box-shadow] focus-visible:ring-[3px] dark:border-white/[0.14] dark:bg-neutral-900 dark:text-white [&>svg]:pointer-events-none"
                    >
                      {logo && <Icon icon={logo} width="14" color="#ffffff" />}
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem