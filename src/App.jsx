import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <h1>Test Pokemon</h1>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    alt="pikachu"
    ></img>
    <h2>Start editing to see some magic happen!</h2>
  </div>
  )
}

export default App
