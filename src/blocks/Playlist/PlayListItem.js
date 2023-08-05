import s from './PlayListItem.module.css'
import { useThemeContext } from '../context/Context'
import { useDispatch, useSelector } from 'react-redux'
import { audioGet } from '../../store/actions/creators/audio'
import {
  useAddTrackToFavoriteMutation,
  useDeleteTrackFromFavoriteMutation,
  useGetFavoriteAllTrackQuery,
  useGetAllTracksQuery,
  useGetSelectionTracksQuery,
} from '../../store/services/content'
import { useEffect, useState } from 'react'

function PlayListItem(props) {
  const { theme } = useThemeContext()
  const dispatch = useDispatch()
  const [addTrackToFavorite, { isLoading, isError, error }] =
    useAddTrackToFavoriteMutation()
  const [deleteTrackFromFavorite, { isLoadingDel, isErrorDel, errorDel }] =
    useDeleteTrackFromFavoriteMutation()

  const { data: dataFavorite } = useGetFavoriteAllTrackQuery()
  const { data: dataSelection } = useGetSelectionTracksQuery()
  const { data: dataAll } = useGetAllTracksQuery()

  const TOKEN = useSelector((state) => state.user.token)
  const favorite = useSelector((state) => state.favorite)
  const { refetch: refetchFavorite } = useGetFavoriteAllTrackQuery()
  const [Favorite, setFavorite] = useState([])

  const functionData = (data) => {
    return data.map((item) => item.id)
  }

  useEffect(() => {
    setFavorite(functionData(dataFavorite))
  }, [dataFavorite])

  const handleClick = (e) => {
    e.preventDefault()
    let array = []
    if (favorite.show === 'all') {
      array = functionData(dataAll)
    }
    if (favorite.show === 'favorite') {
      array = functionData(dataFavorite)
    }
    if (favorite.show === 'selection') {
      array = functionData(dataSelection[favorite.id].items)
      console.log(dataSelection[favorite.id].items)
    }
    const target = e.target.href
    dispatch(audioGet(props.id, props.author, props.album, array))
  }

  const handleAddFavorite = async () => {
    try {
      const response = await addTrackToFavorite(props.id, TOKEN)
      refetchFavorite()
    } catch (error) {
      console.log(error)
    }
  }

  const handleRemoveFavorite = async () => {
    try {
      const response = await deleteTrackFromFavorite(props.id, TOKEN)
      refetchFavorite()
    } catch (error) {
      console.log(error)
    }
  }

  const handleFavorite = () => {
    favorite.show === 'favorite' ? handleRemoveFavorite() : handleAddFavorite()
  }

  return (
    <div className={s.item}>
      <div className={s.track}>
        <div className={s.title}>
          <div
            className={s.title_image}
            style={{
              backgroundColor: theme.color,
              color: theme.backgroundColor,
            }}
          >
            <svg
              className={s.title_svg}
              style={{ color: theme.background }}
              alt="music"
            >
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          <div className="track__title-text">
            <a
              className={s.title_link}
              style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
              }}
              onClick={handleClick}
              href={props.track_file}
            >
              {props.name}
              <span className={s.title_span}>({props.genre})</span>
            </a>
          </div>
        </div>

        <div className={s.author}>
          <a className={s.author_link} href="#">
            {props.author}
          </a>
        </div>
        <div className={s.album}>
          <a className={s.album_link} href="#">
            {props.album}
          </a>
        </div>
        <div className="track__time">
          <svg
            className={`${Favorite.includes(props.id) ? s.active : s.time_svg}`}
            alt="time"
          >
            <use
              xlinkHref="img/icon/sprite.svg#icon-like"
              onClick={handleFavorite}
            ></use>
          </svg>
          <span className={s.time_text}>
            {(props.duration_in_seconds / 60).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default PlayListItem
