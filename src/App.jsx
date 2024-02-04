import "./App.css";
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

export default function App() {
  return (
    <div className="h-full">
      <Sidebar />
      <Navbar />
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
  );
}
