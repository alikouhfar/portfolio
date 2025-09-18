'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, HeartHandshake } from 'lucide-react'
import { useState } from 'react'
import { clsx } from 'clsx'
import Link from 'next/link'
import { homeIntroCollaborationData } from '@/app/_components/home-intro/home-intro-collaboration.data'
import HomeIntroCollaborationPattern from '@/app/_components/home-intro/home-intro-collaboration-pattern'

export default function HomeIntroCollaboration() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative col-span-6 flex size-full flex-col justify-between overflow-hidden rounded-xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] max-md:h-[21rem] md:col-span-3 lg:col-span-4 dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]"
    >
      <div className="size-full">
        <div className="absolute flex h-[300px] w-full flex-col">
          <div className="relative h-full [mask-image:linear-gradient(to_right,transparent,black_40%,black_60%,transparent)]">
            <HomeIntroCollaborationPattern />
            <div className="absolute top-15.5 left-1/2 h-[116px] w-[116px] -translate-x-1/2 rounded-full border border-[#494949] bg-[#2A2A2A] transition-colors delay-200 duration-500 group-hover:border-indigo-400">
              <Image
                src="/images/alikouhfar.jpg"
                alt="Portrait of Ali Kouhfar"
                width={100}
                height={100}
                className="absolute top-1/2 left-1/2 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 transform rounded-full"
              />
            </div>
            <ul className="hidden lg:block">
              <AnimatePresence>
                {isHovered &&
                  homeIntroCollaborationData.map((collaborator, index) => (
                    <motion.li
                      key={collaborator.id}
                      initial={{ opacity: 0, y: -40, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                        delay: index * 0.1,
                      }}
                      className={clsx(
                        'absolute z-10 rounded-full border border-white/5 bg-[#2A2A2A] p-1',
                        collaborator.classNames.top,
                        collaborator.classNames.left
                      )}
                      style={{
                        height: `${collaborator.size}px`,
                        width: `${collaborator.size}px`,
                      }}
                    >
                      <Image
                        src={collaborator.src}
                        alt="Collaborator"
                        width={collaborator.size - 2}
                        height={collaborator.size - 2}
                        className="rounded-full object-cover"
                      />
                    </motion.li>
                  ))}
              </AnimatePresence>
            </ul>
            <ul className="hidden sm:block lg:hidden">
              {homeIntroCollaborationData.slice(2).map((collaborator, index) => (
                <li
                  key={index}
                  className={clsx(
                    'absolute rounded-full border border-white/5 bg-[#2A2A2A] p-1',
                    collaborator.classNames.top,
                    collaborator.classNames.left
                  )}
                  style={{
                    height: `${collaborator.size}px`,
                    width: `${collaborator.size}px`,
                  }}
                >
                  <Image
                    src={collaborator.src}
                    alt="Collaborator"
                    width={collaborator.size - 2}
                    height={collaborator.size - 2}
                    className="rounded-full object-cover"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        <HeartHandshake className="size-12 origin-left text-neutral-500 transition-all duration-300 ease-in-out group-hover:scale-75" />
        <h3 className="max-w-lg text-neutral-400">Collaboration</h3>
        <p className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
          Foster open, effective client collaboration
        </p>
      </div>
      <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <Link
          href="/contact"
          data-slot="button"
          className="focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 pointer-events-auto inline-flex h-8 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-md px-3 text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 has-[>svg]:px-2.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([className*='size-'])]:size-4"
        >
          Book a call
          <ArrowRight className="ml-2 size-4" />
        </Link>
      </div>
      <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/[.03] dark:group-hover:bg-neutral-800/10" />
    </div>
  )
}
