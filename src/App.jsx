import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WithSubnavigation from './components/navbar'
import Home from './pages/Home'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WithSubnavigation/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
