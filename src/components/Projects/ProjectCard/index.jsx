import { IconArrowUpRight } from "@tabler/icons-react";

export default function ({ project }) {
  return (
    <div className="flex flex-col gap-5 border-t-zinc-700 border-t-2 py-5">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="flex flex-[0.94]">
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <h3 className="font-semibold text-3xl leading-tight">
              {project.title}
            </h3>
            <p className="text-base text-zinc-700">{project.type}</p>
          </div>
        </div>
        <button className="flex items-center justify-center leading-none p-1 border-none gap-1 mr-3 bg-purple-600 text-zinc-50 h-12 w-12 rounded-full self-start text-base hover:bg-purple-700 transition-all">
          <IconArrowUpRight stroke={1.5} />
        </button>
      </div>
      <div className="w-full bg-purple-600" style={{ height: "300px" }}></div>
    </div>
  );
}
