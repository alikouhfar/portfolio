import { ArrowRight, PanelsTopLeft } from 'lucide-react'
import Link from 'next/link'
import IntroServicesMarquee from './IntroServicesMarquee'

const IntroServices = () => {
  return (
    <div className="group relative col-span-6 flex size-full flex-col justify-between overflow-hidden rounded-xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] max-md:h-[21rem] md:col-span-6 lg:col-span-4 dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]">
      <div className="size-full">
        <div className="group absolute top-10 flex w-full flex-row [gap:var(--gap)] overflow-hidden [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)] p-2 [--duration:20s] [--gap:1rem]">
          <IntroServicesMarquee />
        </div>
      </div>
      <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        <PanelsTopLeft className="size-12 origin-left text-neutral-500 transition-all duration-300 ease-in-out group-hover:scale-75" />
        <h3 className="max-w-lg text-neutral-400">The Inside Scoop</h3>
        <p className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
          Currently building an IOT Platform
        </p>
      </div>
      <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <Link
          href="/public#work"
          data-slot="button"
          className="[&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 [&amp;_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 has-[&gt;svg]:px-2.5 pointer-events-auto inline-flex h-8 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-md px-3 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50"
        >
          View Recent work
          <ArrowRight className="ml-2 size-4" />
        </Link>
      </div>
      <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/[.03] dark:group-hover:bg-neutral-800/10"></div>
    </div>
  )
}

export default IntroServices
