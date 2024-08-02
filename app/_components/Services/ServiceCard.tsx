import dotsSmall from "@/public/dots-small.png";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { IService } from "@/app/_models/service.model";

interface IProps {
  service: IService;
}

export default function ServiceCard({ service }: IProps) {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-8 text-zinc-800 opacity-100 shadow transition duration-700 dark:bg-card-dark dark:text-zinc-100">
      <span className="mb-16 text-[13px] font-semibold uppercase text-primary-green">
        {service.category}
      </span>
      <div className="flex flex-1 flex-col justify-between">
        <h5 className="mb-4 text-2xl font-bold leading-6">{service.title}</h5>
        <div>
          <p className="min-h-44 leading-7 opacity-80">{service.description}</p>
          <Link
            href="https://luique.bslthemes.com/#pricing-section"
            className="relative flex gap-3 align-top text-base font-bold leading-6 text-zinc-800 transition-all duration-500 hover:gap-2 hover:text-primary-green dark:text-zinc-100"
          >
            <span>See Pricing</span>
            <div>
              <IconArrowNarrowRight size={24} className="text-primary-green" />
            </div>
          </Link>
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
}

/*
    position: absolute;
    right: -24px;
    bottom: -24px;
    width: 141px;
    height: 141px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
 */
