import { GithubStatisticColorsEnum } from '@/app/(main)/about/enums'
import { ReactNode } from 'react'

export type GtihubStatisticPropsType = {
  icon: ReactNode
  label: string
  value: number
  color: GithubStatisticColorsEnum
}
