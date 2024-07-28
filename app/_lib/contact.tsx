import {
  IconBriefcase2,
  IconMail,
  IconMap,
  IconPhone,
} from "@tabler/icons-react";
import { IContact } from "../_models/contact.model";

export const contact: IContact[] = [
  {
    icon: <IconMap size={22} />,
    title: "Address",
    data: "Nazarabad, Alborz, Iran",
  },
  {
    icon: <IconBriefcase2 size={22} />,
    title: "Freelance",
    data: "Available Right Now",
  },
  {
    icon: <IconMail size={22} />,
    title: "Email",
    data: "alikouhfr@gmail.com",
  },
  {
    icon: <IconPhone size={22} />,
    title: "Phone",
    data: "+989355846164",
  },
];
