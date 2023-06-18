import { USER } from '../Const'
import * as S from '../sidebar/StyleSideBar'
import UserSideBar from '../sidebar/UserSideBar'
import styled from 'styled-components'

const SkeletonSidebarItem = styled.div`
  background: #313131;
  width: 250px;
  height: 150px;
  margin-bottom: 30px;
`

function SkeletonSidebar(props) {
  return (
    <S.MainSidebar>
      <UserSideBar {...USER} />

      <S.SidebarBlock>
        <S.SidebarList>
          <SkeletonSidebarItem />
          <SkeletonSidebarItem />
          <SkeletonSidebarItem />
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}

export default SkeletonSidebar
