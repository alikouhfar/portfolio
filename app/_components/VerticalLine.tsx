import dots from "@/public/dots.png";
import Image from "next/image";
import { FC } from "react";

interface IVerticalLineProps {
  linePosition: string;
  imagePosition: string;
}

const VerticalLine: FC<IVerticalLineProps> = ({
  linePosition,
  imagePosition,
}) => {
  return (
    <div
      className={`absolute z-50 hidden h-full w-[1.5px] bg-zinc-800 transition duration-700 before:absolute before:left-1/2 before:top-0 before:h-7 before:w-7 before:-translate-x-1/2 before:rounded-full before:border-2 before:border-zinc-900 before:bg-white before:shadow-primary-light before:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-7 after:w-7 after:-translate-x-1/2 after:rounded-full after:border-2 after:border-zinc-900 after:bg-white after:shadow-primary-light after:content-[''] 2xl:block dark:bg-zinc-400 dark:before:border-zinc-400 dark:before:bg-card-dark dark:before:shadow-primary-dark dark:after:border-zinc-400 dark:after:bg-card-dark dark:after:shadow-primary-dark ${linePosition}`}
    >
      <div
        className={`absolute ${imagePosition} bottom-[14px] h-20 w-20 md:-bottom-[150px] md:h-[200px] md:w-[200px]`}
      >
        <Image
          fill
          src={dots}
          alt="Dots Element"
          className={`transition duration-700 dark:opacity-60 dark:invert`}
        />
      </div>
    </div>
  );
};

export default VerticalLine;
