import s from './Content.module.css'
import { getContent } from '../../../store/services/content'
import PlayListItem from '../../Playlist/PlayListItem'
import { useQuery } from 'react-query'

export const Content = (props) => {
  const { data, isLoading, isError } = useQuery('content', getContent)

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
      <div className={s.playlist}>
        {data.map((item) => (
          <li {...item} key={item.id} />
        ))}

        {/* // <props.array {...item} key={index} /> */}

        {/* {Array.from({ length: 11 }).map((item, index) => (
          <props.array {...props.track} key={index} />
        ))} */}
      </div>
    </div>
  )
}
