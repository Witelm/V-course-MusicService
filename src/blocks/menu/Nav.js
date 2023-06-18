import NavMenu from './NavMenu'
import { useState } from 'react'
import styled from 'styled-components'

const BurgerLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #d3d3d3;
`

const NavBurger = styled.div`
  width: 20px;
  height: 36px;
  padding: 13px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  cursor: pointer;
`

const NavLogo = styled.div`
  width: 113.33px;
  height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
  margin-bottom: 20px;
`

const StyledMainNav = styled.nav`
  width: 244px;
  background-color: #181818;
  padding: 20px 0 20px 36px;
`

const LogoImage = styled.img`
  width: 113.33px;
  height: 17px;
  color: #181818;
`

const NavLogoImg = () => {}

function Nav() {
  const [visible, setVisible] = useState(false)
  const toggleVisibility = () => setVisible(!visible)

  return (
    <StyledMainNav>
      <NavLogo>
        <LogoImage src="img/logo.png" alt="logo" />
      </NavLogo>
      <NavBurger onClick={toggleVisibility}>
        <BurgerLine />
        <BurgerLine />
        <BurgerLine />
      </NavBurger>
      {visible && <NavMenu />}
    </StyledMainNav>
  )
}

export default Nav
