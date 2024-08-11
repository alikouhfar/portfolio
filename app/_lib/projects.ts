import { IProject } from "@/app/_models/project.model";

export const projects: IProject[] = [
  {
    id: 1,
    category: "Portfolio Website",
    tag: "portfolio-website",
    title: "Personal Portfolio Showcase of Ali Kouhfar",
    description:
      "A modern, responsive portfolio site built with Next.js and Tailwind CSS. Showcases projects, skills, and professional journey with dynamic content and smooth animations.",
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
      {
        id: 3,
        title: "GitHub Pages",
        description: "Version control and transparent repository hosting.",
      },
      {
        id: 4,
        title: "Netlify Forms",
        description: "Simple contact form integration for user inquiries.",
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
    isVisible: false,
  },
];
