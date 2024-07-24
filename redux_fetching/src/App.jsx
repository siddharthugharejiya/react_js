import { useState } from 'react'
import './App.css'
import Fetching_Data from './Componets/Fetching_Data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Fetching_Data/>
    
    </>
  )
}

export default App
