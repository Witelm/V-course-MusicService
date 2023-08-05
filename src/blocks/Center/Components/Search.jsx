import { useEffect, useState } from 'react'
import { useGetAllTracksQuery } from '../../../store/services/content'
import { useThemeContext } from '../../context/Context'
import s from './Search.module.css'

export const Search = ({ data, setData, dataAll }) => {
  const { theme } = useThemeContext()
  const [stateInput, setStateInput] = useState('')

  const handleInput = (e) => {
    const inputValue = e.target.value.toLowerCase()
    setStateInput(inputValue)
    const filterName = dataAll.filter((track) =>
      track.name.toLowerCase().startsWith(inputValue)
    )
    setData(filterName)
  }

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
        onChange={handleInput}
      ></input>
    </div>
  )
}
