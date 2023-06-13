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

const NavLogoImg = () => {}

function Nav() {
  const [visible, setVisible] = useState(false)
  const toggleVisibility = () => setVisible(!visible)

  return (
    <nav className="main__nav nav">
      <NavLogo>
        <img className="logo__image" src="img/logo.png" alt="logo"></img>
      </NavLogo>
      <NavBurger onClick={toggleVisibility}>
        <BurgerLine />
        <BurgerLine />
        <BurgerLine />
      </NavBurger>
      {visible && <NavMenu />}
    </nav>
  )
}

export default Nav
