import EducationCard from './EducationCard'
import { educations } from './lib'

const EducationList = () => {
  return (
    <ul className="grid gap-20 lg:grid-cols-2">
      {educations.map((education, index) => (
        <EducationCard key={index} {...education} />
      ))}
    </ul>
  )
}

export default EducationList
