import { projects } from "@/app/_lib/projects";
import WorkDetails from "@/app/_components/WorkDetails";

interface IProps {
  params: { workId: string };
}

export async function generateMetadata({ params }: IProps) {
  const projectId = params.workId;
  const project = projects.find((work) => work.id === +projectId);

  return {
    title: project?.title,
  };
}

export default function Page() {
  return <WorkDetails />;
}
