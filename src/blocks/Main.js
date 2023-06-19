import React from 'react'
import Skeleton from './Skeleton/Skeleton'

import SideBar from './Sidebar/SideBar'
import Nav from './Nav/Nav'
import CenterBlock from './Center/CenterBlock'
import { PlayLists } from './Const'

function Main(props) {
  return props.isLoading ? (
    <main className="main">
      <Skeleton />
    </main>
  ) : (
    <main className="main">
      <Nav />
      <CenterBlock />
      <SideBar {...PlayLists} />
    </main>
  )
}

export default Main
