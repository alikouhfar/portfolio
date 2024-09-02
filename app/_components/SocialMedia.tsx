import {
  IconBrandGithubFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Link from "next/link";
import { FC } from "react";

type JustifyPosition = "start" | "center";

interface ISocialMediaProps {
  justifyPosition: JustifyPosition;
  hasMarginTop: boolean;
}

const SocialMedia: FC<ISocialMediaProps> = ({
  justifyPosition,
  hasMarginTop,
}) => {
  return (
    <ul
      className={`flex items-center justify-${justifyPosition} ${hasMarginTop && "mt-8"} gap-10 text-zinc-800 xl:justify-start dark:text-zinc-100`}
    >
      <li>
        <Link
          href="https://github.com/alikouhfar"
          className="hover:text-primary-violet transition-colors duration-300"
        >
          <IconBrandGithubFilled size={28} />
        </Link>
      </li>
      <li>
        <Link
          href="https://linkedin.com/in/alikouhfar"
          className="hover:text-primary-violet transition-colors duration-300"
        >
          <IconBrandLinkedin size={28} />
        </Link>
      </li>
      <li>
        <Link
          href="https://instagram.com/alikouhfr"
          className="hover:text-primary-violet transition-colors duration-300"
        >
          <IconBrandInstagram size={28} />
        </Link>
      </li>
    </ul>
  );
};

export default SocialMedia;
