import { Locale } from '@/app/[lang]/dictionaries'
import { Education } from '@/types/education'

export const EDUCATIONS: Record<Locale, Education[]> = {
  en: [
    {
      id: '3c1b7c2e-8f5a-4c2f-9f2d-2a7b1d9c6e11',
      institute: 'Imam Khomeini International University',
      major: 'B.S. Architectural Engineering',
      period: '2018 - 2022',
      description:
        'Built a strong foundation in structural design, spatial reasoning, and systematic problem-solving. This background translates directly into frontend development, where I design scalable component architectures, maintain clear UI structure, and approach complex interfaces with an engineering mindset.',
    },
  ],

  de: [
    {
      id: '9f2a1c44-6b8d-4e91-a7c3-1d2f5e8a9b77',
      institute: 'Imam-Khomeini-Internationale-Universität',
      major: 'B.Sc. Architekturingenieurwesen',
      period: '2018 - 2022',
      description:
        'Fundierte Kenntnisse in Tragwerksplanung, räumlichem Denken und systematischer Problemlösung. Dieser Hintergrund übertrage ich direkt auf die Frontend-Entwicklung, indem ich skalierbare Komponentenarchitekturen entwerfe, klare UI-Strukturen aufbaue und komplexe Benutzeroberflächen mit einem ingenieurwissenschaftlichen Ansatz entwickle.',
    },
  ],

  fa: [
    {
      id: '1a8f6d9c-3e2b-4d7a-9c11-5f8b2a6d4e90',
      institute: 'دانشگاه بین‌المللی امام خمینی',
      major: 'کارشناسی مهندسی معماری',
      period: '۱۳۹۷ - ۱۴۰۱',
      description:
        'کسب دانش عمیق در طراحی سازه، درک فضایی و حل مسئله به‌صورت سیستماتیک. این پیشینه به‌طور مستقیم در توسعه فرانت‌اند به کار گرفته می‌شود، جایی که با طراحی معماری مقیاس‌پذیر کامپوننت‌ها، ایجاد ساختار منظم در رابط کاربری و حل مسائل پیچیده با رویکرد مهندسی عمل می‌کنم.',
    },
  ],
}
