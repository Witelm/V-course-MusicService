import FunctionItem from './MenuItem'
import styled from 'styled-components'

const MenuList = styled.div`
  padding: 18px 0 10px 0;
`

function NavMenu() {
  return (
    <div className="nav__menu menu">
      <MenuList>{FunctionItem}</MenuList>
    </div>
  )
}

export default NavMenu
