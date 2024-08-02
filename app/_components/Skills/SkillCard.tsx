import useIntersectionObserver from "@/app/_hooks/useIntersectionObserver";
import { ISkill } from "@/app/_models/skill.model";
import { FC, useEffect, useRef, useState } from "react";

interface ISkillCardProps {
  skill: ISkill;
}

const observerOptions = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.8,
};

const SkillCard: FC<ISkillCardProps> = ({ skill }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [progressBarWidth, setProgressBarWidth] = useState<number>(0);
  const isIntersecting = useIntersectionObserver({
    ref: cardRef,
    options: observerOptions,
  });

  useEffect(() => {
    const progressBarAnimationTimeout = setTimeout(() => {
      if (isIntersecting) setProgressBarWidth(skill.mastery);
    }, 200);

    return () => clearTimeout(progressBarAnimationTimeout);
  }, [isIntersecting]);

  return (
    <div ref={cardRef}>
      <div className="mb-8 px-5 text-zinc-800 transition duration-700 dark:text-zinc-100">
        <div className="mb-6 flex min-h-12 items-center justify-between gap-4">
          <h6 className="text-2xl font-semibold leading-6">{skill.title}</h6>
          <div className="text-lg font-bold">
            <span>{skill.mastery}</span>
            <span className="text-primary-green">%</span>
          </div>
        </div>
        <p className="min-h-20 text-justify">{skill.description}</p>
      </div>
      <div className="relative h-0.5 bg-zinc-800/10 transition duration-700 dark:bg-zinc-600">
        <div
          className="relative block h-0.5 bg-zinc-800 transition-all duration-700 ease-in-out after:absolute after:-top-3 after:right-0 after:h-6 after:w-6 after:rounded-full after:border-2 after:border-zinc-800 after:bg-primary-green after:shadow-primary-light dark:bg-primary-green dark:after:border-zinc-400 dark:after:bg-card-dark dark:after:shadow-primary-dark"
          style={{ width: `${progressBarWidth}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;
