import s from './Content.module.css'
import PlayListItem from '../../Playlist/PlayListItem'

const FetchContent = (props) => {
  return (
    <div className={s.playlist}>
      {props.data.map((track, index) => (
        <PlayListItem {...track} key={index} />
      ))}
    </div>
  )
}

export const Content = (props) => {
  return (
    <div className={s.content}>
      <div className={s.title}>
        <div className={`${s.title_col} ${s.col01}`}>Трек</div>
        <div className={`${s.title_col} ${s.col02}`}>ИСПОЛНИТЕЛЬ</div>
        <div className={`${s.title_col} ${s.col03}`}>АЛЬБОМ</div>
        <div className={`${s.title_col} ${s.col04}`}>
          <svg className={s.svg} alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
          </svg>
        </div>
      </div>

      <FetchContent {...props} />
    </div>
  )
}
