import { ITechnology } from "@/app/_models/technology.model";
import { FC } from "react";

export interface ITechnologyCardProps {
  technology: ITechnology;
}

const TechnologyCard: FC<ITechnologyCardProps> = ({ technology }) => {
  return (
    <div>
      <span className="text-2xl font-black text-primary-green lg:text-4xl">
        {technology.id}
      </span>
      <h4 className="text-xl font-extrabold uppercase tracking-wide lg:text-2xl">
        {technology.title}
      </h4>
      <p>{technology.description}</p>
    </div>
  );
};

export default TechnologyCard;
