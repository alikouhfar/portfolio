import {
  IconBrandDribbble,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitterFilled,
  IconMail,
} from "@tabler/icons-react";

export default function Sidebar() {
  return (
    <div className="px-8 small:px-5">
      <div className="w-100 fixed left-5 top-1/2 z-10 max-w-[485px] -translate-y-1/2 rounded-[30px] border border-zinc-600 large:max-w-[400px] laptop:max-w-[350px] laptop:p-[30px] tablet:relative tablet:left-0 tablet:top-0 tablet:m-auto tablet:mt-5 tablet:block tablet:max-w-[650px] tablet:translate-y-0">
        <div className="mb-[65px] flex items-center justify-between large:mb-[30px] small:flex-col small:items-start small:gap-1">
          <img
            className=" max-w-48"
            style={{ filter: "contrast(0) brightness(2)" }}
            src="/logo.png"
            alt="Logo"
          />
          <span className="max-w-[110px] text-right text-sm font-normal text-white laptop:leading-[1.4] small:text-left">
            Front-End Developer
          </span>
        </div>
        <img
          className="mb-14 block rounded-[30px] laptop:mx-auto laptop:mb-[46px] laptop:w-full laptop:max-w-[250px]"
          src="/portrait.jpg"
          alt="Me"
        />
        <h2 className="break-words text-center text-2xl font-light text-white">
          alikouhfr@gmail.com
        </h2>
        <h2 className="mb-[30px] text-center text-2xl font-light text-white">
          Based in Nazarabad
        </h2>
        <p className="mb-[45px] text-center text-sm text-zinc-500 large:mb-[25px]">
          &copy; 2022 Ali Kouhfar. All Rights Reserved
        </p>
        <ul className="mb-[118px] flex flex-wrap items-center justify-center gap-2 large:mb-[30px]">
          <li>
            <a className="social-icon" href="">
              <IconBrandTwitterFilled size={18} />
            </a>
          </li>
          <li>
            <a className="social-icon" href="">
              <IconBrandDribbble size={20} />
            </a>
          </li>
          <li>
            <a className="social-icon" href="">
              <IconBrandInstagram size={20} />
            </a>
          </li>
          <li>
            <a className="social-icon" href="">
              <IconBrandGithub size={20} />
            </a>
          </li>
        </ul>
        <a
          href="block"
          className="inline-flex w-full cursor-pointer items-center justify-center gap-1 rounded-[30px] border-2 border-theme bg-theme px-[58px] py-[11px] text-center uppercase text-zinc-900 transition-all hover:bg-transparent hover:text-theme"
        >
          <IconMail strokeWidth="2px" />
          <span className="text-nowrap font-medium">Hire Me!</span>
        </a>
      </div>
    </div>
  );
}
