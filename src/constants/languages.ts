import { Locale } from '@/app/[lang]/dictionaries'
import { Language } from '@/types/language'

export const LANGUAGES = [
  { code: 'en', label: 'English', className: 'text-left' },
  { code: 'de', label: 'Deutch', className: 'text-left' },
  { code: 'fa', label: 'فارسی', className: 'font-iran-yekan text-right' },
]

export const SPOKEN_LANGUAGES: Record<Locale, Language[]> = {
  en: [
    {
      id: '4f2c1d9a-8e11-4c7b-9a2f-6d8b1c3e9a11',
      name: 'Persian',
      level: 'Native',
      flag: '🇮🇷',
    },
    {
      id: '9c7a2f11-3b8d-4e5c-8f2a-1d9b6c7e4a22',
      name: 'English',
      level: 'Fluent',
      flag: '🇺🇸',
    },
    {
      id: '1a8f6c2d-7b33-4d9e-9c11-5f2a8b6d3e44',
      name: 'Turkish',
      level: 'Intermediate',
      flag: '🇹🇷',
    },
  ],

  de: [
    {
      id: 'b7d2f1a9-4c11-4e8b-9a33-6f2c9d1e7a55',
      name: 'Persisch',
      level: 'Muttersprache',
      flag: '🇮🇷',
    },
    {
      id: 'c9a1f6d2-8b44-4c7e-9f11-3d8b2a7c5e66',
      name: 'Englisch',
      level: 'Fließend',
      flag: '🇺🇸',
    },
    {
      id: 'e1b8c7a2-6d33-4f9b-8c11-7a2d9e5f1b77',
      name: 'Türkisch',
      level: 'Mittelstufe',
      flag: '🇹🇷',
    },
  ],

  fa: [
    {
      id: 'a9c1f7d2-3e44-4b8a-9f11-6d2c8b7a1e88',
      name: 'فارسی',
      level: 'مادری',
      flag: '🇮🇷',
    },
    {
      id: 'f2b7c9a1-5d33-4e8c-9a11-8c1d6f2b7a99',
      name: 'انگلیسی',
      level: 'مسلط',
      flag: '🇺🇸',
    },
    {
      id: 'd8c1a7f2-6b44-4c9e-8f11-3a7d2c8b5e00',
      name: 'ترکی',
      level: 'متوسط',
      flag: '🇹🇷',
    },
  ],
}
