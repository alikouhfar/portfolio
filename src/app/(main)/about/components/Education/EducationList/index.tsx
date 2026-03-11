import EducationCard from './EducationCard'
import { educations } from '../../../lib/education-list'

const EducationList = () => {
  return (
    <ul className="grid gap-20 lg:grid-cols-2">
      {educations.map((education) => (
        <EducationCard key={education.id} {...education} />
      ))}
    </ul>
  )
}

export default EducationList
