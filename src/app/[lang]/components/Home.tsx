'use client'

import { Footer } from '@/components/shared/Footer'
import { Header } from '@/components/shared/Header'
import { useScroll } from 'motion/react'
import { FC, useRef } from 'react'
import { HomeProps } from '../types'
import { About } from './About'
import { Education } from './Education'
import { Experience } from './Experience'
import { Hero } from './Hero'
import { Languages } from './Languages'
import { Projects } from './Projects'
import { Skills } from './Skills'

const Home: FC<HomeProps> = ({ lang, dictionary }) => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <div ref={containerRef} className="relative min-h-screen">
      <Header lang={lang} dictionary={dictionary.header} />

      <Hero lang={lang} dictionary={dictionary.hero} scrollYProgress={scrollYProgress} />
      <About lang={lang} dictionary={dictionary.about} />
      <Experience lang={lang} dictionary={dictionary.experience} />
      <Education lang={lang} dictionary={dictionary.education} />
      <Projects lang={lang} dictionary={dictionary.projects} />
      <Skills lang={lang} dictionary={dictionary.skills} />
      <Languages lang={lang} dictionary={dictionary.languages} />

      <Footer lang={lang} dictionary={dictionary.footer} />
    </div>
  )
}

export default Home
