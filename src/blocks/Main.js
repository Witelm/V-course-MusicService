import React from 'react'

import SideBar from './sidebar/SideBar'
import Nav from './menu/Nav'
import CenterBlock from './center/CenterBlock'
import { PlayLists, PlayListsSkeleton, track } from './Const'

import styled from 'styled-components'
import PlayListItem from './center/PlayListItem'
import SkeletonItem from './skeleton/SkeletonItem'
import SkeletonSidebar from './skeleton/SkeletonSidebar'

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
      <Nav />
      <CenterBlock array={SkeletonItem} track={PlayListsSkeleton} />
      <SkeletonSidebar />
    </StyledMain>
  ) : (
    <StyledMain>
      <Nav />
      <CenterBlock array={PlayListItem} track={track} />
      <SideBar {...PlayLists} />
    </StyledMain>
  )
}

export default Main
