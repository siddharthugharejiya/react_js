import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firebase_Componets from './Componets/Firebase_Componets'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Firebase_Componets/>
    </>
  )
}

export default App
