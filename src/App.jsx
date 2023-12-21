import { useContext } from "react";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import { DarkModeContext } from "./context/DarkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`${darkMode ? "dark" : "light"}`}>
      <div className="text-zinc-800 dark:text-zinc-200 scroll-smooth">
        <Hero />
        <Services />
        <Experiences />
        <Projects />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
