import { IconVip } from "@tabler/icons-react";
import Card from "./Service";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";

export default function Services() {
  const [services, setServices] = useState([]);
  const { language } = useLanguage();
  const { t } = useTranslation();
  useEffect(() => {}, []);
  return (
    <section
      className="tablet:pb-[40px] overflow-hidden py-[60px]"
      id="services"
    >
      <div className="tablet:max-w-[650px] m-auto max-w-[1130px] px-8 py-0">
        <div className="tablet:max-w-full ml-auto w-full max-w-[770px]">
          <div>
            <h4
              className={`m-0 mb-14 inline-flex items-center rounded-[30px] border border-zinc-600 px-5 py-2 text-xs font-light uppercase text-white ${language === "en" ? "gap-1" : "gap-2"}`}
            >
              <IconVip className="mx-auto -ml-1" strokeWidth="1.8" size={16} />
              <span>{t("services.tag")}</span>
            </h4>
            <h1 className="font-oswald mobile:text-[58px] small:text-[44px] small:leading-[1] mb-8 text-6xl font-normal leading-[60px] text-white">
              {t("services.titlePartOne")}{" "}
              <span className="text-theme break-words">
                {t("services.titlePartTwo")}
              </span>
            </h1>
          </div>
          <div className="tablet:grid-cols-2 tablet:gap-4 small:grid-cols-1 grid grid-cols-1">
            {/** Service Cards **/}
            {services.map((service, index) => (
              <Card language={language} service={service} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
