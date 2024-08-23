import { caveat } from "@/app/_ui/fonts";
import dotsSmall from "@/public/dots-small.png";
import dots from "@/public/dots.png";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { LinkButtonPrimary } from "./Button";
import SocialMedia from "./SocialMedia";
import VerticalLine from "./VerticalLine";

const Hero: FC = () => {
  return (
    <div className="relative flex w-full flex-wrap justify-center p-3 pb-14 pt-32 xl:pt-28">
      <div className="mx-auto grid w-full max-w-full auto-rows-auto grid-cols-2 text-zinc-800 xl:max-w-container xl:gap-x-10">
        <div className="col-span-2 flex flex-col gap-2 xl:col-span-1 xl:justify-end xl:gap-4">
          <div className="flex items-center justify-center gap-1 text-xs font-bold uppercase text-zinc-800 md:text-sm xl:justify-start">
            <p className="transition duration-700 dark:text-zinc-100">Hello,</p>
            <p className="text-primary-green">My name is</p>
          </div>
          <h1
            className="flex flex-wrap items-center justify-center text-5xl font-bold uppercase sm:gap-3 md:text-6xl xl:justify-start xl:text-7xl"
            style={{
              textShadow:
                "2px 2px #000, -2px 2px #000, 2px -2px #000, -2px -2px #000, 5px 5px 0px rgba(0, 0, 0, .2)",
            }}
          >
            <span className="text-primary-green">Ali</span>
            <span className="text-zinc-100">Kouhfar</span>
          </h1>
          <div className="flex items-baseline justify-center gap-2 text-xs font-bold uppercase text-zinc-800 transition duration-700 md:text-sm xl:justify-start dark:text-zinc-100">
            <p>I am</p>
            <p
              className={`${caveat.className} text-xl font-bold antialiased shadow-black xl:text-2xl dark:shadow-white`}
            >
              Frontend Developer
            </p>
          </div>
        </div>
        <div className="relative left-1/2 col-span-2 mt-32 h-[380px] w-[380px] -translate-x-1/2 md:h-[600px] md:w-[600px] xl:col-span-1 xl:row-span-2 xl:mt-14 xl:h-[500px] xl:w-[500px]">
          {/* <Image /> */}
          <div className="absolute -top-12 right-5 h-36 w-36 md:-right-4 md:h-48 md:w-48 xl:-right-20">
            <Image
              fill
              src={dots}
              alt="Dots Element"
              className={`transition duration-700 dark:opacity-60 dark:invert`}
            />
          </div>
          <div className="relative z-[2] h-[380px] w-[380px] rounded-full bg-primary-green md:h-[600px] md:w-[600px] xl:h-[550px] xl:w-[550px]"></div>
          <div>
            <ul className="relative z-[3] mx-auto w-[85%]">
              <li className="absolute bottom-16 flex h-[50px] w-36 items-center justify-center gap-2 rounded-[50px] border border-zinc-900 bg-white px-4 py-1.5 shadow-primary-light transition duration-700 md:-left-12 md:bottom-28 md:h-20 md:w-56 md:border-2 xl:-left-16 dark:border-zinc-300 dark:bg-card-dark dark:text-zinc-100 dark:shadow-primary-dark">
                <span className="flex items-center gap-1 text-center text-lg font-bold uppercase md:text-3xl">
                  2{" "}
                  <strong className="relative pb-1 text-2xl text-primary-green md:text-3xl">
                    +
                  </strong>
                </span>
                <span className="flex flex-col text-[9px] font-bold uppercase md:text-[13px]">
                  Years of{" "}
                  <span className="-mt-0.5 text-primary-green">Experience</span>
                </span>
              </li>
              <li className="absolute bottom-8 right-0 flex h-[50px] w-36 items-center justify-center gap-3 rounded-[50px] border border-zinc-900 bg-white px-4 py-1.5 shadow-primary-light transition duration-700 md:-right-6 md:bottom-16 md:h-20 md:w-56 md:border-2 xl:-right-20 dark:border-zinc-300 dark:bg-card-dark dark:text-zinc-100 dark:shadow-primary-dark">
                <span className="flex items-center gap-1 text-center text-lg font-bold uppercase md:text-3xl">
                  5
                </span>
                <span className="flex flex-col text-[9px] font-bold uppercase md:text-[13px]">
                  Completed{" "}
                  <span className="-mt-0.5 text-primary-green">Projects</span>
                </span>
              </li>
            </ul>
          </div>
          <div className="absolute bottom-0 right-0 h-20 w-20 md:-bottom-3 md:h-28 md:w-28 xl:-bottom-16 xl:-right-16">
            <Image
              fill
              src={dotsSmall}
              alt="Dots Element"
              className="transition duration-700 dark:opacity-60 dark:invert"
            />
          </div>
          <div className="absolute -left-5 bottom-[14px] h-20 w-20 md:-left-3 md:bottom-7 md:h-28 md:w-28 xl:-bottom-4 xl:-left-12">
            <Image
              fill
              src={dotsSmall}
              alt="Dots Element"
              className="transition duration-700 dark:opacity-60 dark:invert"
            />
          </div>
        </div>
        <div className="col-span-2 flex flex-col xl:col-span-1 xl:items-start xl:justify-start">
          <div className="my-12">
            <div className="mx-auto max-w-xl">
              <p className="text-center text-base font-normal capitalize leading-8 text-zinc-600 transition duration-700 xl:text-justify dark:text-zinc-400">
                Welcome! I'm a Frontend Developer focused on React and Next.js,
                crafting elegant, interactive web solutions. My expertise is in
                solving complex problems with user-friendly designs, embracing
                the latest tech. Browse my projects and let's start on your next
                digital masterpiece!
              </p>
            </div>
            <SocialMedia justifyPosition="center" hasMarginTop={true} />
          </div>
          <div className="mx-auto md:flex md:items-center xl:mx-0">
            <LinkButtonPrimary text="Download CV" link="" />
            <Link
              href=""
              className="relative block pt-14 text-center align-top text-sm font-bold uppercase leading-[50px] tracking-wider transition-all duration-700 before:absolute before:left-1/2 before:top-5 before:h-10 before:w-[3px] before:bg-zinc-900 before:content-[''] md:pl-20 md:pt-0 md:before:-left-px md:before:top-1/2 md:before:h-[3px] md:before:w-12 md:before:-translate-y-1/2 dark:text-zinc-100 dark:before:bg-zinc-300"
            >
              <span>My Skills</span>
            </Link>
          </div>
        </div>
      </div>
      <VerticalLine
        linePosition="left-0"
        imagePosition="-right-5 md:-right-12"
      />
    </div>
  );
};

export default Hero;
