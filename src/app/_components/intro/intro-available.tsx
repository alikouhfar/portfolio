import Image from 'next/image'
import { Copy } from 'lucide-react'

export default function IntroAvailable() {
  return (
    <div className="group relative col-span-6 flex size-full transform-gpu flex-col justify-between overflow-hidden rounded-xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] max-md:h-[19rem] md:col-span-3 lg:col-span-2 dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]">
      <div className="size-full">
        <div className="flex size-full flex-col items-center justify-center bg-cover bg-center">
          <div
            className="absolute inset-0 z-[-1] h-[150px] w-full overflow-hidden bg-neutral-950/80 opacity-100"
            style={{
              maskImage: 'linear-gradient(rgb(0, 0, 0) 40%, rgba(0, 0, 0, 0) 100%)',
            }}
          >
            <Image
              alt="crumpled paper texture"
              src="/crumpled-paper.avif"
              fill
              sizes="100vw"
              loading="lazy"
              decoding="async"
              className="object-cover text-transparent"
              priority={false}
            />
          </div>
          <div className="relative mt-2">
            <Image
              aria-hidden="true"
              draggable={false}
              src="/wings.svg"
              alt="wings"
              className="opacity-0 select-none dark:opacity-100"
              height={100}
              width={100}
            />
            <svg
              className="absolute top-1/2 left-1/2 z-50 w-8 -translate-x-1/2 -translate-y-1/2 md:w-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 5350 5350"
            >
              <path
                className="fill-white"
                d="M265 4069c-70-20-71-59-4-197 29-59 78-161 109-227 32-66 85-178 119-248 77-159 167-347 236-492 29-60 81-168 115-240 34-71 79-166 100-210 21-44 62-132 93-195 30-63 101-212 157-330 240-504 311-652 373-780 35-74 101-210 145-303 90-186 96-193 186-184 58 5 76 23 124 121 341 693 462 946 462 968 0 10 3 18 8 18 4 0 17 19 29 42 27 52 229 469 288 593 23 50 88 182 143 295 55 113 165 340 245 505 80 165 188 389 241 499 53 109 103 214 112 235 18 44 11 91-17 117-20 18-41 19-303 19-281 0-281 0-344-29-110-51-132-84-347-521-106-214-303-613-437-886-135-273-251-499-257-503-19-12-39 11-73 83-17 36-85 176-151 311-66 135-134 277-152 315-18 39-65 138-105 220-82 169-166 344-250 520-153 323-181 373-230 419-73 68-112 76-369 75-119 0-229-5-246-10z"
              ></path>
              <path
                className="fill-white"
                d="M3922 3999c-42-21-47-29-134-208-143-293-148-310-107-347 19-17 43-20 253-24 274-7 308-16 406-107 209-193 166-551-82-696-100-58-168-67-520-67-344 0-370-3-403-53-9-14-54-107-101-206-92-200-101-237-59-269 24-19 45-20 373-24 347-4 347-4 422-39 137-65 210-175 210-317 0-176-102-308-267-348-46-10-182-13-642-14-584 0-584 0-618-38-30-32-93-155-234-460-37-80-38-124-3-151 26-21 33-21 788-21 708 0 769 1 876 20 238 40 409 119 565 262 120 109 221 278 266 443 45 169 34 388-28 557-30 81-104 197-157 247-20 19-36 43-36 52 0 10 32 40 78 72 309 217 445 544 388 927-66 435-413 770-851 820-49 5-146 10-215 10-108 0-131-3-168-21z"
              ></path>
            </svg>
          </div>
          <span
            className="relative w-full -translate-y-4 py-2 text-center text-3xl font-bold text-balance text-[rgb(255,255,255,90%)]"
            style={{
              textShadow:
                'rgba(255, 255, 255, 0.3) 0px 0px 10px, rgba(255, 255, 255, 0.2) 0px 0px 20px, rgba(255, 255, 255, 0.1) 0px 0px 30px',
            }}
          >
            Available for your next digital challenge
          </span>
          <div className="relative flex">
            <button
              type="button"
              className="flex cursor-pointer items-center gap-2 py-3 text-base font-light text-white/75 outline-hidden transition-all duration-300 hover:text-white/90"
            >
              <Copy size={20} />
              {process.env.NEXT_PUBLIC_EMAIL}
            </button>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-neutral-800/10" />
    </div>
  )
}
