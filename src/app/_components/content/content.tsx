import Intro from '@/app/_components/intro/intro';

export default function Content() {
  return (
    <div className="w-full max-w-7xl px-4">
      <Intro />
      {/*<section id="work" className="relative mx-auto mt-28 w-full max-w-7xl py-10">*/}
      {/*  <h2*/}
      {/*    className="relative z-2 mb-20 text-4xl font-medium tracking-tight sm:text-5xl md:mb-36 md:text-6xl text-balance text-center"*/}
      {/*    style={{*/}
      {/*      textShadow:*/}
      {/*        'rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.25) 0px 8px 30px',*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <p className="mb-3 text-xs font-normal tracking-widest text-black/80 dark:text-white/70 uppercase md:text-sm">*/}
      {/*      FEATURED CASE STUDIES*/}
      {/*    </p>*/}
      {/*    <span className="">*/}
      {/*      <span className="">Curated</span>*/}
      {/*      <span className="text-colorfull animate-gradient-x font-nyght tracking-wide">work</span>*/}
      {/*    </span>*/}
      {/*  </h2>*/}
      {/*  <div className="relative mx-auto flex w-full">*/}
      {/*    <div className="mx-auto grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:flex lg:max-w-[65%] lg:flex-col lg:gap-y-24">*/}
      {/*      <div*/}
      {/*        className="project-card flex w-full flex-row"*/}
      {/*        style={{*/}
      {/*          opacity: 0,*/}
      {/*          transform: 'scale(0.8)',*/}
      {/*        }}*/}
      {/*      >*/}
      {/*        <div className="flex flex-col lg:mx-10 lg:w-full">*/}
      {/*          <a*/}
      {/*            draggable="false"*/}
      {/*            className="relative cursor-pointer overflow-hidden rounded-2xl border border-white-3 dark:border-white/15 bg-[#f2f2f20c] p-1.5 shadow-2xl lg:h-[560px] lg:rounded-3xl lg:p-2"*/}
      {/*            href="/projects/star-forge"*/}
      {/*          >*/}
      {/*            <div*/}
      {/*              className="absolute inset-x-0 top-0 h-px"*/}
      {/*              style={{*/}
      {/*                background:*/}
      {/*                  'linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)',*/}
      {/*              }}*/}
      {/*            ></div>*/}
      {/*            <div className="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl dark:bg-linear-to-b from-black/40 to-transparent transition-all duration-300">*/}
      {/*              <div*/}
      {/*                className="absolute inset-0 -z-1"*/}
      {/*                style={{*/}
      {/*                  background:*/}
      {/*                    'linear-gradient(188.62deg, rgb(107, 13, 51) 49.9%, rgb(219, 39, 119) 81.7%, rgb(244, 114, 182) 93.88%, rgb(249, 215, 147) 113.5%)',*/}
      {/*                }}*/}
      {/*              ></div>*/}
      {/*              <div*/}
      {/*                className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70"*/}
      {/*                style={{*/}
      {/*                  background:*/}
      {/*                    'linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)',*/}
      {/*                }}*/}
      {/*              ></div>*/}
      {/*              <div className="hidden w-full flex-row items-center justify-between px-12 py-8 lg:flex text-pink-300">*/}
      {/*                <h3 className="max-w-[90%] text-2xl">*/}
      {/*                  A sleek AI SaaS landing page with a user-friendly design that enhances*/}
      {/*                  engagement.*/}
      {/*                </h3>*/}
      {/*                <ArrowRight className="size-6" />*/}
      {/*              </div>*/}
      {/*              <Image*/}
      {/*                alt="StarForge"*/}
      {/*                src="/_next/static/media/screen1.d39d4d1a.webp"*/}
      {/*                width={1203}*/}
      {/*                height={753}*/}
      {/*                loading="lazy"*/}
      {/*                decoding="async"*/}
      {/*                className="lg:group-hover:translate-y-10 w-full max-w-[85%] translate-y-5 -rotate-3 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-300 will-change-transform lg:block lg:rotate-0 lg:group-hover:scale-[1.08] lg:group-hover:-rotate-3 shadow-[0_0_30px_#DB2777]"*/}
      {/*                style={{ color: 'transparent' }}*/}
      {/*              />*/}
      {/*            </div>*/}
      {/*          </a>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="hidden py-4 lg:sticky lg:block lg:w-[35%]">*/}
      {/*      <div className="sticky top-40">*/}
      {/*        <div className="flex">*/}
      {/*          <div*/}
      {/*            aria-hidden="true"*/}
      {/*            className="my-4 mr-4 h-1 min-w-6 rounded-full bg-pink-600"*/}
      {/*          ></div>*/}
      {/*          <div className="flex flex-col items-start lg:h-[500px]">*/}
      {/*            <div className="flex items-center gap-3">*/}
      {/*              <h3 className="text-foreground text-2xl font-bold">Next Ventures</h3>*/}
      {/*            </div>*/}
      {/*            <p className="text-muted-foreground my-2 text-base font-light">*/}
      {/*              A platform designed for early-stage entrepreneurs to pitch, browse, and engage*/}
      {/*              with startup ideas. It’s built to impress both users and investors with blazing*/}
      {/*              speed, compelling visuals, and a modern tech stack.*/}
      {/*            </p>*/}
      {/*            <ul className="text-accent-foreground/85 mt-4 flex flex-col gap-y-2 text-base">*/}
      {/*              <li className="flex items-center text-sm">*/}
      {/*                <svg*/}
      {/*                  width="24"*/}
      {/*                  height="24"*/}
      {/*                  viewBox="0 0 24 24"*/}
      {/*                  xmlns="http://www.w3.org/2000/svg"*/}
      {/*                  className="mt-1 mr-2 size-5 shrink-0 fill-pink-600 text-pink-600 dark:text-pink-400 bg-pink-600/20 lg:bg-white-1 dark:lg:bg-black"*/}
      {/*                >*/}
      {/*                  <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>*/}
      {/*                </svg>*/}
      {/*                Leveraged Partial Prerendering and After for faster loading.*/}
      {/*              </li>*/}
      {/*              <li className="flex items-center text-sm">*/}
      {/*                <svg*/}
      {/*                  width="24"*/}
      {/*                  height="24"*/}
      {/*                  viewBox="0 0 24 24"*/}
      {/*                  xmlns="http://www.w3.org/2000/svg"*/}
      {/*                  className="mt-1 mr-2 size-5 shrink-0 fill-pink-600 text-pink-600 dark:text-pink-400 bg-pink-600/20 lg:bg-white-1 dark:lg:bg-black"*/}
      {/*                >*/}
      {/*                  <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>*/}
      {/*                </svg>*/}
      {/*                Simplified idea submission with a clean, intuitive design.*/}
      {/*              </li>*/}
      {/*              <li className="flex items-center text-sm">*/}
      {/*                <svg*/}
      {/*                  width="24"*/}
      {/*                  height="24"*/}
      {/*                  viewBox="0 0 24 24"*/}
      {/*                  xmlns="http://www.w3.org/2000/svg"*/}
      {/*                  className="mt-1 mr-2 size-5 shrink-0 fill-pink-600 text-pink-600 dark:text-pink-400 bg-pink-600/20 lg:bg-white-1 dark:lg:bg-black"*/}
      {/*                >*/}
      {/*                  <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>*/}
      {/*                </svg>*/}
      {/*                Enhanced browsing with seamless performance optimization.*/}
      {/*              </li>*/}
      {/*            </ul>*/}
      {/*            <div className="mt-10 flex flex-wrap gap-3 text-sm">*/}
      {/*              <div*/}
      {/*                className=""*/}
      {/*                style={{*/}
      {/*                  opacity: 1,*/}
      {/*                  transform: 'none',*/}
      {/*                }}*/}
      {/*              >*/}
      {/*                <span*/}
      {/*                  data-slot="badge"*/}
      {/*                  className="inline-flex items-center justify-center rounded-lg border px-3 py-1 text-sm w-fit whitespace-nowrap shrink-0 gap-2 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-black dark:text-white border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2 [a&amp;]:hover:bg-primary/90"*/}
      {/*                >*/}
      {/*                  <Image src="/nextdotjs/white" alt="Next.js" width={16} height={16} />*/}
      {/*                  Next.js*/}
      {/*                </span>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <a*/}
      {/*    className="group flex w-fit items-center justify-center gap-2 text-neutral-800 transition-colors hover:text-black dark:text-white-1 mx-auto md:mt-20"*/}
      {/*    href="/projects"*/}
      {/*  >*/}
      {/*    See more projects*/}
      {/*    <div className="size-[25px] overflow-hidden rounded-full border border-neutral-300 bg-white-1/50 transition-all duration-500 group-hover:bg-neutral-200 dark:border-white/10 dark:bg-white/5 dark:group-hover:bg-white/10">*/}
      {/*      <div className="flex w-12 -translate-x-1/2 transition-transform duration-500 ease-in-out group-hover:translate-x-0">*/}
      {/*        <span className="flex size-6">*/}
      {/*          <ArrowRight className="m-auto size-[14px]" />*/}
      {/*        </span>*/}
      {/*        <span className="flex size-6">*/}
      {/*          <ArrowRight className="m-auto size-[14px]" />*/}
      {/*        </span>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </a>*/}
      {/*</section>*/}
      {/*<section*/}
      {/*  id="skills"*/}
      {/*  className="relative mx-auto mt-10 flex h-full flex-col rounded-3xl py-0 md:px-10"*/}
      {/*>*/}
      {/*  <div className="relative mx-auto size-fit overflow-hidden">*/}
      {/*    <div className="[mask-image:linear-gradient(to_top,transparent,black_50%,black_90%,transparent)] [masak-image:linear-gradient(to_top,transparent,#000_100%)]">*/}
      {/*      <div*/}
      {/*        className="relative mx-auto size-[300px] translate-y-36 md:size-[380px] md:translate-y-40"*/}
      {/*        style={{ transform: 'none' }}*/}
      {/*      >*/}
      {/*        <Image*/}
      {/*          src="/steel-flower.webp"*/}
      {/*          alt="skills cover rotating image"*/}
      {/*          draggable={false}*/}
      {/*          className="z-10 w-full opacity-65 select-none"*/}
      {/*          fill={false}*/}
      {/*          height={100}*/}
      {/*          width={100}*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <h2*/}
      {/*    style={{*/}
      {/*      textShadow:*/}
      {/*        '0px 4px 8px rgba(255, 255, 255, 0.05), 0px 8px 30px rgba(255, 255, 255, 0.25)',*/}
      {/*    }}*/}
      {/*    className="relative text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl text-balance text-center z-30 mb-0 md:mb-0 size-full -translate-y-6 md:-translate-y-10"*/}
      {/*  >*/}
      {/*    <p className="mb-3 text-xs font-normal tracking-widest text-black/80 dark:text-white/70 uppercase md:text-sm">*/}
      {/*      My Skills*/}
      {/*    </p>*/}
      {/*    <span className="">*/}
      {/*      <span className="">The Secret</span>*/}
      {/*      <span className="text-colorfull animate-gradient-x font-nyght tracking-wide">*/}
      {/*        Sauce*/}
      {/*      </span>*/}
      {/*    </span>*/}
      {/*  </h2>*/}
      {/*  <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2 lg:gap-3">*/}
      {/*    <span*/}
      {/*      data-slot="badge"*/}
      {/*      className="inline-flex items-center justify-center rounded-lg border px-3 py-1 text-sm w-fit whitespace-nowrap shrink-0 gap-2 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-black dark:text-white border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2 [a&amp;]:hover:bg-primary/90 md:px-4 md:py-1.5"*/}
      {/*      aria-label="Expo"*/}
      {/*    >*/}
      {/*      <Image src="/expo/gray" alt="Expo" width={18} height={18} className="w-4" />*/}
      {/*      <span>Expo</span>*/}
      {/*    </span>*/}
      {/*    <span*/}
      {/*      data-slot="badge"*/}
      {/*      className="inline-flex items-center justify-center rounded-lg border px-3 py-1 text-sm w-fit whitespace-nowrap shrink-0 gap-2 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-black dark:text-white border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2 [a&amp;]:hover:bg-primary/90 md:px-4 md:py-1.5"*/}
      {/*      aria-label="Clerk"*/}
      {/*    >*/}
      {/*      <Image src="/clerk" alt="Clerk" width={18} height={18} className="w-4" />*/}
      {/*      <span>Clerk</span>*/}
      {/*    </span>*/}
      {/*    <span*/}
      {/*      data-slot="badge"*/}
      {/*      className="inline-flex items-center justify-center rounded-lg border px-3 py-1 text-sm w-fit whitespace-nowrap shrink-0 gap-2 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-black dark:text-white border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2 [a&amp;]:hover:bg-primary/90 md:px-4 md:py-1.5"*/}
      {/*      aria-label="Linux"*/}
      {/*    >*/}
      {/*      <Image src="/linux" alt="Linux" width={18} height={18} className="w-4" />*/}
      {/*      <span>Linux</span>*/}
      {/*    </span>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </div>
  );
}
