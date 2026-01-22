import UI from './components/UI'
import GameCanvas from './components/GameCanvas'

const App = () => {
  return (
    <div className="relative w-full h-full">
      <GameCanvas />
      <UI />
    </div>
  )
}

export default App
