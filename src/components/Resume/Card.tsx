import { useLanguage } from "../../context/LanguageContext";
import { Record } from "../../interfaces/record.interface";

interface Props {
  record: Record;
}

export default function Card({ record }: Props) {
  const { language } = useLanguage();

  const locale = language === "en" ? "en-US" : "fa-IR";
  const generateLocalYear = (year: number) => {
    const localYear = new Intl.DateTimeFormat(locale, {
      year: "numeric",
    }).format(new Date().setFullYear(language === "en" ? year : year + 1));
    return localYear;
  };

  return (
    <div
      className={`relative -mt-1.5 pb-[68px] before:absolute before:top-1 before:z-[1] before:h-3 before:w-3 before:rounded-full before:bg-zinc-500 before:transition-all before:content-[''] after:absolute after:top-2.5 after:h-resume-timeline after:w-[0.5px] after:bg-zinc-700 after:content-[''] last:pb-0 first-of-type:mt-0 hover:before:bg-theme small:pl-[50px] ${language === "en" ? "pl-[74px] before:-left-1.5 after:left-0" : "pr-[74px] before:-right-1.5 after:right-0"}`}
    >
      <span className="mb-7 block transition-all">
        {generateLocalYear(record.start)} -{" "}
        {record.end
          ? generateLocalYear(record.end)
          : language === "en"
            ? " Present"
            : " تاکنون"}
      </span>
      <h2
        className={`mb-[5px] text-2xl text-white ${language === "en" ? "font-light" : "font-medium"}`}
      >
        {record.title[language]}
      </h2>
      <p className="mb-[18px] text-sm text-zinc-500">
        {record.institution[language]}
      </p>
    </div>
  );
}
