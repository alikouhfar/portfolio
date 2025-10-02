import ExperienceCard from './ExperienceCard'
import { experiences } from './lib'

const ExperienceList = () => {
  return (
    <ul className="space-y-20">
      {experiences.map((experience, index) => (
        <ExperienceCard key={index} {...experience} />
      ))}
    </ul>
  )
}

export default ExperienceList
