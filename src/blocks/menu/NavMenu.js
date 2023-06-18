import FunctionItem from './MenuItem'
import styled from 'styled-components'

const MenuList = styled.div`
  padding: 18px 0 10px 0;
`

const StyledNavMenu = styled.div`
  display: block;
  visibility: visible;
`

function NavMenu() {
  return (
    <StyledNavMenu>
      <MenuList>{FunctionItem}</MenuList>
    </StyledNavMenu>
  )
}

export default NavMenu
