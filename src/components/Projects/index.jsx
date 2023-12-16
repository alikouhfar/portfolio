import ProjectCard from "./ProjectCard";
import ReactCurvedText from "react-curved-text";
import { IconArrowsMaximize } from "@tabler/icons-react";
import { projects } from "../../data/projects";
import Tag from "../Shared/Tag";
import Section from "../Shared/Section";

export default function () {
  return (
    <Section id="project" isColored={true}>
      <div className="relative">
        <Tag>Project</Tag>
        <div
          className="grid gap-x-5 w-full"
          style={{
            gridTemplateColumns: "repeat(3,calc(calc(100% - 40px) / 3))",
            gridTemplateRows: "repeat(7,90px)",
          }}
        >
          <h2
            className="text-7xl font-semibold"
            style={{ gridRowStart: "1", gridRowEnd: "3", gridColumnStart: "1" }}
          >
            Latest Projects
          </h2>
          <div
            style={{
              gridRowStart: "2",
              gridColumnStart: "2",
            }}
          >
            <ProjectCard project={projects?.at(2)} />
          </div>
          <div
            style={{
              gridRowStart: "1",
              gridColumnStart: "3",
            }}
          >
            <ProjectCard project={projects?.at(1)} />
          </div>
          <div
            style={{ gridRowStart: "3", gridRowEnd: "5", gridColumnStart: "1" }}
          >
            <ProjectCard project={projects?.at(0)} />
          </div>
          <div
            className="relative mt-3.5 mb-4 ml-auto"
            style={{
              gridRowStart: "6",
              gridRowEnd: "8",
              gridColumnStart: "3",
            }}
          >
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
                transform: "translate(50%, -36%)",
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
