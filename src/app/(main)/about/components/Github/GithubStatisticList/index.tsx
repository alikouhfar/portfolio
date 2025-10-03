'use client'

import { useQuery } from '@tanstack/react-query'
import { getUserData } from './utils'
import GithubStatisticListSkeleton from './GithubStatisticListSkeleton'
import GithubStatistic from './GithubStatistic'
import { FolderGit2, GitFork, Star, Users } from 'lucide-react'
import { GithubStatisticColorsEnum } from './enums'

const GithubStatisticList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['user-data'],
    queryFn: getUserData,
  })

  if (isLoading) return <GithubStatisticListSkeleton />

  const totalStars = data?.repositories.nodes.reduce((acc, repository) => acc + repository.stargazerCount, 0)
  const totalForks = data?.repositories.nodes.reduce((acc, repository) => acc + repository.forkCount, 0)

  return (
    <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      <GithubStatistic
        icon={<Users />}
        label="Followers"
        value={data?.followers.totalCount as number}
        color={GithubStatisticColorsEnum.Pink}
      />

      <GithubStatistic
        icon={<Star />}
        label="Total Stars"
        value={totalStars as number}
        color={GithubStatisticColorsEnum.Amber}
      />

      <GithubStatistic
        icon={<FolderGit2 />}
        label="Repositories"
        value={data?.repositories.totalCount as number}
        color={GithubStatisticColorsEnum.Blue}
      />

      <GithubStatistic
        icon={<GitFork />}
        label="Total Forks"
        value={totalForks as number}
        color={GithubStatisticColorsEnum.Emerald}
      />
    </ul>
  )
}

export default GithubStatisticList
