import s from './BarVolume.module.css'

function BarVolume() {
  return (
    <div className={s.volume_block}>
      <div className={s.volume_content}>
        <div className={s.volume_image}>
          <svg className={s.volume_svg} alt="volume">
            <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
          </svg>
        </div>
        <div className={`${s.volume_progress} ${s.btn}`}>
          <input
            className={`${s.progress_line} ${s.btn}`}
            type="range"
            name="range"
          ></input>
        </div>
      </div>
    </div>
  )
}

export default BarVolume