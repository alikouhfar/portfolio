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
import "./style.css";
import Tag from "../Shared/Tag";

export default function () {
  return (
    <section className="flex flex-col justify-between h-screen py-10 px-44 max-w-screen-2xl mx-auto">
      <header>
        <div className="flex items-center justify-between">
          <a>
            <img src="/logo.png" alt="Ali Kouhfar Logo" className="h-9" />
          </a>
          <ul className="flex list-none text-sm gap-3">
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
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="text-sm border border-zinc-300 rounded-xl p-4 text-zinc-800"
            />
            <div className="absolute right-4 top-1/3">
              <IconSearch size={20} color="var(--icon-not-focused)" />
            </div>
          </div>
        </div>
      </header>
      <div className="relative">
        <Tag>Hello!</Tag>
        <div className="flex items-center justify-center gap-72">
          <div>
            <div className="flex justify-between flex-col gap-8">
              <h2 className="text-7xl font-semibold">
                We have Development Experience
              </h2>
              <div className="flex gap-5 items-start">
                <span className="block w-8 border-t-zinc-700 border-t-2 mt-2"></span>
                <p className="text-base w-full text-zinc-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex gap-1">
                <button className="flex items-center justify-center leading-none bg-purple-600 py-4 px-5 text-white border-none gap-1 rounded-2xl mr-3 bg-none text-base hover:bg-purple-700 transition-all">
                  Let&apos;s Talk
                  <span>
                    <IconArrowBadgeRight stroke={1.5} />
                  </span>
                </button>
                <button className="flex items-center justify-center leading-none py-4 px-5 border-none gap-1 rounded-2xl mr-3 bg-none text-base hover:bg-zinc-50 transition-all">
                  Portfolio
                  <span>
                    <IconArrowUpRight stroke={1.5} />
                  </span>
                </button>
              </div>
            </div>
            <div className="flex items-center mt-14 gap-6">
              <p className="text-base">Check Out My</p>
              <ul className="flex list-none gap-8 text-sm">
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
              <div
                className="bg-purple-500 after:content-[''] after:absolute after:w-full after:h-full after:left-0 after:top-0 after:bg-purple-600/5"
                style={{
                  width: "375px",
                  height: "500px",
                }}
              >
                <img className="h-full" src="hero.jpg" />
              </div>
              <div className="absolute rounded-full right-3/4 top-1/2 backdrop-blur-2xl bg-zinc-900/10">
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
                  className="flex justify-center items-center absolute rounded-full border-none bg-white pl-1 text-2xl font-normal leading-none hover:bg-purple-600 hover:text-white cursor-pointer transition-all"
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
