import CopyToClipboardButton from '@/components/CopyToClipboardButton'

const IntroAvailable = () => {
  return (
    <div className="group relative col-span-6 flex size-full flex-col justify-between overflow-hidden rounded-xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] max-md:h-[19rem] md:col-span-3 lg:col-span-2 dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]">
      <div className="size-full">
        <div className="flex size-full flex-col items-center justify-center bg-cover bg-center">
          <div
            className="absolute inset-0 z-[-1] h-37.5 w-full overflow-hidden bg-neutral-950/80 opacity-100"
            style={{
              maskImage: 'linear-gradient(rgb(0, 0, 0) 40%, rgba(0, 0, 0, 0) 100%)',
            }}
          ></div>
          <span
            className="relative w-full -translate-y-4 py-2 text-center text-3xl font-bold text-balance text-[rgb(255,255,255,90%)]"
            style={{
              textShadow:
                'rgba(255, 255, 255, 0.3) 0px 0px 10px, rgba(255, 255, 255, 0.2) 0px 0px 20px, rgba(255, 255, 255, 0.1) 0px 0px 30px',
            }}
          >
            Available for your next digital challenge
          </span>
          <CopyToClipboardButton content={process.env.NEXT_PUBLIC_EMAIL as string}>
            <p>{process.env.NEXT_PUBLIC_EMAIL}</p>
          </CopyToClipboardButton>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-neutral-800/10" />
    </div>
  )
}

export default IntroAvailable