function UserSideBar(props) {
  return (
    <div className="sidebar__personal">
      <p className="sidebar__personal-name">{props.user}</p>
      <div className="sidebar__avatar"></div>
    </div>
  )
}

export default UserSideBar
