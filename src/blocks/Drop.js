import React, { useState } from 'react'

// const listAuthors = [
//   'Исполнитель 1',
//   'Исполнитель 2',
//   'Исполнитель 3',
//   'Исполнитель 4',
//   'Исполнитель 5',
//   'Исполнитель 6',
//   'Исполнитель 7',
// ]

// const listAuthors = [
//   { name: 'Исполнитель 1', id: 1 },
//   { name: 'Исполнитель 2', id: 2 },
//   { name: 'Исполнитель 3', id: 3 },
//   { name: 'Исполнитель 4', id: 4 },
//   { name: 'Исполнитель 5', id: 5 },
//   { name: 'Исполнитель 6', id: 6 },
//   { name: 'Исполнитель 7', id: 7 },
// ]

function Drop({ content, onSelect }) {
  console.log(content)
  // const [choice, setChoice] = useState(['1', '2', '3'])
  // const toggleChoice = (event) => {
  //   setChoice([...choice, toString(event.target.id)])
  //   console.log(choice, event.target.id)
  // }

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

  return (
    <ul className="">{filterItem}</ul>

    // <React.Fragment>
    //   {choice.length >= 1 ? (
    //     <div className="drop-elem">{choice.length}</div>
    //   ) : (
    //     ''
    //   )}

    // <ul className="">{filterItem}</ul>
    // </React.Fragment>
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

export default Drop
