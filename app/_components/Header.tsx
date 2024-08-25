"use client";

import logo from "@/public/logo.png";
import { IconMenu, IconMoon, IconSun, IconX } from "@tabler/icons-react";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { useTheme } from "@/app/_contexts/ThemeContext";
import SidebarNavigation from "./SidebarNavigation";
import Link from "next/link";

const Header: FC = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerElementRef = useRef<HTMLDivElement>(null);

  const { theme, toggleTheme } = useTheme();

  function handleOpenMenu() {
    setIsMenuOpen(true);
  }

  function handleCloseMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (headerElementRef.current) {
        const hasPassedHeader =
          window.scrollY > headerElementRef.current.offsetHeight + 20;
        setIsHeaderFixed(hasPassedHeader);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div
        ref={headerElementRef}
        className={`${isHeaderFixed ? "animate-header--in fixed shadow-sm backdrop-blur-md" : "absolute top-0"} ${theme === "dark" ? "dark" : ""} left-1/2 z-[90] h-24 w-full -translate-x-1/2 p-8 px-5 transition-all`}
      >
        <div className="mx-auto max-w-[1300px]">
          <div className="relative mx-auto flex items-center justify-between">
            <Link href="/" className="max-w-44">
              <Image src={logo} alt="Logo of Ali Kouhfar" priority />
            </Link>
            <div className="flex items-center gap-2">
              <button
                className="group relative flex h-10 items-center justify-center overflow-hidden px-3 py-1 transition sm:w-10"
                onClick={toggleTheme}
              >
                <IconMoon
                  size={22}
                  stroke={1.7}
                  className={`absolute ${theme === "light" ? "top-1/2 -translate-y-1/2" : "-top-[50px]"} z-20 transition duration-300 group-hover:scale-105 ${theme === "light" ? "text-zinc-800" : "text-primary-green"}`}
                />
                <IconSun
                  size={26}
                  stroke={1.7}
                  className={`absolute ${theme === "dark" ? "top-1/2 -translate-y-1/2" : "top-[50px]"} z-20 transition duration-300 group-hover:scale-105 ${theme === "light" ? "text-zinc-800" : "text-primary-green"}`}
                />
              </button>
              <button
                className="group flex h-10 items-center justify-center px-1 py-1 text-zinc-800 sm:px-3 dark:text-zinc-100"
                onClick={handleOpenMenu}
              >
                <IconMenu
                  size={24}
                  stroke={2}
                  className="transition group-hover:scale-105"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute h-full w-full ${theme === "dark" ? "dark" : ""}`}
      >
        {isMenuOpen && (
          <div
            className="fixed z-50 h-full w-full"
            onClick={handleCloseMenu}
          ></div>
        )}
        <div
          className={`${isMenuOpen ? "visible right-0 skew-x-0 opacity-100" : "invisible -right-[400px] skew-x-12 opacity-0"} bg-primary/50 fixed top-0 z-[100] flex h-full w-[450px] max-w-full origin-top-left flex-col p-4 shadow backdrop-blur-xl transition-all duration-1000 xl:p-8 dark:bg-[rgba(49,54,60,0.8)]`}
        >
          <button
            className="group ml-auto flex items-center justify-center px-3 py-1 text-zinc-800 dark:text-zinc-100"
            onClick={handleCloseMenu}
          >
            <IconX
              size={30}
              stroke={2}
              className="transition group-hover:scale-105"
            />
          </button>
          <SidebarNavigation />
          <div className="absolute left-10 top-3/4 hidden h-5/6 w-0.5 -translate-y-3/4 bg-zinc-800 before:absolute before:left-1/2 before:top-0 before:h-7 before:w-7 before:-translate-x-1/2 before:rounded-full before:border-2 before:border-zinc-900 before:bg-white before:shadow-primary-light before:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-7 after:w-7 after:-translate-x-1/2 after:rounded-full after:border-2 after:border-zinc-900 after:bg-white after:shadow-primary-light after:content-[''] 2xl:block dark:bg-zinc-400 dark:before:border-zinc-400 dark:before:bg-card-dark dark:after:border-zinc-400 dark:after:bg-card-dark"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
