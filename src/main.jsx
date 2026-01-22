import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root')

if (!container) {
  throw new Error('Could not find root element to mount to')
} else {
  const root = createRoot(container)
  root.render(<App />)
}
