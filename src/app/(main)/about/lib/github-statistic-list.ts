import { IGithubStatisticColorTheme } from "../types/github-statistic-color-theme";
import { GithubStatisticColorsType } from "../types/github-statistic-colors";

export const githubStatisticColorTheme: Record<GithubStatisticColorsType, IGithubStatisticColorTheme> = {
  pink: {
    border: 'border-pink-500/30',
    background: 'bg-pink-900/10',
    iconBackground: 'bg-pink-900/20',
    iconColor: 'text-pink-400',
    glow: 'hover:shadow-pink-500/30',
  },
  amber: {
    border: 'border-amber-500/30',
    background: 'bg-amber-900/10',
    iconBackground: 'bg-amber-900/20',
    iconColor: 'text-amber-400',
    glow: 'hover:shadow-amber-500/30',
  },
  blue: {
    border: 'border-blue-500/30',
    background: 'bg-blue-900/10',
    iconBackground: 'bg-blue-900/20',
    iconColor: 'text-blue-400',
    glow: 'hover:shadow-blue-500/30',
  },
  emerald: {
    border: 'border-emerald-500/30',
    background: 'bg-emerald-900/10',
    iconBackground: 'bg-emerald-900/20',
    iconColor: 'text-emerald-400',
    glow: 'hover:shadow-emerald-500/30',
  },
}
