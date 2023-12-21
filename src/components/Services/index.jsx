import { IconArrowsMaximize } from "@tabler/icons-react";
import { services } from "../../data/services";
import ServiceCard from "./ServiceCard";
import ReactCurvedText from "react-curved-text";
import Tag from "../Shared/Tag";
import Section from "../Shared/Section";

export default function Services() {
  return (
    <Section id="service" isColored={true}>
      <div className="relative">
        <Tag>Service</Tag>
        <div className="flex flex-col xl:flex-row justify-between sm:gap-10 xl:gap-52">
          <div className="flex flex-col sm:flex-row xl:flex-col justify-between flex-1 gap-5">
            <div className="flex justify-between sm:justify-normal flex-col gap-8">
              <h2 className="text-5xl md:text-7xl font-semibold">
                Services | Offers
              </h2>
              <div className="flex gap-5 items-start">
                <span className="block w-8 border-t-zinc-700 border-t-2 mt-2"></span>
                <p className="text-base w-full text-zinc-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="relative my-10 sm:my-0 w-fit h-fit mx-auto xl:mx-0">
              <ReactCurvedText
                width={180}
                height={180}
                cx={90}
                cy={89}
                rx={46}
                ry={46}
                startOffset={0}
                reversed={true}
                text="View all services i offer.View all services i offer."
                textProps={{
                  style: {
                    fontSize: 12,
                    fontWeight: 550,
                    letterSpacing: "0.4px",
                  },
                }}
                textPathProps={null}
                tspanProps={{ dy: "-20" }}
                ellipseProps={null}
                svgProps={{
                  style: {
                    transform: "rotate(-2deg)",
                    border: "2px solid #000",
                    borderRadius: "100%",
                  },
                }}
              />
              <button
                className="absolute flex items-center justify-center rounded-full border-2 border-zinc-800 bg-inherit text-purple-600 pt-1 rotate-45 hover:bg-purple-600 hover:text-zinc-100 cursor-pointer transition-all"
                style={{
                  right: "50%",
                  top: "50%",
                  transform: "translate(50%,-50%)",
                  height: "110px",
                  width: "110px",
                }}
              >
                <IconArrowsMaximize stroke={1.5} size={30} />
              </button>
            </div>
          </div>
          <div style={{ flex: "1.4" }}>
            {services.map((service, index) => (
              <ServiceCard service={service} count={index + 1} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
