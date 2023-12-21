import ProjectCard from "./ProjectCard";
import ReactCurvedText from "react-curved-text";
import { IconArrowsMaximize } from "@tabler/icons-react";
import { projects } from "../../data/projects";
import Tag from "../Shared/Tag";
import Section from "../Shared/Section";

export default function Project() {
  return (
    <Section id="project" isColored={true}>
      <div className="relative">
        <Tag>Project</Tag>
        <div
          className="xl:grid gap-x-5 w-full"
          style={{
            gridTemplateColumns: "repeat(3,calc(calc(100% - 40px) / 3))",
            gridTemplateRows: "repeat(7,90px)",
          }}
        >
          <h2 className="text-5xl md:text-7xl font-semibold lg:row-start-1 lg:row-end-3 lg:col-start-1">
            Latest Projects
          </h2>
          <div className="mt-10 xl:mt-0 lg:row-start-2 lg:col-start-2">
            <ProjectCard project={projects?.at(2)} />
          </div>
          <div className="lg:row-start-1 lg:row-end-3">
            <ProjectCard project={projects?.at(1)} />
          </div>
          <div className="row-start-3 lg:row-end-5 lg:col-start-1">
            <ProjectCard project={projects?.at(0)} />
          </div>
          <div className="relative mt-3.5 mb-4 mx-auto md:mx-0 md:ml-auto w-fit h-fit lg:row-start-6 lg:row-end-[8] lg:col-start-3">
            <ReactCurvedText
              width={180}
              height={180}
              cx={90}
              cy={89}
              rx={46}
              ry={46}
              startOffset={0}
              reversed={true}
              text="View all Projects.View all Projects.View all Projects."
              textProps={{
                style: {
                  fontSize: 12,
                  fontWeight: 550,
                  letterSpacing: "0.14px",
                  color: "#27272a",
                },
              }}
              textPathProps={null}
              tspanProps={{ dy: "-20" }}
              ellipseProps={null}
              svgProps={{
                style: {
                  transform: "rotate(-2deg)",
                  border: "2px solid #27272a",
                  borderRadius: "100%",
                },
              }}
            />
            <button
              className="absolute flex items-center justify-center rounded-full border-2 border-zinc-800 bg-inherit text-purple-600 pt-1 rotate-45 hover:bg-purple-600 hover:text-zinc-100 cursor-pointer transition-all"
              style={{
                right: "50%",
                top: "50%",
                transform: "translate(50%, -50%)",
                height: "110px",
                width: "110px",
              }}
            >
              <IconArrowsMaximize stroke={1.5} size={30} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
