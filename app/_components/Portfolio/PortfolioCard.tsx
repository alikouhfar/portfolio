import useCardPosition from "@/app/_hooks/useCardPosition";
import { IProject } from "@/app/_models/project.model";
import dotsSmall from "@/public/dots-small.png";
import test from "@/public/test.png";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useRef, useState } from "react";
import LimitedTextCharacters from "../LimitedTextCharacters";

interface IGridPortfolioCardProps {
  projects: IProject[];
  project: IProject;
  columnCount: number;
}

interface IListPortfolioCardProps {
  projects: IProject[];
  project: IProject;
  columnCount: number;
  outputCardHeight: (height: any) => void;
}

export const GridPortfolioCard: FC<IGridPortfolioCardProps> = ({
  projects,
  project,
  columnCount,
}) => {
  const filteredProjects = projects.filter((project) => project.isVisible);
  const { generateLeftPosition, generateTopPosition, generateCardWidth } =
    useCardPosition(filteredProjects, project, columnCount, 0, "grid");

  return (
    <div
      className="absolute top-0 h-fit p-5 transition-all duration-700"
      style={{
        left: generateLeftPosition(),
        top: generateTopPosition(),
        width: generateCardWidth(),
      }}
    >
      <div
        className={`${project.isVisible ? "visible scale-100 opacity-100 blur-none" : "invisible scale-0 opacity-0 blur-sm"} h-[650px] overflow-hidden rounded-3xl bg-white p-7 text-zinc-800 shadow transition duration-700 sm:h-[600px] dark:bg-card-dark dark:text-zinc-100`}
      >
        <Link
          href={`projects/${project.id}`}
          className="group flex h-full flex-col hover:cursor-pointer"
        >
          <div className="relative block h-32 overflow-hidden rounded-2xl md:h-52">
            <Image
              fill
              src={test}
              alt="Project Image"
              className="object-cover transition duration-300 group-hover:scale-110"
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
              <p className="mb-10 min-h-52 leading-7 opacity-80 sm:mb-0 md:min-h-44">
                {project.description}
              </p>
              <button className="relative flex gap-3 align-top text-base font-bold leading-6 text-zinc-800 transition-all duration-300 group-hover:gap-2 group-hover:text-primary-green dark:text-zinc-100">
                <span>See Project</span>
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
};

export const ListPortfolioCard: FC<IListPortfolioCardProps> = ({
  projects,
  project,
  columnCount,
  outputCardHeight,
}) => {
  const cardOrder = project.id - 1;
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardHeight, setCardHeight] = useState<any>(0);
  const [cardTop, setCardTop] = useState<string>(`${cardOrder * 450}px`);
  const filteredProjects = projects.filter((project) => project.isVisible);
  const { generateTopPosition } = useCardPosition(
    filteredProjects,
    project,
    columnCount,
    cardHeight,
    "list",
  );

  useEffect(() => {
    setCardHeight(cardRef.current?.clientHeight);
    outputCardHeight(cardRef.current?.clientHeight);
    setCardTop(generateTopPosition());
  }, [project, generateTopPosition, outputCardHeight]);

  return (
    <div
      ref={cardRef}
      className="absolute left-0 h-fit w-full p-2 transition-all duration-700 sm:p-5 md:p-0"
      style={{
        top: cardTop,
      }}
    >
      <div
        className={`${project.isVisible ? "visible scale-100 opacity-100 blur-none" : "invisible scale-0 opacity-0 blur-lg"} h-[600px] overflow-hidden rounded-3xl shadow transition duration-700 sm:h-[550px] md:h-[450px] md:rounded-none md:shadow-none`}
      >
        <Link
          href={`projects/${project.id}`}
          className="group flex h-full flex-col hover:cursor-pointer md:flex-row"
        >
          <div className="relative block h-52 overflow-hidden transition-all duration-700 group-hover:scale-95 md:h-full md:w-2/5 md:min-w-72 lg:w-1/2">
            <Image
              fill
              src={test}
              alt="Project Image"
              className="object-cover transition-all duration-700 group-hover:scale-125"
            />
          </div>
          <div className="flex flex-1 flex-col justify-between bg-white p-7 pt-8 text-zinc-800 transition-all duration-700 md:bg-transparent md:py-16 md:pl-14 lg:p-20 lg:pl-28 dark:bg-card-dark dark:text-zinc-100 dark:md:bg-transparent">
            <div>
              <span className="mb-2 block text-sm font-semibold uppercase text-primary-green">
                {project.category}
              </span>
              <h5 className="mb-4 text-2xl font-bold leading-7 md:text-6xl">
                <LimitedTextCharacters text={project.title} limit={21} />
              </h5>
            </div>
            <div className="flex flex-col gap-5">
              <p className="min-h-36 leading-7 opacity-80 md:min-h-0">
                {project.description}
              </p>
              <button className="relative flex gap-3 align-top text-base font-bold leading-6 text-zinc-800 transition-all duration-300 group-hover:gap-2 group-hover:text-primary-green dark:text-zinc-100">
                <span>See Project</span>
                <div>
                  <IconArrowNarrowRight
                    size={24}
                    className="text-primary-green"
                  />
                </div>
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
