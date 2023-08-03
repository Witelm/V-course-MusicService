import s from './PlayListItem.module.css'
import { useThemeContext } from '../context/Context'
import { useDispatch, useSelector } from 'react-redux'
import { audioGet } from '../../store/actions/creators/audio'
import {
  useAddTrackToFavoriteMutation,
  useDeleteTrackFromFavoriteMutation,
  useGetFavoriteAllTrackQuery,
} from '../../store/services/content'

function PlayListItem(props) {
  const { theme } = useThemeContext()
  const dispatch = useDispatch()
  const [addTrackToFavorite, { isLoading, isError, error }] =
    useAddTrackToFavoriteMutation()
  const [deleteTrackFromFavorite, { isLoadingDel, isErrorDel, errorDel }] =
    useDeleteTrackFromFavoriteMutation()
  const TOKEN = useSelector((state) => state.user.token)
  const favorite = useSelector((state) => state.favorite.show)
  const { refetch: refetchFavorite } = useGetFavoriteAllTrackQuery()

  const handleClick = (e) => {
    e.preventDefault()
    const target = e.target.href
    dispatch(audioGet(target))
  }

  const handleAddFavorite = async () => {
    console.log('1')
    try {
      const response = await addTrackToFavorite(props.id, TOKEN)
      refetchFavorite()
    } catch (error) {
      console.log(error)
    }
  }

  const handleRemoveFavorite = async () => {
    console.log('2')
    try {
      const response = await deleteTrackFromFavorite(props.id, TOKEN)
      refetchFavorite()
    } catch (error) {
      console.log(error)
    }
  }

  const handleFavorite = () => {
    console.log(favorite)
    favorite === 'favorite' ? handleRemoveFavorite() : handleAddFavorite()
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
          <svg className={s.time_svg} alt="time">
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
