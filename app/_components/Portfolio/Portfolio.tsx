"use client";

import { projects } from "@/app/_lib/projects";
import { IProject } from "@/app/_models/project.model";
import { useSearchParams } from "next/navigation";
import { FC, useCallback, useEffect, useState } from "react";
import VerticalLine from "../VerticalLine";
import { GridPortfolioCard, ListPortfolioCard } from "./PortfolioCard";
import PortfolioFilters from "./PortfolioFilters";
import { LinkButtonPrimary } from "../Button";

export const GridPortfolio: FC = () => {
  const searchParams = useSearchParams();
  const activeFilter = searchParams?.get("works") ?? "all";
  const [columnCount, setColumnCount] = useState<number>(0);
  const [projectsCount, setProjectsCount] = useState<number>(0);
  const [viewPortWidth, setViewPortWidth] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<string>();
  const [filteredProjects, setFilteredProjects] = useState<IProject[]>([]);

  const getColumnCount = useCallback(() => {
    if (viewPortWidth > 1280) {
      return 3;
    } else if (viewPortWidth > 768) {
      return 2;
    } else {
      return 1;
    }
  }, [viewPortWidth]);

  const generateContainerHeight = useCallback(() => {
    const columnCount = getColumnCount();
    const rowCount = Math.ceil(projectsCount / columnCount);

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
  }, [getColumnCount, projectsCount]);

  const getFilteredProjects = useCallback(() => {
    if (activeFilter === "all") {
      return projects.map((project) => {
        return { ...project, isVisible: true };
      });
    } else {
      return projects.map((project) => {
        if (project.tag === activeFilter) {
          return { ...project, isVisible: true };
        } else {
          return { ...project, isVisible: false };
        }
      });
    }
  }, [activeFilter]);

  const getProjectsCount = useCallback(() => {
    return filteredProjects.filter((project) => project.isVisible).length;
  }, [filteredProjects]);

  useEffect(() => {
    setViewPortWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    setProjectsCount(getProjectsCount());
  }, [getProjectsCount]);

  useEffect(() => {
    setFilteredProjects(getFilteredProjects());
  }, [getFilteredProjects]);

  useEffect(() => {
    setColumnCount(getColumnCount());
  }, [getColumnCount]);

  useEffect(() => {
    setContainerHeight(generateContainerHeight());
  }, [generateContainerHeight]);

  return (
    <div className="relative flex w-full flex-wrap justify-center p-3 pb-14">
      <div className="w-full max-w-full xl:max-w-container">
        <PortfolioFilters />
        <div className="relative" style={{ height: containerHeight }}>
          {filteredProjects.map((project, index) => (
            <GridPortfolioCard
              key={index}
              projects={filteredProjects}
              project={project}
              columnCount={columnCount}
            />
          ))}
        </div>
        {projects.length >= 10 && (
          <div className="relative mt-16 text-center">
            <LinkButtonPrimary text="View More" link="projects" />
          </div>
        )}
      </div>
      <VerticalLine
        linePosition="right-0"
        imagePosition="-left-5 md:-left-12"
      />
    </div>
  );
};

export const ListPortfolio: FC = () => {
  const searchParams = useSearchParams();
  const activeFilter = searchParams?.get("works") ?? "all";
  const [cardHeight, setCardHeight] = useState<any>(0);
  const [containerHeight, setContainerHeight] = useState<string>();
  const [filteredProjects, setFilteredProjects] = useState<IProject[]>([]);
  const [projectsCount, setProjectsCount] = useState<number>(0);

  const getFilteredProjects = useCallback(() => {
    if (activeFilter === "all") {
      return projects.map((project) => {
        return { ...project, isVisible: true };
      });
    } else {
      return projects.map((project) => {
        if (project.tag === activeFilter) {
          return { ...project, isVisible: true };
        } else {
          return { ...project, isVisible: false };
        }
      });
    }
  }, [activeFilter]);

  const generateContainerHeight = useCallback(() => {
    const padding = cardHeight === 450 ? 80 : 20;
    return `${projectsCount * cardHeight + projectsCount * padding}px`;
  }, [cardHeight, projectsCount]);

  const getProjectsCount = useCallback(() => {
    return filteredProjects.filter((project) => project.isVisible).length;
  }, [filteredProjects]);

  useEffect(() => {
    setProjectsCount(getProjectsCount());
  }, [getProjectsCount]);

  useEffect(() => {
    setFilteredProjects(getFilteredProjects());
  }, [getFilteredProjects]);

  useEffect(() => {
    setContainerHeight(generateContainerHeight());
  }, [generateContainerHeight]);

  return (
    <div className="relative flex w-full flex-wrap justify-center p-3 pb-14 lg:p-0">
      <div className="w-full max-w-full xl:max-w-screen-xl">
        <PortfolioFilters />
        <div
          className={`${projects.length === 1 ? "min-h-[650px] md:min-h-[550px]" : "min-h-screen"} relative`}
          style={{ height: containerHeight }}
        >
          {filteredProjects.map((project, index) => (
            <ListPortfolioCard
              key={index}
              projects={filteredProjects}
              project={project}
              columnCount={1}
              outputCardHeight={setCardHeight}
            />
          ))}
        </div>
        {projects.length >= 10 && (
          <div className="relative mt-16 text-center md:mt-4">
            <LinkButtonPrimary text="Load More" link="projects" />
          </div>
        )}
      </div>
      <VerticalLine
        linePosition="right-0"
        imagePosition="-left-5 md:-left-12"
      />
    </div>
  );
};
