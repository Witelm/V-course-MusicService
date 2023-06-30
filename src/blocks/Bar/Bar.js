import BarPlayer from './components/BarPlayer'
import BarVolume from './components/BarVolume'
import s from './Bar.module.css'
import { useState } from 'react'

function Bar() {
  const [completed, setCompleted] = useState('0')
  const handleDuration = () => {}

  return (
    <div className={s.bar}>
      <div className={s.content}>
        <div className={s.player_progress} onClick={handleDuration}>
          <div className={s.prodress_bar} style={{ width: `${completed}%` }}>
            <span className={s.propgress_span}></span>
          </div>
        </div>
        <div className={s.player_block}>
          <BarPlayer setCompleted={setCompleted} />
          <BarVolume />
        </div>
      </div>
    </div>
  )
}

export default Bar
