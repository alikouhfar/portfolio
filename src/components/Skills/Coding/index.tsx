import { Skill } from "../../../interfaces/skill.interface";

interface Props {
  skill: Skill;
}

export default function Coding({ skill }: Props) {
  return (
    <div>
      <div className="mb-[50px]">
        <div className="mb-5 rounded-[100px] border-2 border-zinc-600 py-12 transition-all hover:border-theme">
          <img
            src={`${skill.tag}.png`}
            className="m-auto mb-[29px] block max-h-20"
          />
          <h1 className="m-0 text-3xl font-light text-theme">
            {skill.mastery}%
          </h1>
        </div>
        <p className="m-0 font-poppins text-sm text-white">{skill.title}</p>
      </div>
    </div>
  );
}
