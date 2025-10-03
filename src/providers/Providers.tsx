import { ReactNode } from 'react'
import ReactQueryProvider from './ReactQueryProvider'

const Providers = ({ children }: { children: ReactNode }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>
}

export default Providers
