import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitterFilled,
  IconMail,
} from "@tabler/icons-react";
import { useLanguage } from "../../context/LanguageContext";
import { useTranslation } from "react-i18next";

export default function Sidebar() {
  const { language } = useLanguage();
  const { t } = useTranslation();

  const locale = language === "en" ? "en-US" : "fa-IR";
  const currentYear = new Intl.DateTimeFormat(locale, {
    year: "numeric",
  }).format(Date.now());

  return (
    <div className="px-8 small:px-5">
      <div className="w-100 fixed left-5 top-1/2 z-10 max-w-[485px] -translate-y-1/2 rounded-[30px] border border-zinc-600 p-[30px] large:max-w-[400px] laptop:max-w-[350px] tablet:relative tablet:left-0 tablet:top-0 tablet:m-auto tablet:mt-5 tablet:block tablet:max-w-[650px] tablet:translate-y-0">
        <div className="mb-[65px] flex items-center justify-between large:mb-[30px] small:flex-col small:items-start small:gap-1">
          <img
            className=" max-w-48"
            style={{ filter: "contrast(0) brightness(2)" }}
            src="/logo.png"
            alt="Logo"
          />
          <span
            className={`max-w-[110px] text-sm font-normal text-white laptop:leading-[1.4] ${language !== "en" ? "text-left small:text-right" : "text-right small:text-left"}`}
          >
            {t("job")}
          </span>
        </div>
        <img
          className="mb-14 block rounded-[30px] laptop:mx-auto laptop:mb-[46px] laptop:w-full laptop:max-w-[250px]"
          src="/portrait.jpg"
          alt="Me"
        />
        <h2 className="break-words text-center text-2xl font-light text-white">
          alikouhfr@gmail.com
        </h2>
        <h2 className="mb-[30px] text-center text-2xl font-light text-white">
          {t("basedIn")}
        </h2>
        <p className="mb-[45px] text-center text-sm text-zinc-500 large:mb-[25px]">
          &copy; {currentYear} - {t("copyRight")}
        </p>
        <ul className="mb-[118px] flex flex-wrap items-center justify-center gap-2 large:mb-[30px]">
          <li>
            <a
              className="social-icon"
              href="https://github.com/alikouhfar"
              target="_blank"
            >
              <IconBrandGithub size={20} />
            </a>
          </li>
          <li>
            <a
              className="social-icon"
              href="https://www.linkedin.com/in/alikouhfr"
              target="_blank"
            >
              <IconBrandLinkedin size={20} />
            </a>
          </li>
          <li>
            <a
              className="social-icon"
              href="https://www.instagram.com/alikouhfr"
              target="_blank"
            >
              <IconBrandInstagram size={20} />
            </a>
          </li>
          <li>
            <a
              className="social-icon"
              href="https://twitter.com/alikouhfr"
              target="_blank"
            >
              <IconBrandTwitterFilled size={18} />
            </a>
          </li>
        </ul>
        <a
          href="block"
          className="inline-flex w-full cursor-pointer items-center justify-center gap-1 rounded-[30px] border-2 border-theme bg-theme px-[58px] py-[11px] text-center uppercase text-zinc-900 transition-all hover:bg-transparent hover:text-theme"
        >
          <IconMail strokeWidth="2px" />
          <span className="text-nowrap font-medium">{t("hire")}</span>
        </a>
      </div>
    </div>
  );
}
