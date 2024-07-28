import {
  IconBrandGithubFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Link from "next/link";

type JustifyPosition = "start" | "center";

interface ISocialMediaProps {
  justifyPosition: JustifyPosition;
  hasMarginTop: boolean;
}

export default function SocialMedia({
  justifyPosition,
  hasMarginTop,
}: ISocialMediaProps) {
  return (
    <ul
      className={`flex items-center justify-${justifyPosition} ${hasMarginTop && "mt-8"} gap-6 text-zinc-800 xl:justify-start dark:text-zinc-100`}
    >
      <li>
        <Link
          href="/"
          className="transition-colors duration-300 hover:text-primary-green"
        >
          <IconBrandGithubFilled size={28} />
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="transition-colors duration-300 hover:text-primary-green"
        >
          <IconBrandLinkedin size={28} />
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="transition-colors duration-300 hover:text-primary-green"
        >
          <IconBrandInstagram size={28} />
        </Link>
      </li>
    </ul>
  );
}
