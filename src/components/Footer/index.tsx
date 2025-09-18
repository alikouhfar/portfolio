import Link from 'next/link'
import { Icon } from '@iconify/react'
import { AppWindow, Code, Ellipsis } from 'lucide-react'
import FooterPageList from './FooterPageList'
import { footerPageListOne, footerPageListThree, footerPageListTwo } from './FooterPageList/lib'

const Footer = () => {
  return (
    <footer className="mx-auto my-6 w-full max-w-6xl max-lg:px-4">
      <div className="bg-white-2 relative mx-auto flex flex-col items-center gap-6 rounded-3xl px-4 py-10 shadow-sm backdrop-blur-lg md:flex-row dark:bg-white/[0.02]">
        <div className="flex w-full flex-1 flex-col items-start gap-4 md:flex-row md:gap-10 md:px-8">
          <div className="hidden flex-col gap-y-6 md:flex md:w-1/2">
            <Link className="inline-block" href="/public">
              LOGO
            </Link>
            <p className="w-60 text-sm leading-5 dark:text-gray-300">
              I&apos;m Ali - a frontend developer, UI craftsman &amp; creative problem solver. Thanks for
              stopping by!
            </p>
          </div>
          <div className="flex flex-col items-start justify-between gap-6 md:mx-4 md:w-1/2 md:flex-row md:gap-16">
            <div className="flex flex-col gap-2 md:gap-4">
              <h4 className="font-semibold text-indigo-400">
                <AppWindow size={18} />
                General
              </h4>
              <FooterPageList pages={footerPageListOne} />
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <h4 className="font-semibold text-indigo-400">
                <Code size={18} />
                Specifics
              </h4>
              <FooterPageList pages={footerPageListTwo} />
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <h4 className="font-semibold text-indigo-400">
                <Ellipsis size={18} />
                More
              </h4>
              <FooterPageList pages={footerPageListThree} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center justify-between gap-4 text-sm text-neutral-600 md:flex-row md:px-8 dark:text-neutral-400">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
          <p className="whitespace-nowrap">
            &copy; 2025
            <Link
              className="ml-1 whitespace-nowrap transition-colors hover:text-black dark:hover:text-white"
              href="/public"
            >
              Ali Kouhfar
            </Link>
            . All rights reserved
          </p>
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <a
              className="whitespace-nowrap transition-colors hover:text-black dark:hover:text-white"
              href="/legal/privacy"
            >
              Privacy Policy
            </a>
            <a
              className="whitespace-nowrap transition-colors hover:text-black dark:hover:text-white"
              href="/legal/terms"
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-end">
          <div className="flex items-center gap-3">
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
      </div>
    </footer>
  )
}

export default Footer
