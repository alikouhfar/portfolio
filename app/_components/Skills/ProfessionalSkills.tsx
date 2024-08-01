import { skills } from "@/app/_lib/skills";
import VerticalLine from "../VerticalLine";
import SkillCard from "./SkillCard";

export default function ProfessionalSkills() {
  return (
    <div className="relative flex w-full flex-wrap justify-center p-3 pb-14">
      <div className="grid max-w-full grid-cols-1 gap-x-12 gap-y-20 md:grid-cols-2 xl:max-w-container xl:grid-cols-3">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
      <VerticalLine
        linePosition="left-0"
        imagePosition="-right-5 md:-right-12"
      />
    </div>
  );
}
