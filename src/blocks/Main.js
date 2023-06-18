import React from 'react'
import Skeleton from './Skeleton'

import SideBar from './SideBar'
import Nav from './Nav/Nav'
import CenterBlock from './CenterBlock'
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
