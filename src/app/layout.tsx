import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'

const outfit = Outfit({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s - Ali Kouhfar',
    default: 'Ali Kouhfar - Frontend Developer',
  },
  description: 'Frontend Developer specializing in modern web technologies',
}

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.className} bg-[#0a0a0a] antialiased`}>{children}</body>
    </html>
  )
}

export default RootLayout
