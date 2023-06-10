import { useState } from 'react'

// const listAuthors = [
//   'Исполнитель 1',
//   'Исполнитель 2',
//   'Исполнитель 3',
//   'Исполнитель 4',
//   'Исполнитель 5',
//   'Исполнитель 6',
//   'Исполнитель 7',
// ]

const listAuthors = [
  { name: 'Исполнитель 1', id: 1 },
  { name: 'Исполнитель 2', id: 2 },
  { name: 'Исполнитель 3', id: 3 },
  { name: 'Исполнитель 4', id: 4 },
  { name: 'Исполнитель 5', id: 5 },
  { name: 'Исполнитель 6', id: 6 },
  { name: 'Исполнитель 7', id: 7 },
]

function Drop() {
  const [choice, setChoice] = useState([])
  const toggleChoice = (event) => {
    setChoice([...choice, event.target.id])
    console.log(choice)
  }

  return (
    <ul className="">
      {listAuthors.map((author, index) => (
        <li key={index}>
          <a
            className="dropdown-item"
            href="#"
            id={author.id}
            onClick={toggleChoice}
          >
            {author.name}
          </a>
        </li>
      ))}
    </ul>
  )

  // return (
  //   <ul className="">
  //     {listAuthors.map((author, index) => (
  //       <li key={index}>
  //         <a className="dropdown-item" href="#" id={index}>
  //           {author}
  //         </a>
  //       </li>
  //     ))}
  //   </ul>
  // )
}

export { Drop }
