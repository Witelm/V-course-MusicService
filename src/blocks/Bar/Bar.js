import BarPlayer from './components/BarPlayer'
import BarVolume from './components/BarVolume'
import s from './Bar.module.css'
import { useState } from 'react'
import { useThemeContext } from '../context/Context'

function Bar() {
  const [completed, setCompleted] = useState('0')
  const handleDuration = (e) => {
    console.log(e.target)
  }

  const [volumeState, setVolume] = useState(0.5)

  const { theme } = useThemeContext()

  return (
    <div
      className={s.bar}
      style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}
    >
      <div className={s.content}>
        <div className={s.player_progress} onClick={handleDuration}>
          <div className={s.prodress_bar} style={{ width: `${completed}%` }}>
            <span className={s.propgress_span}></span>
          </div>
        </div>
        <div className={s.player_block}>
          <BarPlayer setCompleted={setCompleted} volumeState={volumeState} />
          <BarVolume volumeState={volumeState} setVolume={setVolume} />
        </div>
      </div>
    </div>
  )
}

export default Bar
