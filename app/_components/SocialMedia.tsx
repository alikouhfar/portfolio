import {
  IconBrandGithubFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Link from "next/link";

export default function SocialMedia({
  justifyPosition,
}: {
  justifyPosition: string;
}) {
  return (
    <ul
      className={`mt-8 flex items-center justify-${justifyPosition} gap-6 text-zinc-900 xl:justify-start dark:text-zinc-100`}
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
