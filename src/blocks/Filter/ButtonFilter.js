import React, { useState } from 'react'
import Drop from './Drop'

function ButtonFilter({ title, content, isActive, onClick, hideButton }) {
  const [selected, setSelected] = useState([])
  const selectedFilters = selected.length
  const buttonStyle = isActive ? 'active' : ''
  const handleSelected = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id))
    } else {
      setSelected([...selected, id])
    }
  }

  return (
    <React.Fragment>
      <div
        className={`dropdown filter__button button-author _btn-text ${buttonStyle}`}
        onClick={onClick}
      >
        {title}
        {selectedFilters >= 1 ? (
          <div className="drop-elem">{selectedFilters}</div>
        ) : null}
        {isActive ? (
          <div className="" onMouseLeave={() => hideButton()}>
            <Drop content={content} onSelect={handleSelected} />
          </div>
        ) : null}
      </div>
    </React.Fragment>
  )
}

export default ButtonFilter
