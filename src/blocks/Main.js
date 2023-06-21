import React from 'react'

import SideBar from './Sidebar/SideBar'
import Nav from './Nav/Nav'
import CenterBlock from './Center/CenterBlock'
import { PlayLists, PlayListsSkeleton, track } from './Const'
import PlayListItem from './Playlist/PlayListItem'
import SkeletonItem from './Skeleton/SkeletonItem'
import { SkeletonSidebar } from './Skeleton/SkeletonSidebar'
import s from './Main.module.css'

function Main(props) {
  return props.isLoading ? (
    <main className={s.main}>
      <Nav />
      <CenterBlock array={SkeletonItem} track={PlayListsSkeleton} />
      <SkeletonSidebar />
    </main>
  ) : (
    <main className={s.main}>
      <Nav />
      <CenterBlock array={PlayListItem} track={track} />
      <SideBar {...PlayLists} />
    </main>
  )
}

export default Main
