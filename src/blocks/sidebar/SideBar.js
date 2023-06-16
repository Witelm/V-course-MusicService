import UserSideBar from './UserSideBar'
import { PlayLists, USER } from '../Const'
import * as S from './StyleSideBar'
import SideBarList from './SideBarList'

function SideBar(props) {
  return (
    <S.MainSidebar>
      <UserSideBar {...USER} />
      <S.SidebarBlock>
        {/* <SideBarList /> */}

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
