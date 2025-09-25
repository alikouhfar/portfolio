import TechnologyBadge from '@/components/TechnologyBadge'
import { BriefcaseBusiness, Laptop, MapPin } from 'lucide-react'
import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { ExperienceCardPropsType } from './types'

const ExperienceCard: FC<ExperienceCardPropsType> = (props) => {
  const startYear = props.startYear
  const finishYear = props.finishYear || 'Present'

  return (
    <div className="flex flex-col gap-20 md:flex-row md:gap-10 lg:gap-20">
      <div className="max-w-64 flex-1">
        <p className="mb-2 text-xs font-bold text-amber-500 sm:text-sm">
          {startYear} &mdash; {finishYear}
        </p>
        <h3 className="mb-1 text-xl leading-5 font-bold">{props.companyTitle}</h3>
        <p className="flex items-center gap-0.5 text-sm text-zinc-300 sm:text-base">
          <MapPin size={14} />
          <span>{props.location}</span>
        </p>
        <p className="flex items-center gap-1 text-sm leading-4 text-zinc-300 sm:text-base">
          {props.isRemote ? <Laptop size={14} /> : <BriefcaseBusiness size={14} />}
          <span>{props.isRemote ? 'Remote' : 'On Site'}</span>
        </p>
      </div>
      <div className="flex-1">
        <ul className="space-y-14">
          {props.rolesWithDescription.map((roleWithDescription, index) => {
            const startYear = roleWithDescription.startYear
            const finishYear = roleWithDescription.finishYear || 'Present'

            return (
              <li className="relative" key={index}>
                <div className="absolute -top-6 left-0 z-20 h-2 w-14 rounded-full bg-amber-500 md:-top-2 md:-left-6 md:h-14 md:w-2" />
                <div className="absolute -top-5.5 z-10 h-1 w-full rounded-full bg-zinc-800 md:top-0 md:-left-5.5 md:h-full md:w-1" />
                <h3 className="text-2xl leading-5 font-bold sm:text-3xl">{roleWithDescription.role}</h3>
                <span className="mb-2 font-semibold text-amber-500">
                  {startYear} - {finishYear}
                </span>
                <div className="mt-2 space-y-3">
                  <ReactMarkdown
                    components={{
                      p: ({ node, ...props }) => <p className="text-justify leading-5" {...props} />,
                    }}
                  >
                    {roleWithDescription.description}
                  </ReactMarkdown>
                </div>
              </li>
            )
          })}
        </ul>
        <ul className="mt-5 flex flex-wrap gap-2 text-sm lg:mt-10">
          {props.technologies.map((technology) => (
            <TechnologyBadge key={technology.title} {...technology} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ExperienceCard
