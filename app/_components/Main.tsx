"use client";

import { useTheme } from "../_contexts/ThemeContext";
import Hero from "./Hero";

export default function Main() {
  const { theme } = useTheme();
  return (
    <main
      className={`${theme === "dark" ? "dark" : ""} bg-primary-light dark:bg-primary-dark dark:bg-gradient-dark relative mx-auto max-w-[1600px]`}
    >
      <Hero />
      {/* <Services />
        <ProfessionalSkills />
        <Portfolio />
        <Resume />
        <Testimonials />
        <Pricing />
        <Blog />
        <Contact /> */}
    </main>
  );
}
