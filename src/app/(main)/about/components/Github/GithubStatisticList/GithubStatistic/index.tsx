import { FC } from 'react'
import { githubStatisticColorTheme } from '@/app/(main)/about/components/Github/GithubStatisticList/lib'
import { GtihubStatisticPropsType } from './types'

const GithubStatistic: FC<GtihubStatisticPropsType> = (props) => {
  const colorTheme = githubStatisticColorTheme[props.color]

  return (
    <li
      className={`flex items-center gap-4 overflow-hidden rounded-xl border ${colorTheme.border} ${colorTheme.background} p-3 transition-all duration-300 hover:${colorTheme.background.replace('900', '800')} hover:shadow-[0_0_15px_2px] ${colorTheme.glow} md:p-4`}
    >
      <div className={`h-12 w-12 rounded-lg ${colorTheme.iconBackground} p-3 ${colorTheme.iconColor}`}>
        {props.icon}
      </div>
      <div>
        <h4 className="line-clamp-1 text-sm text-zinc-400">{props.label}</h4>
        <p className="text-xl font-bold text-zinc-100 md:text-2xl">{props.value?.toLocaleString() ?? 0}</p>
      </div>
    </li>
  )
}

export default GithubStatistic
