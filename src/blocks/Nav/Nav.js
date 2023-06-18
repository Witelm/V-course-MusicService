import s from './Nav.module.css'
import NavMenu from './NavMenu'
import { useState } from 'react'

function Nav() {
  const [visible, setVisible] = useState(false)
  const toggleVisibility = () => setVisible(!visible)

  return (
    <nav className={s.nav}>
      <div className={s.logo}>
        <img className={s.image} src="img/logo.png" alt="logo"></img>
      </div>
      <div className={s.burger} onClick={toggleVisibility}>
        <span className={s.line}></span>
        <span className={s.line}></span>
        <span className={s.line}></span>
      </div>
      {visible && <NavMenu />}
    </nav>
  )
}

export default Nav
