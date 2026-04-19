import { Locale } from '@/app/[lang]/dictionaries'
import { Experience } from '@/types/experience'

export const EXPERIENCE: Record<Locale, Experience[]> = {
  en: [
    {
      id: 'b7f3c2a1-4e9d-4a7b-9c21-8f3d6a1c2e11',
      company: 'Setigh Fara Ofogh',
      role: 'Frontend Developer',
      period: '2024 — 2026',
      description:
        'Developed a real-time IoT platform for tracking public transportation and logistics fleets. Implemented live data streaming using SignalR and built scalable interfaces with React and TypeScript. Owned key parts of the UI related to real-time updates, state synchronization, and map-based data visualization, ensuring smooth performance under continuous data streams.',
    },
    {
      id: 'c2d9f8a4-7b11-4e3d-9f55-2a8c1d7e9b33',
      company: 'ISIRAN Institute',
      role: 'Frontend Developer',
      period: '2023 — 2024',
      description:
        'Worked on multiple web applications including a Learning Management System (LMS) using Angular and an e-commerce platform built with .NET MVC. Implemented dynamic UI features with JavaScript, optimized performance using Webpack and lazy loading, and maintained existing frontend codebases.',
    },
  ],

  de: [
    {
      id: 'd91c3f7a-2b6e-4c5d-8a11-6f9b2c4e7a55',
      company: 'Setigh Fara Ofogh',
      role: 'Frontend-Entwickler',
      period: '2024 — 2026',
      description:
        'Entwicklung einer Echtzeit-IoT-Plattform zur Verfolgung von öffentlichen Verkehrsmitteln und Logistikflotten. Implementierung von Live-Datenströmen mit SignalR sowie Aufbau skalierbarer Benutzeroberflächen mit React und TypeScript. Verantwortung für zentrale UI-Bereiche wie Echtzeit-Updates, Zustands-Synchronisation und kartenbasierte Datenvisualisierung, mit Fokus auf stabile Performance bei kontinuierlichen Datenströmen.',
    },
    {
      id: 'f3a8c1d9-6e2b-4a7c-9d11-8b2f7c5e1a90',
      company: 'ISIRAN Institute',
      role: 'Frontend-Entwickler',
      period: '2023 — 2024',
      description:
        'Mitarbeit an mehreren Webanwendungen, darunter ein Learning-Management-System (LMS) mit Angular sowie eine E-Commerce-Plattform auf Basis von .NET MVC. Umsetzung dynamischer UI-Funktionen mit JavaScript, Performance-Optimierung durch Webpack und Lazy Loading sowie Wartung bestehender Frontend-Codebasen.',
    },
  ],

  fa: [
    {
      id: 'a1d7c9f3-5b2e-4c8a-9f11-3e7b6c2d9a44',
      company: 'Setigh Fara Ofogh',
      role: 'توسعه‌دهنده فرانت‌اند',
      period: '2024 — 2026',
      description:
        'توسعه یک پلتفرم IoT بلادرنگ برای ردیابی ناوگان حمل‌ونقل عمومی و خودروهای سنگین. پیاده‌سازی دریافت داده‌های زنده با استفاده از SignalR و توسعه رابط‌های کاربری مقیاس‌پذیر با React و TypeScript. مسئولیت بخش‌های کلیدی رابط کاربری شامل بروزرسانی لحظه‌ای داده‌ها، همگام‌سازی وضعیت و نمایش اطلاعات مبتنی بر نقشه، با تمرکز بر حفظ عملکرد روان در جریان مداوم داده‌ها.',
    },
    {
      id: 'e9c2a7f1-4d6b-4b8c-9a11-7f3d2c8e5b66',
      company: 'ISIRAN Institute',
      role: 'توسعه‌دهنده فرانت‌اند',
      period: '2023 — 2024',
      description:
        'همکاری در توسعه چندین اپلیکیشن وب از جمله سیستم مدیریت یادگیری (LMS) با Angular و یک پلتفرم تجارت الکترونیک مبتنی بر .NET MVC. پیاده‌سازی قابلیت‌های داینامیک با JavaScript، بهینه‌سازی عملکرد با Webpack و Lazy Loading و نگهداری کدهای فرانت‌اند موجود.',
    },
  ],
}
