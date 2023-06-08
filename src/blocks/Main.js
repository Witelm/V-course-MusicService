import React, { useState } from 'react'
import SideBar from './SideBar'
import Nav from './Nav'
import CenterBlock from './CenterBlock'
import { PlayLists } from './Const'

function Main() {
  return (
    <main className="main">
      <Nav />
      <CenterBlock />
      <SideBar {...PlayLists} />
    </main>
  )
}

export default Main
