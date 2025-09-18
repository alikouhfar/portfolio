import { projects } from '@/lib/projects'
import { Project } from '@/types/project'

const getProject = (id: string):Project => {
  return projects.find((project) => project.id === id);
}

export const generateMetadata=({ params }) =>{
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
}

export const generateStaticParams =()=> {
  const cabins = await getCabins();

  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

  return ids;
}

const ProjectPage = async ({params}) => {
  const { id } = await params
  const project = getProject(id);

  return <div><h3>{project.title}</h3></div>
}

export default ProjectPage