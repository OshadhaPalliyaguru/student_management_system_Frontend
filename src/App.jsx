import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home'
import NavBAr from './components/NavBAr'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBAr/> 
  <Home/>
 
    </>
  )
}

export default App
