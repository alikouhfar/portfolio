import SectionTitle from '@/components/SectionTitle'
import TechnologyBadge from '@/components/TechnologyBadge'
import { technologies } from '@/lib/technologies'

const Skills = () => {
  return (
    <section id="skills" className="relative mx-auto my-20 px-8 w-full max-w-7xl">
      <SectionTitle title="What I Bring" description="The Magic" descriptionKeyword="Mix" />
      <ul className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2">
        {technologies.map((technology) => (
          <TechnologyBadge key={technology.title} {...technology} />
        ))}
      </ul>
    </section>
  )
}

export default Skills
