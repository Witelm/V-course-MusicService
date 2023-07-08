import TrackPlay from './items/TrackPlay'
import s from './BarPlayer.module.css'
import { useState } from 'react'
import Audio from '../../audio/Audio'

function BarPlayer({ setCompleted, volumeState }) {
  const [statePlay, setPlay] = useState(false)
  const handlePlay = () => {
    setPlay(!statePlay)
  }

  const pauseSvg = (
    <svg className={s.play_svg} alt="pause">
      <rect width="5" height="19" fill="#D9D9D9" />
      <rect x="10" width="5" height="19" fill="#D9D9D9" />
    </svg>
  )

  const playSvg = (
    <svg className={s.play_svg} alt="play">
      <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
    </svg>
  )

  return (
    <div className={s.bar_player}>
      <div className={s.player_controls}>
        <div className={`${s.btn_prev} ${s.button}`}>
          <svg className={s.prev_svg} alt="prev">
            <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
          </svg>
        </div>
        <div
          className={`${s.btn_play} ${s.btn} ${s.button}`}
          onClick={handlePlay}
        >
          {statePlay ? pauseSvg : playSvg}
        </div>
        <div className={`${s.btn_next} ${s.button}`}>
          <svg className={s.next_svg} alt="next">
            <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
          </svg>
        </div>
        <div className={`${s.btn_repeat} ${s.btn_icon} ${s.button}`}>
          <svg className={s.repeat_svg} alt="repeat">
            <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
          </svg>
        </div>
        <div className={`${s.btn_shuffle} ${s.btn_icon} ${s.button}`}>
          <svg className={s.shuffle_svg} alt="shuffle">
            <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
          </svg>
        </div>
      </div>
      <Audio
        volumeState={volumeState}
        play={statePlay}
        setCompleted={setCompleted}
      />

      <TrackPlay />
    </div>
  )
}

export default BarPlayer
