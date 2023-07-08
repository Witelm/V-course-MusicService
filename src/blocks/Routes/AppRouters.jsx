import { Route, Routes, useNavigate } from 'react-router-dom'
import { Registration } from '../Pages/Registration'
import Container from '../../container'
import { ProptectedRoute } from './ProptectedRoute'
import React, { useState } from 'react'
import { NotFound } from '../Pages/NotFound'
import { ThemeContext } from '../context/Context'

export const AppRouters = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  )

  const handleLogin = () => {
    const templateUser = { login: '12345' }
    setUser(templateUser)
    localStorage.setItem('user', JSON.stringify(templateUser))
    navigate('/')
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
    navigate('/reg')
  }

  const [currentTheme, setCurrentTheme] = useState('')
  const toggleTheme = () => {
    if (currentTheme === '') {
      setCurrentTheme('s.light')
      return
    }
    return setCurrentTheme('')
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <Routes>
        <Route
          path="/reg"
          element={
            <Registration
              handleLogin={handleLogin}
              handleLogout={handleLogout}
              user={user}
            />
          }
        />

        <Route
          path="/*"
          element={
            <ProptectedRoute isAllowed={Boolean(user)}>
              <NotFound />
            </ProptectedRoute>
          }
        />

        <Route
          path="/"
          element={
            <ProptectedRoute isAllowed={Boolean(user)}>
              <Container />
            </ProptectedRoute>
          }
        />
      </Routes>
    </ThemeContext.Provider>
  )
}
