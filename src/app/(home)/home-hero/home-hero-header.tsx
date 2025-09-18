import { Norican } from 'next/font/google'

const norican = Norican({
  subsets: ['latin'],
  weight: ['400'],
})

export default function HomeHeroHeader() {
  return (
    <h2 className="my-2 w-full py-px text-center text-4xl leading-snug! font-semibold text-balance text-zinc-700 opacity-90 md:text-5xl lg:text-6xl dark:text-zinc-100">
      <span className="md:text-nowrap">Translate founder visions into cohesive</span>
      <br className="hidden md:block" />
      <span className="ml-2 md:ml-0 md:text-nowrap">high-quality</span>
      <span
        className={`${norican.className} text-colorful animate-gradient-x ml-2 bg-linear-to-b text-4xl font-light tracking-wide text-transparent italic md:text-6xl lg:text-7xl dark:from-zinc-700 dark:via-zinc-200 dark:to-zinc-50`}
      >
        digital products
      </span>
    </h2>
  )
}
