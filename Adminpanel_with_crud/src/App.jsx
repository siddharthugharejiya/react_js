import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from 'react-bootstrap'
import { Navbar_C } from './Componets/Navbar_C'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar_C/>
    </>
  )
}

export default App
