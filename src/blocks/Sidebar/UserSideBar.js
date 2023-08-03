import { useSelector } from 'react-redux'
import s from './UserSideBar.module.css'

function UserSideBar(props) {
  const user = useSelector((state) => state.user.username)
  return (
    <div className={s.personal}>
      <p className={s.name}>{user}</p>
      <div className={s.avatar}></div>
    </div>
  )
}

export default UserSideBar
