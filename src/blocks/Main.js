import React from 'react'
import Skeleton from './skeleton/Skeleton'

import SideBar from './sidebar/SideBar'
import Nav from './menu/Nav'
import CenterBlock from './center/CenterBlock'
import { PlayLists } from './Const'

import styled from 'styled-components'

const StyledMain = styled.main`
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`

function Main(props) {
  return props.isLoading ? (
    <StyledMain>
      <Skeleton />
    </StyledMain>
  ) : (
    <StyledMain>
      <Nav />
      <CenterBlock />
      <SideBar {...PlayLists} />
    </StyledMain>
  )
}

export default Main
