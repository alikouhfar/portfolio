import IntroCollaboration from '@/app/_components/intro/intro-collaboration'
import IntroTechnologies from '@/app/_components/intro/intro-technologies'
import IntroAvailable from '@/app/_components/intro/intro-available'
import IntroRemote from '@/app/_components/intro/intro-remote'

export default function Intro() {
  return (
    <div className="mx-auto mb-20 grid w-full grid-cols-6 gap-4 md:my-20 md:max-w-full md:auto-rows-[19rem]">
      <IntroCollaboration />
      <IntroTechnologies />
      <IntroRemote />
      <IntroAvailable />
      {/*<div className="group relative col-span-6 flex size-full transform-gpu flex-col justify-between overflow-hidden rounded-xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] max-md:h-[21rem] md:col-span-6 lg:col-span-4 dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]">*/}
      {/*  <div className="size-full">*/}
      {/*    <div className="group absolute top-10 flex flex-row [gap:var(--gap)] overflow-hidden [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] p-2 [--duration:20s] [--gap:1rem]">*/}
      {/*      <div className="animate-marquee flex shrink-0 flex-row justify-around [gap:var(--gap)] group-hover:[animation-play-state:paused]">*/}
      {/*        <figure className="relative w-32 transform-gpu cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] p-4 blur-[1px] transition-all duration-300 ease-out hover:bg-gray-950/[.05] hover:blur-none dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">*/}
      {/*          <div className="flex flex-row items-center gap-2">*/}
      {/*            <div className="flex flex-col">*/}
      {/*              <figcaption className="text-sm font-medium dark:text-white">*/}
      {/*                Payment System Architecture*/}
      {/*              </figcaption>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <blockquote className="mt-2 text-xs">*/}
      {/*            Handles recurring payments, upgrades, downgrades, and cancellations seamlessly to*/}
      {/*            enhance user experience.*/}
      {/*          </blockquote>*/}
      {/*        </figure>*/}
      {/*        <figure className="relative w-32 transform-gpu cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] p-4 blur-[1px] transition-all duration-300 ease-out hover:bg-gray-950/[.05] hover:blur-none dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">*/}
      {/*          <div className="flex flex-row items-center gap-2">*/}
      {/*            <div className="flex flex-col">*/}
      {/*              <figcaption className="text-sm font-medium dark:text-white">*/}
      {/*                Monitoring &amp; Analytics Infrastructure*/}
      {/*              </figcaption>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <blockquote className="mt-2 text-xs">*/}
      {/*            Provides real-time insights into user behavior, system performance, and key*/}
      {/*            business metrics.*/}
      {/*          </blockquote>*/}
      {/*        </figure>*/}
      {/*        <figure className="relative w-32 transform-gpu cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] p-4 blur-[1px] transition-all duration-300 ease-out hover:bg-gray-950/[.05] hover:blur-none dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">*/}
      {/*          <div className="flex flex-row items-center gap-2">*/}
      {/*            <div className="flex flex-col">*/}
      {/*              <figcaption className="text-sm font-medium dark:text-white">*/}
      {/*                Design System &amp; UI Consistency*/}
      {/*              </figcaption>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <blockquote className="mt-2 text-xs">*/}
      {/*            Unified design assets, including logos and themes, ensuring consistent branding*/}
      {/*            across the platform.*/}
      {/*          </blockquote>*/}
      {/*        </figure>*/}
      {/*        <figure className="relative w-32 transform-gpu cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] p-4 blur-[1px] transition-all duration-300 ease-out hover:bg-gray-950/[.05] hover:blur-none dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">*/}
      {/*          <div className="flex flex-row items-center gap-2">*/}
      {/*            <div className="flex flex-col">*/}
      {/*              <figcaption className="text-sm font-medium dark:text-white">*/}
      {/*                API Gateway &amp; Documentation*/}
      {/*              </figcaption>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <blockquote className="mt-2 text-xs">*/}
      {/*            Guides developers to integrate with the SaaS platform efficiently, offering*/}
      {/*            examples and best practices.*/}
      {/*          </blockquote>*/}
      {/*        </figure>*/}
      {/*        <figure className="relative w-32 transform-gpu cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] p-4 blur-[1px] transition-all duration-300 ease-out hover:bg-gray-950/[.05] hover:blur-none dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">*/}
      {/*          <div className="flex flex-row items-center gap-2">*/}
      {/*            <div className="flex flex-col">*/}
      {/*              <figcaption className="text-sm font-medium dark:text-white">*/}
      {/*                User Onboarding Flow Design*/}
      {/*              </figcaption>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <blockquote className="mt-2 text-xs">*/}
      {/*            Step-by-step guides and interactive tutorials to help users get started and*/}
      {/*            maximize platform benefits.*/}
      {/*          </blockquote>*/}
      {/*        </figure>*/}
      {/*      </div>*/}
      {/*      <div className="animate-marquee flex shrink-0 flex-row justify-around [gap:var(--gap)] group-hover:[animation-play-state:paused]">*/}
      {/*        <figure className="relative w-32 transform-gpu cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] p-4 blur-[1px] transition-all duration-300 ease-out hover:bg-gray-950/[.05] hover:blur-none dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">*/}
      {/*          <div className="flex flex-row items-center gap-2">*/}
      {/*            <div className="flex flex-col">*/}
      {/*              <figcaption className="text-sm font-medium dark:text-white">*/}
      {/*                Payment System Architecture*/}
      {/*              </figcaption>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <blockquote className="mt-2 text-xs">*/}
      {/*            Handles recurring payments, upgrades, downgrades, and cancellations seamlessly to*/}
      {/*            enhance user experience.*/}
      {/*          </blockquote>*/}
      {/*        </figure>*/}
      {/*        <figure className="relative w-32 transform-gpu cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] p-4 blur-[1px] transition-all duration-300 ease-out hover:bg-gray-950/[.05] hover:blur-none dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">*/}
      {/*          <div className="flex flex-row items-center gap-2">*/}
      {/*            <div className="flex flex-col">*/}
      {/*              <figcaption className="text-sm font-medium dark:text-white">*/}
      {/*                Monitoring &amp; Analytics Infrastructure*/}
      {/*              </figcaption>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <blockquote className="mt-2 text-xs">*/}
      {/*            Provides real-time insights into user behavior, system performance, and key*/}
      {/*            business metrics.*/}
      {/*          </blockquote>*/}
      {/*        </figure>*/}
      {/*        <figure className="relative w-32 transform-gpu cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] p-4 blur-[1px] transition-all duration-300 ease-out hover:bg-gray-950/[.05] hover:blur-none dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">*/}
      {/*          <div className="flex flex-row items-center gap-2">*/}
      {/*            <div className="flex flex-col">*/}
      {/*              <figcaption className="text-sm font-medium dark:text-white">*/}
      {/*                Design System &amp; UI Consistency*/}
      {/*              </figcaption>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <blockquote className="mt-2 text-xs">*/}
      {/*            Unified design assets, including logos and themes, ensuring consistent branding*/}
      {/*            across the platform.*/}
      {/*          </blockquote>*/}
      {/*        </figure>*/}
      {/*        <figure className="relative w-32 transform-gpu cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] p-4 blur-[1px] transition-all duration-300 ease-out hover:bg-gray-950/[.05] hover:blur-none dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">*/}
      {/*          <div className="flex flex-row items-center gap-2">*/}
      {/*            <div className="flex flex-col">*/}
      {/*              <figcaption className="text-sm font-medium dark:text-white">*/}
      {/*                API Gateway &amp; Documentation*/}
      {/*              </figcaption>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <blockquote className="mt-2 text-xs">*/}
      {/*            Guides developers to integrate with the SaaS platform efficiently, offering*/}
      {/*            examples and best practices.*/}
      {/*          </blockquote>*/}
      {/*        </figure>*/}
      {/*        <figure className="relative w-32 transform-gpu cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] p-4 blur-[1px] transition-all duration-300 ease-out hover:bg-gray-950/[.05] hover:blur-none dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">*/}
      {/*          <div className="flex flex-row items-center gap-2">*/}
      {/*            <div className="flex flex-col">*/}
      {/*              <figcaption className="text-sm font-medium dark:text-white">*/}
      {/*                User Onboarding Flow Design*/}
      {/*              </figcaption>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <blockquote className="mt-2 text-xs">*/}
      {/*            Step-by-step guides and interactive tutorials to help users get started and*/}
      {/*            maximize platform benefits.*/}
      {/*          </blockquote>*/}
      {/*        </figure>*/}
      {/*      </div>*/}
      {/*      <div className="animate-marquee flex shrink-0 flex-row justify-around [gap:var(--gap)] group-hover:[animation-play-state:paused]">*/}
      {/*        <figure className="relative w-32 transform-gpu cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] p-4 blur-[1px] transition-all duration-300 ease-out hover:bg-gray-950/[.05] hover:blur-none dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">*/}
      {/*          <div className="flex flex-row items-center gap-2">*/}
      {/*            <div className="flex flex-col">*/}
      {/*              <figcaption className="text-sm font-medium dark:text-white">*/}
      {/*                Payment System Architecture*/}
      {/*              </figcaption>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <blockquote className="mt-2 text-xs">*/}
      {/*            Handles recurring payments, upgrades, downgrades, and cancellations seamlessly to*/}
      {/*            enhance user experience.*/}
      {/*          </blockquote>*/}
      {/*        </figure>*/}
      {/*        <figure className="relative w-32 transform-gpu cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] p-4 blur-[1px] transition-all duration-300 ease-out hover:bg-gray-950/[.05] hover:blur-none dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">*/}
      {/*          <div className="flex flex-row items-center gap-2">*/}
      {/*            <div className="flex flex-col">*/}
      {/*              <figcaption className="text-sm font-medium dark:text-white">*/}
      {/*                Monitoring &amp; Analytics Infrastructure*/}
      {/*              </figcaption>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <blockquote className="mt-2 text-xs">*/}
      {/*            Provides real-time insights into user behavior, system performance, and key*/}
      {/*            business metrics.*/}
      {/*          </blockquote>*/}
      {/*        </figure>*/}
      {/*        <figure className="relative w-32 transform-gpu cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] p-4 blur-[1px] transition-all duration-300 ease-out hover:bg-gray-950/[.05] hover:blur-none dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">*/}
      {/*          <div className="flex flex-row items-center gap-2">*/}
      {/*            <div className="flex flex-col">*/}
      {/*              <figcaption className="text-sm font-medium dark:text-white">*/}
      {/*                Design System &amp; UI Consistency*/}
      {/*              </figcaption>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <blockquote className="mt-2 text-xs">*/}
      {/*            Unified design assets, including logos and themes, ensuring consistent branding*/}
      {/*            across the platform.*/}
      {/*          </blockquote>*/}
      {/*        </figure>*/}
      {/*        <figure className="relative w-32 transform-gpu cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] p-4 blur-[1px] transition-all duration-300 ease-out hover:bg-gray-950/[.05] hover:blur-none dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">*/}
      {/*          <div className="flex flex-row items-center gap-2">*/}
      {/*            <div className="flex flex-col">*/}
      {/*              <figcaption className="text-sm font-medium dark:text-white">*/}
      {/*                API Gateway &amp; Documentation*/}
      {/*              </figcaption>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <blockquote className="mt-2 text-xs">*/}
      {/*            Guides developers to integrate with the SaaS platform efficiently, offering*/}
      {/*            examples and best practices.*/}
      {/*          </blockquote>*/}
      {/*        </figure>*/}
      {/*        <figure className="relative w-32 transform-gpu cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] p-4 blur-[1px] transition-all duration-300 ease-out hover:bg-gray-950/[.05] hover:blur-none dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">*/}
      {/*          <div className="flex flex-row items-center gap-2">*/}
      {/*            <div className="flex flex-col">*/}
      {/*              <figcaption className="text-sm font-medium dark:text-white">*/}
      {/*                User Onboarding Flow Design*/}
      {/*              </figcaption>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <blockquote className="mt-2 text-xs">*/}
      {/*            Step-by-step guides and interactive tutorials to help users get started and*/}
      {/*            maximize platform benefits.*/}
      {/*          </blockquote>*/}
      {/*        </figure>*/}
      {/*      </div>*/}
      {/*      <div className="animate-marquee flex shrink-0 flex-row justify-around [gap:var(--gap)] group-hover:[animation-play-state:paused]">*/}
      {/*        <figure className="relative w-32 transform-gpu cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] p-4 blur-[1px] transition-all duration-300 ease-out hover:bg-gray-950/[.05] hover:blur-none dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">*/}
      {/*          <div className="flex flex-row items-center gap-2">*/}
      {/*            <div className="flex flex-col">*/}
      {/*              <figcaption className="text-sm font-medium dark:text-white">*/}
      {/*                Payment System Architecture*/}
      {/*              </figcaption>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <blockquote className="mt-2 text-xs">*/}
      {/*            Handles recurring payments, upgrades, downgrades, and cancellations seamlessly to*/}
      {/*            enhance user experience.*/}
      {/*          </blockquote>*/}
      {/*        </figure>*/}
      {/*        <figure className="relative w-32 transform-gpu cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] p-4 blur-[1px] transition-all duration-300 ease-out hover:bg-gray-950/[.05] hover:blur-none dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">*/}
      {/*          <div className="flex flex-row items-center gap-2">*/}
      {/*            <div className="flex flex-col">*/}
      {/*              <figcaption className="text-sm font-medium dark:text-white">*/}
      {/*                Monitoring &amp; Analytics Infrastructure*/}
      {/*              </figcaption>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <blockquote className="mt-2 text-xs">*/}
      {/*            Provides real-time insights into user behavior, system performance, and key*/}
      {/*            business metrics.*/}
      {/*          </blockquote>*/}
      {/*        </figure>*/}
      {/*        <figure className="relative w-32 transform-gpu cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] p-4 blur-[1px] transition-all duration-300 ease-out hover:bg-gray-950/[.05] hover:blur-none dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">*/}
      {/*          <div className="flex flex-row items-center gap-2">*/}
      {/*            <div className="flex flex-col">*/}
      {/*              <figcaption className="text-sm font-medium dark:text-white">*/}
      {/*                Design System &amp; UI Consistency*/}
      {/*              </figcaption>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <blockquote className="mt-2 text-xs">*/}
      {/*            Unified design assets, including logos and themes, ensuring consistent branding*/}
      {/*            across the platform.*/}
      {/*          </blockquote>*/}
      {/*        </figure>*/}
      {/*        <figure className="relative w-32 transform-gpu cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] p-4 blur-[1px] transition-all duration-300 ease-out hover:bg-gray-950/[.05] hover:blur-none dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">*/}
      {/*          <div className="flex flex-row items-center gap-2">*/}
      {/*            <div className="flex flex-col">*/}
      {/*              <figcaption className="text-sm font-medium dark:text-white">*/}
      {/*                API Gateway &amp; Documentation*/}
      {/*              </figcaption>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <blockquote className="mt-2 text-xs">*/}
      {/*            Guides developers to integrate with the SaaS platform efficiently, offering*/}
      {/*            examples and best practices.*/}
      {/*          </blockquote>*/}
      {/*        </figure>*/}
      {/*        <figure className="relative w-32 transform-gpu cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] p-4 blur-[1px] transition-all duration-300 ease-out hover:bg-gray-950/[.05] hover:blur-none dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">*/}
      {/*          <div className="flex flex-row items-center gap-2">*/}
      {/*            <div className="flex flex-col">*/}
      {/*              <figcaption className="text-sm font-medium dark:text-white">*/}
      {/*                User Onboarding Flow Design*/}
      {/*              </figcaption>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <blockquote className="mt-2 text-xs">*/}
      {/*            Step-by-step guides and interactive tutorials to help users get started and*/}
      {/*            maximize platform benefits.*/}
      {/*          </blockquote>*/}
      {/*        </figure>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">*/}
      {/*    <PanelsTopLeft className="size-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />*/}
      {/*    <h3 className="max-w-lg text-neutral-400">The Inside Scoop</h3>*/}
      {/*    <p className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">*/}
      {/*      Currently building a Saas Application*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*  <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">*/}
      {/*    <Link*/}
      {/*      href="/#work"*/}
      {/*      data-slot="button"*/}
      {/*      className="[&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 [&amp;_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 has-[&gt;svg]:px-2.5 pointer-events-auto inline-flex h-8 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-md px-3 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50"*/}
      {/*    >*/}
      {/*      View Recent work*/}
      {/*      <ArrowRight className="ml-2 size-4" />*/}
      {/*    </Link>*/}
      {/*  </div>*/}
      {/*  <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] dark:group-hover:bg-neutral-800/10"></div>*/}
      {/*</div>*/}
    </div>
  )
}
