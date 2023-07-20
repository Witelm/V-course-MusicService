import { useEffect, useRef, useState } from 'react'

export default function Audio({ audioRef, play, setCompleted, volumeState }) {
  useEffect(() => {
    play ? audioRef.current.play() : audioRef.current.pause()
  }, [play])

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

  return (
    <div>
      <audio ref={audioRef}>
        <source src="media/Bobby.mp3" />
      </audio>
    </div>
  )
}
