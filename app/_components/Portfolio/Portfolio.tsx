import { IProject } from "@/app/_models/project.model";
import { projects } from "@/app/_lib/projects";
import { jost } from "@/app/_ui/fonts";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import ButtonPrimary from "../ButtonPrimary";
import VerticalLine from "../VerticalLine";
import PortfolioCard from "./PortfolioCard";
import PortfolioFilters from "./PortfolioFilters";

export default function Portfolio() {
  const searchParams = useSearchParams();
  const activeFilter = searchParams?.get("projects") ?? "all";
  const [viewPortWidth, setViewPortWidth] = useState<number>(0);
  const [columnCount, setColumnCount] = useState<number>(0);
  let filteredProjects: IProject[] = [];
  let projectsCount: number = 0;

  const getColumnCount = useCallback(() => {
    if (viewPortWidth > 1280) {
      return 3;
    } else if (viewPortWidth > 768) {
      return 2;
    } else {
      return 1;
    }
  }, [viewPortWidth]);

  useEffect(() => {
    setViewPortWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    setColumnCount(getColumnCount());
  }, [columnCount, getColumnCount]);

  function getFilteredProjects() {
    if (activeFilter === "all") {
      filteredProjects = projects.map((project) => {
        return { ...project, isVisible: true };
      });
    } else {
      filteredProjects = projects.map((project) => {
        if (project.tag === activeFilter) {
          return { ...project, isVisible: true };
        } else {
          return { ...project, isVisible: false };
        }
      });
    }
  }

  function getProjectsCount() {
    projectsCount = filteredProjects.filter(
      (project) => project.isVisible,
    ).length;
  }

  function generateContainerHeight() {
    const columnCount = getColumnCount();
    const rowCount = projectsCount / columnCount;

    if (columnCount === 3) {
      if (projectsCount <= columnCount) {
        return "640px";
      } else {
        return `${rowCount * 600 + rowCount * 40}px`;
      }
    } else {
      if (projectsCount <= columnCount) {
        return "590px";
      } else {
        return `${rowCount * 550 + rowCount * 40}px`;
      }
    }
  }

  getFilteredProjects();
  getProjectsCount();

  return (
    <div
      className={`${jost.className} relative flex w-full flex-wrap justify-center p-3 pb-14 antialiased`}
    >
      <div className="w-full max-w-full xl:max-w-container">
        <PortfolioFilters />
        <div className="relative" style={{ height: generateContainerHeight() }}>
          {filteredProjects.map((project, index) => (
            <PortfolioCard
              key={index}
              projects={filteredProjects}
              project={project}
              columnCount={columnCount}
            />
          ))}
        </div>
        <div className="relative mt-16 text-center">
          <ButtonPrimary text="View More" link="" />
        </div>
      </div>
      <VerticalLine
        linePosition="right-0"
        imagePosition="-left-5 md:-left-12"
      />
    </div>
  );
}
