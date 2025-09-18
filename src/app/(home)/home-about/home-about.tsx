import SectionTitle from '@/app/_components/section-title/SectionTitle'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import Index from '@/app/_components/LinkWithArrowIcon'
import Image from 'next/image'

export default function HomeAbout() {
  return (
    <section id="about" className="relative mx-auto my-20 w-full max-w-7xl">
      <article className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 lg:size-full lg:flex-row lg:justify-between">
        <div className="max-w-[60%]">
          <SectionTitle
            title="Who I Am"
            description="Front-End Developer Who Builds with"
            specialWord="vision"
            rootClassName="lg:text-left"
          />
          <div className="relative z-5 mx-auto flex max-w-xl flex-col gap-y-8 text-center text-base font-light tracking-wider text-black/80 lg:mx-0 lg:max-w-[550px] lg:text-left lg:text-lg dark:text-neutral-300">
            <p className="text-justify">
              I'm Ali Kouhfar. A frontend developer who believes code should solve problems and spark joy. I
              craft interfaces that work seamlessly—React for structure, CSS for soul, and JavaScript for that
              extra magic. Every pixel matters, every interaction counts. By day: Building scalable,
              accessible web apps. By night: Experimenting with animations, dissecting UI libraries, or
              sketching wireframes in my notebook.
            </p>
            <p className="text-justify">
              For me, great frontend isn’t just about looks—it’s about intention. Smooth performance.
              Thoughtful micro-interactions. Code that’s as maintainable as it is elegant.
            </p>
            <p>Let’s create something people remember!</p>
            <div className="mx-auto -mt-4 flex w-fit gap-3 lg:mx-0">
              <Link
                target="_blank"
                href="https://instagram.com/ali.kouhfar"
                className="transition-all duration-300 hover:scale-105 hover:text-indigo-500"
              >
                <Icon icon="simple-icons:instagram" width="20" />
              </Link>
              <Link
                target="_blank"
                href="https://github.com/alikouhfar"
                className="transition-all duration-300 hover:scale-105 hover:text-indigo-500"
              >
                <Icon icon="simple-icons:github" width="20" />
              </Link>
              <Link
                target="_blank"
                href="https://linkedin.com/in/alikouhfar"
                className="transition-all duration-300 hover:scale-105 hover:text-indigo-500"
              >
                <Icon icon="simple-icons:linkedin" width="20" />
              </Link>
            </div>
          </div>
          <Index title="Work Experience" href="/about#experience" rootClassName="lg:ml-0" />
        </div>
        <div
          id="tiles"
          className="relative aspect-square w-52 overflow-hidden rounded-md shadow-[0_0_200px_theme(colors.violet.900)] lg:w-[500px]"
          style={{
            opacity: 0.7238988112026173,
            filter: 'blur(0.27610118879738266)',
          }}
        >
          <Image
            src="/images/portrait.png"
            alt="AB Logo"
            fill
            className="object-cover object-top"
            loading="lazy"
          />
        </div>
      </article>
    </section>
  )
}
