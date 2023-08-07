import React from 'react'

import SideBar from '../Sidebar/SideBar'
import Nav from '../Nav/Nav'
import CenterBlock from '../Center/CenterBlock'
import { PlayLists, PlayListsSkeleton, track } from '../Const'
import PlayListItem from '../Playlist/PlayListItem'
import SkeletonItem from '../Skeleton/SkeletonItem'
import { SkeletonSidebar } from '../Skeleton/SkeletonSidebar'
import s from './Main.module.css'
import { useThemeContext } from '../context/Context'

function Main(props) {
  const { theme } = useThemeContext()

  return props.isLoading ? (
    <main
      className={s.main}
      style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}
    >
      <Nav />
      <CenterBlock array={SkeletonItem} track={PlayListsSkeleton} />
      <SkeletonSidebar />
    </main>
  ) : (
    <main className={s.main}>
      <Nav />
      <CenterBlock />
      <SideBar {...PlayLists} />
    </main>
  )
}

export default Main
