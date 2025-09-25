import SectionTitle from '@/components/SectionTitle'
import EducationList from './EducationList'

const Education = () => {
  return (
    <section id="education" className="relative mx-auto mt-32 w-full max-w-6xl px-8 md:mt-36">
      <SectionTitle
        title="Academic Background"
        description="Building Mindsets, Not Just"
        descriptionKeyword="Skills"
      />
      <EducationList />
    </section>
  )
}

export default Education
