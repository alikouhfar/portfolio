'use client'

import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from 'react'

type ThemeContext = {
  themeColor: string
  onThemeColorChange: (color: string) => void
}

const ThemeContext = createContext<ThemeContext | null>(null)

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [themeColor, setThemeColor] = useState('#0066FF')

  const onThemeColorChange = (color: string) => setThemeColor(color)

  useEffect(() => {
    document.documentElement.style.setProperty('--color-theme', themeColor)
  }, [themeColor])

  return (
    <ThemeContext.Provider
      value={{
        themeColor,
        onThemeColorChange,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used inside ThemeProvider')
  return context
}

export { ThemeProvider, useTheme }
