import PropTypes from "prop-types";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function ProjectCard({ project }) {
  return (
    <div className="flex flex-col sm:flex-row xl:flex-col gap-5 border-t-zinc-700 border-t-2 py-5">
      <div className="flex justify-between sm:justify-normal sm:flex-col sm:gap-4 sm:flex-1 xl:flex-row">
        <div className="flex flex-[0.94] sm:flex-none xl:flex-1">
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <h3 className="font-semibold text-2xl md:text-3xl leading-tight">
              {project.title}
            </h3>
            <p className="text-sm md:text-base text-zinc-700">{project.type}</p>
          </div>
        </div>
        <button className="flex items-center justify-center leading-none p-1 border-none gap-1 mr-3 bg-purple-600 text-zinc-50 h-12 w-12 rounded-full self-start text-base hover:bg-purple-700 transition-all">
          <IconArrowUpRight stroke={1.5} />
        </button>
      </div>
      <div
        className="w-full bg-purple-600 sm:flex-[2] xl:flex-none"
        style={{ height: "300px" }}
      ></div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object,
  title: PropTypes.string,
  type: PropTypes.string,
  photo: PropTypes.string,
};
