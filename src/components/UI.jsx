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

  const palette = [
    { name: 'brandDark', hex: '#1b1b1b', className: 'bg-brandDark' },
    { name: 'brandRed', hex: '#ee552c', className: 'bg-brandRed' },
    {
      name: 'brandExtraLight',
      hex: '#f4f4f4',
      className: 'bg-brandExtraLight',
    },
    { name: 'brandLightGray', hex: '#e5e5e5', className: 'bg-brandLightGray' },
    { name: 'brandGray', hex: '#ff9125', className: 'bg-brandGray' },
  ]

  const changeColor = () => {
    const currentIndex = palette.findIndex((color) => color.hex === avatarColor)
    const nextIndex = (currentIndex + 1) % palette.length
    setAvatarColor(palette[nextIndex].hex)
  }

  const resetGame = () => {
    setGameEnded(false)
  }

  // palette array is now unified above

  return (
    <>
      <div className="fixed top-0 left-0 w-full flex flex-row items-start justify-between px-8 pt-6 pb-12 z-20 from-brandDark/80 to-brandDark/0 backdrop-blur-sm pointer-events-none">
        <div className="flex flex-col items-start gap-4">
          <span className="text-brandExtraLight text-xs font-bold tracking-widest uppercase opacity-70 ml-1">
            Color Scheme
          </span>
          <div className="flex flex-row gap-2">
            {palette.map((color) => {
              return (
                <div
                  key={color.name}
                  className={
                    'w-6 h-6 rounded-full border border-white/10 ' +
                    color.className +
                    (avatarColor === color.hex
                      ? ' ring-2 ring-white ring-offset-2 ring-offset-brandDark/40'
                      : '')
                  }
                />
              )
            })}
          </div>
        </div>

        <div className="flex flex-col gap-1 items-end text-white">
          <span className="text-brandExtraLight text-xs font-bold tracking-widest uppercase opacity-70 mr-1 mb-1">
            Typography
          </span>
          <div className="font-serif font-medium text-lg tracking-wide">
            Playfair Medium 700
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
            className="px-8 py-4 rounded-full bg-brandRed text-white font-black tracking-widest uppercase shadow-lg hover:scale-105 active:scale-95 transition-all border border-white/20 text-sm"
          >
            Change Color
          </button>
        </div>
      )}

      {gameEnded && (
        <div className="fixed inset-0 flex items-center justify-center z-40 bg-brandDark/60 backdrop-blur-xl">
          <div className="relative w-full max-w-sm bg-brandDark/90 rounded-3xl shadow-2xl flex flex-col items-center gap-8 border border-white/10 p-10 overflow-hidden">
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-brandRed/20 blur-2xl rounded-full" />
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-brandBlue/20 blur-2xl rounded-full" />

            <h1 className="text-white font-serif font-black text-4xl italic drop-shadow-2xl text-center z-10">
              Game ended
            </h1>

            <button
              onClick={resetGame}
              className="w-full py-4 rounded-xl bg-brandRed text-white font-black text-lg tracking-wide shadow-xl hover:brightness-110 active:scale-95 transition-all z-10 uppercase"
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
