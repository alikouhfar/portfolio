export default function HomeIntroTechnologiesBrowserComponent() {
  return (
    <div className="group relative bottom-0 z-20 h-44 w-56 overflow-hidden rounded-t-md border border-b-0 border-neutral-200 transition-all duration-300 group-hover:translate-y-4 dark:border-neutral-800">
      <div className="relative z-30 flex h-3 w-full items-center justify-start gap-x-1 bg-gray-100 px-2 dark:bg-neutral-800">
        <div className="size-1.5 rounded-full bg-red-500"></div>
        <div className="size-1.5 rounded-full bg-slate-300"></div>
        <div className="size-1.5 rounded-full bg-green-500"></div>
      </div>
      <div
        aria-hidden="true"
        className="relative flex h-full flex-1 flex-col items-center bg-neutral-300 dark:bg-neutral-900"
      >
        <div className="mt-2 flex h-4 w-[4rem] items-center justify-end rounded-full bg-neutral-400 px-1 transition-all duration-300 group-hover:w-[6rem] group-hover:bg-neutral-500 dark:bg-neutral-600 dark:group-hover:bg-neutral-800">
          <div className="h-2 w-2 rounded-full bg-neutral-50 transition-all duration-300 group-hover:bg-neutral-200 dark:bg-neutral-900"></div>
        </div>
        <div className="mt-6">
          <p className="relative z-20 w-48 bg-gradient-to-b from-slate-700 to-slate-800 bg-clip-text text-center text-base font-bold text-transparent dark:from-slate-100 dark:to-slate-400">
            Purposeful, standout websites built for results
          </p>
          <div className="mt-4 flex justify-center gap-x-2">
            <button className="w-14 rounded-sm bg-gradient-to-br from-purple-500 to-indigo-600 py-1 text-[6px] text-white hover:bg-gradient-to-br hover:from-purple-600 hover:to-indigo-700">
              Get started
            </button>
            <button className="w-14 rounded-sm border border-slate-600 py-1 text-[6px] text-black hover:border-slate-200 dark:text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
