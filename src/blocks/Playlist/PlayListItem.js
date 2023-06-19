import s from './PlayListItem.module.css'

function PlayListItem(props) {
  return (
    <div className={s.item}>
      <div className={s.track}>
        <div className={s.title}>
          <div className={s.title_image}>
            <svg className={s.title_svg} alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          <div className="track__title-text">
            <a className={s.title_link} href="http://">
              {props.title}
              <span className={s.title_span}>({props.titleAdd})</span>
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
          <span className={s.time_text}>{props.time}</span>
        </div>
      </div>
    </div>
  )
}

export default PlayListItem
