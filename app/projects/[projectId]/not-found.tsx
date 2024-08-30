"use client";

import { LinkButtonPrimary } from "@/app/_components/Button";
import VerticalLine from "@/app/_components/VerticalLine";
import { useTheme } from "@/app/_contexts/ThemeContext";
import { caveat } from "@/app/_ui/fonts";
import dotsSmall from "@/public/dots-small.png";
import dots from "@/public/dots.png";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  const { theme } = useTheme();

  return (
    <div
      className={`${theme === "dark" ? "dark" : ""} bg-primary-light dark:bg-primary-dark`}
    >
      <div className="relative mx-auto flex min-h-screen max-w-[1300px] flex-col items-center justify-center p-3 transition-all duration-1000">
        <div className="flex w-full flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-xl font-bold text-zinc-800 transition-all duration-700 dark:text-zinc-100">
              Oops...!
            </h2>
            <h1
              className="flex flex-wrap items-center justify-center gap-1 text-6xl font-bold uppercase xl:justify-start xl:text-8xl"
              style={{
                textShadow:
                  "1.5px 1.5px #000, -1.5px 1.5px #000, 1.5px -1.5px #000, -1.5px -1.5px #000, 4px 4px 0px rgba(0, 0, 0, .2)",
              }}
            >
              <span className="text-zinc-100">4</span>
              <span className="text-primary-violet">0</span>
              <span className="text-zinc-100">4</span>
            </h1>
            <div className="text-primary-violet text-sm font-bold uppercase">
              <span>No</span>
              <b
                className={`${caveat.className} ml-2 text-3xl capitalize text-zinc-800 antialiased transition duration-700 dark:text-zinc-100`}
              >
                Results Found
              </b>
            </div>
          </div>
          <p className="max-w-[460px] text-center text-sm leading-6 text-zinc-600 transition duration-700 dark:text-zinc-400">
            The project you are looking for does not exist. Please try to refine
            your search or use the navigation to go back to projects page.
          </p>
          <div className="mt-10">
            <LinkButtonPrimary text="Back to Projects" link="/projects" />
          </div>
          <>
            <div className="invisible absolute sm:visible sm:right-8 sm:top-20 sm:h-48 sm:w-48 xl:right-28 xl:top-24">
              <Image
                fill
                src={dots}
                alt="Dots Element"
                className={`transition duration-700 dark:opacity-60 dark:invert`}
              />
            </div>
            <div className="invisible absolute sm:visible sm:bottom-48 sm:right-36 sm:h-20 sm:w-20 xl:bottom-48 xl:right-72 xl:h-28 xl:w-28">
              <Image
                fill
                src={dotsSmall}
                alt="Dots Element"
                className="transition duration-700 dark:opacity-60 dark:invert"
              />
            </div>
          </>
          <>
            <div className="invisible absolute sm:visible sm:left-36 sm:top-48 sm:h-20 sm:w-20 xl:left-72 xl:top-48 xl:h-28 xl:w-28">
              <Image
                fill
                src={dotsSmall}
                alt="Dots Element"
                className="transition duration-700 dark:opacity-60 dark:invert"
              />
            </div>
            <div className="invisible absolute h-48 w-48 sm:visible sm:bottom-12 sm:left-5 xl:bottom-24 xl:left-28">
              <Image
                fill
                src={dots}
                alt="Dots Element"
                className={`transition duration-700 dark:opacity-60 dark:invert`}
              />
            </div>
          </>
        </div>
        <VerticalLine linePosition="left-0 top-28" height="h-3/4" />
        <VerticalLine linePosition="right-0 top-28" height="h-3/4" />
      </div>
    </div>
  );
}
