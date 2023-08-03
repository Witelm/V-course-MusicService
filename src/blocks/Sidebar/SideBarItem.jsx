import { useDispatch } from 'react-redux'
import { useGetSelectionTracksQuery } from '../../store/services/content'
import { favoriteShow } from '../../store/actions/creators/favorite'
import s from './SideBarItem.module.css'

export const SideBarItem = (props) => {
  const { data, isLoading, isError } = useGetSelectionTracksQuery()
  const dispatch = useDispatch()

  const handleSelection = (e) => {
    e.preventDefault()
    console.log(props.id)
    dispatch(favoriteShow('selection', props.id))
  }
  return (
    <div className={s.item}>
      <a className={s.link} href={props.link} onClick={handleSelection}>
        <img className={s.img} src={props.image} alt={props.title}></img>
      </a>
    </div>
  )
}
