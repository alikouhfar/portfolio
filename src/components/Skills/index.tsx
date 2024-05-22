import { IconStarsFilled } from "@tabler/icons-react";
import { useLanguage } from "../../context/LanguageContext";
import { useTranslation } from "react-i18next";
import Coding from "./Coding";
import LanguageCard from "./Language";
import { skills } from "../../data/skills";
import { languages } from "../../data/languages";

export default function Skills() {
  const { language } = useLanguage();
  const { t } = useTranslation();
  return (
    <section className="overflow-hidden py-[60px] tablet:pb-[40px]" id="skills">
      <div className="m-auto max-w-[1130px] px-8 py-0 tablet:max-w-[650px]">
        <div className="ml-auto w-full max-w-[770px] tablet:max-w-full">
          <div>
            <h4
              className={`m-0 mb-14 inline-flex items-center rounded-[30px] border border-zinc-600 px-5 py-2 text-xs font-light uppercase text-white ${language === "en" ? "gap-1" : "gap-2"}`}
            >
              <IconStarsFilled
                className="mx-auto -ml-1"
                strokeWidth="1.8"
                size={16}
              />
              <span>{t("skills.tag")}</span>
            </h4>
          </div>
          <div>
            <h1 className="mb-8 font-oswald text-6xl font-normal leading-[60px] text-white mobile:text-[58px] small:text-[44px] small:leading-[1]">
              <span className="text-theme">{t("skills.coding")}</span>
            </h1>
            {/** Coding Skill Cards **/}
            <div className="grid grid-cols-4 gap-5 text-center mobile:grid-cols-3 mobile:gap-x-8 small:grid-cols-2 small:gap-x-4 small:gap-y-0">
              {skills.map((skill, index) => (
                <Coding skill={skill} key={index} />
              ))}
            </div>
          </div>
          <div>
            <h1 className="mb-8 mt-20 font-oswald text-6xl font-normal leading-[60px] text-white mobile:text-[58px] small:text-[44px] small:leading-[1]">
              <span className="text-theme">{t("skills.languages")}</span>
            </h1>
            {/** Language Skill Cards **/}
            <div className="grid grid-cols-2 gap-5 small:grid-cols-1">
              {languages.map((language, index) => (
                <LanguageCard data={language} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
