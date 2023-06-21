import s from './SkeletonItem.module.css'

function SkeletonItem() {
  return (
    <div className={s.item}>
      <div className={s.track}>
        <div className={s.title}>
          <div className={s.image}></div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonItem
