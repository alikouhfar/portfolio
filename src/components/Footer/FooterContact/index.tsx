import { ArrowRight } from 'lucide-react'

const FooterContact = () => {
  return (
    <section id="contact" className="relative my-20 flex w-full justify-center">
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-y-2 py-10 text-center lg:mx-0">
        <div className="group transform-none">
          <button className="group relative my-10 inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-black/30 bg-black/20 py-[3px] pr-[3px] pl-2 text-base font-medium opacity-85 backdrop-blur-xs transition-all group-hover:scale-125 hover:bg-transparent md:py-1 md:pr-1 md:pl-3 dark:border-white/10 dark:bg-white/10">
            <span className="z-10 px-3 text-black transition-colors duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
              Get In Touch
            </span>
            <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 dark:bg-white"></span>
            <span className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-black p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5 dark:bg-white">
              <ArrowRight
                size={18}
                className="text-black transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0"
              />
              <ArrowRight
                size={18}
                className="absolute -translate-x-5 text-black opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              />
            </span>
          </button>
        </div>
        <p className="tracking-wid text-base font-semibold lg:text-2xl">
          Available for full-time or contract opportunities.
        </p>
        <p className="my-2 text-sm font-extralight tracking-wide text-balance opacity-75 lg:text-xl">
          I build fast, responsive web apps that users
          <br />
          love—melding functionality with flawless UI.
        </p>
      </div>
    </section>
  )
}

export default FooterContact
