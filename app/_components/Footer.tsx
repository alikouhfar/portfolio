"use client";

import Link from "next/link";
import { useTheme } from "@/app/_contexts/ThemeContext";
import SocialMedia from "./SocialMedia";
import { FC } from "react";
import { IconCopyright } from "@tabler/icons-react";

const Footer: FC = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${theme === "dark" ? "dark" : ""} bg-primary-light py-16 text-zinc-800 transition-all duration-700 dark:bg-primary-dark dark:text-zinc-100`}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center justify-between gap-5 p-3 lg:grid-cols-3">
        <div className="flex justify-center lg:justify-start">
          <SocialMedia justifyPosition="start" hasMarginTop={false} />
        </div>
        <div className="flex items-center justify-center gap-1 text-sm font-bold uppercase">
          <div className="flex items-center gap-1">
            <IconCopyright size={16} stroke={2.2} />
            <span>{currentYear}</span>
          </div>
          <span className="text-primary-violet">Ali Kouhfar.</span>
          <span>All rights reserved</span>
        </div>
        <p className="text-center text-sm font-bold uppercase lg:text-right">
          <span>Developed by</span>
          <Link
            href="http://www.alikouhfar.ir"
            target="_blank"
            className="text-primary-violet ml-1"
          >
            codecrafter
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
