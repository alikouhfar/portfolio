import { education } from "@/app/_lib/education";
import { experience } from "@/app/_lib/experience";
import ResumeRecords from "./ResumeRecords";
import { FC } from "react";

const Resume: FC = () => {
  return (
    <div className="relative flex w-full flex-wrap justify-center p-3 pb-14">
      <div className="flex flex-col gap-14 md:flex-row md:gap-0">
        <ResumeRecords title="Education" records={education} />
        <ResumeRecords title="Experience" records={experience} />
      </div>
    </div>
  );
};

export default Resume;
