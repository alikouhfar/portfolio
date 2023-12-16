import { IconArrowUpRight } from "@tabler/icons-react";

export default function ({ service, count }) {
  return (
    <div className="flex border-zinc-700 border-t-2 py-8 justify-between">
      <div className="flex">
        <span className="font-semibold text-lg mr-8">
          {String(count).padStart(2, 0)}/
        </span>
        <div className="flex flex-col" style={{ flex: "0.7" }}>
          <h3 className="text-4xl font-semibold leading-[1.1]">
            {service.title}
          </h3>
          <p className="text-sm font-medium my-4">{service.description}</p>
        </div>
      </div>
      <button className="flex items-center justify-center leading-none p-1 border-none gap-1 mr-3 bg-purple-600 text-zinc-50 h-12 w-12 rounded-full self-start text-base hover:bg-purple-700 transition-all">
        <IconArrowUpRight stroke={1.5} />
      </button>
    </div>
  );
}
