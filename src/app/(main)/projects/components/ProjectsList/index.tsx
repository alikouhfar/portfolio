import { projects } from '@/lib/projects'
import ProjectsListItem from './ProjectsListItem'

const ProjectsList = () => {
  return (
    <div className="grid grid-cols-1 flex-col gap-10 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectsListItem key={index} project={project} />
      ))}
    </div>
  )
}

export default ProjectsList
