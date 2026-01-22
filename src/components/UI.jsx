import { useEffect } from 'react'
import useStore from '../store/useStore'

const UI = () => {
  const avatarColor = useStore((state) => {
    return state.avatarColor
  })
  const setAvatarColor = useStore((state) => {
    return state.setAvatarColor
  })
  const gameEnded = useStore((state) => {
    return state.gameEnded
  })
  const setGameEnded = useStore((state) => {
    return state.setGameEnded
  })

  useEffect(() => {
    console.log(gameEnded)
  }, [gameEnded])

  const colors = ['0x2986cc', '0xe67e22', '0xf1c40f', '0x2ecc71', '0xe74c3c']

  const changeColor = () => {
    const currentIndex = colors.indexOf(avatarColor)
    const nextIndex = (currentIndex + 1) % colors.length
    setAvatarColor(colors[nextIndex])
  }

  const resetGame = () => {
    setGameEnded(false)
  }

  const palette = [
    { name: 'brandOrange', className: 'bg-brandOrange' },
    { name: 'brandYellow', className: 'bg-brandYellow' },
    { name: 'brandDark', className: 'bg-brandDark' },
    { name: 'brandLightGray', className: 'bg-brandLightGray' },
    { name: 'brandExtraLight', className: 'bg-brandExtraLight' },
    { name: 'brandBlue', className: 'bg-brandBlue' },
  ]

  return (
    <>
      <div className="fixed top-0 left-0 w-full flex flex-row items-start justify-between px-8 pt-6 pb-12 z-20 bg-gradient-to-b from-brandDark/80 to-brandDark/0 backdrop-blur-sm pointer-events-none">
        <div className="flex flex-col items-start gap-4">
          <span className="text-brandExtraLight text-[10px] font-bold tracking-[0.2em] uppercase opacity-70 ml-1">
            Color Scheme
          </span>
          <div className="flex flex-row gap-3">
            {palette.map((color) => {
              return (
                <div
                  key={color.name}
                  className={
                    'w-6 h-6 rounded-full border border-white/10 ' +
                    color.className +
                    (avatarColor === color.name
                      ? ' ring-2 ring-white ring-offset-2 ring-offset-brandDark/40'
                      : '')
                  }
                />
              )
            })}
          </div>
        </div>

        <div className="flex flex-col gap-1 items-end text-white">
          <span className="text-brandExtraLight text-[10px] font-bold tracking-[0.2em] uppercase opacity-70 mr-1 mb-1">
            Typography
          </span>
          <div className="font-serif font-medium text-lg tracking-wide">
            Playfair Medium 500
          </div>
          <div className="font-sans font-bold text-sm tracking-widest">
            Roboto Bold 700
          </div>
          <div className="font-sans font-normal text-xs tracking-widest opacity-80">
            Roboto Regular 400
          </div>
        </div>
      </div>

      {!gameEnded && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex justify-center z-30">
          <button
            onClick={changeColor}
            className="px-10 py-4 rounded-full bg-brandOrange text-white font-black tracking-widest uppercase shadow-[0_0_20px_rgba(231,76,60,0.4)] hover:scale-105 active:scale-95 transition-all border border-white/20 text-sm"
          >
            Change Color
          </button>
        </div>
      )}

      {gameEnded && (
        <div className="fixed inset-0 flex items-center justify-center z-40 bg-brandDark/60 backdrop-blur-xl">
          <div className="relative w-full max-w-sm bg-brandDark/90 rounded-[40px] shadow-2xl flex flex-col items-center gap-8 border border-white/10 p-12 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-brandOrange/20 blur-[60px] rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-brandBlue/20 blur-[60px] rounded-full" />

            <h1 className="text-white font-serif font-black text-5xl italic drop-shadow-2xl text-center z-10">
              Game ended
            </h1>

            <button
              onClick={resetGame}
              className="w-full py-5 rounded-2xl bg-brandOrange text-white font-black text-xl tracking-[0.1em] shadow-xl hover:brightness-110 active:scale-95 transition-all z-10 uppercase"
            >
              Restart
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default UI
