import { useState } from 'react'
import FilterContent from './FilterContent'

function FilterButton({ tttle, content, isActive, onClick, hideButton }) {
  const [selected, setSelected] = useState([])
  const selectedFilters = selected.length
  const buttonStyle = isActive ? 'active' : ''
  const handleSelected = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id))
    } else {
      selected([...selected, id])
    }
  }

  return (
    <div className="filte__wraper">
      {selectedFilters >= 1 ? (
        <div className="filetr__button_badge">{selectedFilters}</div>
      ) : null}
      <button
        className={`filter__button__header ${buttonStyle}`}
        type="button"
        onClick={onClick}
      >
        {title}
      </button>
      {isActive ? (
        <div
          className="filter__button__header__box"
          onMouseLeave={() => hideButton}
        >
          FilterContent content={content} onSelect={handleSelected}
        </div>
      ) : null}
    </div>
  )
}

export default FilterButton
