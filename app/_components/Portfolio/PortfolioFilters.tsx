"use client";

import useSearchParam from "@/app/_hooks/useSearchParam";
import { projects } from "@/app/_lib/projects";
import { FC } from "react";

interface IFilterButtonProps {
  param: string;
  content: string;
}

const categories = new Set(projects.map((project) => project.category));
const filters = Array.from(categories);

const PortfolioFilters: FC = () => {
  const tags = new Set(projects.map((project) => project.tag));
  const params = Array.from(tags);

  return (
    <div className="mb-16 flex flex-col justify-center gap-8 sm:flex-row sm:gap-10">
      {filters.length > 1 && <FilterButton content="All" param="all" />}
      {filters.map((filter, index) => (
        <FilterButton key={index} param={params[index]} content={filter} />
      ))}
    </div>
  );
};

function FilterButton({ param, content }: IFilterButtonProps) {
  const { activeParam, setParam } = useSearchParam("works", "all");

  return (
    <button
      onClick={() => setParam(param)}
      className={`${param === activeParam || filters?.length === 1 ? "text-primary-violet after:w-10" : ""} after:bg-primary-violet relative font-semibold text-zinc-800 transition-all duration-700 after:absolute after:bottom-1/2 after:left-0 after:h-0.5 after:w-0 after:max-w-[60%] after:-translate-y-1/2 after:transition-all after:duration-300 after:content-[''] hover:after:w-10 sm:after:-bottom-3 dark:text-zinc-100`}
    >
      {content}
    </button>
  );
}

export default PortfolioFilters;
