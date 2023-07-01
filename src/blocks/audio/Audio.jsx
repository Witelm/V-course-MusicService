import { useEffect, useRef, useState } from 'react'

export default function Audio({ play, setCompleted }) {
  const audioRef = useRef(null)

  useEffect(() => {
    play ? audioRef.current.play() : audioRef.current.pause()
  }, [play])

  useEffect(() => {
    const TimerId = setInterval(() => {
      setCompleted(
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      )
    }, 200)
  }, [])

  return (
    <div>
      <audio ref={audioRef}>
        <source src="media/Bobby.mp3" />
      </audio>
    </div>
  )
}
