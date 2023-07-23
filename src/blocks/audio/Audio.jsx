import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Audio({
  audioRef,
  statePlay,
  setCompleted,
  volumeState,
  audioSrc,
  setPlay,
}) {
  useEffect(() => {
    statePlay ? audioRef.current.play() : audioRef.current.pause()
  }, [statePlay])

  useEffect(() => {
    const TimerId = setInterval(() => {
      setCompleted(
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      )
    }, 200)
    return () => {
      clearInterval(TimerId)
    }
  }, [])

  useEffect(() => {
    audioRef.current.volume = volumeState
  }, [volumeState])

  useEffect(() => {
    audioRef.current.src = audioSrc.audioSrc
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
