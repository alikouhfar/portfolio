'use client'

import { HeaderProps } from '@/app/[lang]/types'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { LANGUAGES } from '@/constants/languages'
import { THEME_COLORS } from '@/constants/theme'
import { useTheme } from '@/contexts/ThemeContext'
import { IconMenu2, IconWorld, IconX } from '@tabler/icons-react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC, Fragment, useEffect, useState } from 'react'

export const Header: FC<HeaderProps> = ({ lang, dictionary }) => {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { themeColor, onThemeColorChange } = useTheme()

  const isDarkSection =
    activeSection === 'hero' ||
    activeSection === 'experience' ||
    activeSection === 'project' ||
    activeSection === 'languages'

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    const sections = [
      'hero',
      'about',
      'experience',
      'education',
      'project',
      'expertise',
      'languages',
      'contact',
    ]
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <Fragment>
      <nav
        className={`fixed top-0 left-0 z-50 w-full border-b backdrop-blur-xl transition-all duration-500 ${
          isDarkSection ? 'bg-ink/5 border-white/5 text-white' : 'bg-bg/5 border-ink/5 text-ink'
        }`}
      >
        <div className="mx-auto flex items-center justify-between px-4 py-3 md:px-8 md:py-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex shrink-0 cursor-pointer items-center gap-3"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-500 ${
                isDarkSection ? 'text-ink bg-white' : 'bg-ink text-white'
              }`}
            >
              <span className="font-grotesk text-xs font-bold">AK</span>
            </div>

            <span className="hidden text-xl font-bold tracking-tighter uppercase sm:block">Ali Kouhfar</span>
          </motion.div>

          <div className="hidden min-w-0 items-center gap-6 lg:flex">
            <div className="flex min-w-0 gap-6 overflow-hidden text-[10px] font-black tracking-[0.2em] uppercase">
              {Object.entries(dictionary).map(([key, label]) => (
                <Link
                  key={key}
                  href={`#${key}`}
                  className={clsx(
                    'hover:text-theme relative shrink-0 transition-colors',
                    activeSection === key && 'text-theme'
                  )}
                >
                  {label}
                  {activeSection === key && (
                    <motion.div
                      layoutId="activeNav"
                      className="bg-theme absolute -bottom-1 left-0 h-0.5 w-full"
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex items-center gap-2 rounded-full p-2 text-[10px] font-black tracking-widest uppercase hover:bg-current/10">
                  <IconWorld className="h-4 w-4" />
                  {lang}
                </button>
              </PopoverTrigger>

              <PopoverContent
                align="start"
                className={clsx(
                  'w-32 overflow-hidden rounded-xl p-0',
                  isDarkSection ? 'bg-ink border-zinc-800' : 'bg-bg'
                )}
              >
                {LANGUAGES.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => router.push(language.code)}
                    className={clsx(
                      language.className,
                      'hover:bg-theme w-full px-4 py-3 text-left text-[10px] font-bold tracking-widest uppercase transition-colors hover:text-white',
                      lang === language.code ? 'text-theme' : isDarkSection ? 'text-white' : 'text-ink'
                    )}
                  >
                    {language.label}
                  </button>
                ))}
              </PopoverContent>
            </Popover>

            <div className="hidden gap-1.5 lg:flex">
              {THEME_COLORS.map((color) => (
                <button
                  key={color.value}
                  onClick={() => onThemeColorChange(color.value)}
                  className={clsx(
                    'h-3.5 w-3.5 rounded-full transition-transform hover:scale-125',
                    themeColor === color.value && 'ring-theme ring-offset-bg ring-1 ring-offset-2'
                  )}
                  style={{ backgroundColor: color.value }}
                />
              ))}
            </div>

            <button className="p-2 lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <IconX /> : <IconMenu2 />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-bg fixed inset-0 z-40 px-8 pt-28 lg:hidden"
          >
            <div className="flex flex-col gap-8 text-3xl font-black tracking-tighter uppercase">
              {Object.entries(dictionary).map(([key, label]) => (
                <a
                  key={key}
                  href={`#${key}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={activeSection === key ? 'text-theme' : ''}
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="mt-12 border-t pt-10">
              <p className="text-ink-muted mb-4 text-xs tracking-widest uppercase">Theme</p>

              <div className="flex gap-4">
                {THEME_COLORS.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => onThemeColorChange(color.value)}
                    className={clsx(
                      'h-8 w-8 rounded-full',
                      themeColor === color.value && 'ring-theme ring-offset-bg ring-2 ring-offset-2'
                    )}
                    style={{ backgroundColor: color.value }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  )
}
