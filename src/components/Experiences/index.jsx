import { skills } from "../../data/skills";
import { experiences } from "../../data/experiences";
import ExperienceCard from "./ExperienceCard";
import SkillCard from "./SkillCard";
import Tag from "../Shared/Tag";
import Section from "../Shared/Section";

export default function Experiences() {
  return (
    <Section id="experience">
      <div className="relative h-full">
        <Tag>Experience</Tag>
        <div className="flex flex-col xl:flex-row justify-between gap-3 h-full">
          <div className="flex-1">
            <div className="flex justify-between flex-col gap-3 md:gap-8">
              <h2 className="text-5xl md:text-7xl font-semibold">
                Skills & Experiences
              </h2>
              <div className="flex gap-5 items-start">
                <span className="block w-8 border-t-zinc-700 dark:border-t-zinc-400 border-t-2 mt-2"></span>
                <p className="text-base w-full xl:w-3/5 text-zinc-800 dark:text-zinc-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-semibold mt-5 mb-8">Skills</h3>
                <ul className="grid gap-y-5 gap-x-2 md:gap-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                  {skills.map((skill, index) => (
                    <SkillCard skill={skill} key={index} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-1 relative h-full">
            <h3 className="text-3xl font-semibold mt-5 mb-8">Experience</h3>
            <div className="flex flex-col justify-between h-[96%]">
              <ul>
                {experiences.map((experience, index) => (
                  <ExperienceCard experience={experience} key={index} />
                ))}
              </ul>
              <div className="relative -bottom-4 md:-bottom-20 lg:-bottom-16 xl:bottom-0">
                <div className="w-full h-32 sm:h-40 md:h-52 bg-purple-600"></div>
                <div className="rounded-full absolute bg-zinc-900 right-4 -bottom-4 h-32 w-32 sm:h-[160px] sm:w-[160px] sm:-bottom-[10px] md:right-[80px] sm:right-[120px]">
                  <button className="border border-white/40 text-white text-sm md:text-base bg-zinc-900 absolute rounded-full right-2 bottom-2 h-28 w-28 sm:h-[145px] sm:w-[145px] md:right-[4.5%] md:bottom-[4.5%]">
                    Hire Me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
