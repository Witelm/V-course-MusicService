import TrackPlay from './items/TrackPlay'
import s from './BarPlayer.module.css'
import Audio from '../../audio/Audio'
import { useDispatch, useSelector } from 'react-redux'
import { useGetAllTracksQuery } from '../../../store/services/content'
import { audioGet } from '../../../store/actions/creators/audio'
import { useState } from 'react'

function BarPlayer({
  setCompleted,
  volumeState,
  audioRef,
  audioSrc,
  setPlay,
  statePlay,
}) {
  const audioState = useSelector((state) => state.audio)
  const dispatch = useDispatch()
  const { data: dataAll } = useGetAllTracksQuery()
  const [repeat, setRepeat] = useState(false)

  const handlePlay = () => {
    setPlay(!statePlay)
  }

  const playNextPrev = (destination) => {
    const audioStateArray = audioState.array
    const index = audioStateArray.indexOf(audioState.src)
    if (index !== -1 && index + 1 < audioStateArray.length) {
      return audioStateArray[index + destination]
    }
    if (index + 1 === audioStateArray.length && destination === -1) {
      return audioStateArray[index - 1]
    }
    return audioStateArray[index]
  }

  // const playChange = (destination) => {
  //   setPlay(false)
  //   setCompleted('0')
  //   audioRef.current.currentTime = 0
  //   const song = playNextPrev(destination)
  //   const audio = dataAll.filter((track) => track.id === song)[0]

  //   dispatch(audioGet(song, audio.author, audio.album, audio.array))
  //   setPlay(true)
  //   audioRef.current.addEventListener('loadedmetadata', () => {
  //     audioRef.current.play()
  //   })
  // }

  const handleNext = () => {
    setPlay(false)
    setCompleted('0')
    audioRef.current.currentTime = 0
    const next = playNextPrev(1)
    const audioNext = dataAll.filter((track) => track.id === next)[0]

    dispatch(
      audioGet(next, audioNext.author, audioNext.album, audioState.array)
    )
    setPlay(true)
    audioRef.current.addEventListener('loadedmetadata', () => {
      audioRef.current.play()
    })
  }

  const handlePrev = () => {
    setPlay(false)
    setCompleted('0')
    audioRef.current.currentTime = 0
    const prev = playNextPrev(-1) ? playNextPrev(-1) : audioState.array[0]
    const audioPrev = dataAll.filter((track) => track.id === prev)[0]
    dispatch(
      audioGet(prev, audioPrev.author, audioPrev.album, audioState.array)
    )
    setPlay(true)
    audioRef.current.addEventListener('loadedmetadata', () => {
      audioRef.current.play()
    })
    console.log(prev)
  }

  const handleRepeat = () => {
    if (repeat === false) {
      return setRepeat(true)
    }
    return setRepeat(false)
  }

  const handleShuffle = () => {
    console.log('shuffle')
    console.log('repeat', repeat)
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
        <div className={`${s.btn_prev} ${s.button}`} onClick={handlePrev}>
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
        <div className={`${s.btn_next} ${s.button}`} onClick={handleNext}>
          <svg className={s.next_svg} alt="next">
            <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
          </svg>
        </div>
        <div
          className={`${s.btn_repeat} ${s.btn_icon} ${s.button} `}
          onClick={handleRepeat}
        >
          <svg
            className={`${s.repeat_svg} ${repeat ? s.active : ''}`}
            alt="repeat"
          >
            <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
          </svg>
        </div>
        <div
          className={`${s.btn_shuffle} ${s.btn_icon} ${s.button}`}
          onClick={handleShuffle}
        >
          <svg className={s.shuffle_svg} alt="shuffle">
            <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
          </svg>
        </div>
      </div>
      <Audio
        audioSrc={audioSrc}
        volumeState={volumeState}
        statePlay={statePlay}
        setCompleted={setCompleted}
        audioRef={audioRef}
        setPlay={setPlay}
        dataAll={dataAll}
        repeat={repeat}
      />

      <TrackPlay />
    </div>
  )
}

export default BarPlayer
