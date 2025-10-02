import { RefObject } from 'react'

export type SidebarItemPropsType = {
  id: string
  ref: RefObject<HTMLLIElement | null>
  emoji?: string
  title: string
  isActive: boolean
}
