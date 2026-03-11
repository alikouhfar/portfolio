import { generateRandomUUID } from "@/utils/generate-random-uuid";
import { IIntroServicesMarquee } from "../types/intro-services-marquee";

export const introServicesMarquee: Array<IIntroServicesMarquee> = [
  // Core Development
  {
    id: generateRandomUUID(),
    title: 'React App Development',
    content: 'Build modern React web apps',
  },
  {
    id: generateRandomUUID(),
    title: 'Next.js Applications',
    content: 'SSR, SSG, SEO-ready apps',
  },
  {
    id: generateRandomUUID(),
    title: 'TypeScript Integration',
    content: 'Typed, safer React codebase',
  },
  {
    id: generateRandomUUID(),
    title: 'Redux & State Management',
    content: 'Handle complex app state',
  },
  {
    id: generateRandomUUID(),
    title: 'REST & GraphQL APIs',
    content: 'Connect frontend to backend',
  },

  // UI/UX & Styling
  {
    id: generateRandomUUID(),
    title: 'Responsive UI Design',
    content: 'Mobile-first adaptive layouts',
  },
  {
    id: generateRandomUUID(),
    title: 'TailwindCSS Styling',
    content: 'Utility-first UI development',
  },
  {
    id: generateRandomUUID(),
    title: 'Interactive Animations',
    content: 'Add motion to interfaces',
  },
  {
    id: generateRandomUUID(),
    title: 'Design System Integration',
    content: 'Implement reusable UI kits',
  },

  // Testing & Quality
  {
    id: generateRandomUUID(),
    title: 'Unit Testing with Jest',
    content: 'Test components in isolation',
  },
  {
    id: generateRandomUUID(),
    title: 'End-to-End Testing',
    content: 'Automate user flow tests',
  },
  {
    id: generateRandomUUID(),
    title: 'Cross-Browser Compatibility',
    content: 'Works on all major browsers',
  },

  // Optimization & Performance
  {
    id: generateRandomUUID(),
    title: 'Performance Tuning',
    content: 'Faster load and interactions',
  },
  {
    id: generateRandomUUID(),
    title: 'PWA Development',
    content: 'Offline-capable web apps',
  },
  {
    id: generateRandomUUID(),
    title: 'Code Splitting & Lazy Load',
    content: 'Optimize bundle sizes',
  },

  // Localization & Accessibility
  {
    id: generateRandomUUID(),
    title: 'Internationalization (i18n)',
    content: 'Translate for global users',
  },
  {
    id: generateRandomUUID(),
    title: 'Web Accessibility (a11y)',
    content: 'Inclusive and compliant UI',
  },

  // Maintenance & Security
  {
    id: generateRandomUUID(),
    title: 'Ongoing Maintenance',
    content: 'Bug fixes and updates',
  },
  {
    id: generateRandomUUID(),
    title: 'Security Hardening',
    content: 'Prevent common web threats',
  },
]