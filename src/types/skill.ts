import { ReactNode } from 'react'

export type Skill = {
  id: string
  name: string
  desc: string
  size: string
  icon: ReactNode
}

export type SkillDictionary = {
  title: string
  heading: string
}
