import useCardPosition from "@/app/_hooks/useCardPosition";
import { IProject } from "@/app/_models/project.model";
import dotsSmall from "@/public/dots-small.png";
import test from "@/public/test.png";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  projects: IProject[];
  project: IProject;
  columnCount: number;
}

export default function PortfolioCard({
  projects,
  project,
  columnCount,
}: IProps) {
  const filteredProjects = projects.filter((project) => project.isVisible);
  const { generateLeftPosition, generateTopPosition, generateCardWidth } =
    useCardPosition(filteredProjects, project, columnCount);

  return (
    <div
      className="absolute top-0 h-fit p-5"
      style={{
        left: generateLeftPosition(),
        top: generateTopPosition(),
        width: generateCardWidth(),
        transition: "all ease 700ms",
      }}
    >
      <div
        className={`${project.isVisible ? "visible scale-100 opacity-100 blur-none" : "invisible scale-0 opacity-0 blur-sm"} h-[550px] overflow-hidden rounded-3xl bg-white p-7 text-zinc-800 shadow transition duration-700 xl:h-[600px] dark:bg-card-dark dark:text-zinc-100`}
      >
        <Link
          href=""
          className="group/project flex h-full flex-col hover:cursor-pointer"
        >
          <div className="relative block h-52 overflow-hidden rounded-2xl">
            <Image
              fill
              src={test}
              alt="Project Image"
              className="object-cover transition duration-300 group-hover/project:scale-110"
            />
          </div>
          <div className="flex flex-1 flex-col justify-between pt-8">
            <div>
              <span className="mb-2 block text-sm font-semibold uppercase text-primary-green">
                {project.category}
              </span>
              <h5 className="mb-4 text-2xl font-bold leading-7">
                {project.title}
              </h5>
            </div>
            <div>
              <p className="min-h-44 leading-7 opacity-80">
                {project.description}
              </p>
              <button className="relative flex gap-3 align-top text-base font-bold leading-6 text-zinc-800 transition-all duration-300 group-hover/project:gap-2 group-hover/project:text-primary-green dark:text-zinc-100">
                <span>See Pricing</span>
                <div>
                  <IconArrowNarrowRight
                    size={24}
                    className="text-primary-green"
                  />
                </div>
              </button>
            </div>
          </div>
          <div className="absolute -bottom-5 -right-5 h-32 w-32">
            <Image
              fill
              src={dotsSmall}
              alt="Dots Element"
              className={`transition duration-700 dark:opacity-60 dark:invert`}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
