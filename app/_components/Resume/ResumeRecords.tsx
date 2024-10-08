import { IResume } from "@/app/_models/resume.model";
import ResumeCard from "./ResumeCard";
import { FC } from "react";

interface IResumeRecordsProps {
  title: string;
  records: IResume[];
}

const ResumeRecords: FC<IResumeRecordsProps> = ({ title, records }) => {
  return (
    <div className="relative flex w-full flex-col p-5 lg:p-10">
      <h4 className="border-b-2 border-b-zinc-800 pb-8 text-center text-2xl font-bold text-zinc-800 transition duration-700 dark:border-zinc-100 dark:text-zinc-100">
        {title}
      </h4>
      {records.map((record, index) => (
        <ResumeCard key={index} record={record} id={index + 1} />
      ))}
    </div>
  );
};

export default ResumeRecords;
