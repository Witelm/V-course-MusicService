import { useThemeContext } from '../context/Context'
import s from './Drop.module.css'

function Drop({ content, onSelect, selected }) {
  const { theme } = useThemeContext()

  const filterItem = content.map((item, index) => (
    <li key={index} className="" style={{ color: theme.color }}>
      <a
        className={`${s.item} ${selected.includes(index) ? s.active : null}`}
        href="#"
        id={index}
        onClick={() => onSelect(index)}
      >
        {item}
      </a>
    </li>
  ))

  return <ul className="">{filterItem}</ul>
}

export default Drop
