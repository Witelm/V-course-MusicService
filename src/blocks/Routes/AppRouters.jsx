import { Route, Routes, useNavigate } from 'react-router-dom'
import { Registration } from '../Pages/Registration'
import Container from '../../container'
import { ProptectedRoute } from './ProptectedRoute'
import React, { useEffect, useState } from 'react'
import { NotFound } from '../Pages/NotFound'
import { ThemeContext, themes } from '../context/Context'
import { useSelector } from 'react-redux'

export const AppRouters = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(false)

  const userToken = useSelector((state) => state.user.token)

  useEffect(() => {
    setUser(!!userToken)
    userToken ? navigate('/') : navigate('/reg')
  }, [userToken])

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

  const [currentTheme, setCurrentTheme] = useState(themes.dark)
  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light)
      return
    }
    return setCurrentTheme(themes.dark)
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <Routes>
        <Route
          path="/reg"
          element={
            <Registration
            // handleLogin={handleLogin}
            // handleLogout={handleLogout}
            // user={user}
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
