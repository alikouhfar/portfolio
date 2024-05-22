import { IconCode } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";
import Card from "./Project";
import { projects } from "../../data/projects";

export default function Projects() {
  const { language } = useLanguage();
  const { t } = useTranslation();

  return (
    <section
      className="overflow-hidden py-[60px] font-poppins tablet:pb-[40px]"
      id="projects"
    >
      <div className="m-auto max-w-[1130px] px-8 py-0 tablet:max-w-[650px]">
        <div className="ml-auto w-full max-w-[770px] tablet:max-w-full">
          <div>
            <h4
              className={`m-0 mb-14 inline-flex items-center rounded-[30px] border border-zinc-600 px-5 py-2 text-xs font-light uppercase text-white ${language === "en" ? "gap-1" : "gap-2"}`}
            >
              <IconCode className="mx-auto -ml-1" strokeWidth="1.8" size={16} />
              <span>{t("projects.tag")}</span>
            </h4>
            <h1 className="mb-8 font-oswald text-6xl font-normal leading-[60px] text-white mobile:text-[58px] small:text-[44px] small:leading-[1]">
              {t("projects.titlePartOne")}
              <span className="text-theme"> {t("projects.titlePartTwo")}</span>
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-16">
            {projects.map((project, index) => (
              <Card language={language} project={project} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
