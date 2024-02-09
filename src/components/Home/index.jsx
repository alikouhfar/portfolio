import { IconArrowDown, IconHome } from "@tabler/icons-react";
import "./style.css";
import { useEffect, useState } from "react";
import { supabase } from "../../data/supabase";

export default function Home() {
  const startYear = 2022;
  const thisYear = new Date().getFullYear();
  const workExperience = thisYear - startYear;
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      let { data: projects, error: projectsError } = await supabase
        .from("projects")
        .select("*");
      setProjects(projects);
    };
    fetchProjects();
  }, []);

  return (
    <section
      className="relative overflow-hidden px-0 py-[68px] small:pb-0"
      id="home"
    >
      <div className="m-auto max-w-[1130px] px-8 py-0 tablet:max-w-[650px] small:px-5">
        <div className="relative z-[3] ml-auto w-full max-w-[770px] tablet:max-w-full">
          <div>
            <h4 className="m-0 mb-14 inline-flex items-center gap-1 rounded-[30px] border border-zinc-600 px-5 py-2 text-xs font-light uppercase text-white">
              <IconHome className="mx-auto -ml-1" strokeWidth="1.8" size={16} />
              <span>Introduce</span>
            </h4>
            <h1 className="mb-11 font-oswald text-[100px] font-normal leading-[100px] -tracking-[0.2px] text-white mobile:text-[70px] mobile:leading-[1] small:text-[60px]">
              Say Hi from <span className="text-theme">Ali</span>, <br /> Front
              End and Web Developer
            </h1>
          </div>
          <p className="mb-8 max-w-[650px] text-justify leading-8 tablet:max-w-full">
            Hello, and welcome to my portfolio! I'm dedicated to creating
            cutting-edge web experiences that blend creativity with seamless
            functionality. With a strong foundation in React, I thrive on
            tackling complex challenges and bringing visions to fruition.
            Explore my work below and let's collaborate on your next digital
            masterpiece!
          </p>
          <a
            href="#"
            className="relative ml-auto mr-4 flex h-44 w-44 items-center justify-center overflow-hidden rounded-full border border-zinc-600 mobile:ml-0"
          >
            <img className="my-projects block" src="round-text.png" />
            <IconArrowDown
              className="absolute block text-white"
              width="40px"
              height="40px"
            />
          </a>
          <div className="mt-14 flex gap-24 small:gap-5">
            <div>
              <h1 className="mb-9 font-oswald text-7xl font-normal leading-[56px] -tracking-[0.2px] text-theme mobile:text-[52px] small:mb-6 small:text-5xl">
                {workExperience}+
              </h1>
              <p className="text-sm uppercase leading-6">
                Years of <br /> experience
              </p>
            </div>
            <div>
              <h1 className="mb-9 font-oswald text-7xl font-normal leading-[56px] -tracking-[0.2px] text-theme mobile:text-[52px] small:mb-6 small:text-5xl">
                {projects.length}+
              </h1>
              <p className="text-sm uppercase leading-6">
                Projects completed on <br /> 1 country
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
