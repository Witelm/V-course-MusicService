import { Route, Routes } from 'react-router-dom'
import { Registration } from '../Pages/Registration'
import Container from '../../container'
import { ProptectedRoute } from './ProptectedRoute'
import React, { useEffect, useState } from 'react'

export const AppRouters = () => {
  const [user, setUser] = useState(localStorage.getItem('user') || null)

  const handleLogin = () => setUser({ login: '12345' })

  useEffect(() => {
    localStorage.setItem('user', user)
    if (user === null) {
      localStorage.clear()
    }
  }, [user])

  const handleLogout = () => {
    setUser(null)
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
          <ProptectedRoute isAllowed={Boolean(user)} State={user}>
            <Container />
          </ProptectedRoute>
        }
      />
    </Routes>
  )
}
