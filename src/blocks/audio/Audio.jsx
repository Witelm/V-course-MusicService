import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useGetAllTracksQuery } from '../../store/services/content'

export default function Audio({
  audioRef,
  statePlay,
  setCompleted,
  volumeState,
  audioSrc,
  dataAll,
  repeat,
  setPlay,
}) {
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
          audioRef.current.currentTime = 0
          audioRef.current.pause()
          setPlay(false)
        }
      }
    }, 200)
    return () => {
      clearInterval(TimerId)
    }
  }, [repeat])

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
