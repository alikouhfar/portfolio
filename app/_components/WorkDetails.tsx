"use client";

import { useTheme } from "@/app/_contexts/ThemeContext";
import { projects } from "@/app/_lib/projects";
import { caveat } from "@/app/_ui/fonts";
import { useParams } from "next/navigation";
import { FC } from "react";
import test from "@/public/test.png";
import Image from "next/image";
import Link from "next/link";
import { IconChevronRight } from "@tabler/icons-react";
import { LinkButtonPrimary } from "./Button";

const WorkDetails: FC = () => {
  const params = useParams();
  const { theme } = useTheme();
  const project = projects.find((project) => project.id === +params.workId);

  return (
    <div className={`${theme === "dark" ? "dark" : ""} relative`}>
      <div className="relative bg-primary-light pt-48 text-zinc-800 transition-all duration-700 dark:bg-primary-dark dark:text-zinc-100">
        <div className="relative mx-auto flex max-w-[1400px] flex-col gap-20 p-3">
          <div className="px-3 lg:px-5">
            <div className="mb-8 flex transform flex-col lg:mb-10">
              <h2 className="mb-2 text-4xl font-extrabold uppercase text-zinc-800 transition duration-700 md:text-5xl dark:text-zinc-100">
                {project?.title}
              </h2>
              <div className="text-sm font-bold uppercase text-primary-green">
                {project?.category}
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
                  <span>{project?.technology.join(", ")}</span>
                </div>
                <div className="flex flex-col">
                  <span
                    className={`${caveat.className} text-2xl font-bold antialiased`}
                  >
                    Something Else:
                  </span>
                  <span>TBA</span>
                </div>
              </div>
              <div className="relative mt-8 text-center md:mt-0">
                <LinkButtonPrimary
                  text="Live Preview"
                  link="works"
                  takeAllWidth={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-20">
          <div className="h-80 transition-all duration-700 md:h-[450px] lg:h-[700px]">
            <Image
              src={test}
              placeholder="blur"
              alt="Project Hero"
              className="h-full object-cover"
            />
          </div>
        </div>
        <div className="relative mx-auto flex max-w-[1400px] flex-col gap-20 p-3 pt-20">
          <div className="flex flex-col gap-8 px-3 lg:px-5">
            <h4 className="text-2xl font-bold md:text-4xl">Description</h4>
            <div className="flex flex-col gap-8 md:flex-row md:gap-10">
              <p className="text-justify font-normal leading-7">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur
                feugiat gravida commodo auctor nam leo eget venenatis torquent.
                Massa urna montes neque ipsum fames at ipsum eros vulputate?
              </p>
              <p className="text-justify font-normal leading-7">
                Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur
                feugiat gravida commodo auctor nam leo eget venenatis torquent.
                Massa urna montes neque ipsum fames at ipsum eros vulputate?
              </p>
            </div>
          </div>
          <div className="grid grid-rows-4 gap-10 px-5 sm:grid-cols-2 sm:grid-rows-2">
            <div className="group row-span-2 cursor-pointer overflow-hidden transition-all duration-500 hover:scale-95">
              <Image
                src={test}
                placeholder="blur"
                alt="Test"
                className="h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
            </div>
            <div className="group cursor-pointer overflow-hidden transition-all duration-500 hover:scale-95">
              <Image
                src={test}
                placeholder="blur"
                alt="Test"
                className="h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
            </div>
            <div className="group cursor-pointer overflow-hidden transition-all duration-500 hover:scale-95">
              <Image
                src={test}
                placeholder="blur"
                alt="Test"
                className="h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
        <div className="relative mx-auto flex max-w-[1400px] flex-col gap-20 p-3 pt-20">
          <div className="flex flex-col gap-8 px-3 lg:px-5">
            <h4 className="text-2xl font-bold md:text-4xl">Technologies</h4>
            <div className="flex flex-col gap-8 md:flex-row md:gap-10">
              <p className="text-justify font-normal leading-7">
                Create Technology Card Maybe!
              </p>
            </div>
          </div>
        </div>
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
        <div className="relative mx-auto flex max-w-[1400px] flex-col gap-20 p-3 pt-20">
          <div className="flex flex-col gap-8 px-3 lg:px-5">
            <Link href="" className="group flex flex-col gap-4">
              <div className="flex items-center gap-1">
                <p className="font-bold uppercase">Next Project</p>
                <IconChevronRight />
              </div>
              <p className="relative text-5xl font-bold uppercase transition-all duration-700 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-primary-green after:content-[''] group-hover:text-primary-green">
                Title
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetails;
