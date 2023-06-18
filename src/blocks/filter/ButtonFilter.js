import React, { useState } from 'react'
import Drop from './Drop'
import styled from 'styled-components'

const StyledDropElement = styled.div`
  position: absolute;
  top: -50%;
  left: 75%;
  border: 1px solid #ad61ff;
  border-radius: 33px;
  padding: 1px 10px;
  color: white;
  background-color: #ad61ff;
  z-index: 99;
`

const StyledDropdown = styled.div`
  position: relative;
  margin-right: 10px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border-radius: 60px;
  padding: 6px 20px;

  border: 1px solid ${(props) => (props.isActive ? '#ad61ff' : '#ffffff')};
  color: ${(props) => (props.isActive ? '#ad61ff' : 'ffffff')};
  cursor: pointer;

  &:hover {
    border-color: ${(props) => (props.isActive ? '#ad61ff' : '#d9b6ff')};
    color: ${(props) => (props.isActive ? '#ad61ff' : '#d9b6ff')};
    cursor: pointer;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`

function ButtonFilter({ title, content, isActive, onClick, hideButton }) {
  const [selected, setSelected] = useState([])
  const selectedFilters = selected.length

  const buttonStyle = isActive ? true : false

  const handleSelected = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id))
    } else {
      setSelected([...selected, id])
    }
  }

  return (
    <React.Fragment>
      <StyledDropdown isActive={buttonStyle} onClick={onClick}>
        {title}
        {selectedFilters >= 1 ? (
          <StyledDropElement>{selectedFilters}</StyledDropElement>
        ) : null}
        {isActive ? (
          <div className="" onMouseLeave={() => hideButton()}>
            <Drop content={content} onSelect={handleSelected} />
          </div>
        ) : null}
      </StyledDropdown>
    </React.Fragment>
  )
}

export default ButtonFilter
