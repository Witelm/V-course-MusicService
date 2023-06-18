import styled, { css } from 'styled-components'

const playlistMixin = css`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
`

const ContentTitle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 24px;
`

const Col01 = styled.div`
  ${playlistMixin}
  width: 447px;
`

const Col02 = styled.div`
  ${playlistMixin}
  width: 321px;
`

const Col03 = styled.div`
  ${playlistMixin}
  width: 245px;
`
const Col04 = styled.div`
  ${playlistMixin}
  width: 60px;
  text-align: end;
`

const PlaylistTitleSvg = styled.svg`
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`

function CenterContent() {
  return (
    <ContentTitle>
      <Col01>Трек</Col01>
      <Col02>ИСПОЛНИТЕЛЬ</Col02>
      <Col03>АЛЬБОМ</Col03>
      <Col04>
        <PlaylistTitleSvg alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
        </PlaylistTitleSvg>
      </Col04>
    </ContentTitle>
  )
}

export default CenterContent
