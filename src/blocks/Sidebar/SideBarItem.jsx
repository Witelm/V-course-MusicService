import { useGetSelectionTracksQuery } from '../../store/services/content'
import s from './SideBarItem.module.css'
export const SideBarItem = (props) => {
  const { data, isLoading, isError } = useGetSelectionTracksQuery()
  const handleSelection = (e) => {
    e.preventDefault()
    console.log(data[props.id].items)
  }
  return (
    <div className={s.item}>
      <a className={s.link} href={props.link} onClick={handleSelection}>
        <img className={s.img} src={props.image} alt={props.title}></img>
      </a>
    </div>
  )
}
