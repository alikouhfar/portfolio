"use client";

import { IResume } from "@/app/_models/resume.model";
import { caveat } from "@/app/_ui/fonts";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { FC, useEffect, useState } from "react";

interface IResumeCardProps {
  record: IResume;
  id: number;
}

const ResumeCard: FC<IResumeCardProps> = ({ record, id }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);

  function handleToggleCardOpen() {
    setIsCardOpen(!isCardOpen);
  }

  useEffect(() => {
    id === 1 && setIsCardOpen(true);
  }, [id]);

  return (
    <div
      className={`relative border-b-2 border-b-zinc-800 ${id !== 1 && "border-r-2 border-r-zinc-800"} text-zinc-800 transition duration-700 dark:border-b-zinc-100 dark:border-r-zinc-100 dark:text-zinc-100`}
    >
      <h5
        onClick={handleToggleCardOpen}
        className="cursor-pointer p-4 pb-8 pt-8 text-xl font-bold lg:p-8"
      >
        <span>{record.title}</span>
        <button
          onClick={handleToggleCardOpen}
          className="absolute -bottom-6 -right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-zinc-800 bg-white shadow-primary-light transition duration-700 hover:shadow-none dark:border-zinc-100 dark:bg-card-dark dark:shadow-primary-dark"
        >
          <IconPlus
            size={20}
            className={`${isCardOpen ? "invisible opacity-0" : "visible opacity-100"} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-zinc-800 transition-all duration-500 dark:text-zinc-100`}
          />
          <IconMinus
            size={20}
            className={`${isCardOpen ? "visible opacity-100" : "invisible opacity-0"} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-zinc-800 transition-all duration-500 dark:text-zinc-100`}
          />
        </button>
      </h5>
      <div
        className={`flex flex-col gap-5 overflow-hidden px-4 pr-8 transition-all duration-700 ease-in-out lg:px-8 lg:pr-12 ${isCardOpen ? "max-h-96 pb-8" : "max-h-0"}`}
      >
        <div className="flex flex-col items-start justify-between gap-1 lg:flex-row lg:items-center lg:gap-5">
          <h6
            className={`${caveat.className} text-3xl font-semibold leading-7 text-primary-green antialiased`}
          >
            {record.instituteName}
          </h6>
          <div className="flex items-center gap-2 text-sm font-bold text-zinc-800 transition duration-700 dark:text-zinc-100">
            <span>{record.startYear}</span>
            &mdash;
            <span>{record.endYear}</span>
            <span className="uppercase text-primary-green">
              {!record.endYear && "Present"}
            </span>
          </div>
        </div>
        <p className="text-base font-normal text-zinc-700 transition duration-700 dark:text-zinc-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
          repudiandae porro hic amet. Ipsum doloremque corrupti cumque,
          consequuntur corporis esse quis exercitationem, velit deleniti sint
          iusto officia laborum praesentium eos!
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;
