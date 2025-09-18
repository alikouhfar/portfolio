import { Skeleton } from '@/components/ui/skeleton'

const GithubStatisticListSkeleton = () => {
  return (
    <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      <Skeleton className="h-[86px] rounded-xl" />
      <Skeleton className="h-[86px] rounded-xl" />
      <Skeleton className="h-[86px] rounded-xl" />
      <Skeleton className="h-[86px] rounded-xl" />
    </ul>
  )
}

export default GithubStatisticListSkeleton
