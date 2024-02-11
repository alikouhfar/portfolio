import { IconUser } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";

export default function About() {
  const { language } = useLanguage();
  const { t } = useTranslation();
  return (
    <section
      className="overflow-hidden py-[60px] tablet:pb-[40px] small:pb-0"
      id="about"
    >
      <div className="m-auto max-w-[1130px] px-8 py-0 tablet:max-w-[650px]">
        <div className="ml-auto w-full max-w-[770px] tablet:max-w-full">
          <div>
            <h4
              className={`m-0 mb-14 inline-flex items-center rounded-[30px] border border-zinc-600 px-5 py-2 text-xs font-light uppercase text-white ${language === "en" ? "gap-1" : "gap-2"}`}
            >
              <IconUser className="mx-auto -ml-1" strokeWidth="1.8" size={16} />
              <span>{t("about.tag")}</span>
            </h4>
            <h1 className="mb-8 font-oswald text-6xl font-normal leading-[60px] text-white mobile:text-[58px] small:text-4xl small:text-[44px] small:leading-[1]">
              {t("about.title")}
              <span className="break-words text-theme">
                {t("about.important")}
              </span>
            </h1>
          </div>
          <p className="max-w-[650px] text-justify leading-8 tablet:max-w-full">
            {t("about.body")}
          </p>
        </div>
      </div>
    </section>
  );
}
