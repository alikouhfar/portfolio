import LinkWithArrowIcon from '@/components/LinkWithArrowIcon'
import SectionTitle from '@/components/SectionTitle'
import ProjectsList from './components/ProjectsList'
import type { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Projects',
}

const Projects = () => {
  return (
    <section id="projects" className="relative mx-auto mt-32 w-full max-w-7xl px-8 md:mt-36">
      <SectionTitle title="From Idea to Impact" description="Built with" descriptionKeyword="Purpose" />
      <Suspense fallback={<p>Loading...</p>}>
        <ProjectsList />
      </Suspense>
      <LinkWithArrowIcon title="See more projects" href="/projects" />
    </section>
  )
}

export default Projects
