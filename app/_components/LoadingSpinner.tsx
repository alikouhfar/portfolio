"use client";

import Image from "next/image";
import logo from "@/public/logo.png";
import { FC, useEffect, useRef, useState } from "react";
import { useTheme } from "@/app/_contexts/ThemeContext";

const LoadingSpinner: FC = () => {
  const { theme } = useTheme();
  const loadingRef = useRef<HTMLDivElement>(null);
  const [isSpinnerVisible, setIsSpinnerVisible] = useState<boolean>(true);

  useEffect(() => {
    return () => setIsSpinnerVisible(false);
  }, []);

  return (
    <div
      ref={loadingRef}
      className={`${isSpinnerVisible ? "visible left-0 skew-x-0 opacity-100" : "invisible -left-[400px] -skew-x-12 opacity-0"} ${theme === "dark" ? "dark" : ""} fixed top-0 z-[100] flex h-screen w-full origin-top-right items-center justify-center overflow-hidden bg-primary-light transition-all delay-300 duration-500 dark:bg-primary-dark`}
    >
      <div className="relative">
        <div className="mb-5 w-52">
          <Image src={logo} alt="Logo" />
        </div>
        <div className="absolute bottom-0 left-0 h-0.5 w-full bg-zinc-100/70 dark:bg-zinc-800/70"></div>
        <div className="loading-spinner--animation bg-primary-violet absolute bottom-0 left-0 h-0.5 w-full"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
