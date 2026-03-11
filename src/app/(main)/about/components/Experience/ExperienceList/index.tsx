import { experiences } from '../../../lib/experience-list'
import ExperienceCard from './ExperienceCard'

const ExperienceList = () => {
  return (
    <ul className="space-y-20">
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} {...experience} />
      ))}
    </ul>
  )
}

export default ExperienceList
