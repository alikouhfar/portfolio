import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="text-zinc-800 scroll-smooth">
      <Hero />
      <Services />
      <Experiences />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
