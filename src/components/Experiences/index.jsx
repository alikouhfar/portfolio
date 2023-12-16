import { skills } from "../../data/skills";
import { experiences } from "../../data/experiences";
import ExperienceCard from "./ExperienceCard";
import SkillCard from "./SkillCard";
import Tag from "../Shared/Tag";
import Section from "../Shared/Section";

export default function () {
  return (
    <Section id="experience">
      <div className="relative h-full">
        <Tag>Experience</Tag>
        <div className="flex justify-between gap-3 h-full">
          <div className="flex-1">
            <div className="flex justify-between flex-col gap-8">
              <h2 className="text-7xl font-semibold">Skills & Experiences</h2>
              <div className="flex gap-5 items-start">
                <span className="block w-8 border-t-zinc-700 border-t-2 mt-2"></span>
                <p className="text-base w-3/5 text-zinc-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-semibold mt-5 mb-8">Skills</h3>
                <ul
                  className="grid gap-10"
                  style={{
                    gridTemplateColumns: `repeat(${
                      skills.length <= 3 ? "3" : Math.round(skills.length / 2)
                    },1fr)`,
                  }}
                >
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
              <div className="relative">
                <div className="w-full h-40 bg-purple-600"></div>
                <div
                  className="rounded-full absolute bg-zinc-900"
                  style={{
                    height: "160px",
                    width: "160px",
                    right: "120px",
                    bottom: "-10px",
                  }}
                >
                  <button
                    className="border border-white/40 text-white text-base bg-zinc-900 absolute rounded-full"
                    style={{
                      height: "145px",
                      width: "145px",
                      right: "4.5%",
                      bottom: "4.5%",
                    }}
                  >
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
