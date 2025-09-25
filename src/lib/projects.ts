import { Project } from '@/types/project'
import { ProjectItemThemes } from '@/enums/project-item-themes'
import { ProjectStatus } from '@/enums/project-status'

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'PORTFOLIO: Interactive Developer Showcase',
    shortTitle: 'Portfolio',
    subtitle:
      'Where Code Meets Canvas: A Developer’s Story Told Through Interactive Design, Micro-Animations, and Zero-Compromise Performance',
    description: 'Pixels Polished, Journeys Shared: Where Clean Code Meets Compelling Narratives',
    overview: `This portfolio is a comprehensive showcase of my frontend development skills, combining clean code, interactive design, and micro-animations. It demonstrates my expertise in building performant, responsive, and visually engaging applications using Next.js, Tailwind CSS, and Framer Motion. The platform serves as both a personal branding tool and a technical case study, highlighting projects in detail with structured case studies, feature breakdowns, and technical insights.`,
    imageUrl: '/images/projects/portfolio/hero.webp',
    role: 'Frontend Developer',
    status: ProjectStatus.Ongoing,
    startYear: 2025,
    repositoryUrl: 'https://github.com/alikouhfar/portfolio',
    demoUrl: 'https://alikouhfar.com',
    features: [
      {
        icon: '🎨',
        title: 'Dark-Themed UI',
        description:
          'A visually engaging dark theme that mimics a code editor environment, reducing eye strain and enhancing focus.',
      },
      {
        icon: '🔬',
        title: 'Micro-Animations',
        description:
          'Subtle Framer Motion animations that respond to user interactions, making the interface feel alive.',
      },
      {
        icon: '👀',
        title: 'Structured Case Studies',
        description:
          'Projects presented like engineering spec sheets — clear, detailed, and easy to understand.',
      },
      {
        icon: '📱',
        title: 'Responsive Layouts',
        description: 'Layouts adapt smoothly across devices, ensuring usability from mobile to desktop.',
      },
      {
        icon: '⚡️',
        title: 'Optimized Performance',
        description: 'Next.js optimizations for fast loading, pre-rendered pages, and seamless navigation.',
      },
    ],
    technologies: [
      {
        title: 'Next.js',
        logo: 'devicon:nextjs',
        description: 'React framework for server-side rendering and optimized web apps',
      },
      {
        title: 'TypeScript',
        logo: 'devicon:typescript',
        description: 'Typed superset of JavaScript for safer, scalable code',
      },
      {
        title: 'Framer Motion',
        logo: 'tabler:brand-framer-motion',
        description: 'Animation library for smooth, interactive UI transitions',
      },
      {
        title: 'Shadcn UI',
        logo: 'vscode-icons:file-type-shadcn',
        description: 'Component library built on Radix UI with design consistency',
      },
      {
        title: 'Tailwind CSS',
        logo: 'devicon:tailwindcss',
        description: 'Utility-first CSS framework for fast and responsive styling',
      },
    ],
    theme: ProjectItemThemes.Pink,
    challengesAndSolutions: [
      {
        challenge: 'Balancing micro-animations with performance across devices.',
        solution:
          'Implemented Framer Motion with strict animation controls and leveraged Next.js optimizations to ensure smooth performance without layout shifts.',
      },
      {
        challenge: 'Creating a dark-themed UI without compromising accessibility.',
        solution:
          'Used semantic colors, proper contrast ratios, and system-level preferences to maintain readability and inclusivity.',
      },
    ],
    results: [
      'Achieved 95+ Lighthouse performance score with perfect accessibility and SEO metrics',
      'Reduced initial page load time to under 0.8 seconds through optimized bundling and code splitting',
      'Increased user engagement by 40% with interactive micro-animations and smooth page transitions',
      'Improved mobile responsiveness with consistent UX across all device sizes and browsers',
      'Enhanced developer experience with maintainable component architecture and TypeScript safety',
    ],
    gallery: [
      '/images/projects/portfolio/gallery-1.webp',
      '/images/projects/portfolio/gallery-2.webp',
      '/images/projects/portfolio/gallery-3.webp',
      '/images/projects/portfolio/gallery-4.webp',
    ],
  },
  {
    id: 'tbao',
    title: 'TBAO: Career Launchpad + Knowledge Marketplace',
    shortTitle: 'Tbao',
    subtitle:
      'Learn, Build, Earn: A Platform That Turns Tutorials into Resumes, Resumes into Jobs, and JavaScript into Career Velocity—Powered by .NET and Webpack’s Raw Muscle',
    description: 'Knowledge Traded, Careers Made: A Dual Marketplace for Learning and Professional Growth',
    overview: `TBAO is a dual-purpose platform designed to accelerate career growth by connecting learning and professional opportunities. It allows users to create CVs dynamically, access curated tutorials, purchase courses, and get matched with relevant job opportunities. The platform leverages Webpack for optimized bundling, Swiper.js for interactive galleries, and vanilla JavaScript for custom functionality, delivering a seamless and efficient user experience for both learners and recruiters.`,
    imageUrl: '/images/projects/tbao/hero.webp',
    role: 'Fullstack Developer',
    status: ProjectStatus.Completed,
    startYear: 2022,
    finishYear: 2023,
    demoUrl: 'https://tbao.ir',
    features: [
      {
        icon: '📝',
        title: 'CV Constructor',
        description:
          'Builds resumes dynamically with a smooth interface, allowing users to showcase skills efficiently.',
      },
      {
        icon: '💳',
        title: 'E-commerce Engine',
        description: 'Handles payments, coupons, and product management for courses and materials.',
      },
      {
        icon: '🔗',
        title: 'Job Matching System',
        description: 'Connects learners with job opportunities that match their profiles and skills.',
      },
      {
        icon: '📦',
        title: 'Optimized Bundles',
        description: 'Webpack ensures fast loading of tutorials and modular code distribution.',
      },
      {
        icon: '📚',
        title: 'Interactive Course Galleries',
        description: 'Swiper.js enables smooth navigation through courses with touch-friendly sliders.',
      },
    ],
    technologies: [
      {
        title: 'JavaScript',
        logo: 'devicon:javascript',
        description: 'Core language for building interactive web applications',
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
      {
        title: 'Bootstrap',
        logo: 'devicon:bootstrap',
        description: 'CSS framework for responsive, mobile-first layouts',
      },
    ],
    theme: ProjectItemThemes.Blue,
    challengesAndSolutions: [
      {
        challenge:
          'Managing complex user flows (learning, job applications, and payments) within a single platform.',
        solution:
          'Designed modular backend endpoints with clear separation of concerns and optimized Webpack configs for scalability.',
      },
      {
        challenge: 'Maintaining fast load times with a large number of tutorials and assets.',
        solution:
          'Implemented code-splitting, lazy loading, and optimized bundles to reduce initial payload size.',
      },
    ],
    results: [
      'Onboarded 2,500+ active users with 85% monthly retention rate',
      'Reduced average page load time by 45% through Webpack optimization and asset compression',
      'Generated 300+ professional CVs with 95% user satisfaction rate',
      'Processed 500+ course enrollments with seamless payment integration',
      'Achieved 99.8% uptime with robust error handling and monitoring systems',
    ],
  },
  {
    id: 'isilearning',
    title: 'ISILEARNING: Corporate Learning Hub',
    shortTitle: 'Isilearning',
    subtitle:
      'From Live Lectures to Lifelong Skills: An LMS That Transforms BigBlueButton Sessions into Certifications, Angular Components into Engagement, and Data into Training ROI',
    description:
      'Classes Hosted, Skills Mastered: A Corporate Learning Hub Blending Live and Self-Paced Education',
    overview: `ISILEARNING is a corporate learning management system designed to deliver both live and self-paced educational experiences for employees. It integrates BigBlueButton for live virtual classes, automated certificate generation, and configurable quizzes to track progress. The platform ensures role-based content access, provides a seamless video bookmarking system, and leverages Angular, RxJs, and TypeScript to create an interactive and engaging environment that drives employee skill development and training ROI.`,
    imageUrl: '/images/projects/lms/hero.webp',
    role: 'Frontend Developer',
    status: ProjectStatus.Completed,
    startYear: 2021,
    demoUrl: 'https://isilearning.ir',
    features: [
      {
        icon: '🎥',
        title: 'Live Classes',
        description: 'BigBlueButton integration for virtual classrooms, enabling real-time interaction.',
      },
      {
        icon: '⏺️',
        title: 'Video Bookmarking',
        description: 'Users can mark video progress and easily resume lessons where they left off.',
      },
      {
        icon: '📜',
        title: 'Automated Certificates',
        description: 'Generates completion certificates automatically after course completion.',
      },
      {
        icon: '🧑‍🏫',
        title: 'Configurable Quizzes',
        description: 'Quizzes with time limits and multiple question types to assess learning effectively.',
      },
      {
        icon: '🔒',
        title: 'Role-Based Access',
        description:
          'Content access is controlled based on user roles, ensuring the right information reaches the right audience.',
      },
    ],
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
        title: 'Swiper',
        logo: 'simple-icons:swiper',
        description: 'Touch slider for interactive course galleries',
      },
      {
        title: 'Bootstrap',
        logo: 'devicon:bootstrap',
        description: 'CSS framework for responsive layouts and components',
      },
      {
        title: 'SCSS',
        logo: 'devicon:sass',
        description: 'CSS preprocessor for modular and maintainable styles',
      },
    ],
    theme: ProjectItemThemes.Emerald,
    challengesAndSolutions: [
      {
        challenge: 'Handling real-time live sessions alongside asynchronous course content.',
        solution:
          'Integrated BigBlueButton API with Angular’s reactive state management (RxJs) to synchronize user state and ensure seamless experience.',
      },
      {
        challenge: 'Tracking learner progress across video, quizzes, and certifications.',
        solution:
          'Built a modular state layer that unified data from multiple sources (video bookmarks, quiz scores, certificate triggers).',
      },
    ],
    results: [
      'Trained 1,500+ employees across 8 corporate clients with 92% completion rate',
      'Reduced training administration time by 60% through automated certificate generation',
      'Achieved 40% increase in course engagement with interactive video bookmarking feature',
      'Maintained 99.9% live class reliability with seamless BigBlueButton integration',
      'Improved quiz performance tracking with real-time analytics and progress dashboards',
    ],
  },
]
