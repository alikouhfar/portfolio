import { HomeProjectDetailsType } from '@/app/_components/home-projects/home-project-details.type'
import { HomeProjectItemThemesEnum } from '@/app/_components/home-projects/home-project-item-themes.enum'

export const homeProjectsData: HomeProjectDetailsType[] = [
  {
    title: 'Personal Portfolio',
    subtitle:
      'Where Code Meets Canvas: A Developer’s Story Told Through Interactive Design, Micro-Animations, and Zero-Compromise Performance',
    description: 'Pixels Polished, Journeys Shared: Where Clean Code Meets Compelling Narratives',
    imageUrl: '/images/portfolio.webp',
    features: [
      'Dark-themed UI that embraces the shadows like a code editor at midnight',
      'Framer Motion micro-interactions that respond like a well-tuned instrument',
      'Project case studies structured as engineering spec sheets - precise yet readable',
      'Device-responsive layouts that adapt like liquid metal',
      "Next.js optimized performance that loads quicker than a compiler's verdict",
    ],
    technologies: [
      { name: 'Next.js', logo: 'devicon:nextjs' },
      { name: 'TypeScript', logo: 'devicon:typescript' },
      { name: 'Framer Motion', logo: 'tabler:brand-framer-motion' },
      { name: 'Shadcn UI', logo: 'vscode-icons:file-type-shadcn' },
      { name: 'Tailwind CSS', logo: 'devicon:tailwindcss' },
    ],
    theme: HomeProjectItemThemesEnum.Pink,
  },
  {
    title: 'TBAO: Career Launchpad + Knowledge Marketplace',
    subtitle:
      'Learn, Build, Earn: A Platform That Turns Tutorials into Resumes, Resumes into Jobs, and JavaScript into Career Velocity—Powered by .NET and Webpack’s Raw Muscle',
    description: 'Knowledge Traded, Careers Made: A Dual Marketplace for Learning and Professional Growth',
    imageUrl: '/images/ecommerce.webp',
    features: [
      'Vanilla JS CV constructor that assembles resumes like a typesetting press',
      'E-commerce engine handling payments and coupons like a digital bazaar',
      'Job matching system that connects opportunities like a professional switchboard',
      'Webpack-optimized tutorial bundles that load like modular furniture',
      'Swiper.js course galleries that navigate like a pocket textbook',
    ],
    technologies: [
      { name: 'JavaScript', logo: 'devicon:javascript' },
      { name: 'Webpack', logo: 'devicon:webpack' },
      { name: 'Swiper', logo: 'simple-icons:swiper' },
      { name: 'Bootstrap', logo: 'devicon:bootstrap' },
    ],
    theme: HomeProjectItemThemesEnum.Blue,
  },
  {
    title: 'ISILEARNING: Corporate Learning Hub',
    subtitle:
      'From Live Lectures to Lifelong Skills: An LMS That Transforms BigBlueButton Sessions into Certifications, Angular Components into Engagement, and Data into Training ROI',
    description:
      'Classes Hosted, Skills Mastered: A Corporate Learning Hub Blending Live and Self-Paced Education',
    imageUrl: '/images/lms.webp',
    features: [
      'BigBlueButton integration hosting virtual classes like a lecture hall',
      'Video bookmarking system that saves progress like a never-folding page corner',
      'Automated certificate generation that populates like official stationery',
      'Configurable quizzes with time limits like an exam proctor',
      'Role-based content gates that regulate access like a faculty lounge',
    ],
    technologies: [
      { name: 'Angular', logo: 'devicon:angular' },
      { name: 'RxJs', logo: 'devicon:rxjs' },
      { name: 'TypeScript', logo: 'devicon:typescript' },
      { name: 'Swiper', logo: 'simple-icons:swiper' },
      { name: 'Bootstrap', logo: 'devicon:bootstrap' },
      { name: 'SCSS', logo: 'devicon:sass' },
    ],
    theme: HomeProjectItemThemesEnum.Emerald,
  },
]
