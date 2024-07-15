import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WithSubnavigation from './components/navbar'
import Home from './pages/Home'
import Footer from './components/footer'
import WIP from './pages/WIP'
import { Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <>
      <WithSubnavigation/>
      
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WIP" element={<WIP />} />
        
      </Routes>
      
      <Footer/>
    </>
  )
}

export default App
