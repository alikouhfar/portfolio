import { IconBrush, IconCode } from "@tabler/icons-react";

export default function Card({ service }) {
  return (
    <div className="relative mb-3 rounded-3xl border border-zinc-600 px-12 pb-10 pt-11 transition-all hover:border-theme tablet:mb-0 tablet:p-6">
      {service.tag === "development" ? (
        <IconCode
          className="absolute right-12 top-11 text-theme tablet:right-5 tablet:top-6 tablet:scale-75 tablet:text-xl"
          size={30}
        />
      ) : (
        <IconBrush
          className="absolute right-12 top-11 text-theme tablet:right-5 tablet:top-6 tablet:scale-75 tablet:text-xl"
          size={30}
        />
      )}
      <h2 className="mb-2 text-2xl font-light text-white tablet:mb-3 tablet:text-xl">
        {service.title}
      </h2>
      <p className="mb-7 text-sm text-zinc-500 tablet:mb-6">{service.body}</p>
      <span className="inline-block text-xs uppercase text-white">
        {service.count} Projects
      </span>
    </div>
  );
}
