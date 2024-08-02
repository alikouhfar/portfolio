"use client";

import Contact from "./Contact/Contact";
import Hero from "./Hero";
import { GridPortfolio } from "./Portfolio/Portfolio";
import Pricing from "./Pricing/Pricing";
import Resume from "./Resume/Resume";
import SectionWrapper from "./SectionWrapper";
import Services from "./Services/Services";
import ProfessionalSkills from "./Skills/ProfessionalSkills";
import Testimonials from "./Testimonials/Testimonials";

export default function App() {
  return (
    <>
      <Hero />
      <SectionWrapper
        component={<Services />}
        title="What I do"
        subtitlePhrase="My"
        subtitle="Services"
        gradientPosition="bottom"
      />
      <SectionWrapper
        component={<ProfessionalSkills />}
        title="Professional Skills"
        subtitlePhrase="My"
        subtitle="Talent"
        gradientPosition="center"
      />
      <SectionWrapper
        component={<GridPortfolio />}
        title="Portfolio"
        subtitlePhrase="My"
        subtitle="Cases"
        gradientPosition="top"
      />
      <SectionWrapper
        component={<Resume />}
        title="Resume"
        subtitlePhrase="My"
        subtitle="Story"
        gradientPosition="bottom"
      />
      <SectionWrapper
        component={<Testimonials />}
        title="Testimonials"
        subtitlePhrase="What"
        subtitle="Customers Say"
        gradientPosition="center"
      />
      <SectionWrapper
        component={<Pricing />}
        title="Pricing"
        subtitlePhrase="My"
        subtitle="Price Board"
        gradientPosition="top"
      />
      <SectionWrapper
        component={<Contact />}
        title="Contact Me"
        subtitlePhrase="Let's"
        subtitle="Talk About Ideas"
        gradientPosition="bottom"
      />
    </>
  );
}
