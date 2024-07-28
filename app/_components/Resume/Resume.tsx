import { education } from "@/app/_lib/education";
import { experience } from "@/app/_lib/experience";
import { jost } from "@/app/_ui/fonts";
import ResumeRecords from "./ResumeRecords";

export default function Resume() {
  return (
    <div
      className={`${jost.className} relative flex w-full flex-wrap justify-center p-3 pb-14 antialiased`}
    >
      <div className="flex flex-col gap-14 md:flex-row md:gap-0">
        <ResumeRecords title="Education" records={education} />
        <ResumeRecords title="Experience" records={experience} />
      </div>
    </div>
  );
}
