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

  const colors = ['0x2986cc', '0xe67e22', '0xf1c40f', '0x2ecc71', '0xe74c3c']

  const changeColor = () => {
    const currentIndex = colors.indexOf(avatarColor)
    const nextIndex = (currentIndex + 1) % colors.length
    setAvatarColor(colors[nextIndex])
  }

  const resetGame = () => {
    setGameEnded(false)
  }
  return (
    <div className="relative min-h-screen p-8 flex flex-col gap-8 z-10">
      <div className="flex flex-col gap-4 pointer-events-auto">
        <button
          onClick={changeColor}
          className="bg-white px-4 py-2 rounded shadow-lg text-black font-bold uppercase transition-transform active:scale-95"
        >
          'Change Avatar Color'
        </button>

        {gameEnded && (
          <div className="bg-brandDark p-6 rounded shadow-2xl flex flex-col items-center gap-4 border-2 border-brandOrange">
            <h1 className="text-white font-serif font-black text-4xl italic">
              'GAME ENDED'
            </h1>
            <button
              onClick={resetGame}
              className="bg-brandOrange text-white px-6 py-2 rounded font-bold"
            >
              'RESTART'
            </button>
          </div>
        )}
      </div>
      {/* Color palette blocks */}
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded bg-brandOrange" />
          <span className="mt-2 text-sm">brandOrange</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded bg-brandYellow" />
          <span className="mt-2 text-sm">brandYellow</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded bg-brandDark" />
          <span className="mt-2 text-sm text-white">brandDark</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded bg-brandLightGray" />
          <span className="mt-2 text-sm">brandLightGray</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded bg-brandExtraLight" />
          <span className="mt-2 text-sm">brandExtraLight</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded bg-brandBlue" />
          <span className="mt-2 text-sm text-white">brandBlue</span>
        </div>
      </div>

      {/* Font samples */}
      <div className="flex flex-col gap-2">
        <div className="font-serif font-black text-2xl">
          Playfair Display Black (900)
        </div>
        <div className="font-serif font-medium text-2xl">
          Playfair Display Medium (500)
        </div>
        <div className="font-sans font-bold text-2xl">Roboto Bold (700)</div>
        <div className="font-sans font-normal text-2xl">
          Roboto Regular (400)
        </div>
      </div>
    </div>
  )
}

export default UI
