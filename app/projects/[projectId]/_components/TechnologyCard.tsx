import { ITechnology } from "@/app/_models/technology.model";
import { FC } from "react";

export interface ITechnologyCardProps {
  technology: ITechnology;
}

const TechnologyCard: FC<ITechnologyCardProps> = ({ technology }) => {
  return (
    <div className="border-l-primary-violet relative min-h-28 cursor-pointer rounded-2xl border-l-4 bg-white p-6 text-zinc-800 shadow transition-all duration-500 hover:border-l-[20px] dark:bg-zinc-900 dark:text-zinc-100">
      <h4 className="mb-2 text-xl font-extrabold uppercase lg:text-xl">
        {technology.title}
      </h4>
      <p className="text-[15px] leading-4">{technology.description}</p>
    </div>
  );
};

export default TechnologyCard;
