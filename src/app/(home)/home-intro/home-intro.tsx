import HomeIntroCollaboration from '@/app/_components/home-intro/home-intro-collaboration'
import HomeIntroRemote from '@/app/_components/home-intro/home-intro-remote'
import HomeIntroServices from '@/app/_components/home-intro/home-intro-services'
import HomeIntroAvailable from '@/app/_components/home-intro/home-intro-available'
import HomeIntroTechnologies from '@/app/_components/home-intro/home-intro-technologies'

export default function HomeIntro() {
  return (
    <section className="mx-auto mb-20 grid w-full grid-cols-6 gap-4 md:my-20 md:max-w-full md:auto-rows-[19rem]">
      <HomeIntroCollaboration />
      <HomeIntroTechnologies />
      <HomeIntroRemote />
      <HomeIntroAvailable />
      <HomeIntroServices />
    </section>
  )
}
