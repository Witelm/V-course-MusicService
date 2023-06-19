import s from './UserSideBar.module.css'

function UserSideBar(props) {
  return (
    <div className={s.personal}>
      <p className={s.name}>{props.user}</p>
      <div className={s.avatar}></div>
    </div>
  )
}

export default UserSideBar
