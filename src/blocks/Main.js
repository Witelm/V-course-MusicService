import React, { useState } from 'react'
import SideBar from './SideBar'
import Nav from './Nav'
import CenterBlock from './CenterBlock'

function Main() {
  return (
    <main className="main">
      <Nav />
      <CenterBlock />
      <SideBar />
    </main>
  )
}

export default Main
