import { useDispatch } from 'react-redux'
import { useThemeContext } from '../context/Context'
import s from './Drop.module.css'
import { filterGet } from '../../store/actions/creators/filter'

function Drop({ content, onSelect, selected, filter }) {
  const { theme } = useThemeContext()
  const dispatch = useDispatch()

  const filterItem = content.map((item, index) => (
    <li key={index} className="" style={{ color: theme.color }}>
      <a
        className={`${s.item} ${selected.includes(index) ? s.active : null}`}
        href="#"
        id={index}
        onClick={() => {
          onSelect(index)
          dispatch(filterGet(filter, item))
        }}
      >
        {item}
      </a>
    </li>
  ))

  return <ul className="">{filterItem}</ul>
}

export default Drop
