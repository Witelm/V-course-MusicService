import * as S from './StylePlayList'

function PlayListItem(props) {
  return (
    <S.PlaylistItem>
      <S.PlaylistTrack>
        <S.TrackTitle>
          <S.TrackTitleImage>
            <S.TrackTitleSvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </S.TrackTitleSvg>
          </S.TrackTitleImage>
          <div className="track__title-text">
            <S.TrackTitleLink href="http://">
              {props.title}
              <S.TrackTitleSpan>({props.titleAdd})</S.TrackTitleSpan>
            </S.TrackTitleLink>
          </div>
        </S.TrackTitle>
        <S.TrackAuthor>
          <S.TrackAuthorLink href="http://">{props.author}</S.TrackAuthorLink>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <S.TrackAlbumLink href="http://">{props.album}</S.TrackAlbumLink>
        </S.TrackAlbum>
        <div className="track__time">
          <S.TrackTimeSvg alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </S.TrackTimeSvg>
          <S.TrackTimeText>{props.time}</S.TrackTimeText>
        </div>
      </S.PlaylistTrack>
    </S.PlaylistItem>
  )
}

export default PlayListItem
