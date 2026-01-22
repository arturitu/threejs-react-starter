import React, { useEffect, useRef } from 'react'
import GameEngine from '../engine/GameEngine'

const GameCanvas = () => {
  const containerRef = useRef(null)
  const GameEngineRef = useRef()

  useEffect(() => {
    GameEngineRef.current = new GameEngine(containerRef.current)

    return () => {
      if (GameEngineRef.current) {
        GameEngineRef.current.destroy()
        GameEngineRef.current = null
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full z-0 touch-none"
    />
  )
}

export default GameCanvas
