import { ChevronRight } from 'lucide-react'
import HomeHeroHeader from '@/app/_components/home-hero/home-hero-header'
import HomeHeroSubtext from '@/app/_components/home-hero/home-hero-subtext'
import HomeHeroCtaButtons from '@/app/_components/home-hero/home-hero-cta-buttons'
import HomeHeroHorizonVisual from '@/app/_components/home-hero/home-hero-horizon-visual'

export default function HomeHero() {
  return (
    <section className="relative mb-10 min-h-screen w-full overflow-hidden">
      <div className="absolute top-1/2 left-1/2 z-0 h-[500px] w-4xl -translate-x-1/2 -translate-y-1/2 bg-purple-300/75 blur-[150px] dark:bg-[#0b0218]" />
      <div className="relative z-20 mx-auto mb-2 flex max-w-full flex-col items-center justify-center px-3 md:max-w-4xl lg:max-w-5xl">
        <a className="group flex cursor-pointer items-center rounded-full border border-black/5 bg-neutral-200 text-sm backdrop-blur-xs transition-transform duration-300 ease-in lg:text-base dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20">
          <span className="mx-1 rounded-full bg-blue-700 px-1.5 text-xs leading-relaxed text-white">New</span>
          <span className="relative px-1 py-0.5 text-[rgb(0,0,0,65%)] dark:text-[rgb(255,255,255,90%)]">
            Next Ventures is live!
          </span>
          <ChevronRight
            size="16"
            className="mr-1 size-4 text-black transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 hover:duration-300 dark:text-neutral-100/70"
          />
        </a>
        <HomeHeroHeader />
        <HomeHeroSubtext />
        <HomeHeroCtaButtons />
      </div>
      <HomeHeroHorizonVisual />
    </section>
  )
}
