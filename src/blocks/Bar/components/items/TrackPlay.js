import s from './TrackPlay.module.css'

function TrackPlay() {
  return (
    <div className={s.track_play}>
      <div className={s.play_contain}>
        <div className={s.play_image}>
          <svg className={s.play_svg} alt="music">
            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
          </svg>
        </div>
        <div className={s.play_author}>
          <a className={s.author_link} href="http://">
            Ты та...
          </a>
        </div>
        <div className={s.play_album}>
          <a className={s.album_link} href="http://">
            Баста
          </a>
        </div>
      </div>

      <div className={s.like_dislike}>
        <div className={`${s.play_like} ${s.btn_icon}`}>
          <svg className={s.like_svg} alt="like">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
        </div>
        <div className={`${s.play_dislike} ${s.btn_icon}`}>
          <svg className={s.dislike_svg} alt="dislike">
            <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default TrackPlay
