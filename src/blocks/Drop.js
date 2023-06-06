import React, { useEffect, useState } from 'react'

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg1OTgwODYyLCJpYXQiOjE2ODU5ODA1NjIsImp0aSI6ImM0ODJmOTUxY2RkYzQ5NjBiYzhlMDE4OGQ1Mjc3ZmZkIiwidXNlcl9pZCI6NjQ2fQ.ZVGwaQXfQ8uMqZzIFJSGwFGtHNbu6wcCmv9PRjixMD4'

const listAuthors = [
  'Исполнитель 1',
  'Исполнитель 2',
  'Исполнитель 3',
  'Исполнитель 4',
  'Исполнитель 5',
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
