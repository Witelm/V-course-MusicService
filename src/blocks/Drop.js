function Drop({ content, onSelect }) {
  const filterItem = content.map((item, index) => (
    <li key={index}>
      <a
        className="dropdown-item"
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
