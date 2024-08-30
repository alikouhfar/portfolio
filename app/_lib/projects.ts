import { IProject } from "@/app/_models/project.model";

export const projects: IProject[] = [
  {
    id: 1,
    category: "Portfolio Website",
    tag: "portfolio-website",
    title: "Personal Portfolio Showcase of Ali Kouhfar",
    client: "Ali Kouhfar",
    description:
      "A modern, responsive portfolio site built with Next.js and Tailwind CSS. Showcases projects, skills, and professional journey with dynamic content and smooth animations.",
    descriptionParagraphOne:
      "Ali Kouhfar's portfolio is much more than just a collection of his work—it's a vibrant showcase of his talent, creativity, and dedication to his craft. Spanning across various projects, it beautifully illustrates Ali's journey through the worlds of design and technology. Each piece in his portfolio is carefully chosen to highlight not just the end result, but the process behind it. From the initial spark of an idea to the final product, Ali shares the challenges he faced, the lessons he learned, and the innovations he introduced along the way. This portfolio is a testament to Ali's belief in continuous growth and his commitment to pushing the boundaries of what's possible.",
    descriptionParagraphTwo:
      "What sets Ali Kouhfar's portfolio apart is its ability to captivate and inspire. It's not just a static gallery of his accomplishments; it's an interactive journey through his mind and his method. Ali invites viewers to delve deeper into his creative process, revealing the inspirations behind his designs and the thought processes that drive his technological explorations. His portfolio is a reflection of his character—innovative, thoughtful, and deeply committed to his craft. It's a space where Ali's passion for design and technology meets his desire to share his knowledge and inspire others. Through his portfolio, Ali Kouhfar opens up a dialogue about creativity, innovation, and the endless possibilities that lie at the intersection of art and technology.",
    year: 2024,
    technologies: [
      {
        id: 1,
        title: "Next.js",
        description:
          "Server-side rendering and static site generation for SEO and performance.",
      },
      {
        id: 2,
        title: "Tailwind CSS",
        description: "Rapid UI development with a modern, customizable design.",
      },
      // {
      //   id: 4,
      //   title: "Framer Motion",
      //   description:
      //     "Smooth animations and interactions for an elevated user experience.",
      // },
      // {
      //   id: 3,
      //   title: "GitHub Pages",
      //   description: "Version control and transparent repository hosting.",
      // },
      {
        id: 3,
        title: "Formik",
        description: "Open source form library for React and React Native.",
      },
      // {
      //   id: 7,
      //   title: "Contentful",
      //   description:
      //     "Manage blog posts and project details easily without rebuilding the site.",
      // },
      // {
      //   id: 8,
      //   title: "Google Analytics",
      //   description:
      //     "Track visitor behavior for informed future optimizations.",
      // },
    ],
    technologiesDescription:
      "Ali Kouhfar's portfolio shows how great today's web tools can be. He picked them to make his portfolio look good and work smoothly. The main tool he used is Next.js, which helps make websites load quickly and be found by search engines. This makes Ali's portfolio fast and easy to find for lots of people. Plus, Next.js lets Ali change the content on his site easily, making it better for people who visit. For making the site look nice, Ali chose Tailwind CSS. It's a tool that lets him change the design of his portfolio quickly and keep it looking fresh. Using Tailwind, Ali can make his site stand out and stay up-to-date with the latest styles. This not only fits Ali's style but also means his portfolio can change with the times.",
    isVisible: false,
    images: {
      hero: "/portfolio/hero.png",
      gallery_one: "/portfolio/gallery_one.png",
      gallery_two: "/portfolio/gallery_two.png",
      gallery_three: "/portfolio/gallery_three.png",
    },
    url: "http://www.alikouhfar.ir",
  },
];
