import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Menu from './components/Menu'
import Rodape from './components/Rodape'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu/>
      <Outlet/>
      <Rodape/>
    </>
  )
}

export default App