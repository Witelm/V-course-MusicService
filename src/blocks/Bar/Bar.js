import BarPlayer from './components/BarPlayer'
import BarVolume from './components/BarVolume'
import s from './Bar.module.css'
import { useState, useRef } from 'react'
import { useThemeContext } from '../context/Context'

function Bar() {
  const [completed, setCompleted] = useState('0')
  const handleDuration = (e) => {}

  const audioRef = useRef(null)

  const [volumeState, setVolume] = useState(0.5)

  const { theme } = useThemeContext()

  const PositionX = (w) => {
    console.log(
      w.clientX,
      w.target.offsetWidth,
      Math.round((w.clientX / w.target.offsetWidth) * audioRef.current.duration)
    )

    const temp = Math.round(
      (w.clientX / w.target.offsetWidth) * audioRef.current.duration
    )

    audioRef.current.currentTime = temp
  }

  return (
    <div
      className={s.bar}
      style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}
    >
      <div className={s.content}>
        <div className={s.player_progress} onClick={PositionX}>
          <div className={s.prodress_bar} style={{ width: `${completed}%` }}>
            <span className={s.propgress_span}></span>
          </div>
        </div>
        <div className={s.player_block}>
          <BarPlayer
            setCompleted={setCompleted}
            audioRef={audioRef}
            volumeState={volumeState}
          />
          <BarVolume volumeState={volumeState} setVolume={setVolume} />
        </div>
      </div>
    </div>
  )
}

export default Bar
