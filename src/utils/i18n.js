import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      job: "Front-End Developer",
      hire: "Hire Me!",
      basedIn: "Based in Nazarabad",
      copyRight: "Ali Kouhfar. All Rights Reserved",
      hero: {
        tag: "Introduce",
        titlePartOne: "Say Hi from ",
        name: "Ali,",
        titlePartTwo: "Front End and Web Developer",
        body: "Hello, and welcome to my portfolio! I'm dedicated to creating cutting-edge web experiences that blend creativity with seamless functionality. With a strong foundation in React, I thrive on tackling complex challenges and bringing visions to fruition. Explore my work below and let's collaborate on your next digital masterpiece!",
        experience: "Years of experience",
        projects: "Projects completed on 1 country",
      },
      about: {
        tag: "About",
        title: "Every great design begin with an even",
        important: " better story",
        body: "Passionate React developer with a focus on crafting seamless user experiences. Skilled in front-end development and UI design, I strive to create intuitive and engaging web applications. Let's collaborate and bring your ideas to life with clean code and creativity!",
      },
      resume: {
        tag: "Resume",
        experience: "Experience",
        education: "Education",
      },
      services: {
        tag: "Services",
        titlePartOne: "My",
        titlePartTwo: "Specializations",
      },
      skills: {
        tag: "Skills",
        coding: "Coding",
        languages: "Languages",
      },
      projects: {
        tag: "Projects",
        titlePartOne: "Featured",
        titlePartTwo: "Projects",
      },
      pricing: {
        tag: "Pricing",
        titlePartOne: "My",
        titlePartTwo: "Pricings",
        noMatch: "Don't find any package match with your plan!",
        newPlan: "Want to setup a new tailor-made package for only you?.",
        contact: "Contact Us",
      },
      contact: {
        tag: "Contact",
        titlePartOne: "Let's Work",
        titlePartTwo: "Together!",
        optional: "Optional",
        name: {
          title: "Full Name",
          placeholder: "Your Full Name",
        },
        email: {
          title: "Email",
          placeholder: "Your Email Address",
        },
        phone: {
          title: "Phone",
          placeholder: "Your Phone Number",
        },
        subject: {
          title: "Subject",
          defaultSubject: "Select a subject",
          subjectOne: "General Inquiry",
          subjectTwo: "Project Collaboration",
          subjectThree: "Job Opportunity",
          subjectFour: "Feedback",
          subjectFive: "Support Request",
          subjectSix: "Other",
        },
        budget: {
          title: "Your Budget",
          placeholder: "A range budget for your project",
        },
        message: {
          title: "Message",
          placeholder: "Write your message here ...",
        },
        attachment: "Add an Attachment",
        send: "Send Message",
      },
    },
  },
  fa: {
    translation: {
      job: "توسعه دهنده فرانت اند",
      hire: "برای همکاری پیام دهید!",
      basedIn: "من اهل نظرآباد هستم",
      copyRight: "تمامی حقوق برای علی کوه‌فر محفوظ است",
      hero: {
        tag: "معرفی",
        titlePartOne: "سلام من ",
        name: "علی",
        titlePartTwo: "هستم، توسعه دهنده فرانت اند",
        body: "به صفحه نمونه کارهای من خوش آمدید! من زمان خودم را وقف ایجاد تجربیات وب پیشرفته کردم که خلاقیت را با عملکرد یکپارچه ترکیب می کند. با یک پایه قوی در React، من در مقابله با چالش های پیچیده و به ثمر رساندن دیدگاه ها پیشرفت می کنم. کارهای من را در زیر مشاهده کنید و بیایید در شاهکار دیجیتال بعدی شما همکاری کنیم!",
        experience: "سال تجربه کاری",
        projects: "پروژه انجام شده در 1 کشور",
      },
      about: {
        tag: "درباره من",
        title: "هر طراحی عالی با یک داستان حتی",
        important: " بهتر شروع می‌شود",
        body: "توسعه دهنده مشتاق React با تمرکز بر ایجاد تجربیات یکپارچه کاربر. من که در توسعه Front-End و طراحی UI ماهر هستم، تلاش می کنم تا برنامه های وب جذاب ایجاد کنم. بیایید همکاری کنیم و ایده های شما را با کدهای تمیز و خلاقیت زنده کنیم!",
      },
      resume: {
        tag: "رزومه",
        experience: "تجربه کاری",
        education: "تحصیلات",
      },
      services: {
        tag: "خدمات",
        titlePartOne: "تخصص‌های",
        titlePartTwo: "من",
      },
      skills: {
        tag: "مهارت‌ها",
        coding: "کدنویسی",
        languages: "زبان‌ها",
      },
      projects: {
        tag: "پروژه‌ها",
        titlePartOne: "پروژه‌های",
        titlePartTwo: "برجسته",
      },
      pricing: {
        tag: "قیمت گذاری",
        titlePartOne: "اشتراک‌های",
        titlePartTwo: "موجود",
        noMatch: "هیچ بسته ای مطابق با طرح خود پیدا نکردید!",
        newPlan:
          "آیا می خواهید یک بسته سفارشی جدید را فقط برای شما تنظیم کنیم؟",
        contact: "با ما درارتباط باشید",
      },
      contact: {
        tag: "تماس",
        titlePartOne: "با من",
        titlePartTwo: "در ارتباط باشید!",
        optional: "اختیاری",
        name: {
          title: "نام و نام خانوادگی",
          placeholder: "نام و نام خانوادگی خود را وارد کنید",
        },
        email: {
          title: "ایمیل",
          placeholder: "ایمیل خود را وارد کنید",
        },
        phone: {
          title: "تلفن",
          placeholder: "شماره تلفن خود را وارد کنید",
        },
        subject: {
          title: "موضوع",
          defaultSubject: "یک موضوع را انتخاب کنید",
          subjectOne: "استعلام عمومی",
          subjectTwo: "همکاری در پروژه",
          subjectThree: "فرصت شغلی",
          subjectFour: "بازخورد",
          subjectFive: "درخواست پشتیبانی",
          subjectSix: "سایر",
        },
        budget: {
          title: "بودجه شما",
          placeholder: "بودجه تقریبی خود را وارد کنید",
        },
        message: {
          title: "پیام",
          placeholder: "پیام خود را بنویسید...",
        },
        attachment: "اضافه کردن فایل ضمیمه",
        send: "ارسال پیام",
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for React
    },
  });

export default i18n;
