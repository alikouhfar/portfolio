export default function ({ resume }) {
  return (
    <div className="relative -mt-1.5 pb-[68px] pl-[74px] before:absolute before:-left-1.5 before:top-1 before:z-[1] before:h-3 before:w-3 before:rounded-full before:bg-zinc-500 before:transition-all before:content-[''] after:absolute after:left-0 after:top-2.5 after:h-resume-timeline after:w-[0.5px] after:bg-zinc-700 after:content-[''] last:pb-0 first-of-type:mt-0 hover:before:bg-theme small:pl-[50px]">
      <span className="mb-7 block transition-all">
        {resume.start} - {resume?.end || "Present"}
      </span>
      <h2 className="mb-[5px] text-2xl font-light text-white">
        {resume.title}
      </h2>
      <p className="mb-[18px] text-sm text-zinc-500">{resume.institute}</p>
    </div>
  );
}
