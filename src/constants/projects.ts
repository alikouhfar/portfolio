import { Locale } from '@/app/[lang]/dictionaries'
import { Project } from '@/types/project'

export const PROJECTS: Record<Locale, Project[]> = {
  en: [
    {
      id: 'e9c1a7f2-5b44-4d8c-9a11-3f7d2c8b6e77',
      title: 'Interactive Developer Portfolio',
      category: 'Personal Brand / Portfolio',
      image: '/images/projects/portfolio.png',
      tech: ['Next.js', 'TypeScript', 'Framer Motion', 'ShadCN', 'Tailwind CSS'],
      link: '#',
    },
    {
      id: 'c1f3a9b2-7d11-4e8c-9a22-5f6b1d8e3c44',
      title: 'Real-Time Fleet Management Dashboard',
      category: 'SaaS / Logistics Platform',
      image: '/images/projects/sepahtan.png',
      tech: ['React', 'TypeScript', 'Maplibre', 'ShadCN', 'Tailwind CSS', 'Tanstack Query'],
      link: '#',
    },
    {
      id: 'a7d2f8c1-3b44-4e9a-8c11-6f2d9b7e1a55',
      title: 'ISILEARNING — Online Learning Platform',
      category: 'EdTech Platform',
      image: '/images/projects/isilearning.png',
      tech: ['Angular', 'RxJs', ' TypeScript', 'Swiper', 'Bootstrap', 'SCSS'],
      link: 'https://isilearning.ir',
    },
    {
      id: 'f2b8c1d7-6e33-4a9b-9c11-8d2f7a5e1b66',
      title: 'TBAO — E-commerce Storefront',
      category: 'E-commerce Platform',
      image: '/images/projects/tbao.png',
      tech: ['JavaScript', 'Webpack', 'Swiper', 'Bootstrap'],
      link: 'https://tbao.ir',
    },
  ],

  de: [
    {
      id: 'e9c1a7f2-5b44-4d8c-9a11-3f7d2c8b6e77',
      title: 'Interaktives Entwickler-Portfolio',
      category: 'Persönliche Marke / Portfolio',
      image: '/images/projects/portfolio.png',
      tech: ['Next.js', 'TypeScript', 'Framer Motion', 'ShadCN', 'Tailwind CSS'],
      link: '#',
    },
    {
      id: 'c1f3a9b2-7d11-4e8c-9a22-5f6b1d8e3c44',
      title: 'Echtzeit-Flottenmanagement-Dashboard',
      category: 'SaaS / Logistikplattform',
      image: '/images/projects/sepahtan.png',
      tech: ['React', 'TypeScript', 'Maplibre', 'ShadCN', 'Tailwind CSS', 'Tanstack Query'],
      link: '#',
    },
    {
      id: 'a7d2f8c1-3b44-4e9a-8c11-6f2d9b7e1a55',
      title: 'ISILEARNING — Online-Lernplattform',
      category: 'EdTech-Plattform',
      image: '/images/projects/isilearning.png',
      tech: ['Angular', 'RxJs', ' TypeScript', 'Swiper', 'Bootstrap', 'SCSS'],
      link: 'https://isilearning.ir',
    },
    {
      id: 'f2b8c1d7-6e33-4a9b-9c11-8d2f7a5e1b66',
      title: 'TBAO — E-Commerce-Frontend',
      category: 'E-Commerce-Plattform',
      image: '/images/projects/tbao.png',
      tech: ['JavaScript', 'Webpack', 'Swiper', 'Bootstrap'],
      link: 'https://tbao.ir',
    },
  ],

  fa: [
    {
      id: 'e9c1a7f2-5b44-4d8c-9a11-3f7d2c8b6e77',
      title: 'پورتفولیو تعاملی توسعه‌دهنده',
      category: 'برند شخصی / پورتفولیو',
      image: '/images/projects/portfolio.png',
      tech: ['Next.js', 'TypeScript', 'Framer Motion', 'ShadCN', 'Tailwind CSS'],
      link: '#',
    },
    {
      id: 'c1f3a9b2-7d11-4e8c-9a22-5f6b1d8e3c44',
      title: 'داشبورد مدیریت ناوگان بلادرنگ',
      category: 'SaaS / پلتفرم لجستیک',
      image: '/images/projects/sepahtan.png',
      tech: ['React', 'TypeScript', 'Maplibre', 'ShadCN', 'Tailwind CSS', 'Tanstack Query'],
      link: '#',
    },
    {
      id: 'a7d2f8c1-3b44-4e9a-8c11-6f2d9b7e1a55',
      title: 'ISILEARNING — پلتفرم آموزش آنلاین',
      category: 'پلتفرم آموزشی (EdTech)',
      image: '/images/projects/isilearning.png',
      tech: ['Angular', 'RxJs', ' TypeScript', 'Swiper', 'Bootstrap', 'SCSS'],
      link: 'https://isilearning.ir',
    },
    {
      id: 'f2b8c1d7-6e33-4a9b-9c11-8d2f7a5e1b66',
      title: 'TBAO — فروشگاه اینترنتی',
      category: 'پلتفرم تجارت الکترونیک',
      image: '/images/projects/tbao.png',
      tech: ['JavaScript', 'Webpack', 'Swiper', 'Bootstrap'],
      link: 'https://tbao.ir',
    },
  ],
}
