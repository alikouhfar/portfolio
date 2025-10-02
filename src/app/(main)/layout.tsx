import { ReactNode } from 'react'
import Header from '@/components/Header'
import FooterContact from '@/components/Footer/FooterContact'
import Footer from '@/components/Footer'
import HeaderBackdrop from '@/components/Header/HeaderBackdrop'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative mx-auto flex w-full flex-col items-center justify-center">
      <Header />
      <HeaderBackdrop/>
      {children}
      <FooterContact />
      <Footer />
    </main>
  )
}

export default MainLayout
