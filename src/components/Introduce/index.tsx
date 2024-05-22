import { IconArrowDown, IconHome } from "@tabler/icons-react";
import "./style.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";

export default function Introduce() {
  const startYear = 2022;
  const thisYear = new Date().getFullYear();
  const workExperience = thisYear - startYear;
  // const [projects, setProjects] = useState([]);
  const projects = [1, 2, 3, 4];
  const { language } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {}, []);

  return (
    <section
      className="small:pb-0 relative overflow-hidden px-0 py-[68px]"
      id="introduce"
    >
      <div className="tablet:max-w-[650px] small:px-5 m-auto max-w-[1130px] px-8 py-0">
        <div className="tablet:max-w-full relative z-[3] ml-auto w-full max-w-[770px]">
          <div>
            <h4
              className={`m-0 mb-14 inline-flex items-center rounded-[30px] border border-zinc-600 px-5 py-2 text-xs font-light uppercase text-white ${language === "en" ? "gap-1" : "gap-2"}`}
            >
              <IconHome className="mx-auto -ml-1" strokeWidth="1.8" size={16} />
              <span>{t("introduce.tag")}</span>
            </h4>
            <h1 className="font-oswald mobile:text-[70px] mobile:leading-[1] small:text-[60px] mb-11 text-[100px] font-normal leading-[100px] -tracking-[0.2px] text-white">
              {t("introduce.titlePartOne")}
              <span className="text-theme">{t("introduce.name")}</span>
              <br />
              {t("introduce.titlePartTwo")}
            </h1>
          </div>
          <p className="tablet:max-w-full mb-8 max-w-[650px] text-justify leading-8">
            {t("introduce.body")}
          </p>
          <a
            href="#projects"
            className={`mobile:ml-0 relative flex h-44 w-44 items-center justify-center overflow-hidden rounded-full border border-zinc-600 ${language === "en" ? "ml-auto mr-4" : "ml-4 mr-auto"}`}
          >
            <img className="my-projects block" src="round-text.png" />
            <IconArrowDown
              className="absolute block text-white"
              width="40px"
              height="40px"
            />
          </a>
          <div className="small:gap-5 mt-14 flex gap-24">
            <div>
              <h1 className="font-oswald text-theme mobile:text-[52px] small:mb-6 small:text-5xl mb-9 text-7xl font-normal leading-[56px] -tracking-[0.2px]">
                {workExperience}+
              </h1>
              <p className="max-w-24 text-sm uppercase leading-6">
                {t("introduce.experience")}
              </p>
            </div>
            <div>
              <h1 className="font-oswald text-theme mobile:text-[52px] small:mb-6 small:text-5xl mb-9 text-7xl font-normal leading-[56px] -tracking-[0.2px]">
                {projects.length}+
              </h1>
              <p className="max-w-44 text-sm uppercase leading-6">
                {t("introduce.projects")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
