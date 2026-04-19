import { ThemeProvider } from '@/contexts/ThemeContext'
import { ReactNode } from 'react'

const Providers = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default Providers
