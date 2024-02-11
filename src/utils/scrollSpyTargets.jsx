import {
  IconBriefcase,
  IconCode,
  IconCurrencyDollar,
  IconHome,
  IconMessage,
  IconPhoneCall,
  IconStarsFilled,
  IconUser,
  IconVip,
} from "@tabler/icons-react";

export const scrollSpyTargets = [
  {
    id: "home",
    icon: <IconHome className="mx-auto" strokeWidth="1.8" size={20} />,
  },
  {
    id: "about",
    icon: (
      <IconUser
        className="mx-auto"
        color="currentColor"
        strokeWidth="1.8"
        size={20}
      />
    ),
  },
  {
    id: "resume",
    icon: <IconBriefcase className="mx-auto" strokeWidth="1.8" size={20} />,
  },
  {
    id: "services",
    icon: <IconVip className="mx-auto" strokeWidth="1.8" size={20} />,
  },
  {
    id: "skills",
    icon: <IconStarsFilled className="mx-auto" strokeWidth="1.8" size={20} />,
  },
  {
    id: "projects",
    icon: <IconCode className="mx-auto" strokeWidth="1.8" size={20} />,
  },
  {
    id: "testimonials",
    icon: <IconMessage className="mx-auto" strokeWidth="1.8" size={20} />,
  },
  {
    id: "pricing",
    icon: (
      <IconCurrencyDollar className="mx-auto" strokeWidth="1.8" size={20} />
    ),
  },
  {
    id: "contact",
    icon: <IconPhoneCall className="mx-auto" strokeWidth="1.8" size={20} />,
  },
];
