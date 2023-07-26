import s from './SideBarItem.module.css'
export const SideBarItem = (props) => {
  return (
    <div className={s.item}>
      <a
        className={s.link}
        href={props.link}
        onClick={() => console.log(props)}
      >
        <img className={s.img} src={props.image} alt={props.title}></img>
      </a>
    </div>
  )
}
