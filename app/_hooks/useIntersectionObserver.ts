"use client";

import { RefObject, useEffect, useRef, useState } from "react";

interface IUseIntersectionObserver {
  ref: RefObject<HTMLDivElement>;
  options: IntersectionObserverInit | undefined;
}

const useIntersectionObserver = ({
  ref,
  options,
}: IUseIntersectionObserver) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerInit = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof window !== undefined) {
      observerInit.current = new window.IntersectionObserver(
        ([entry]) => setIsIntersecting(entry.isIntersecting),
        options,
      );
    }
  }, [options]);

  useEffect(() => {
    const element = ref.current;
    const observer = observerInit.current;

    if (observer) {
      if (isIntersecting) {
        observer.disconnect();
        return;
      }

      if (element && !isIntersecting) observer.observe(element);

      return () => observer.disconnect();
    }
  }, [isIntersecting, ref]);

  return isIntersecting;
};

export default useIntersectionObserver;
