import SectionTitle from '@/components/SectionTitle'
import ExperienceList from './ExperienceList'

const Experience = () => {
  return (
    <section id="experiences" className="relative mx-auto mt-32 w-full max-w-6xl px-8 md:mt-36">
      <SectionTitle
        title="Professional Journey"
        description="Projects, Progress, and Lessons"
        descriptionKeyword="Learned"
      />
      <ExperienceList />
    </section>
  )
}

export default Experience
