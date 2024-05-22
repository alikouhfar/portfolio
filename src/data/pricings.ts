import { Price } from "../interfaces/price.interface";

export const pricings: Price[] = [
  {
    id: 1,
    title: {
      en: "basic",
      fa: "پایه",
    },
    price: {
      en: "$25",
      fa: "150,000تومان",
    },
    slogan: {
      en: "Building the Basics, Crafting Your Foundation",
      fa: "ساختن اصول اولیه، ایجاد بنیاد شما",
    },
    features: [
      {
        en: "Development of basic React components and UI elements",
        fa: "توسعه اجزای اصلی React و عناصر UI",
      },
      {
        en: "Bug fixes and minor updates",
        fa: "رفع اشکال و به روز رسانی های جزئی",
      },
      {
        en: "Email support (response within 24-48 hours)",
        fa: "پشتیبانی ایمیل (پاسخ در عرض 24-48 ساعت)",
      },
      {
        en: "Code review and optimization",
        fa: "بررسی و بهینه سازی کد",
      },
    ],
  },
  {
    id: 2,
    title: {
      en: "premium",
      fa: "حرفه‌ای",
    },
    price: {
      en: "$60",
      fa: "300,000تومان",
    },
    slogan: {
      en: "Elevate Your Vision, Transforming Ideas into Excellence",
      fa: "چشم انداز خود را ارتقا دهید، ایده ها را به مزیت تبدیل کنید",
    },
    features: [
      {
        en: "Front-End development with React and backend integration (Node.js, Express, etc.)",
        fa: "توسعه Front-End با ادغام React و Backend (Node.js، Express و غیره)",
      },
      {
        en: "Custom UI/UX design and implementation",
        fa: "طراحی و پیاده سازی UI/UX سفارشی",
      },
      {
        en: "Priority support with faster response times (within 12-24 hours)",
        fa: "اولویت در پشتیبانی با زمان پاسخ سریعتر (در عرض 12-24 ساعت)",
      },
      {
        en: "Regular maintenance and updates",
        fa: "نگهداری و به روز رسانی منظم",
      },
      {
        en: "Performance monitoring and optimization",
        fa: "نظارت بر عملکرد و بهینه سازی",
      },
      {
        en: "Dedicated project manager for ongoing communication and coordination",
        fa: "مدیر پروژه اختصاصی برای ارتباط و هماهنگی مداوم",
      },
    ],
  },
];
