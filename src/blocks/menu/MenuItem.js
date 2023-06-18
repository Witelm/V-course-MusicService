import { MENU } from '../Const'
import styled from 'styled-components'

const MenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
  list-style: none;
`
const MenuLink = styled.a`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`

const FunctionItem = MENU.map((item, index) => (
  <MenuItem key={index}>
    <MenuLink href={item.link}>{item.text}</MenuLink>
  </MenuItem>
))

export default FunctionItem
