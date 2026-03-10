import SectionTitle from '@/components/SectionTitle'
import type { Metadata } from 'next'
import ProjectsList from './components/ProjectsList'

export const metadata: Metadata = {
  title: 'Projects',
}

const Projects = () => {
  return (
    <section id="projects" className="relative mx-auto mt-32 w-full max-w-7xl px-8 md:mt-36">
      <SectionTitle title="From Idea to Impact" description="Built with" descriptionKeyword="Purpose" />
      <ProjectsList />
    </section>
  )
}

export default Projects
