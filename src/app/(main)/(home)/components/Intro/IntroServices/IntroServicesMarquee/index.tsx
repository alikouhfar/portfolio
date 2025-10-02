import Marquee from 'react-fast-marquee'
import { services } from './lib'

const IntroServicesMarquee = () => {
  return (
    <Marquee pauseOnHover gradient={false} speed={20} loop={100} className="p-2">
      {services.map((service, index) => (
        <figure
          key={index}
          className="relative mx-2 min-h-44 w-32 cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] p-4 blur-[1px] transition-all duration-300 ease-out hover:bg-gray-950/[.05] hover:blur-none dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        >
          <div className="flex flex-row items-center gap-2">
            <div className="flex flex-col">
              <figcaption className="text-sm font-medium dark:text-white">{service.title}</figcaption>
            </div>
          </div>
          <blockquote className="mt-2 text-xs">{service.content}</blockquote>
        </figure>
      ))}
    </Marquee>
  )
}

export default IntroServicesMarquee