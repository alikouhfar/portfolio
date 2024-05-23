import { Service } from "../interfaces/service.interface";

export const services: Service[] = [
  {
    id: 1,
    tag: "development",
    count: 2,
    title: {
      en: "Development",
      fa: "توسعه",
    },
    body: {
      en: "I build website go live with HTML, JavaScript and React JS.",
      fa: "من وب سایت را با HTML، جاوا اسکریپت و React JS می سازم.",
    },
  },
  {
    id: 2,
    tag: "design",
    count: 2,
    title: {
      en: "Website Design",
      fa: "طراحی سایت",
    },
    body: {
      en: "I creat digital products with unique ideas using Figma.",
      fa: "من محصولات دیجیتال را با ایده های منحصر به فرد با استفاده از Figma ایجاد می کنم.",
    },
  },
];
