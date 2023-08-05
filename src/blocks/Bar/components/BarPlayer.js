import TrackPlay from './items/TrackPlay'
import s from './BarPlayer.module.css'
import Audio from '../../audio/Audio'
import { useDispatch, useSelector } from 'react-redux'
import { useGetAllTracksQuery } from '../../../store/services/content'
import { audioGet } from '../../../store/actions/creators/audio'
import { useEffect, useState } from 'react'

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
  const [stateShuffle, setShuffle] = useState(false)
  const [stateNextSong, setNextSong] = useState()
  const [audioStateArray, setAudioStateArray] = useState([audioState.array])

  useEffect(() => {
    setNextSong(playNextPrev(1))
    console.log(stateNextSong)
  }, [audioSrc])

  useEffect(() => {
    if (stateShuffle) {
      setAudioStateArray(functionShuffle())
    } else {
      setAudioStateArray(audioState.array)
    }
    console.log(audioStateArray)
  }, [stateShuffle])

  const handlePlay = () => {
    setPlay(!statePlay)
  }

  function functionShuffle() {
    const shuffledArray = audioState.array.slice()
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1))
      ;[shuffledArray[i], shuffledArray[randomIndex]] = [
        shuffledArray[randomIndex],
        shuffledArray[i],
      ]
    }
    console.log(shuffledArray, stateShuffle)
    return shuffledArray
  }

  const playNextPrev = (destination) => {
    const index = audioStateArray.indexOf(audioState.src)
    console.log(index, audioStateArray)
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
    console.log(next)
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
    if (stateShuffle === false) {
      return setShuffle(true)
    }
    return setShuffle(false)
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
          className={`${s.btn_shuffle} ${s.btn_icon} ${s.button} `}
          onClick={handleShuffle}
        >
          <svg
            className={`${s.shuffle_svg} ${stateShuffle ? s.active : ''}`}
            alt="shuffle"
          >
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
        stateNextSong={stateNextSong}
        audioState={audioState}
      />

      <TrackPlay />
    </div>
  )
}

export default BarPlayer
