"use client";

import Image from "next/image";
import logo from "@/public/logo.png";
import { useEffect, useRef, useState } from "react";

export default function LoadingSpinner() {
  const loadingRef = useRef<HTMLDivElement>(null);
  const [isSpinnerVisible, setIsSpinnerVisible] = useState<boolean>(true);

  useEffect(() => {
    return () => setIsSpinnerVisible(false);
  }, []);

  return (
    <div
      ref={loadingRef}
      className={`${isSpinnerVisible ? "visible left-0 skew-x-0 opacity-100" : "invisible -left-[400px] -skew-x-12 opacity-0"} fixed top-0 z-[100] flex h-screen w-full origin-top-right items-center justify-center overflow-hidden bg-primary-light transition-all delay-300 duration-500`}
    >
      <div className="relative">
        <div className="mb-5 w-52">
          <Image src={logo} alt="Logo" />
        </div>
        <div className="absolute bottom-0 left-0 h-0.5 w-full bg-zinc-100/70"></div>
        <div className="loading-spinner--animation absolute bottom-0 left-0 h-0.5 w-full bg-primary-green"></div>
      </div>
    </div>
  );
}
