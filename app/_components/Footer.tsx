"use client";

import Link from "next/link";
import { useTheme } from "@/app/_contexts/ThemeContext";
import SocialMedia from "./SocialMedia";
import { FC } from "react";

const Footer: FC = () => {
  const { theme } = useTheme();
  return (
    <footer
      className={`${theme === "dark" ? "dark" : ""} bg-primary-light py-16 text-zinc-800 transition-all duration-700 dark:bg-primary-dark dark:text-zinc-100`}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center justify-between gap-5 p-3 lg:grid-cols-3">
        <div className="flex justify-center lg:justify-start">
          <SocialMedia justifyPosition="start" hasMarginTop={false} />
        </div>
        <p className="text-center text-sm font-bold uppercase">
          © 2022 <span className="text-primary-green">Ali Kouhfar</span>. All
          rights reserved
        </p>
        <p className="text-center text-sm font-bold uppercase lg:text-right">
          <span>Developed by</span>
          <Link
            href="https://alikouhfar.liara.run/"
            target="_blank"
            className="ml-1 text-primary-green"
          >
            codecrafter
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
