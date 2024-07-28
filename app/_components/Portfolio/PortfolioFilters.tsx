"use client";

import useSearchParam from "@/app/_hooks/useSearchParam";
import { projects } from "@/app/_lib/projects";

interface IProps {
  param: string;
  content: string;
}

export default function PortfolioFilters() {
  const tags = new Set(projects.map((project) => project.tag));
  const params = Array.from(tags);
  const categories = new Set(projects.map((project) => project.category));
  const filters = Array.from(categories);

  return (
    <div className="mb-16 flex flex-col justify-center gap-8 sm:flex-row sm:gap-10">
      <FilterButton content="All" param="all" />
      {filters.map((filter, index) => (
        <FilterButton key={index} content={filter} param={params[index]} />
      ))}
    </div>
  );
}

function FilterButton({ param, content }: IProps) {
  const { activeParam, setParam } = useSearchParam("projects", "all");

  return (
    <button
      onClick={() => setParam(param)}
      className={`${param === activeParam ? "text-primary-green after:w-10" : ""} relative font-semibold after:absolute after:bottom-1/2 after:left-0 after:h-0.5 after:w-0 after:max-w-[60%] after:-translate-y-1/2 after:bg-primary-green after:transition-all after:duration-300 after:content-[''] hover:after:w-10 sm:after:-bottom-3`}
    >
      {content}
    </button>
  );
}
