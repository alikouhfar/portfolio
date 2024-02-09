import { IconUser } from "@tabler/icons-react";

export default function About() {
  return (
    <section
      className="overflow-hidden py-[60px] tablet:pb-[40px] small:pb-0"
      id="about"
    >
      <div className="m-auto max-w-[1130px] px-8 py-0 tablet:max-w-[650px]">
        <div className="ml-auto w-full max-w-[770px] tablet:max-w-full">
          <div>
            <h4 className="m-0 mb-14 inline-flex items-center gap-1 rounded-[30px] border border-zinc-600 px-5 py-2 text-xs font-light uppercase text-white small:mb-10">
              <IconUser className="mx-auto -ml-1" strokeWidth="1.8" size={16} />
              <span>About</span>
            </h4>
            <h1 className="mb-8 font-oswald text-6xl font-normal leading-[60px] text-white mobile:text-[58px] small:text-4xl small:text-[44px] small:leading-[1]">
              Every great design begin with an even
              <span className="break-words text-theme"> better story</span>
            </h1>
          </div>
          <p className="max-w-[650px] text-justify leading-8 tablet:max-w-full">
            Passionate React developer with a focus on crafting seamless user
            experiences. Skilled in front-end development and UI design, I
            strive to create intuitive and engaging web applications. Let's
            collaborate and bring your ideas to life with clean code and
            creativity!
          </p>
        </div>
      </div>
    </section>
  );
}
