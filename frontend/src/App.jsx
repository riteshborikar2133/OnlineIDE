import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nopage from './pages/Nopage'
import Signup from './pages/Signup'
import Login from './pages/Login'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Signup />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/login' exact element={<Login />} />

          <Route path='*' element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
