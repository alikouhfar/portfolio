import { ArrowRight, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function HomeIntroRemote() {
  return (
    <div className="group relative col-span-6 flex size-full flex-col justify-between overflow-hidden rounded-xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] max-md:h-[32rem] md:col-span-3 md:row-span-2 lg:col-span-2 dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]">
      <div className="absolute z-0 mx-auto my-0 aspect-video w-[1800px] -translate-x-[850px] -translate-y-[100px] [mask-image:linear-gradient(to_bottom,transparent_10%,#000_40%,#000_40%,transparent_60%)]">
        <Image
          src="/images/vecteezy_white-background-of-world-map-with-line-art-design_10158604.jpg"
          alt="World Map"
          className="object-left-bottom invert-100"
          fill
        />
      </div>
      {/* Motherland */}
      <div className="absolute top-[355px] left-[230px]">
        <span className="block h-2 w-2 animate-ping rounded-full bg-teal-500 opacity-75"></span>
        <span className="absolute top-0 left-0 h-2 w-2 rounded-full bg-teal-500 shadow-[0_0_12px_3px_rgba(0,187,167,0.7)]"></span>
      </div>
      {/* Europe */}
      <div className="absolute top-[195px] left-[35px]">
        <span className="block h-2 w-2 animate-ping rounded-full bg-pink-500 opacity-75"></span>
        <span className="absolute top-0 left-0 h-2 w-2 rounded-full bg-pink-500 shadow-[0_0_12px_3px_rgba(246,52,154,0.7)]"></span>
      </div>
      {/* Africa */}
      <div className="absolute top-[385px] left-[70px]">
        <span className="block h-2 w-2 animate-ping rounded-full bg-amber-500 opacity-75"></span>
        <span className="absolute top-0 left-0 h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_12px_3px_rgba(254,154,0,0.7)]"></span>
      </div>
      {/* Asia */}
      <div className="absolute top-[230px] left-[500px]">
        <span className="block h-2 w-2 animate-ping rounded-full bg-blue-500 opacity-75"></span>
        <span className="absolute top-0 left-0 h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_12px_3px_rgba(43,127,255,0.7)]"></span>
      </div>
      <h3 className="z-10 mt-6 w-full bg-linear-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text px-4 text-center text-3xl leading-[100%] font-bold tracking-tighter text-balance text-transparent select-none md:mt-12">
        Highly adaptable to cross-time-zone collaboration
      </h3>
      <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        <MapPin
          className="size-12 origin-left text-neutral-500 transition-all duration-300 ease-in-out group-hover:scale-75"
        />
        <h3 className="max-w-lg text-neutral-400">Remote</h3>
        <p className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">Iran</p>
      </div>
      <div className="pointer-events-none absolute bottom-0 z-10 flex w-full translate-y-10 flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <a
          href="/contact"
          data-slot="button"
          className="[&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 [&amp;_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 has-[&gt;svg]:px-2.5 pointer-events-auto inline-flex h-8 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-md px-3 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50"
        >
          Connect now
          <ArrowRight className="ml-2 size-4" />
        </a>
      </div>
      <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/[.03] dark:group-hover:bg-neutral-800/10" />
    </div>
  )
}
