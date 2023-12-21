export default function ({ experience }) {
  return (
    <li className="flex flex-col md:flex-row border-t-2 border-zinc-700 py-6 md:gap-8">
      <p className="font-medium text-xs md:text-sm flex-[0.4]">
        {experience.duration.start} - {experience.duration.end || "Present"}
      </p>
      <div className="flex flex-col flex-[2]">
        <h3 className="font-semibold text-base md:text-lg">
          {experience.title}
        </h3>
        <div className="flex gap-1 items-center">
          <small className="text-zinc-600 text-xs">{experience.company}</small>
          {experience.country}
        </div>
      </div>
    </li>
  );
}
