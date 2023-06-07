const listAuthors = [
  'Исполнитель 1',
  'Исполнитель 2',
  'Исполнитель 3',
  'Исполнитель 4',
  'Исполнитель 5',
  'Исполнитель 6',
  'Исполнитель 7',
]

function Drop() {
  return (
    <ul className="">
      {listAuthors.map((author, index) => (
        <li key={index}>
          <a className="dropdown-item" href="#" id={index}>
            {author}
          </a>
        </li>
      ))}
    </ul>
  )
}

export { Drop }
