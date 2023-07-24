import React, { useState } from 'react'
import Drop from './Drop'
import s from './ButtonFilter.module.css'

function ButtonFilter({
  title,
  content,
  isActive,
  onClick,
  hideButton,
  filter,
}) {
  const [selected, setSelected] = useState([])
  const selectedFilters = selected.length
  const buttonStyle = isActive ? `${s.active}` : ''
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
        className={`${s.dropdown} ${s.filter} ${s.btn} ${buttonStyle}`}
        onClick={onClick}
      >
        {title}
        {selectedFilters >= 1 ? (
          <div className={s.drop_elem}>{selectedFilters}</div>
        ) : null}
        {isActive ? (
          <div className={s.dropdown_ul} onMouseLeave={() => hideButton()}>
            <Drop
              content={content}
              onSelect={handleSelected}
              selected={selected}
              filter={filter}
            />
          </div>
        ) : null}
      </div>
    </React.Fragment>
  )
}

export default ButtonFilter
