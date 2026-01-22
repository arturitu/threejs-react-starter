const UI = () => {
  return (
    <div className="relative min-h-screen p-8 flex flex-col gap-8 z-10">
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
