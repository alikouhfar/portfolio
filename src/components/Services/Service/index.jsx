import { IconBrush, IconCode } from "@tabler/icons-react";

export default function Card({ language, service }) {
  return (
    <div className="relative mb-3 rounded-3xl border border-zinc-600 px-12 pb-10 pt-11 transition-all hover:border-theme tablet:mb-0 tablet:p-6">
      {service.tag === "development" ? (
        <IconCode
          className={`absolute top-11 text-theme tablet:top-6 tablet:scale-75 tablet:text-xl ${language === "en" ? "right-12 tablet:right-5" : "left-12 tablet:left-5"}`}
          size={30}
        />
      ) : (
        <IconBrush
          className={`absolute top-11 text-theme tablet:top-6 tablet:scale-75 tablet:text-xl ${language === "en" ? "right-12 tablet:right-5" : "left-12 tablet:left-5"}`}
          size={30}
        />
      )}
      <h2 className="mb-2 text-2xl text-white tablet:mb-3 tablet:text-xl">
        {service.title[language]}
      </h2>
      <p className="mb-7 text-sm text-zinc-500 tablet:mb-6">
        {service.body[language]}
      </p>
      <span className="inline-block text-xs uppercase text-theme">
        {service.count} {language === "en" ? "Projects" : "پروژه"}
      </span>
    </div>
  );
}
