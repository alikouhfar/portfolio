"use client";

import { LinkButtonPrimary } from "@/app/_components/Button";
import { useTheme } from "@/app/_contexts/ThemeContext";
import { projects } from "@/app/_lib/projects";
import { caveat } from "@/app/_ui/fonts";
import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { FC } from "react";
import TechnologyCard from "./TechnologyCard";

const ProjectDetails: FC = () => {
  const params = useParams();
  const { theme } = useTheme();
  const project = projects.find((project) => project.id === +params.projectId);
  const nextProject = projects.at(+params.projectId);
  const isLastProject = +params.projectId === projects.length;

  if (!project) notFound();

  return (
    <div className={`${theme === "dark" ? "dark" : ""} relative`}>
      <div className="relative bg-primary-light pb-10 pt-48 text-zinc-800 transition-all duration-700 dark:bg-primary-dark dark:text-zinc-100">
        <div className="relative mx-auto flex max-w-[1400px] flex-col gap-20 p-3">
          <div className="px-3 lg:px-5">
            <div className="mb-8 flex transform flex-col lg:mb-10">
              <h2 className="mb-2 text-4xl font-extrabold uppercase text-zinc-800 transition duration-700 md:text-5xl dark:text-zinc-100">
                {project?.title}
              </h2>
              <div className="text-base font-bold uppercase text-primary-green">
                {project?.client}
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-8 gap-y-4 md:gap-12 md:gap-y-6">
                <div className="flex flex-col">
                  <span
                    className={`${caveat.className} text-2xl font-bold antialiased`}
                  >
                    Year:
                  </span>
                  <span>{project?.year}</span>
                </div>
                <div className="flex flex-col">
                  <span
                    className={`${caveat.className} text-2xl font-bold antialiased`}
                  >
                    Technologies:
                  </span>
                  <span>
                    {project?.technologies.map((item) => item.title).join(", ")}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span
                    className={`${caveat.className} text-2xl font-bold antialiased`}
                  >
                    Categories:
                  </span>
                  <span>{project?.category}</span>
                </div>
              </div>
              <div className="relative mt-8 text-center md:mt-0">
                <LinkButtonPrimary
                  text="Live Preview"
                  link={project?.url}
                  takeAllWidth={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-20">
          <div className="relative flex h-80 items-center overflow-hidden transition-all duration-700 md:h-[450px] lg:h-[700px]">
            <Image
              src={project?.images.hero!}
              alt="Project Hero"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="relative mx-auto flex max-w-[1400px] flex-col gap-20 p-3 pt-20">
          <div className="flex flex-col gap-8 px-3 lg:px-5">
            <h4 className="text-2xl font-bold md:text-4xl">Description</h4>
            <div className="flex flex-col gap-8 md:flex-row md:gap-10">
              <p className="text-justify font-normal leading-7">
                {project?.descriptionParagraphOne}
              </p>
              <p className="text-justify font-normal leading-7">
                {project?.descriptionParagraphTwo}
              </p>
            </div>
          </div>
          <div className="grid grid-rows-3 gap-10 px-5 sm:grid-cols-2 sm:grid-rows-2">
            <div className="group relative min-h-80 cursor-pointer overflow-hidden rounded-2xl shadow transition-all duration-500 hover:scale-95 sm:row-span-2 sm:min-h-[600px]">
              <Image
                src={project?.images.gallery_one!}
                alt="Project Gallery Image One"
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110 md:object-right"
              />
            </div>
            <div className="group relative min-h-80 cursor-pointer overflow-hidden rounded-2xl shadow transition-all duration-500 hover:scale-95">
              <Image
                src={project?.images.gallery_two!}
                alt="Project Gallery Image Two"
                fill
                className="object-cover object-top transition-all duration-500 group-hover:scale-110"
              />
            </div>
            <div className="group relative min-h-80 cursor-pointer overflow-hidden rounded-2xl shadow transition-all duration-500 hover:scale-95">
              <Image
                src={project?.images.gallery_three!}
                alt="Project Gallery Image Three"
                fill
                className="object-cover object-top transition-all duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
        <div className="relative mx-auto flex max-w-[1400px] flex-col gap-20 p-3 pt-20">
          <div className="flex flex-col gap-8 px-3 lg:px-5">
            <h4 className="text-2xl font-bold md:text-4xl">Technologies</h4>
            <div className="flex flex-col gap-8 md:gap-16">
              <p className="text-justify font-normal leading-7">
                {project?.technologiesDescription}
              </p>
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
                {project?.technologies.map((technology) => (
                  <TechnologyCard key={technology.id} technology={technology} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {project?.video && (
          <div className="pt-20">
            <div className="h-80 transition-all duration-700 md:h-[450px] lg:h-[700px]">
              <video
                controls
                preload="none"
                poster="/video-poster.jpg"
                className="h-full w-full object-cover"
              >
                <source src="/test-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
        {!isLastProject && (
          <div className="relative mx-auto flex max-w-[1400px] flex-col gap-20 p-3 pt-20">
            <div className="flex flex-col gap-8 px-3 lg:px-5">
              <Link
                href={`${nextProject?.id}`}
                className="group flex flex-col gap-4"
              >
                <div className="flex items-center gap-1">
                  <p className="font-bold uppercase">Next Project</p>
                  <IconChevronRight />
                </div>
                <p className="animated-text relative overflow-hidden text-5xl font-bold uppercase transition-all duration-700">
                  {nextProject?.title}
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
