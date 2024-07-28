import { caveat, jost } from "@/app/_ui/fonts";
import dotsSmall from "@/public/dots-small.png";
import dots from "@/public/dots.png";
import Image from "next/image";
import Link from "next/link";
import SocialMedia from "./SocialMedia";
import ButtonPrimary from "./ButtonPrimary";

export default function Hero() {
  return (
    <div className="bg-gradient-light-top pb-20 transition duration-700 dark:bg-gradient-dark-top">
      <div
        className={`${jost.className} relative mx-auto flex max-w-[1600px] flex-wrap justify-center overflow-x-hidden p-3 pb-14 antialiased`}
      >
        <div>
          <div className="container mx-auto grid w-full auto-rows-auto grid-cols-2 pt-32 text-zinc-800 xl:px-4 xl:pt-20 2xl:px-32">
            <div className="col-span-2 flex flex-col gap-5 xl:col-span-1 xl:justify-end">
              <div className="flex items-center justify-center gap-1 text-sm font-bold uppercase text-zinc-800 md:text-base xl:justify-start">
                <p className="transition duration-700 dark:text-zinc-100">
                  Hello,
                </p>
                <p className="text-primary-green">My name is</p>
              </div>
              <h1
                className={`${jost.className} flex items-center justify-center gap-3 text-5xl font-bold uppercase antialiased md:text-6xl xl:justify-start xl:text-8xl`}
                style={{
                  textShadow:
                    "2px 2px #000, -2px 2px #000, 2px -2px #000, -2px -2px #000, 5px 5px 0px rgba(0, 0, 0, .2)",
                }}
              >
                <span className="text-primary-green">Ali</span>
                <span className="text-zinc-100">Kouhfar</span>
              </h1>
              <div
                className={`${jost.className} flex items-baseline justify-center gap-2 text-sm font-bold uppercase text-zinc-800 antialiased transition duration-700 md:text-base xl:justify-start dark:text-zinc-100`}
              >
                <p>I am</p>
                <p
                  className={`${caveat.className} text-2xl font-bold antialiased shadow-black dark:shadow-white`}
                  style={{ textShadow: "0 0 #000" }}
                >
                  Web Developer
                </p>
              </div>
            </div>
            <div className="relative left-1/2 col-span-2 mt-32 h-[380px] w-[380px] -translate-x-1/2 md:h-[600px] md:w-[600px] xl:col-span-1 xl:row-span-2 xl:mt-14">
              {/* <Image /> */}
              <div className="absolute -top-12 right-5 h-36 w-36 md:-right-4 md:h-48 md:w-48">
                <Image
                  fill
                  src={dots}
                  alt="Dots Element"
                  className={`transition duration-700 dark:opacity-60 dark:invert`}
                />
              </div>
              <div className="relative z-[2] h-[380px] w-[380px] rounded-full bg-primary-green md:h-[600px] md:w-[600px]"></div>
              <div>
                <ul className="relative z-[3] mx-auto w-[85%]">
                  <li className="absolute bottom-16 flex h-[50px] w-36 items-center justify-center gap-2 rounded-[50px] border border-zinc-900 bg-white px-4 py-1.5 shadow-primary-light transition duration-700 md:-left-12 md:bottom-28 md:h-20 md:w-56 md:border-2 dark:border-zinc-300 dark:bg-card-dark dark:text-zinc-100 dark:shadow-primary-dark">
                    <span className="flex items-center gap-1 text-center text-lg font-bold uppercase md:text-3xl">
                      12{" "}
                      <strong className="relative pb-1 text-2xl text-primary-green md:text-3xl">
                        +
                      </strong>
                    </span>
                    <span className="flex flex-col text-[9px] font-bold uppercase md:text-[13px]">
                      Years of{" "}
                      <span className="-mt-0.5 text-primary-green">
                        Experience
                      </span>
                    </span>
                  </li>
                  <li className="absolute bottom-8 right-0 flex h-[50px] w-36 items-center justify-center gap-3 rounded-[50px] border border-zinc-900 bg-white px-4 py-1.5 shadow-primary-light transition duration-700 md:-right-6 md:bottom-16 md:h-20 md:w-56 md:border-2 dark:border-zinc-300 dark:bg-card-dark dark:text-zinc-100 dark:shadow-primary-dark">
                    <span className="flex items-center gap-1 text-center text-lg font-bold uppercase md:text-3xl">
                      330
                    </span>
                    <span className="flex flex-col text-[9px] font-bold uppercase md:text-[13px]">
                      Completed{" "}
                      <span className="-mt-0.5 text-primary-green">
                        Projects
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="absolute bottom-0 right-0 h-20 w-20 md:-bottom-3 md:h-28 md:w-28">
                <Image
                  fill
                  src={dotsSmall}
                  alt="Dots Element"
                  className={`transition duration-700 dark:opacity-60 dark:invert`}
                />
              </div>
              <div className="absolute -left-5 bottom-[14px] h-20 w-20 md:-left-3 md:bottom-7 md:h-28 md:w-28">
                <Image
                  fill
                  src={dotsSmall}
                  alt="Dots Element"
                  className={`transition duration-700 dark:opacity-60 dark:invert`}
                />
              </div>
            </div>
            <div className="col-span-2 flex flex-col xl:col-span-1 xl:items-start xl:justify-start">
              <div className="my-12">
                <div className="mx-auto max-w-xl">
                  <p className="text-center text-lg font-normal capitalize leading-8 text-zinc-600 transition duration-700 xl:text-left dark:text-zinc-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <SocialMedia justifyPosition="center" hasMarginTop={true} />
              </div>
              <div className="mx-auto md:flex md:items-center xl:mx-0">
                <ButtonPrimary text="Download CV" link="" />
                <Link
                  href=""
                  className="relative block pt-14 text-center align-top text-sm font-bold uppercase leading-[50px] tracking-wider transition-all duration-700 before:absolute before:left-1/2 before:top-5 before:h-10 before:w-[3px] before:bg-zinc-900 before:content-[''] md:pl-20 md:pt-0 md:before:-left-px md:before:top-1/2 md:before:h-[3px] md:before:w-12 md:before:-translate-y-1/2 dark:text-zinc-100 dark:before:bg-zinc-300"
                >
                  <span>My Skills</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-10 top-3/4 hidden h-5/6 w-0.5 -translate-y-3/4 bg-zinc-800 transition duration-700 before:absolute before:left-1/2 before:top-0 before:h-7 before:w-7 before:-translate-x-1/2 before:rounded-full before:border-2 before:border-zinc-900 before:bg-white before:shadow-primary-light before:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-7 after:w-7 after:-translate-x-1/2 after:rounded-full after:border-2 after:border-zinc-900 after:bg-white after:shadow-primary-light after:content-[''] 2xl:block dark:bg-zinc-400 dark:before:border-zinc-400 dark:before:bg-card-dark dark:before:shadow-primary-dark dark:after:border-zinc-400 dark:after:bg-card-dark dark:after:shadow-primary-dark"></div>
      </div>
    </div>
  );
}
