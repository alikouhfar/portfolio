import Link from "next/link";
import { FC } from "react";

interface ILinkButtonPrimaryProps {
  text: string;
  link?: string;
  takeAllWidth?: boolean;
}

interface IButtonPrimaryProps {
  text: string;
}

export const LinkButtonPrimary: FC<ILinkButtonPrimaryProps> = ({
  text,
  link = "",
  takeAllWidth = false,
}) => {
  return (
    <Link
      href={link}
      className={`relative inline-block h-14 overflow-hidden rounded-[50px] border-2 border-zinc-900 px-10 text-center align-top text-sm font-bold uppercase leading-[50px] tracking-wider text-zinc-800 shadow-primary-light transition duration-700 before:absolute before:left-1/2 before:top-1/2 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-[50px] before:bg-primary-green before:opacity-0 before:blur-md before:transition-all before:duration-700 before:content-[''] after:z-[1] hover:text-zinc-100 hover:before:h-cv-button hover:before:w-cv-button hover:before:opacity-100 hover:before:blur-0 dark:border-zinc-300 dark:text-zinc-100 dark:shadow-primary-dark ${takeAllWidth ? "w-full md:w-fit" : ""}`}
    >
      <span className="relative z-[2]">{text}</span>
    </Link>
  );
};

export const ButtonPrimary: FC<IButtonPrimaryProps> = ({ text }) => {
  return (
    <button className="relative inline-block h-14 overflow-hidden rounded-[50px] border-2 border-zinc-900 px-10 text-center align-top text-sm font-bold uppercase leading-[50px] tracking-wider text-zinc-800 shadow-primary-light transition duration-700 before:absolute before:left-1/2 before:top-1/2 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-[50px] before:bg-primary-green before:opacity-0 before:blur-md before:transition-all before:duration-700 before:content-[''] after:z-[1] hover:text-zinc-100 hover:before:h-cv-button hover:before:w-cv-button hover:before:opacity-100 hover:before:blur-0 dark:border-zinc-300 dark:text-zinc-100 dark:shadow-primary-dark">
      <span className="relative z-[2]">{text}</span>
    </button>
  );
};
