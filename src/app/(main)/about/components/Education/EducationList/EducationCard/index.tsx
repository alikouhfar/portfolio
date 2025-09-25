import { FC } from 'react'
import { EducationCardPropsType } from './types'
import { MapPin, School } from 'lucide-react'

const EducationCard: FC<EducationCardPropsType> = (props) => {
  const startYear = props.startYear
  const finishYear = props.finishYear || 'Present'

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="text-center">
        <div className="mb-3 flex items-center gap-2">
          <h3 className="max-w-72 text-xl leading-6 font-bold sm:max-w-96 sm:text-3xl">{props.title}</h3>
          <p className="mt-1 text-xs font-bold text-amber-500 sm:mt-2 sm:text-sm">
            {startYear} &mdash; {finishYear}
          </p>
        </div>
        <p className="flex items-center justify-center gap-1 text-sm leading-4 text-zinc-300 sm:text-base">
          <School size={14} />
          <span>{props.instituteTitle}</span>
        </p>
        <p className="flex items-center justify-center gap-0.5 text-sm text-zinc-300 sm:text-base">
          <MapPin size={14} />
          <span>{props.location}</span>
        </p>
      </div>
      <p className="flex-1 text-justify">{props.description}</p>
    </div>
  )
}

export default EducationCard
