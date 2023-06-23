import { useState } from 'react'
import { AppRouters } from './blocks/Routes/AppRouters'
import s from './GlobalStyle/App.module.css'

function App() {
  const [user, setUser] = useState(null)
  const handleLogin = () => setUser({ login: '12345' })
  const handleLogout = () => setUser(null)

  return (
    <div className={s.wrapper}>
      <AppRouters user={handleLogin} />
    </div>
  )
}

export default App
