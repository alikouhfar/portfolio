import { ArrowRight, Copy } from 'lucide-react'

export default function HomeHeroCtaButtons() {
  return (
    <div className="animate-fadeInUp z-100 mt-4 flex flex-col items-center justify-center gap-6 sm:flex-row md:mt-8 md:gap-10">
      <button className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-black/30 bg-black/20 py-[3px] pr-[3px] pl-2 text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pr-1 md:pl-3 dark:border-white/10 dark:bg-white/10">
        <span className="z-10 px-3 text-black transition-colors duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
          Let's Connect
        </span>
        <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 dark:bg-white" />
        <span className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-black p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5 dark:bg-white">
          <ArrowRight
            className="text-white transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0 dark:text-black"
            size={18}
          />
          <ArrowRight
            className="absolute -translate-x-5 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:text-black"
            size={18}
          />
        </span>
      </button>
      <button
        type="button"
        className="flex cursor-pointer items-center gap-2 py-3 text-base font-light text-black outline-hidden transition-all duration-300 hover:text-black/60 dark:text-white/75 dark:hover:text-white/90"
      >
        <Copy size={20} />
        {process.env.NEXT_PUBLIC_EMAIL}
      </button>
    </div>
  )
}
