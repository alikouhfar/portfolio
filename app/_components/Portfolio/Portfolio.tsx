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
    <div className="relative flex w-full flex-wrap justify-center p-3 pb-14">
      <div className="w-full max-w-full xl:max-w-container">
        <PortfolioFilters />
        <div className="relative" style={{ height: generateContainerHeight() }}>
          {filteredProjects.map((project, index) => (
            <GridPortfolioCard
              key={index}
              projects={filteredProjects}
              project={project}
              columnCount={columnCount}
            />
          ))}
        </div>
        {projects.length > 1 && (
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
  let filteredProjects: IProject[] = [];
  let projectsCount: number = 0;

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
    const padding = cardHeight === 450 ? 80 : 20;
    return `${projectsCount * cardHeight + projectsCount * padding}px`;
  }

  useEffect(() => {
    setContainerHeight(generateContainerHeight());
  }, [filteredProjects]);

  getFilteredProjects();
  getProjectsCount();

  return (
    <div className="relative flex w-full flex-wrap justify-center p-3 pb-14 lg:p-0">
      <div className="w-full max-w-full xl:max-w-screen-xl">
        <PortfolioFilters />
        <div
          className="relative min-h-screen"
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
        <div className="relative mt-16 text-center md:mt-4">
          <LinkButtonPrimary text="Load More" link="projects" />
        </div>
      </div>
      <VerticalLine
        linePosition="right-0"
        imagePosition="-left-5 md:-left-12"
      />
    </div>
  );
};
