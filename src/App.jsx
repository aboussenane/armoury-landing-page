import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WithSubnavigation from './components/navbar'
import Home from './pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WithSubnavigation/>
      <Home/>
    </>
  )
}

export default App
