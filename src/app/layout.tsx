import Providers from '@/providers/Providers'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'
import './globals.css'

// const outfit = Outfit({
//   subsets: ['latin'],
// })

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
      <body className={`bg-[#0a0a0a] antialiased`}>
        <Providers>
          {children}
          <Toaster toastOptions={{ position: 'top-center', duration: 3000 }} />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
