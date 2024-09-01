import { education } from "@/app/_lib/education";
import { experience } from "@/app/_lib/experience";
import ResumeRecords from "./ResumeRecords";
import { FC } from "react";
import VerticalLine from "../VerticalLine";

const Resume: FC = () => {
  return (
    <div className="relative flex w-full flex-wrap justify-center p-3 pb-14">
      <div className="flex flex-col gap-14 md:flex-row md:gap-0">
        <ResumeRecords title="Education" records={education} />
        <ResumeRecords title="Experience" records={experience} />
      </div>
      <VerticalLine
        linePosition="left-0"
        imagePosition="-right-5 md:-right-12"
      />
    </div>
  );
};

export default Resume;
