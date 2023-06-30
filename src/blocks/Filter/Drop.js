import s from './Drop.module.css'

function Drop({ content, onSelect, selected }) {
  const filterItem = content.map((item, index) => (
    <li key={index} className="">
      <a
        className={`${s.item} ${selected.includes(item.id) ? s.active : null}`}
        href="#"
        id={item.id}
        onClick={() => onSelect(item.id)}
      >
        {item.name}
      </a>
    </li>
  ))

  return <ul className="">{filterItem}</ul>
}

export default Drop
