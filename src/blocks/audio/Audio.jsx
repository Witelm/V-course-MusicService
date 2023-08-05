import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { audioGet } from '../../store/actions/creators/audio'

export default function Audio({
  audioRef,
  statePlay,
  setCompleted,
  volumeState,
  audioSrc,
  dataAll,
  repeat,
  setPlay,
  stateNextSong,
  audioState,
}) {
  const dispatch = useDispatch()

  useEffect(() => {
    statePlay ? audioRef.current.play() : audioRef.current.pause()
  }, [statePlay])

  useEffect(() => {
    const TimerId = setInterval(() => {
      let time =
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      setCompleted(time)
      if (time === 100) {
        if (repeat) {
          audioRef.current.currentTime = 0
          audioRef.current.play()
        } else {
          console.log(stateNextSong)
          const audioNext = dataAll.filter(
            (track) => track.id === stateNextSong
          )[0]
          console.log(audioNext)
          dispatch(
            audioGet(
              stateNextSong,
              audioNext.author,
              audioNext.album,
              audioState.array
            )
          )
          audioRef.current.addEventListener('loadedmetadata', () => {
            audioRef.current.play()
          })
        }
      }
    }, 200)
    return () => {
      clearInterval(TimerId)
    }
  }, [repeat, stateNextSong])

  useEffect(() => {
    audioRef.current.volume = volumeState
  }, [volumeState])

  useEffect(() => {
    const source = dataAll.filter((track) => track.id === audioSrc.audioSrc)
    audioRef.current.src = source[0].track_file
    audioRef.current.load()
  }, [audioSrc])

  return (
    <div>
      <audio ref={audioRef}>
        <source src={audioSrc.audioSrc} />
      </audio>
    </div>
  )
}
