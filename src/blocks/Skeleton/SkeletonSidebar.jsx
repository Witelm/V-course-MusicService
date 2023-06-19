import { USER } from '../Const'
import UserSideBar from '../Sidebar/UserSideBar'
import { SkeletonBarItem } from './SkeletonBarItem'
import s from './SkeletonSidebar.module.css'

export const SkeletonSidebar = (props) => {
  return (
    <div className={s.sidebar}>
      <UserSideBar {...USER} />
      <div className={s.block}>
        <div className={s.list}>
          <SkeletonBarItem />
          <SkeletonBarItem />
          <SkeletonBarItem />
        </div>
      </div>
    </div>
  )
}
