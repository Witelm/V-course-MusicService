import UserSideBar from './UserSideBar'
import { USER, PLAYLISTS } from '../Const'
import s from './SideBar.module.css'
import { SideBarItem } from './SideBarItem'
import { act } from 'react-dom/test-utils'

function SideBar(props) {
  return (
    <div className={s.sidebar}>
      <UserSideBar {...USER} />
      <div className={s.block}>
        <div className={s.list}>
          {PLAYLISTS.map((item, index) => (
            <SideBarItem {...item} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SideBar
