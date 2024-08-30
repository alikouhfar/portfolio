"use client";

import { FC } from "react";
import Contact from "./Contact/Contact";
import Hero from "./Hero";
import { GridPortfolio } from "./Portfolio/Portfolio";
import Pricing from "./Pricing/Pricing";
import Resume from "./Resume/Resume";
import SectionWrapper from "./SectionWrapper";
import Services from "./Services/Services";
import ProfessionalSkills from "./Skills/ProfessionalSkills";

const App: FC = () => {
  return (
    <>
      <SectionWrapper
        component={<Hero />}
        sectionId="home"
        gradientPosition="bottom"
      />
      <SectionWrapper
        component={<Services />}
        title="What I do"
        sectionId="services"
        subtitlePhrase="My"
        subtitle="Services"
        gradientPosition="center"
      />
      <SectionWrapper
        component={<ProfessionalSkills />}
        title="Professional Skills"
        sectionId="skills"
        subtitlePhrase="My"
        subtitle="Talent"
        gradientPosition="top"
        observerOptions={{
          threshold: 0.05,
        }}
      />
      <SectionWrapper
        component={<GridPortfolio />}
        title="Portfolio"
        sectionId="works"
        subtitlePhrase="My"
        subtitle="Cases"
        gradientPosition="bottom"
      />
      <SectionWrapper
        component={<Resume />}
        title="Resume"
        sectionId="resume"
        subtitlePhrase="My"
        subtitle="Story"
        gradientPosition="center"
      />
      <SectionWrapper
        component={<Pricing />}
        title="Pricing"
        sectionId="pricing"
        subtitlePhrase="My"
        subtitle="Price Board"
        gradientPosition="top"
      />
      <SectionWrapper
        component={<Contact />}
        title="Contact Me"
        sectionId="contact"
        subtitlePhrase="Let's"
        subtitle="Talk About Ideas"
        gradientPosition="bottom"
      />
    </>
  );
};

export default App;
