import { IconCloudUp, IconPhoneCall } from "@tabler/icons-react";

import "./style.css";
import { useLanguage } from "../../context/LanguageContext";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { language } = useLanguage();
  const { t } = useTranslation();
  return (
    <section
      className="overflow-hidden py-[60px] tablet:pb-[40px]"
      id="contact"
    >
      <div className="m-auto max-w-[1130px] px-8 py-0 tablet:max-w-[650px]">
        <div className="ml-auto w-full max-w-[770px] tablet:max-w-full">
          <div>
            <h4
              className={`m-0 mb-14 inline-flex items-center rounded-[30px] border border-zinc-600 px-5 py-2 text-xs font-light uppercase text-white ${language === "en" ? "gap-1" : "gap-2"}`}
            >
              <IconPhoneCall
                className="mx-auto -ml-1"
                strokeWidth="1.8"
                size={16}
              />
              <span>{t("contact.tag")}</span>
            </h4>
            <h1 className="mb-8 font-oswald text-6xl font-normal leading-[60px] text-white mobile:text-[58px] small:text-[44px] small:leading-[1]">
              {t("contact.titlePartOne")}
              <span className="text-theme"> {t("contact.titlePartTwo")}</span>
            </h1>
            <p className="mb-8 hidden text-sm text-red-600">
              * Marked fields are required to fill.
            </p>
            <form method="POST">
              <div className="relative mb-5 hidden rounded-lg border border-green-600 p-4 text-green-600">
                Your message was sent successfully.
              </div>
              <div className="grid grid-cols-2 gap-x-5 gap-y-10">
                <div className="mobile:col-span-2">
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <label className="mb-0.5 block text-xs uppercase text-white">
                      {t("contact.name.title")}
                      <sup
                        className={`top-0 text-xs text-red-600 ${language === "en" ? "left-1" : "right-1"}`}
                      >
                        *
                      </sup>
                    </label>
                    <input
                      type="text"
                      placeholder={t("contact.name.placeholder")}
                      className="text-md mt-2 block h-12 w-full rounded-md border-none bg-zinc-800 p-3 font-light text-white transition-all placeholder:text-zinc-500"
                    />
                  </div>
                </div>
                <div className="mobile:col-span-2">
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <label className="mb-0.5 block text-xs uppercase text-white">
                      {t("contact.email.title")}
                      <sup
                        className={`top-0 text-xs text-red-600 ${language === "en" ? "left-1" : "right-1"}`}
                      >
                        *
                      </sup>
                    </label>
                    <input
                      type="text"
                      placeholder={t("contact.email.placeholder")}
                      className="text-md mt-2 block h-12 w-full rounded-md border-none bg-zinc-800 p-3 font-light text-white transition-all placeholder:text-zinc-500"
                    />
                  </div>
                </div>
                <div className="mobile:col-span-2">
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <label className="mb-0.5 block text-xs uppercase text-white">
                      {t("contact.phone.title")}
                      <sup
                        className={`top-0 text-[10px] text-zinc-500 ${language === "en" ? "left-1" : "right-1"}`}
                      >
                        ({t("contact.optional")})
                      </sup>
                    </label>
                    <input
                      type="tel"
                      dir={language !== "en" ? "rtl" : "ltr"}
                      placeholder={t("contact.phone.placeholder")}
                      className="text-md mt-2 block h-12 w-full rounded-md border-none bg-zinc-800 p-3 font-light text-white transition-all placeholder:text-zinc-500"
                    />
                  </div>
                </div>
                <div className="mobile:col-span-2">
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <label className="mb-0.5 block text-xs uppercase text-white">
                      {t("contact.subject.title")}
                      <sup
                        className={`top-0 text-xs text-red-600 ${language === "en" ? "left-1" : "right-1"}`}
                      >
                        *
                      </sup>
                    </label>
                    <select className="text-md -ml-1 mt-2 block h-12 w-full rounded-md border-none bg-zinc-800 p-3 font-light text-white transition-all placeholder:text-zinc-500">
                      <option defaultValue>
                        {t("contact.subject.defaultSubject")}
                      </option>
                      <option>{t("contact.subject.subjectOne")}</option>
                      <option>{t("contact.subject.subjectTwo")}</option>
                      <option>{t("contact.subject.subjectThree")}</option>
                      <option>{t("contact.subject.subjectFour")}</option>
                      <option>{t("contact.subject.subjectFive")}</option>
                      <option>{t("contact.subject.subjectSix")}</option>
                    </select>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <label className="mb-0.5 block text-xs uppercase text-white">
                      {t("contact.budget.title")}
                      <sup
                        className={`top-0 text-[10px] text-zinc-500 ${language === "en" ? "left-1" : "right-1"}`}
                      >
                        ({t("contact.optional")})
                      </sup>
                    </label>
                    <input
                      type="number"
                      placeholder={t("contact.budget.placeholder")}
                      className="text-md mt-2 block h-12 w-full rounded-md border-none bg-zinc-800 p-3 font-light text-white transition-all placeholder:text-zinc-500"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <label className="mb-0.5 block text-xs uppercase text-white">
                      {t("contact.message.title")}
                    </label>
                    <textarea
                      type="number"
                      placeholder={t("contact.message.placeholder")}
                      rows="8"
                      className="text-md mt-2 block w-full rounded-md border-none bg-zinc-800 p-3 font-light text-white transition-all placeholder:text-zinc-500"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <div>
                      <label className="mb-0.5 inline-flex items-center gap-2 overflow-hidden text-xs uppercase text-white">
                        <IconCloudUp
                          className="mx-auto"
                          strokeWidth="1.8"
                          size={16}
                        />
                        <span className="z-10">{t("contact.attachment")}</span>
                        <input
                          type="file"
                          className={`absolute text-zinc-500 ${language === "en" ? "left-40" : "right-40"}`}
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <button
                      className="inline-flex cursor-pointer items-center justify-center rounded-[30px] border-2 border-theme bg-theme px-14 py-3 text-center font-medium uppercase text-zinc-900 transition-all hover:border-theme hover:bg-transparent hover:text-theme"
                      type="submit"
                    >
                      {t("contact.send")}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
