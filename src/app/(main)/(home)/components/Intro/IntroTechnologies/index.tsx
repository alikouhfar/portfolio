import IntroTechnologiesMarquee from './IntroTechnologiesMarquee'
import IntroTechnologiesCircularPatterns from './IntroTechnologiesCircularPatterns'
import IntroTechnologiesBrowserComponent from './IntroTechnologiesBrowserComponent'
import { technologies } from '@/lib/technologies'

const IntroTechnologies = () => {
  const rowCount = technologies.length / 3

  return (
    <div className="group relative col-span-6 flex size-full flex-col justify-between overflow-hidden rounded-xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] max-md:min-h-[35rem] md:col-span-3 md:row-span-2 lg:col-span-2 dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]">
      <div className="size-full">
        <div className="[Amask-image:linear-gradient(to_top,transparent_10%,#000_100%)] absolute inset-0">
          <div className="relative size-full">
            <h3 className="absolute top-10 w-full bg-linear-to-b from-[#edeffd] to-[#da7bda] bg-clip-text px-4 text-center text-3xl leading-[100%] font-bold tracking-tighter text-transparent select-none">
              Specialized in modern, high-impact technologies
            </h3>
            <div className="relative flex h-full flex-col items-center justify-end">
              <div className="absolute -bottom-32 size-48 rounded-full bg-purple-300 blur-3xl" />
              <div className="z-20 mb-8 flex w-full flex-col gap-y-10 lg:mb-16">
                <IntroTechnologiesMarquee technologies={technologies.slice(0, rowCount)} />
                <IntroTechnologiesMarquee
                  direction="right"
                  technologies={technologies.slice(rowCount, rowCount * 2)}
                />
                <IntroTechnologiesMarquee technologies={technologies.slice(rowCount * 2, rowCount * 3)} />
              </div>
              <IntroTechnologiesCircularPatterns />
              <IntroTechnologiesBrowserComponent />
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/[.03] dark:group-hover:bg-neutral-800/10" />
    </div>
  )
}

export default IntroTechnologies
