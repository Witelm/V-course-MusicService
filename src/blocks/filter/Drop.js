import styled from 'styled-components'

const StyledLink = styled.a`
  font-family: 'StratosSkyeng';
  color: #ffffff;
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
`

const StyledUl = styled.ul`
  display: block;
  position: absolute;
  left: 0;
  top: 40px;
  width: -webkit-fill-available;
  background: #4e4e4e;
  border-radius: 5px;
  padding: 10px;
  min-width: max-content;
  height: 130px;
  overflow: auto;
`

function Drop({ content, onSelect }) {
  const filterItem = content.map((item, index) => (
    <li key={index}>
      <StyledLink href="#" id={item.id} onClick={() => onSelect(item.id)}>
        {item.name}
      </StyledLink>
    </li>
  ))

  return <StyledUl>{filterItem}</StyledUl>
}

export default Drop
