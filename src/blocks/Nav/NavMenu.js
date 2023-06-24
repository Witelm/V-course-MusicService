import { Link } from 'react-router-dom'
import s from './NavMenu.module.css'

function NavMenu() {
  return (
    <div className={s.menu}>
      <ul className={s.list}>
        <li className={s.item}>
          <a href="http://" className={s.link}>
            Главное
          </a>
        </li>
        <li className={s.item}>
          <a href="http://" className={s.link}>
            Мой плейлист
          </a>
        </li>
        <li className={s.item}>
          <Link className={s.link} to="/reg">
            Выйти
          </Link>
          {/* <a href="http://" className={s.link}>
            Войти
          </a> */}
        </li>
      </ul>
    </div>
  )
}

export default NavMenu
