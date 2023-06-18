import UserSideBar from './UserSideBar'
import { USER } from '../Const'
import * as S from './StyleSideBar'

function SideBar(props) {
  return (
    <S.MainSidebar>
      <UserSideBar {...USER} />

      <S.SidebarBlock>
        <S.SidebarList>
          <S.SideBarItem>
            <S.SidebarLink href="#">
              <S.SidebarImg src={props.one} alt="day's playlist" />
            </S.SidebarLink>
          </S.SideBarItem>
          <S.SideBarItem>
            <S.SidebarLink href="#">
              <S.SidebarImg src={props.two} alt="day's playlist" />
            </S.SidebarLink>
          </S.SideBarItem>
          <S.SideBarItem>
            <S.SidebarLink href="#">
              <S.SidebarImg src={props.three} alt="day's playlist" />
            </S.SidebarLink>
          </S.SideBarItem>
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}

export default SideBar
