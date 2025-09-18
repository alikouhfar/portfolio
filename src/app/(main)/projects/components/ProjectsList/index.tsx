import { projects } from '@/lib/projects'
import ProjectsListItem from '@/app/(main)/projects/components/projects-list-item'

export default function ProjectsList() {
  return (
    <div className="grid grid-cols-1 flex-col gap-10 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectsListItem key={index} projectDetails={project} />
      ))}
    </div>
  )
}
