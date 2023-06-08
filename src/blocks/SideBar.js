import UserSideBar from './UserSideBar'
import { USER } from './Const'

function SideBar(props) {
  return (
    <div className="main__sidebar sidebar">
      <UserSideBar {...USER} />
      <div className="sidebar__block">
        <div className="sidebar__list">
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src={props.one}
                alt="day's playlist"
              ></img>
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src={props.two}
                alt="day's playlist"
              ></img>
            </a>
          </div>
          <div className="sidebar__item">
            <a className="sidebar__link" href="#">
              <img
                className="sidebar__img"
                src={props.three}
                alt="day's playlist"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
