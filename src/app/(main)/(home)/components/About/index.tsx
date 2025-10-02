import Link from 'next/link'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import SectionTitle from '@/components/SectionTitle'
import LinkWithArrowIcon from '@/components/LinkWithArrowIcon'
import portrait from '@/public/images/portrait.png'

const About = () => {
  return (
    <section id="about" className="relative mx-auto my-20 w-full max-w-7xl px-8">
      <article className="mx-auto flex flex-col items-center justify-center gap-10 lg:size-full lg:flex-row lg:justify-between">
        <div className="lg:flex-1">
          <SectionTitle
            title="Who I Am"
            description="Front-End Developer Who Builds with"
            descriptionKeyword="vision"
            rootClassName="lg:text-left"
          />
          <div className="relative z-5 mx-auto flex flex-col gap-y-6 text-center text-base font-light tracking-wider text-black/80 lg:mx-0 lg:text-left lg:text-lg dark:text-neutral-300">
            <p className="text-justify">
              I&apos;m Ali Kouhfar. A frontend developer who believes code should solve problems and spark
              joy. I craft interfaces that work seamlessly—React for structure, CSS for soul, and JavaScript
              for that extra magic. Every pixel matters, every interaction counts. By day: Building scalable,
              accessible web apps. By night: Experimenting with animations, dissecting UI libraries, or
              sketching wireframes in my notebook.
            </p>
            <p className="text-justify">
              For me, great frontend isn’t just about looks—it’s about intention. Smooth performance.
              Thoughtful micro-interactions. Code that’s as maintainable as it is elegant.
            </p>
            <p>Let’s create something people remember!</p>
            <div className="mx-auto -mt-4 flex h-5 w-fit items-center gap-3 lg:mx-0">
              <Link
                target="_blank"
                href="https://instagram.com/ali.kouhfar"
                className="transition-all duration-300 hover:scale-105 hover:text-indigo-500"
              >
                <Icon icon="lucide:instagram" width="20" />
              </Link>
              <Link
                target="_blank"
                href="https://github.com/alikouhfar"
                className="transition-all duration-300 hover:scale-105 hover:text-indigo-500"
              >
                <Icon icon="lucide:github" width="20" />
              </Link>
              <Link
                target="_blank"
                href="https://linkedin.com/in/alikouhfar"
                className="transition-all duration-300 hover:scale-105 hover:text-indigo-500"
              >
                <Icon icon="simple-icons:linkedin" width="18" />
              </Link>
            </div>
          </div>
          <LinkWithArrowIcon title="Work Experience" href="/about#experience" rootClassName="lg:ml-0" />
        </div>
        <div className="relative aspect-square w-full max-w-96 overflow-hidden rounded-md shadow-[0_0_200px_theme(colors.violet.900)] lg:max-w-full lg:flex-1">
          <Image
            src={portrait}
            alt="Portrait of Ali Kouhfar"
            className="object-cover object-top"
            loading="lazy"
            placeholder="blur"
          />
        </div>
      </article>
    </section>
  )
}

export default About
