'use client'

import { useQuery } from '@tanstack/react-query'
import { FolderGit2, GitFork, Star, Users } from 'lucide-react'
import { GetUserData } from '../../../services/github-statistic-list'
import GithubStatistic from './GithubStatistic'
import GithubStatisticListSkeleton from './GithubStatisticListSkeleton'

const GithubStatisticList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['user-data'],
    queryFn: GetUserData,
  })

  if (isLoading) return <GithubStatisticListSkeleton />

  const totalStars = data?.repositories.nodes.reduce((acc, repository) => acc + repository.stargazerCount, 0)
  const totalForks = data?.repositories.nodes.reduce((acc, repository) => acc + repository.forkCount, 0)

  return (
    <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      <GithubStatistic
        color='pink'
        icon={<Users />}
        label="Followers"
        value={data?.followers.totalCount as number}
      />

      <GithubStatistic
        color='amber'
        icon={<Star />}
        label="Total Stars"
        value={totalStars as number}
      />

      <GithubStatistic
        color='blue'
        icon={<FolderGit2 />}
        label="Repositories"
        value={data?.repositories.totalCount as number}
      />

      <GithubStatistic
        color='emerald'
        icon={<GitFork />}
        label="Total Forks"
        value={totalForks as number}
      />
    </ul>
  )
}

export default GithubStatisticList
