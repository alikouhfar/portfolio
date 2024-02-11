import { IconCurrencyDollar } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";
import Card from "./Card";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";

export default function Pricing() {
  const [pricings, setPricings] = useState([]);
  const { language } = useLanguage();
  const { t } = useTranslation();
  useEffect(() => {
    const fetchPricings = async () => {
      let { data: pricings, error: pricingsError } = await supabase
        .from("pricings")
        .select("*");
      setPricings(pricings);
    };
    fetchPricings();
  }, []);
  return (
    <section
      className="overflow-hidden py-[60px] tablet:pb-[40px]"
      id="pricing"
    >
      <div className="m-auto max-w-[1130px] px-8 py-0 tablet:max-w-[650px]">
        <div className="ml-auto w-full max-w-[770px] tablet:max-w-full">
          <div>
            <h4
              className={`m-0 mb-14 inline-flex items-center rounded-[30px] border border-zinc-600 px-5 py-2 text-xs font-light uppercase text-white ${language === "en" ? "gap-1" : "gap-2"}`}
            >
              <IconCurrencyDollar
                className="mx-auto -ml-1"
                strokeWidth="1.8"
                size={16}
              />
              <span>{t("pricing.tag")}</span>
            </h4>
            <h1 className="mb-8 font-oswald text-6xl font-normal leading-[60px] text-white mobile:text-[58px] small:text-[44px] small:leading-[1]">
              {t("pricing.titlePartOne")}
              <span className="text-theme"> {t("pricing.titlePartTwo")}</span>
            </h1>
            <div>
              <div className="grid grid-cols-2 gap-x-5 mobile:gap-y-4">
                {pricings.map((pricing, index) => (
                  <Card language={language} pricing={pricing} key={index} />
                ))}
              </div>
              <div className="mt-16 text-sm leading-6 text-white">
                <span>{t("pricing.noMatch")}</span>
                <div>
                  <span>{t("pricing.newPlan")}</span>
                  <a
                    href="#contact"
                    className={`text-theme underline ${language === "en" ? "ml-2" : "mr-2"}`}
                  >
                    {t("pricing.contact")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
