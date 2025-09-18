import { Suspense } from 'react'
import Education from './components/Education'
import Experience from './components/Experience'
import Github from './components/Github'
import GithubSkeletonLoading from './components/Github/GithubStatisticList/GithubStatisticListSkeleton'

const About = () => {
  return (
    <>
      <Education />
      <Experience />
      <Github />
    </>
  )
}

export default About
