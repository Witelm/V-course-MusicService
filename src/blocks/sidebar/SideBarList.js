import * as S from './StyleSideBar'

function SideBarList(props) {
  render(
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
  )
}

export default SideBarList
