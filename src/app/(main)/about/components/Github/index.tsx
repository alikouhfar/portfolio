import SectionTitle from '@/components/SectionTitle'
import { Suspense } from 'react'
import GithubStatisticList from './GithubStatisticList'
import GithubSkeletonLoading from './GithubStatisticList/GithubStatisticListSkeleton'

const Github = () => {
  return (
    <section id="experiences" className="relative mx-auto my-24 mb-32 w-full max-w-6xl px-8 md:mt-36">
      <SectionTitle title="Behind the Code" description="My Github" descriptionKeyword="Journey" />
      <Suspense fallback={<GithubSkeletonLoading />}>
        <GithubStatisticList />
      </Suspense>
    </section>
  )
}

export default Github
