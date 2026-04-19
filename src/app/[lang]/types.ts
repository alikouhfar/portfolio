import { AboutDictionary } from '@/types/about'
import { EducationDictionary } from '@/types/education'
import { ExperienceDictionary } from '@/types/experience'
import { FooterDictionary } from '@/types/footer'
import { HeaderDictionary } from '@/types/haeder'
import { HeroDictionary } from '@/types/hero'
import { LanguageDictionary } from '@/types/language'
import { ProjectDictionary } from '@/types/project'
import { SkillDictionary } from '@/types/skill'
import { MotionValue } from 'motion/react'
import { Locale } from './dictionaries'

export type HomeProps = {
  lang: Locale
  dictionary: {
    header: HeaderDictionary
    hero: HeroDictionary
    about: AboutDictionary
    experience: ExperienceDictionary
    education: EducationDictionary
    projects: ProjectDictionary
    skills: SkillDictionary
    languages: LanguageDictionary
    footer: FooterDictionary
  }
}

export type HeaderProps = {
  lang: Locale
  dictionary: HeaderDictionary
}

export type HeroProps = {
  lang: Locale
  dictionary: HeroDictionary
  scrollYProgress: MotionValue<number>
}

export type EducationProps = {
  lang: Locale
  dictionary: EducationDictionary
}

export type ExperienceProps = {
  lang: Locale
  dictionary: ExperienceDictionary
}

export type AboutProps = {
  lang: Locale
  dictionary: AboutDictionary
}

export type ProjectsProps = {
  lang: Locale
  dictionary: ProjectDictionary
}

export type SkillsProps = {
  lang: Locale
  dictionary: SkillDictionary
}

export type LanguagesProps = {
  lang: Locale
  dictionary: LanguageDictionary
}

export type FooterProps = {
  lang: Locale
  dictionary: FooterDictionary
}
