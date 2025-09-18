import SectionTitle from '@/app/_components/section-title/SectionTitle'
import { homeProjectsData } from '@/app/(home)/home-projects/home-projects.data'
import { HomeProjectItem } from '@/app/(home)/home-projects/home-project-item'
import { HomeProjectItemDirectionsEnum } from '@/app/(home)/home-projects/home-project-item-directions.enum'
import Index from '@/app/_components/LinkWithArrowIcon'
import ProjectsList from '@/app/projects/_components/projects-list'

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto w-full max-w-7xl">
      <SectionTitle title="From Idea to Impact" description="Built with" specialWord="Purpose" />
      <ProjectsList />
      <Index title="See more projects" href="/projects" />
    </section>
  )
}
