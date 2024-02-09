import { IconLanguage } from "@tabler/icons-react";

export default function ({ language }) {
  const rating = new Array(5).fill(null);
  let mastery;
  switch (language.mastery) {
    case 1:
      mastery = "Beginner";
      break;
    case 2:
      mastery = "Intermediate";
      break;
    case 3:
      mastery = "Upper Intermediate";
      break;
    case 4:
      mastery = "Advanced";
      break;
    case 5:
      mastery = "Native";
  }
  return (
    <div className="relative mb-3 rounded-3xl border border-zinc-600 px-12 pb-10 pt-11 transition-all hover:border-theme">
      <IconLanguage className="absolute right-12 top-11 text-theme" size={30} />
      <div className="flex items-center gap-4 tablet:flex-col tablet:items-start tablet:gap-1">
        <h2 className="text-2xl font-light text-white">{language.title}</h2>
        <div className="flex gap-2">
          {rating.slice(0, language.mastery).map((_, index) => (
            <div className="h-3 w-3 rounded-full bg-theme" key={index}></div>
          ))}
          {rating.slice(language.mastery).map((_, index) => (
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
