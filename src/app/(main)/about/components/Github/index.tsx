import SectionTitle from '@/components/SectionTitle'
import GithubStatisticList from './GithubStatisticList'

const Github = () => {
  return (
    <section id="experiences" className="relative mx-auto my-24 mb-32 w-full max-w-6xl px-8 md:mt-36">
      <SectionTitle title="Behind the Code" description="My Github" descriptionKeyword="Journey" />
      <GithubStatisticList />
    </section>
  )
}

export default Github
