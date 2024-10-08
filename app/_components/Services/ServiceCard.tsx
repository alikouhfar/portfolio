import { IService } from "@/app/_models/service.model";
import dotsSmall from "@/public/dots-small.png";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { FC } from "react";

interface IServiceCardProps {
  service: IService;
}

const ServiceCard: FC<IServiceCardProps> = ({ service }) => {
  const handleClick = () => {
    const sectionElement = document.querySelector("#pricing") as HTMLElement;

    window.scrollTo({
      top: sectionElement.offsetTop - 120,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-8 text-zinc-800 opacity-100 shadow transition duration-700 dark:bg-card-dark dark:text-zinc-100">
      <span className="text-primary-violet mb-8 text-[13px] font-semibold uppercase sm:mb-16">
        {service.category}
      </span>
      <div className="flex flex-1 flex-col justify-between">
        <h5 className="mb-4 text-2xl font-bold leading-6">{service.title}</h5>
        <div>
          <p className="min-h-52 leading-7 opacity-80 sm:min-h-44">
            {service.description}
          </p>
          <button
            onClick={handleClick}
            className="hover:text-primary-violet relative flex gap-3 align-top text-base font-bold leading-6 text-zinc-800 transition-all duration-500 hover:gap-2 dark:text-zinc-100"
          >
            <span>See Pricing</span>
            <div>
              <IconArrowNarrowRight size={24} className="text-primary-violet" />
            </div>
          </button>
        </div>
      </div>
      <div className="absolute -bottom-5 -right-5 h-32 w-32">
        <Image
          fill
          src={dotsSmall}
          alt="Dots Element"
          className="transition duration-700 dark:opacity-60 dark:invert"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
