import { RefObject } from 'react'

export interface ISidebarItemProps {
  id: string
  ref: RefObject<HTMLLIElement | null>
  emoji?: string
  title: string
  isActive: boolean
}
