import { Route, Routes, useNavigate } from 'react-router-dom'
import { Registration } from '../Pages/Registration'
import Container from '../../container'
import { ProptectedRoute } from './ProptectedRoute'
import React, { useState } from 'react'

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

  return (
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
        path="/"
        element={
          <ProptectedRoute isAllowed={Boolean(user)}>
            <Container />
          </ProptectedRoute>
        }
      />
    </Routes>
  )
}
