import { ExperienceType } from './types'

export const experiences: Array<ExperienceType> = [
  {
    startYear: 2024,
    companyTitle: 'Setigh Fara Ofogh',
    location: 'Tehran - Iran',
    technologies: [
      { title: 'React', logo: 'devicon:react', description: 'Front-end library for building UI components' },
      {
        title: 'TypeScript',
        logo: 'devicon:typescript',
        description: 'Typed superset of JavaScript for scalable code',
      },
      {
        title: 'Tailwind CSS',
        logo: 'devicon:tailwindcss',
        description: 'Utility-first CSS framework for responsive layouts',
      },
      {
        title: 'Material UI',
        logo: 'logos:material-ui',
        description: 'React component library for consistent UI',
      },
      {
        title: 'Styled-Components',
        logo: 'devicon:styledcomponents',
        description: 'CSS-in-JS library for component-scoped styling',
      },
      {
        title: 'SignalR',
        description: 'Real-time communication for live vehicle tracking',
      },
      {
        title: 'MapLibre',
        logo: 'simple-icons:mapbox',
        description: 'Open-source mapping library for interactive maps',
      },
      {
        title: 'Webpack',
        logo: 'devicon:webpack',
        description: 'Module bundler to optimize frontend performance',
      },
    ],
    rolesWithDescription: [
      {
        startYear: 2022,
        role: 'Frontend Developer',
        description: `
As a **Frontend Developer**, I contributed to the development of real-time, RTL-friendly fleet management tools with a strong focus on performance, scalability, and localization for Persian (fa-IR) users. I designed and implemented responsive user interfaces using **React, TypeScript, Ant Design, Tailwind CSS, Material UI, and styled-components**, ensuring consistent layouts and high usability across devices.  

I integrated live vehicle tracking using **SignalR** and **MapLibre** through **react-map-gl**, enabling real-time updates for dispatch and logistics teams. My work involved creating reusable, maintainable components and UI patterns, optimizing frontend performance with code splitting, memoization, and lazy loading, and refactoring existing modules to improve maintainability and speed. I collaborated closely with cross-functional teams to deliver features in Agile sprints, contributed to internal tools and shared utilities, and led the adoption of **TypeScript**, which improved code quality and reduced bugs across the codebase.  

Among the key achievements, I delivered a full frontend solution from scratch, developed a real-time dashboard that is used daily by operations teams, ensured seamless RTL support and localization, and built reusable components that accelerated feature development. Notable projects include **Sepahtan Fleet Management**, a platform with advanced map functionalities such as polygon drawing and live vehicle markers, alongside robust CRUD tables, which significantly enhanced operational oversight and user efficiency.  

Throughout these projects, I emphasized scalable component design, clean modular code, and performant, user-focused interfaces that successfully supported complex real-time operations.
`,
      },
    ],
    isRemote: false,
  },
  {
    startYear: 2022,
    finishYear: 2024,
    companyTitle: 'ISIRAN Institute',
    location: 'Tehran - Iran',
    technologies: [
      {
        title: 'Angular',
        logo: 'devicon:angular',
        description: 'Front-end framework for building dynamic web apps',
      },
      {
        title: 'RxJs',
        logo: 'devicon:rxjs',
        description: 'Reactive programming library for managing asynchronous data',
      },
      {
        title: 'TypeScript',
        logo: 'devicon:typescript',
        description: 'Typed superset of JavaScript for safer, scalable code',
      },
      {
        title: 'SCSS',
        logo: 'devicon:sass',
        description: 'CSS preprocessor for modular and maintainable styles',
      },
      {
        title: 'Bootstrap',
        logo: 'devicon:bootstrap',
        description: 'CSS framework for responsive layouts and components',
      },
      {
        title: 'Webpack',
        logo: 'devicon:webpack',
        description: 'Module bundler that optimizes code for production',
      },
      {
        title: 'Swiper',
        logo: 'simple-icons:swiper',
        description: 'Modern touch slider for galleries and carousels',
      },
    ],
    rolesWithDescription: [
      {
        startYear: 2022,
        finishYear: 2024,
        role: 'Frontend Developer',
        description: `
As a **Frontend Developer at ISIRAN Institute**, I contributed to the design and development of two large-scale platforms: **TBAO**, a career launchpad and knowledge marketplace, and **ISILEARNING**, a corporate learning management system. My work focused on building **scalable, modular, and responsive user interfaces** using **Angular, TypeScript, RxJs, SCSS, and Bootstrap**, while also leveraging **Webpack** for optimized builds and **Swiper** for dynamic UI experiences.  

On **TBAO**, I implemented features such as an **interactive CV constructor**, **course marketplace**, and **job-matching workflows**, ensuring smooth performance and maintainability across complex user flows.  

On **ISILEARNING**, I developed reusable Angular components for **live virtual classrooms** (integrated with BigBlueButton), **automated certification**, **quizzes**, and **progress tracking**, enabling enterprises to deliver effective blended learning programs.  

Across both projects, I emphasized **performance optimization, clean modular code, and a responsive design system**. By applying **RxJs for reactive state management**, **SCSS for maintainable styling**, and **Bootstrap for layout consistency**, I ensured that each platform delivered a **seamless, engaging, and reliable user experience**.  

My contributions played a key role in delivering platforms that successfully supported **thousands of users**, improved **learning outcomes**, and connected individuals with **real career opportunities**.  
`,
      },
    ],
    isRemote: false,
  },
]
