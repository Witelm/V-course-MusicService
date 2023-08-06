import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import s from './TrackPlay.module.css'
import {
  useGetFavoriteAllTrackQuery,
  useAddTrackToFavoriteMutation,
  useDeleteTrackFromFavoriteMutation,
} from '../../../../store/services/content'

function TrackPlay() {
  const audioInfo = useSelector((state) => state.audio)
  const TOKEN = useSelector((state) => state.user.token)
  const { data: dataFavorite } = useGetFavoriteAllTrackQuery()
  const { refetch: refetchFavorite } = useGetFavoriteAllTrackQuery()
  const [addTrackToFavorite, { isLoading, isError, error }] =
    useAddTrackToFavoriteMutation()
  const [deleteTrackFromFavorite, { isLoadingDel, isErrorDel, errorDel }] =
    useDeleteTrackFromFavoriteMutation()

  const [Favorite, setFavorite] = useState([])

  const functionData = (data) => {
    return data.map((item) => item.id)
  }

  useEffect(() => {
    setFavorite(functionData(dataFavorite))
  }, [dataFavorite])

  const handleLike = () => {
    addTrackToFavorite(audioInfo.src, TOKEN)
    refetchFavorite()
  }

  const handleDisLike = () => {
    deleteTrackFromFavorite(audioInfo.src, TOKEN)
    refetchFavorite()
  }
  return (
    <div className={s.track_play}>
      <div className={s.play_contain}>
        <div className={s.play_image}>
          <svg className={s.play_svg} alt="music">
            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
          </svg>
        </div>
        <div className={s.play_author}>
          <a className={s.author_link} href="#">
            {audioInfo.author}
          </a>
        </div>
        <div className={s.play_album}>
          <a className={s.album_link} href="#">
            {audioInfo.album}
          </a>
        </div>
      </div>

      <div className={s.like_dislike}>
        <div className={`${s.play_like} ${s.btn_icon}`} onClick={handleLike}>
          <svg
            className={`${s.like_svg} ${
              Favorite.includes(audioInfo.src) ? s.active : ''
            }`}
            alt="like"
          >
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
        </div>
        <div
          className={`${s.play_dislike} ${s.btn_icon}`}
          onClick={handleDisLike}
        >
          <svg className={`${s.dislike_svg}`} alt="dislike">
            <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default TrackPlay
