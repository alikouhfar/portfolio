import {
  IconArrowBadgeRight,
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconChevronsRight,
  IconSearch,
} from "@tabler/icons-react";
import ReactCurvedText from "react-curved-text";
import Tag from "../Shared/Tag";
import "./style.css";
import DarkModeButton from "../Shared/DarkModeButton";

export default function Hero() {
  return (
    <section className="flex flex-col gap-5 lg:gap-8 xl:gap-0 justify-between 2xl:h-screen py-6 px-5 md:py-10 md:px-16 2xl:px-44 max-w-screen-2xl mx-auto dark:bg-zinc-900">
      <header>
        <div className="flex flex-col xl:flex-row items-center justify-between gap-7 md:gap-4 xl:gap-0">
          <a>
            <img
              src="logo.png"
              alt="Ali Kouhfar Logo"
              className="w-full max-w-xs md:h-9 mx-auto md:mx-0"
            />
          </a>
          <ul className="flex flex-col md:flex-row list-none text-sm justify-between md:gap-3 gap-0 w-full md:max-w-lg xl:w-fit">
            <li>
              <a className="menu-item animation" href="#service">
                Service
              </a>
            </li>
            <li>
              <a className="menu-item animation" href="#experience">
                About
              </a>
            </li>
            <li>
              <a className="menu-item animation" href="#project">
                Project
              </a>
            </li>
            <li>
              <a className="menu-item animation" href="#testimonial">
                Testimonial
              </a>
            </li>
            <li>
              <a className="menu-item animation" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-4 w-full md:max-w-lg xl:w-fit">
            <DarkModeButton />
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search"
                className="text-sm border border-zinc-300 dark:border-zinc-800 rounded-xl p-4 text-zinc-800 w-full md:max-w-lg xl:w-fit dark:bg-zinc-950"
              />
              <div className="absolute right-4 top-1/3">
                <IconSearch size={20} color="var(--icon-not-focused)" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="relative">
        <Tag>Hello!</Tag>
        <div className="flex flex-col xl:flex-row items-center justify-center gap-10 xl:gap-72">
          <div className="w-full xl:w-fit">
            <div className="flex justify-between flex-col gap-8">
              <h2 className="text-5xl md:text-7xl font-semibold">
                We have Development Experience
              </h2>
              <div className="flex gap-5 items-start">
                <span className="block w-8 border-t-zinc-700 dark:border-t-zinc-400 border-t-2 mt-2"></span>
                <p className="text-base w-full text-zinc-800 dark:text-zinc-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 xl:gap-2">
                <button className="w-full xl:w-1/3 flex items-center justify-center leading-none bg-purple-600 py-4 px-5 text-white border-none gap-1 rounded-2xl bg-none text-base hover:bg-purple-700 transition-all">
                  Let&apos;s Talk
                  <span>
                    <IconArrowBadgeRight stroke={1.5} />
                  </span>
                </button>
                <button className="w-full xl:w-1/3 flex items-center justify-center leading-none py-4 px-5 border-none gap-1 rounded-2xl bg-zinc-100 dark:bg-zinc-950 text-base hover:bg-zinc-200 transition-all">
                  Portfolio
                  <span>
                    <IconArrowUpRight stroke={1.5} />
                  </span>
                </button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start mt-14 gap-4 sm:gap-6">
              <p className="text-base">Check Out My</p>
              <ul className="flex list-none w-full max-w-[300px] sm:w-fit justify-between sm:gap-8 text-sm">
                <li className="social-icon">
                  <a href="#">
                    <IconBrandInstagram size={30} stroke={1.5} />
                  </a>
                </li>
                <li className="social-icon">
                  <a href="#">
                    <IconBrandLinkedin size={30} stroke={1.5} />
                  </a>
                </li>
                <li className="social-icon">
                  <a href="#">
                    <IconBrandGithub size={30} stroke={1.5} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="bg-purple-500 after:content-[''] after:absolute after:w-full after:h-full after:left-0 after:top-0 after:bg-purple-600/5 w-full sm:w-[375px] sm:h-[500px]">
                <img className="aspect-[3/4]" src="hero.jpg" />
              </div>
              <div className="absolute rounded-full h-fit -bottom-14 right-1/2 translate-x-1/2 xl:right-full xl:top-1/2 backdrop-blur-2xl bg-zinc-900/10 dark:bg-zinc-200/10">
                <ReactCurvedText
                  width={200}
                  height={198}
                  cx={100}
                  cy={100}
                  rx={36}
                  ry={36}
                  startOffset={2}
                  reversed={true}
                  text="Learn About Me"
                  textProps={{ style: { fontSize: 14, fontWeight: 500 } }}
                  textPathProps={null}
                  tspanProps={{ dy: "-30" }}
                  ellipseProps={{ style: "fill: #fff" }}
                />
                <button
                  className="flex justify-center items-center absolute rounded-full border-none bg-white pl-1 text-2xl font-normal leading-none hover:bg-purple-600 hover:text-white dark:text-zinc-800 dark:hover:text-white cursor-pointer transition-all"
                  style={{
                    right: "35.18%",
                    top: "35.5%",
                    height: "60px",
                    width: "60px",
                  }}
                >
                  <IconChevronsRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
