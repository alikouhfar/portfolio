import { ProjectItemDirections } from './ProjectItem/enums'
import ProjectItem from './ProjectItem'
import { projects } from '@/lib/projects'
import SectionTitle from '@/components/SectionTitle'
import LinkWithArrowIcon from '@/components/LinkWithArrowIcon'

const Projects = () => {
  return (
    <section id="projects" className="relative mx-auto my-20 w-full max-w-7xl px-8">
      <SectionTitle title="From Idea to Impact" description="Built with" descriptionKeyword="Purpose" />
      <div className="grid grid-cols-1 flex-col gap-20 md:grid-cols-2 md:gap-x-10 md:gap-y-5 lg:flex lg:gap-20">
        {projects.map((project, index) => {
          const isOdd = index % 2 === 0

          return (
            <ProjectItem
              key={index}
              direction={isOdd ? ProjectItemDirections.Right : ProjectItemDirections.Left}
              projectDetails={project}
            />
          )
        })}
      </div>
      <LinkWithArrowIcon title="See more projects" href="/projects" />
    </section>
  )
}

export default Projects
