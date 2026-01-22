import React, { useEffect, useRef } from 'react'
import GameEngine from '../engine/GameEngine'

const GameCanvas = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const game = new GameEngine(container)
    game.start()

    return () => {
      game.stop()
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
