import Providers from '@/providers/Providers'
import type { Metadata } from 'next'
import { FC } from 'react'
import { iranYekan, outfit, spaceGrotesk } from '../fonts'
import '../globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Ali Kouhfar',
    default: 'Ali Kouhfar - Frontend Developer',
  },
  description:
    'Professional frontend developer portfolio for Ali Kouhfar, featuring high-impact design and detailed professional experience.',
}

const LocaleLayout: FC<LayoutProps<'/[lang]'>> = async ({ children, params }) => {
  const { lang } = await params

  return (
    <html
      lang={lang}
      dir={lang === 'fa' ? 'rtl' : 'ltr'}
      className={`${outfit.variable} ${spaceGrotesk.variable} ${iranYekan.variable}`}
    >
      <body className={`${lang === 'fa' ? 'font-iran-yekan' : 'font-outfit'} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default LocaleLayout
