import { GithubStatisticColorsType } from '@/app/(main)/about/types/github-statistic-colors'
import { ReactNode } from 'react'

export interface IGtihubStatisticProps {
  icon: ReactNode
  label: string
  value: number
  color: GithubStatisticColorsType
}
