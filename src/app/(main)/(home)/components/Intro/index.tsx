import IntroTechnologies from './IntroTechnologies'
import IntroCollaboration from './IntroCollaboration'
import IntroRemote from './IntroRemote'
import IntroAvailable from './IntroAvailable'
import IntroServices from './IntroServices'

const Intro = () => {
  return (
    <section
      id="intro"
      className="mx-auto mb-20 grid w-full max-w-7xl grid-cols-6 gap-4 px-8 md:my-20 md:mt-10 md:auto-rows-[19rem] xl:mt-0"
    >
      <IntroCollaboration />
      <IntroTechnologies />
      <IntroRemote />
      <IntroAvailable />
      <IntroServices />
    </section>
  )
}

export default Intro
