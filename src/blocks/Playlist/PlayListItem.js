import s from './PlayListItem.module.css'
import { useThemeContext } from '../context/Context'
import { useDispatch, useSelector } from 'react-redux'
import { audioGet } from '../../store/actions/creators/audio'
import { store } from '../../store/store'

function PlayListItem(props) {
  const { theme } = useThemeContext()

  const dispatch = useDispatch()

  const hanldeClick = (e) => {
    e.preventDefault()
    const target = e.target.href

    console.log(store.getState())
    dispatch(audioGet(target))
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
              onClick={hanldeClick}
              href={props.track_file}
            >
              {props.name}
              <span className={s.title_span}>({props.genre})</span>
            </a>
          </div>
        </div>

        <div className={s.author}>
          <a className={s.author_link} href="http://">
            {props.author}
          </a>
        </div>
        <div className={s.album}>
          <a className={s.album_link} href="http://">
            {props.album}
          </a>
        </div>
        <div className="track__time">
          <svg className={s.time_svg} alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
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
