import { useThemeContext } from '../../context/Context'
import s from './Search.module.css'

export const Search = () => {
  const { theme } = useThemeContext()
  return (
    <div className={s.search}>
      <svg className={s.svg}>
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </svg>
      <input
        className={s.text}
        type="search"
        placeholder="Поиск"
        name="search"
        style={{ color: theme.color }}
      ></input>
    </div>
  )
}
