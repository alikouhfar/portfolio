import { IconBriefcase } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";
import Card from "./Card";
import { experiences } from "../../data/experiences";
import { educations } from "../../data/educations";

export default function Resume() {
  const { language } = useLanguage();
  const { t } = useTranslation();

  return (
    <section className="overflow-hidden py-[60px] tablet:pb-[40px]" id="resume">
      <div className="m-auto max-w-[1130px] px-8 py-0 tablet:max-w-[650px]">
        <div className="ml-auto w-full max-w-[770px] tablet:max-w-full">
          <div>
            <h4
              className={`m-0 mb-14 inline-flex items-center rounded-[30px] border border-zinc-600 px-5 py-2 text-xs font-light uppercase text-white ${language === "en" ? "gap-1" : "gap-2"}`}
            >
              <IconBriefcase
                className="mx-auto -ml-1"
                strokeWidth="1.8"
                size={16}
              />
              <span>{t("resume.tag")}</span>
            </h4>
          </div>
          <div>
            <h1 className="mb-8 font-oswald text-6xl font-normal leading-[60px] text-white mobile:text-[58px] small:text-[44px] small:leading-[1]">
              <span className="text-theme">{t("resume.experience")}</span>
            </h1>
            {/** Experience Cards **/}
            {experiences.map((experience, index) => (
              <Card record={experience} key={index} />
            ))}
          </div>
          <div>
            <h1 className="mb-8 mt-20 font-oswald text-6xl font-normal leading-[60px] text-white mobile:text-[58px] small:text-[44px] small:leading-[1]">
              <span className="text-theme">{t("resume.education")}</span>
            </h1>
            {/** Education Cards **/}
            {educations.map((education, index) => (
              <Card record={education} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
