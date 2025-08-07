import Navbar from '@/app/_components/navbar'
import Hero from '@/app/_components/hero/hero'
import Intro from '@/app/_components/intro/intro'

export default function Home() {
  return (
    <>
      <div className="pointer-events-none fixed top-0 left-1/2 z-40 h-24 w-full -translate-x-1/2">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 z-10 opacity-100"
            style={{
              backdropFilter: 'blur(3px)',
              maskImage:
                'linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%);-webkit-mask-image:linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)',
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 z-20 opacity-100"
            style={{
              backdropFilter: 'blur(5px)',
              maskImage:
                'linear-gradient(to top, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 1) 100%);-webkit-mask-image:linear-gradient(to top, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 1) 100%)',
            }}
          />
        </div>
      </div>
      <Navbar />
      <main className="relative flex flex-col items-center justify-center">
        <section className="relative mb-10 min-h-screen w-full overflow-hidden">
          <Hero />
        </section>
        <div className="w-full max-w-7xl px-4">
          <Intro />
        </div>
      </main>
    </>
  )
}
