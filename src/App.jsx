import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import { scrollSpyTargets } from "./utils/scrollSpyTargets";
import { LanguageProvider } from "./context/LanguageContext";
import "./App.css";
import "../src/styles/fonts.css";
import "./utils/i18n";

export default function App() {
  return (
    <LanguageProvider>
      <div className="h-full">
        <Sidebar />
        <Navbar targetIds={scrollSpyTargets} />
        <Home />
        <About />
        <Resume />
        <Services />
        <Skills />
        <Projects />
        <Testimonials />
        <Pricing />
        <Contact />
      </div>
    </LanguageProvider>
  );
}
