import { IHeaderItem } from '@/types/header-item'
import { generateRandomUUID } from '@/utils/generate-random-uuid'

export const headerItems: Array<IHeaderItem> = [
  {
    id: generateRandomUUID(),
    href: '/',
    label: 'Home'
  },
  {
    id: generateRandomUUID(),
    href: '/projects',
    label: 'Projects'
  },
  {
    id: generateRandomUUID(),
    href: '/about',
    label: 'About'
  },
]
