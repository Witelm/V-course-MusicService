import { useThemeContext } from '../context/Context'
import s from './Nav.module.css'
import NavMenu from './NavMenu'
import { useState } from 'react'

function Nav() {
  const [visible, setVisible] = useState(false)
  const toggleVisibility = () => setVisible(!visible)

  const { theme } = useThemeContext()

  return (
    <nav
      className={s.nav}
      style={{
        backgroundColor: theme.background,
      }}
    >
      <div className={s.logo}>
        <img className={s.image} src="img/logo.png" alt="logo"></img>
      </div>
      <div className={s.burger} onClick={toggleVisibility}>
        <span
          className={s.line}
          style={{
            backgroundColor: theme.color,
          }}
        ></span>
        <span
          className={s.line}
          style={{
            backgroundColor: theme.color,
          }}
        ></span>
        <span
          className={s.line}
          style={{
            backgroundColor: theme.color,
          }}
        ></span>
      </div>
      {visible && <NavMenu />}
    </nav>
  )
}

export default Nav
