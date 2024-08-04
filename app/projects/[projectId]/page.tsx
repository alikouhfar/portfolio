import { projects } from "@/app/_lib/projects";
import ProjectDetails from "./_components/ProjectDetails";

interface IProps {
  params: { projectId: string };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: String(project.id),
  }));
}

export async function generateMetadata({ params }: IProps) {
  const projectId = params.projectId;
  const project = projects.find((item) => item.id === +projectId);

  return {
    title: project?.title,
  };
}

export default function Page() {
  return <ProjectDetails />;
}
