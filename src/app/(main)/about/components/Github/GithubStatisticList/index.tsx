import { FolderGit2, GitFork, Star, Users } from 'lucide-react'
import GithubStatistic from './GithubStatistic'
import { GithubStatisticColorsEnum } from './enums'
import { getUserData } from './utils'

const GithubStatisticList = async () => {
  const { followers, repositories } = await getUserData()

  const totalStars = repositories.nodes.reduce((acc, repository) => acc + repository.stargazerCount, 0)
  const totalForks = repositories.nodes.reduce((acc, repository) => acc + repository.forkCount, 0)

  return (
    <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      <GithubStatistic
        icon={<Users />}
        label="Followers"
        value={followers.totalCount}
        color={GithubStatisticColorsEnum.Pink}
      />

      <GithubStatistic
        icon={<Star />}
        label="Total Stars"
        value={totalStars}
        color={GithubStatisticColorsEnum.Amber}
      />

      <GithubStatistic
        icon={<FolderGit2 />}
        label="Repositories"
        value={repositories.totalCount}
        color={GithubStatisticColorsEnum.Blue}
      />

      <GithubStatistic
        icon={<GitFork />}
        label="Total Forks"
        value={totalForks}
        color={GithubStatisticColorsEnum.Emerald}
      />
    </ul>
  )
}

export default GithubStatisticList
