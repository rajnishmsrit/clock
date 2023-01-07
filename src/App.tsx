import { useState } from 'react'
import Clock from './components/Clock'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Time</h1>
      <Clock></Clock>
    </div>
  )
}

export default App
