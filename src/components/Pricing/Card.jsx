export default function ({ pricing }) {
  return (
    <div className="mobile:col-span-2">
      <div className="flex h-full flex-col rounded-[30px] border border-zinc-600 p-10 pt-9 transition-all hover:border-theme">
        <div className="mb-9 border-b border-zinc-600 pb-5 laptop:min-h-44">
          <div className="mb-8 flex items-start justify-between gap-1">
            <h4 className="m-0 flex-[2] text-lg font-light uppercase text-white">
              {pricing.title}
            </h4>
            <p className="m-0 flex-[3] text-right text-xs font-medium leading-5 text-zinc-500">
              {pricing.slogan}
            </p>
          </div>
          <h1 className="m-0 font-oswald text-6xl font-normal text-theme">
            ${pricing.price}
            <span className="text-xl text-zinc-400"> / hour</span>
          </h1>
        </div>
        <ul className="mb-20 flex flex-col gap-4">
          {pricing.features.map((feature, index) => (
            <li className="text-sm font-light leading-4 text-white" key={index}>
              {feature}
            </li>
          ))}
        </ul>
        <a
          href="#"
          className="mt-auto inline-flex cursor-pointer items-center justify-center rounded-[30px] border-2 border-theme bg-theme px-14 py-3 text-center font-medium uppercase text-zinc-900 transition-all hover:border-theme hover:bg-transparent hover:text-theme"
        >
          pick this package
        </a>
      </div>
    </div>
  );
}
