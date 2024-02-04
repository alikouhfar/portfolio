import { IconUser } from "@tabler/icons-react";

export default function About() {
  return (
    <section
      className="overflow-hidden py-[90px] tablet:pb-[50px] small:pb-0"
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
          <p className="max-w-[610px] leading-8 tablet:max-w-full">
            Since beginning my journey as a freelance designer nearly 8 years
            ago, I've done remote work for agencies, consulted for startups, and
            collaborated with talented people to create digital products for
            both business and consumer use. I'm quietly confident, naturally
            curious, and perpetually working on improving my chopsone design
            problem at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
