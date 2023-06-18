import BarPlayer from './components/BarPlayer'
import BarVolume from './components/BarVolume'
import s from './Bar.module.css'

function Bar() {
  return (
    <div className={s.bar}>
      <div className={s.content}>
        <div className={s.player_progress}></div>
        <div className={s.player_block}>
          <BarPlayer />
          <BarVolume />
        </div>
      </div>
    </div>
  )
}

export default Bar
