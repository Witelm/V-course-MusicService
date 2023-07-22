import UserSideBar from './UserSideBar'
import { USER, PLAYLISTS } from '../Const'
import s from './SideBar.module.css'
import { SideBarItem } from './SideBarItem'
import { useThemeContext } from '../context/Context'

function SideBar(props) {
  const { theme } = useThemeContext()

  return (
    <div
      className={s.sidebar}
      style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}
    >
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
