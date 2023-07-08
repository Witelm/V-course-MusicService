import React, { createContext, useContext, useState } from 'react'

export const ThemeContext = React.createContext({
  theme: 'dark',
  toggleTheme: () => {},
})

export const useThemeContext = () => {
  const theme = useContext(ThemeContext)
  if (!theme) return theme === 'dark'
  return theme
}
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('s.dark')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 's.dark' ? 'light' : 's.dark'))
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
