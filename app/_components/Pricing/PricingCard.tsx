import { IPricing } from "@/app/_models/pricing.model";
import dotsSmall from "@/public/dots-small.png";
import { IconArrowNarrowRight, IconChecks } from "@tabler/icons-react";
import Image from "next/image";
import { FC } from "react";

interface IPricingCardProps {
  plan: IPricing;
}

const PricingCard: FC<IPricingCardProps> = ({ plan }) => {
  const handleClick = () => {
    const sectionElement = document.querySelector("#contact") as HTMLElement;

    window.scrollTo({
      top: sectionElement.offsetTop - 120,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {plan.isPopluar && (
        <div className="absolute -top-4 right-12 z-30 block h-8 rounded-3xl border-2 border-zinc-800 bg-primary-green px-6 text-xs font-bold uppercase leading-7 text-white shadow-primary-light xl:-top-8 xl:scale-105 dark:shadow-primary-dark">
          <span>Popular</span>
        </div>
      )}
      <div
        className={`${plan.isPopluar && "border-2 border-zinc-800 xl:scale-105 dark:border-zinc-400"} relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-8 shadow transition-all duration-700 dark:bg-card-dark`}
      >
        <div>
          <span className="text-xs font-bold uppercase text-zinc-800 transition duration-700 dark:text-zinc-100">
            {plan.title}
          </span>
          <div className="mb-5 mt-12 flex items-center gap-4 text-3xl font-bold text-zinc-800 transition duration-700 dark:text-zinc-100">
            <span>
              {plan.price}
              <b className="text-primary-green">$</b>
            </span>
            <p className="text-base">/ {plan.rate}</p>
          </div>
          <p className="mb-8 min-h-24 text-zinc-800 transition duration-700 dark:text-zinc-100">
            {plan.description}
          </p>
        </div>
        <div className="flex flex-1 flex-col justify-between text-zinc-800 transition duration-700 dark:text-zinc-100">
          <ul className="flex flex-col gap-2">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <div>
                  <IconChecks size={20} className="text-primary-green" />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={handleClick}
            className="group/button relative z-50 mt-10 inline-block h-14 w-full overflow-hidden rounded-[50px] border-2 border-zinc-900 px-10 text-center align-top text-sm font-bold uppercase leading-[50px] tracking-wider text-white shadow-primary-light transition duration-700 before:absolute before:left-1/2 before:top-1/2 before:h-cv-button before:w-cv-button before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-[50px] before:bg-primary-green before:transition-all before:content-[''] hover:shadow-none dark:border-zinc-300 dark:shadow-primary-dark"
          >
            <span className="relative z-20">Start Project</span>
            <div className="absolute right-5 top-1/2 z-20 -translate-y-1/2 transition-all duration-500 group-hover/button:right-6 md:right-10 group-hover/button:md:right-12">
              <IconArrowNarrowRight size={24} />
            </div>
          </button>
        </div>
        <div className="absolute -bottom-5 -right-5 h-32 w-32">
          <Image
            fill
            src={dotsSmall}
            alt="Dots Element"
            className={`transition duration-700 dark:opacity-60 dark:invert`}
          />
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
