import { IconBriefcase } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import Card from "./Card";
import { supabase } from "../../data/supabase";

export default function Resume() {
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    const fetchExperiences = async () => {
      let { data: experiences, error: experiencesError } = await supabase
        .from("experiences")
        .select("*");
      let { data: educations, error: educationsError } = await supabase
        .from("educations")
        .select("*");
      setExperiences(experiences);
      setEducations(educations);
    };
    fetchExperiences();
  }, []);
  return (
    <section className="overflow-hidden py-[60px] tablet:pb-[40px]" id="resume">
      <div className="m-auto max-w-[1130px] px-8 py-0 tablet:max-w-[650px]">
        <div className="ml-auto w-full max-w-[770px] tablet:max-w-full">
          <div>
            <h4 className="m-0 mb-14 inline-flex items-center gap-1 rounded-[30px] border border-zinc-600 px-5 py-2 text-xs font-light uppercase text-white">
              <IconBriefcase
                className="mx-auto -ml-1"
                strokeWidth="1.8"
                size={16}
              />
              <span>Resume</span>
            </h4>
          </div>
          <div>
            <h1 className="mb-8 font-oswald text-6xl font-normal leading-[60px] text-white mobile:text-[58px] small:text-[44px] small:leading-[1]">
              <span className="text-theme">Experience</span>
            </h1>
            {/** Experience Cards **/}
            {experiences.map((experience, index) => (
              <Card resume={experience} key={index} />
            ))}
          </div>
          <div>
            <h1 className="mb-8 mt-20 font-oswald text-6xl font-normal leading-[60px] text-white mobile:text-[58px] small:text-[44px] small:leading-[1]">
              <span className="text-theme">Education</span>
            </h1>
            {/** Education Cards **/}
            {educations.map((education, index) => (
              <Card resume={education} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
