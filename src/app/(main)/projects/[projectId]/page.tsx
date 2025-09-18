import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { projects } from '@/lib/projects'
import { SlashIcon } from 'lucide-react'
import Image from 'next/image'
import ProjectDetails from './components/ProjectDetails'
import { getProject } from './utils'

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ projectId: string }>
}): Promise<{ title: string }> => {
  const { projectId } = await params
  const { shortTitle } = getProject(projectId)
  return { title: `Project ${shortTitle}` }
}

export const generateStaticParams = () => {
  return projects.map((project) => ({ projectId: String(project.id) }))
}

const ProjectPage = async ({ params }: { params: Promise<{ projectId: string }> }) => {
  const { projectId } = await params
  const project = getProject(projectId)

  return (
    <>
      <header
        className="relative h-96 w-full overflow-hidden opacity-90 lg:h-80"
        style={{ maskImage: 'linear-gradient(rgba(0, 0, 0, 0.5) 10%, rgba(0, 0, 0, 0) 100%)' }}
      >
        <Image
          src={project.imageUrl}
          alt={`${project.title} hero image`}
          className="mx-auto scale-125 object-cover object-center mix-blend-overlay shadow-md grayscale-100"
          priority
          fill
          style={{
            maskImage: 'radial-gradient(circle,#0000 40%,#000 0)',
            maskPosition: '50%',
            maskSize: '4px 4px',
          }}
        />
      </header>

      <main className="max-w-7xl px-8">
        <nav aria-label="Breadcrumb" className="mb-10">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon className="-rotate-12" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon className="-rotate-12" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>{project.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </nav>

        <ProjectDetails {...project} />
      </main>
    </>
  )
}

export default ProjectPage
