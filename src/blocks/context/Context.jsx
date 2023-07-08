import React, { createContext, useContext, useState } from 'react'

export const themes = {
  light: {
    color: '#616161',
    background: '#ffffff',
  },
  dark: {
    color: '#ffffff',
    background: '#181818',
  },
}

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
})

export const useThemeContext = () => {
  const theme = useContext(ThemeContext)
  if (!theme) return themes.dark
  return theme
}
