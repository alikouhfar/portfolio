"use client";

import { ListPortfolio } from "@/app/_components/Portfolio/Portfolio";
import { useTheme } from "@/app/_contexts/ThemeContext";
import { caveat } from "@/app/_ui/fonts";
import { FC } from "react";

const Projects: FC = () => {
  const { theme } = useTheme();
  return (
    <div className={`${theme === "dark" ? "dark" : ""} relative`}>
      <div className="relative bg-primary-light pt-48 text-zinc-800 transition-all duration-700 dark:bg-primary-dark dark:text-zinc-100">
        <div className="relative mx-auto flex max-w-[1400px] flex-col items-center gap-20 p-3 pb-24 transition-all duration-1000 lg:p-0 lg:pb-48">
          <div className="flex transform flex-col items-center">
            <h2 className="text-4xl font-bold uppercase tracking-widest text-zinc-800 transition duration-700 md:text-5xl dark:text-zinc-100">
              Portfolio
            </h2>
            <div className="text-primary-violet text-sm font-bold uppercase">
              <span>our</span>
              <b
                className={`${caveat.className} ml-1 text-3xl capitalize text-zinc-800 antialiased transition duration-700 dark:text-zinc-100`}
              >
                Projects
              </b>
            </div>
          </div>
          <div className="w-full">
            <ListPortfolio />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
