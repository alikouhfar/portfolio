import { IconLanguage } from "@tabler/icons-react";
import { useLanguage } from "../../../context/LanguageContext";

export default function ({ data }) {
  const { language } = useLanguage();
  const rating = new Array(5).fill(null);
  let mastery;
  switch (data.mastery) {
    case 1:
      if (language === "en") {
        mastery = "Beginner";
      } else {
        mastery = "مبتدی";
      }
      break;
    case 2:
      if (language === "en") {
        mastery = "Intermediate";
      } else {
        mastery = "متوسط";
      }
      break;
    case 3:
      if (language === "en") {
        mastery = "متوسط به بالا";
      } else {
        mastery = "";
      }
      break;
    case 4:
      if (language === "en") {
        mastery = "Advanced";
      } else {
        mastery = "پیشرفته";
      }
      break;
    case 5:
      if (language === "en") {
        mastery = "Native";
      } else {
        mastery = "مادرزادی";
      }
  }
  return (
    <div className="relative mb-3 rounded-3xl border border-zinc-600 px-12 pb-10 pt-11 transition-all hover:border-theme">
      <IconLanguage
        className={`absolute top-11 text-theme ${language === "en" ? "right-12" : "left-12"}`}
        size={30}
      />
      <div className="flex items-center gap-4 tablet:flex-col tablet:items-start tablet:gap-1">
        <h2 className="text-2xl font-light text-white">
          {data.title[language]}
        </h2>
        <div className="flex gap-2">
          {rating.slice(0, data.mastery).map((_, index) => (
            <div className="h-3 w-3 rounded-full bg-theme" key={index}></div>
          ))}
          {rating.slice(data.mastery).map((_, index) => (
            <div className="h-3 w-3 rounded-full bg-zinc-600" key={index}></div>
          ))}
        </div>
      </div>
      <span className="inline-block text-xs uppercase text-theme tablet:mt-6">
        {mastery}
      </span>
    </div>
  );
}
