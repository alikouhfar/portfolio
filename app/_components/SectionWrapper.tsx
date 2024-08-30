"use client";

import useIntersectionObserver from "@/app/_hooks/useIntersectionObserver";
import { caveat } from "@/app/_ui/fonts";
import { FC, ReactNode, useRef } from "react";
import { useTheme } from "../_contexts/ThemeContext";

type SubtitlePhraseType = "My" | "What" | "Let's";

interface IObserverOptions {
  root?: Element | Document | undefined | null;
  rootMargin?: string;
  threshold?: number;
}

interface ISectionWrapperProps {
  component: ReactNode;
  title?: string;
  sectionId: string;
  subtitlePhrase?: SubtitlePhraseType;
  subtitle?: string;
  gradientPosition: string;
  observerOptions?: IObserverOptions;
}

const SectionWrapper: FC<ISectionWrapperProps> = ({
  component,
  title,
  sectionId,
  subtitlePhrase,
  subtitle,
  gradientPosition,
  observerOptions = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.15,
  },
}) => {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver({
    ref,
    options: observerOptions,
  });

  function generateGradientColorClass() {
    switch (gradientPosition) {
      case "top":
        return "bg-gradient-light-top dark:bg-gradient-dark-top";
      case "bottom":
        return "bg-gradient-light-bottom dark:bg-gradient-dark-bottom";
      case "center":
        return "bg-gradient-light-center dark:bg-gradient-dark-center";
    }
  }
  return (
    <section
      id={sectionId}
      ref={ref}
      className={`${theme === "dark" ? "dark" : ""} ${generateGradientColorClass()} relative overflow-hidden text-zinc-800 transition duration-700 dark:text-zinc-100`}
    >
      <div
        className={`${isIntersecting ? "top-0 opacity-100" : "top-16 opacity-0"} relative mx-auto flex max-w-xs flex-col items-center gap-20 p-3 pb-28 transition-all duration-1000 sm:max-w-xl md:max-w-3xl xl:max-w-[1300px] xl:pb-44`}
      >
        {title && subtitle && (
          <div className="flex transform flex-col items-center">
            <h2 className="text-center text-4xl font-bold uppercase text-zinc-800 transition duration-700 dark:text-zinc-100">
              {title}
            </h2>
            <div className="text-sm font-bold uppercase text-primary-green">
              <span>{subtitlePhrase}</span>
              <b
                className={`${caveat.className} ml-1 text-3xl capitalize text-zinc-800 antialiased transition duration-700 dark:text-zinc-100`}
              >
                {subtitle}
              </b>
            </div>
          </div>
        )}
        <div className="w-full">{component}</div>
      </div>
    </section>
  );
};

export default SectionWrapper;
